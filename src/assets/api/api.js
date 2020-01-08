import http from '../../utils/httpaxios.js'
export const article= {
    articleList(params){
        return http.request(`/article/list`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    }
}