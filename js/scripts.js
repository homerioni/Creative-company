$(document).ready(function () {

    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2
    });

    $('.search__icon').click(function () {
        $('.search__textInput').css({
            'width':'350px',
            'opacity':'1'
        });
        $('.search__icon').css('display', 'none');
    });

    $('.search__textInput').focusout(function () {
        $('.search__textInput').css({
            'width':'0',
            'opacity':'0'
        });
        $('.search__icon').css('display', 'block');
    });

});