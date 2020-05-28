<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：二级菜单下面的页面组件
-->
<style lang="stylus" rel="stylesheet/stylus">
  .app-levelbar.el-breadcrumb
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect
      color: #97a8be;
      cursor: text;


.secondMenuCmp
  padding 30px
  box-sizing border-box
  .catContentBox
    .news_cat
      .itemBox
        .catItem
          height 150px
          margin-bottom 10px
          .item_left
            padding 2px
            box-sizing border-box
            border 1px solid #ccc
            .pic
              width 125px
              height 114px
          .item_right
            margin-left 30px
            .top
              font-size 12px
              color #999
              .headTit
                font-size 14px
                color #666
                &:hover
                  cursor pointer
                  color #000                
              .headTime
                color #999
                margin-top 10px
            .intro
              font-size 12px
              line-height 24px
              margin-top 10px
    .productShow_cat
      .itemWrap
        .item
          padding 3px
          box-sizing border-box
          &:hover
            cursor pointer
            border 1px solid silver
            box-shadow 0px 2px 12px 0px rgba(0, 0, 0, 0.5)

</style>

<template>
    <div class="secondMenuCmp">
      strFlag: {{strFlag}}
      ----
      </br>
      tagId: {{tagId}}
      </br>
      showCatOrDetail_copy: {{showCatOrDetail_copy}}
      <levelbar-cmp @changeParentData="changeParentData"></levelbar-cmp>
      </br>

      <!-- contentList: {{contentList}} -->
      <div class="catContentBox" v-if="showCatOrDetail_copy" v-loading="loading">
        </br>
        ----------------------分类显示-----------------
        </br>
        <!---新闻资讯--->
        <div class="news_cat" v-if="strFlag == 'news'">
          <ul class="itemBox">
            <li
              v-for="(newItem, key) in contentList.data" 
              :key="key"
              class="catItem u-f-jst"
              @click="scanDetail(newItem, key)"
              >
              <div class="item_left">
                <el-image class="pic" src="newItem.picUrl" fit="fill" style="width:130px;height:120px"></el-image>
              </div>
              <div class="item_right">
                <div class="top u-f-column u-f-jst">
                  <p class="headTit">{{newItem.headTit}}</p>
                  <p class="headTime"><span>{{newItem.headTime}} </span></p>
                </div>
                <p class="intro">{{newItem.intro}}</p>
              </div>
            </li>
          </ul>
        </div>

        <!---产品展示---->
        <div 
          class="productShow_cat" 
          v-if="strFlag == 'productShow'"
          style="font-size: 12px;line-height:24px">
          <ul class="itemWrap u-f-jst u-f-wrap">
            <li 
              v-for="(productShowItem, key) in contentList.data" 
              :key="key"
              @click="scanDetail(productShowItem, key)"              
              class="item u-f-column u-f u-f-jst" 
              style="width:30%;margin:10px"
            >
              <div class="imgBox u-f0" style="width: 100%;border:1px solid silver">
                <el-image :src="productShowItem.picUrl" fit="fill"></el-image>
                <p class="itemTit marginT5 center">{{productShowItem.headTit}}</p>
              </div>
            </li>
            <!-- <li class="item u-f-column u-f u-f-jst" style="width:30%;margin:10px">
              <div class="imgBox u-f0" style="width: 100%;border:1px solid silver">
                <el-image src="../../../static/left.png" fit="fill"></el-image>
                <p class="itemTit marginT5 center">单面喷金基板</p>
              </div>
            </li>
            <li class="item u-f-column u-f u-f-jst" style="width:30%;margin:10px">
              <div class="imgBox u-f0" style="width: 100%;border:1px solid silver">
                <el-image src="../../../static/left.png" fit="fill"></el-image>
                <p class="itemTit marginT5 center">单面喷金基板</p>
              </div>
            </li>
            <li class="item u-f-column u-f u-f-jst" style="width:30%;margin:10px">
              <div class="imgBox u-f0" style="width: 100%;border:1px solid silver">
                <el-image src="../../../static/left.png" fit="fill"></el-image>
                <p class="itemTit marginT5 center">单面喷金基板</p>
              </div>
            </li>
            <li class="item u-f-column u-f u-f-jst" style="width:30%;margin:10px">
              <div class="imgBox u-f0" style="width: 100%;border:1px solid silver">
                <el-image src="../../../static/left.png" fit="fill"></el-image>
                <p class="itemTit marginT5 center">单面喷金基板</p>
              </div>
            </li>                                                 -->
          </ul>
        </div>
      </div>

      
      <div
          v-else 
          class="contentDetailBox" 
          style="font-size: 12px;line-height:24px">
        </br>
        ----------------详情-------------------
        </br>
        <!---about下---->
        <div class="aboutDetail" v-if="strFlag == 'about'">
          <div style="position:relative" v-html="contentList.data.contentData.content"></div>
        </div>

        <!---news下---->
        <div class="aboutDetail" v-if="strFlag == 'news'">
          <div style="position:relative" v-html="currentNewsDetail"></div>
        </div>     

        <!---productShow下---->   
        <div class="productShowDetail" v-if="strFlag == 'productShow'">
          <div style="position:relative" v-html="currentNewsDetail"></div>
        </div>           
      </div> 
    </div>
