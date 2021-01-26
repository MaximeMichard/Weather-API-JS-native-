
const city = document.querySelector('.city');
const img= document.querySelector('.image');


get('https://www.prevision-meteo.ch/services/json/paris').then(function(data){ 
    city.textContent = data.city_info.name
    console.log(data)
   img.src= data.current_condition.icon
})

