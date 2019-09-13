<template>
  <main>
    <Header/>
  </main>
</template>

<script>
import Header from './Header.vue'

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