</template>

<script>
  import { 
      getAboutCatList
  } from '@/api/about'        
  import { 
      getProductCatList
  } from '@/api/productShow'  
  import { 
      getNewsCatList
  } from '@/api/news'
  import levelbarCmp from './layOut/Levelbar'
  export default {
    components: {
      levelbarCmp
    },
    props: {
      strFlag: {
        type: String,
        default: ''
      },
      tagId: {
        type: [Number, String],
        default: ''
      },
      contentList:{
        type: [Object,Array],
        default: () => {
          return {}
        }
      },
      showCatOrDetail: {
        type: Boolean,
        default: true
      },
    },
    created () {
      try {
        if(this.$route.query.fromFlag && this.$route.query.fromFlag == 'isfromHomePage'){
          // 从home首页进入到的详情页面 显示详情而不是显示分类详情
          this.currentNewsDetail = JSON.parse(this.$route.query.contentList).detail.content
          this.changeParentData(false)
        }        
      } catch (error) {

      }
    },
    mounted(){
      debugger
      let _this = this
      setTimeout(() => {
        _this.loading = false
      },2000)
    },
    data () {
      return {
        loading: true,
        levelList: null,
        currentNewsDetail: `<p
                              class="not_found" 
                              style="position:absolute;top:0;left:0;right:0;bottom:0;margin: 0 auto">
                                
                            <p>`
      }
    },
    computed: {
      showCatOrDetail_copy(){
        return this.showCatOrDetail
      }
    },
    watch: {
      tagId: {
        handler(newValue, oldValue){
          this.showCatOrDetail_copy = true
        }
      },
      strFlag: {
        handler(newValue, oldValue){
          this.showCatOrDetail_copy = true
        }        
      },
      'contentList.data.length':{
        handler(newValue, oldValue){
          this.loading = false
        }
      }
    },
    methods: {
      getBreadcrumb () {
        // debugger
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }].concat(matched)
        }
        this.levelList = matched
      },
      scanDetail(itemObj, key){
        debugger
        
        try {
          if(this.strFlag!='about'){
            if(itemObj.detail.content){
              this.currentNewsDetail = itemObj.detail.content
            }else {
              this.currentNewsDetail = `<p
                                class="not_found" 
                                style="position:absolute;top:0;left:0;right:0;bottom:0;margin: 0 auto">
                                  
                              <p>`
            }
            this.changeParentData(false)
          }
        } catch (error) {
          
        }
      },
      changeParentData(boolean){
        debugger
        this.$emit("update:showCatOrDetail", boolean)
      }      
    },
  }
</script>

