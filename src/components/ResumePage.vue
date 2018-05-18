<template>
<div>
  {{
    skills
  }}
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
