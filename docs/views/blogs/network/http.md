---
title: Http 常见知识整理
sidebar: 'auto'
date: 2021-03-31
tags:
 - 网络 Http 协议
categories:
 - 网络
---

> 学习笔记，大图警告 🚫🚫🚫
<!-- more -->

清晨早起，先来几个简单的知识点回顾一下：

## Http 常见知识点

### Http 定义及优缺点

HTTP(超文本传输协议)  是 客户端 与 服务端 之间信息交流的 桥梁。
在信息交流之前必须要做的就是 客户端通过连接TCP/IP协议 80 端口 ，以便 服务端侦听HTTP请求。3.HTTP 是 一种通用的 ， 无状态的应用层协议，基于标准客户机/服务器模型。

优缺点：


### Http 请求状态码

100, 101, 200, 201, 301, 302, 400, 401, 403, 500, 502, 503; 

### Http 请求头字段

Request: Accept, Accpet-Charset, Accept-Encoding, Accept-Encoding, If-Modified-Since, User-Agent, Referer, Origin,

### Http 响应头字段

Respone: Date, Content-Type, Content-Encoding, Cache-Control, Etag, Last-Modified, 

### Http 常用请求方法，Get 与 Post 的区别

根据 HTTP 标准，HTTP 请求可以使用多种请求方法。 HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD方法。 HTTP/1.1 新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。

Get 与 Post的区别：

数据类型，编码类型，缓存，请求参数可见，长度限制

### Cookie 与 Session

介绍 Cookie 和 Session 的作用及它们之间的区别

1. Cookie简单介绍

Cookie是存储在用户本地计算机上，用于保存一些用户操作的历史信息，当用户再次访问我们的服务器的时候，浏览器通过HTTP协议，将他们本地的Cookie内容也发到咱们服务器上，从而完成验证。

- Cookie 是存储在浏览器客户的一小片数据；
- Cookie 可以同时被前台与后台操作；
- Cookie 可以跨页面存取；
- Cookie 是不可以跨服务器访问的；
- Cookie 有限制； 每个浏览器存储的个数不能超过300个，每个服务器不能超过20个，数据量不能超过4K；
- Cookie 是有生命周期的，默认与浏览器相同，如果进程退出，cookie会被销毁

2. Session

Session 存储在我们的服务器上，就是在我们的服务器上保存用户的操作信息。

当用户访问我们的网站时，我们的服务器会成一个 SessionID，然后把 SessionID 存储起来，再把这个 SessionID发给我们的用户，用户再次访问我们的服务器的时候，拿着这个 SessionID就能验证了，当这个ID能与我们服务器上存储的ID对应起来时，我们就可以认为是自己人。

-   seesion 数据存储在服务器端；
-   每一个会话分配一个单独的 session_id;
-   该 session_id 通过 cookie 传送到前台，默认的 session_id 名称是 PHPSESSIONID;
-   前台只能看到 Session 的 ID，而不能修改 Session 值;
-   使用 Session之前需要先开启会话;
-   Session存储在 Session数组 $_SESSION;
-   Session存储方式比较安全，但是如果 Session数量过多，会导致服务器性能下降;

区别： 存储位置，存储大小，安全性，存储时间

结合使用：

## 体系梳理

![思维导图](/images/http_01.jpg)

## 参考
* [快速梳理你的HTTP体系](https://mp.weixin.qq.com/s/4cwM_EI3VLTrgGtRpJd9mA)
