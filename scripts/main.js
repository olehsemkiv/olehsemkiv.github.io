$(document).ready(function () {
    $('.brands__box-mobile').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 560,
            settings: {
                slidesToShow: 1
            }
        }]
    })
    let check = true;
    $('.burger-btn').on('click', () => {
        // console.log('fdsfds');
        if (check) {
            $('.header__menu-mobile').animate({
                top: 0
            })
            check = false;
        } else {
            $('.header__menu-mobile').animate({
                top: '-150%'
            })
            check = true;
        }
    })
})