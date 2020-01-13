<template>
    <div class="edit_div">
        <article class="edit-card">
            <div class="edit_title">{{title}}</div>
            <textarea class="edit_content" name="" id="" cols="30" rows="10" v-model = 'input'></textarea>
        </article>
        <article class="edit-card" id="content_card">
            <div class="edit_title">{{title}}</div>
            <div v-html="compiledMarkdown" ></div>
        </article>
        <!-- <textarea name="" id="" cols="100" rows="10" v-model="input" style="width:100%"></textarea> -->
        
        <span class="edit_tags" @click="save" title="标签">
                <i class="iconfont icon-tag"></i>
        </span>
        <span class="edit_classify" @click="save" title="分类">
                <i class="iconfont icon-icon"></i>
        </span>
        <span class="edit_save" @click="save" title="保存">
                <i class="iconfont icon-baocun"></i>
        </span>
        <transition name="dialog" >
            <div class="dialog" v-if="show">
                <div class="dialog_content">
                    <div class="dialog_button">
                        <span @click="close">关闭</span>
                    </div>
                </div>
            </div>
        </transition>
        
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
    },
    created() {
    },
    data(){
        return {
            show:false,
            title:'萨达萨达',
            input:'> 我又滚回来了，以后大概也许每周会写一篇博客，就算是一篇水文也行，就像下面要写的这篇，**多边形的音乐动效**，姑且就叫这个名字，就是基于`audio`的`AnalyserNode.getByteTimeDomainData() `API，再结合以前做过的**多变形Demo**做出来的一个小玩意，说实话，最后做出来，感觉效果挺一般的，不够惊艳。'
        }
    },
    methods:{
        save(){
            this.show=!this.show;
        },
        close(){
            this.show= false;
        }
    }
}
</script>
<style lang="scss">
</style>