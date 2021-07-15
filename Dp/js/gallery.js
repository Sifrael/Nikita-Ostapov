$(document).ready(function(){
    
    $('.gallery__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows:$('.gallery__list-button'),
        swipe: false       
        
      });   
    
  
    $('.gallery__slider').on('beforeChange',function(even, slick, currentSlide, nextSlide,){
    $('.gallery__list-number-current').html('0' + (nextSlide + 1));
    }) 

    var slideQuantity = $('.gallery__items').length;  
    $('.gallery__list-number-quantity').html('0' +slideQuantity);

    
});

    lightGallery(document.querySelector('.gallery__items'));
    lightGallery(document.querySelector('.items-gallery'));
    