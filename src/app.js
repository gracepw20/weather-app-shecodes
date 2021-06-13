function displayTemperature(response) {
let temperatureElement = document.querySelector("#current-temp")
temperatureElement.innerHTML = Math.round(response.data.main.temp)
let cityElement = document.querySelector("#current-city")
cityElement.innerHTML = response.data.name;
let descriptionElement = document.querySelector("#current-desc")
descriptionElement.innerHTML = response.data.weather[0].description
let humidity = document.querySelector("#humidity")
humidity.innerHTML = response.data.main.humidity
let wind = document.querySelector("#wind")
wind.innerHTML = Math.round(response.data.main.wind.speed)
}


let apiKey = "f94c6d984db626b788cf81becaec5145"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature)