"use strict"
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false
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
        ]
      });
    $('.footer__help-title').click(function(){
        $(this).toggleClass('activ').next().slideToggle(300) ;       
    });
    $('.footer__about-title').click(function(){
        $(this).toggleClass('activ').next().slideToggle(300) ;       
    });
    $('.footer__services-title').click(function(){
        $(this).toggleClass('activ').next().slideToggle(300) ;       
    });      
});
    
