import axios from 'axios'

const baseUrl = "https://api.darksky.net/forecast/"
const KEY = "718201ff2a6426c19e11417b79788fa7"
// const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const baseUrl2 = "https://api.opencagedata.com/geocode/v1/json?q="
const proxy2 = "https://cors.eu.org/"

const API_KEY = '76e651ae07604741a57ff35c973bfa29'


export const fetchWeather = async (coordinates) => {
  try {
    const response = await axios.get(`${proxy2}${baseUrl}${KEY}/${coordinates}?exclude=minutely,flags,offset`)
    return response.data
  } catch (ex) {
    console.log(ex)
    return undefined
  }
}

export const getCoordinates = async (string) => {
  const response = await axios.get(`${baseUrl2}${string}&key=${API_KEY}&language=en&pretty=1`)
  let coordinates = Object.values(response.data.results[0].geometry).join()
  return coordinates
}

export const getDetails = async (string) => {
  const response = await axios.get(`${baseUrl2}${string}&key=${API_KEY}&language=en&pretty=1`)
  return response
}


