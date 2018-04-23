(function () {
    //幻灯片切换
    $(".SlideNav .table th").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".SlideCont .scBox").slice(index, index + 1).removeClass("none").siblings().addClass("none");
    });
    ////花费套餐，点击弹出
    var SPBtn = document.getElementById("SPBtn");
    var PopBac = document.getElementsByClassName("PopBac");
    var ServicePop = document.getElementsByClassName("ServicePop");
    SPBtn.onclick = function () {
        if (PopBac.style.display = "none") {
            PopBac.style.display = "block"
        }
    };
    ////商品类型，点击弹出
    //$("#CTBtn").click(function () {
    //    $(".PopBac,.CommodityPop").removeClass("none");
    //});
    //$(".PopBac,.PopClose").click(function () {
    //    $(".PopBac,.ServicePop,.CommodityPop").addClass("none");
    //});
    ////查看评价
    //$("#SeeYouEva").click(function () {
    //    $(".EvaluateBox").animate({ "left":"0"});
    //});
    //$(".EvaClose").click(function () {
    //    $(".EvaluateBox").animate({ "left":"100%"});
    //})
    ////查看评论选择
    //$(".EvaluateBox .EbClass .RatesTag").click(function () {
    //    $(this).addClass("Cur").siblings().removeClass("Cur");
    //})
    ////收藏
    //$(".CollBtn").click(function () {
    //    if (!$(".CollBtn .fa").hasClass("collCor")) {
    //        $(".CollBtn .fa").addClass("collCor");
    //        $("#CollTxt").addClass("ctBox").text("店铺收藏成功");
    //        setTimeout(function () {
    //            $("#CollTxt").removeClass("ctBox")
    //        }, 1000);
    //    } else {
    //        $(".CollBtn .fa").removeClass("collCor");
    //        $("#CollTxt").addClass("ctBox").text("店铺取消收藏");
    //        setTimeout(function () {
    //            $("#CollTxt").removeClass("ctBox")
    //        }, 1000);
    //    }
    //})
})