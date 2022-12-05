$(function(){
    // const headerHeight = $('.header').outerHeight();

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() >= headerHeight) {
    //         $('.header').addClass('header__sticky')
    //     } else {
    //         $('.header').removeClass('header__sticky')
    //     }
    // });

    const containerEl = document.querySelector('.portfolio__content');
    let mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
            controls: {
                toggleDefault: 'none'
            },
            classNames: {
                block: '',
                elementFilter: 'portfolio__filter-btn'
            }
        });
    }

    Fancybox.bind("[data-fancybox='gallery']", {
        Toolbar  : false,
        selector : '.swiper-slide:not(.swiper-slide-duplicate)',
        animated: false,
        showClass: false,
        hideClass: false,
        infinite: false,
        closeButton: 'top',
        hideScrollbar: true,
        infinite: false,
        loop: false,
        mainClass: 'products-gallery',
        backFocus : false,
    
        Image: {
            click: 'close',
            wheel: 'slide',
            zoom: false,
            fit: "contain",
        }
    });

   

    // var mixer = mixitup('.portfolio__content');

})