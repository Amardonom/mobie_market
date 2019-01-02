<template>
  <div class="page-content">
    <div class="search-header flex-start">
      <div class="flex-center">
        <img style="width:70%;" src="../../assets/position.png"/>
      </div>
      <div>
        <input placeholder="查找" class="search-input"/>
      </div>
      <div style="flex:1;color:#fff;" class="flex-center">
        <button class="search-btn">查找</button>
      </div>
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(img, index) in pageInfo.slides" :key="index">
          <img style="width:100%;display:block;" :src="img.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="category flex-around">
      <div class="flex-column" v-for="(item,index) in pageInfo.category" :key="index">
        <img style="width:11vw;margin:0 auto;display:block;" :src="item.image" alt="">
        <div style="margin-top:8px;color:grey;">{{item.mallCategoryName}}</div>
      </div>
    </div>
    <div style="padding-bottom:3vw;" class="advertes-picture">
      <img style="width:100vw;" :src="pageInfo.advertesPicture.PICTURE_ADDRESS" alt="">
    </div>
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-content"></div>
    </div>
  </div>
</template>
<script>
import { getHomeInfo } from '@/api/api.js'
export default {
  data () {
    return {
      pageInfo: {}
    }
  },
  created () {
    getHomeInfo().then(res => {
      const _self = this
      _self.pageInfo = res.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/stylus/public.styl'
  
  .page-content
    background $pagebgcolor
    height 100vh
    font-size 18*$vw
  .recommend-area
    background #fff
    .recommend-title
      height 90*$vw
      line-height 90*$vw
      padding-left 6*$vw
      color orange
      font-size 26*$vw
  .category
    height 170*$vw
    background #fff
    width 730*$vw
    border-radius 6*$vw
    margin 16*$vw auto
  .search-header
    height 92*$vw
    background $bgcolor
    div:first-of-type
      width 92*$vw
    div:last-of-type
      flex 1
      color #ffffff
      button
        background grey
        font-size 18*$vw
    .search-input
      width 450*$vw
      background #fff
      border-radius 6*$vw
      border none 
      border-bottom 1px solid #fff
      padding: 7*$vw
    .search-btn
      width 130*$vw
      height 58*$vw
      border none 
      border-radius 6*$vw
      display block
</style>


