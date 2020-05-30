<!--
  User: xxxxxxx
  Date: ******
  功能：home页 
-->
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/css/sidebar"
  .app-wrapper
    position relative
    height 100%
    width 100%
    // min-width 1024px
    font-size 16px
    .horizontal-sidebar-wrap
      position relative
      height 320px
      width 100%
      .carouselBox
        width 100%
        // min-width 1024px
        height 100%
        margin 0 auto
        background-color rgba(0,0,0,.2)
        .el-carousel
          height 100% !important
          .el-carousel__container
            height 320px !important
      .topBox
        position absolute
        top 0
        left 50%
        transform translateX(-50%)
        z-index 1000
        .logoBox
          margin 20px 20px 30px 20px
          .logoPic.english
            opacity 1
            width 500px
            height 50px
            transition  all .5s
            &:hover
              cursor pointer            
          .logoPic
            width 320px
            height 50px
            &:hover
              cursor pointer
          .versionWrap
            font-size 12px
            .ch
              color #000
              font-weight 400 !important
              margin-right 10px
              &:before
                display inline-block
                content ''
                width 20px
                height 10px
                margin-right 3px
                background url('../../../../static/cn.jpg') no-repeat
              &:hover
                color #DA000D
                cursor pointer
            .en
              color #000
              font-weight 400 !important
              &:before
                display inline-block
                content ''
                width 20px
                height 10px
                margin-right 3px
                background url('../../../../static/en.jpg') no-repeat              
              &:hover
                color #DA000D    
                cursor pointer 
    .containerWrapper
      min-height calc(100vh - 420px)
</style>

<template>
	<div class="app-wrapper">
    <!-- currentLanguage: {{currentLanguage}}
    ---
    permissionRouters: {{permissionRouters}} -->
    <el-row class="">
        <div class="horizontal-sidebar-wrap">
          <div class="carouselBox">
            <el-carousel 
              arrow="never"
              class="carousel">
              <el-carousel-item v-for="item in carouselPic" :key="item">
                <!-- <h3 class="small">{{ item }}</h3> -->
                <el-image class="pic"  style="height:100%;width:100%" fit="fill" :src="item"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div> 
          <div class="topBox page-wrapper">
            <!---logo区--->
            <div class="logoBox u-f-jsb u-f-ac">
              <!-- <el-image
                  :src="getLogoUrl"
                  fit="fill"
                  :class="['logoPic', !isChinese? 'english':'']"
                  @click.native="clickLogo"
              ></el-image> -->
              <el-image
                  v-show="currentLanguage == 'zh'"
                  :src="logoUrl"
                  fit="fill"
                  :class="['logoPic']"
                  @click.native="clickLogo"
              ></el-image>
              <el-image
                  v-show="currentLanguage == 'en'"
                  :src="logoUrl_en"
                  fit="fill"
                  :class="['logoPic', 'english']"
                  @click.native="clickLogo"
              ></el-image>                            
              <div class="versionWrap u-f-ajc">
                <el-button 
                  type="text" 
                  class="ch" 
                  @click.native="setChinese"
                >中文</el-button>
                <el-button type="text" class="en" @click.native="setEnglish">English</el-button>
              </div>
            </div>
            <!--导航区--->
            <horizontal-sidebar class="horizontal-sidebar"></horizontal-sidebar>                
          </div>             
        </div>
    </el-row>

    <!---顶部导航区下方的内容区域-->
    <div class="containerWrapper">
      <div class="main-container" v-loading="loading">
        <!--具体的内容区域 直接用下面的组件 app-main 也可以-->
        <div class="routerCotentBox">
          <transition name="fade" mode="out-in">
              <!-- <keep-alive> -->
                <router-view></router-view>
              <!-- </keep-alive> -->
          </transition>
        </div>
        <!--具体的内容区域-->
        <!-- <app-main></app-main> -->
      </div>
    </div>


        <!--分享(addthis)--->
    <div class="shareWrap-addthis" v-if="currentLanguage == 'en'">
      <addthis-hare-cmp v-if="currentLanguage == 'en'"></addthis-hare-cmp>
    </div> 
	</div>
</template>

<script>  

// import { Navbar, Sidebar, AppMain, horizontalSidebar } from '@/components/layout'
import HorizontalSidebar from '@/components/base/layOut/horizontalSidebar'
import { mapGetters } from 'vuex'
import logoUrl from '../../../../static/logo.png'
import logoUrl_en from '../../../../static/logo_en.png'
import ban from '../../../../static/ban.jpg'
import ban2 from '../../../../static/ban2.jpg'
import router from '../../../router'

export default {
    name: 'layout',
    components: {
        // Navbar,
        // Sidebar,
        // AppMain,
        HorizontalSidebar
    },
    data() {
        return {
            loading: false,
            isChinese: true,
            logoUrl: logoUrl,
            logoUrl_en: logoUrl_en,
            carouselPic: [ban, ban2],
            parentRoute:{},
            currentLeftSidebar: [],
            strFlag: '',
            currentTagId: ''
        }
    },
    computed: {
      ...mapGetters([
        'currentLanguage',
        'permissionRouters',
        'addRouters'
      ]),
      getLogoUrl(){
        if(this.currentLanguage == 'zh'){
          this.isChinese = true
          return this.logoUrl
        }else {
          this.isChinese = false
          return this.logoUrl_en
        }
      }
    },
    watch: {
      '$route' (to, from) {
        debugger
        // window.alert(666)
        try {
          debugger
          this.strFlag = this.$route.query.str
          this.currentTagId = this.$route.query.tagId
          // 将 strFlag 和 currentTagId 存入全局中
          this.$store.dispatch("setGlobalStrFlag", this.strFlag)
          this.$store.dispatch("setGlobalTagId", this.currentTagId)
        } catch (error) {
          
        }   
      }
    },
    created(){
      debugger
    },
    methods: {
      clickLogo(){
        this.$router.push({
          path: '/about'
        })
      },     
      async setChinese(){
        debugger
        await this.$store.dispatch("setLanguage", 'zh')
        // 主动刷新一下页面
        this.$router.push({
          path: '/',
          query: {
            str: 'home',
            tagId: 'home'
          }
        })
        location.reload()         
      },
      async setEnglish(){
        debugger
        await this.$store.dispatch("setLanguage", 'en')
        // 主动刷新一下页面
        this.$router.push({
          path: '/',
          query: {
            str: 'home',
            tagId: 'home'
          }
        })        
        location.reload()         
      }
    }
}
</script>


