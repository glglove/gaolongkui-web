<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：二级菜单下面的页面组件
-->
<template>
    <div class="secondMenuCmp">
        <el-row class="page-wrapper">
            <el-col :span="6">
                <left-sidebaritem-cmp @switchRouter="switchRouter"></left-sidebaritem-cmp>
            </el-col>
            <el-col :span="18">
                <!-- contentList: {{contentList}} -->
                <common-page-cmp
                    :strFlag="strFlag"
                    :contentList="contentList"
                ></common-page-cmp>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LeftSidebaritemCmp from '@/components/base/layOut/leftSidebarItem'
    import commonPageCmp from '@/components/base/commonPage'
    import { 
        getAboutCatList
    } from '@/api/about'        
    import { 
        getProductCatList
    } from '@/api/productShow'  
    import { 
        getNewsCatList
    } from '@/api/news'      
export default {
    props: {
    },
  components: {
      LeftSidebaritemCmp,
      commonPageCmp
  },
  created () {
    this.$nextTick(()=>{
      this.getBreadcrumb()
    })
  },
  data () {
    return {
      levelList: null,
      strFlag: '',
      contentList: []
    }
  },
  methods: {
    getBreadcrumb () {
      // debugger
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && (first.name !== '首页' || first.path !== '')) {
        matched = [{ name: '首页', path: '/' }].concat(matched)
      }
      this.levelList = matched
    },
    switchRouter(tag, allTag){
        debugger
        this.strFlag = tag.path
        switch(tag.path){
            case 'more':
                // 获取 more 分类下的数据
            case 'high':
                // 获取 high 分类下的数据
            case '':
            case '':
            getProductCatList(tag.path).then(res => {
                debugger
                console.log("-----------",res)
                this.contentList = res
            })                
            break

            case 'companyNews':
            case 'hotNews':
            case 'industryInformation':
            case 'technicalArtical':
            getNewsCatList(tag.path).then(res => {
                console.log("-----------",res)
                this.contentList = res                    
            })
            break

            case 'companyProfile':
            case 'speech':
            case 'companyFramework':
            case 'companyCulture':
            getAboutCatList(tag.path).then(res => {
                console.log("-----------",res)
                this.contentList = res                    
            })
            break            
        }        
    },
  },
  watch: {
    '$route' (to, from) {
      // debugger
      this.getBreadcrumb()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-levelbar.el-breadcrumb
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect
      color: #97a8be;
      cursor: text;
</style>
