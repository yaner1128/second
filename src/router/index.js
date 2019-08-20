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


Vue.use(Router)

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
      		component: Home,
          meta: {
                show: false       //设置导航隐藏显示
            }
    	},
    	{
     	 	path: '/about',
      		name: 'About',
      		component: About
          ,
          meta: {
                show: true       //设置导航隐藏显示
            }
    	},
		  {
     	 	path: '/server',
      		name: 'Server',
      		component: Server
          ,
          meta: {
                show: true       //设置导航隐藏显示
            }
    	},
		  {
     	 	path: '/demo',
      		name: 'Demo',
      		component: Demo
          ,
          meta: {
                show: true       //设置导航隐藏显示
            }
      },
      {
          path: '/demo/demodetail',
          name: 'DemoDetail',
          component: DemoDetail
          ,
          meta: {
                show: true       //设置导航隐藏显示
            }
      },
      {
     	 	path: '/news',
      		name: 'News',
      		component: News
          ,
          meta: {
                show: true       //设置导航隐藏显示
            }
      },
      {
     	 	path: '/contact',
      		name: 'Contact',
      		component: Contact
          ,
          meta: {
                // title: "Contact",    //要现实的title
                show: true       //设置导航隐藏显示
            }
      }
  	]
})
