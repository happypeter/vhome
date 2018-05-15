<template>
  <div class="blog">
    <div class="sidebar">
      <ul>
        <li :key="t.id" v-for="t in posts">
          <router-link active-class="active" :to="`/blog/${t.id}`">
          {{ t.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <BlogContent />
  </div>
</template>

<script>
import BlogContent from './BlogContent'

export default {
  name: 'Blog',
  components: {
    BlogContent
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    posts() {
      return this.$store.state.blog.all
    }
  }
}
</script>


<style>
.blog {
  display: flex;
}

.sidebar {
  border: 2px solid red;
  flex-basis: 200px;
}

.active {
  font-size: 30px;
  color: red;
}
</style>
