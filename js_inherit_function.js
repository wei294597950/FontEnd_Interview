 var animal = function(){}

animal.prototype.show = function(){
        console.log("this is animal")
    }


var dog = function(){}

var proxy = function(){}

proxy.prototype = animal.prototype

dog.prototype = new proxy();

var dog1 = new dog()

dog1.show();