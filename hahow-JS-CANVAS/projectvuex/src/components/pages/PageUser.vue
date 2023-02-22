<template lang="pug">
  .page-user
    h1 For user {{ $route.params.name }}
    h3 使用者
    h4(v-if="user") You enter by ID {{ user.id }}

    div
      h3(v-for="todo in userTodos") {{ todo.title }}
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

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
    ...mapState(["todos"]),
    user() {
      return this.users.find(user => user.id == this.$route.params.num);
    },
    userTodos() {
      return this.todos.filter(todo => todo.userId == this.$route.params.num);
    }
  }
};
</script>

<style lang="sass"></style>
