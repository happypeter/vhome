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
import { API_URL } from '../constants/ApiConstants'
import axios from 'axios'

export default {
  name: 'BlogHome',
  data: () => ({
    posts: []
  }),
  created() {
    console.log('去 github 上拿文章目录')
    const uri = `${API_URL}/posts/index.json`
    axios.get(uri).then(res => {
      console.log('我的目录', res.data)
      this.posts = res.data
    })
  }
}
</script>
