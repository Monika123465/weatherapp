
const time1=document.getElementById("time")
const date1=document.getElementById("date")
const currentweatherItems=document.getElementById("current-weather-items")
const country=document.getElementById("country")
const timezone=document.getElementById("timezone")
const currenttemp=document.getElementById('current-temp')
const weatherforecast=doucment.getElementById('future-forecast')

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','DEC']

setInterval(()=>{
    const time=new Date()
    const month=time.getMonth()
    const date=time.getDate()
    const day=time.getDay()
    const hour=time.getHours()
    const hoursIn12HrFormat=hour >=13 ? hour %12:hour
    const minutes=time.getMinutes()
    const ampm=hour >= 12 ? "PM":"AM"

    time1.innerHTML=(hoursIn12HrFormat< 10 ? "0"+hoursIn12HrFormat:hoursIn12HrFormat)+":"+(minutes<10? "0"+minutes:minutes)+""+` <span id="am-pm">${ampm}</span>`
    date1.innerHTML=days[day]+","+date+""+months[month]
},1000)