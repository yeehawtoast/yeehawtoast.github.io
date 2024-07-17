<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import About from './components/About.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <header>
    <Hero/>
    <Navbar/>
    <About/>
    <Contact/>
    <Footer/>
  </header>
</template>
<style>
html{
  background-color: #1a1a1a;
  color: #fafafa;
  font-family: montserrat, sans-serif;
}
</style>