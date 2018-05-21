<template>
  <div>
    <div v-masonry transition-duration="0.3s" item-selector=".item">
      <div v-masonry-tile class="item" v-for="(item, index) in blocks">
          <img :src="`/img/dog${item.id}.jpg`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaLife',
  data: () => ({
   blocks: [
     {
        id: '1'
     },
     {
        id: '2'
     },
     {
        id: '3'
     },
     {
        id: '4'
     },
     {
        id: '5'
     },
     {
        id: '6'
     }
   ]
  })
}
</script>

