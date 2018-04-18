$(function () {
    //点击叉叉，删除input里的value
    $(".loginInput .fa-times-circle").click(function () {
        var ThisInput = $(this).prev();
        ThisInput.focus();
        $(this).prev().val("");
    })
})