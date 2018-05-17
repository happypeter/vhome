<template>
  <div>
    <div v-html="htmlPost"></div>
  </div>
</template>

<script>
import axios from 'axios'
import md from '../utils/markdownUtils'
import { API_URL } from '../constants/ApiConstants'
export default {
  name: 'BlogContent',
  computed: {
    post() {
      return this.$store.state.blog.currentPost
    },
    htmlPost() {
      return md.render(this.post)
    }
  }
}
</script>
