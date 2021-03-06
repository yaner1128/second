// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//element Ui导入
import ElementUI from 'element-ui';
//导入样式
import 'element-ui/lib/theme-chalk/index.css';
//调用插件
Vue.use(ElementUI);

//引入全局的css
import '../static/global/global.css'
// 引入icon图标
import './fonts.css'
import '../static/global/animate.css'

// // vue-awesome-swiper导入
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Footer from '@/components/Common/Footer.vue'
Vue.component('Footer',Footer);


//引入文字组件一
import FristText from '@/components/Common/FristText.vue'
Vue.component('my-FristText',FristText);

//引入动画组件一
import FristAnimation from '@/components/Common/FristAnimation.vue' 
Vue.component('my-FristAnimation',FristAnimation);
//引入动画组件二
import SecondAnimation from './components/Common/SecondAnimation.vue' 
Vue.component('my-SecondAnimation',SecondAnimation);
//引入动画组件三
import ThirdAnimation from '@/components/Common/ThirdAnimation.vue' 
Vue.component('my-ThirdAnimation',ThirdAnimation);
// 动画组件四
import FourthAnimation from '@/components/Common/FourthAnimation.vue'
Vue.component('my-FourthAnimation',FourthAnimation);
//引入动画组件五
import FiveAnimation from '@/components/Common/FiveAnimation.vue' 
Vue.component('my-FiveAnimation',FiveAnimation);

// 引入动画组件六
import SixAnimation from '@/components/Common/SixAnimation.vue' 
Vue.component('my-SixAnimation',SixAnimation);


//引入新闻组件一
import FristNew from '@/components/Common/FristNew.vue' 
Vue.component('my-FristNew',FristNew);
// 新闻组二
import SecondNew from '@/components/Common/SecondNew.vue' 
Vue.component('my-SecondNew',SecondNew);


//按钮组件FristButton
import FristButton from '@/components/Common/FristButton.vue' 
Vue.component('my-FristButton',FristButton);
//分页组件Paging
import Paging from '@/components/Common/Paging.vue' 
Vue.component('my-Paging',Paging);



// // 导入自己写的全局的样式
// import'../static/global/global.css'

// import '../static/global/icon.css'

// 导入全局组件
import Banner from '@/components/Common/Banner.vue'
Vue.component('my-Banner',Banner);

import Slideshow from '@/components/Common/Slideshow.vue'
Vue.component('my-Slideshow',Slideshow);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components:{ 
  	App
  },
  template: '<App/>'
})
