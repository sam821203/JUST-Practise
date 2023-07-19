function initApp() {
  const success = connectDatabase();

  if (!success) {
    showErrorMessage('Could not connect to database!');
  }
}

function showErrorMessage(message) {
  console.log(message);
}

function connectDatabase() {
  const didConnect = database.connect();
  
  return didConnect;
}

// 連結 database，改變到整個 system 和 program state
// function connectDatabase() {
//   // side effect1: 但是是可預期的
//   const didConnect = database.connect();
//   if (didConnect) {
//     return true;
//   } else {
//     // side effect2: 顯示訊息給使用者也是改變 system state
//     console.log('Could not connect to database!');
//     return false;
//   }
// }

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  // 回傳不是單純 input 進來的值 
  return findAgentByRequestType(ticket.requestType);
}

// 解法，把 'Invalid input!' 拿出來
function createUser(email, password) {
  if (!isValid(email, password)) {
    showErrorMessage('Could not connect to database!');
  }
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    return false;
  }
  return true;
}

// // side effect: 名稱寫 isValid，代表我們應該會拿到回傳的布林值
// function isValid(email, password) {
//   if (!email.includes('@') || password.length < 7) {
//     // side effect2: 顯示訊息給使用者也是改變 system state
//     console.log('Invalid input!');
//     return false;
//   }
//   return true;
// }
