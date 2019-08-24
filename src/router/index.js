import Vue from 'vue'
import Router from 'vue-router'


//导入路由模块
import Home from '@/components/Home/Home.vue'
import About from '@/components/About/About.vue'
import Server from '@/components/Server/Server.vue'
import Demo from '@/components/Demo/Demo.vue'
import DemoDetail from '@/components/Demo/DemoDetail.vue'
import News from '@/components/News/News.vue'
import Contact from '@/components/Contact/Contact.vue'

import newsDetail from '@/components/News/newsDetail.vue'


Vue.use(Router);


export default new Router({
	//路由匹配规则
	linkActiveClass:'is-active',
	mode:'history',//改成history模式
  	routes: [
  		{
  			path:'/',
  			redirect:'/home'
  		},
    	{
     	 	path: '/home',
      		name: 'Home',
      		component: Home

    	},
    	{
     	 	path: '/about',
      		name: 'About',
      		component: About
    	},
		  {
     	 	path: '/server',
      		name: 'Server',
      		component: Server
    	},
		  {
     	 	path: '/demo',
      		name: 'Demo',
      		component: Demo
          
      },
      {
          path: '/demo/demodetail',
          name: 'DemoDetail',
          component: DemoDetail
         
      },
      {
     	 	path: '/ecodenet/news',
      		name: 'News',
      		component: News
        
      },
      {
     	 	path: '/contact',
      		name: 'Contact',
      		component: Contact,
      	},
        // 新闻详情
        {
        path: '/ecodenet/news/:newsId',
          name: 'newsdetail',     
          component: newsDetail
        },

  	],
    scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }

})


