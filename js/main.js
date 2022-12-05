$(function(){
    const headerHeight = $('.header').outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= headerHeight) {
            $('.header').addClass('header__sticky')
        } else {
            $('.header').removeClass('header__sticky')
        }
    });

    var mixer = mixitup('.portfolio__content');
})