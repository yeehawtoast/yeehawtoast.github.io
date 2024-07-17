<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <footer class="footer">
        <a href="google.com">
            <div class="returnhome">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
                    <title></title>
                    <path fill="#fafafa"
                        d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
                    </path>
                </svg>
            </div>
        </a>
        <div class="socials">
            <a>
                <div class="github">
                    github
                </div>
            </a>
            <a>
                <div class="linkedin">
                    linkedin
                </div>
            </a>
        </div>
        <p class="copyright">Christopher P. Smith ©2024. All Rights Reserved</p>
    </footer>
</template>

<style scoped>
.footer{
    position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  background-color: #282828;
}
a{
    text-decoration: none;
  color: inherit;
}
.returnhome{
    position: absolute;
  top: -25px;
  width: 40px;
  height: 45px;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #ff4d5a;
}
.socials{
    display: flex;
  margin-bottom: 20px;
}
.github{
    margin-right: 1rem;
    display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
}
.linkedin{
    margin-left: 1rem;
    display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
}
</style>