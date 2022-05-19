1:vue-cli 脚手架出事话项目
node webpack 淘宝镜像

node_modules文件夹：项目依赖文件夹

public文件夹：一般放置静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动的打包到dist文件夹中。

src文件夹：（程序员源代码文件夹）:
    assets文件夹：一般放置静态资源（一般放置多个组件公用的静态资源），需要注意，放置在assets文件夹里的静态资源，在webpack打包时候，webpack会吧静态资源当做一个模块，打包js文件里。

    component文件夹：放置非路由组件（全局组件）

    App.vue：唯一的根组件，Vue当中的组件（.vue后缀）
    main.js:程序入口文件，也是整个程序当中最先执行的文件
babel.config.js:配置文件（babel相关）翻译官es6->es5等（webpack相关）

package.json文件:认为项目‘身份证’，记录项目叫做什么、项目当中有哪些依赖、项目怎么运行。

package-lock.json:缓存性文件 包在哪下载的，版本之类的

readme：说明文件 文件怎么安装依赖 怎么运行都有说明

2:项目的其他配置
2.1项目运行起来的时候，自动打开浏览器
---package.json
    "scripts": {
        "serve": "vue-cli-service serve --open",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint"
    },

2.2eslint校验功能关闭
---在根目录下，创建一个vue.config.js
比如:声明变量但是没有使用eslint校验工具报错。
    module.exports = defineConfig({
    lintOnSave: false
    })

2.3src文件夹简写方法，配置别名。@
jsconfig.json配置别名@提示【@代表src文件夹这样，将来文件过多，找的时候方便很多】
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
                "@/*":["src/*"]
                }
        },
    "exclude": ["node_modules", "dist""]
}

3：项目路由的分析
vue-router
前端的路由：kv键值对。
key: URL（地址栏中的路径）
value:相应的路由组件
上中下结构 路由变的时候 只有中间部分在改变

路由组件，
home首页路由组件，search路由组件，login路由，register注册路由中间
非路由组件：
header【首页 搜索页】 
footer 【在首页搜索页有，但是在登录页，注册页是没有的】

4.完成非路由组件Header和Footer业务
在开发项目的时候：
1：书写静态页面（HTML+CSS）
2: 拆分组件
3：获取服务器的数据动态展示
4：完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构＋组件的样式＋图片资源
注意2:咱们项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader【安装五版本】进行处理less，把less样式变为css样式,浏览器才可以识别。
注意3:如果想让组件识别less样式，需要在style标签的身上加上lang=less

4.1使用组件的步骤（非路由组件）
-创建或者定义
-引入
-注册
-使用

5)路由组件的搭建
vue-router
在上面分析的时候，路由组件应该有四个: Home.Search、Login、Register
-components文件夹:经常放置的非路由组件(共用全局组件)
-pages|views文件夹:经常放置路由组件
5.1配置路由
项目当中配置的路由一般放置在router文件夹中I
5.2总结
路由组件与非路由组件的区别?
1:路由组件一般放置在pages|views文件夹，非路由组件一般放置components文件夹中
2:路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字)，非路由组件在使用的时候，一般都是以标签的形式使用
3:注册完路由，不管路由路由组件、还是非路由组件身上都有$route\$router属性

$route:一般获取路由信息【路径、query、params等等】$router:一般进行编程式导航进行路由跳转【push|replace】

5.3路由的跳转?
路由的跳转有两种形式:
声明式导航router-link,可以进行路由的跳转编程式导航push|replace，可以进行路由跳转

编程式导航:声明式导航能做的,编程式导航都能做
但是编程式导航除了可以进行路由跳转,还可以做一些其他的业务逻辑。

6)Footer组件显示与隐藏
显示或者隐藏组件: v-if|v-show

Footer组件:在Home、search显示Footer组件
Footer组件:在登录、注册时候隐藏的

6.1我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐栽
6.2配置的路由的时候，可以给路由添加路由元信息【meta】，路由需要配置对象，它的key不能瞎写、胡写、乱写


8)路由传参
8.1:路由跳转有几种方式?
比如:A->B
声明式导航:router-link（务必要有to属性)，可以实现路由的跳转
编程式导航:利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。可以书写一些自己业务

8.2:路由传参，参数有几种写法?
params参数:属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数:不属于路径当中的一部分，类似于ajax中的queryString/home ?k=v&kv=,不需要占位

9)路由传参相关面试题
1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
2:如何指定params参数可传可不传?
配置路由的时候，占位了，但是路由跳转不传递
路径会出现问题
http://localhost:8080/#/?k=qwe

http://localhost:8080/#/search?k=qwe
//如果路由要求传递params参数，但是你就不传递params参数，发现一件事情，URL会有问题的
//如何指定params参数可以传递、或者不传递，在配置路由的时候，在占位的后面加上一个问号【params可以传递或者不传递】

3:params参数可以传递也可以不传递,但是如果传递是空串，如何解决?
//使用undefined解决:params参数可以传递、不传递（空的字符串)
params:{keyword:''||undefined} 

4:路由组件能不能传递props数据?
 //可以的:三种写法
  
