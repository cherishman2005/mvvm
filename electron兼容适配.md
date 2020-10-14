

# electron兼容适配


## 问题描述

js-sdk在chrome浏览器运行正常，在electron环境运行异常。

![electron-console](/img/electron-console.png)


这个只是sdk的一些简单统计上报不了，不影响功能。

## 经排查

Electron是本地路径，window.location.protocol = “file://”。

Chrome浏览器使用window.location.protocol = “https://”。 


js-sdk采用的“https”没有异常。引用的公司内部的一个js三方压缩库metrics，里面使用了window.location.protocol。 —— 如果推动 js三方库支持electron版本 有点困难。

## 解决方法

js-sdk做了在小程序环境时不做metrics上报的逻辑。

### 现在简单的解决方法

也采用识别是electron环境时，不做metrics上报。

试验如下：

（1）在chrome环境：

```
var sUsrAg = navigator.userAgent;

sUsrAg

"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"

sUsrAg.indexOf('Electron')
-1

sUsrAg.indexOf('Chrome')
81
```

（2）在electron环境
```
var sUsrAg = navigator.userAgent;

sUsrAg
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) classroom-vue/1.3.0 Chrome/73.0.3683.121 Electron/5.0.8 Safari/537.36"

sUsrAg.indexOf('Electron')
```

【解决方法】在sdk做适配
```
const sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf('Electron') === -1) {
    return;
}
```

因为涉及要发新版本，后面新版本会做如上适配。

提供给electron使用的老版本直接将js-sdk里面的"this.setScode(50275)"改为"this.setScode(0)"即可。

【注】this.setScode(0)表示关闭metrics上报。

# 参考

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/navigator)
