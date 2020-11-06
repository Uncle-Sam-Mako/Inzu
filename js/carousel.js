//For all sliders

//index.html

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#town-slider', {
        perPage: 4,
        cover: true,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            height: '8rem',
            767: {
                perPage: 2,
            },
            992: {
                perPage: 3,
            }
        }
    }).mount();

    new Splide('#last-houses-slider', {
        perPage: 4,
        cover: true,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            height: '8rem',
            767: {
                perPage: 1,
            },
            992: {
                perPage: 2,
            }
        }
    }).mount();
});
document.addEventListener( 'DOMContentLoaded', function () {
    let houseSlider_1 = document.getElementsByClassName("house-image-slider");
    for(let i=0; i<houseSlider_1.length; i++){
        new Splide( houseSlider_1[i], {
            arrows : false,
            type : 'fade'
        } ).mount();
    }
});
