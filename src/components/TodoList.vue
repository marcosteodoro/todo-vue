<template>
  <ul class="m-0 list-reset">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem
    },
    data: function () {
        return {
            'todos' :[
                {
                    'id': 1,
                    'description' : 'Task 1',
                    'completed' : false
                },
                {
                    'id': 2,
                    'description' : 'Task 2',
                    'completed' : true

                },
                {
                    'id': 3,
                    'description' : 'Task 3',
                    'completed' : false
                },
                {   
                    'id': 4,
                    'description' : 'Task 4',
                    'completed' : false
                }
            ]
            
        }
    }
}
</script>

<style>
</style>
