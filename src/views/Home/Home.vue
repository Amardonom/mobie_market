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
      <div class="recommend-content" style="border-bottom:1px solid #eee;">
        <swiper class="flex-start" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for=" (item ,index) in pageInfo.recommend" :key="index">
              <div class="recommend-item">
                <img :src="item.image" width="80%" />
                <!-- <div>{{item.goodsName}}</div> -->
                <div>￥{{item.price}}</div>
                <div class="mall-price">￥{{item.mallPrice}}</div>
              </div>
          </swiper-slide>
      </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getHomeInfo } from '@/api/api.js'
export default {
  components: {
    swiper,
    swiperSlide
  },
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
  .swiper-slide
    flex 0 0 33.333%
    .recommend-item
      height 380*$vw
      border-right 1px solid #eeeeee
      color grey
      font-size 16px
      text-align center
      div
        margin-top 4px
      .mall-price
        font-size 12px
        color #d9d6c3
        text-decoration line-through
        // &:after
        //   content:'-'
        //   width 10px
        //   height 2px
        //   background red
  .page-content
    background $pagebgcolor
    height 100vh
    font-size 18*$vw
  .recommend-area
    background #fff
    .recommend-title
      height 70*$vw
      line-height 70*$vw
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


