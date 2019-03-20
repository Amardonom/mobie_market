<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar
          title="商品详情"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="topimage-div">
      <img :src="pageInfo.IMAGE1" width="100%"/>
    </div>
    <div class="goods-name">{{pageInfo.NAME}}</div>
    <div class="goods-price">价格：￥{{pageInfo.PRESENT_PRICE}}</div>
    <div>
        <van-tabs swipeable sticky>
          <van-tab title="商品详情">
            <div class="detail" v-html="pageInfo.DETAIL">
            </div>
          </van-tab>
          <van-tab title="评价">
              正在制作中
          </van-tab>
        </van-tabs>
    </div>
    <div class="goods-bottom">
      <div>
        <van-button size="large" type="primary">加入购物车</van-button>
      </div>
      <div>
        <van-button size="large" type="danger">直接购买</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getGoodDetail } from '@/api/api'
export default {
  data () {
    return{
      goodsId: this.$route.query.goodsId,
      pageInfo: {}
    }
  },
  mounted () {
    getGoodDetail({goodsId: this.goodsId}).then(res => {
      this.pageInfo = res.data.message
    })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.goods-bottom{
    position: fixed;
    bottom:0px;
    left:0px;
    background-color: #FFF;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
}
.goods-bottom > div{
    flex:1;
    padding:5px;
}
</style>




