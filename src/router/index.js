import Vue from 'vue'
import Router from 'vue-router'


//导入路由模块
import Home from '@/components/Home/Home.vue'
import About from '@/components/About/About.vue'
import Server from '@/components/Server/Server.vue'
import Demo from '@/components/Demo/Demo.vue'
import News from '@/components/News/News.vue'
import Contact from '@/components/Contact/Contact.vue'

import Detail from '@/components/Common/Detail.vue'


Vue.use(Router);


export default new Router({
	//路由匹配规则
	linkActiveClass:'is-active',
	mode:'history',//改成history模式
  	routes: [
  		{
  			path:'/',
  			redirect:'/home',
        meta:{
          show:false
        }
  		},
    	{
     	 	path: '/home',
      		name: 'Home',
      		component: Home,
          meta:{
          show:false
        }
    	},
    	{
     	 	path: '/about',
      		name: 'About',
      		component: About,
          meta:{
          show:true
        }
    	},
		{
     	 	path: '/server',
      		name: 'Server',
      		component: Server,
          meta:{
          show:true
        }
    	},
		  {
     	 	path: '/demo',
      		name: 'Demo',
      		component: Demo,
          meta:{
          show:true
        }
      	},
      	{
     	 	path: '/news',
      		name: 'News',
      		component: News,
          meta:{
          show:true
        }
      	},
      	{
     	 	path: '/contact',
      		name: 'Contact',
      		component: Contact,
          meta:{
          show:true
        }
      	},
        // 新闻详情
        {
        path: '/news/detail',
          name: 'detail',
          component: Detail,
          meta:{
          show:true
        }
        },
  	]
})


