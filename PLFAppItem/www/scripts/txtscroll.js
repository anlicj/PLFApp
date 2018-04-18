//	    新闻列表滚动
function timer(opj) {
    $(opj).find('ul').animate({
        marginTop: "-45px"
    }, 500, function () {
        $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
    })
}
$(function () {
    var time = setInterval('timer(".apple")', 4000);//新闻列表滚动
    var mit = setInterval('timer(".maquee")', 3000);//中奖名单-停顿滚动
    $('.apple ul').find('li').mousemove(function () {
        clearInterval(time);
    }).mouseout(function () {
        time = setInterval('timer(".apple")', 3000);
    });
});

//      中奖名单-无缝滚动
$(function () {
    var listPanel = $('.activity ul');
    var nubcers = 0;//向上滚动top值
    function up() {//向上滚动
        listPanel.animate({//中奖结果
            'top': (nubcers - 35) + 'px'
        }, 1500, 'linear', function () {
            listPanel.css({ 'top': '0px' })
                .find("li:first").appendTo(listPanel);
            up();
        });
    }
    up();
});