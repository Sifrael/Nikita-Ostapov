const name = prompt('Введите своё имя');
const surname = prompt('Введите свою фамилию');
const patronymic = prompt('Введите своё отчество');
const currentAge = prompt('Сколько вам лет');
const gender = confirm('Вы мужчина?');


let genderCurrent;
let currentAgeInDay = (currentAge * 365) + (currentAge / 4);
let ageAfterFiveYears = (+currentAge + 5);
let pension;


(gender == true && currentAge >= 62) ? pension = 'Да' : (gender == false && currentAge >= 57) ? pension = 'Да' :  pension = 'Нет'; 
    

(gender == true) ? genderCurrent = 'мужской' : genderCurrent = 'женский';

alert(`Ваше ФИО: ${surname} ${name} ${patronymic} \n` +
    `Ваш возраст в годах: ${currentAge} \n` +
    `Ваш возраст в днях: ${currentAgeInDay} \n` +
    `Через 5 лет вам будет: ${ageAfterFiveYears} \n` +
    `Ваш пол: ${genderCurrent} \n` +
    `Вы на пенсии: ${pension}`)    
  
