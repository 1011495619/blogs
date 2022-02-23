import axios from 'axios';
import nprogress from 'nprogress'
import "nprogress/nprogress.css"



const instance = axios.create({
  baseURL: 'http://127.0.0.1:888/api/',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  nprogress.start();
  console.log(config);
  return config
}, error => {
  console.log(error);
  return Promise.reject();
})

instance.interceptors.response.use(function (response) {

  nprogress.done()

  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance