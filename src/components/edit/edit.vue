<template>
    <div class="edit_div">
        <article class="edit-card">
            <input class="edit-title" type="text" v-model="article.title">
            <textarea class="edit_content" name="" id="" cols="30" rows="10" v-model = 'article.content'></textarea>
        </article>
        <article class="edit-card" id="content_card">
            <div class="edit_title">{{article.title}}</div>
            <div id="compiledMarkdown" v-html="compiledMarkdown" ></div>
        </article>
        <!-- <textarea name="" id="" cols="100" rows="10" v-model="input" style="width:100%"></textarea> -->
        
        <div class="edit_tags" @click.stop="showList('tags')" title="标签" style="z-index:3">
                <i class="iconfont icon-tag"></i>
                <div class="popover" v-if="tagsshow" @click.stop>
                    <div class="tags_list">
                        <span v-for="(item) in tags" :key="item.id" @click="changeTags(item)">
                            {{item.name}}
                        </span>
                    </div>
                </div>
                <span class="select_tags">
                    {{selectTags.name}}
                </span>
        </div>
        <div class="edit_classify" @click.stop="showList('classify')" title="分类" style="z-index:2">
                <i class="iconfont icon-icon"></i>
                <div class="popover" v-if="classifyshow" @click.stop>
                    <div class="tags_list">
                        <span v-for="(item) in classify" :key="item.id" @click="changeClassify(item)">
                            {{item.name}}
                        </span>
                    </div>
                </div>
                <span class="select_tags">
                    {{selectClassify.name}}
                </span>
        </div>
        <div class="edit_save" @click="save" title="保存">
                <i class="iconfont icon-baocun"></i>
        </div>
        
    </div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar';
export default {
    computed:{
        compiledMarkdown (val) {
            return this.marked(this.article.content)
        }
    },
    mounted(){
        const container = document.querySelector('#content_card');
        const pss = new PerfectScrollbar(container,{
            suppressScrollX:true
        });
        this.selectTags = this.tags[0];
        this.selectClassify = this.classify[0];
        let body = document.body;
        body.addEventListener('click',this.changeSHow)
    },
    destroyed() {
        let body = document.body;
        body.removeEventListener('click',this.changeSHow)
    },
    created() {
        this.articleDetails();
    },
    data(){
        return {
            article:{
                content:''
            },
            // 显示的下标
            tagsshow:false,
            classifyshow:false,
            tags:[
                {
                    name:'Js',
                    id:1
                },
                {
                    name:'HTML',
                    id:2
                },
                {
                    name:'Vue',
                    id:3
                },
                {
                    name:'Node',
                    id:4
                },

            ],
            classify:[
                 {
                    name:'博客',
                    id:1
                },
                {
                    name:'HTML',
                    id:2
                },
            ],
            selectTags:{},
            selectClassify:{},
            title:'萨达萨达',
            describe:'',     //描述
        }
    },
    methods:{
        changeSHow(){
            this.tagsshow = false;
            this.classifyshow = false;
        },
        changeTags(item){
            this.selectTags = item;
        },
        changeClassify(item){
            this.selectClassify = item;
        },
        showList(name){
            
            this[`${name}show`]=!this[`${name}show`];
        },
        // 保存
        save(){
            this.getDescribe();
            let id = this.$route.params.id;
            let params = {
                title:this.article.title,
                tag:this.selectTags.id,
                classify:this.selectClassify.id,
                content:this.article.content,
                describe:this.describe,
                id
            }
            this.globalApi.api.article.articleAdd(params)
            .then(value=>{
                if(value.code == 200){
                    this.$router.go(-1)
                }
            })
        },
        // 获取简介
        getDescribe(){
            let compiledMarkdown = document.getElementById('compiledMarkdown');
            this.describe = compiledMarkdown.getElementsByTagName('blockquote')[0].outerHTML;

        },
        articleDetails(){
            let params = {
                id:this.$route.params.id
            }
            this.globalApi.api.article.articleDetails(params)
            .then(value=>{
                this.article = value;
            })
        }
    }
}
</script>
<style lang="scss">
</style>