import axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://mango-main.herokuapp.com/',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export const api = axios.create({
  baseURL: apiUrl
})