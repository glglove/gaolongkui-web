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
    .horizontal-sidebar-wrap
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
</style>

<template>
	<div class="app-wrapper">
        currentLanguage: {{currentLanguage}}
        <el-row class="page-wrapper">
            <div class="horizontal-sidebar-wrap">
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
                <horizontal-sidebar class="horizontal-sidebar">

                </horizontal-sidebar>
            </div>
        </el-row>

        <!---顶部导航区下方的内容区域-->
        <div class="containerWrapper">

            <!---左边sidebar 区域--->
            <!-- <sidebar class="sidebar-container"></sidebar> -->

            <!--右方内容区-->
            <div class="main-container" v-loading="loading">
                <!--navbar 为 内容区上方的 面包屑 和 动态 tag标签组件-->
                <div class="navBarBox" style="height:50px; position:absolute;top:50px">
                <!-- <navbar></navbar> -->
                </div>

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
            logoUrl: logoUrl
        }
    },
    computed: {
        ...mapGetters([
          'currentLanguage'
        ])
    },
    created(){
      // 加载路由
      this.$store.dispatch("GenerateRoutes")
    },
    methods: {
      clickLogo(){
        this.$router.push({
          path: '/home'
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


