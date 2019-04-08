


function Super(name) {
  this.name = name || 'xuwei';
}

Super.prototype.getNumber = function() {
  return this.name;
}

Super.prototype.getsuper = function() {
  console.log('super');
}

function Sub(name) {
  Super.call(this);
  this.name = name
}

// Sub.prototype = Object.create(Super.prototype, {
//   constructor: {
//     value: Sub,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// })
Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub;

let s = new Sub('lsj')


console.log(s.getNumber())
s.getsuper()
console.log(Sub.prototype.constructor)
console.log(s instanceof Super)
console.log(s instanceof Sub)