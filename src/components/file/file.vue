
<template>
    <div class='timeAxis'>
        <div class="mask"> </div>
             <!-- <hzqing-vue-timeline 
            timelineColor="rgba(0,0,0,0.5)"  
            timeContentColor="#fff"
            :dataList="data"
            ></hzqing-vue-timeline> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            data: [
        {
            time: 1522372393000,
            img: 'static/touxiang.jpeg',
            title: 'hzqing.com',
            content: '这是衡钊清的个人博客'
        },
        {
            time: '2018-03-30 14:36:35',
            img: 'static/one.jpeg',
            title: '这是一个简单的vue时间轴插件',
            content: '这是一个简单的vue时间轴插件，使用非常的方便'
        },
        {
            time: 1522372393000,
            img: 'static/three.jpg',
            title: '努力奋斗',
            content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~'
        }
    ]
        }
    }
}
</script>
<style lang="scss" scoped>
.timeAxis{
    height:100%;
}
@keyframes mask{
        0% {-webkit-mask-position:0px 0px;}
        25% {-webkit-mask-position:619px 0px;}
        50% {-webkit-mask-position:0px 0px;}
        75% {-webkit-mask-position:308px 0px;-webkit-mask-size:100%;}
        100% {-webkit-mask-size:100%;}
     }

    .mask{
        width:700px;
        height:392px;
        position: relative;
        background:black url("http://www.kkkk1000.com/images/1534750163.jpg");
        -webkit-mask-image:url("http://www.kkkk1000.com/images/1534750222.jpg");
        animation:mask 5s linear infinite forwards;
    }
</style>