# setTimeout使用注意事项

setTimeout正常使用时最多支持24天定时，并且定时一般不准，要求较低时可以凑合着使用下。
```
Math.pow(2,31)/1000/3600/24
24.855134814814814
```

setTimeout一般只会做较短时间定时使用。

setTimeout(cb, ms)

在至少ms毫秒后调用回调cb。实际延迟取决于外部因素，如操作系统定时器粒度及系统负载。

超时值必须在1-2147483647的范围内（包含1和2147483647）。如果该值超出范围，则该值被当作1毫秒处理。一般来说，一个定时器不能超过24.8天。


## 各浏览器的setTimeout最大延时上限

* IE8：Math.pow(2, 32) – 1 => 4294967295

* Chrome dev 11.0、FF4、Safari 5 则为：Math.pow(2, 31) – 1 => 2147483647

* Opera 接近于无穷大，也就是：Infinity  - 1 （未证实）

# 小结

* setTimeout嵌套调用5次以上，时间间隔最小为4毫秒；
* 在未激活页面运行，最小时间间隔为1000毫秒；
* 最大时间间隔为32个bit可存储的值，也就是2147483647 毫秒（大约 24.8 天）。

# FAQ

## 定时任务为什么要用setInterval去实现啊，你能保证一个月中间node进程不挂？

用其他成熟的定时任务方案。

# Author

zhangbiwu 

2020.10.02

# 参考链接

-[https://cnodejs.org/topic/53fd6d8b7c1e2284784244c8](https://cnodejs.org/topic/53fd6d8b7c1e2284784244c8)


关于setTimeout的最大延时上限
- [https://www.cnblogs.com/meteoric_cry/archive/2011/04/01/2002240.html](https://www.cnblogs.com/meteoric_cry/archive/2011/04/01/2002240.html)
