<template>
  <div class="resume">
    <div class="wrap">
      <Page />
    </div>
  </div>
</template>

<script>
import Page from './ResumePage'
export default {
  name: 'resume',
  components: {
    Page
  }
}
</script>

<style scoped>
.resume {
  background-color: #f0f0f0;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
}

.wrap {
  width: 600px;
  background-color: #fff;
  margin: 30px auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  padding: 10px;
}
</style>
