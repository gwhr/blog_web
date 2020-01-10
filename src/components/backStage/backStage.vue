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
            <li class="backStage_content" v-for="item in 10">
                <div class="backStage_title">
                    测试标题
                </div>
                <div class="backStage_classify">
                    测试标题
                </div>
                <div class="backStage_tag">
                    测试标题
                </div>
                <div class="backStage_date">
                    测试标题
                </div>
                <div class="backStage_make">
                    <span class="iconfont icon-bianji" @click="toEdit">
                    </span>
                    <span class="iconfont icon-shanchu">
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