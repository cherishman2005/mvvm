# promise

## promise封装XMLHttpRequest


### XMLHttpRequest原型调用

```javascript
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  console.log(xhr.responseText);
});

xhr.open("GET", "https://service-test.sunclouds.com/test");
xhr.send();
```

### XMLHttpRequest promise封装

```javascript
function httpRequest(method, url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      resolve(xhr.responseText);
    });

    xhr.open(method, url);
    xhr.send();
  });
}

httpRequest("GET", "https://service-test.sunclouds.com/test").then(res => {
  console.log(res);
}).catch(e => {
  console.error("err=", e);
})

```