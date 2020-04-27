
# Promise.race的用法

Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

```javascript
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
```


# Promise.all的用法

Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 promise 的结果。

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

const promise4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, 'fail');
});

Promise.all([promise1, promise2, promise3, promise4]).then(function(values) {
  console.log(values);
}).catch(e => { console.log(e); });
```

# Promise.any的用法


Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 完成，就返回那个已经有完成值的 promise 。如果可迭代对象中没有一个 promise 完成（即所有的 promises 都失败/拒绝），就返回一个拒绝的 promise，返回值还有待商榷：无非是拒绝原因数组或AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。
注意！ Promise.any() 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 TC39 第三阶段草案（Stage 3）