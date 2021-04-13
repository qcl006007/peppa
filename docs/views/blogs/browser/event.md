


## 浏览器事件驱动

事件驱动通俗地来说就是什么都抽象为事件。

一次点击是一个事件
键盘按下是一个事件
一个网络请求成功是一个事件
页面加载是一个事件
页面报错是一个事件
...

通过事件驱动，实现了浏览器和用户之间的各种交互，值得注意的是，事件并不是javascript的核心概念，尤其是web相关的事件，是浏览中的内置API。

[浏览器事件模型](https://juejin.cn/post/6844903998495932423)
[Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

## 事件分级

DOM事件分为：dom0、dom2、dom3事件；
1. dom0事件的监听可以通过内联和直接赋值实现，如下所示：
内联
```
<button onclick="handleClick()">Press me</button>
```

```
var btn = document.querySelector('button');

btn.onclick = function() {
  console.log('button clicked')
}
```
缺点是：
* 不能添加多个同类型的handler
* 不能控制在哪个阶段来执行，这个会在后面将事件捕获/冒泡的时候讲到。

2. dom2 级事件是通过addEventListener实现。

使用方法：
```
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
```
type是你想要绑定的事件类型，常见的有click, scroll, touch, mouseover等，旧版本的第三个参数是bool，表示是否是捕获阶段，默认是false，即默认为冒泡阶段。新版本是一个对象，其中有capture（和上面功能一样），passive和once和signal。其中passive用来表示是否可以执行preventDefault();
signal可以用来取消事件的监听和后续的响应。
```
const controller = new AbortController();
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal }); // pass an AbortSignal to this handler
```
如果要取消监听controller，除了使用removeListener,还可以调用
```
controller.abort();
```

3. dom3级事件

DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下：

UI事件，当用户与页面上的元素交互时触发，如：load、scroll

焦点事件，当元素获得或失去焦点时触发，如：blur、focus

鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup

滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel

文本事件，当在文档中输入文本时触发，如：textInput

键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress

合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart

变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified

同时DOM3级事件也允许使用者自定义一些事件。

## 事件传播

Element上绑定的事件触发了，那么其实会经过三个阶段。

* 第一个阶段 - 捕获阶段
从最外层即HTML标签开始，检查当前元素有没有绑定对应捕获阶段事件，如果有则执行，没有则继续往里面传播，这个过程递归执行直到触达触发这个事件的元素为止。

* 第二个阶段 - 目标阶段

* 第三个阶段 - 冒泡阶段
从触发这个事件的元素开始，检查当前元素有没有绑定对应冒泡阶段事件，如果有则执行，没有则继续往里面传播，这个过程递归执行直到触达HTML为止。

如果一个事件在捕获和冒泡阶段都进行了监听和处理，捕获阶段会先进行处理，之后是冒泡阶段。


## 事件代理

事件代理对于处理大量相似元素有很强的作用。
比如：有一个如下的列表，想在点击对应列表项的时候，输出是点击了哪个元素。
```
<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul>
```
可在父元素上添加事件监听：

```
document.getElementById('parent-list').onclick = (e) => {console.log(e.target.contentText);}
```

我们只给外层的ul绑定了事件处理函数，但是可以看到li点击的时候，实际上会打印出对应li的内容（1，2，3或者4）。 我们无须给每一个li绑定事件处理函数，不仅从代码量还是性能上都有一定程度的提升。