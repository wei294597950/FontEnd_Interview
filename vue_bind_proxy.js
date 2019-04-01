//使用 Proxy 替换 Object.defineProperty

// Object.defineProperty 虽然已经能够实现双向绑定了，但是他还是有缺陷的。

// 1.只能对属性进行数据劫持，所以需要深度遍历整个对象
// 2.对于数组不能监听到数据的变化

//proxy 支持监听数组变化，并且可以直接对整个对象进行拦截

//reflect重新定义对Object的操作
//1. Object.defineProperty()这种内部操作放到Reflect上
//2. Reflect.defineProperty(obj,name,desc)无法定义是返回false,
//Object.defineProperty()会抛出错误
//3. Object的操作变成函数行为 
//4. Reflect对象的方法与Proxy对象的方法一一对应只要是Proxy对象的方法，
//就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。
//也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为

let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, property, receiver) {
            getLogger(target,property)
            return Reflect.get(target, property, receiver)
        },
        set(target, property, value, receiver) {
            setBind(value)
            return Reflect.set(target, property, value,receiver)
        }
    }
    return new Proxy(obj,handler)
}

let obj = { a: 1}
let value
let p = onWatch(obj,v=>{
    value = v
},
(target,property)=>{
    console.log(`Get '${property}' = ${target[property]}`)
})

p.a = 2;
p.a