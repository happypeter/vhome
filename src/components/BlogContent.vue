<template>
  <div class="page">
    <div class="content">
      <div v-html="htmlPost"></div>
    </div>
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
  },
  created() {
    const { id } = this.$route.params
    this.$store.dispatch({ type: 'fetchPost', id })
  }
}
</script>

<style scoped>
.page {
  padding: 20px;
  min-height: 70vh;
  background: linear-gradient(
    -134.8deg,
    rgba(255, 255, 255, 1),
    rgba(167, 203, 208, 1)
  );
}

.content {
  background: rgba(255, 255, 255, 1);
  box-shadow: 5px 10px 7px 0px rgba(197, 190, 190, 0.5);
  border-radius: 4px;
  padding: 20px;
}
</style>
