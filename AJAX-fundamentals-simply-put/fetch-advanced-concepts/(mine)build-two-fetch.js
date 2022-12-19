
// 選取需要用的元素
let displayZone = document.querySelector('h1');
let myBtn = document.getElementById('btn');
let displayImageEl = document.querySelector('.output img');

let url = 'http://worldtimeapi.org/api/timezone/asia/taipei';
let urlTwo = 'https://restcountries.com/v3.1/name/Taiwan';

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

async function displayImage() {
  let response = await fetch(urlTwo);

  let javascriptObject = await response.json();

  let ImageAttribute = javascriptObject[0].coatOfArms.png;
  
  let setImageAttribute = displayImageEl.src = ImageAttribute;
}