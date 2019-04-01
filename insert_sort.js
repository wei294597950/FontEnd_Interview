let a = [5 , 8 , 7 ,4 ,2 ,9];

for(let i=1;i<a.length;i++){
    var end = i;
    var j = i-1;
    var tmp = a[end];
    while(a[j] > tmp && j>=0){
            a[j+1] = a[j];
            j--;
        }
    
    a[j+1] = tmp;
}

console.log(a);