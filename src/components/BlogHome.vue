<template>
  <div>
    <h1>博客首页</h1>
    <ul>
      <li v-for="post in postToc" :key="post.id" >
        <router-link :to="`/blog/${post.id}`">
        {{ post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { API_URL } from '../constants/ApiConstants'
import axios from 'axios'

export default {
  name: 'BlogHome',
  computed: {
    postToc() {
      return this.$store.state.blog.toc
    }
  }
}
</script>
