<!-- TOC -->

- [VUE-MVVM原理分析](#vue-mvvm原理分析)
    - [VUE双向绑定原理](#vue双向绑定原理)
    - [VUE生命周期](#vue生命周期)
    - [组件基础](#组件基础)
        - [父子组件的传值](#父子组件的传值)
            - [单向数据流](#单向数据流)
    - [VUEX](#vuex)
    - [VUE源码解读](#vue源码解读)
    - [FAQ](#faq)
        - [watch与compute区别](#watch与compute区别)
    - [小结](#小结)
- [Author](#author)

<!-- /TOC -->

# VUE-MVVM原理分析

## VUE双向绑定原理

VUE主要通过Object.defineProperty的setter和getter进行双向绑定。

当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。

这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更。

每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

Object.defineProperty()
set/get拦截

Observer

Dep

Watch

compile


## VUE生命周期


## 组件基础

组件的复用

![组件的组织](/img/component.png)


### 父子组件的传值

父子组件的通讯交互方式：

在Vue中，父子组件的关系可以总结为prop向下传递，事件向上传递。父组件通过prop给子组件下发数据，子组件通过事件给父组件发送信息。

（1）父组件通过双向绑定传值给子组件，子组件props接收。

（2）子组件通过事件触发$emit通知父组件；父组件进而接收对应的参数。—— 典型的订阅发布模式。

![父子组件的传值原理图](/img/parent-child.png)

通过"props down , events up"我们就简单的实现了父子组件之间的双向传值。


#### 单向数据流

props 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改父组件的状态。


## VUEX

全局状态管理

	state
	getters
	mutations
	modules
	actions


## VUE源码解读

VUE是优秀的前端开源框架，让我们尽量不用操作dom，直接写data驱动逻辑，降低初级阶段的开发难度。

vue.js也是非常优秀的js-sdk，值得借鉴和学习。

（1）vue源码中EventEmitter订阅发布设计模式代码写得不错。接口on/emit/once/off函数，prototype组织封装。

## FAQ 

### watch与compute区别

computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

运用场景：

当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；

当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。


## 小结

对于全栈技术的理解：

不是会一点前端，同时懂一点后端nodejs 这么简单。

	1.全栈工程师的能力，从前端到后端，端到端的了解熟悉所使用的技术，而非重复搬砖等
	2.系统的核心能力是否掌握，网络编程、多线程、高并发、分布式处理机制等
	3.业务的熟悉度，码农如果不能很好的理解业务，不懂业务场景，何谈何架构设计，业务与技术相辅相成
	4.解决问题的方法和能力，做人做事的态度

技术能力储备：

	1. 做过后端项目，并至少对一个小型后端系统有比较深刻的理解。更重要的是对一门优秀开源技术有过深入研究，如nginx，consul等。
	2. 做过前端或sdk项目，并熟练开发前端功能。如果能开发js-sdk更好，js-sdk对底层逻辑和前后端交互要求非常高。同时要认真研读vue.js源码/原理；熟练使用webrtc/websocket开发。


# Author

zhangbiwu

主要技术栈：

* 后端研发
  * nginx/openresty
  * C/C++
  * nodejs
  * js-sdk
  * RTM/RTC

- [阿武的博客](https://cherishman2005.github.io/)

