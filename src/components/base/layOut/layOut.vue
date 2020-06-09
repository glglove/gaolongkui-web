<!--
  User: xxxxxxx
  Date: ******
  功能：home页 
-->
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/css/sidebar"
  .backTop
    height 100%
    width 100%
    background-color #f2f5f6
    box-shadow 0 0 6px rgba(0,0,0, .12)
    text-align center
    font-size 12px
    line-height 40px
    color red    
  .app-wrapper
    position relative
    height 100%
    width 100%
    // min-width 1024px
    font-size 16px
    overflow auto
    .horizontal-sidebar-wrap
      position relative
      height 360px
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
            height 100% !important
      .topBox
        width 100%
        position absolute
        top 0
        left 50%
        right 0
        transform translateX(-50%)
        z-index 1000
        .logoBox
          margin 20px 20px 0 20px
          .logoPic.english
            opacity 1
            width 500px
            height 25px
            transition  all .5s
            &:hover
              cursor pointer            
          .logoPic
            // width 320px
            height 25px
            &:hover
              cursor pointer
          .versionWrap
            font-size 12px
            margin-left 10px
            .ch
              color #000
              font-weight 400 !important
              margin-right 10px
              &:hover
                color #DA000D
                cursor pointer
            .en
              color #000
              font-weight 400 !important          
              &:hover
                color #DA000D    
                cursor pointer 
            .cnWrap
              .el-image
                height 10px
                width 15px
            .enWrap
              .el-image
                height 10px
                width 15px
        .horizontal-sidebar
          width 100%
          margin-top 20px
    .containerWrapper
      min-height calc(100vh - 420px)
</style>

<template>
	<div class="app-wrapper amimated fadeInLeft fast">
    <!-- currentLanguage: {{currentLanguage}}
    ---
    permissionRouters: {{permissionRouters}} -->
    <el-row class="">
        <el-col :span="24">
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
                  <div class="cnWrap u-f-ajc">
                    <el-image :src="cnPic" fit="fill"></el-image>
                    <el-button 
                      type="text" 
                      class="ch marginL5" 
                      @click.native="setChinese"
                    >中文</el-button>
                  </div>
                  <div class="enWrap u-f-ajc">
                    <el-image :src="enPic" fit="fill"></el-image>
                    <el-button type="text" class="en marginL5" @click.native="setEnglish">English</el-button>
                  </div>
                </div>
              </div>
              <!--导航区--->
              <horizontal-sidebar class="horizontal-sidebar"></horizontal-sidebar>                
            </div>             
          </div>
        </el-col>
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


    <footer-tab></footer-tab>


    <!--分享(addthis)--->
    <div class="shareWrap-addthis" v-if="currentLanguage == 'en'">
      <addthis-hare-cmp v-if="currentLanguage == 'en'"></addthis-hare-cmp>
    </div> 

    <!--分享(bds)--->
    <div class="shareWrap" style="display: none">
      <bds-hare-cmp :hasMore="false" v-if="currentLanguage && currentLanguage == 'zh'"></bds-hare-cmp>
    </div>        


    <el-backtop target=".app-wrapper" :bottom="100">
      <div class="backTop"
      >
        {{$t("message.backTop")}}
      </div>
    </el-backtop>    
	</div>
</template>

<script>  

// import { Navbar, Sidebar, AppMain, horizontalSidebar } from '@/components/layout'
import HorizontalSidebar from '@/components/base/layOut/horizontalSidebar'
import FooterTab from '@/base/footer-tab/footer-tab.vue'
import { mapGetters } from 'vuex'
import cnPic from '../../../assets/cn.jpg'
import enPic from '../../../assets/en.jpg'
// import logoUrl from '../../../../static/logo_xiangl.png'
import logoUrl from '../../../../static/logo_text_top_ch.png'
// import logoUrl_en from '../../../../static/logo_xiang_en.png'
import logoUrl_en from '../../../../static/logo_text_top_en.png'
// import ban from '../../../../static/ban.jpg'
// import ban2 from '../../../../static/ban2.jpg'
import router from '../../../router'

export default {
    name: 'layout',
    components: {
        // Navbar,
        // Sidebar,
        // AppMain,
        HorizontalSidebar,
        FooterTab
    },
    data() {
        return {
            loading: false,
            isChinese: true,
            cnPic: cnPic,
            enPic: enPic,
            logoUrl: logoUrl,
            logoUrl_en: logoUrl_en,
            // carouselPic: [ban, ban2],
            carouselPic: ['https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006041056737217.jpg', 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006041114583893.jpg'],
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
    mounted(){

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


