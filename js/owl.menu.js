$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    stagePadding: 80,
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2,
            stagePadding: 10,
        },
        500:{
            items:3,
            stagePadding: 10,
        },
        1000:{
            items:4,
            stagePadding: 30,
        },
        1500:{
            items:5,
            stagePadding: 30,
        }
    }
})

