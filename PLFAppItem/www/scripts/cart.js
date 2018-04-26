(function () {
    'use strict'
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        //编辑
        document.getElementsByClassName("shopTBtn")[0].addEventListener("click", EditButton);
        //单选
        document.getElementsByClassName("alonecheck")[0].addEventListener("click", AloneCheck);
        //多选
        //全选
        //加减
    }
    //编辑 
    function EditButton() {
        var shopBtn = document.getElementsByClassName("shopTBtn");
        var tab = document.getElementsByClassName("ShopbundleTab");
        for (var i = 0; i < shopBtn.length; i++) {
            if (shopBtn[i].value == "编辑") {
                shopBtn[i].value = "完成";
                for (var j = 0; j < tab.length; j++) {
                    var tr = tab[j].getElementsByClassName("ShopbundleTr");
                    for (var m = 0; m < tr.length; m++) {
                        var shopInfor = tr[m].getElementsByClassName("shopInfor");
                        var shopInforEdit = tr[m].getElementsByClassName("shopInforEdit");
                        for (var n = 0; n < shopInfor.length; n++) {
                            shopInfor[n].className = "shopInfor none";
                        }
                        for (var n = 0; n < shopInforEdit.length; n++) {
                            shopInforEdit[n].className = "shopInforEdit pr";
                        }
                    }
                }
            } else {
                shopBtn[i].value = "编辑";
                for (var j = 0; j < tab.length; j++) {
                    var tr = tab[j].getElementsByClassName("ShopbundleTr");
                    for (var m = 0; m < tr.length; m++) {
                        var shopInfor = tr[m].getElementsByClassName("shopInfor");
                        var shopInforEdit = tr[m].getElementsByClassName("shopInforEdit");
                        for (var n = 0; n < shopInfor.length; n++) {
                            shopInfor[n].className = "shopInfor";
                        }
                        for (var n = 0; n < shopInforEdit.length; n++) {
                            shopInforEdit[n].className = "shopInforEdit pr none";
                        }
                    }
                }
            }
        } 
    }
    //单选
    function AloneCheck() {
        var checkTD = document.getElementsByClassName("checkTD");
        for (var i = 0; i < checkTD.length; i++) {
            var alonecheck = checkTD[i].getElementsByClassName("alonecheck");
            for (var j = 0; j < alonecheck.length; j++) {
                alonecheck[j].checked = true;
            }
        }
    }
    //多选
    //全选
    //加减
    //function Arithmetic() {
    //    var CartShopList = document.getElementById('CartShopList');//全部内容
    //    var Shopbundle = CartShopList.getElementsByClassName('Shopbundle');//全部内容->商店表单
    //    for (var i = 0; i < Shopbundle.length; i++) {
    //        var ShopbundleTr = Shopbundle[i].getElementsByClassName('ShopbundleTr');//全部内容->商店表单->tr单个商品内容
    //        for (var j = 0; j < ShopbundleTr.length; j++) {
    //            var Minus = ShopbundleTr[j].getElementsByClassName('Minus');
    //            var NumTxt = parseInt(ShopbundleTr[j].getElementsByClassName('NumTxt')[0].value);
    //            var Plus = ShopbundleTr[j].getElementsByClassName('Plus');

    //        }
    //    }
    //}
})()