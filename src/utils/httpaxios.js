import axios from 'axios';
// 拦截器
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token') ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization ="Bearer " +JSON.parse(sessionStorage.getItem('token')) //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
export default{
    request(url,method,data={}){
        let options = {
            url,
            method,
            baseURL: 'http://localhost:3000/'
        }
        if(method == 'get' || method == 'delete' ){
            options.params = {data}
        }
        if(method !== 'get' || method !== 'delete' ){
            options.data = data;
        }
        return axios(options).then(res => {
          return res
        }).catch( (error)=> {
            return error
        });
    }
}