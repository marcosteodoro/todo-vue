<template>
  <div class="flex items-center m-0 list-item border-b border-grey-lighter p-6">
    <span 
      class="mr-4 text-pink border-2 border-solid rounded px-2 py-1 hover:text-white hover:bg-pink hover:border-pink cursor-pointer" 
      v-for="(filter, index) in filters" 
      :key="index"
      :class="(selectedFilter == filter) ? 'selected' : ''" 
      v-text="filter">
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: [
    'selectedFilter'
  ],
  data: function() {
    return {
      filters: ['all', 'completed', 'active']
    }
  },
  methods: {
    changeSelectedFilter($filter) {

    }
  }
}
</script>

<style>
  span.selected {
    color: #fff !important;
    background-color: #f66d9b;
    border: solid 1px #f66d9b;
  }
</style>