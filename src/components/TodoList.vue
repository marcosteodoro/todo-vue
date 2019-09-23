<template>
  <ul class="m-0 list-reset">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
import persistence from '../persistence'

export default {
    name: 'TodoList',
    components: {
        TodoItem
    },
    data: function () {
        return {
            'todos': persistence.fetch()
        }
    },
    methods: {
        
    }
}
</script>

<style>
</style>
