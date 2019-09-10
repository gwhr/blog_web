/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 22:04:13
 * @LastEditTime: 2019-09-10 13:43:42
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css' //初始化css样式
import './assets/style/common.scss' //初始化css样式
import glogalImg from './utils/globalImg'
Vue.config.productionTip = false
Vue.prototype.glogalImg = glogalImg;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
