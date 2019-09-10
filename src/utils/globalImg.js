/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 11:20:29
 * @LastEditTime: 2019-09-10 13:13:01
 * @LastEditors: Please set LastEditors
 */
let globalImg={};
// 全局引入图片
const requireAllImg = require.context(
  '../assets/img',
  true,
  /[\d\D]/
)
requireAllImg.keys().forEach(v => {
    const arr = requireAllImg(v).split('/');
    arr.reverse();
    const name = arr[0].split('.')[0]
    globalImg[name]=requireAllImg(v);
});
 
export default globalImg;