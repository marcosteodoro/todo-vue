<template>
  <li class="list-item border-b border-grey-lighter p-6">
    <input type="checkbox" name="complete" id="complete" class="align-middle" @click="complete" :checked="todo.completed">
    <span class="align-middle pl-4 text-grey-darker text-lg todo-description"
    :class="spanCompletedStyle"
    >{{ todo.description }}</span>
  </li>
</template>

<script>
export default {
    name: "TodoItem",
    props: ['todo'],
    computed: {
      spanCompletedStyle() {
        return this.todo.completed ? 'line-through text-grey' : '';
      }
    },
    methods: {
      complete: function (el) {
        const inputCompleted = el.target;
        const listItem = inputCompleted.closest('li');
        const todoDescription = listItem.querySelector('.todo-description');

        if (inputCompleted.checked) {
          todoDescription.classList.add('line-through');
          todoDescription.classList.add('text-grey');
        } else {
          todoDescription.classList.remove('line-through');
          todoDescription.classList.remove('text-grey');
        }
      }
    }
}
</script>

<style>
  .list-item {
    border-bottom: solid;
  }
</style>
