<template>
  <div>
    一篇具体博客:
    {{ id }}
  </div>
</template>

<script>
export default {
  name: 'Blog',
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
