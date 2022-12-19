
let url = "https://jsonplaceholder.typicode.com/todos/1";
let request = new Request('url', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors'
})

let myHeaders = new Headers();

// 第一個是 Name，第二個是 Value
myHeaders.append('Accept', 'text/xml');
myHeaders.append('Authorization', 'Basic XYZ');
