function saveUser(email, password) {
  const user = {
    id: Math.random().toString(),
    email: email,
    password: password,
  };

  db.insert('users', user);
}

saveUser('test@test.com', 'testers');

// 將 user 物件資料抽離出來
function saveUser(user) {
  db.insert('users', user);
}

saveUser(newUser);

// 用 class 來做藍圖
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  save() {
    db.insert('users', this);
  }
}

const user = new User('test@test.com', 'testers');
user.save();

// 沒有參數的函式
let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;
}

toggleLoginStatus();

