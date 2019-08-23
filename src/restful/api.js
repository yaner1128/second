//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL
Axios.defaults.baseURL='http://www.ecodenet.cn/'


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

//轮播图   
export const SlideShow=()=>{
    return Axios.get(`/ecodenet/carousel/`).then(res=>res.data);
}
// 全部案例信息
export const AllCase=()=>{
    return Axios.get(`ecodenet/case/`).then(res=>res.data);
}
// 分类案例信息
export const Case=(categoryId,pageId)=>{
    return Axios.get(`ecodenet/case/?category=${categoryId}&page=${pageId}`).then(res=>res.data);
}

// 案例详细信息
export const CaseDetail=(casesId)=>{
    console.log('44444',casesId)
    return Axios.get(`ecodenet/case/${casesId}`).then(res=>res.data);
}

