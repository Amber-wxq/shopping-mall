import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
//引入mock
import '@/mock/mockServer';
//引入轮播图样式
import 'swiper/css/swiper.css'
import '../public/font/iconfont.css'
//注册仓库
import store from '@/store'
//全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
//获取三级联动

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
