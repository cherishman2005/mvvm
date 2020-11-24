# 针对“JS实现函数return多个返回值”的方法

在使用JS编程中，有时需要在一个方法返回两个个或两个以上的数据，用下面的几种方法都可以实现：

## 使用数组的方式

【示例】
```
function getData()
{
  var names = new Array("oec2003","oec2004");
  return names;
}

function getNames()
{
  var names = getData();
  alert(getData()[0]); //返回oec2003
}
```

## 通过json对象返回

【示例1】
```
function getData()
{
  var info = {"name":"oec2003", "age":"25"};
  return info;
}

function getInfo()
{
  var info = getData();
  var name = info["name"];
  var age = info["age"];
  alert("姓名："+name+" 年龄："+age);
}
```

【示例2】
```
function add(a,b) {
  var sum;
  var sub;
  return {
    sum: a+b,
    sub: a-b
  }
}

var obj = add(5,2);
console.log(obj.sum);
console.log(obj.sub);
```
