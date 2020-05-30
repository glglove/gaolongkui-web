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

            <el-col :span="18" style="border-left: 1px solid #eee;min-height:500px">
                <!-- contentList: {{contentList}} -->
                <!-- showCatOrDetail: {{showCatOrDetail}} -->
                <common-page-cmp
                    :levelList="levelList"
                    :strFlag="globalStrFlag"
                    :tagId="globalTagId"
                    :showCatOrDetail.sync="showCatOrDetail"
                    :contentList.sync="contentList"
                ></common-page-cmp>

                <!----分页--->
                <!--1、企业新闻---->
                <!-- contentList.total:{{contentList.total}}
                globalTagId: {{globalTagId}} -->
                <div class="paginationWrap center" 
                      v-if="showCatOrDetail && globalTagId=='companyNews'
                          || globalTagId=='hotNews' 
                          || globalTagId=='industryInformation' 
                          || globalTagId=='technicalArtical' 
                          || globalTagId=='more'
                          || globalTagId=='high'
                         || globalTagId=='aluminium'
                         || globalTagId=='phone'
                          || globalTagId=='double'
                         || globalTagId=='impedance'
                         || globalTagId=='special'
                         || globalTagId=='companyDevice'
                         || globalTagId=='companyDevice'
                      ">
                  <pagination-cmp 
                    :total="contentList.total||0"
                    @refreshGetData="refreshGetData"
                    ></pagination-cmp>
                </div>
                                                                                                            
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LeftSidebaritemCmp from '@/components/base/layOut/leftSidebarItem'
    import commonPageCmp from '@/components/base/commonPage'
    import PaginationCmp from '@/components/base/pagination'
    import { mapGetters } from 'vuex'
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
      commonPageCmp,
      PaginationCmp
  },
  created () {

  },
  computed: {
    ...mapGetters([
      'globalStrFlag',
      'globalTagId',
    ])
  },
  mounted(){   
  },
  data () {
    return {
      levelList: null,
      strFlag: '',
      currentTagId: '',
      contentList: [],
      showCatOrDetail: true
    }
  },
  watch: {
    '$route' (to, from) {     
      // this.getBreadcrumb()
      debugger
      // window.alert(6666)
      
    },
    globalStrFlag: {
      handler(newValue, oldValue){
        debugger
        if(newValue == 'about' || newValue == 'processCapability'
          || newValue == 'productionLine' || newValue == 'contact'){
          this.showCatOrDetail = false
        }else {
          this.showCatOrDetail = true
        }
      },
      immediate: true
    },
    globalTagId: {
      handler(newValue, oldValue){
        debugger
        if(newValue){
          this._getData()
        }
      },
      immediate: true
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
    refreshGetData(pageSize,pageNum){
      debugger
      this._getData(pageSize,pageNum)
    },
    _getData(pageSize,pageNum){
      debugger
      switch(this.globalStrFlag){
        // 产品展示
        case 'productShow':
        getProductCatList(this.globalTagId,pageSize,pageNum).then(res => {
          debugger
          console.log("-----------",res)
          this.contentList = res
        }).catch(data => {  })                
        break

        // 新闻
        case 'news':
        getNewsCatList(this.globalTagId,pageSize,pageNum).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break

        // 关于我们
        case 'about':
        getAboutCatList(this.globalTagId,pageSize,pageNum).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break   

        // 公司设备
        case 'companyDevice':
        getCompanyDeviceCatList(this.globalTagId,pageSize,pageNum).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break   
        
        // 制程能力
        case 'processCapability':
        getProcessCapabilityCatList(this.globalTagId,pageSize,pageNum).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break 
        
        // 生产流程
        case 'productionLine':
        getProductionLineCatList(this.globalTagId,pageSize,pageNum).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break    
        
        // 联系我们
        case 'contact':
        getContactCatList(this.globalTagId).then(res => {
          console.log("-----------",res)
          this.contentList = res                    
        })
        break          
      }
    },    
    switchRouter(tag, allTag){
        debugger
        if(this.globalStrFlag == 'about'){
          this.showCatOrDetail = false
        }else {
          this.showCatOrDetail = true
        }
        switch(tag.path){
            case 'more':
            case 'high':
            case 'aluminium':           
            case 'phone':
            case 'double':  
            case 'impedance':    
            case 'special':     
              this.$router.push({
                path: '/productShow/' + tag.path,
                query: {
                  tagId: tag.path,
                  str: tag.str
                }
              }).catch(data => {  })  
              // 获取数据      
              this._getData()                                   
            break             

            // 新闻资讯
            case 'companyNews':
            case 'hotNews':
            case 'industryInformation':
            case 'technicalArtical':
              debugger
              this.$router.push({
                path: '/news/'+tag.path,
                query: {
                  tagId: tag.path,
                  str: tag.str
                }
              }).catch(data => {  })      
              // 获取数据      
              this._getData()                  
            break              


            // 关于我们
            case 'companyProfile':
            case 'speech':
            case 'companyFramework':
            case 'companyCulture':
              this.$router.push({
                path: '/about/'+ tag.path,
                query: {
                  tagId: tag.path,
                  str: tag.str
                }
              }).catch(data => {  })   
            break      
              
            
            // 网站首页
            case '/':
              this.$router.push({
                path:'/index',
                tagId: 'home',
                str: 'home'
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
