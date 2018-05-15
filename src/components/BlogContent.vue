<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>
      {{ post.body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  computed: {
    id() {
      return this.$route.params.id
    },
    posts() {
      return this.$store.state.blog.all
    },
    post() {
      return this.posts.find(t => t.id == this.id)
    }
  }
}
</script>
