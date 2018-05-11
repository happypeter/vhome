<template>
  <div class="home">
    <router-link to="/ga">相册</router-link>
    <router-link to="/resume">简历</router-link>
    <router-link to="/blog">博客</router-link>
    <router-link to="/note">笔记</router-link>
  </div>
</template>

<style scoped>
.home {
  background-color: lightblue;
}

.home a {
  display: block;
  margin-bottom: 30px;
}
</style>
