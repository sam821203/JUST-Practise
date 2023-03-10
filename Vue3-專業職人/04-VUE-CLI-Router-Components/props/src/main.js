import { createApp } from 'vue'
import App from './App.vue'
import { numPrice } from '@/lib/tools.js';

const app = createApp(App);

app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});

app.directive('price', {
  mounted(el, binding) {
    const p = numPrice(binding.value)
    el.innerHTML = p;
  },
  // 生命週期函式
  updated(el, binding) {
    const p = numPrice(binding.value)
    el.innerHTML = p;
  }
});

app.mount('#app');
