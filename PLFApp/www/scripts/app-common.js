(function () {
    'use strict'
    angular.module('app-common', [])
        .constant('webConfig', {
            serverUrl: "http://localhost:56325/",
            accessTokenKey: "access_token",
            refreshTokenKey: "refresh_token",
            authTimeKey: "auth_time",
            expiresAtKey: "expires_at"

        })
        .constant('httpMethod', {
            get: 'get',
            post: 'post'
        })
        .value('reconnectionCount', 0)
        .service('errorHandler', function ($location) {
            this.execute = function (errorInfo) {
                errorInfo = errorInfo || "请求出错了";
                var thisHost = ($location.protocol() + "://" + location.host).toLowerCase();
                var thisFullUrl = $location.absUrl().toLowerCase();
                var parameter = thisFullUrl.substring(thisHost.length);
                var url = thisHost+'/error.html';
                location.replace(url + "?returnUrl=" + parameter + "&errorInfo=" + errorInfo);
            }
        })
        .service('$authHttp', function ($http, $location,webConfig, httpMethod, errorHandler) {
            var _this = this;
            var sessionDb = window.sessionStorage;
            function thenHandle(_httMethod, _url, _data, _config) {
                this.httpHandle = _httMethod;
                this.url = _url;
                this.data = _data || {};
                this.config = _config || {};                
                this.then = function (_successCallback, _errorCallback) {
                    this.config.headers = this.config.headers || {};
                    var access_token = sessionDb.getItem(webConfig.accessTokenKey);
                    var expires_at = sessionDb.getItem(webConfig.expiresAtKey);                  
                    if (access_token) {
                        if (expires_at && expires_at > (new Date().getTime() / 1000)) {
                            this.config.headers = {
                                "Authorization": "Bearer " + sessionDb.getItem(webConfig.accessTokenKey)
                            };
                            $http.get(this.url, this.config).then(_successCallback, _errorCallback);
                        } else if (sessionDb.getItem(webConfig.refreshTokenKey)) {
                            refreshTokenHandle.call(this, function (res) {                                
                                this.config.headers = {
                                    "Authorization": "Bearer " + sessionDb.getItem(webConfig.accessTokenKey)
                                };
                                _httMethod = _httMethod.toLowerCase();
                                switch (_httMethod) {
                                    case httpMethod.get:
                                        $http.get(this.url, this.config).then(_successCallback, _errorCallback);
                                        break;
                                    case httpMethod.post:
                                        $http.post(this.url, this.data, this.config).then(_successCallback, _errorCallback);
                                        break;
                                    default:
                                        throw new Error('httMethod is not exists');
                                        break;
                                };
                            }, function (res) {
                                errorHandler.execute();
                            });
                        }
                    } else {
                        var thisHost = ($location.protocol() + "://" + location.host).toLowerCase();
                        var thisFullUrl = $location.absUrl().toLowerCase();
                        var parameter = thisFullUrl.substring(thisHost.length);
                        var loginUrl = thisHost + "/login.html?returnUrl=" + parameter;
                        location.replace(loginUrl);
                    }
                }
            };
            function refreshTokenHandle(_successCallback, _errorCallback) {
                var _refreshToken = sessionDb.getItem(webConfig.refreshTokenKey);
                if (!_refreshToken) {
                    throw new Error('refresh token is undefined');
                }
                var _this = this;
                $http.post(webConfig.serverUrl + 'api/Member/RefreshToken',
                    { refreshToken: _refreshToken })
                    .then(function (response) {
                        if (response.data) {
                            sessionDb.setItem(webConfig.accessTokenKey, response.data.access_token);
                            sessionDb.setItem(webConfig.refreshTokenKey, response.data.profile.refresh_token);
                            sessionDb.setItem(webConfig.authTimeKey, response.data.profile.auth_time);
                            sessionDb.setItem(webConfig.expiresAtKey, response.data.profile.expires_at);
                            _successCallback.call(_this,response);
                        } else {
                            _errorCallback.call(_this,response);
                        }
                    }, function (response) {
                        _errorCallback.call(_this,response);
                    });
            };
            _this.get = function (url) {              
                return new thenHandle(httpMethod.get, url, {}, {});
            };          
            _this.get = function (url, config) {
                return new thenHandle(httpMethod.get, url, {}, config);
            };
            _this.post = function (url) {
                return new thenHandle(httpMethod.post, url, {}, {});
            };
            _this.post = function (url, data) {
                return new thenHandle(httpMethod.post, url, data, {});
            };
            _this.post = function (url, data, config) {
                return new thenHandle(httpMethod.post, url, data, config);
            };           
        });
})()