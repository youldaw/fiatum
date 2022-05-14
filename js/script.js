$(document).ready(function () {
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');

    
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





