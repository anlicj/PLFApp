(function () {
    'use strict'
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady()
    {
        document.getElementById("SPBtn").addEventListener("click", SpendingPackagetanchu);
        document.getElementById("PopClose1").addEventListener("click", PopClose1);
        document.getElementById("ComBtn").addEventListener("click", CommodityPoptanchu);
        document.getElementById("PopClose2").addEventListener("click", PopClose2);
        document.getElementById("SeeYouEva").addEventListener("click", EvaluateBoxtanchu);
        document.getElementById("EvaClose").addEventListener("click", EvaCloseBtn);
        document.getElementsByClassName("SlideTh")[0].addEventListener("click", SlideThBtn1);
        document.getElementsByClassName("SlideTh")[1].addEventListener("click", SlideThBtn2);
        document.getElementsByClassName("SlideTh")[2].addEventListener("click", SlideThBtn3); 
        document.getElementById("CollBtn").addEventListener("click", CollBtnOClear);
    }
    //服务说明弹出或隐藏
    function SpendingPackagetanchu()
    {
        var MoreBac = document.getElementById("MoreBac");
        var ServicePop = document.getElementsByClassName("ServicePop");
        MoreBac.className = "PopBac pf";
        ServicePop[0].className = "ServicePop pf p10";
    }
    function PopClose1() {
        var MoreBac = document.getElementById("MoreBac");
        var ServicePop = document.getElementsByClassName("ServicePop");
        MoreBac.className = "PopBac pf none";
        ServicePop[0].className = "ServicePop pf p10 none";
    }
    //商品类型弹出或隐藏
    function CommodityPoptanchu() {
        var MoreBac = document.getElementById("MoreBac");
        var CommodityPop = document.getElementsByClassName("CommodityPop");
        MoreBac.className = "PopBac pf";
        CommodityPop[0].className = "CommodityPop";
    }
    function PopClose2() {
        var MoreBac = document.getElementById("MoreBac");
        var CommodityPop = document.getElementsByClassName("CommodityPop");
        MoreBac.className = "PopBac pf none";
        CommodityPop[0].className = "CommodityPop none";
    }
    //查看全部评论
    function EvaluateBoxtanchu() {
        var EvaluateBox = document.getElementsByClassName("EvaluateBox");
        EvaluateBox[0].style.left = "0";
    }
    function EvaCloseBtn() {
        var EvaClose = document.getElementById("EvaClose");
        var EvaluateBox = document.getElementsByClassName("EvaluateBox");
        EvaluateBox[0].style.left = "100%";
    }
    //幻灯片导航
    function SlideThBtn1() {
        var SlideTh = document.getElementsByClassName("SlideTh");
        SlideTh[0].className = "p10 tc SlideTh active";
        SlideTh[1].className = "p10 tc SlideTh";
        SlideTh[2].className = "p10 tc SlideTh";
        var scBox = document.getElementsByClassName("scBox");
        scBox[0].className = "scBox TxtImgInfor";
        scBox[1].className = "scBox ProductPars none";
        scBox[2].className = "scBox StoreRecomdt none";
    }
    function SlideThBtn2() {
        var SlideTh = document.getElementsByClassName("SlideTh");
        SlideTh[0].className = "p10 tc SlideTh";
        SlideTh[1].className = "p10 tc SlideTh active";
        SlideTh[2].className = "p10 tc SlideTh";
        var scBox = document.getElementsByClassName("scBox");
        scBox[0].className = "scBox TxtImgInfor none";
        scBox[1].className = "scBox ProductPars";
        scBox[2].className = "scBox StoreRecomdt none";
    }
    function SlideThBtn3() {
        var SlideTh = document.getElementsByClassName("SlideTh");
        SlideTh[0].className = "p10 tc SlideTh";
        SlideTh[1].className = "p10 tc SlideTh";
        SlideTh[2].className = "p10 tc SlideTh active";
        var scBox = document.getElementsByClassName("scBox");
        scBox[0].className = "scBox TxtImgInfor none";
        scBox[1].className = "scBox ProductPars none";
        scBox[2].className = "scBox StoreRecomdt";
    }
    //点击收藏||取消收藏
    function CollBtnOClear() {
        var CollBtn = document.getElementById("CollBtn");
        var CollTxt = document.getElementById("CollTxt");
        if (CollBtn.className == "tc") {
            CollBtn.style.color = "red";
            CollBtn.className = "tc collAction";
            CollTxt.innerText = "店铺已收藏";
            CollTxt.className = "pf tc ctBox";
            setTimeout("CollTxt.className = 'pf tc'", 1000);
        } else {
            CollBtn.style.color = "#999";
            CollBtn.className = "tc";
            CollTxt.innerText = "店铺取消收藏";
            CollTxt.className = "pf tc ctBox";
            setTimeout("CollTxt.className = 'pf tc'", 1000);
        }
    }
})()