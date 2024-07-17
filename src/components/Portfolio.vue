<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="container">
    <span class="text">This is my Portfolio</span>
  </div>
  
  </template>
  
  <style scoped>
  .container{
    height: 100vh;
  }
  .text{
      display: flex;
      color: white;
      font-family: 'Monserrat', sans-serif;
      font-weight: bold;
      font-size: 72px;
      justify-content: center;
  }

</style>