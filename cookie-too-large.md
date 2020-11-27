# Cookie Too Large

【问题描述】
400 bad request

Request Header or Cookie Too Large

![](/img/cookie-too-large.png)

* cookie简述

Cookie 是小甜饼的意思。顾名思义，cookie 确实非常小，它的大小限制为4KB左右。

由于HTTP协议是无状态的，而服务器端的业务必须是要有状态的。Cookie诞生的最初目的是为了存储web中的状态信息，以方便服务器端使用。比如判断用户是否是第一次访问网站。目前最新的规范是RFC 6265，它是一个由浏览器服务器共同协作实现的规范。服务端可以通过http的响应对cookie进行增加、修改和删除。而在客户端中也可以通过脚本语言如:JavaScript对其进行同样的操作。

## Cookie、localStorage、sessionStorage三者异同

| 特性                      | Cookie                  |localStorage                   |    sessionStorage           |
|:--------------------------|:--------------------------------------|:--------------------------------------|:--------------------------------------|
| 数据的生命期     | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效   | 除非被清除，否则永久保存                   | 仅在当前会话下有效，关闭页面或浏览器后被清除|
| 存放数据大小     | 4K左右   | 一般为5MB                   | 一般为5MB |
| 与服务器端通信     | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题   | 仅在客户端（即浏览器）中保存，不参与和服务器的通信                   | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 |
| 易用性     | 需要程序员自己封装，源生的Cookie接口不友好   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持                   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |


## 分析

到底是chrome浏览器cookie存储大小限制？ 还是后端服务对cookie大小或请求头大小的限制？

* 第一步

分析cookie大小增大的原因，分析是哪个组件（或sdk）的cookie引起？

* 第二步

分析nginx的cookie或请求头限制，并进行验证。是否能增大cookie或header的配置？

![](/img/cookie.jpg)


### 安全性的考虑

不是什么数据都适合放在 Cookie、localStorage 和 sessionStorage 中的。使用它们的时候，需要时刻注意是否有代码存在 XSS 注入的风险。因为只要打开控制台，你就随意修改它们的值，也就是说如果你的网站中有 XSS 的风险，它们就能对你的 localStorage 肆意妄为。所以千万不要用它们存储你系统中的敏感数据。


1. cookie 会随着 http 请求头每次发送到服务器端，所以设置过多的 cookie 无形增加了传输带宽；
2. cookie 可以被客户端修改，明文存储容易被黑客修改后进入其他账户，比如将用户名或角色修改为 admin，从而拥有管理身份；
3. 在传输过程中被拦截，因为各个地方接入服务商都是不干净的，现在 HTTP 网站被地方电信机房挂码概率为总体 20%以上，首次 80%以上，对方要拿密码是轻而易举的。


# 参考链接

- [浅谈cookie安全](https://zhuanlan.zhihu.com/p/58666986)
- [https://jerryzou.com/posts/cookie-and-web-storage/](https://jerryzou.com/posts/cookie-and-web-storage/)
- [Cookie个数限制及大小](https://my.oschina.net/gaollg/blog/71299)
- [https://v2ex.com/t/614961](https://v2ex.com/t/614961)
- [各浏览器Cookie大小、个数限制](https://www.jianshu.com/p/9fb978b1d811)
