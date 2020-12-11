
# try-catch-finally

最简单最常见的示例：没有发生异常，然后没有走catch，执行顺序是try=>finally=>return；

```
try {
  throw new Error("oops");
} /*catch (e) {
  console.log(e);
} */finally {
  console.log("finally");
}
```

运行结果：
```
Error: oops
```


# 时间统计

```
let id = Date.now()
console.time(`sendData_${id}`)

for (let i = 0; i < 100; i++) {
  console.log("hello");
}

console.timeEnd(`sendData_${id}`)
```
