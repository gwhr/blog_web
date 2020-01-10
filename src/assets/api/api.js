import http from '../../utils/httpaxios.js'
export const article= {
    // 文章列表
    articleList(params){
        return http.request(`/article/list`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    },
    // 文章详情
    articleDetails(params){
        return http.request(`/article/details`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    }
}