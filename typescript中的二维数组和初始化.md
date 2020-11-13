# typescript中的二维数组和初始化

在javascript中其实没有二维数组的类型, 我们实现二维数组的方法是向数组的元素插入数组, 而typescript提供了不一样的方式来表示二维数组.

typescript的二维数组写法如下:
```
let twoM : string[][]
```
这是变成成js后的代码
```
var twoM;
```
也可以用Array
```
let twoM : Array<Array<string>>;
```
建议声明数组用Array, 代码比较清晰.
请注意这段代码, 编译成js后, 变量是不会自动初始化成数组的, 如果之后直接给twoM插入一个值会报错, 例如:
```
let twoM : string[][]
twoM.push(["abc"])
```
编译成功, 但是执行编译后的js会出现这个错误
```
TypeError: Cannot read property 'push' of undefined
```
我们看看编译后的js
```
var twoM;
twoM.push(["abc"]);
```
由于twoM只是声明了, 并没有初始化, 所以运行的时候变量的初始值是undefined.

要避免这个错误, 可以在声明的时候初始化变量
```
let twoM : string[][] = []
//或
let twoM : Array<Array<string>> = new Array<Array<string>>()
```
这样编译后的js就是
```
var twoM = [];
//或
var twoM = new Array();
```
现在运行就不会出问题了, 这里还要注意, 由于是二维数组, 所以第二维还是undefined的, 不能直接twoM[0][1] = "a1", 这样可以编译通过, 但是执行的时候会出现刚才同样的错误.

正确的初始化方式是这样的
```
twoM[0] = ["a1", "a2", "a3"]  //直接赋值数组
twoM.push([])  //先插入一个空的数组
twoM[1][1] = "b2"  //再向刚插入的数组赋值
```
在javascript中其实没有二维数组的类型, 我们实现二维数组的方法是向数组的元素插入数组, 虽然typescript提供了不一样的方式来表示二维数组, 但是最终编译成js的实现形式其实没有多大改变, 所以有几点需要注意:

用中括号的方式定义数组不够清晰, 最好用Array
数组要初始化才可以使用
二维数组需要每个维度都初始化的, 如果只初始化了第一个维度, 其他维度直接使用还是会报错

# 参考链接

- [https://www.jianshu.com/p/be871ff2fee4](https://www.jianshu.com/p/be871ff2fee4)