<template>
  <div id="app">
    <Home msg="Bem vindo à sua To Do List"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Nunito';
}
</style>
