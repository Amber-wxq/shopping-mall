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

6:axios二次封装
