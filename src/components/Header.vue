<template>
  <div>
    <router-link to="/">Home</router-link>
    <span v-if="showNav">
      >
      <router-link :to="path">{{pathName}}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    path() {
      return this.$route.path
    },
    showNav() {
      return this.path !== '/'
    },
    pathName() {
      return '简历'
    }
  }
}
</script>
