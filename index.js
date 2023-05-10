
let search=document.getElementById('btn')
search.addEventListener('click',(e)=>{
    
    getupdatedData()
})

const getupdatedData=async(e)=>{
    
    
    let city=document.getElementById('search').value
    let url=`https://api.weatherapi.com/v1/forecast.json?key=31d53c3765db4ade9a2154656230504&q=${city}&days=14`
   const res=await fetch(url)
   const data=await res.json()
   displayweather(data)
    
}
let productweather=document.getElementById('weatherdata')
const displayweather=(el)=>{
    productweather.innerHTML=""
    let container=document.createElement('div')
    container.classList.add("data")
    let cityname=document.createElement('h1')
     cityname.innerText=el.location.name
     cityname.classList.add('text')
    let statename=document.createElement('p')
    statename.innerText=el.location.region
    let imagep=document.createElement("img")
    imagep.src=el.current.condition.icon
    let temp=document.createElement('h1')
    temp.innerText= el.current.temp_c+` °C`
    let time=document.createElement("p")
    time.innerText=el.location.localtime
    let cloudy=document.createElement('h3')
    cloudy.innerText=el.current.condition.text
    let rain=document.createElement('p')
    rain.innerText=`Rain:`+el.current.cloud+`%`

    
    container.append(cityname,statename,imagep,temp,time,cloudy,rain) 
    productweather.append(container) 
    
    let basic=document.createElement('div')
    basic.classList.add('basic')

}