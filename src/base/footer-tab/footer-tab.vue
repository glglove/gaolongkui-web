<!--
  User: fanqingyu
  Date: 2017/6/23 16:10
  功能：
-->

<template>
  <div class="footer-tab">
    底部
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/css/variable.styl"
  .footer-tab
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    color: #ffffff
    background: #00a9e4
    .tabbbar-top-line-color
      font-size 0.24rem!important
      .yd-tabbar-item
        i
          font-size 0.4rem!important
    .router-link-active
      color $color!important
</style>
