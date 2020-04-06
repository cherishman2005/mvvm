#querySelector定义和用法

querySelector()方法返回文档中匹配指定 CSS 选择器的一个元素。
注意： querySelector()方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js tutorial</title>
</head>
<body>
<kk></kk>
<p class="test">aaa</p>
<p id="demo">id="demo" 的 p 元素</p>
<p> 点击按钮修改 id="demo" 的 p 元素内容</p>
<button onclick="myFunction()">点我</button>
<script>
const $ = document.querySelector.bind(document);

$(".test").textContent = "Hello nginx";
	
function myFunction() {
    document.querySelector("#demo").innerHTML = "Hello World!";
	document.querySelector(".test").textContent = "Hello vue";
	document.querySelector("kk").innerHTML = "Hello kk";
}
</script>

</body>
</html>
```