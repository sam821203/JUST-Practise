// async function message() {
//   return 'hello';
// }

// console.log(message());

// using async and await
async function message() {

  // 加了 await 在 new 前面後，才能讓 promise 在收到 Object 時能運作 
  // 當瀏覽器看到 await 關鍵字時，會自動判斷說這是個 pending promise
  // stage 1 ========================================
  let firstWord = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  })

  // stage 2 ========================================
  let secondWord = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('world');
    }, 1000);
  })

  // stage 3 ========================================
  console.log(`DONE: ${firstWord} ${secondWord}`);
}

function execute() {
  message();
  console.log('I am first');
}
execute();

// message();