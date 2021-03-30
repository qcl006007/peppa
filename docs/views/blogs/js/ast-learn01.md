---
title: AST - 探究
sidebar: 'auto'
date: 2021-03-30
tags:
 - 编译
categories:
 - js
---

> 磨刀不误砍柴工 🕵🕵🕵

<!-- more -->

## AST

AST 指的是 抽象语法树（Abstract Syntax Tree, AST）。或许你会疑问，这与我们平时的开发有什么关系么？
在我们实际的开发中，JavaScript转译、css预处理器、elint、pretiier 等等这些模块我们不会在生产环境用到，但它们在我们的开发过程中充当着重要的角色，而所有的上述工具，都是建立在 AST 的基础上。

### AST 好看么
我们可以通过 https://astexplorer.net/ 去实际观察，一段代码在转换为AST后是什么样子的。
这里举例：
```
let add = (a,b) => a+b
```

```
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "add"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 25,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 12,
                "name": "a"
              },
              {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "name": "b"
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 20,
              "end": 25,
              "left": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "b"
              }
            }
          }
        }
      ],
      "kind": "let"
    }
  ],
  "sourceType": "module"
}  

```

一个 AST 的根节点始终都是 Program；
在根节点的下面，我们有一个变量声明，VariableDeclaration，其类型是let，其节点name是add。
这个add变量被初始化为箭头函数，含有两个参数，a和b。
其是一个BinaryExpression(二项式)，一个标准的二项式分为三部分：

- left(左边)：a

- operator(运算符)：加号 +

- right(右边)：b

## Babel 工作原理

![](/images/ast_01.png)

### API 总览
```
// 三剑客
const parser = require('@babel/parser').parse;
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// 配套包
const types = require('@babel/types');

// 模板包
const template = require('@babel/template').default;
```