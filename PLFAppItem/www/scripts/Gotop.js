
        //返回顶部
        $(document).ready(function () {
            $(window).scroll(function () {
                var scrollHeight = $(document).height();
                var scrollTop = $(window).scrollTop();
                var $windowHeight = $(window).innerHeight();
                scrollTop > 75 ? $(".gotop").fadeIn(200).css("display", "block") : $(".gotop").fadeOut(200);
            });
            $('.backtop').click(function (e) {
                e.preventDefault();
                $('html,body').animate({ scrollTop: 0 });
            });
        });