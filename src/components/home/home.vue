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
        <div class="shareWrap">
          <!-- currentLanguage: {{currentLanguage}} -->
          <bds-hare-cmp :hasMore="false" v-if="currentLanguage && currentLanguage == 'zh'"></bds-hare-cmp>
        </div>       
      </div>
    </el-row>

    <el-row class="newsWrap page-wrapper">
      <div class="u-f-jsb">
        <div class="newsItem u-f0">
          <p class="topTit">{{$t("homeContent.lefttit")}}</p>

          <div class="line-top" style="overflow: hidden">
            <ul class="u-fi-ac line-top-ul" id="line-top-ul">
              <li 
                class="marginR10"
                v-for="(topItem, idx) in LeftContentTop" 
                :key="idx"
                :class="currentHoverTopitemKey==idx? 'currentHoverTopStyle':''"
                @mouseenter="topItemmouseenter (topItem, idx)"
                @mouseleave="topItemmouseleave(topItem, idx)"
                @click="joinDetail(topItem, idx)"
              >
                <!-- currentHoverTopitemKey: {{currentHoverTopitemKey}}
                ----
                idx: {{idx}} -->
                <el-image class="tipPic" :src="topItem.picUrl" fit="fill"></el-image>              
                <p class="tipTit center">{{ topItem.headTit }}</p>                
              </li>
            </ul>
          </div>


          <div class="line-bottom marginT10" style="overflow: hidden">
            <ul class="u-fi-ac line-bottom-ul" id="line-bottom-ul">
              <li 
                class="marginR10"
                :class="currentHoverBottomitemKey==index? 'currentHoverBottomStyle':''"
                v-for="(bottomitem, index) in LeftContentBottom" 
                :key="index"
                @mouseenter="bottomItemmouseenter (bottomitem, index)"
                @mouseleave="bottomItemmouseleave(bottomitem, index)"
                @click="joinDetail(bottomitem, index)"
              >
                <el-image class="tipPic" :src="bottomitem.picUrl" fit="fill"></el-image>              
                <p class="tipTit center">{{ bottomitem.headTit }}</p>                
              </li>
            </ul>
            <!-- <bscroll-cmp 
              :wrapper="line-bottom-ul" 
              :contentList="LeftContentBottom"
            ></bscroll-cmp> -->
          </div>          
        </div>


        <div class="newsItem u-f0" @click="handlerClickMiddle">
          <!-- <el-image :src="middleContentPicUrl" style="height:100px;width:100%"></el-image> -->
          <img :src="middleContentPicUrl" class="pic"></img>
          <h5 class="marginT10 comTit">{{$t("homeContent.midtit")}}</h5>
          <p class="marginT10 ellipsis5">{{midConent.content}}</p>
          <div class="clearfix moreWrap">
              <el-button 
                type="text" 
                style="float:right;color:#606266;"
                class="moreTit"
              >更多</el-button>
          </div>
        </div>


        <div class="newsItem u-f0">
          <p class="clearfix rightTit">
            {{$t("homeContent.righttit1")}}
            <el-button 
              type="text"
              class="tit center" 
              style="float: right;
              font-size: 12px;
              transform: scale(0.8);
              padding: 0;
              color:#ffffff;
              width:48px;
              padding: 2px;
              border-top:1px solid rgb(128, 123, 123);
              background-color:silver;
              border-radius:7px"
              @click.native="handlerClickMoreBtn('news', 'companyNews')"
            >{{$t("homeContent.rightMore")}}</el-button>
          </p>
          <ul class="marginT5 itemWrap">
            <!-- rightContentTop: {{rightContentTop}} -->
            <li 
              v-for="(top, key) in rightContentTop"
              :key="key"
              class="titItem ellipsis1 u-f-ac"
              @click="joinDetail(top, key)"
            ><span class="pic">&gt</span>{{top.headTit}}</li>
          </ul>

          <p class="clearfix marginT20 rightTit">
            {{$t("homeContent.righttit2")}}
            <el-button 
              type="text"
              class="tit center" 
              style="float: right;
              font-size: 12px;
              transform: scale(0.8);
              padding: 0;
              color:#ffffff;
              width:48px;
              padding: 2px;
              border-top:1px solid rgb(128, 123, 123);
              background-color:silver;
              border-radius:7px"
              @click.native="handlerClickMoreBtn('news', 'hotNews')"
            >{{$t("homeContent.rightMore")}}</el-button>
          </p>
          <ul class="marginT5 itemWrap">
            <!-- rightContentTop: {{rightContentTop}} -->
            <li 
              v-for="(bottom, idx) in rightContentBottom"
              :key="idx"
              class="titItem ellipsis1 u-f-ac"
              @click="joinDetail(bottom, idx)"
            ><span class="pic">&gt</span>{{bottom.headTit}}</li>
          </ul>          
        </div>
      </div>

      <div class="keyWord">
        <!-- <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1>       -->
        <span class="headline">{{$t("message.keyWords")}}</span>
        <span class="tit" @click="handlerClickTit('more', 'productShow')">{{ $t("message.more") }}</span>
        <span class="tit" @click="handlerClickTit('high','productShow')">{{ $t("message.high") }}</span>
        <span class="tit" @click="handlerClickTit('aluminium','productShow')">{{ $t("message.aluminium") }}</span>
        <span class="tit"  @click="handlerClickTit('phone','productShow')">{{ $t("message.phone") }}</span>
        <span class="tit"  @click="handlerClickTit('double','productShow')">{{ $t("message.double") }}</span>
        <span class="tit" @click="handlerClickTit('impedance','productShow')">{{ $t("message.impedance") }}</span>
        <span class="tit"  @click="handlerClickTit('special','productShow')">{{ $t("message.special") }}</span>
      </div>
    </el-row>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BscrollCmp from '@/components/base/BScroll'
