// 永遠都需要先創建 Vue app
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Finish the course and master Vue!',
      vueLink: 'https://www.google.com/search?q=%E5%BE%97%E6%84%8F%E7%8B%97&oq=&aqs=chrome.0.35i39i362l6j46i39i175i199i362j35i39i362.1908014j0j7&sourceid=chrome&ie=UTF-8'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');