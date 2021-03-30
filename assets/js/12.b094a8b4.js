(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{506:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("磨刀不误砍柴工 🕵🕵🕵")])]),s._v(" "),a("h2",{attrs:{id:"实现-call、apply、bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-call、apply、bind"}},[s._v("#")]),s._v(" 实现 call、apply、bind")]),s._v(" "),a("h3",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[s._v("#")]),s._v(" call")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function myCall(ctx = window, ...args) {\n  ctx = ctx || window;\n  // 为context 创建一个 Symbol（保证不会重名）属性，将当前函数赋值给这个属性\n  const fn = Symbol();\n  ctx[fn] = this;\n  // 处理参数，传入第一个参数后的其余参数\n  const res = ctx[fn](...args);\n  // 调用函数后即删除该Symbol属性\n  delete ctx[fn];\n  return res;\n}\nFunction.prototype.call = function (context, ...args) {\n\n  var context = context || window;\n\n  context.fn = this;\n\n  var result = eval('context.fn(...args)');\n\n  delete context.fn\n\n  return result;\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[s._v("#")]),s._v(" apply")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function myApply(ctx = window, args) {\n  ctx = ctx || window;\n  const fn = Symbol();\n  ctx[fn] = this;\n  if (Array.isArray(args)) {\n    result = ctx[fn](...args);\n  } else {\n    result = ctx[fn]();\n  }\n  delete ctx[fn];\n  return res;\n}\nFunction.prototype.apply = function (context, args) {\n\n  let context = context || window;\n\n  context.fn = this;\n\n  let result = eval('context.fn(...args)');\n\n  delete context.fn\n\n  return result;\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[s._v("#")]),s._v(" bind")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function myBind(ctx, ...args1) {\n  const _this = this;\n  return function F(...args2) {\n    if (this instanceof F) {\n      // 判断是否为构造函数调用，如果是则使用new调用当前函数\n      return new _this(...args1, ...args2)\n    } else {\n      // 如果不是，使用apply，将context和处理好的参数传入\n      return _this.apply(ctx, args1.concat(args2))\n    }\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"实现发布订阅、观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现发布订阅、观察者模式"}},[s._v("#")]),s._v(" 实现发布订阅、观察者模式")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/onepixel/p/10806891.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("观察者模式与订阅发布模式的区别"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("code",[s._v("一句话总结： 发布-订阅模式是面向调度中心编程的，而观察者模式则是面向目标和观察者编程的。前者用于解耦发布者和订阅者，后者用于耦合目标和观察者")])]),s._v(" "),a("h2",{attrs:{id:"发布订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[s._v("#")]),s._v(" 发布订阅")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class PubSub {\n\tconstructor() {\n\t\tthis.subers = [];\n\t}\n\n\tsub(topic, callback) {\n\t\tlet callbacks = this.subers[topic];\n\t\tif (!callbacks) {\n\t\t\tthis.subers[topic] = [callback];\n\t\t} else {\n\t\t\tcallbacks.push(callback);\n\t\t}\n\t}\n\n\tpub(topic, ...args) {\n\t\tlet callbacks = this.subers[topic];\n\t\tcallbacks.forEach(callback => callback(...args))\n\t}\n}\n\nconst aEvent = (msg) => {\n\tconsole.log(msg + 'aaa');\n}\n\nconst bEvent = (msg) => {\n\tconsole.log(msg + 'bbb');\n}\n\nlet pubsub = new PubSub();\n\npubsub.sub('a', aEvent)\npubsub.sub('b', bEvent)\n\npubsub.pub('a', 'A订阅者')\npubsub.pub('b', 'B订阅者')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[s._v("#")]),s._v(" 观察者模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Sub {\n\tconstructor() {\n\t\tthis.obers = []\n\t}\n\n\tadd(ob) {\n\t\tthis.obers.push(ob)\n\t}\n\n\tnotify(...args) {\n\t\tthis.obers.forEach(ob => ob.update(...args))\n\t}\n}\n\nclass Ob {\n\tupdate(...args) {\n\t\tconsole.log(...args)\n\t}\n}\n\nlet ob1 = new Ob();\nlet ob2 = new Ob();\n\nlet sub = new Sub();\n\nsub.add(ob1)\nsub.add(ob2)\n\n\nsub.notify('目标发生了变化')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"debounce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debounce"}},[s._v("#")]),s._v(" debounce")]),s._v(" "),a("p",[s._v("一段时间内只执行最后一次")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function debounce(fn, delay=500) {\n    // timer 写在闭包中，因此防抖也是闭包的一个应用\n    let timer = null;\n\n    return function() {\n        if (timer) {\n            clearTimeout(timer)\n        }\n        timer = setTimeout(() => {\n            fn.apply(this, arguments);\n            timer = null;\n        }, delay)\n    }\n}\n\n// 验证\ninput1.addEventListener('keyup', debounce(() => {\n    console.log(input1.value);\n}), 600)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"throttle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throttle"}},[s._v("#")]),s._v(" throttle")]),s._v(" "),a("p",[s._v("一段时间内只执行第一次")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function throttle(fn, delay = 100) {\n    let timer = null\n\n    return function() {\n        if (timer) {\n            return\n        }\n        timer = setTimeout(() => {\n            fn.apply(this, arguments)\n            clearTimeout(timer) \n            timer = null\n        }, delay)\n    }\n}\n\ndiv1.addEventListener(('drag', throttle(function (e) {\n    console.log(e.offsetX, e.offsetY)\n})))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);