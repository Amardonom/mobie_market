<template>
  <div>
      <div class="navbar-div">
        <van-nav-bar title="类别列表" /> 
      </div>
    <van-row>
      <van-col span="6">
        <div style="height: 100vh;" id="leftNav">
          <ul>
            <li @click="clickCategory(index, item)" :class="{categoryActive:categoryIndex==index}" v-for="(item,index) in catagory" :key="index">
                {{item.MALL_CATEGORY_NAME}}
            </li>
          </ul>
        </div>
      </van-col>
      <van-col span="18">
        <div class="tabCategorySub">
          <van-tabs @click="onClickCategorySub"  v-model="active">
              <van-tab v-for="(item, index) in getCatagorysubList" :key="index" :title="item.MALL_SUB_NAME">
              </van-tab>
          </van-tabs>
        </div>
        <div id="list-div">
          <van-pull-refresh  v-model="isRefresh" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
              >
              <div class="list-item" v-for="(item,index) in goodList" :key="index">
                  <div class="list-item-img"><img :src="item.IMAGE1" width="100%"/></div>
                  <div class="list-item-text">
                      <div>{{item.NAME}}</div>
                      <div class="">￥{{item.ORI_PRICE}}</div>
                  </div>
              </div>
            </van-list>
          </van-pull-refresh>         
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { getCatagoryList, getCategorySubList, getGoodsListByCategorySubID } from '@/api/api'
export default {
  data(){
    return{
      catagory: [],
      categoryIndex:0,
      active: 0,
      getCatagorysubList: [],
      list:[],
      loading:false,   //上拉加载使用
      finished:false,  //下拉加载是否没有数据了
      isRefresh:false, //下拉加载
      page:1,          //商品列表的页数
      goodList:[],     //商品信息
      categorySubId:'' //商品子分类ID
    }
  },
  async mounted() {
    await this.getCatagoryList()
  },
  methods: {
    //点击子类获取商品信息
    onClickCategorySub(index){
      this.categorySubId = this.getCatagorysubList[index].ID
      this.goodList=[]
      this.finished = false
      this.page=1
      this.categoryIndex=0
      this.onLoad()
      this.getGoodsListByCategorySubID()
    },
    onLoad(){
      setTimeout(()=>{
          for(let i=0;i<10;i++){
              this.list.push(this.list.length+1)
          }
          this.loading=false;
          if (this.list.length >= 40) {
          this.finished = true;
          }
      },500)
    },
    onRefresh(){
      setTimeout(() => {
          this.isRefresh = false;
          this.finished = false;
          this.goodList=[];
          this.page=1
          this.onLoad()
          this.getCatagoryList()
      }, 500);
    },
    // 页面初始化 获得所有大类 并且获得第一个大类的小类
    getCatagoryList() {
      getCatagoryList().then(res => {
        this.catagory = res.data.message
        this.getCategorySubList(this.catagory[0].ID)
      })
    },
    //点击大类的方法
    clickCategory(index, item){
      this.categoryIndex=index
      this.page=1
      this.finished = false
      this.goodList=[]
      this.getCategorySubList(item.ID)
    },
    // 获取小类的接口
    getCategorySubList(id) {
      getCategorySubList({categoryId: id}).then(res => {
        this.getCatagorysubList = res.data.message
        this.categorySubId = this.getCatagorysubList[0].ID
        this.getGoodsListByCategorySubID()
      })
    },
    // 获取商品
    getGoodsListByCategorySubID() {
      const postData = {
        page: this.page,
        categoryId: this.categorySubId
      }
      getGoodsListByCategorySubID(postData).then(res => {
        this.goodList = [...this.goodList, ...res.data.message]
      })
    }
  }
}
</script>
<style scoped>
#leftNav {
  background: aliceblue;
  height: calc(100vh - 46px);
}
#leftNav ul li {
    line-height: 2rem;
    border-bottom:1px solid #E4E7ED;
    padding:3px;
    font-size:0.8rem;
    text-align: center;
}
.categoryActive{
    background-color: #fff;
}
.list-item{
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}
#list-div{
  overflow: scroll;
  height: calc(100vh - 90px);
}
.list-item{
    display: flex;
    flex-direction: row;
    font-size:0.8rem;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    padding:5px;
}
#list-div{
    overflow: scroll;
}
.list-item-img{
    flex:8;
}
.list-item-text{
    flex:16;
    margin-top:10px;
    margin-left:10px;
}
</style>


