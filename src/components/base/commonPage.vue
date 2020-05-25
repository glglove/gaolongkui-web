<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：二级菜单下面的页面组件
-->
<template>
    <div class="secondMenuCmp">
      <levelbar-cmp></levelbar-cmp>

      contentList: {{contentList}}
      <div class="common-product-more-cmp" v-if="strFlag == 'more'">
          common  ——  more _ list
      </div>
      <div class="common-product-high-cmp" v-if="strFlag == 'high'">
          common  ——  high _ list
      </div>       
    </div>
</template>

<script>
  import { 
      getAboutCatList
  } from '@/api/about'        
  import { 
      getProductCatList
  } from '@/api/productShow'  
  import { 
      getNewsCatList
  } from '@/api/news'
  import levelbarCmp from './layOut/Levelbar'
  export default {
    components: {
      levelbarCmp
    },
    props: {
      strFlag: {
        type: String,
        default: ''
      },
      contentList:{
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created () {

    },
    mounted(){
      debugger

    },
    data () {
      return {
        levelList: null,
      }
    },
    watch: {
     
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
    },
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
