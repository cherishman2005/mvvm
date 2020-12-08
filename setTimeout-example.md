
# setTimeout

【示例1】
```
let obj ={seqId: {low: 1}}

function hello(obj) {
  console.log(obj)
  obj.seqId.low = obj.seqId.low + 100;
  setTimeout(hello, 1000, obj);
}

hello(obj);

//obj = {seqId: {low: 10}}

obj.seqId.low = 40;
```



【示例2】
```
let obj ={seqId: {low: 1}}

function hello(data) {
  console.log(data)
  data.seqId.low = data.seqId.low + 100;
  setTimeout(hello, 1000, data);
}

hello(obj);

//obj.seqId.low = 40;

console.log("obj=" ,obj);
```