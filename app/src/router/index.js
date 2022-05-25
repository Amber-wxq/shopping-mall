import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true },

        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
            name: "search",
            //路由传参传递props
            //1.params
            // props: true
            //2.对象
            // props: { a: 1, n: 2 }
            //3.函数
            props: ($route) => {
                return {
                    keyword: $route.params.keyword,
                    k: $route.query.k
                }
            }
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        {
            path: '/',
            component: Home,
            meta: { show: true }
        }
    ]
})