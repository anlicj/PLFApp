
window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";//第一次打开不要动画
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    //返顶

    var obtn = document.getElementById("GoTop");
    var clientHeight = document.documentElement.clientHeight || ocument.body.clientHeight;
    var isTop = true;
    var timer = null;
    window.onscroll = function () {
        var topH = document.documentElement.scrollTop || document.body.scrollTop;
        if (topH > clientHeight) {
            obtn.style.display = "block";
        } else {
            obtn.style.display = "none";
        }
    }
    obtn.onclick = function () {
        timer = setInterval(function () {
            var topH = document.documentElement.scrollTop || document.body.scrollTop;
            var stepLength = Math.ceil(topH / 5);
            document.documentElement.scrollTop = document.body.scrollTop = topH - stepLength;
            if (topH == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}