//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL
Axios.defaults.baseURL='http://www.ecodenet.cn/'


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


