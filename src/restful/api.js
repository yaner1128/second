//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL
Axios.defaults.baseURL='http://www.ecodenet/'


// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(localStorage.getItem('access_token')){
    	// console.log(config.headers);
    	config.headers.Authorization=localStorage.getItem('access_token');
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });