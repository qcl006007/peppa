---
title: 有趣的CSS
sidebar: 'auto'
date: 2021-03-31
tags:
 - css 有趣的事情
categories:
 - css frontend
---

## 

1. this 在 JavaScript 中使用场景。

作为函数调用，this 绑定全局对象，浏览器环境全局对象为 window 。

内部函数内部函数的 this 也绑定全局对象，应该绑定到其外层函数对应的对象上，这是 JavaScript的缺陷，用that替换。
作为构造函数使用，this 绑定到新创建的对象。

作为对象方法使用，this 绑定到该对象。

使用apply或call调用 this 将会被显式设置为函数调用的第一个参数。

2. 