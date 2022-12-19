
// 選取需要用的元素
let displayZone = document.querySelector('h1');
let myBtn = document.getElementById('btn');
let displayImageEl = document.querySelector('.output img');

let url = 'http://worldtimeapi.org/api/timezone/asia/taipei';
let urlTwo = 'a./ajax.png';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayZone.innerText = data.client_ip;
  })
  .catch((error) => {
    throw new Error('fetch 失敗：' + error );
  })

// 當點擊按鈕時，會顯示在 output 裡
myBtn.addEventListener('click', displayImage);

function displayImage() {
  // using the Headers Interface
  let header = new Headers();
  header.append("Accept", "image/png");

  // using the Request Interface
  let req = new Request(urlTwo, {
    method: "GET",
    headers: header
  });

  // perform our fetch call
  fetch(req)
    .then((res) => {
      if (!res.ok) {
        // throw new Error('Oops, something went wrong, like not finding your file');
        throw res;
      }
      console.log(res);
      return res.blob();
    })
    .then((imageObject) => {
      let pictureURL = URL.createObjectURL(imageObject);
      displayImageEl.src = pictureURL;
      console.log('Success!!');
    })
    .catch((err) => {
      console.log('Now this will catch all errors >>', err);
    })
}