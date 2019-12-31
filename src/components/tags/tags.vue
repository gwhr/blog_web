<template>
    <div class="classify-card">
        <ul class="classify-name">
           <li v-for="(item,index) in classify" :key="index" :class="{'active':index == activeIindex}" @click="changeClassify(index)">
               {{item.name}}
           </li>
        </ul>
        <ul class="classify-list">
            <li v-for="(item,index) in classifyList" :key="index" >
                <div>
                    {{item.name}}
                </div>
                <div class="listLine">

                </div>
                <div class="listTime">
                    {{item.time}}
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
    },
    data(){
        return {
            activeIindex:0,
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
        // 分类切换
        changeClassify(index){
            this.activeIindex = index;
        }
    }
}
</script>
<style lang="scss">
</style>