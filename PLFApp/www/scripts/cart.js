(function () {
    'use strict'
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        //编辑
        document.getElementsByClassName("shopTBtn")[0].addEventListener("click", EditButton);
        //单选
        document.getElementsByClassName("checkI")[0].addEventListener("click", AloneCheck);
        //多选
        //全选
        document.getElementById("CheckAll").addEventListener("click", CheckAllBtn);
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
    //单选(还没写完)
    function AloneCheck() {
        var checkTD = document.getElementsByClassName("checkTD");
        for (var i = 0; i < checkTD.length; i++) {
            var alonecheck = checkTD[i].getElementsByClassName("alonecheck");
            var faCheck = checkTD[i].getElementsByClassName("fa-check-square-o");
            for (var j = 0; j < faCheck.length; j++) {
                if (faCheck[j].className == "fa fa-check-square-o mr15 ml20 checkI") {
                    faCheck[j].className = "fa fa-check-square-o mr15 ml20 checkI icon";
                    alonecheck[j].checked = true;
                } else {
                    faCheck[j].className = "fa fa-check-square-o mr15 ml20 checkI";
                    alonecheck[j].checked = false;
                }
            }
        }
    }
    //多选
    //全选
    function CheckAllBtn() {
        var All = document.getElementById("CheckAll");
        var faCheck = document.getElementsByClassName("fa-check-square-o");
        var checkbtn = document.getElementsByClassName("check-btn");
        for (var i = 0; i < faCheck.length; i++) {
            if (All.className == "checkBox p10") {
                All.className = "checkBox p10 hover";
                faCheck[i].classList.add('icon');
                checkbtn[i].checked = true;
            } else {
                All.className = "checkBox p10";
                faCheck[i].classList.remove('icon');
                checkbtn[i].checked = false;
            }
        }
    }
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