# 针对“JS实现函数return多个返回值”的方法

在使用JS编程中，有时需要在一个方法返回两个个或两个以上的数据，用下面的几种方法都可以实现：

## 使用数组的方式
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

## 将数据封装在Json中返回
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

## 通过对象的属性访问方法
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