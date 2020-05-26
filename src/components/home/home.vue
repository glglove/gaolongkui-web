<!--
    User: xxxxxxx
  Date: 2019/4/30
  by： gaol
  功能：
-->
<template>
  <div class='home'>
    <el-row class="tipWrap">
      <div class="tipBox page-wrapper u-f-ajc">
        <el-carousel 
            indicator-position="none"
            direction="vertical" 
            :autoplay="true">
            <el-carousel-item v-for="(item,key) in tipInfos" :key="key">
            <a class="tipTit">{{ item.tip }}</a>
            </el-carousel-item>
        </el-carousel>

        <!--分享(bds)--->
        <div class="shareWrap" style="width: 500px">
          <!-- currentLanguage: {{currentLanguage}} -->
          <bds-hare-cmp :hasMore="false" v-if="currentLanguage == 'zh'"></bds-hare-cmp>
        </div>       
      </div>
    </el-row>

    <el-row class="newsWrap page-wrapper">
      <div class="u-f-jsb u-f-ac">
        <div class="newsItem u-f0">
          <h3>{{$t("homeContent.lefttit")}}</h3>
          <el-carousel 
            class="marginT10"
            indicator-position="none"
            :autoplay="true"
            arrow="never"
          >
            <el-carousel-item v-for="(item,key) in LeftContentTop" :key="key">
              <el-image :src="item.picUrl" fit="fill" style="width: 80px;height: 110px"></el-image>              
              <p class="tipTit center" style="font-size:12px">{{ item.picTit }}</p>
            </el-carousel-item>
          </el-carousel>


          <el-carousel 
            class="marginT10"
            indicator-position="none"
            :autoplay="true"
            arrow="never"
          >
            <el-carousel-item 
              v-for="(item,key) in LeftContentBottom" 
              :key="key">
              <el-image :src="item.picUrl" fit="fill" style="width: 80px;height: 110px"></el-image>
              <p class="tipTit center" style="font-size:12px">{{ item.picTit }}</p>
            </el-carousel-item>
          </el-carousel>          
        </div>


        <div class="newsItem u-f0">
          <!-- midConent: {{midConent}} -->
          <el-image :src="midConent.picUrl" style="height:100px;width:100%" fit="fill"></el-image>
          <h3 class="marginT10" style="text-align:center">{{$t("homeContent.midtit")}}</h3>
          <p class="marginT20" style="font-size: 12px;line-height:28px">{{midConent.content}}</p>
        </div>


        <div class="newsItem u-f0">
          <h3>{{$t("homeContent.righttit1")}}</h3>
          <h3>{{$t("homeContent.righttit2")}}</h3>
        </div>
      </div>

      <div class="keyWord">
        <!-- <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1>       -->
        <span class="headline">{{$t("message.keyWords")}}</span>
        <span class="tit" @click="handlerClickTit('more')">{{ $t("message.more") }}</span>
        <span class="tit" @click="handlerClickTit('high')">{{ $t("message.high") }}</span>
        <span class="tit" @click="handlerClickTit('aluminium')">{{ $t("message.aluminium") }}</span>
        <span class="tit"  @click="handlerClickTit('phone')">{{ $t("message.phone") }}</span>
        <span class="tit"  @click="handlerClickTit('double')">{{ $t("message.double") }}</span>
        <span class="tit" @click="handlerClickTit('impedance')">{{ $t("message.impedance") }}</span>
        <span class="tit"  @click="handlerClickTit('special')">{{ $t("message.special") }}</span>
      </div>
    </el-row>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getHomeInfo
} from '@/api/home'
export default {
  computed: {
    ...mapGetters([
      'currentLanguage'
    ])
  },
  data(){
    return {
      tipInfos:[
        {
        tip: '2019-08-11  公司长期供应双面及多层印制线路板'
        },
        {
        tip: '2018-07-09 公司长期供应各类型印刷线路板'
        },
        {
        tip: '公司提供定制电路板制作'
        }
      ],
      LeftContent: [],
      LeftContent_top: [],
      LeftContent_bottom: [],
      midConent: {}
    }
  },
  created () {
    this._getHomeInfo()
  },
  computed: {
    LeftContentTop(){
      let newArr = this.LeftContent.slice(3)
      return newArr
    },
    LeftContentBottom(){
      let newArr = this.LeftContent.slice(-4)
      return newArr
    },    
  },
  methods: {
    handlerClickTit(str){
      switch(str){
        case 'more':
          // this.$router.push({
          //   path: '/productShow/'+ 'more'
          // })
          break
        case 'high':
          break
        case 'aluminium':
          break
        case 'phone':
          break
        case 'double':
          break
        case 'impedance':
          break
        case 'special':
          break          
      }
      this.$router.push({
        path: '/productShow/'+ str
      })      
    },
    _getHomeInfo(){
      getHomeInfo().then(res => {
        debugger
        this.LeftContent = res.leftInfoNewProductInfo
        this.midConent = res.midInfoCompanyInfo
      })
    }
  },
  watch: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.el-row.tipWrap
  background-color #8E9094
  .tipBox
    .el-carousel
      width 100% !important   
      height 35px 
      line-height 35px   
      .el-carousel__container
        .el-carousel__item
          font-size 12px
          .tipTit
            color #ffffff
            &:hover
              cursor pointer
              color red
.el-row.newsWrap
  height 380px
  margin-top 30px
  .newsItem
    height 280px
    padding 20px
    .el-carousel__container
      .el-carousel__item    
        width 80px
    &:nth-of-type(1)
      width 30%
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1)
    &:nth-of-type(3)
      width 25%
      margin-left 30px
    &:nth-of-type(2)
      width 30%
      margin-left 20px
      box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.1)
    .el-carousel__container
      height 130px
  .keyWord
    margin-top 30px
    text-align center
    .headline
      font-size 13px
      font-weight bold
      color #595959
      margin-right 5px
    .tit
      font-size 12px
      color #666666
      cursor pointer
      &:hover
        color red
</style>
