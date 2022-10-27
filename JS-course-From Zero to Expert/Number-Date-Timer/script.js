'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-10-25T23:36:17.929Z',
    '2022-10-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // 如果上面的程式碼沒有執行，才會執行到這裡
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  // 可以用底下的方式做取代
  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Experimenting API
    const todayNow = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };

    // 抓取本地端的電腦使用語言
    // const locale = navigator.language;
    // console.log(`當地使用語言 ${locale}`);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(todayNow);

    // const day = `${todayNow.getDate()}`.padStart(2, 0);
    // const month = todayNow.getMonth() + 1;
    // const year = todayNow.getFullYear();
    // const hour = `${todayNow.getHours()}`.padStart(2, 0);
    // const min = `${todayNow.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 在 javascript 裡，所有的數字都含有小數點。不管是整數還是浮點數
// console.log(23 === 23.0);

// 也是 Base64，常用於在通常處理文字資料的場合，表示、傳輸、儲存一些二進位資料。只會有 0 和 1
// Base 10: 0 to 9
// Binary base 2: 0 / 1
// console.log(0.1 + 0.2 === 0.3); 會得到 false

// 以下兩種方法都可以將字串轉成數字
// console.log(Number('23'));
// console.log(+'23');

// Parsing
// javascript 會嘗試對 30px 做分析，找出數字的部分
// 但前提是該字串需要式數字開頭。如果是英文開頭，就會輸出 NaN
// 常用在當需要取出 css 數值時
// 第一個參數接字串，第二個參數接 number system，如：十進制
console.log(Number.parseInt('15px', 2));
console.log(Number.parseInt('e23', 10));

// 就算有空白格在中間也不會影響
console.log(Number.parseInt(' 2.5rem '));
console.log(Number.parseFloat('2.5r m '));

// parseInt 和 parseFloat 是全域函式，所以 Number 不用加也行
// Number 是 namespace，用作類似 parseInt 這種方法的前綴詞
console.log(parseInt(' 2.5rem '));
console.log(parseFloat('2.5r m '));

// isNaN，用來確認該值是不是 NaN 嗎？
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));

// 這裡 +'20px' 出來會是 NaN，所以值是 true
console.log(Number.isNaN(+'20px'));

// 當除以 0 時，會是無限大，不會是 NaN，而是 Infinity
// 所以 isNaN 不適合單純用來確認該值是否為數字，因為可能包含無限值
console.log(Number.isNaN(23 / 0));

// isFinite 更適合用來確認是否為數字
console.log(Number.isFinite(24));
console.log(Number.isFinite('24'));
console.log(Number.isFinite(+'24px'));
console.log(Number.isFinite(23 / 0));

// isInteger
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(23.0));
console.log(Number.isFinite(23 / 0));

// square root 平方根
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Max，找出最大的數字
// 如果中間有遇到字串，就會直接回傳 NaN
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 30, '23px', 11, 12));

// min
console.log(Math.min(5, 30, 23, 11, 12));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// 能隨機產出 0-1 的值
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);
console.log(randomInt(3, 30));
console.log(randomInt(10, 20));
console.log(randomInt(-10, -20));

// Rounding integers
console.log(Math.trunc(23.3));

// 四捨五入
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// 當正數時 floor 和 trunc 的用法是一陽的
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// trunc 不管在正負數時，功能都會是一樣的。但 floor 在負數時的意思就會是倒過來的
console.log(Math.floor(-23.3));
console.log(Math.trunc(-23.9));

// Rounding decimals
// toFixed 會根據小數點位數做四捨五入。且輸出的值會是字串
// 中間的數字填入要小數點幾位數
// 一般來說，數字 (primitive type) 是沒有方法的，所以這裡後面如果要加入方法的話，會需要將數字括號起來
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2).toFixed(2));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// remainder operator 用來取餘數
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

// 假如餘數是 0，就會是偶數
console.log(6 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(678));
console.log(isEven(423));

