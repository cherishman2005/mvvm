# setTimeout定时不准测试分析

## 【测试1】

```
var d = new Date();
var startTime = d.getTime();
var count = 0;

//耗时任务
setInterval(function(){
    var i = 0;
    while(i++ < 100000000);
}, 0);

/*
setInterval(function(){
    count++;
    console.log(new Date().getTime() - (startTime + count * 1000));
}, 1000);
*/

console.log("开始：", d.toLocaleTimeString('en-US', { hour12: false}), startTime);

setTimeout(function(){
    count++;
	var date = new Date();
    var endTime = date.getTime();
    console.log("结束：", date.toLocaleTimeString('en-US', { hour12: false}), endTime);
    console.log("延时：", endTime - startTime);
}, 120*1000);
```

【运行1】超时定时2分钟，切换tab页面，误差不大。
运行结果：
```
开始： 10:17:21 1600049841659
1535[Violation] 'setInterval' handler took <N>ms
setTimeout1.html:41 结束： 10:19:21 1600049961779
setTimeout1.html:42 延时： 120120
```

【运行2】超时定时2分钟，将网页在后台运行，运行时间：（延时9s）
```
开始： 10:21:22 1600050082678
573[Violation] 'setInterval' handler took <N>ms
setTimeout1.html:41 结束： 10:23:31 1600050211328
setTimeout1.html:42 延时： 128650
```

【运行3】超时定时2分钟，将网页在后台运行，运行时间：（延时27s）
```
开始： 10:24:42 1600050282241
935[Violation] 'setInterval' handler took <N>ms
setTimeout1.html:41 结束： 10:27:09 1600050429325
setTimeout1.html:42 延时： 147084
```


【运行4】超时定时2分钟，将网页在后台运行，运行时间：（延时22s）
```
开始： 10:31:10 1600050670671
496[Violation] 'setInterval' handler took <N>ms
setTimeout1.html:41 结束： 10:33:33 1600050813328
setTimeout1.html:42 延时： 142657
```

【运行5】超时定时5分钟，将网页在后台运行，运行时间：（延时31s）
```
开始： 10:48:14 1600051694865
641[Violation] 'setInterval' handler took <N>ms
setTimeout1.html:41 结束： 10:53:46 1600052026334
setTimeout1.html:42 延时： 331469
```

### setTimeout定时不准小结

1. 定时2分钟，在PC Chrome网页切后台运行，延时误差就会达到27s。
1. 定时5分钟，在PC Chrome网页切后台运行，延时误差就会达到31s。

而token超时定时一般设置会是几个小时，几天等。setTimeout做token超时定时的方案不妥。

如果要做token定时超时，比较合适的方案是超时指令由后端发出。

### 超时定时设计方法

阅读《分布式实时系统原理与设计方法》

`客户端sdk` <-> `API网关` <-> `token服务器` 实质是一个分布式实时系统。

时间同步指令应该是由token服务器来同步；
退而求其次的设计方案是由API网关来同步时间给客户端sdk，而不是客户端sdk定时。


下次博客分享。

# Author
zhangbiwu

# FAQ

## Date

语法
dateObj.getTime() 
参数
无。

返回值
getTime 方法的返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的`毫秒数`。


## 《分布式实时系统原理与设计方法》

1. 实时系统最严格的时间要求来自于控制循环时间。

1. 精度和准确度
   时钟偏移。
   由于任何物理时钟均存在漂移问题，如果不进行周期性再同步，时钟间的差异将随着漂移越来越大。为确保一组时钟具有一定的时钟精度而进行的相互再同步成为内同步。

1. `同步条件`
   为了确保全局时基具有足够的精度，必须要周期性地对每个节点的全局时间节拍进行再同步。

1. 时钟
   RTC h264时钟频率90000/s。

# 参考链接

* 解决setInterval计时器不准的问题
https://blog.csdn.net/acm765152844/article/details/51298915

* 手机息屏导致 js 定时器时间不准问题及解决方法
https://juejin.im/post/6844903726558232590
