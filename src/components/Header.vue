<template>
  <header class="flex justify-between items-center border-b border-grey-light bg-grey-lightest">
    <div class="pl-6">
      <h1 class="text-blue font-normal text-3xl mb-3"><span class="font-bold">{{ dayOfWeek }},</span> {{ dayOfMonth }}</h1>
      <p class="font-normal text-grey-dark mt-0 mb-4">{{ month }}</p>
    </div>
    <div class="pr-6 mb-3">
      <p class="text-grey-dark nowrap"><span class="font-bold">{{ todoQuantity }}</span> Tasks</p>
    </div>
  </header>
</template>

<script>

import moment from "moment";

export default {
  name: "Header",
  props: ['todoQuantity'],
  computed: {
    dayOfWeek() {
      return moment().format('dddd');
    },
    dayOfMonth() {
      return moment().format('Do');
    },
    month() {
      return moment().format('MMMM')
    }
  }
};
</script>

<style>
  header {
    border-bottom: solid;
  }

  .nowrap {
    -ms-word-wrap: no-wrap;
  }
</style>
