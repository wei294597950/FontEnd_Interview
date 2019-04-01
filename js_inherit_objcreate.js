function Super() {}
Super.prototype.name = "xuwei"
Super.prototype.getNumber = function() {
  return 1
}

function Sub() {}

Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

let s = new Sub()
console.log(s.getNumber())
console.log(s.name)