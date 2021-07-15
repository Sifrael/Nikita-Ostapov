$(document).ready(function(){
    
    $('.certificates__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows:$('.nav__button'),
        responsive: [
            {
              breakpoint: 768,
              settings: {                
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {                
                slidesToShow: 1
              }
            }
          ]       
             
        
      });   
    
  
    $('.certificates__slider').on('beforeChange',function(even, slick, currentSlide, nextSlide,){
    $('.nav__number-current').html('0' + (nextSlide + 1));
    }) 

    var slideQuantity = $('.certificates__slider-item').length;  
    $('.nav__number-quantity').html('0' + Math.floor(slideQuantity / 2.5));

    
});