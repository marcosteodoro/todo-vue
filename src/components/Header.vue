<template>
  <header class="flex justify-between items-center border-b border-grey-light">
    <div class="px-6">
      <h1 class="text-blue font-normal"><span class="font-bold">Friday,</span> 10th</h1>
      <p class="font-normal text-grey-dark">September</p>
    </div>
    <div class="px-6">
      <p class="text-grey-dark"><span class="font-bold">12</span> Tasks</p>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  props: {
  }
};
</script>

<style>
  header {
    border-bottom: solid;
  }
</style>
