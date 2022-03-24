$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })
})

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('.scroll-top').show();
    } else {
        $('.scroll-top').hide();
    }

    $('section').each(function() {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let top = $(window).scrollTop();

        if (top > offset && top < offset + height) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href ="#${id}"]`).addClass('active');
        }
    });

})

// slider
$('.js-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});