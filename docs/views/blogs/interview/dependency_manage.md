---
title: 前端依赖管理 - 包管理系列
sidebar: 'auto'
date: 2020-04-10
tags:
 - js 依赖 
categories:
 - npm yarn 工程化
---

## 依赖包管理工具

对于现在的前端开发，大多数情况下我们需要借助各种各样的工具包来实现特定功能。目前比较流行的包管理工具有 npm, yarn, tink.

对于不同的开发场景，选择适合的管理工具会事半功倍，我们来分析一下各自的优缺点：

npm 是一个相对历史悠久的包管理工具，而yarn是在近些年由Facebook联合开发出的新一代包管理工具，致力于解决npm中存在的一些问题。

### 命令行比较

![](/images/package_01.png)

npm CLI的一些出色功能

1. 其中许多功能都必须与npx结合使用，npx是用于执行Node包的工具。
2. Shell 自动回退


Yarn的CLI的一些出色功能

1. 工作区概念：它是与Monorepo概念紧密相关的功能，Monorepo概念是一种软件开发策略，可鼓励将各种项目的代码存储在同一存储库中。 工作区很有用，因为它们使开发人员可以将每个项目依赖项包含在单个工作区中（再加上一个单独的锁定文件将它们全部规则化）。
2. 交互式升级也是一个简洁的小功能。

### 依赖项的缓存
不少开发者认为 yarn 会缓存下载过的依赖项，而npm每次重新下载，实际上，npm在每次安装依赖项的时候也会尝试使用缓存，或者通过一些config告诉npm优先使用缓存。

### 性能比较

yarn在刚推出时，安装依赖的性能是要远高于npm的，然而Npm在其5，6版本已经对性能做了很大的改进，从如下的对比可以看出：
![](/images/package_02.png)
尽管yarn仍然比npm快，但它们可以说是处在一个数量级上的。

### 升级依赖包

yarn 和 npm 使用方式基本相同，分为升级全部依赖和指定依赖。
```
yarn update

yarn update [package-name]
```

```
npm update

npm update [package-name]
```

### 依赖版本控制

目前yarn 和 npm 都通过lock 文件来描述依赖包的准确版本，这有利于保持开发环境的一致性，利于devops的集成。

## 参考

* [NPM vs. Yarn: Which Package Manager Should You Choose?](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/)

* [npm官网](https://blog.npmjs.org/)

* [NPM 5, NPM 6, Yarn: real world installation times comparisons](https://medium.com/@proustibat/npm-5-npm-6-yarn-real-world-installation-times-comparisons-a0821e592bcc)




