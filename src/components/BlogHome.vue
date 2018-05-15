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
import axios from 'axios'

export default {
  name: 'BlogHome',

  created() {
    this.$store.dispatch({ type: 'fetchPosts' })
  },
  computed: {
    posts() {
      return this.$store.state.blog.all
    }
  }
}
</script>
