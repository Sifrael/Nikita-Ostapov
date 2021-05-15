$(document).ready(function(){
    $('.Homework__number').click(function(){
        $(this).toggleClass('activ').next().slideToggle(300) ;       
    });

})