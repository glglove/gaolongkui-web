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
    min-width 1024px
    font-size 16px
    .horizontal-sidebar-wrap
      position relative
      height 320px
      width 100%
      .carouselBox
        width 100%
        min-width 1024px
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
          .logoPic
            width 320px
            height 50px
            &:hover
              cursor pointer
          .versionWrap
            font-size 10px
            .ch
              color #000
              font-weight 400 !important
              &:hover
                color #DA000D
            .en
              color #000
              font-weight 400 !important
              &:hover
                color #DA000D     
    .containerWrapper
      min-height calc(100vh - 360px)
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
              <el-image
                  class="logoPic"
                  :src="logoUrl"
                  fit="fill"
                  @click.native="clickLogo"
              ></el-image>
              <div class="versionWrap u-f-ajc">
                <el-button type="text" class="ch" @click.native="setChinese">中文</el-button>
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

	</div>
</template>

<script>  

// import { Navbar, Sidebar, AppMain, horizontalSidebar } from '@/components/layout'
import HorizontalSidebar from '@/components/base/layOut/horizontalSidebar'
import { mapGetters } from 'vuex'
import logoUrl from '../../../../static/logo.png'
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
            logoUrl: logoUrl,
            carouselPic: [ban, ban2],
            parentRoute:{},
            currentLeftSidebar: []
        }
    },
    computed: {
        ...mapGetters([
          'currentLanguage',
          'permissionRouters',
          'addRouters'
        ])
    },
    watch: {
    
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
      setChinese(){
        this.$store.dispatch("setLanguage", 'ch')
      },
      setEnglish(){
        this.$store.dispatch("setLanguage", 'en')
      }
    }
}
</script>


