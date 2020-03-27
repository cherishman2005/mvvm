# FAQ

## 引入顺序问题

index页面引入的两个js文件，分别是a1.j、a2.js，a2是该页面的主js，而a1.js是需要用的插件js，a2文件用到了a1文件中定义的变量。

一开始在html页面引入时将插件js文件a1.js放在a2.js后面，所以浏览器后台报错那个变量没有定义的问题。

然后看了下引入的文件，猜测可能是引入顺序问题，调换顺序之后，问题解决。


## Typescript get和set属性

Typescript还支持get和set属性。 Get和Set Properties实际上称为Accessors。属性的访问器包含获取（读取）或设置（写入）属性相关联的可执行语句。声明可以包含get访问器或set访问器或两者。
```typescript
class User {
    private _fullName: string = '';

    get fullName() {
        return this._fullName;
    }

    set fullName(name) {
        this._fullName = name;
    }
 }

 let user = new User();

 user.fullName = 'nginx vue';

 console.log(user.fullName);
```

## hash算法

DJB Hash

```C
unsigned int DJBHash(char *str)    
{    
    unsigned int hash = 5381;    
     
    while (*str){    
        hash = ((hash << 5) + hash) + (*str++); /* times 33 */    
    }    
    hash &= ~(1 << 31); /* strip the highest bit */    
    return hash;    
}    
```

```typescript
  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }
```

## handler处理示例

```javascript
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
```


## jQuery 选择器

$(this).hide()

演示 jQuery 的 hide() 函数，隐藏当前的 HTML 元素。

$("p").hide()

演示 jQuery 的 hide() 函数，隐藏所有 <p> 元素。

$(".test").hide()

演示 jQuery 的 hide() 函数，隐藏所有 class="test" 的元素。

$("#test").hide()

演示 jQuery 的 hide() 函数，隐藏 id="test" 的元素。
