<template>
  <div class="home">
    <div class="hero"></div>
    <div class="items">
      <router-link class="nav-item" to="/ga">相册</router-link>
      <router-link class="nav-item" to="/resume">简历</router-link>
      <router-link class="nav-item" to="/blog">博客</router-link>
      <router-link class="nav-item" to="/note">笔记</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
}

.home .items {
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.hero {
  height: 300px;
  background-color: #60bec6;
}

.nav-item {
  margin-top: 40px;
  display: block;
  width: 250px;
  margin-bottom: 30px;
  height: 100px;
  background-color: #a7cbd0;
  text-align: center;
  padding-top: 30px;
  color: black;
  font-size: 25px;
}
</style>
