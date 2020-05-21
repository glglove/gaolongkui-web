<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <footer-tab></footer-tab>
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
</style>
