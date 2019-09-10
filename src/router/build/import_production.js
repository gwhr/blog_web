/*
 * @Description: 上产环境下的路由
 * @Author: your name
 * @Date: 2019-09-04 16:15:34
 * @LastEditTime: 2019-09-05 17:09:56
 * @LastEditors: Please set LastEditors
 */
module.exports =file=>resolve =>require([`@/components/${file}.vue`],resolve)