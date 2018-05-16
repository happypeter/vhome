<template>
  <div>
    content
  </div>
</template>

<script>
import axios from 'axios'
import { API_URL } from '../constants/ApiConstants'
export default {
  name: 'BlogContent',
  created() {
    console.log('BlogContent created')
    const id = this.$route.params.id
    const uri = `${API_URL}/posts/${id}.md`
    axios.get(uri).then(res => {
      console.log('my Post', res.data)
    })
  }
}
</script>
