<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="container">
    
    <span class="text">This is my Resume</span>
    <div class="buttonholder"><button class="buttontype">Click Here For My Resume</button></div>
    
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
.buttonholder{
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
}
</style>