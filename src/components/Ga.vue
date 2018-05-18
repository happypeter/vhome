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
  </div>
</template>


<script>
import { tocArray } from '../constants/gaConstants'
export default {
  name: 'Ga',
  computed: {
    tocList: function() {
      return tocArray
    }
  }
}
</script>
