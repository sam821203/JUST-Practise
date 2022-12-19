

let buttonThree = document.getElementById("three");
let divThree = document.querySelector(".output");

buttonThree.addEventListener('click', displayJoke);

async function displayJoke() {
  // use await to wait for response to come back before continuing with our code 
  let response = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json'}
  });
  
  // 當拿到 response (readable stream) 後，一樣需要用 .json() 來將 readable stream 格式轉誠 JSON 格式
  // 因為這是另一個 Promise，所以需要再加一個 await 再前面
  let jokeObject = await response.json();

  // 將拿到的 JSON 轉成小寫
  let lowercaseJoke = jokeObject.joke.toLowerCase();

  // 將文字塞進去 output 裡
  divThree.innerHTML = lowercaseJoke;
}
