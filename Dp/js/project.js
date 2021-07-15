$(document).ready(function(){
    
    $('.project__slider').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendArrows:$('.nav__button')
        
    })
  
    $('.project__slider').on('beforeChange',function(even, slick, currentSlide, nextSlide,){
    $('.nav__number-current').html('0' + (nextSlide + 1));     
    console.log(currentSlide);
    }) 

    var slideQuantity = $('.project__slider-list').length;  
    $('.nav__number-quantity').html('0' + slideQuantity);

});