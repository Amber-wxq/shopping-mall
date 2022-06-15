import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
//引入mock
import '@/mock/mockServer';
//引入轮播图样式
import 'swiper/css/swiper.css'
//注册仓库
import store from '@/store'
//全局组件
Vue.component(TypeNav.name, TypeNav);
//获取三级联动

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
