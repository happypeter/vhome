<template>
<div>
  <div v-for="k in skills" :key="k.id">
    <b>{{k.id}}</b> {{ k.level }}
    <div class="bar">
      <div class="lev" :style="`width: ${k.level}`">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ResumePage',
  created() {
    this.$store.dispatch({ type: 'fetchSkillData' })
  },
  computed: {
    skills() {
      return this.$store.state.resume.skills
    },
    percent() {
      return '80%'
    }
  }
}
</script>

<style scoped>
.bar {
  width: 200px;
  height: 20px;
  border: 2px solid black;
  display: flex;
}

.lev {
  background-color: red;
}
</style>
