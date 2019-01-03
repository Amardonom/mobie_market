<template>
  <div v-if="imgList.length" class="content">
    <div class="flex-start">
      <div style="flex:1;" class="floor">
        <img :src="imgList[0].image" alt="">
      </div>
      <div style="flex:1;" class="flex-column">        
        <div class="floor">
          <img :src="imgList[1].image" alt="">
        </div>
        <div class="floor">
          <img :src="imgList[2].image" alt="">
        </div>
      </div>
    </div>
    <div class="flex-start" style="flex-wrap:wrap;">
      <div v-for="(item, index) in imgList.slice(3,imgList.length)" :key="index" style="flex: 0 0 50%;box-sizing:border-box;" class="floor">
        <img :src="item.image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['imgList']
}
</script>

<style lang="stylus" scoped>
  .floor
    border-right: 1px solid #ddd
    border-bottom: 1px solid #ddd
</style>

