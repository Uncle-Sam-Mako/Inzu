//For all sliders

//Slider pour les villes (index.html)
let townSlider = $(function(){
    new Splide('#town-slider', {
        perPage: 4,
        //cover: true,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            height: '8rem',
            480: {
                perPage: 1,
                padding: {
                    left : 0,
                    right : '3rem',
                },
            },
            767: {
                perPage: 2,
                padding: {
                    left : 0,
                    right : '3rem',
                },
            },
            992: {
                perPage: 3,
                padding: {
                    left : 0,
                    right : '3rem',
                },
            }
        }
    }).mount();
});

//Slider pour les maisons 
let houseSlider = $(function(){
    new Splide('#house-slider', {
        perPage: 4,
        cover: true,
        arrows: false,
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            height: '8rem',
            767: {
                arrows: true,
                perPage: 1,
                padding: {
                    left : 0,
                    right : '3rem',
                },
            },
            992: {
                perPage: 3,
            }
        }
    }).mount();
});

//Slider pour galerie photos sur chaque houseSlider
let housePhotos_small = $(function(){
    let housePhotos_small = $(".house-photos-slider");
    for(let i=0; i<housePhotos_small.length; i++){
        new Splide( housePhotos_small[i], {
            arrows : true,
            pagination: true,
            type : 'fade'
        } ).mount();
    }
});

//Slider pour grande galerie photos dans house.html
let = housePhotos_main = $(function(){
    new Splide( '#house-picture-slider', {
        type : 'fade'
    }).mount();
});

