<!--
  User: fanqingyu
  Date: 2017/6/23 16:10
  功能：
-->

<template>
  <div class="footer-tab">
    <div class="page-wrapper u-f-ajc">
      <div class="picBox u-f-ac">
        <el-image 
          v-show="currentLanguage=='zh'"
          fit="fill" 
          :src="logoUrl"></el-image>
        <el-image 
          v-show="currentLanguage=='en'"
          fit="fill" 
          :src="logoUrl_en"></el-image>          
      </div>
      <div class="textBox marginL10">
        <div class="catBox u-f-ac">
          <span class="catTit" @click="handlerClickTit('contact','contact')">{{$t("footer.contact")}}</span>
          <span class="catTit " @click="handlerClickTit('companyDevice','companyDevice')">{{$t("footer.Equipment")}}</span>
          <span class="catTit" @click="handlerClickTit('companyNews','news')">{{$t("footer.News")}}</span>
          <span class="catTit" @click="handlerClickTit('more','productShow')">{{$t("footer.Product")}}</span>
          <span class="catTit" @click="handlerClickTit('#','#')">{{$t("footer.Count")}}</span>
        </div>
        <div class="marginT10">{{$t("footer.copyRight")}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import logoUrl from '../../../static/foot_xiangzh_logo.png'
  // import logoUrl from '../../../static/foot_logo_xiang.png'
  import logoUrl from '../../../static/foot_text_ch.png'
  // import logoUrl_en from '../../../static/foot_logoxiang_en.png'
  import logoUrl_en from '../../../static/foot_text_en.png'
  export default {
    computed: {
      ...mapGetters([
        'currentLanguage',
        'permissionRouters',
        'addRouters'
      ]),   
    }, 
    data(){
      return {
        logoUrl:logoUrl,
        logoUrl_en:logoUrl_en,
      }
    },
    methods: {
      handlerClickTit(tagId, str){
        debugger
        let url = ''
        switch(str){
          case 'companyDevice':
            url = '/' + str + '/index'
            break
          case 'contact':
            url = '/' + str + '/index'
            break
          case 'news':
            url = '/' + str + '/' + tagId
            break
          case 'productShow':
            url = '/' + str + '/' + tagId
            break
          case '#':
            url = '/' + '#'
            break       
        }
        this.$router.push({
          path: url,
          query: {
            str: str,
            tagId: tagId
          }
        })
        
      },    
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
    height 100px
    // line-height 50px
    color red
    background rgba(227,227,227,.4)
    text-align center
    font-size 16px
    .picBox
      // width 200px
      height 80px
      .el-image
        // width 160px
        // height 50px
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
