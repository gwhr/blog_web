<template>
    <div class='index'>
        <ul>
            <li class='index-li' @click="toArticle">
                <h1>
                    <span class='title'>
                        多边形的音乐动效
                    </span>
                    <span class='time'>
                        2019/03/21/10:17:44
                    </span>
                </h1>
                <div class="content">
                    在调试内核crash问题时打开了lockup相关的kernel CONFIG，重新编译FW后发现有个内核模块insmod失败在调试内核crash问题时打开了lockup相关的kernel CONFIG，重新编译FW后发现有个内核模块insmod失败在调试内核crash问题时打开了lockup相关的kernel CONFIG，重新编译FW后发现有个内核模块insmod失败在调试内核crash问题时打开了lockup相关的kernel CONFIG，重新编译FW后发现有个内核模块insmod失败
                </div>
            </li>
            <li class='index-li'>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toArticle(){
            this.$router.push({
                path:'/article'
            })
        }
    }
}
</script>
<style lang="scss">
    @import '../../assets/style/index.scss';
</style>