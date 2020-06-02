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
  // padding 30px
  box-sizing border-box
  .catContentBox
    border-top 1px solid #eee
    padding 20px
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
              width 130px
              height 120px              
          .item_right
            margin-left 30px
            width calc(100% - 160px)
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
    .productShow_cat,.companyDevice_cat
      font-size 12px
      line-height 24px
      .itemWrap
        min-height: 300px
        .item
          padding 3px
          box-sizing border-box
          width 30%
          margin 10px
          &:hover
            cursor pointer
            border 1px solid silver
            box-shadow 0px 2px 12px 0px rgba(0, 0, 0, 0.5)
          .itemBox
           width 100%
           height 205px
           border 1px solid silver


</style>

<template>
    <div class="secondMenuCmp">
      <!-- strFlag: {{strFlag}}
      ----
      </br>
      tagId: {{tagId}}
      </br> -->
      <!-- showCatOrDetail: {{showCatOrDetail}}
      showCatOrDetail_copy: {{showCatOrDetail_copy}} -->
        <levelbar-cmp 
          @changeParentData="changeParentData"
        ></levelbar-cmp>
      </br>

      <!-- contentList: {{contentList}} -->

      <!------分类展示-------->
      <div class="catContentBox" v-if="showCatOrDetail_copy" v-loading="loading">
        <!---新闻资讯分类--->
        <div class="news_cat" v-if="strFlag == 'news'">
          <ul class="itemBox">
            <li
              v-for="(newItem, key) in contentList.data" 
              :key="key"
              class="catItem u-f-jst"
              @click="scanDetail(newItem, key)"
              >
              <div class="item_left u-f0">
                <el-image class="pic" :src="newItem.picUrl" fit="fill"></el-image>
              </div>
              <div class="item_right u-f0">
                <div class="top u-f-column u-f-jst">
                  <p class="headTit ellipsis1">{{newItem.headTit}}</p>
                  <p class="headTime ellipsis1"><span>{{newItem.headTime}} </span></p>
                </div>
                <p class="intro ellipsis3">{{newItem.intro}}</p>
              </div>
            </li>
          </ul>
        </div>

        <!---产品展示分类---->
        <div 
          class="productShow_cat" 
          v-if="strFlag == 'productShow'"
          style="">
          <ul 
            class="itemWrap u-f-jst u-f-wrap" 
            :class="contentList.data.length>0?'':'not_found'">
            <li 
              v-if="contentList.data.length>0"
              v-for="(productShowItem, key) in contentList.data" 
              :key="key"
              @click="scanDetail(productShowItem, key)"              
              class="item u-f-column u-f u-f-jst" 
            >
              <div class="imgBox u-f0 u-f-ajc u-f-column">
                <el-image :src="productShowItem.picUrl" fit="fill"></el-image>
                <p class="itemTit marginT5 center ellipsis1">{{productShowItem.headTit}}</p>
              </div>
            </li>
          </ul>
        </div>

        <!----公司设备展示分类---->
        <div 
          class="companyDevice_cat" 
          v-if="strFlag == 'companyDevice'">
          <ul class="itemWrap u-f-jst u-f-wrap">
            <li 
              v-for="(companyDeviceItem, key) in contentList.data" 
              :key="key"
              @click="scanDetail(companyDeviceItem, key)"              
              class="item u-f-column u-f u-f-jst" 
            >
              <div class="imgBox u-f0" style="width: 100%;border:1px solid silver">
                <el-image :src="companyDeviceItem.picUrl" fit="fill"></el-image>
                <p class="itemTit marginT5 center">{{companyDeviceItem.headTit}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
      <!---以下显示详情展示--------->
      <div
          v-else 
          class="contentDetailBox" 
          style="font-size: 12px;line-height:24px;padding:20px;border-top:1px solid #eee">
        <!---about下---->
        <div class="aboutDetail" v-if="strFlag == 'about'">
          <div style="position:relative;min-height: 300px" v-html="contentList.data.contentData.content"></div>
        </div>

        <!---制程能力下---->
        <div class="processCapabilityDetail" v-if="strFlag == 'processCapability'">
          <div style="position:relative;min-height: 300px" v-html="contentList.data.contentData.content"></div>
        </div>      

        <!---生产流程下---->
        <div class="productionLineDetail" v-if="strFlag == 'productionLine'">
          <div style="position:relative;min-height: 300px" v-html="contentList.data.contentData.content"></div>
        </div>    

        <!---联系我们下---->
        <div class="contactDetail" v-if="strFlag == 'contact'">
          <div style="position:relative;min-height: 300px" v-html="contentList.data.contentData.content"></div>
        </div>                

        <!---新闻资讯下---->
        <div class="aboutDetail" v-if="strFlag == 'news'">
          <div style="position:relative;min-height: 300px" v-html="currentDetail"></div>
        </div>     

        <!---产品展示下---->   
        <div class="productShowDetail" v-if="strFlag == 'productShow'">
          <div style="position:relative;min-height: 300px" v-html="currentDetail"></div>
        </div>    

        <!---公司设备下---->   
        <div class="companyDevicveDetail" v-if="strFlag == 'companyDevice'">
          <div style="position:relative;min-height: 300px" v-html="currentDetail"></div>
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
      // window.alert(555)
      try {
        debugger
        if(this.$route.query.fromFlag && this.$route.query.fromFlag == 'isfromHomePage'){
          // 从home首页进入到的详情页面 显示详情而不是显示分类详情
          this.currentDetail = JSON.parse(this.$route.query.contentList).detail.content
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
        currentDetail: `<p
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
          // this.showCatOrDetail_copy = true
          
          // this.changeParentData(true)
        }
      },
      strFlag: {
        handler(newValue, oldValue){
          // this.showCatOrDetail_copy = true
          // this.changeParentData(true)
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
          if(this.strFlag!='about' && this.strFlag!='processCapability' && this.strFlag != 'productionLine' 
            && this.strFlag!= 'contact')
          {
            if(itemObj.detail.content){
              this.currentDetail = itemObj.detail.content
            }else {
              this.currentDetail = `<p
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

