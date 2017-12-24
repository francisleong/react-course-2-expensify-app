const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Andrew',
    //   age: 26
    // });
    reject('Something went wrong!');
  }, 1500)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

// Alternative way to do the above
// promise.then((data) => {
//   console.log('1', data);
// }, (error) => {
//   console.log('error: ', error);
// });

console.log('after');