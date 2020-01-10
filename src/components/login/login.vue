<!--
 * @Author: your name
 * @Date: 2019-09-04 16:13:00
 * @LastEditTime : 2020-01-10 15:07:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人学习e:\blogweb\src\components\login\login.vue
 -->
<template>
    <div class="login_page">
        <div class="login_div">
                <div class="login_form">
                    <label for="account">账号：</label>
                    <input type="text" name="account">
                </div>
                <div class="login_form">
                    <label for="account">密码：</label>
                    <input type="text" name="account">
                </div>
                <div class="login_btns">
                    <div class="login_btn" >
                        登陆
                    </div>
                    <div class="login_btn" @click="visit">
                        游客
                    </div>
                </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        visit(){
            this.$router.push({
                path:'/backStage'
            })
        }
    }
}
</script>
<style >
    
</style>