// set Fetch request
// let url = "https://od.moi.gov.tw/api/v1/rest/datastore/301110000A-000395-005";
// https://www.etmall.com.tw/kanban/Get?Type=0
// Your eBird API key: n1rh2qh3b5g

let url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
  .then((response) => {
    // let jsonData = JSON.parse(response);
    // console.log(jsonData);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
