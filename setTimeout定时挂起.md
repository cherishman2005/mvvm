
# js端定时setTimeout/setInterval
setTimeout 兼容很复杂。还涉及到与 浏览器tab切换的配合。不是sdk独立可以解决差值。

参见 https://juejin.im/post/6844903726558232590

—— 要结合tab（前端UI的范畴）可见，不可见来减去差值 来矫正超时定时。 —— 在sdk层面没法做到定时准确。

另外，`js-sdk不仅仅在PC 上使用，而且现在很多js-sdk在手机app上使用，只要切换app，js就会被挂起，setTimeout就会停止定时计数；导致定时不准确`。

## 各大厂商的浏览器 setTimeout的行为不一致

PC 上的 Firefox、Chrome 和 Safari 等浏览器，都会自动把未激活页面中的 JavaScript 定时器（setTimeout、setInterval）间隔最小值改为 1 秒以上；而移动设备上的浏览器往往会直接冻结未激活页面上的所有定时器。


# 移动端app

IOS机制的问题，将未激活的页面线程直接阻塞

当10分钟时间到之后，无论怎么向系统申请继续后台，系统都会强制挂起你的App，挂起所有后台操作、线程，直到用户再次点击App之后才会继续运行。

移动端app:  参见 https://www.jianshu.com/p/9b2f3e9fc731
