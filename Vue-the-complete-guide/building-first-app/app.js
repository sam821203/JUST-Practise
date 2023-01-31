// 純 JS
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click', addGoal);

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');

//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// 這裡的 data 是一定要叫 data
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
