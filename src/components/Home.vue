<template>
  <main>
    <Header :todoQuantity="todoQuantity"/>
    <Button @todoCreated="updateTodoList"/>
    <TodoList :todos="todos"/>
  </main>
</template>

<script>
import Header from './Header.vue'
import Button from './Button.vue'
import TodoList from './TodoList.vue'
import persistence from '../persistence';

export default {
  name: "Home",
  data: function () {
    return {
      todos: persistence.fetch(),
      todoQuantity: 0
    }
  },
  components: {
    Header, Button, TodoList
  },
  methods: {
    updateTodoList(newTodo) {
      this.todos.push(newTodo);
      this.todoQuantity = this.todos.length;
    }
  },
  mounted() {
    this.todoQuantity = this.todos.length;
  }
};
</script>

<style scoped>
</style>