labelBalance.addEventListener('click', function () {
  const rowArray = [...document.querySelectorAll('.movements__row')];
  rowArray.forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// Numeric Separators
// 可以增加閱讀性
// JS 會直接忽略 underline
const diameter = 287_460_000_000;
console.log(diameter);

const transferFee = 15_00;

const PI = 3.14_15;
// 但不能跟小數點放在一起
// const PI = 3._1415;
console.log(PI);

// underline 也不能用在函式裡，只能在程式碼間
console.log(Number('230000'));
console.log(Number('230_000'));

// 64 bits 裡，只有 53 個是用來存放數字本身的。其他用來存放小數點和符號
// 以下是 64bits 裡可存放的最大數字
// 2 代表 base 2， 0 和 1
// 如果大於這個數字，顯示出來的數字就可能是錯的
console.log(2 ** 53 - 1);

// 以下的寫法也能得到 JS 最大的存放數值
console.log(Number.MAX_SAFE_INTEGER);

// BigInt 是 ES2020 的寫法，且支援更大的數字存放
// 在數字後面加上 n
console.log(345465434654763735645323n, typeof 345465434654763735645323n);

// operations
// BigInt 之間可以互相做乘法，但不能和一般數字做
console.log(10000n * 10000n);
console.log(89023124320842083012932084012301n * 100000000n);

// 這樣會報錯
// console.log(1000n * 47);
const huge = 89023124320842083012932084012301n;
const num = 23;
// 這時可以運用另一種寫法
console.log(huge * BigInt(num));

// Exceptions 1
// 但比較和大於小於運算子兩邊可以不一樣
console.log(20n > 15);
console.log(20n === 20);

// 如果用嚴謹的寫法也會通過
console.log(20n == 20);

// Exceptions 2
// BigInt 也可以和字串合在一起，只是 BigInt 會被轉換成字串
console.log(huge + 'what the hell');

// Exceptions 3
// BigInt 不能用 Math. 這個 namespace 的相關方法
// console.log(Math.sqrt(huge));

// Exceptions 4
// Division 除法
// BigInt 在除法時，會直接拿掉小數點後的值
console.log(10 / 3);
console.log(10n / 3n);

// Create a date
// 方法一：
const now = new Date();
console.log(now);

// 也可以直接給時間戳
console.log(new Date('Oct 22 2022 22:27:12'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

// 這裡的 10 會對應到十一月份，是因為 javascript 的月份是從零開始算
console.log(new Date(2037, 10, 19, 15, 23, 5));

// javascript 也會幫忙自動修正，比如這裡的 31號會自動修正成 11/1
console.log(new Date(2037, 10, 31));

// 如果填寫 0，會從起始時間開始
// UNIX時間是UNIX或類UNIX系統使用的時間表示方式：從UTC1970年1月1日0時0分0秒起至現在的總秒數，不考慮閏秒。
console.log(new Date(0));

// 三天算法：天 / 小時 / 分 / 秒 / 毫秒
// 3 * 24 * 60 * 60 * 1000 乘出來的結果 (259200000) 叫 timestamp
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log('======== future ========');
console.log(future);
console.log(future.getFullYear());

// 月份是 0 base 開始
console.log(future.getMonth());

// getDate() 是當月份的哪天
console.log(future.getDate());

// getDay() 是當禮拜的哪天
console.log(future.getDay());

console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// 顯示時間的方式不一樣
console.log(future.toISOString());

// 這裡會算出 2142228180000，這是指從 1970年一開始到 future 變數的時間
console.log(future.getTime());
console.log(new Date(2142228180000));

// 可以拿到現在時間的 timestamp
console.log(Date.now());

// 可以直接更改年份，這時星期幾也會跟著換
console.log(future);
future.setFullYear(2040);
console.log(future);

const futureDate = new Date(2037, 10, 19, 15, 23, 5);
console.log(+futureDate);

// 算出該兩天之間的天數
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(day1);
