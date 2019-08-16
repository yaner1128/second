// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// elementUI导入
import ElementUI from 'element-ui';
// 导入样式
import 'element-ui/lib/theme-chalk/index.css';
// 调用插件
Vue.use(ElementUI);

// vue-awesome-swiper导入
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)



// 导入自己写的全局的样式
import'../static/global/global.css'
import '../static/global/animate.css'
import '../static/global/icon.css'

// 导入全局组件
import Banner from '@/components/Banner/Banner'
Vue.component('my-Banner',Banner)

import Slideshow from '@/components/Slideshow/Slideshow'
Vue.component('my-Slideshow',Slideshow)

import FourthAnimation from '@/components/FourthAnimation/FourthAnimation'
Vue.component('my-FourthAnimation',FourthAnimation)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
