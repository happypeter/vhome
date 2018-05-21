<template>
  <div>
    <div v-masonry transition-duration="0.3s" item-selector=".item" class="grid">
      <div class="grid-sizer"></div>
      <div v-masonry-tile :key="index" class="item" v-for="(item, index) in blocks">
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

<style scoped>
.grid {
  width: 500px;
  height: 1000px;
  background: #ddd;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-sizer,
.item {
  width: 33.333%;
}

.item {
  float: left;
}

.item img {
  display: block;
  max-width: 100%;
}
</style>
