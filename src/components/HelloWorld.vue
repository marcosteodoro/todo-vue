<template>
  <div class="bg-grey">
    <h1 class="text-red">Olá. Se o backgound estiver cinza e esse H1 vermelho o Tailwind foi configurado com sucesso!</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
