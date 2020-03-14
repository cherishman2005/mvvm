# promise

## promise封装XMLHttpRequest


### XMLHttpRequest原型调用

```javascript
function reqListener () {
  console.log(this.responseText);
}

let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://service-test.sunclouds.com/test");
oReq.send();
```

### XMLHttpRequest promise封装

```javascript
function reqListener () {
  console.log(this.responseText);
}

let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://service-test.sunclouds.com/test");
oReq.send();
```