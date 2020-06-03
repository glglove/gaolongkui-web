<!--
    User: xxxxxxx
  Date: 2019/4/30
  by： gaol
  功能：home页面 顶部的 横向导航组件
-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@media screen and (min-width: 600px) {
  .horizontal-wrapper {
    position relative
    height 40px
    text-align center 
    .mobileNavBtn {
      display none
      width 200px
      height 100px
    }
    .navTopMenu {
      height 100%
      border-bottom none !important
    }
  }
} 

@media screen and (max-width: 600px) {
  .horizontal-wrapper {
    position relative
    height 40px    
    position relative
    .navTopMenu {
      height 100%
      border-bottom none !important
    }
  }
}     
</style>

<template>
  <div class="horizontal-wrapper">
    <!-- permissionRouters: {{permissionRouters}} -->
    <!-- $route.path: {{$route.path}} -->
    <el-menu 
      mode="vertical"
      theme="dark"
      background-color="#E90000"
      text-color="#ffffff"
      active-text-color="#ffffff"
      unique-opened
      :default-active="$route.path"
      class="navTopMenu u-fi-jst"
    >
      <!--菜单项目items的组件-->
      <sidebar-item :routes='permissionRouters' :horizontalFlag="horizontalFlag"></sidebar-item>
    </el-menu>

    <!-- <div class="avatar-container">
      <div class="message">
        <icon-svg :icon-class="message"></icon-svg>
      </div>
      <div class="email">
        <icon-svg :icon-class="email"></icon-svg>
        <span class="email-num">16</span>
      </div>
    </div> -->
  </div>

</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
  import iconSvg from '@/base/Icon-svg/index'
  export default {
    components: {
      SidebarItem,
      iconSvg
    },
    computed: {
      ...mapGetters([
        'permissionRouters',
        'sidebar',
        'name',
        'avatar'
      ]),
    },
    watch: {
      // '$route' (to, from) {
      //   debugger
      //   if(to.path && to.path != '/' && to.path != '/index'){
      //     this.getLeftSideBar(to)
      //   }        
      // }        
    },    
    data(){
      return {
        horizontalFlag: true,
        // message: 'pc-message',
        // email: 'pc-email'
      }        
    },
    created () {

    },
    methods: {
      logout () {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()
        })
      },     
    }
  }
</script>