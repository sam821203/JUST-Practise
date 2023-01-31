// 永遠都需要先創建 Vue app
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!'
    }
  }
});

app.mount('#user-goal');