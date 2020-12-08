
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

