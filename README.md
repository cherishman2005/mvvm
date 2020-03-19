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


## 父子组件的传值

父子组件的通讯交互方式：

在Vue中，父子组件的关系可以总结为prop向下传递，事件向上传递。父组件通过prop给子组件下发数据，子组件通过事件给父组件发送信息。

（1）父组件通过双向绑定传值给子组件，子组件props接收。

（2）子组件通过事件触发$emit通知父组件；父组件进而接收对应的参数。—— 典型的订阅发布模式。

![props down , events up](/img/parent-child.png)

通过"props down , events up"我们就简单的实现了父子组件之间的双向传值。

## FAQ 

### watch与compute区别

computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

运用场景：

当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；

当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。