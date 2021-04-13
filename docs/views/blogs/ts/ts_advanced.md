---
title: 【TypeScript】- 入门进阶01
sidebar: "auto"
date: 2021-03-02
tags:
  - 基础 typescript
categories:
  - frontend
---

> 边学边写，冲冲冲

<!-- more -->

## ts 安装

全局安装：
```
npm install -g typescript

yarn add global typescript
```

## ts 认知

ts是javascript的超集，言外之意 JavaScript 的所有用法 TypeScript 都支持。哪怕js升级换代推出了es6,typescript 仍然吸收了es6的优点，并且继续发扬它的优点：
- 类型检查
- 支持更多实用类型（元组，枚举等）
- 代码提示 （秘密在于 d.ts 文件）

## 常用基础类型

null,undefined,symbol,boolean，void 这些都是最常用的基础数据类型

```js
const count: number = 918;
```

: 表示解释说明的意思，也就是对变量的类型标明；

* void: 用于表示一个函数没有返回值，声明一个变量的时候，只能为其赋值undefined 和 null。

## 数组，元组，枚举

- 数组的类型声明有两种形式：
```
Array<T>, T[], 
```

- 元组比数组更严格的限制，元组中的类型定义是严格按照顺序来的。

```
let colors: [string, number] = ['hello', 99];
```
- 枚举：列举出所有可能的值, 分为数值枚举和字符串枚举

```
enum Color{
  Black,
  Yellow,
  Red,
}
let myColor: Color = Color.Black; // 输出为 0
let myColor: Color = Color.Yellow; // 输出为 1

```

```
enum Color {
  Red = 'red',
  Yellow = 'yellow'
}

console.log(Color.Yellow); // 输出为 yellow
```

## 接口

TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

``` ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj); //输出为 Size 10 Object
```

### 可选属性
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。使用 ？ 表示

```
interface SquareConfig {
  color?: string;
  width?: number;
}
```
### 只读属性
对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性。
```
interface Point {
    readonly x: number;
    readonly y: number;
}
```

### 附加属性
带有任意数量的其它属性;
```
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```

### 接口继承

* 接口继承类： 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
![Typescript 中文文档](https://www.tslang.cn/docs/handbook/interfaces.html)

## 类型断言


## 联合类型



## 参考

![typescript类型指南](https://nodelover.gitbook.io/typescript/)

![TypeScript 从入门到精通](https://juejin.cn/post/6844903886180843527)

![Typescript中文](https://www.tslang.cn/docs/handbook/type-inference.html)