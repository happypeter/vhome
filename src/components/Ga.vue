<template>
  <div class="ga">
     <div class="sidebar">
       <ul>
         <li v-for="t in tocList" :key="t.id">
           <router-link :to="`/ga/${t.id}`">
             {{ t.text }}
           </router-link>
         </li>
       </ul>
     </div>
     <div class="main">
       <GaContent />
     </div>
  </div>
</template>


<script>
import { tocArray } from '../constants/gaConstants'
import GaContent from './GaContent'
export default {
  name: 'Ga',
  components: {
    GaContent
  },
  computed: {
    tocList: function() {
      return tocArray
    }
  }
}
</script>

<style scoped>
.ga {
  display: flex;
}

.sidebar {
  flex-basis: 200px;
  flex-shrink: 0;
}
</style>
