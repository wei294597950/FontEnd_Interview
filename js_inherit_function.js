//寄生组合继承

function father(name){
    this.name = name;
}

father.prototype.show = function(){
    console.log("this is father")
}

function child(name){
    father.call(this)
    this.name = name;
}

//用一个 F 空的构造函数去取代执行了 Parent 这个构造函数
var proxy = function(){}
proxy.prototype = father.prototype
child.prototype = new proxy();   



child.prototype.getname = function(){
    console.log(this.name)
}

var child1 = new child('xuwei');
child1.getname();
child1.show();



// 寄生组合式继承方式，跟组合式继承的区别在于，他不需要在一次实例中调用两次父类的构造函数，

// 假如说父类的构造器代码很多，还需要调用两次的话对系统肯定会有影响，

// 寄生组合式继承的思想在于：用一个 F 空的构造函数去取代执行了 Parent 这个构造函数。