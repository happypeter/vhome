<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <div class="more" v-if="showNav">
      
      <svg t="1526526275139" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1857" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M284.734984 1024l568.219385-511.943155L284.734984 0 171.045631 113.348285l454.530032 398.70856L171.045631 909.173754 284.734984 1024z" p-id="1858"></path></svg>
      <router-link :to="rootPath">{{pathName}}</router-link>
    </div>
  </div>
</template>

<script>
import { getPathName } from '../constants/RouteConstants'
import { getRootPath } from '../utils'

export default {
  name: 'Header',
  computed: {
    path() {
      return this.$route.path
    },
    rootPath() {
      return getRootPath(this.path)
    },
    showNav() {
      return this.path !== '/'
    },
    pathName() {
      return getPathName(this.rootPath)
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  display: flex;
  height: 100px;
  padding: 25px;
}

svg {
  width: 20px;
  height: 20px;
  margin: 15px;
}

.more {
  display: flex;
}

a {
  line-height: 50px;
  display: block;
  margin-right: 4px;
  font-size: 24px;
  color: #151313;
}
</style>
