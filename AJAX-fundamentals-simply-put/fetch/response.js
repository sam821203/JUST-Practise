
// set Fetch request
// let url = "https://od.moi.gov.tw/api/v1/rest/datastore/301110000A-000395-005";
// https://www.etmall.com.tw/kanban/Get?Type=0
// Your eBird API key: n1rh2qh3b5g

let url = "https://jsonplaceholder.typicode.com/todos/1";
console.log('hi');
fetch(url)
  .then((response) => {
    console.log(response.headers.get('content-type'));
  })