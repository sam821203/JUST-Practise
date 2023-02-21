<template lang="pug">
  .page-user
    h1 For user {{ $route.params.name }}
    h3 使用者
    h4(v-if="user") You enter by ID {{ user.id }}
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "John"
        },
        {
          id: 2,
          name: "Tom"
        }
      ]
    };
  },
  computed: {
    user() {
      return this.users.find(user => user.id == this.$route.params.num);
    }
  }
};
</script>

<style lang="sass"></style>
