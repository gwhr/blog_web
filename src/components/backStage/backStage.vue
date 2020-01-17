<template>
    <div class="classify-card">
        <ul class="backStage_div">
            <li class="backStage_list">
                <div class="backStage_title">标题</div>
                <div class="backStage_classify">分类</div>
                <div class="backStage_tag">标签</div>
                <div class="backStage_date">日期</div>
                <div class="backStage_make">操作</div>
            </li>
            <li class="backStage_content" v-for="item in articleList" :key="item.id">
                <div class="backStage_title">
                    {{item.title}}
                </div>
                <div class="backStage_classify">
                    <span v-if="item.classify == 1">
                        博客
                    </span>
                    <span v-if="item.classify == 2">
                        HTML
                    </span>
                </div>
                <div class="backStage_tag">
                    <span v-if="item.tag == 1">
                        Js
                    </span>
                    <span v-if="item.tag == 2">
                        HTML
                    </span>
                    <span v-if="item.tag == 3">
                        Vue
                    </span>
                    <span v-if="item.tag == 4">
                        Node
                    </span>
                </div>
                <div class="backStage_date">
                    {{timestampToTime(item.createTime)}}
                </div>
                <div class="backStage_make">
                    <span class="iconfont icon-bianji" @click="toEdit(item.id)">
                    </span>
                    <span class="iconfont icon-shanchu" @click="toDelete(item)">
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            articleList:[]
        }
    },
    methods:{
        // 编辑
        toEdit(id){
            this.$router.push({
                name:'edit',
                params:{
                    id
                }
            })
        },
        // 删除
        toDelete(item){
            let params={
                id:item.id
            }
            this.globalApi.api.article.articleDelete(params)
            .then(value=>{
                console.log(value)
                if(value.code == 200){
                    this.getList();
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
            })
        }
    },
    created(){
        this.getList();
    }
}
</script>