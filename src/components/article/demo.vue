<template>
    <div>
        <article class="post-card">
            <div v-html="compiledMarkdown"></div>
        </article>
        <textarea name="" id="" cols="100" rows="10" v-model="input" style="width:100%"></textarea>
    </div>
</template>
<script>
export default {
    computed:{
        compiledMarkdown: function (val) {
            console.log(this.marked(this.input))
            return this.marked(this.input)
        }
    },
    created() {
    },
    data(){
        return {
            input:'> 我又滚回来了，以后大概也许每周会写一篇博客，就算是一篇水文也行，就像下面要写的这篇，**多边形的音乐动效**，姑且就叫这个名字，就是基于`audio`的`AnalyserNode.getByteTimeDomainData() `API，再结合以前做过的**多变形Demo**做出来的一个小玩意，说实话，最后做出来，感觉效果挺一般的，不够惊艳。'
        }
    }
}
</script>
<style lang="scss">
</style>