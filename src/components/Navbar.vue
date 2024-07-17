<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <nav class="navbar">
    <ul class="navigation">
      <li><a href="google.com">About</a></li>
      <li><a href="google.com">Experience</a></li>
      <li><a href="google.com">Projects</a></li>
      <li><a href="google.com">Resume</a></li>
      <li><a href="google.com">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 6rem;
  border-bottom: 1px solid #1a1a1a;
  background-color: rgba(40,40,40,0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
  z-index: 99999999999;
}
.navigation{
  display: flex;
  margin-right: 5rem;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  list-style: none;
}
li{
  padding-left: 12px;
}
a{
  text-decoration: none;
  color:inherit;
}
a:hover{
  color: #ff4d5a;
}
</style>