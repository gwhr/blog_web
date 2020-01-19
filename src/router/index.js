/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 22:04:13
 * @LastEditTime : 2020-01-19 13:31:44
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
          name:'article',
          meta:{index:5},
          component:IMPORT('article/article'),
        },
        {
          path:'/article/edit/:id',
          meta:{index:5},
          component:IMPORT('classify/classify'),
        },
        {
          path:'/login',
          name:'login',
          meta:{index:100},
          component:IMPORT('login/login'),
          
        },
        {
          path:'/backStage',
          name:'backStage',
          meta:{index:101},
          component:IMPORT('backStage/backStage'),
          
        },
        {
          path:'/edit/:id',
          name:'edit',
          meta:{index:102},
          component:IMPORT('edit/edit'),
        },
        {
          path:'/add',
          name:'add',
          meta:{index:102},
          component:IMPORT('add/add'),
        },
      ]
    },

    
    
  ]
})
