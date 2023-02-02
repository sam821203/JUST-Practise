const app = Vue.createApp({
  data() {
    return {
      name: 'Sam',
      age: 28,
      imageURL: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
      defaultValue: 'Sam Huang'
    }
  }, 
  methods: {
    outputRandomNum() {
      return Math.floor(Math.random() * 30);
    },
    calculateAge() {
      return this.age + 5;
    }
  }
})

app.mount('#assignment');