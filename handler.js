const msgHandler = {
  name: 'zhangbiwu',
  hello() {
    console.log('hello');
  }
};

const data = {type: 'hello'};

msgHandler[data.type]();

console.log("msgHandler.name=" + msgHandler.name);
console.log(`msgHandler['name']=` + msgHandler['name']);