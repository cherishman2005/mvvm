
# electron

## 进程模型
Electron 的主从进程模型是基本的常识。每个 Electron 应用有且只要一个主进程(Main Process)、以及一个或多个渲染进程(Renderer Process), 对应多个 Web 页面。除此之外还有 GPU 进程、扩展进程等等。可以通过 Electron Application Architecture 了解 Electron 的基本架构。

主进程负责创建页面窗口、协调进程间通信、事件分发。为了安全考虑，原生 GUI 相关的 API 是无法在渲染进程直接访问的，它们必须通过 IPC 调用主进程。这种主从进程模型缺点也非常明显，即主进程单点故障。主进程崩溃或者阻塞，会影响整个应用的响应。比如主进程跑长时间的 CPU 任务，将阻塞渲染进程的用户交互事件。

对我们的应用来说，目前有以下进程, 以及它们的职责:

### 主进程

进程间通信、窗口管理
全局通用服务。
一些只能或适合在主进程做的事情。例如浏览器下载、全局快捷键处理、托盘、session。
维护一些必要的全局状态
上面说的通用混合层也跑在这个进程。通过 Node C++ 插件暴露接口。

### 渲染进程

负责 Web 页面的渲染, 具体页面的业务处理。

### Service Worker

负责静态资源缓存。缓存一些网络图片、音频。保证静态资源的稳定加载。

# 经验总结

* 主进程主要做一些系统级别的 API 调用、事件分发等，业务逻辑尽量放在渲染进程中去做。

* 主进程 就是 electron 应用程序的进程，主要的区别在于主进程中可以调用一些与原生操作系统交互的 API，比如对话框、系统风格主题等。并且有 node 的运行时，可以引用 NPM 包。当然渲染进程也可以有 node 支持，但是我建议渲染进程中就只放一些纯前端的逻辑，这样的话方便后期把应用分离成 web 版。

# 参考链接

- [分享这半年的 Electron 应用开发和优化经验](https://cloud.tencent.com/developer/article/1558453)


electron开发有很多技巧的，主进程 与 渲染进程分离， 进程间通信 等:

- [https://github.com/SugarTeam/Sugar-Electron](https://github.com/SugarTeam/Sugar-Electron)

- [如何使用前端技术开发一个桌面跨端应用](https://keelii.com/2019/03/14/how-to-create-a-real-world-app-based-on-fe-tech/)