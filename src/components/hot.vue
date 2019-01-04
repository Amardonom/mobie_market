<template>
  <div>
    <van-list>
      <van-row gutter="20">
        <van-col span="12" v-for="( item, index) in pageList" :key="index">
          <div class="goods-image">
              <img :src="item.image" width="90%" />
          </div>
          <div class="goods-name">{{item.name}}</div>
          <div class="goods-price">￥{{item.price}}</div>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>
<script>
export default {
  props: ['pageList']
}
</script>

<style lang="stylus" scoped>
   .goods-name{
    padding 0 8px;
    overflow hidden
    text-overflow ellipsis
    white-space nowrap 
    color grey
  }
  .goods-price{
    text-align center
    color grey
  }
</style>


