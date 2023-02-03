const app = Vue.createApp({
  // 判斷 input 是 use1 還是 user2
  data() {
    return {
      // 用來儲存 user input
      inputClass: '',
      paragraphIsVisible: true,
      inputBackgroundColor: '',
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1', 
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible
      }
    }
  },
  methods: {
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    }
  }
})

app.mount('#assignment');