<!--
    User: xxxxxxx
  Date: 2019/4/30
  by： gaol
  功能：
-->
<template>
  <div class='home'>
    <el-row class="tipWrap">
      <div class="tipBox page-wrapper u-f-ajc">
        <el-carousel 
            indicator-position="none"
            direction="vertical" 
            :autoplay="true">
            <el-carousel-item v-for="(item,key) in tipInfos" :key="key">
            <a class="tipTit">{{ item.tip }}</a>
            </el-carousel-item>
        </el-carousel>

        <!--分享--->
        <div class="shareWrap" style="width: 500px">
          <bds-hare-cmp :hasMore="false"></bds-hare-cmp>
        </div>        
      </div>
    </el-row>

    <el-row class="newsWrap page-wrapper">
      <div class="u-f-jsb u-f-ac">
        <div class="newsItem u-f0">545</div>
        <div class="newsItem u-f0">5</div>
        <div class="newsItem u-f0">555</div>
      </div>

      <div class="keyWord">
        <span class="headline">网站关键字:</span>
        <span class="tit" @click="handlerClickTit('more')">多层板</span>
        <span class="tit" @click="handlerClickTit('high')">高频板</span>
        <span class="tit" @click="handlerClickTit('aluminium')">铝基板</span>
        <span class="tit"  @click="handlerClickTit('phone')">手机板</span>
        <span class="tit"  @click="handlerClickTit('double')">双面板</span>
        <span class="tit" @click="handlerClickTit('impedance')">阻抗板</span>
        <span class="tit"  @click="handlerClickTit('special')">特殊工艺板</span>
      </div>
    </el-row>    
  </div>
</template>

<script>
export default {
  computed: {

  },
  data(){
    return {
        tipInfos:[
            {
            tip: '2013-08-11  公司长期供应双面及多层印制线路板'
            },
            {
            tip: '2、通知二'
            },
            {
            tip: '3、通知三'
            }
        ]          
    }
  },
  methods: {
    handlerClickTit(str){
      switch(str){
        case 'more':
          // this.$router.push({
          //   path: '/productShow/'+ 'more'
          // })
          break
        case 'high':
          break
        case 'aluminium':
          break
        case 'phone':
          break
        case 'double':
          break
        case 'impedance':
          break
        case 'special':
          break          
      }
      this.$router.push({
        path: '/productShow/'+ str
      })      
    }
  },
  watch: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.el-row.tipWrap
  background-color #8E9094
  .tipBox
    .el-carousel
      width 100% !important   
      height 35px 
      line-height 35px   
      .el-carousel__container
        .el-carousel__item
          font-size 12px
          .tipTit
            color #ffffff
            &:hover
              cursor pointer
              color red
.el-row.newsWrap
  height 380px
  margin-top 30px
  .newsItem
    height 291px
    &:nth-of-type(1)
      width 30%
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1)
    &:nth-of-type(3)
      width 25%
      margin-left 30px
    &:nth-of-type(2)
      width 30%
      margin-left 20px
      box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.1)
  .keyWord
    margin-top 40px
    text-align center
    .headline
      font-size 13px
      font-weight bold
      color #595959
      margin-right 5px
    .tit
      font-size 12px
      color #666666
      cursor pointer
      &:hover
        color red
</style>
