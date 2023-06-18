
const time1 = document.getElementById("time")
const date1 = document.getElementById("date")
const currentweatherItems = document.getElementById("current-weather-items")
const country1 = document.getElementById("country")
const timezone = document.getElementById("time-zone")
const currenttemp = document.getElementById('current-temp')
const weatherforecast = document.getElementById('future-forecast')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'DEC']
const API_KEY = 'f7ac66b82ded70ba13a83b65e68a9974'
setInterval(() => {
    const time = new Date()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes()
    const ampm = hour >= 12 ? "PM" : "AM"
    // time1.innerHTML=(hoursIn12HrFormat< 10 ? "0"+hoursIn12HrFormat:hoursIn12HrFormat)+":"+(minutes<10? "0"+minutes:minutes)+""+` <span id="am-pm">${ampm}</span>`
    time1.innerHTML = moment().format("hh:mm:ss") + `<span id="am-pm"> ${moment().format('A')}</span>`;
    // date1.innerHTML = days[day] + " ," + date + " " + months[month]
    
    date1.innerHTML = moment().format("dddd, DD MMM ")
    
    

}, 1000)
getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

            console.log(data)
            showWeatherData(data)
        })
    })
}

function showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current

    timezone.innerHTML = data.timezone
    country1.innerHTML = data.lat + "N" + data.lon + 'E'

    currentweatherItems.innerHTML = ` <div class="weather-item">
    <div>Humidity</div>
    <div>${humidity}%</div>
</div>
<div class="weather-item">
    <div>Pressure</div>
    <div>${pressure}</div>
</div>
<div class="weather-item">
    <div>Wind speed</div>
    <div class="wind">${wind_speed}</div>
</div>
<div class="weather-item">
    <div>sunrise</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
</div>
<div class="weather-item">
    <div>Sunset </div>
    <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
</div>`;

    let otherDayForcast = ""
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currenttemp.innerHTML = `
        <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" >
        <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
        `
        } else {
            otherDayForcast += `
        <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
        `
        }
    })
    weatherforecast.innerHTML = otherDayForcast
}
