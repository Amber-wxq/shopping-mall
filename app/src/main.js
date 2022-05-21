import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'

Vue.component(TypeNav.name, TypeNav);
//获取三级联动
import { reqCategoryList } from '@/api';
reqCategoryList();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
