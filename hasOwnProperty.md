# Object.prototype.hasOwnProperty判定json-object里面是否存在某个key值

```javascript
class Utils {
  static hasOwn(obj, key) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(obj, key)
  }
}

let user = {name: "awu", age: 30};

console.log(Utils.hasOwn(user, 'name'));

console.log(Utils.hasOwn(user, 'age1'));
```