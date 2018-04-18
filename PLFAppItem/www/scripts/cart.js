$(function () {
    //编辑
    $(".shopTBtn").click(function () {
        var val = $(this).val();
        if (val == "编辑") {
            $(this).val("完成");
            $(this).parents("div.ShopTitle").next().find(".shopInfor").addClass("none").next().removeClass("none");
        } else {
            $(this).val("编辑");
            $(this).parents("div.ShopTitle").next().find(".shopInforEdit").addClass("none").prev().removeClass("none");
        }
    })
    //加减
    //TwoEdit Minus NumTxt Plus
    $(".TwoEdit .Minus").click(function () {
        var val = $(this).next().val();
        var NumTxtNum = parseInt(val);
        var Minus = NumTxtNum - 1;
        if (NumTxtNum > 1) {
            NumTxtNum < 1 ? $(this).next().val(1) : $(this).next().val(Minus);
        }
    })
    $(".TwoEdit .Plus").click(function () {
        var val = $(this).prev().val();
        var NumTxtNum = parseInt(val);
        var Plus = NumTxtNum + 1;
        $(this).prev().val(Plus);
    })
    //checkbox选择
    //单选
    $(".checkTD").click(function () {
        if (!$(this).find("i").hasClass("icon")) {
            $(this).find("i").addClass("icon").next().prop("checked", true);
        } else {
            $(this).find("i").removeClass("icon").next().prop("checked", false);
        }
    })
    //店铺多选
    $(".ShopTitle .fa-check-square-o").click(function () {
        var ThisFind = $(this).parents("div.ShopTitle").next().find(".checkTD");
        if (!$(this).hasClass("icon")) {
            $(this).addClass("icon").next("input[type=checkbox]").prop("checked", true);
            ThisFind.children("i.fa").addClass("icon").next().prop("checked", true);
        } else {
            $(this).removeClass("icon").next("input[type=checkbox]").prop("checked", false);
            ThisFind.children("i.fa").removeClass("icon").next().prop("checked", false);
        }
    })
    //全选
    $(".BtmBoxTab .checkBox").click(function () {
        if (!$(this).find("i.fa").hasClass("icon")) {
            $(this).find("i.fa").addClass("icon").next("input[type=checkbox]").prop("checked", true);
            $(".CartCont").find(".fa-check-square-o").addClass("icon").next("input[type=checkbox]").prop("checked", true);
        } else {
            $(this).find("i.fa").removeClass("icon").next("input[type=checkbox]").prop("checked", false);
            $(".CartCont").find(".fa-check-square-o").removeClass("icon").next("input[type=checkbox]").prop("checked", false);
        }
    })
    //end
})