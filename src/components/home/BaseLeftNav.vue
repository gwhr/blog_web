<template>
    <nav>
        <div class="header-info">
            <div class="header-img">
                <img :src="glogalImg.avatar" alt="">
                <p>陪伴云端</p>
            </div>
            <div class="header-motto">
                自强，自谦，谨言，慎行
            </div>
            <dl class="header-nav">
                <dt>
                    <input type="text" placeholder="搜索">
                </dt>
                <dd v-for="(item,index) in nav" :key='index'>
                    <span @click='toClassify(item.link)'>{{item.tit}}</span>
                </dd>
            </dl>
        </div>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            nav:[
                {
                    tit:'首页',
                    link:'/'
                },
                {
                    tit:'归档',
                    link:'/file'
                },
                {
                    tit:'分类',
                    link:'/'
                },
                {
                    tit:'标签',
                    link:'/'
                },
            ]
        }
    },
    created(){
        console.log(this.glogalImg)
    },
    methods:{
        toClassify(path){
            this.$router.push({
                path
            })
        }
    }
}
</script>