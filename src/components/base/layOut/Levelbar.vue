<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：home页面的 面包屑组件
-->
<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <span class="el-icon-s-home el-breadcrumb__item" style="dispay:inline-block;margin:18px 5px 0 0;font-size: 14px"></span>
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
      <span 
        v-if='item.redirect==="noredirect"||index==levelList.length-1' 
        class="no-redirect"
      >{{item.name}}</span>

      <router-link 
        v-else 
        :to="{path:item.redirect||item.path, query: {
          str: globalStrFlag,
          tagId: globalTagId
        }}"
        @click.native="nav_click(item)"
      >{{item.name}}</router-link>

    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$nextTick(()=>{
      this.getBreadcrumb()
    })
  },
  computed: {
    ...mapGetters([
      'globalStrFlag',
      'globalTagId',
    ])    
  },
  watch: {
    '$route' (to, from) {
      // debugger
      this.getBreadcrumb()
    }
  },  
  data () {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb () {
      debugger
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && (first.name !== '首页' || first.path !== '')) {
        matched = [
            { 
              name: '首页', 
              path: '/' ,
              meta: {
                str: 'home',
                tag: 'home'
              }
            }
        ].concat(matched)
      }
      this.levelList = matched
    },
    nav_click(itemObj){
      debugger
      try {
        if(this.globalStrFlag != 'about' && this.globalStrFlag !='productionLine'
            &&this.globalStrFlag!='processCapability' && this.globalStrFlag != 'contact'
        )
        {
          this.$emit("changeParentData", true)
        }
      } catch (error) {
        debugger
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
