<template>
  <div>
    {{ htmlPost }}
  </div>
</template>

<script>
import axios from 'axios'
import md from '../utils/markdownUtils'
import { API_URL } from '../constants/ApiConstants'
export default {
  name: 'BlogContent',
  data: () => ({
    post: ''
  }),
  created() {
    console.log('BlogContent created')
    const id = this.$route.params.id
    const uri = `${API_URL}/posts/${id}.md`
    axios.get(uri).then(res => {
      console.log('my Post', res.data)
      this.post = res.data
    })
  },
  computed: {
    htmlPost() {
      return md.render(this.post)
    }
  }
}
</script>
