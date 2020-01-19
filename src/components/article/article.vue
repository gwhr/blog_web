<template>
    <div>
        <article class="post-card">
            <div class="article_title">
                {{article.title}}
            </div>
            <div class="article_time">
                <span>
                    {{timestampToTime(article.createTime)}}
                </span>
                <div class="article_classify">
                    <span>
                        {{article.classify}}
                    </span>
                    <span>
                        {{article.tag}}
                    </span>
                      
                </div>
            </div>
            <div v-if="article.content" v-html="marked(article.content)"></div>
        </article>
    </div>
</template>
<script>
export default {
    created() {
        this.articleDetails();
        this.tagList();
        this.classifyList();
    },
    data(){
        return {
            article:'',
        }
    },
    methods:{
        // 文章详情
        articleDetails(){
            let params = {
                id:this.$route.params.id
            }
            this.globalApi.api.article.articleDetails(params)
            .then(value=>{
                console.log(value)
                this.article = value;
            })
        },
        // 获取tag列表
        tagList(){
            this.globalApi.api.article.tagList()
            .then(value=>{
                console.log(value)
            })
        },
        // 获取classify列表
        classifyList(){
            this.globalApi.api.article.classifyList()
            .then(value=>{
                console.log(value)
            })
        },
    }
}
</script>
<style lang="scss">
</style>