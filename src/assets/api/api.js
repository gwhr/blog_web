import http from '../../utils/httpaxios.js'
export const article= {
    // 文章列表
    articleList(params){
        return http.request(`/article/list/get`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    },
    // 文章详情
    articleDetails(params){
        return http.request(`/article/details/get`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    },
    // 保存文章
    articleAdd(params){
        return http.request(`/article/add`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data
            }
        })
    },
    // 更新文章
    articleUpdate(params){
        return http.request(`/article/update`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data
            }
        })
    },
    // 删除文章
    articleDelete(params){
        return http.request(`/article/delete`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data
            }
        })
    },
    // 获取标签列表
    tagList(){
        return http.request(`/tag/get`, 'post').then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    },
    // 获取分类列表
    classifyList(){
        return http.request(`/classify/get`, 'post').then(value=>{
            if(value.data.code == 200){
                return value.data.data
            }
        })
    },
}
export const login = {
    login(params){
        return http.request(`/login`, 'post',params).then(value=>{
            if(value.data.code == 200){
                return value.data
            }
        })
    },
}