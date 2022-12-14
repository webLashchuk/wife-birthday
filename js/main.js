$(function () {
    var elem = document.querySelector('.portfolio__content');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.portfolio__item',
        columnWidth: 15,
        selActive: false
    });

    var $grid = $('.portfolio__content').isotope({
        // options
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.portfolio__item'
        }
    });

    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    $('.portfolio__filter-btn').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    var buttonGroups = document.querySelectorAll('.portfolio__filter-btn');
    for (var i = 0; i < buttonGroups.length; i++) {
        buttonGroups[i].addEventListener('click', onButtonGroupClick);
    }

    function onButtonGroupClick(event) {
        // only button clicks
        if (!matchesSelector(event.target, '.portfolio__btn')) {
            return;
        }
        var button = event.target;
        button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
    }


})