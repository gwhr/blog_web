<template>
    <div class="edit_div">
        <article class="edit-card">
            <input class="edit-title" type="text" v-model="title">
            <textarea class="edit_content" name="" id="" cols="30" rows="10" v-model = 'input'></textarea>
        </article>
        <article class="edit-card" id="content_card">
            <div class="edit_title">{{title}}</div>
            <div v-html="compiledMarkdown" ></div>
        </article>
        <!-- <textarea name="" id="" cols="100" rows="10" v-model="input" style="width:100%"></textarea> -->
        
        <div class="edit_tags" @click="save('tags')" title="标签" style="z-index:3">
                <i class="iconfont icon-tag"></i>
                <div class="popover" v-if="tagsshow" @click.stop>
                    <div class="tags_list">
                        <span v-for="(item) in tags" :key="item.id" >
                            {{item.name}}
                        </span>
                    </div>
                    
                </div>
                <span class="select_tags">
                    {{selectTags.name}}
                </span>
        </div>
        <div class="edit_classify" @click="save('classify')" title="分类" style="z-index:2">
                <i class="iconfont icon-icon"></i>
                <div class="popover" v-if="classifyshow" @click.stop>
                    <div class="tags_list">
                        <span v-for="(item) in classify" :key="item.id" >
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
        compiledMarkdown: function (val) {
            return this.marked(this.input)
        }
    },
    mounted(){
        const container = document.querySelector('#content_card');
        const pss = new PerfectScrollbar(container,{
            suppressScrollX:true
        });
        this.selectTags = this.tags[0];
        this.selectClassify = this.classify[0];
    },
    created() {
    },
    data(){
        return {
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
            input:'> 我又滚回来了，以后大概也许每周会写一篇博客，就算是一篇水文也行，就像下面要写的这篇，**多边形的音乐动效**，姑且就叫这个名字，就是基于`audio`的`AnalyserNode.getByteTimeDomainData() `API，再结合以前做过的**多变形Demo**做出来的一个小玩意，说实话，最后做出来，感觉效果挺一般的，不够惊艳。'
        }
    },
    methods:{
        save(name){
            
            this[`${name}show`]=!this[`${name}show`];
        },
        close(){
            this.show= false;
        },
        // 获取简介
        getDescribe(){
            
        }
    }
}
</script>
<style lang="scss">
</style>