const app = Vue.createApp({
  data() {
    return {
      result: 'type something please...',
      result2: ''
    }
  },
  methods: {
    showAlert() {
      alert('Please');
    },
    outputResult(event) {
      this.result = event.target.value;
    },
    outputResult2(event) {
      this.result2 = event.target.value;
    },
  }
}) 

app.mount('#assignment');