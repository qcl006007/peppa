---
title: 前端基础 - 手写系列
sidebar: 'auto'
date: 2020-12-03
tags:
 - 源码
categories:
 - code
---

> 磨刀不误砍柴工 🕵🕵🕵

<!-- more -->


## 实现 call、apply、bind

### call
```
function myCall(ctx = window, ...args) {
  ctx = ctx || window;
  // 为context 创建一个 Symbol（保证不会重名）属性，将当前函数赋值给这个属性
  const fn = Symbol();
  ctx[fn] = this;
  // 处理参数，传入第一个参数后的其余参数
  const res = ctx[fn](...args);
  // 调用函数后即删除该Symbol属性
  delete ctx[fn];
  return res;
}
Function.prototype.call = function (context, ...args) {

  var context = context || window;

  context.fn = this;

  var result = eval('context.fn(...args)');

  delete context.fn

  return result;

}
```
### apply

```
function myApply(ctx = window, args) {
  ctx = ctx || window;
  const fn = Symbol();
  ctx[fn] = this;
  if (Array.isArray(args)) {
    result = ctx[fn](...args);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return res;
}
Function.prototype.apply = function (context, args) {

  let context = context || window;

  context.fn = this;

  let result = eval('context.fn(...args)');

  delete context.fn

  return result;

}
```
### bind
```
function myBind(ctx, ...args1) {
  const _this = this;
  return function F(...args2) {
    if (this instanceof F) {
      // 判断是否为构造函数调用，如果是则使用new调用当前函数
      return new _this(...args1, ...args2)
    } else {
      // 如果不是，使用apply，将context和处理好的参数传入
      return _this.apply(ctx, args1.concat(args2))
    }
  }
}
```

## 实现发布订阅、观察者模式

[观察者模式与订阅发布模式的区别](https://www.cnblogs.com/onepixel/p/10806891.html)

`一句话总结： 发布-订阅模式是面向调度中心编程的，而观察者模式则是面向目标和观察者编程的。前者用于解耦发布者和订阅者，后者用于耦合目标和观察者`

## 发布订阅

```
class PubSub {
	constructor() {
		this.subers = [];
	}

	sub(topic, callback) {
		let callbacks = this.subers[topic];
		if (!callbacks) {
			this.subers[topic] = [callback];
		} else {
			callbacks.push(callback);
		}
	}

	pub(topic, ...args) {
		let callbacks = this.subers[topic];
		callbacks.forEach(callback => callback(...args))
	}
}

const aEvent = (msg) => {
	console.log(msg + 'aaa');
}

const bEvent = (msg) => {
	console.log(msg + 'bbb');
}

let pubsub = new PubSub();

pubsub.sub('a', aEvent)
pubsub.sub('b', bEvent)

pubsub.pub('a', 'A订阅者')
pubsub.pub('b', 'B订阅者')
```
### 观察者模式

```
class Sub {
	constructor() {
		this.obers = []
	}

	add(ob) {
		this.obers.push(ob)
	}

	notify(...args) {
		this.obers.forEach(ob => ob.update(...args))
	}
}

class Ob {
	update(...args) {
		console.log(...args)
	}
}

let ob1 = new Ob();
let ob2 = new Ob();

let sub = new Sub();

sub.add(ob1)
sub.add(ob2)


sub.notify('目标发生了变化')
```

## debounce
一段时间内只执行最后一次
```
function debounce(fn, delay=500) {
    // timer 写在闭包中，因此防抖也是闭包的一个应用
    let timer = null;

    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay)
    }
}

// 验证
input1.addEventListener('keyup', debounce(() => {
    console.log(input1.value);
}), 600)
```
## throttle
一段时间内只执行第一次
```
function throttle(fn, delay = 100) {
    let timer = null

    return function() {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            clearTimeout(timer) 
            timer = null
        }, delay)
    }
}

div1.addEventListener(('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
})))
```

## 找出父级id

已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
题目描述：
```
const list = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]

        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];
const id = '112'
const fn = (value) => {
...
}
fn(id, list) // 输出 [1， 11， 112]

```

答案：仔细观察题目发现，整个数据结构可以当作一颗不规则n叉树，针对list中的每一个item都可以当作一棵树，运用深度优先遍历找到从根节点到目标节点的路径，路径上的节点id就是要寻找的。
```

function findParentIds(id, list) {
  let result = [];
  list.forEach(tree => {
    let temp = [];
    dfs(tree, id, temp);
    if (temp.length > 0) {
      result.push(temp);
    }
  });
  return result.length>1? result: result[0];

}

function dfs(root, id, result) {
  if (root.id === id) {
    result.unshift(root.id);
    return true;
  }
  if (root.children == undefined) {
    return false;
  }
  for (let child of root.children) {
    if (dfs(child, id, result)) {
      result.unshift(root.id);
      return true;
    }
  }
  return false;
}

```

## 获取页面所有的 tagname

```
let tags = [...document.querySelectorAll(*)].map(elem => elem.tagName);

return [...new Set(tags)];

```

## 二叉树的非递归中序遍历



## 快速排序