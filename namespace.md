

# namespace

namespace在typescript限定作用域，命名防止冲突。

   * [namespace](#namespace)
      * [声明方式](#声明方式)
      * [namespace 可以在多个文件中声明](#namespace-可以在多个文件中声明)
      * [Aliases](#aliases)
      * [跟其他JS库协同](#跟其他js库协同)
      * [Namespaces 与 Modules 的区别](#namespaces-与-modules-的区别)


## 声明方式
```typescript
namespace Validation{
  // 模块中其他代码
}
```


## namespace 可以在多个文件中声明

要引用命名空间中的其他组成部分。需要通过 /// <reference path="Validation.ts"/> 来告诉编译器。

在生成代码时，编译器可以通过 reference 声明来确定他们的顺序，这一方法同样适用于生成 <script> 标签。

## Aliases
可以通过 import q = x.y.z 的形式来为常用的命名空间比较深的对象创建别名。


## 跟其他JS库协同

类似模块，同样也可以通过为其他 JS 库使用了命名空间的库创建 .d.ts 文件的声明文件，如为 D3 JS 库，可以创建这样的声明文件：

```typescript
declare namespace D3{
    export interface Selectors { ... }
}
declare var d3: D3.Base;
```

## Namespaces 与 Modules 的区别

Namespaces 就好比是一个简单的 JS 全局对象。所以他们的区别是很明显。

另外现在 Modules 才是推荐的组织代码结构的方式。除非很有必要使用一个命名空间否则不不建议使用。
