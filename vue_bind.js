//vue内部使用Object.defineProperty()来实现双向绑定，通过这个
//函数可以jian
var data = {name:'yck'}
observer(data)

let name = data.name
data.name = 'yyy'

function observer(obj){
    if(!obj || typeof obj !== 'object'){
        return
    }
    Object.keys(obj).forEach(key =>{
        defineReactive(obj,key,obj[key])
    })
}

function defineReactive(obj, key, val){
    observer(val)
    Object.defineProperty(obj, key, {
        enumerable: true, //可列举的
        configurable: true,
        get: function reactiveGetter(){
            console.log('get value')
            return val
        },
        set: function reactiveSetter(newVal){
            console.log('change value')
            val = newVal
        }
    })
}