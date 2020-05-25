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
    import {
      getCompanyDeviceCatList
    } from '@/api/companyDevice'
    import {
      getProcessCapabilityCatList
    } from '@/api/processCapability'    
    import {
      getProductionLineCatList
    } from '@/api/productionLine' 
    import {
      getContactCatList
    } from '@/api/contact'         
export default {
    props: {
    },
  components: {
      LeftSidebaritemCmp,
      commonPageCmp
  },
  created () {
    this.$nextTick(()=>{
      try {
        debugger
        this.strFlag = this.$route.query.str
        this.currentTagId = this.$route.query.tagId
      } catch (error) {
        
      }       
      this.getBreadcrumb()
    })
  },
  mounted(){   
  },
  data () {
    return {
      levelList: null,
      strFlag: '',
      currentTagId: '',
      contentList: []
    }
  },
  watch: {
    '$route' (to, from) {
      // debugger
      this.getBreadcrumb()
    },
    strFlag: {
      handler(newValue, oldValue){
        debugger
        if(newValue){
          this._getData()
        }
      },
      // immediate: true
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
    _getData(){
      debugger
      switch(this.strFlag){
        // 产品展示
        case 'productShow':
        getProductCatList(this.currentTagId).then(res => {
          debugger
          console.log("-----------",res)
          this.contentList = res
        }).catch(data => {  })                
        break

        // 新闻
        case 'news':
        getNewsCatList(this.currentTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break

        // 关于我们
        case 'about':
        getAboutCatList(this.currentTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break   

        // 公司设备
        case 'companyDevice':
        getCompanyDeviceCatList(this.currentTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break   
        
        // 制程能力
        case 'processCapability':
        getProcessCapabilityCatList(this.currentTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break 
        
        // 生产流程
        case 'productionLine':
        getProductionLineCatList(this.currentTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break    
        
        // 联系我们
        case 'contact':
        getContactCatList(this.currentTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break          
      }
    },    
    switchRouter(tag, allTag){
        debugger
        this.strFlag = tag.path
        switch(tag.path){
            case 'more':
              this.$router.push({
                path: '/productShow/more',
                query: {
                  tagId: tag.path,
                  str: tag.str
                }
              }).catch(data => {  })
            break
            case 'high':
              this.$router.push({
                path: '/productShow/high',
                query: {
                  tagId: tag.path,
                  str: tag.str
                }
              }).catch(data => {  })
            break
            case 'aluminium':
              this.$router.push({
                path: '/productShow/aluminium',
                query: {
                  tagId: tag.path,
                  str: tag.str
                }
              }).catch(data => {  })
            break              
            case 'phone':
              getProductCatList(tag.path).then(res => {
                debugger
                console.log("-----------",res)
                this.contentList = res
              }).catch(data => {  })                
            break

            case 'double':
              getProductCatList(tag.path).then(res => {
                debugger
                console.log("-----------",res)
                this.contentList = res
              }).catch(data => {  })                
            break       
            
            case 'impedance':
              getProductCatList(tag.path).then(res => {
                debugger
                console.log("-----------",res)
                this.contentList = res
              }).catch(data => {  })                
            break    
            
            case 'special':
              getProductCatList(tag.path).then(res => {
                debugger
                console.log("-----------",res)
                this.contentList = res
              }).catch(data => {  })                
            break             

            case 'companyNews':
            case 'hotNews':
            case 'industryInformation':
            case 'technicalArtical':
            // getNewsCatList(tag.path).then(res => {
            //     console.log("-----------",res)
            //     this.contentList = res                    
            // })
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
            
            case '/':
              this.$router.push({
                path:'/index',
              })
              break
            case '/about':
              this.$router.push({
                path:'/about/companyProfile',
                query: {
                  tagId: 'companyProfile',
                  str: 'about'
                }
              })
              break              
            case '/news':
              this.$router.push({
                path:'/news/companyNews',
                query: {
                  tagId: 'companyNews',
                  str: 'news'
                }
              })   
              break           
            case '/productShow':
              this.$router.push({
                path:'/productShow/more',
                query: {
                  tagId: 'more',
                  str: 'productShow'
                }
              })
              break                  
            case '/companyDevice':
              this.$router.push({
                path:'/companyDevice/index',
                query: {
                  tagId: 'companyDevice',
                  str: 'companyDevice'
                }
              })       
              break         
            case '/processCapability':
              this.$router.push({
                path:'/processCapability/index',
                query: {
                  tagId: 'processCapability',
                  str: 'processCapability'
                }
              })   
              break              
            case '/productionLine':
              this.$router.push({
                path:'/productionLine/index',
                query: {
                  tagId: 'productionLine',
                  str: 'productionLine'
                }
              })    
              break             
            case '/contact':
              this.$router.push({
                path:'/contact/index',
                query: {
                  tagId: 'contact',
                  str: 'contact'
                }
              })                  
            break                 
        }        
    },
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
