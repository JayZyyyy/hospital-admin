import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:5173/api/', //请求后端数据的基本地址，自定义
  timeout: 5000 //请求超时设置，单位ms
})

export default service
