
# watch

观察模式下，dataA发生变化，触发一系列data操作。


示例：
```javascript
data() {
  return {
    tokenType: '',
    tokenTypes: [],
  }
},
watch: {
  tokenType: function(val) { 
    this.tokenTypes.forEach(e => {
      if (val == e.value) {
        this.tokenTypeLabel = e.label;
      }
    })
  },
},
```
tokenType变化时，触发一系列操作。

# computed

主要用作计算

观察模式下，一系列data数据发生变化时，通过运算操作，给一个data属性赋值。

```javascript
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

优化为

```javascript
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>


var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```


# filters

filters包括全局过滤和局部过滤

```javascript
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

优化为

```javascript
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ message | reverse }}"</p>
</div>


var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  filtes: {
    reverse: function (message) {
      return message.split('').reverse().join('')
    }
  }
})
```

# watch/computed/filters区别

1.watch擅长处理的：一个数据影响多个数据

2.computed擅长处理的：一个数据受多个数据影响


