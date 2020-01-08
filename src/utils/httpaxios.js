import axios from 'axios';
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