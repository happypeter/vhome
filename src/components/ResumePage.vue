<template>
<div>
  hello {{ skills   }}
  <div v-for="k in skills" :key="k.id">
    {{ k.level }}
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
    }
  }
}
</script>
