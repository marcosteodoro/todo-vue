<template>
  <main>
    <Header/>
    <Button/>
    <TodoList/>
    <TodoList/>
    <TodoList/>
  </main>
</template>

<script>
import Header from './Header.vue'
import Button from './Button.vue'
import TodoList from './TodoList.vue'

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Header, Button, TodoList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
