<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<style>
/* Global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 850px;
}

html {
    min-height: 100%;
}

body {
    min-height: 100%;
    font-family: Arial, sans-serif;
    background-color: rgb(80, 80, 80);
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
}
</style>
