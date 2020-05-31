<template>
  <div id="app">
    <!-- <keep-alive> -->
      <!-- <router-view v-wechat-title="$route.meta.title"></router-view> -->
      <router-view></router-view>
    <!-- </keep-alive>     -->
  </div>
</template>

<script>
  import FooterTab from '@/base/footer-tab/footer-tab.vue'
  export default {
    name:'app',
    created () {},
    components: {
      FooterTab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/css/index"
  #app 
    min-height 100vh
</style>
