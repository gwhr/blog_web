<template>
    <div class='index'>
        <ul>
            <li class='index-li' @click="toArticle(item.id)" v-for="(item,index) in articleList" :key="index">
                <h1>
                    <span class='title'>
                        {{item.title}}
                    </span>
                    <span class='time'>
                        {{timestampToTime(item.createTime)}}
                    </span>
                </h1>
                <div class="content" v-html='item.content'></div>
            </li>
            <li class='index-li'>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            articleList:[]
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        toArticle(id){
            this.$router.push({
                name:`article`,
                params:{
                    id
                }
            })
        },
        // 获取列表
        getList(){
            let params = {
                page:1,
                size:8
            }
            this.globalApi.api.article.articleList(params)
            .then(value=>{
                this.articleList = value;
                this.articleList.forEach(v=>{
                    v.content = this.marked(v.content)
                })
            })
        }
    }
}
</script>
<style lang="scss">
    @import '../../assets/style/index.scss';
</style>