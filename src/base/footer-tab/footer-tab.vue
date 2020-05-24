<!--
  User: fanqingyu
  Date: 2017/6/23 16:10
  功能：
-->

<template>
  <div class="footer-tab">
    <div class="page-wrapper u-f-ajc">
      <div class="picBox u-f-ac">
        <el-image fit="fill" :src="logoUrl" lazy></el-image>
      </div>
      <div class="textBox marginL20">
        <div class="catBox u-f">
          <a class="catTit">联系我们</a>
          <a class="catTit">公司设备</a>
          <a class="catTit">新闻资讯</a>
          <a class="catTit">产品中心</a>
          <a class="catTit">站长统计</a>
        </div>
        <div class="marginT10">Copyright © 2013 深圳市满福电子有限公司 版权所有   粤ICP备18100547号-1</div>
      </div>
    </div>
  </div>
</template>

<script>
  import logoUrl from '../../../static/logo.png'
  export default {
    data(){
      return {
        logoUrl:logoUrl
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/css/variable.styl"
  .footer-tab
    // position: fixed
    // bottom: 0
    // left: 0
    width: 100%
    height 80px
    // line-height 50px
    color red
    background rgba(227,227,227,.4)
    text-align center
    font-size 16px
    .picBox
      width 160px
      height 80px
      .el-image
        width 160px
        height 30px
    .textBox
      font-size 12px
      color #595959
      .catBox
        .catTit
          margin 0 10px
          cursor pointer
          &:hover
            color red
          &:nth-of-type(2)
            position relative
            &:before
              position absolute
              left -7px
              display block
              content ''
              width 1px 
              height 100% 
              background-color #909399
          &:nth-of-type(3)
            position relative
            &:before
              position absolute
              left -7px
              display block
              content ''
              width 1px 
              height 100% 
              background-color #909399       
          &:nth-of-type(4)
            position relative
            &:before
              position absolute
              left -7px
              display block
              content ''
              width 1px 
              height 100% 
              background-color #909399 
          &:nth-of-type(5)
            position relative
            &:before
              position absolute
              left -7px
              display block
              content ''
              width 1px 
              height 100% 
              background-color #909399                                  
</style>
