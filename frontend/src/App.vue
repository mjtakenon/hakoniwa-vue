<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  padding: 30px;
  color: #2c3e50;
  background-color: azure;
  height: 100vh;
}

#nav {
  a {
    font-weight: bold;
    color: #42b983;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
