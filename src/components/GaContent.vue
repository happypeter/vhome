<template>
  <div>
    <div v-if="isLifePage">
       <Life />
    </div>
    <div v-if="isWorkPage">
       <Work />
    </div>
  </div>
</template>


<script>
import Life from './GaLife'
import Work from './GaWork'

export default {
  name: 'GaContent',
  components: {
    Life,
    Work
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isLifePage() {
      return this.id == 'life'
    },
    isWorkPage() {
      return this.id === 'work'
    }
  }
}
</script>
