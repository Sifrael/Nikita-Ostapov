let map = new Map();

map.set("Беларусь", "Минск");
map.set("Россия", "Москва");

let ShowList = document.querySelector('.ShowList');
ShowList.addEventListener('click', function(){    
     console.log(map)  
});

let AddList = document.querySelector('.AddList');
AddList.addEventListener('click', function(){   
    let country = prompt('Страна');
    let capital = prompt('Столица');  
    if (country == null || capital == null){
        alert('Введите корректные данные');
    } else {
        map.set(country,capital);
        alert('Информация о стране ' + country + ' добавлена');
    }
     
});

let InfoList = document.querySelector('.InfoList');
InfoList.addEventListener('click', function(){ 
    currentCountry = prompt ('Введите название страны');
    map.get(currentCountry);    
    if (map.get(currentCountry) == undefined) {
        alert('Информация о данной стране отсутсвует');
    }
        else {
        alert('Столица: ' + map.get(currentCountry));
    }
});

let RemoveList = document.querySelector('.RemoveList');
RemoveList.addEventListener('click', function(){ 
    currentCountry = prompt ('Информацию о какой стране вы хотите удалить?');
    map.delete(currentCountry);     
    if (currentCountry === '' || currentCountry == null) {
        alert('Вы не ввели необходимые данные')
    } else {
        alert('Информация о данной стране удалена'); 
    }


       
});

