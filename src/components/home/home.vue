<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 15:45:49
 * @LastEditTime : 2020-01-02 16:34:42
 * @LastEditors  : Please set LastEditors
 -->
<template>
    <div class="contain">
        <div class="leftCol">
            <BaseLeftNav></BaseLeftNav> 
        </div>
        <div class="rightCol" id="rightCol">
            <transition :name="transitionName">
                <router-view></router-view>
            </transition>
            
        </div>
        <div class="login">

        </div>
    </div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar';
import http from '../../utils/httpaxios.js'
export default {
    data(){
        return {
            transitionName:'slide-right'
        }
    },
    mounted(){
        const container = document.querySelector('#rightCol');
        const ps = new PerfectScrollbar(container,{
            suppressScrollX:true
        });
    },
    created() {
        let params = {
            "title":"ceshi", "tag":"郭玮", "classify":"123456","content":"123456" 
        }
        http.request('http://localhost:3000/article/add','post',params)
    },
    watch: {
        $route(to,from){
            if(to.meta.index > from.meta.index){
                this.transitionName = 'slide-right'
            }else{
                this.transitionName = 'slide-left'
            }
        }
    },
}
</script>
<style lang="">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>