import {
  getHomeInfo
} from '@/api/home'
  let that = null
export default {
  components: {
    BscrollCmp
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
      rightContent:[],
      LeftContent_top: [],
      LeftContent_bottom: [],
      midConent: {},
      num_top: 0,
      num_bottom: 0,
      timer_top: null,
      timer_bottom: null,
      currentHoverTopitemKey: '',
      currentHoverBottomitemKey: '',
      currentHoverTopStyle: 'border:1px solid #e2d8d8;padding:3px',
      currentHoverBottomStyle: 'border:1px solid #e2d8d8;padding:3px',
    }
  },
  created () {
    debugger
    that = this
    this._getHomeInfo()
  },
  mounted(){
    this.$nextTick(() => {
      // this.scroll = new BScroll()
    })
  },
  beforeDestroy(){
    if(this.timer_top){
      clearInterval(this.timer_top)
    }
    if(this.timer_bottom){
      clearInterval(this.timer_bottom)
    }    
  },
  computed: {
    ...mapGetters([
      'currentLanguage'
    ]),    
    LeftContentTop(){
      let newArr = this.LeftContent.slice(3)
      return newArr
    },
    LeftContentBottom(){
      let newArr = this.LeftContent.slice(-4)
      return newArr
    }, 
    middleContentPicUrl(){
      return this.midConent.picUrl
    },
    rightContentTop(){
      let newArr = this.rightContent.slice(3)
      return newArr
    },
    rightContentBottom(){
      let newArr = this.rightContent.slice(-4)
      return newArr
    },    
  },
  methods: {
    handlerClickTit(tagId, str){
      this.$router.push({
        path: '/productShow/'+ tagId,
        query: {
          str: str,
          tagId: tagId
        }
      })      
    },
    joinDetail(item, key){
      // 进入到详情页面
      debugger
      let url = `${item.str}/${item.tagId}`
      this.$router.push({
        // path: '/news/companyNews',
        path: url,
        query: {
          str: item.str,
          tagId: item.tagId,
          fromFlag: 'isfromHomePage',
          contentList: JSON.stringify(item)
        },
      })
    },
    _getHomeInfo(){
      getHomeInfo().then(res => {
        debugger
        this.LeftContent = res.leftInfoNewProductInfo
        this.midConent = res.midInfoCompanyInfo
        this.rightContent = res.rightContentInfo.data
        this.starBottom()
        this.starTop()
      })
    },
    handlerClickMiddle(){
      this.$router.push({
        path: '/about/companyProfile',
        query: {
          tagId: 'companyProfile',
          str: 'about'
        }
      })
    },    
    handlerClickMoreBtn(str, tagId){
      this.$router.push({
        path: '/news',
        query: {
          tagId: tagId,
          str: str
        }
      })
    },
    starTop(){
      debugger
      this.timer_top = setInterval(() => {
        this.num_top += 10
        let topNode = document.getElementById("line-top-ul")
        if(this.num_top<=980 && topNode){
          topNode.style.transform= 'translateX(-' + this.num_top + 'px)'
          // console.log(topNode.style.transform)    
        }else {
          this.num_top = 0
        }
      },300)
    },
    starBottom(){
      this.timer_bottom = setInterval(() => {
        that.num_bottom += 10
        let bottomNode = document.getElementById("line-bottom-ul")        
        if(that.num_bottom<=60 && bottomNode){
          bottomNode.style.transform = 'translateX(-' + that.num_bottom + 'px)'
          // console.log(topNode.style.transform)          
        }else {
          this.num_bottom = 0
        }
      },300)
    },    
    topItemmouseenter (item, key){
      // debugger
      this.currentHoverTopitemKey = key
        clearInterval(this.timer_top)
    }, 
    topItemmouseleave(item, key){
      // debugger
        this.starTop()
    },      
    bottomItemmouseenter (item, key){
      debugger
      this.currentHoverBottomitemKey = key
        clearInterval(this.timer_bottom)
    },
    bottomItemmouseleave(item, key){
      debugger
      this.currentHoverBottomitemKey = ''
      // if(!this.timer_bottom){
        this.starBottom()
      // }
    },       
  },
  watch: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home 
  min-height calc(100vh - 420px)
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
    .shareWrap
      width 500px
