<!--
 * @Author: your name
 * @Date: 2019-09-04 16:13:00
 * @LastEditTime : 2020-01-17 15:48:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人学习e:\blogweb\src\components\login\login.vue
 -->
<template>
    <div class="login_page">
        <div class="login_div">
                <div class="login_form">
                    <label for="account">账号：</label>
                    <input type="text" name="account" v-model="name">
                </div>
                <div class="login_form">
                    <label for="password">密码：</label>
                    <input type="text" name="password" v-model="password">
                </div>
                <div class="login_btns">
                    <div class="login_btn" @click="login">
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
            name:'',
            password:''
        }
    },
    methods:{
        visit(){
            this.$router.push({
                path:'/backStage'
            })
        },
        login(){
            let params = {
                name:this.name,
                password:this.password
            }
            this.globalApi.api.login.login(params)
            .then(value=>{
                console.log(value)
                let token = value.data;
                this.storeSession.save('token',token)
                this.$router.push({
                    path:'/backStage'
                })
            })
        }
    }
}
</script>
<style >
    
</style>