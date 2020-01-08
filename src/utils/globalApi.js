let globalApi = {};
// 全局api引入
const requireApi = require.context(
    '../assets/api',
    true,
    /\.js$/
)
requireApi.keys().forEach(v=>{
    let name = v.replace(/(.*\/)*([^.]+).*/ig,"$2");
    globalApi[name] = requireApi(v);
})
console.log(requireApi(requireApi.keys()[0]))
export default globalApi