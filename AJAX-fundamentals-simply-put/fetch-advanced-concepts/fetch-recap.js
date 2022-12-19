'use strict';

let url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then((res) => {
    // 這裡會拿到 res object (Readable stream)
    // 在這階段，除非有網路問題，不然不會有 error
    // console.log(res);

    // 這會還傳一個新的 Promise 
    // return res.text();
    // .json() 回傳的也不是 JSON 格式，而是一般的 JS Object
    return res.json();
  })
  .then((javascriptObject) => {
    // 這裡會是單純的 string 文字，而不是物件
    console.log(javascriptObject);
  })
  .catch((e) => {
    console.log('Ops, this is an error', e);
  });