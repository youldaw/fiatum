$(document).ready(function () {
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.card-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:100,
        nav:false,
        dots:false,
        center: true,
        smartSpeed:900,
        items:3,
        // navText: ['<img src="images/slide-left-arrow.svg" alt="">','<img src="images/slide-right-arrow.svg" alt="">'],
        responsive:{
            0:{
                items:1,
                margin: 15,
            },
            600:{
                items:2,
                margin: 15,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.crypto-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:100,
        nav:false,
        dots:false,
        center: true,
        smartSpeed:900,
        items:3,
        // navText: ['<img src="images/slide-left-arrow.svg" alt="">','<img src="images/slide-right-arrow.svg" alt="">'],
        responsive:{
            0:{
                items:1,
                margin: 15,
            },
            600:{
                items:2,
                margin: 15,
            },
            1000:{
                items:3,
            }
        }
    });

    
    $('#search-btn').on('click',function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".form-group"); // тут указываем class элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });
    
    $('.detail-btn').on('click',function(e){
        e.preventDefault();
        $('.detail-text').toggleClass('active');
    });
    
    $('.menu-opener').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.collapse').toggleClass('active');
    });

});





