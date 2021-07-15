$(document).ready(function(){
    $( ".header__burger").click(function() {
      $( ".header__burger" ).toggleClass('activ');
      $( ".header__links" ).toggleClass('activ');
      $( "body" ).toggleClass('activ');
    }); 
      
      $('.footer__content-social-text').click(function(){
        if($(window).width() <= 768 ) {
          $(this).next().slideToggle();
        }      
    });
      $('.footer__content-info_text').click(function(){
        if($(window).width() <= 768 ) {
          $(this).next().slideToggle();
        }
    });  
      $('.footer__content-contact-text').click(function(){
        if($(window).width() <= 768 ) {
          $(this).next().slideToggle();
        }
    });
  
  });
  
    
  
    
  
  
    