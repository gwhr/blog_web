/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 22:04:13
 * @LastEditTime : 2019-12-31 17:56:20
 * @LastEditors  : Please set LastEditors
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
      alias:'/',
      component:IMPORT('home/home'),
      children:[
        {
          path:'/',
          meta:{index:1},
          component:IMPORT('index/index'),
        },
        {
          path:'/file',
          meta:{index:2},
          component:IMPORT('file/file'),
        },
        {
          path:'/classify',
          meta:{index:3},
          component:IMPORT('classify/classify'),
        },
        {
          path:'/tags',
          meta:{index:4},
          component:IMPORT('tags/tags'),
        },
        {
          path:'/article/:id',
          meta:{index:5},
          component:IMPORT('article/article'),
        },
        {
          path:'/article/edit/:id',
          meta:{index:5},
          component:IMPORT('classify/classify'),
        },
      ]
    },

    {
      path:'/login',
      name:'login',
      component:IMPORT('login/login'),
      
    },
    
  ]
})
