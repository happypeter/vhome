<template>
  <div>
    <div class="hero">
      博客
    </div>
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
export default {
  name: 'BlogHome',
  computed: {
    postToc() {
      return this.$store.state.blog.toc
    }
  }
}
</script>

<style scoped>
.hero {
  height: 194px;
  font-size: 35px;
  color: white;
  text-align: center;
  padding-top: 40px;
  background: linear-gradient(
    -90deg,
    rgba(96, 190, 198, 1),
    rgba(70, 156, 166, 1)
  );
}

ul {
  padding: 0;
  margin: 20px auto;
  width: 600px;
  min-height: 40vh;
}

li {
  list-style: none;
}

li {
  background: rgba(255, 255, 255, 1);
  border-radius: 7px;
  margin-bottom: 20px;
  padding: 10px;
  padding-left: 20px;
  box-shadow: 10px 12px 18px 0px rgba(231, 222, 222, 0.5);
}

li:hover {
  box-shadow: 10px 12px 18px 0px rgba(176, 169, 169, 0.5);
}

li a {
  font-size: 24px;
  color: #000;
  line-height: 60px;
}
</style>
