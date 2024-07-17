<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div id="contact" class="contact">
    <h2 class="section-heading">Contact</h2>
    <p class="contact__text">Have a question or want to work together? Leave your details and let's make something
      happen!</p>
    <form class="contact__form">
      <input class="contactname" name="Name" placeholder="Name">
      <input class="contactemail" name="_replyto" placeholder="Email">
      <textarea class="contactmessage" name="message" placeholder="Message"></textarea>
      <div class="formsubmit" id="form-submit">
        <button id="form-submit" class="contactsubmit" type="button">SUBMIT</button>
      </div>
    </form>

  </div>



</template>

<style scoped>
.contact {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin-bottom: 10rem;
}

.section-heading {
  position: relative;
  font-size: 5.5rem;
  font-weight: 700;
  margin-top: 9rem;
  margin-bottom: 13rem;
  z-index: 9999;
}
.contact__text{
  font-size: 1.8rem;
  margin-bottom: 6rem;
}
.contact__form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact input{
  width: 500px;
  resize: none;
  border: none;
    border-left-width: medium;
    border-left-style: none;
    border-left-color: currentcolor;
  color: inherit;
  background-color: #282828;
  font-size: 1.6rem;
  font-family: monserrat, sans-serif;
  border-left: 2px solid transparent;
  border-radius: 0;
}
.contactname{
  margin-bottom: 6px;
  padding: 1rem;
  height: 4rem;
}
.contactemail{
  margin-bottom: 6px;
  padding: 1rem;
  height: 4rem;
}
.contact textarea{
  width: 500px;
  resize: none;
  border: none;
    border-left-width: medium;
    border-left-style: none;
    border-left-color: currentcolor;
  color: inherit;
  background-color: #282828;
  font-size: 1.6rem;
  font-family: monserrat, sans-serif;
  border-left: 2px solid transparent;
  border-radius: 0;
}
.contactmessage{
  height: 12rem;
  padding: 1rem;
}
.formsubmit{
  margin-top: 1.5rem;
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contactsubmit{
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 1rem 1.2rem;
  position: relative;
  margin-top: 3rem;
  cursor: pointer;
}
button {
  border: none;
  outline: none;
  background-color: transparent;
  color: inherit;
}
</style>