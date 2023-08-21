//check exist or not jQuery
if (typeof jQuery != "function") {
    throw Error("You Need jQuery to work with this Plugin");
}
(function($) {
    $.fn.carlight = function (options) {
        const settings = $.extend({
            width: 300,
            height: 150,
            loop: true,
            slideToShow: 3,
            dots: true,
            navArrow: true,
            autoPlay: false,
            speed: 2000,

        }, options);

        const mainEle = $(this);
        const arrow = `<div class="navcontainer"><button class="prev"><</button><button class="next"> ></button></div>`;
        const sdots = `<li class="dots"></li>`
        const sdotMul = '<div class="navdots"></div>';

        let loop;

        const imgLength = $('img', this);

        switch(settings.slideToShow) {
            case 1:
                $(this).css({
                    width: settings.width,
                });
                $('.container').css({
                    maxWidth: settings.width,
                })
              break;
            case 2:
                $(this).css({
                    width: settings.width * 2,
                });
                $('.container').css({
                    maxWidth: settings.width * 2,
                })
              break;
            case 3:
                $(this).css({
                    width: settings.width * 3,
                })
                $('.container').css({
                    maxWidth: settings.width * 3,
                })
                break;
            case 4:
                $(this).css({
                    width: settings.width * 4,
                })
                $('.container').css({
                    maxWidth: settings.width * 4,
                })
                break;
            case 5:
                $(this).css({
                    width: settings.width * 5,
                })
                $('.container').css({
                    maxWidth: settings.width * 5,
                })
                break;
            default:
                $(this).css({
                    width: settings.width * 6,
                })
                $('.container').css({
                    maxWidth: settings.width * 6,
                })
        }
        if(!settings.dots) {
            sdots = '';
        }
        if(!settings.navArrow) {
           arrow = "";
        }

        const DOM = `${arrow} ${sdotMul}`;
        const images = Array.from(imgLength);
        console.log(images[2])
        $('.container').append(DOM);

        for(var i = 0; i < imgLength.length; i++) {
            $('.navdots').append(sdots)
        }


        const li = document.querySelectorAll('.navdots li');
        li[0].classList.add('active');
        for(var i = 0; i < li.length; i++) {
            clickLi(i);
        }
        function clickLi (i) {
            li[i].addEventListener("click", function() {
                $('.active').removeClass('active');
                this.classList.add('active');
                $(mainEle).animate({
                    marginLeft: `-${settings.width * i}`,
                    width: `+=${settings.width * i}`
                });
            })
        }


    }
})(jQuery);
