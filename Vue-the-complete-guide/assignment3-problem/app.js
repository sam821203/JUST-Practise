const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      alert: '',
      // notYet: 'Not there yet',
      // pass: 'Too much!',
    }
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function() {
        that.counter = 0;
      }, 5000)
    }
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much!';
      }
    }
  }, 
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    // checkOutput() {
    //   if (this.counter < 38) {
    //     return this.alert = 'test1';
    //   } else {
    //     return this.alert = 'test2';
    //   }
    // }
  }
})

app.mount('#assignment');