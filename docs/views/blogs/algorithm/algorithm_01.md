---
title: 算法问题整理
sidebar: 'auto'
date: 2021-03-31
tags:
 - 算法 js
categories:
 - 算法
---

## 算法面试问题 day1

1. 这里先收集一些算法问题，后续的专题会逐渐解答。
![](/images/algo_01.png)

2. 异步请求通过 Promise.all 处理，怎么让其中失败的所有请求重试。

思考: 肯定是需要对原promise请求进行封装，all函数本身是肯定不具备这个功能的。
```
function wrapper(promise, count) {
    return new Promise((resolve, reject) => {

        promise.then(val => resolve(val))
            .catch(err => {
                if (count>2) reject(err);
                return wrapper(promise, count+1);
            });
    });
}

```
3. 如何实现 _.chunk(['a', 'b', 'c', 'd'], 2) 类似功能

```
function chunk(arr, size) {
    let result = [];
    for (let start =0; start<arr.length; start+=size) {
        if (start+size>arr.length) {
            result.push(arr.slice(start))
        } else {
            result.push(arr.slice(start, start+size));
        }
    }
    return result;
}
```

```
const chunk = (arr, len) => arr.reduce((pre, cur, index) => {
  if (index % len === 0) {
    pre.push([cur])
    return pre
  }
  const temp = pre[pre.length - 1]
  temp && temp.push(cur)
  return pre
}, [])
```

4. 页面上有三个按钮，分别为 A、B、C，点击各个按钮都会发送异步请求且互不影响，每次请求回来的数据都为按钮的名字。
请实现当用户依次点击 A、B、C、A、C、B 的时候，最终获取的数据为 ABCACB。