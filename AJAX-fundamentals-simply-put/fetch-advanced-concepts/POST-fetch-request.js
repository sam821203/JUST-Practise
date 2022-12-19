
// const root = "https://jsonplaceholder.typicode.com";
// let url = `${root}/posts?userId=1`;
const url = "https://jsonplaceholder.typicode.com/posts";
let outputEl = document.getElementById('demo');

let header = new Headers();
header.append("Content-Type", "application/json; charset=UTF-8");

// create our post
let post = {
  userId: 99,
  title: "My cool title",
  body: "This is my body"
}

let options = {
  method: "POST",
  headers: header,
  body: JSON.stringify(post)
}

// implement the request interface
let req = new Request(url, options);

// perform our fetch AJAX POST request


function checkStatus (response) {
  if (!response.ok) throw new Error('custom error message');
}

fetch(req)
  .then((res) => {
    checkStatus(res);
    return res.json();
  })
  .then((data) => {
    outputEl.textContent = JSON.stringify(data);
  })
  .catch((err) => {
    console.log('Error', err.message);
  })