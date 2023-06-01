function createUser(email, password) {
  if (!userDataIsValid) {
    showInvalidErrorMessage();
    return;
  }

  const newUser = buildUser(email, password);

  saveUserToDatabase(newUser);
}

function userDataIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes('@');
}

function passwordIsValid(password) {
  // 判斷使用者輸入的密碼是否只包含空白字元，而沒有其他的字元
  return password && password.trim() !== '';
}

function showInvalidErrorMessage() {
  console.log('Invalid input!');
}

function buildUser(email, password) {
  return {
    email: email,
    password: password
  }
}

function saveUserToDatabase(newUser) {
  return database.insert(newUser);
}
// function createUser(email, password) {
//   if (!userDataIsValid(email, password)) {
//     showValidationErrorMessage();
//     return;
//   }

//   const user = buildUser(email, password);

//   saveUserToDatabase(user);
// }

// function userDataIsValid(email, password) {
//   return emailIsValid(email) && passwordIsValid(password);
// }

// function emailIsValid(email) {
//   return email && email.includes('@');
// }

// function passwordIsValid(password) {
//   return password && password.trim() !== '';
// }

// function showValidationErrorMessage() {
//   console.log('Invalid input!');
// }

// function buildUser(email, password) {
//   return {
//     email: email,
//     password: password,
//   };
// }

// function saveUserToDatabase(user) {
//   database.insert(user);
// }
