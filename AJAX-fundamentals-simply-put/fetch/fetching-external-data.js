let url = "https://icanhazdadjoke.com/";

let myHeaders = {
  "Accept": "application/json"
}

fetch(url, {
  headers: myHeaders
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })