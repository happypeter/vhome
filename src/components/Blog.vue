<template>
  <div class="blog">
    <div class="sidebar">
      <ul>
        <li :key="t.id" v-for="t in postToc" v-on:click="getPost(t.id)">
          <router-link active-class="active" :to="`/blog/${t.id}`">
          {{ t.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content-wrap">
      <BlogContent />
    </div>
 
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
    postToc() {
      return this.$store.state.blog.toc
    }
  },
  methods: {
    getPost: function(id) {
      this.$store.dispatch({ type: 'fetchPost', id })
    }
  }
}
</script>


<style>
.blog {
  display: flex;
}

.sidebar {
  background-color: #53a6ae;
  flex-basis: 200px;
  flex-shrink: 0;
  padding-left: 20px;
  padding-top: 30px;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

li a {
  color: white;
  opacity: 0.7;
  line-height: 30px;
  font-size: 16px;
}

li a.active {
  opacity: 1;
}

.content-wrap {
  flex-grow: 1;
}
</style>
