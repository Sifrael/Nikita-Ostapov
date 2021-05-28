const el = document.querySelector ('.burger');
const el_2 = document.querySelector ('.content__left');
const el_3 = document.querySelector ('.content__right');

el.addEventListener('click',function () {
    el.classList.toggle("activ");
    el_2.classList.toggle("activ");
    el_3.classList.toggle("activ");

})

    
