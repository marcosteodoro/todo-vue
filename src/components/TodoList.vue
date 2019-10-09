<template>
  <ul class="m-0 list-reset">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    <li v-if="todos.length == 0" class="list-item border-b border-grey-lighter p-6 align-middle pl-4 text-grey-darker text-lg todo-description">
      Nothing registered yet! 😕
    </li>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import persistence from "../persistence";

export default {
  name: "TodoList",
  props: ['todos'],
  components: {
    TodoItem
  }
};
</script>

<style>
</style>
