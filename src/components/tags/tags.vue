<!--
 * @Author: your name
 * @Date: 2020-01-20 18:02:10
 * @LastEditTime : 2020-02-07 11:29:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bolg_web\src\components\classify\classify.vue
 -->
<template>
    <div class="classify-card">
        <ul class="classify-name">
           <li v-for="(item,index) in classify" :key="index" :class="{'active':index == activeIindex}" @click="changeClassify(index)">
               {{item.name}}
           </li>
        </ul>
        <ul class="classify-list">
            <li v-for="(item,index) in classifyList" :key="index" @click="toArticle(item.id)">
                <div class="title_name">
                    {{item.title}}
                </div>
                <div class="listLine">

                </div>
                <div class="listTime">
                    {{timestampToTime(item.createTime)}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed:{
        compiledMarkdown: function (val) {
            return this.marked(this.input)
        }
    },
    created() {
        this.getList();
        this.tagList();
    },
    data(){
        return {
            activeIindex:0,
            selectTag:1,
            classify:[
                {
                    name:'web'
                },
                {
                    name:'博客'
                },
                {
                    name:'奇妙的JS'
                },
            ],
            classifyList:[
                {
                    name:'博客探索',
                    time:'2019/03/20/20:50:29'
                },
                {
                    name:'博客探索',
                    time:'2019/03/20/20:50:29'
                },
                {
                    name:'博客探索',
                    time:'2019/03/20/20:50:29'
                },
            ]
        }
    },
    methods:{
        init(){
            this.tagList().then(value=>{
                this.selectTag = this.classify[0].id;
                this.getList();
            })
        },
        toArticle(id){
            this.$router.push({
                name:`article`,
                params:{
                    id
                }
            })
        },
        // 分类切换
        changeClassify(index){
            this.activeIindex = index;
            this.selectTag = this.classify[index].id;
            this.getList();
        },
        // 获取列表
        getList(){
            let params = {
                page:1,
                size:8,
                tags:this.selectTag
            }
            this.globalApi.api.article.articleList(params)
                .then(value=>{
                    this.classifyList = value;
                    this.classifyList.forEach(v=>{
                        v.content = this.marked(v.content)
                    })
                    return
                })
        },
        // 获取标签
        tagList(){
           return this.globalApi.api.article.tagList()
            .then(value=>{
                console.log(value);
               return this.classify = value;
            })
        },
    }
}
</script>
<style lang="scss">
</style>