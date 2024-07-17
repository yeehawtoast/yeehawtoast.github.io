<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
<div id="hero" class="hero">

    <div class="heading">
      <div class="headingln1">
        Howdy! I'm Chris
      </div>
      <div class="headingln2">
        I'm a backend developer, system developer, and educator
      </div>
    </div>
</div>

</template>

<style scoped>
.hero{
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 999;
}

.heading{
  position: relative;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  width: fit-content;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  color: #fafafa;
  font-weight: 300;
  z-index: 999;
}
.headingln1{
  font-size: 5rem;
  background-color: rgba(26,26,26,0.25);
  line-height: normal;
  color: #fafafa;
  font-weight: 400;
}
.headingln2{
  font-size: 3.5rem;
  background-color: rgba(26,26,26,0.25);
  line-height: normal;
  color: #fafafa;
  font-weight: 200;
}
</style>