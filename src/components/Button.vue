<template>
  <button
    class="bg-pink text-white hover:bg-pink-dark border-0 cursor-pointer rounded-full h-16 w-16 flex items-center justify-center float-right mr-6 -mt-8"
    @click="newTodo"
  >
    <i class="material-icons">add</i>
  </button>
</template>

<script>
import persistence from "@/persistence"
import SweetAlert from "sweetalert2"

export default {
  name: "Button",
  methods: {
    async newTodo() {
      const inputValue = '';

      const { value: description } = await SweetAlert.fire({
        title: "Insert a task description",
        input: "text",
        inputPlaceholder: "The description goes here...",
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: value => {
          
          if (!value) {
            return "The task description cannot be empty!";
          }
        }
      });

      if (description) {
        let newTodo = {
          'id': todoId,
          'description': description,
          'completed': false
        };
        
        let todos = persistence.fetch();
        let todoId = todos.length + 1;

        todos.push(newTodo);
        persistence.save(todos);
        this.$emit('todoCreated', newTodo);
      }
    }
  }
};
</script>

<style>
.swal2-popup {
  font-family: Nunito;
}

.swal2-confirm {
  background-color: #5d60ea !important;
}
</style>
