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
    xhr.open(method, url);
    
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText, this);
        } else {
           let resJson = {code: this.status, response: this.response};
           reject(resJson, this);
        }
      }
    }
    
    xhr.send();
  });
}

httpRequest("GET", "https://service-test.sunclouds.com/test").then(res => {
  console.log(res);
}).catch(e => {
  console.error("err=", e);
})
```