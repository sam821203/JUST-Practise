<template>
  <div class="about">
    <nav>
      <router-link to="/about/guide">guide</router-link>
      <router-link to="/about/reference">reference</router-link>
      <router-link to="/about/changelog">changelog</router-link>
      <router-link to="/about/github">github</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>
