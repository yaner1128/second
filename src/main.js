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

// 导入自己写的全局的样式
import'../static/global/global.css'

// 导入全局组件
import Banner from '@/components/Banner/Banner'
Vue.component('my-Banner',Banner)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
