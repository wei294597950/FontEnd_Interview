function sum(...args){
	// var args=[...args]
	var cache=0
	if(args.length===0){
		throw new Error('参数不能为空')
	}else {
		for(let i=0;i<args.length;i++){
			cache+=args[i]
		}
    }
    return function(...args1){
        // var args1=[...args1]
		if(args1.length===0){
			throw new Error('参数不能为空')
		}
		for(let i=0;i<args1.length;i++){
			cache+=args1[i]
        }
        return function valueOf(){
            console.log(cache)
        }
	}

    
    
	// var add=function(...args1){
	// 	// var args1=[...args1]
	// 	if(args1.length===0){
	// 		throw new Error('参数不能为空')
	// 	}
	// 	for(let i=0;i<args1.length;i++){
	// 		cache+=args1[i]
	// 	}
	// 	return add
	// }
	// add.valueOf=function(){
	// 	console.log(cache)
    // }
	// return add
}

function  addcurry(n){
    console.log(n);
    return function g(b){
        console.log(b);
        return function h(c){
            console.log(c);
            return function k(e,d){
                return n+b+c+d+e;
            }
        }
    }
}


var a = addcurry(2)
var  a2 = a(5);
var a3 = a2(8);

b  = a3(5,5);
c = addcurry(2)(5)(8)(5,5)

console.log(b)
console.log(c)


sum(1,2,3)(2).valueOf()




// 为了在arguments对象上使用Array方法，它必须首先被转换为一个真正的数组。


function sortArguments() {
  var args = Array.prototype.slice.call(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // shows 1, 3, 5, 7


// 剩余参数和 arguments对象之间的区别主要有三个：

// 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
// arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
// arguments对象还有一些附加的属性 （如callee属性）。

// arguments.callee代表函数名，多用于递归调用，防止函数执行与函数名紧紧耦合的现象，对于没有函数名的匿名函数也非常起作用。