$(document).ready(function () {

    //  Slider slick
    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2
    });
    //  /Slider slick

    //  Search input
    $('.search__icon').click(function () {
        let width = $(document).width();
        let input;
        if (width > 2880) {
            input = '350px';
        } else if (width > 1920) {
            input = '250px';
        } else if (width > 1600) {
            input = '200px';
        } else {
            input = '170px';
        }
        $('.search__textInput').css({
            'width':input,
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
    //  /Search input

    //  Portfolio button
    $('#portfolioAll').click(function () {
        $('.portfolio__button').removeClass('portfolio__button--active');
        $(this).addClass('portfolio__button--active');
        $('#worksItem1').css('background-image', 'url(\'img/portfolio/image_01.png\')');
        $('#worksItem2').css('background-image', 'url(\'img/portfolio/image_02.png\')');
        $('#worksItem3').css('background-image', 'url(\'img/portfolio/image_03.png\')');
        $('#worksItem4').css('background-image', 'url(\'img/portfolio/image_04.png\')');
        $('#worksItem5').css('background-image', 'url(\'img/portfolio/image_05.png\')');
        $('#worksItem6').css('background-image', 'url(\'img/portfolio/image_06.png\')');
    });
    $('#portfolioDesign').click(function () {
        $('.portfolio__button').removeClass('portfolio__button--active');
        $(this).addClass('portfolio__button--active');
        $('#worksItem1').css('background-image', 'url(\'img/portfolio/image_01.png\')');
        $('#worksItem2').css('background-image', 'url(\'img/portfolio/image_03.png\')');
        $('#worksItem3').css('background-image', 'url(\'img/portfolio/image_04.png\')');
        $('#worksItem4').css('background-image', 'url(\'img/portfolio/image_05.png\')');
        $('#worksItem5').css('background-image', 'url(\'img/portfolio/image_06.png\')');
        $('#worksItem6').css('background-image', 'url(\'img/portfolio/image_02.png\')');
    });
    $('#portfolioCode').click(function () {
        $('.portfolio__button').removeClass('portfolio__button--active');
        $(this).addClass('portfolio__button--active');
        $('#worksItem1').css('background-image', 'url(\'img/portfolio/image_01.png\')');
        $('#worksItem2').css('background-image', 'url(\'img/portfolio/image_04.png\')');
        $('#worksItem3').css('background-image', 'url(\'img/portfolio/image_05.png\')');
        $('#worksItem4').css('background-image', 'url(\'img/portfolio/image_06.png\')');
        $('#worksItem5').css('background-image', 'url(\'img/portfolio/image_02.png\')');
        $('#worksItem6').css('background-image', 'url(\'img/portfolio/image_03.png\')');
    });
    $('#portfolioPhoto').click(function () {
        $('.portfolio__button').removeClass('portfolio__button--active');
        $(this).addClass('portfolio__button--active');
        $('#worksItem1').css('background-image', 'url(\'img/portfolio/image_01.png\')');
        $('#worksItem2').css('background-image', 'url(\'img/portfolio/image_05.png\')');
        $('#worksItem3').css('background-image', 'url(\'img/portfolio/image_06.png\')');
        $('#worksItem4').css('background-image', 'url(\'img/portfolio/image_02.png\')');
        $('#worksItem5').css('background-image', 'url(\'img/portfolio/image_03.png\')');
        $('#worksItem6').css('background-image', 'url(\'img/portfolio/image_04.png\')');
    });
    $('#portfolioApps').click(function () {
        $('.portfolio__button').removeClass('portfolio__button--active');
        $(this).addClass('portfolio__button--active');
        $('#worksItem1').css('background-image', 'url(\'img/portfolio/image_01.png\')');
        $('#worksItem2').css('background-image', 'url(\'img/portfolio/image_06.png\')');
        $('#worksItem3').css('background-image', 'url(\'img/portfolio/image_02.png\')');
        $('#worksItem4').css('background-image', 'url(\'img/portfolio/image_03.png\')');
        $('#worksItem5').css('background-image', 'url(\'img/portfolio/image_04.png\')');
        $('#worksItem6').css('background-image', 'url(\'img/portfolio/image_05.png\')');
    });
    //  /Portfolio button
});