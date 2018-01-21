import axios from 'axios'
import localforage from 'localforage'

const http = axios.create({
  baseURL: 'http://localhost:1234'
})

const interceptRequest = async (config) => {
  const token = await localforage.getItem('token')
  config.headers.common['x-access-token'] = token
  return config
}

const interceptRequestError = (error) => {
  Promise.reject(error)
}

const interceptResponse = (response) => {
  return response
}

const interceptResponseError = (error) => {
  console.log(error)
  Promise.reject(error)
}

http.interceptors.request.use(interceptRequest, interceptRequestError)

http.interceptors.response.use(interceptResponse, interceptResponseError)

export default http
