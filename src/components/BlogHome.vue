<template>
  <div>
    <h1>博客首页</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" >
        <router-link :to="`/blog/${post.id}`">
        {{ post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogHome',
  computed: {
    posts() {
      return this.$store.state.blog.all
    }
  }
}
</script>
