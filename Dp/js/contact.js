$(document).ready(function(){
    
    $( "#show_popup").click(function() {
        $( ".popup" ).addClass('show');
      }); 

        

    $( ".popup__content-close").click(function() {
      $( ".popup" ).removeClass('show'); 
      $( ".popup__thanks" ).removeClass('show');
    });  

    $( ".button__close-btn").click(function() {
      $( ".popup__thanks" ).removeClass('show'); 
    });
    

    $(document).mouseup(function (e){ 
      var div = $(".popup__thanks-content"); 
      if (!div.is(e.target) 
          && div.has(e.target).length === 0) { 
            $( ".popup__thanks" ).removeClass('show');       
            
      }
    });
      
    $(document).mouseup(function (e){ 
      var div = $(".popup__content"); 
      if (!div.is(e.target) 
          && div.has(e.target).length === 0) { 
            $( ".popup" ).removeClass('show');       
            
      }
    });

    $( ".contact__form" ).submit(function() {
      $( ".popup__thanks" ).addClass('show');
      $( ".popup" ).removeClass('show');
    });


    let checkBox = document.querySelector('#contact__checkbox');
    let button = document.querySelector('#contact__button');
    checkBox.addEventListener('change', () => {
    button.disabled = !button.disabled;
    })
    


});

