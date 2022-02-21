<template>
  <h1>Github Finder</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <Finder />
  <Profile />
</template>

<script>
import Finder from "./components/Finder.vue";
import Profile from "./components/Profile.vue";

export default {
  name: 'App',
  components: {
    Finder,
    Profile
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4.5rem;
}
</style>
