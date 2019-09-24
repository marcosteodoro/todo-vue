<template>
  <main>
    <Header :todoQuantity="todoQuantity"/>
    <Button/>
    <TodoList/>
  </main>
</template>

<script>
import Header from './Header.vue'
import Button from './Button.vue'
import TodoList from './TodoList.vue'

export default {
  name: "Home",
  data: function () {
    return {
      'todoQuantity' : 0
    }
  },
  components: {
    Header, Button, TodoList
  },
  mounted() {
    this.todoQuantity = document.querySelectorAll('.list-item').length;
  }
};
</script>

<style scoped>
</style>
