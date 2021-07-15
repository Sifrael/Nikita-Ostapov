$(document).ready(function(){  

  $('.slider__list').slick({
      speed: 500,
      fade: true,
      cssEase: 'linear',
      appendArrows:$('.slider__nav-button'),
      autoplay: true,
      autoplay: 300,
      asNavFor: '.project__name-slider'
  }) 

  $('.slider__list').on('beforeChange',function(even, slick, currentSlide, nextSlide,){
  $('.slider__slide-current').html('0' + (nextSlide + 1));  
  }) 
  
  var slideQuantity = $('.slider__item').length;  
  $('.slider__slide-quantity').html('0' +slideQuantity);

  $('.project__name-slider').slick({
    arrows:false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplay: 300,
    asNavFor: '.slider__list'
  })

  let checkBox = document.querySelector('#contact__checkbox');
  let button = document.querySelector('#contact__button');
  checkBox.addEventListener('change', () => {
  button.disabled = !button.disabled;
  }) 
    

});

  

  


  