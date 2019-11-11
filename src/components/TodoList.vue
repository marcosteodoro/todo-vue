<template>
  <ul class="m-0 list-reset">
      <li v-for="todo in todos" :key="todo.id" class="list-item border-b border-grey-lighter p-6">
        <input type="checkbox" name="complete" id="complete" class="align-middle" @click="persistChanges(todo)" v-model="todo.completed">
        <span class="align-middle pl-4 text-grey-darker text-lg todo-description"
        :class="todo.completed ? 'line-through text-grey' : ''"
        >{{ todo.description }}</span>
      </li>
    <li v-if="todos.length == 0" class="list-item border-b border-grey-lighter p-6 align-middle pl-4 text-grey-darker text-lg todo-description">
      Nothing registered yet! 😕 
    </li>
  </ul>
</template>

<script>

import persistence from '@/persistence'

export default {
  name: "TodoList",
  props: [
    'todos'
  ],
  methods: {
    persistChanges: function (editTodo) {
      let editedTodo = {
        'id': editTodo.id,
        'description': editTodo.description,
        'completed': !editTodo.completed
      };

      let todos = persistence.fetch();
      todos[editedTodo.id - 1] = editedTodo;
      persistence.save(todos);
    }
  }
};
</script>

<style>
  .list-item {
    border-bottom: solid;
  }
</style>
