var s1 = "helloworld";
ss1 = s1.split('');  //["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]

console.log(ss1)

var s2 = ss1.join('');

console.log(s2)


//  //对象排序 
// var dic={x:2,z:1,y:3};//输出   {z:1，x:2，y:3}
//  var sdic = Object.keys(dic).sort(function (a, b) {
//      return dic[a] - dic[b]
//  });
//  for(ki in sdic){                     
//     console.log(sdic[ki]+":"+dic[sdic[ki]]+",");
//  }
// console.log(sdic)


 var arr = [
    {name:'zopp',age:0},
    {name:'gpp',age:18},
    {name:'yjj',age:8}
];

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}
console.log(arr.sort(compare('age')))
