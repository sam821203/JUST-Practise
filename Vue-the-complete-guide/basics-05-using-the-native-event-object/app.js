const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50 || value < -50) {
        // 因為 setTimeout 裡不會吃到 this 關鍵字，所以這裡才會需要在裝到新變數裡
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000)

      }
    }
    // name(value) {
    //   if (value === '') this.fullName = '';
    //   else this.fullName = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   if (value === '') this.fullName = '';
    //   else this.fullName = this.name + ' ' + value;
    // }
  },
  computed: {
    fullName() {
      console.log('hi hi hi');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      console.log('hi hi hi');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Huang'
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
