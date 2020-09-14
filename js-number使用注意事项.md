# js-number

JS 中能精准表示的最大整数是 Math.pow(2, 53)，十进制即 9007199254740992。
大于 9007199254740992 的可能会丢失精度。

# setTimeout()可以支持定时多久？

```
function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
```

```
9007199254740992/1000/3600/24/365
285616.41472415626
```
可以定时28万年。但是setInterview