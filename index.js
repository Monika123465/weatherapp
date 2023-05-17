
// let search=document.getElementById('btn')
// search.addEventListener('click',(e)=>{
    
//     getupdatedData()
// })

// const getupdatedData=async(e)=>{
    
    
//     let city=document.getElementById('search').value
//     let url=`https://api.weatherapi.com/v1/forecast.json?key=31d53c3765db4ade9a2154656230504&q=${city}&days=14`
//    const res=await fetch(url)
//    const data=await res.json()
//    displayweather(data)
    
// }
// let dataimg=[
//     'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png',
//     'https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O9jfQp7bKHkBIohhAWcF8ARpg59NMTAdTg&usqp=CAU',
//     'https://cdn-icons-png.flaticon.com/512/4150/4150897.png'
    
// ]
// console.log(dataimg)



// let productweather=document.getElementById('weatherdata')
// const displayweather=(el)=>{
//     productweather.innerHTML=""
//     let container=document.createElement('div')
//     container.classList.add("data")
//     let cityname=document.createElement('h1')
//      cityname.innerText=el.location.name
//      cityname.classList.add('text')
//     let statename=document.createElement('p')
//     statename.innerText=el.location.region

    
    
//     let temp=document.createElement('h1')
//     temp.innerText= el.current.temp_c+` °C`
//     let time=document.createElement("p")
//     time.innerText=el.location.localtime
//     let cloudy=document.createElement('h3')
//     cloudy.innerText=el.current.condition.text
//     let rain=document.createElement('p')
//     rain.innerText=`Rain:`+el.current.cloud+`%`

    
//     container.append(cityname,statename,temp,time,cloudy,rain) 
//     productweather.append(container) 
    
//     let basic=document.createElement('div')
//     basic.classList.add('basic')

// }