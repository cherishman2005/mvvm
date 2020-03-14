# promise

## promise封装XMLHttpRequest


### XMLHttpRequest原型调用

```javascript
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", () => {
  console.log(oReq.responseText);
});

oReq.open("GET", "https://service-test.sunclouds.com/test");
oReq.send();
```

### XMLHttpRequest promise封装

```javascript
function httpRequest(method, url, data) {
  return new Promise((resolve, reject) => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", () => {
      resolve(oReq.responseText);
    });

    oReq.open(method, url);
    oReq.send();
  });
}

httpRequest("GET", "https://service-test.sunclouds.com/test").then(res => {
  console.log(res);
}).catch(e => {
  console.error("err=", e);
})
```