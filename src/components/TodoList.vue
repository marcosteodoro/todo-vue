<template>
  <ul class="m-0 list-reset">
      <TodoItem/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem
    }
}
</script>

<style>

</style>
