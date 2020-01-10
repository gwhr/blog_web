/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 22:04:13
 * @LastEditTime : 2020-01-09 17:20:18
 * @LastEditors  : Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css' //初始化css样式
import './assets/style/common.scss' //初始化css样式
import glogalImg from './utils/globalImg'  //引入全局图片
import marked  from 'marked'
import hljs  from 'highlight.js'
import 'highlight.js/styles/github.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import '@/assets/style/article.scss'; 
import hzqingVueTimeline from 'hzqing-vue-timeline'
import axios from 'axios'
import globalApi from '@/utils/globalApi.js'
import tool from "@/utils/tool.js"
import "@/assets/iconfont/iconfont.css"
Vue.use(hzqingVueTimeline);
Vue.use(tool);
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code,language) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
Vue.prototype.marked = marked;
// 全局API
Vue.prototype.globalApi = globalApi;
/**
 * @description: 全局组件
 * @param {type} 
 * @return: 
 */
const requireComponents = require.context(
  './components',
  true,
  /Base[a-zA-Z]+\.vue$/
)
requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取路径作为组件名
  let reqComName = fileName.split('.vue')[0].split('/')
  reqComName = reqComName[reqComName.length-1]
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)
});
Vue.config.productionTip = false
Vue.prototype.glogalImg = glogalImg;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
