<template>
  <main>
    <Header :todoQuantity="todoQuantity"/>
    <Button @todoCreated="updateTodoList"/>
    <TodoFilter :selectedFilter="selectedFilter"/>
    <TodoList :todos="todos"/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
import persistence from '@/persistence'

export default {
  name: 'App',
  components: {
    Header,
    Button,
    TodoFilter,
    TodoList
  },
  data: function () {
    return {
      todos: persistence.fetch(),
      todoQuantity: 0,
      selectedFilter: 'all'
    }
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
}
</script>

<style>
</style>
