(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{631:function(t,a,s){"use strict";s.r(a);var e=s(10),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vue组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue组件化"}},[t._v("#")]),t._v(" Vue组件化")]),t._v(" "),s("h3",{attrs:{id:"一、模块化与组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、模块化与组件化"}},[t._v("#")]),t._v(" 一、模块化与组件化")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17cef16fd2f94821b04be2e3e39df2a5~tplv-k3u1fbpfcp-watermark.awebp",alt:"image.png"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f41fc7cd6e54e2fbdbfdc7cae5f525b~tplv-k3u1fbpfcp-watermark.awebp",alt:"image.png"}}),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ef15dffda334f058f1821e42acc40a2~tplv-k3u1fbpfcp-watermark.awebp",alt:"image.png"}}),t._v(" "),s("h4",{attrs:{id:"_1-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-模块"}},[t._v("#")]),t._v(" 1.模块")]),t._v(" "),s("ul",[s("li",[t._v("理解：向外提供特定功能的js程序,一般就是一个js文件")]),t._v(" "),s("li",[t._v("为什么：js文件很多很复杂")]),t._v(" "),s("li",[t._v("作用：复用js,简化js的编写,提高js运行效率")])]),t._v(" "),s("h4",{attrs:{id:"_2-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件"}},[t._v("#")]),t._v(" 2.组件")]),t._v(" "),s("ol",[s("li",[t._v("理解：用来实现局部(特定)功能效果的代码集合(html/css/js/image…..)")]),t._v(" "),s("li",[t._v("为什么：一个界+面的功能很复杂")]),t._v(" "),s("li",[t._v("作用：复用编码,简化项目编码,提高运行效率")])]),t._v(" "),s("h4",{attrs:{id:"_3-模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-模块化"}},[t._v("#")]),t._v(" 3.模块化")]),t._v(" "),s("p",[t._v("当应用中的js都以模块来编写的,那这个应用就是一个模块化的应用。")]),t._v(" "),s("h4",{attrs:{id:"_4-组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-组件化"}},[t._v("#")]),t._v(" 4.组件化")]),t._v(" "),s("p",[t._v("当应用中的功能都是多组件的方式来编写的,那这个应用就是一个组件化的应用。")]),t._v(" "),s("h3",{attrs:{id:"二、单文件组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、单文件组件"}},[t._v("#")]),t._v(" 二、单文件组件")]),t._v(" "),s("h4",{attrs:{id:"_1-vue中使用组件的步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue中使用组件的步骤"}},[t._v("#")]),t._v(" 1.Vue中使用组件的步骤：")]),t._v(" "),s("p",[t._v("​          一、定义组件(创建组件)")]),t._v(" "),s("p",[t._v("​          二、注册组件")]),t._v(" "),s("p",[t._v("​          三、使用组件(写组件标签)")]),t._v(" "),s("h4",{attrs:{id:"_2-如何定义一个组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何定义一个组件"}},[t._v("#")]),t._v(" 2.如何定义一个组件？")]),t._v(" "),s("p",[t._v("使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别")]),t._v(" "),s("p",[s("strong",[t._v("区别如下：")])]),t._v(" "),s("p",[t._v("​\t\t\t 1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。")]),t._v(" "),s("p",[t._v("​\t\t\t 2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。")]),t._v(" "),s("p",[t._v("**备注：**使用template可以配置组件结构。")]),t._v(" "),s("h4",{attrs:{id:"_3-如何注册组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何注册组件"}},[t._v("#")]),t._v(" 3.如何注册组件？")]),t._v(" "),s("p",[t._v("​      二、如何注册组件？")]),t._v(" "),s("p",[t._v("​              1.局部注册：靠new Vue的时候传入components选项")]),t._v(" "),s("p",[t._v("​              2.全局注册：靠Vue.component('组件名',组件)")]),t._v(" "),s("h4",{attrs:{id:"_4-编写组件标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-编写组件标签"}},[t._v("#")]),t._v(" 4.编写组件标签")]),t._v(" "),s("p",[t._v("​              "),s("school")],1),t._v(" "),s("h4",{attrs:{id:"_5-几个注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-几个注意点"}},[t._v("#")]),t._v(" 5.几个注意点")]),t._v(" "),s("p",[t._v("​          1.关于组件名:")]),t._v(" "),s("p",[t._v("​                一个单词组成：")]),t._v(" "),s("p",[t._v("​                      第一种写法(首字母小写)：school")]),t._v(" "),s("p",[t._v("​                      第二种写法(首字母大写)：School")]),t._v(" "),s("p",[t._v("​                多个单词组成：")]),t._v(" "),s("p",[t._v("​                      第一种写法(kebab-case命名)：my-school")]),t._v(" "),s("p",[t._v("​                      第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)")]),t._v(" "),s("p",[t._v("​                备注：")]),t._v(" "),s("p",[t._v("​                    (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。")]),t._v(" "),s("p",[t._v("​                    (2).可以使用name配置项指定组件在开发者工具中呈现的名字。")]),t._v(" "),s("p",[t._v("​          2.关于组件标签:")]),t._v(" "),s("p",[t._v("​                第一种写法："),s("school")],1),t._v(" "),s("p",[t._v("​                第二种写法："),s("school")],1),t._v(" "),s("p",[t._v("​                备注：不用使用脚手架时，"),s("school"),t._v("会导致后续组件不能渲染。")],1),t._v(" "),s("p",[t._v("​          3.一个简写方式：")]),t._v(" "),s("p",[t._v("​                const school = Vue.extend(options) 可简写为：const school = options")]),t._v(" "),s("h4",{attrs:{id:"_6-关于vuecomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-关于vuecomponent"}},[t._v("#")]),t._v(" 6.关于VueComponent")]),t._v(" "),s("p",[t._v("1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。")]),t._v(" "),s("p",[t._v("2.我们只需要写"),s("school"),t._v("或"),s("school"),t._v("，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的：new VueComponent(options)。")],1),t._v(" "),s("p",[t._v("3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！")]),t._v(" "),s("p",[t._v("4.关于this指向：")]),t._v(" "),s("ul",[s("li",[t._v("组件配置中：")])]),t._v(" "),s("p",[t._v("data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。")]),t._v(" "),s("ul",[s("li",[t._v("new Vue(options)配置中：")])]),t._v(" "),s("p",[t._v("data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。")]),t._v(" "),s("p",[t._v("5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。")]),t._v(" "),s("p",[t._v("Vue的实例对象，以后简称vm。")]),t._v(" "),s("h4",{attrs:{id:"_7-一个重要的内置关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-一个重要的内置关系"}},[t._v("#")]),t._v(" 7.一个重要的内置关系")]),t._v(" "),s("p",[t._v("1.一个重要的内置关系：VueComponent.prototype."),s("strong",[t._v("proto")]),t._v(" === Vue.prototype")]),t._v(" "),s("p",[t._v("2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c436e9b07b74ec38f82431c908d994a~tplv-k3u1fbpfcp-watermark.awebp",alt:"vue与vuecomponent的关系"}})]),t._v(" "),s("h2",{attrs:{id:"vue-cli-脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-脚手架"}},[t._v("#")]),t._v(" Vue CLI(脚手架)")]),t._v(" "),s("h3",{attrs:{id:"安装脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚手架"}},[t._v("#")]),t._v(" 安装脚手架")]),t._v(" "),s("h4",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("p",[t._v("第一步（仅第一次执行）：全局安装@vue/cli。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g @vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n# "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OR")]),t._v("\nyarn global add @vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n复制代码\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("第二步：切换到你要创建项目的目录，然后使用命令创建项目")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("vue create xxxx\n复制代码\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94381a3077544a29a5433cf8872ac77d~tplv-k3u1fbpfcp-watermark.awebp",alt:"image.png"}})]),t._v(" "),s("ul",[s("li",[t._v("vue2")]),t._v(" "),s("li",[t._v("vue3")]),t._v(" "),s("li",[t._v("自定义")])]),t._v(" "),s("p",[t._v("babel ：ES6 ===>ES5\neslint：语法检查 第三步：启动项目")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm run serve\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OR")]),t._v("\nyarn serve\n复制代码\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("你还可以用这个命令来检查其版本是否正确：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vue --version\n复制代码\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"备注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[t._v("#")]),t._v(" 备注")]),t._v(" "),s("p",[t._v("1.如出现下载缓慢请配置npm淘宝镜像：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n复制代码\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("2.Vue脚手架隐藏了所有webpack相关的配置，若想查看具体的webpakc配置，请执行：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vue inspect > output.js\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=v.exports}}]);