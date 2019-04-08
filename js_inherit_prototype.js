
//原型链继承

function Parent(name) { 
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
function Child(name) {
    this.name = name;
}

Child.prototype = new Parent('father');
Child.prototype.constructor = Child;

Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}

var child1 = new Child('son');
child1.sayName();    // child name: son

console.log(child1 instanceof Child)
console.log(child1 instanceof Parent)

//原理：用父类的实例作为子类的原型

//非常纯粹的继承关系，实例是子类的实例，也是父类的实例   父类新增原型方法/原型属性，子类都能访问到