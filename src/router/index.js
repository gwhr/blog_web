/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 22:04:13
 * @LastEditTime: 2019-09-03 22:04:13
 * @LastEditors: your name
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const IMPORT = require(`./build/import_${process.env.NODE_ENV}.js`);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:IMPORT('home/home')
    },
    {
      path:'/login',
      name:'login',
      component:IMPORT('login/login')
    },
    
  ]
})
