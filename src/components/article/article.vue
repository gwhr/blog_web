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
            <div v-html="article.content"></div>
        </article>
    </div>
</template>
<script>
export default {
    computed:{
        // article: function (val) {
        //     console.log(this.marked(this.input))
        //     return this.marked(this.input)
        // }
    },
    created() {
        this.articleDetails();
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
        }
    }
}
</script>
<style lang="scss">
</style>