<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 22:04:13
 * @LastEditTime: 2019-09-10 15:37:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view/>
    <div class="bgImg">
      <!-- <img :src="glogalImg.bg" alt="" > -->
    </div>
    <div class="opening" id="opening"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        message:"不忘初心，方得始终",
    }
  },
  mounted(){
    this.opening()
  },
  methods:{
    opening(){
      let index = 0;
      let text = document.getElementById('opening');
      let messageLength = this.message;
      let tips =   setInterval(() => {
          text.innerHTML = messageLength.substring(0,index++);
          if(index == messageLength.length+1){
            setTimeout(() => {
              text.classList.add('openingMove');
              clearInterval(tips)
            }, 1000);
          }
      }, 200);
      
    }
  }
}
</script>

<style lang="scss">

</style>
