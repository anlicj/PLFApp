(function () {
    'use strict'
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        document.getElementsByClassName("userClose")[0].addEventListener("click", userClose1);
        document.getElementsByClassName("userClose")[1].addEventListener("click", userClose2);
    }
    //清除输入内容
    function userClose1() {
        var userName = document.getElementsByClassName("userName");
        userName[0].value = "";
        userName[0].focus();
    }
    function userClose2() {
        var userPwd = document.getElementsByClassName("userPwd");
        userPwd[0].value = "";
        userPwd[0].focus();
    }
})()