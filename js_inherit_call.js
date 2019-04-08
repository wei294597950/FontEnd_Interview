//类式继承 call继承

function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
Parent.prototype.doSomthing = function() {
    console.log('parent do something!');
}
function Child(name, parentName) {
    Parent.call(this, parentName);
    this.name = name;
}

Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}

var child = new Child('son');
child.sayName();      // child name: son
child.doSomthing();   // TypeError: child.doSomthing is not a function

// 相当于 Parent 这个函数在 Child 函数中执行了一遍，并且将所有与 this 绑定的变量都切换到了 Child 上，这样就克服了第一种方式带来的问题。

// 缺点：

// 没有原型，每次创建一个 Child 实例对象时候都需要执行一遍 Parent 函数，无法复用一些公用函数。

// 解决了1中，子类实例共享父类引用属性的问题
// 创建子类实例时，可以向父类传递参数
// 可以实现多继承（call多个父类对象）
// 缺点：

// 实例并不是父类的实例，只是子类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能