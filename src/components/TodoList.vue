<template>
  <ul class="m-0 list-reset">
      <li v-for="todo in todos" :key="todo.id" class="list-item border-b border-grey-lighter p-6">
        <input type="checkbox" name="complete" id="complete" class="align-middle" @click="complete(todo)" v-model="todo.completed">
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

export default {
  name: "TodoList",
  props: [
    'todos'
  ],
  methods: {
    complete: function (completedTodo) {
      console.log(completedTodo)
    }
  }
};
</script>

<style>
  .list-item {
    border-bottom: solid;
  }
</style>
