<template>
  <div>
    content
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BlogContent',
  created() {
    console.log('BlogContent created')
    const uri =
      'https://raw.githubusercontent.com/happypeter/vhome/master/data/posts/1.md'
    axios.get(uri).then(res => {
      console.log('my Post', res.data)
    })
  }
}
</script>