.el-row.newsWrap
  // height 380px
  padding 5px
  margin-top 30px
  .newsItem
    // height 280px
    padding 5px
    box-sizing border-box
    .el-carousel__container
      .el-carousel__item    
        width 80px
    &:nth-of-type(1)
      width 30%
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1)
      .topTit
        font-size: 15px
        font-weight:bold
        color: red
        margin-bottom: 10px
      .line-top-ul,.line-bottom-ul
        li
          &:hover
            cursor pointer
            color red
          .tipPic
            width: 80px
            height: 110px          
          .tipTit
            font-size 10px
          &.currentHoverTopStyle
            border:1px solid #e2d8d8
            padding:3px
          &.currentHoverBottomStyle
            border:1px solid #e2d8d8
            padding:3px
    &:nth-of-type(3)
      width 30%
      margin-left 10px
      .rightTit
        font-size 15px
        color red
        font-weight bold
      .itemWrap
        .titItem
          font-size 12px
          line-height 24px
          .pic
            color silver
            font-weight bold
            margin-right 10px            
      .el-button
        &:hover
          cursor pointer !important
          background-color #feb252 !important
      .titItem
        &:hover
          cursor pointer
          color red
    &:nth-of-type(2)
      width 30%
      margin-left 20px
      box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.1)
      .pic 
        width 100%
        height 100px
      .ellipsis5
        font-size: 12px
        line-height:28px
      .moreWrap
        margin-top -5px
      .comTit
        color#909399
        font-size 18px      
      &:hover
        cursor pointer
        color #909399 !important    
    .el-carousel__container
      height 130px
    .moreTit
      font-size: 12px
      &:hover
        cursor pointer
        color red !important
      &:after
        display inline
        content "+"
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
