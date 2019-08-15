import Vue from 'vue'
import Router from 'vue-router'

import Home from'@/components/Home/Home'

Vue.use(Router)

export default new Router({
	linkActiveClass:'is-active',
	mode:'history',//改成history模式
  routes: [
    {
      path: '/',
       redirect: '/home',
      // component: 
    },
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    }
  ]
})
