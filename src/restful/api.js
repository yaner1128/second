//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL
// Axios.defaults.baseURL='http://192.168.3.81:8000/'

Axios.defaults.baseURL='http://www.ecodenet.cn/'
// 添加请求拦截器
// Axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     if(localStorage.getItem('access_token')){
//     	// console.log(config.headers);
//     	config.headers.Authorization=localStorage.getItem('access_token');
//     }
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });

//分类列表api


//关于我们
export const aboutList=()=>{
    return Axios.get('ecodenet/aboutus/').then(res=>res.data);
}
//按分类获取新闻ecodenet/news/
export const newsList=(categoryId,page)=>{
    return Axios.get(`ecodenet/news/?category=${categoryId}&page=${page}`).then(res=>res.data);
}
//获取所有新闻
export const allNewsList=()=>{
    return Axios.get(`ecodenet/news/`).then(res=>res.data);
}
//获取新闻详情ecodenet/news/x
export const newsdetails=(newsId)=>{
    return Axios.get(`ecodenet/news/${newsId}`).then(res=>res.data);
}
// http://www.ecodenet.cn/ecodenet/news/?category=1&page=2
// export const pagesList=(categoryId,page)=>{
//     return Axios.get(`ecodenet/news/?category=${categoryId}&page=${page}`).then(res=>res.data);
// }

