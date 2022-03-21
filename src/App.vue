<template>
  <div id="app">
    <!-- Main Router -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {},
};
</script>

<style>
/* ---- Font Import ---- */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
</style>
