<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch({ type: 'fetchPosts' })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
