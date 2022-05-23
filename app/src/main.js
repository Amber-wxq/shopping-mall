import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'

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
