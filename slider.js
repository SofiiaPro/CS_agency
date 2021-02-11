$(document).ready(function () {
    $('.team-slider').slick({
        autoplay: true,
        autoSpeed: 100,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        centerMode: true,

        responsive: [
            {
                breakpoint: 950,
                settings: {
                    autoplay: true,
                    autoSpeed: 100,
                    dots: true,
                    infinite: true,
                    speed: 400,
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    autoSpeed: 100,
                    dots: true,
                    infinite: true,
                    speed: 400,
                    slidesToShow: 1,
                }
            }
        ]
    });
});

