const WEATHER_API_KEY = "63e0590a8d9d7db5989bcc97dafa760c"
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?"

const zipUrl = zip => {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`
}

const fetchForecast = zip => {
  return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON => ({
      main: responseJSON.weather[0].main,
      description: responseJSON.weather[0].description,
      temp: responseJSON.main.temp,
    }))
    .catch(error => {
      console.error(error)
    })
}

export default { fetchForecast }