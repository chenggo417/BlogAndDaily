import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const request = {
  post: (url: string, data?: any) => {
    return axiosInstance.post(url, data)
      .then(res => res.data)
  },
  get: (url: string) => {
    return axiosInstance.get(url)
      .then(res => res.data)
  }
}

export default request
