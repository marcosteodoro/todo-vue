<template>
  <main>
    <Header/>
    <Button/>
  </main>
</template>

<script>
import Header from './Header.vue'
import Button from './Button.vue'

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Header, Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
