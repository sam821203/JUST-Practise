const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, firstName) {
      this.name = firstName + ' ' + event.target.value;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted !');
    },
    confirmedInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
