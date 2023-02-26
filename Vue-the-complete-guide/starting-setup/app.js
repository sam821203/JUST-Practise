const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Sam",
          phone: 098737283,
          email: "sam821293@yahoo.com",
        },
        {
          id: "julie",
          name: "Johns",
          phone: 0936556283,
          email: "Johns@yahoo.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
      <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
          {{ detailAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailAreVisible">
          <li><strong>Phone: </strong>{{ friend.phone }}</li>
          <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
      </li>
  `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "manual",
        name: "Sam",
        phone: 098737283,
        email: "sam821293@yahoo.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
