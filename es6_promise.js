// let p = new Promise((resolve, reject) => {
//     resolve(1);
//     console.log(2);
//     });

//     setTimeout(() => console.log(3));

//     p.then(res => {
//     console.log(res);
//     return 4;
//     }).then(res => {
//     console.log(res);
//     })


//     console.log(5);

console.log('start')

const interval = setInterval(() => {  
  console.log('setInterval')
}, 0)

setTimeout(() => {  
  console.log('setTimeout 1')
  Promise.resolve()
      .then(() => {
        console.log('promise 3')
      })
      .then(() => {
        console.log('promise 4')
      })
      .then(() => {
        setTimeout(() => {
          console.log('setTimeout 2')
          console.log('setTimeout #')
          console.log('setTimeout #')
          console.log('setTimeout #')
          console.log('setTimeout 2')
          console.log('setTimeout #')
          console.log('setTimeout #')
          console.log('setTimeout #')
          Promise.resolve()
              .then(() => {
                console.log('promise 5')
              })
              .then(() => {
                console.log('promise 6')
              })
              .then(() => {
                clearInterval(interval)
              })
        }, 0)
      })
}, 0)

Promise.resolve()
    .then(() => {  
        console.log('promise 1')
    })
    .then(() => {
        console.log('promise 2')
    })
