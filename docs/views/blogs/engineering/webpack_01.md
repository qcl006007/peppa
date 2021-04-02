---
title: Webpack 之 plugin
sidebar: 'auto'
date: 2021-03-31
tags:
 - Webpack 工程化
categories:
 - Webpack 工程化
---

## Webpack plugin

### Loader和Plugin的区别

- loader: 顾名思义，某种类型资源文件的加载器，作用于某种类型的文件上。webpack 本身也是不能直接打包这些非 js 文件的，需要一个转化器即 loader。 loader 本身是单一，简单的，不能将多个功能放在一个loader里。
- plugin: plugin 比 loaders 更加先进一点，你可以扩展 webpack 的功能来满足自己的需要。当 loader 不能满足的时候，就需要 plugin 了。

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。


### Plugin
常见的Plugin插件有：MiniCssExtractPlugin, HtmlWebpackPlugin, CopyWebpackPlugin等等。

webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 整个 编译生命周期都可以访问 compiler 对象。

官网的例子：

```
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建过程开始！');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;

```

### compiler Compilation

在插件开发中最重要的两个资源就是 compiler 和 compilation 对象。理解它们的角色是扩展 webpack 引擎重要的第一步。

- compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。

- compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。


### 手写Plugin

目前Webpack最新的版本是5.0，一些钩子hook也发生了变化，按照最新的api，实现一个加banner的plugin，用作练习。

在手写plugin之前，我们再对整个webpack的编译过程进行一次梳理：
![](/images/webpack_01.png)

未完待续---
