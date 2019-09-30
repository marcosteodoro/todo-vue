<template>
  <li class="list-item border-b border-grey-lighter p-6">
    <input type="checkbox" name="complete" id="complete" class="align-middle" @click="complete(todo)" v-model="todo.completed">
    <span class="align-middle pl-4 text-grey-darker text-lg todo-description"
    :class="spanCompletedStyle"
    >{{ todo.description }}</span>
  </li>
</template>

<script>
import persistence from '../persistence';

export default {
    name: "TodoItem",
    props: ['todo'],
    computed: {
      spanCompletedStyle() {
        return this.todo.completed ? 'line-through text-grey' : '';
      }
    },
    methods: {
      complete: function (completedTodo) {
        this.$emit('completedTodo', completedTodo);
      }
    }
}
</script>

<style>
  .list-item {
    border-bottom: solid;
  }
</style>
