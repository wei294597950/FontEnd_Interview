function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

var tic = function(timmer, cb){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

var d = new Promise(function(resolve, reject){resolve();});

// setTimeout相关的异步队列会挂起直到主进程空闲。如果使用while无限循环，主进程永远不会空闲，setTimeout的函数永远不会执行！
var step = function(def) {
    def.then(function(){
        return tic(3000, red);
    }).then(function(){
        return tic(2000, green);
    }).then(function(){
        return tic(1000, yellow);
    }).then(function(){
        step(def);
    });
}

step(d);