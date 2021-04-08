---
title: 基础CSS
sidebar: 'auto'
date: 2021-03-31
tags:
 - css basic
categories:
 - css frontend
---

## 基础问题

1. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

2. src和href的区别

3. display:none和visibility:hidden的区别，opacity=0

4. css的引入方式（link 和 @import）

5. BFC
- 理解
具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

- 用途

清除浮动元素，防止margin重叠, 阻止标准流元素被浮动元素覆盖

- 触发条件

body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)

6. Css绘出三角形

```
#triangle{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 50px solid red;
    }
```

7. 使用 CSS 预处理器的优缺点有哪些？(SASS，Compass，Stylus，LESS)



## 参考

* [10分钟讲懂BFC](http://www.itcast.cn/news/20201016/16152387135.shtml)
* [css在线实践](https://codepen.io/)





