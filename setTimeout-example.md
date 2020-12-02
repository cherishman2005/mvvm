
# setTimeout

```
let obj ={seqId: {low: 1}}

function hello(obj) {
  console.log(obj)
  setTimeout(hello, 1000, obj);
}

hello(obj);

obj = {seqId: {low: 10}}

obj.seqId.low = 40;
```
