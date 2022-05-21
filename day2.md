1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告错误?
--路由跳转有两种形式:声明式导航、编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误那?
"vue-router":"^3.5.3":最新的vue-router引入promise
$router.push 返回一个promise 但是传参没有给他一个状态回调
function push(){
    return new Promise((resolve,reject)=>{

    })
}
处理：给push函数再传递两个参数，成功的回调，失败的回调，一共三个参数
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。
 但是治标不治本
1.3通过底部的代码，可以实现解决错误
this.$router.push({name:"search" , params: {keyword:this.keyword},query:{k:this.keyword.toUppercase()}},()=>{},()=>{});
这种写法:治标不治本，将来在别的组件当中push| replace，编程式导航还是有类似错误。

1.4
this:当前组件实例(search）
this.$router属性:当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
push:VueRouter类的一个实例

$router属性是VueRouter的一个实例，push是实例的原型对象的方法
this是组件实例，它身上有一个$router属性，这个属性是vueRouter的一个实例，push是vueRouter的原型对象的方法

治本：重写push方法
    重写push|replace
    第一个参数:告诉原来push方法，你往哪里跳转(传递哪些参数)
    第二个参数:成功回调
    第三个参数:失败的回调
    let originPush = VueRouter.prototype.push;
    VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
        }
    }
    replace:
    VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
        }
    }

    call|apply区别
        相同点，都可以调用函数一次，都可以算改函数的上下文一次
        不同点: call与apply传递参数: call传递参数用逗号隔开，apply方法执行，传递数组



2.Home模块组件拆分
    先静态页面完成
    拆分出静态组件
    获取服务器的数据进行展示
    动态业务

3:三级联动组件完成
----由于三级联动，在Home.Search.Detail.都出现了，所以注册为全局组件
好处:只需要注册一次，就可以在项目任意地方使用

4:完成其余静态组件
HTML + css +图片资源----信息【结构、样式、图片资源】

5.Postman 测试接口
--刚刚经过postman工具测试,接口是没有问题的
--如果服务器返回的数据code字段20日，代表服务器返回数据成功
--整个项目，接口前缀都有/api字样

6:axios二次封装
XMLHttpRequest. fetch、JQ、axios
6.1为什么需要进行二次封装axios?
请求拦截器、响应拦截器:请求拦截器，可以在发请求之前可以处理一些业务、响应拦截器，当服务器数据返回以后，可以处理一些事情
 
6.2在项目当中经常API文件夹【axios】
接口当中:路径都带有/api
baseURL :"/api"

6.3有的同学axios基础不好，可以参考git|NPM关于axios文档
7.接口统一管理
项目很小:完全可以在组件的生命周期函数中发请求

项目大：统一管理api 将来不用挨个找，修改

7.1
7.1跨域问题
什么是跨域:协议、域名、端口号不同请求,称之为跨域
http://localhost:8080/#/home ---前端项目本地服务器
http://39.98.123.211     ----后台服务器

JSONP.CROS、代理

8.nprogress进度条的使用
start:进度条开始
done:进度条结束
进度条颜色可以修改的，当然需要修改人家的样式
9:vueX状态管理库

9.1 vuex是什么?

vuex是官方提供一个插件，状态管理库，集中式管理项目中组件共用的数据。
切记，并不是全部项目都需要vuex，如果项目很小，完全不需要vuex，如果项目很大，组件很多、数据很多，数据维护很费劲，vuex
state
mutations
actions
getters
modules

9.2vuex基本使用


9.3vuex实现模块式开发
如果项目过大，组件过多，接口也很多，数据也很多,可以让vuex实现模块式开发
{
    count:1,
    search:{a:1},
    detail:{sss),
    pay:{}
}
模块化开发，让原来的大仓库拆分成很多小仓库
