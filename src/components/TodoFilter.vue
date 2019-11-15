<template>
  <div class="flex items-center m-0 list-item border-b border-grey-lighter p-6">
    <span class="mr-4 text-pink border-2 border-solid rounded px-2 py-1 hover:text-white hover:bg-pink hover:border-pink cursor-pointer" v-for="(filter, index) in filters" :key="index" v-text="filter"></span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  data: function() {
    return {
      filters: [ 'all', 'completed', 'active' ]
    }
  }
}
</script>

<style>

</style>