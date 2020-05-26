<!--
    User: xxxxxxx
  Date: 2019/4/30
  by： gaol
  功能：
-->
<template>
  <div class='left-sidebar'>
      <!-- <levelbar-cmp></levelbar-cmp> -->
    <h3 class="marginT30 marginB20" v-if="currentLeftSideBar[0].name">深圳福满电子:{{currentLeftSideBar[0].name}}</h3>
    <!-- permissionRouters: {{permissionRouters}} -->
      <!-- currentLeftSideBar: {{currentLeftSideBar}} -->
      <!-- ----
      currentLeftParentSideBar: {{currentLeftParentSideBar}} -->
      <!-- routes: {{routes}} -->
    <div class="tabs-view"
        v-for="tag in currentLeftSideBar[0].children"
        :key="tag.path"
        @click="clickLeftSideBar(tag, currentLeftSideBar)"
      >
        <div class="u-f-jsb">
            <span>{{tag.name}}</span>
            <span class="el-icon-arrow-right"></span>
        </div>
    </div>
    <div class="picBox marginT30">
        <el-image fit="fill" :src="leftPic"></el-image>
    </div>    
  </div>
</template>

<script>
import levelbarCmp from './Levelbar'
import { mapGetters } from 'vuex'
import leftPic from '../../../../static/left.png'
export default {
    components: {
        levelbarCmp
    },  
    props: {
        routes: {
          type: Array,
          default: () => {
              return []
          }
        }
    },
  computed: {
    visitedViews () {
      // 只显示 最近的 5个 标签
      // debugger
      let arr = this.$store.state.app.visitedViews.slice()
      return arr.slice(-5)
    },
    ...mapGetters([
      'permissionRouters',
      'currentLeftSideBar',
      'currentLeftParentSideBar'
    ])
  },
  data(){
      return {
        leftPic: leftPic
      }
  },
  methods: {
    closeViewTabs (view, $event) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view.path)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    generateRoute () {
      // debugger
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    addViewTabs () {
      // debugger
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive (path) {
      return path === this.$route.path
    },
    clickLeftSideBar(tag, allTag){
        debugger
        switch(tag.path){
            case 'more':
            // this.$router.push({
            //     path: '/productShow/more/productCatList'
            // })
            break
            case 'high':
                // this.$router.push({
                //     path: '/productShow/high/productCatList'
                // })
                // this.catId = 'high'
            break
        }

        this.$emit("switchRouter", tag, allTag)
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left-sidebar
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    .tabs-view
      font-size 12px
      margin-left 10px
      padding 10px 5px
      border-bottom 1px solid #f1ecec
      box-sizing border-box
      background-color #ffffff
      cursor pointer
      &:hover
        background red
</style>
