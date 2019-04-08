//组合继承  结合call继承和原型继承

function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
Parent.prototype.doSomething = function() {
    console.log('parent do something!');
}
function Child(name, parentName) {
    Parent.call(this, parentName);      // 第二次调用
    this.name = name;
}

Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}

Child.prototype = new Parent();         // 第一次调用
Child.prototype.construtor = Child;

var child = new Child('son');
child.sayName();      
child.doSomething();   


// 原理： 
// 子类构造函数中使用Parent.call(this);的方式可以继承写在父类构造函数中this上绑定的各属性和方法； 
// 使用Child.prototype = new Parent()的方式可以继承挂在在父类原型上的各属性和方法

// 既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

// 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
// 既是子类的实例，也是父类的实例
// 不存在引用属性共享问题
// 可传参
// 函数可复用
// 缺点：

// 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）