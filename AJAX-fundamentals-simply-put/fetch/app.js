
// synchronous
// let multiplyResult = multiply(5, 10);
// console.log(multiplyResult);

// asynchronous
// let bannerPhoto = downloadBanner('serverURL'); 
// console.log(bannerPhoto);

// a Promise can be wrapped around any function, but usually you want to use a asynchronous function
let firstPromise = new Promise((resolve, reject) => {
  let animal = 'warthog';

  // create an asynchronous task (需要的時間較長)
  setTimeout(() => {
    resolve(animal);
  }, 3000);

  // 成功狀態
  // resolve(animal);

  // 失敗狀態
  // reject('There was an error with this type of animal retrieval: ' + animal);
});

// if resolve() is called, then the THEN() method will run
firstPromise
  .then((animal) => {
    console.log(animal);
    console.log('promise done');

    return animal + " is nice";
})
  .then((animal) => {
    console.log(animal);
  })
  .catch((x) => {
    console.log('error: ', x);
  })
