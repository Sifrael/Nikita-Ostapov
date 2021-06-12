"use strict";
    
let anim = document.querySelector('.button');
let lesv = document.querySelector('.lesv');
anim.addEventListener('click',function(){
    anim.classList.toggle('activ');
    lesv.classList.toggle('activ');
})
console.log (anim);