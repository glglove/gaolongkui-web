<!--
  User: xxxxxxx
  Date: 2017/12/15
  功能：home页中 顶部 和 左边的导航—— 菜单项目items的组件，被 horizontalFlagSidebar.vue组件 和 leftSidebarItem组件所 引用
-->
<template>
    <div class="menuItemCmp u-fi-jsr page-wrapper">
      <template 
        class='menu-wrapper'
        v-for="(item,key) in routes">
        <!--菜单只有主菜单一级的情况-->
        <router-link 
          class="menu-nav u-f0 white-space-nowrap"
          v-if="!item.hidden&&item.noDropdown"
          :to="{path: item.path, query: {tagId: item.tagId, str: item.str}}"
          tag="li"
          active-class="activeClass"
          @mouseover.native="navMouseover(item, key)"
          @mouseout.native="navMouseout(item, key)"
          :class="item.str==globalStrFlag? 'currentNavLiStyle': ''"
          >
          <span class="navitem" :class="item.str==globalStrFlag? 'currentStyle': ''">
           {{item.name}}
          </span>
        </router-link>

        <!---一级菜单下面有下级菜单的情况---->
        <router-link
          class="menu-nav u-f0 white-space-nowrap"
          v-if="!item.hidden&&!item.noDropdown&&item.children.length>0"
          :to="{path: item.path, query: {tagId: item.tagId, str: item.str}}"
          tag="li"
          event="click"
          @mouseover.native="navMouseover(item, key)"
          @mouseout.native="navMouseout(item, key)"
          active-class="activeClass"
          :class="item.str==globalStrFlag? 'currentNavLiStyle': ''"
          >
          <span
            :class="['navitem',currentLanguage == 'en'? 'en': '', item.str==globalStrFlag? 'currentStyle': '']" 
          >
           {{item.name}}
          </span> 

          <div 
            :class="['firstChildwrap',currentLanguage == 'en'? 'enStyle': 'zhStyle',item.str==globalStrFlag? 'showSecondNavStyle':'']" 
          >
            <ul :class="['u-f-nowrap',currentLanguage == 'en'? 'u-fi-jst': 'u-fi-jst']">
              <router-link 
                v-for="(firstChild, key) in item.children"
                :key="key"
                class="first-item white-space-nowrap"
                :to="{path: item.path +'/' + item.children[key].path, query: {tagId: firstChild.tagId, str: firstChild.str}}"
              >
                <a class="tit">{{firstChild.name}}</a>
              </router-link>
            </ul>
          </div>         
        </router-link>

        <!-- <router-link 
            class="u-f0"
            v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
            :to="item.children[0].path">
            <el-menu-item :index="item.path + item.children[0].path" 
                        style="display:inline-block" 
                        :class="['submenu-title-noDropdown',!horizontalFlag? 'leftSidebar-submenu-title-noDropdown': '']">
            <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
            <span>{{item.name}}</span>
            </el-menu-item>
        </router-link> -->


        <!--菜单名下有子菜单的情况-->
        <!-- <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">

          <template slot="title">
            <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
            <span class="parentName">{{item.name}}</span>
          </template>

        </el-submenu> -->
      </template>
    </div>
</template>

<script>
  import iconSvg from '@/base/Icon-svg/index'
  import { mapGetters } from 'vuex'
  export default {
    props: {
      routes: {
        type: Array
      },
      horizontalFlag: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        parentRoute: {},
        currentLeftSidebar: [],
        currentKey: -1,
        currentHoverNav: {},
        currentNavLiStyle: "background-color:#ffffff;color: #CC0000; boxShowdow: 0 -10px 10px 10px rgba(0, 0, 0, 0.1)",
        currentStyle: "display:inline-bolck;color: #CC0000; boxShowdow: 0 -10px 10px 10px rgba(0, 0, 0, 0.1)",
        showSecondNavStyle: 'display: block; color: #DA000D'
      }
    },
    created () {
      // debugger
      // console.log(this.routes)
    },
    computed: {
      ...mapGetters([
        'permissionRouters',
        'currentLanguage',
        'globalStrFlag',
        'globalTagId'
      ]),      
    },
    watch: {
      '$route'(to, from){
        debugger
        if(to.path && to.path != '/' && to.path != '/index'){
          this.getLeftSideBar(to)
        }        
      }        
    },    
    components: {
      iconSvg
    },
    methods: {
      navMouseover(item, key){
        // debugger
        // this.currentKey = key
        this.currentHoverNav = item
      },
      navMouseout(item, key){
        // debugger
        // this.currentKey = '-1'
      },
      getLeftSideBar(routeInfo){
        debugger
        let routerMatched = routeInfo.matched
        if(!routeInfo.hidden){
          this.parentRoute = routerMatched[0]
          let currentName =   routerMatched[0].name
          let currentPath = routerMatched[0].path
          switch(currentPath){
            case '/about':
            case '/news':
            case '/productShow':
            case '/productShow':
              this.currentLeftSidebar = this.permissionRouters.filter((item, key) => {
                  // if(item.path ==  (this.parentRoute.path)){
                  //   // item.parent = JSON.parse(JSON.stringify(item))
                  //   // return JSON.parse(JSON.stringify(item))
                  //   return JSON.parse(JSON.stringify(item))
                  // }
                  return item.path == this.parentRoute.path
              })  
            break  
            
            case '/companyDevice':         
            case '/processCapability':             
            case '/productionLine':             
            case '/contact':     
              this.currentLeftSidebar = [
                {
                  path: currentPath,
                  name: currentName,
                  children: this.permissionRouters
                }  
              ]
            break     
          }        
          this.$store.dispatch("setLeftSidebar", this.currentLeftSidebar)
          this.$store.dispatch("setLeftParentSidebar", this.parentRoute)                        
        }
      },      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
>>>.el-menu-item, .el-submenu__title, .el-submenu__title
  height 40px !important
  line-height 40px !important
>>>.el-submenu 
  .el-submenu__title
    height 40px !important
    line-height 40px !important
.menuItemCmp
  font-size 0
  .menu-nav
    color #ffffff
    font-weight bold 
    background-color #E90000
    &:hover   
      cursor pointer
      background-color #ffffff
    &.currentNavLiStyle
      background-color: #ffffff
      color: #CC0000
      boxShowdow: 0 -10px 10px 10px rgba(0, 0, 0, 0.1)
  li
    position relative
    height 100%
    line-height 40px  
    cursor pointer
    font-weight bold
    color #ffffff    
    &:hover
      color #CC0000
    .navitem
      font-size 14px
      // margin 0 10px
      padding 0 10px
      box-sizing border-box
      &.currentStyle
        display:inline-bolck
        color: #CC0000
        boxShowdow: 0 -10px 10px 10px rgba(0, 0, 0, 0.1)
    .firstChildwrap
      display none
      position absolute
      top 40px
      // width 450px
      box-shadow 0 5px 10px 1px rgba(0, 0, 0, 0.1)  
      ul
        font-size 0
        background-color #ffffff
      &.zhStyle       
        .first-item
          display inline-block
          font-size 12px
          text-align center
          // min-width 80px
          margin 0px 5px
          &:hover
          a
            display inline-block
            min-width 80px
            color: #DA000D
            .tit
              cursor pointer
              color #000000  
    &.en
    &:nth-of-type(2)      
      .firstChildwrap
        display none
        position absolute
        top 40px
        // width 500px
        // box-shadow 0 2px 1px 1px blue
        box-shadow 0 5px 10px 1px rgba(0, 0, 0, 0.1)    
        z-index 1000
        ul
          font-size 0
          background-color #ffffff
        &.enStyle
          // left -100px
          // right -400px        
          .first-item
            display inline-block
            font-size 12px
            text-align center
            // min-width 80px
            margin 0px 5px
            &:hover
            a
              display inline-block
              min-width 80px
              color: #DA000D
              .tit
                cursor pointer
                color #000000
        &.showSecondNavStyle
          transition all .1s
          display block
          color #DA000D
    &.en
    &:nth-of-type(3)      
      .firstChildwrap
        display none
        position absolute
        top 40px
        // width 500px
        // box-shadow 0 2px 1px 1px blue
        box-shadow 0 5px 10px 1px rgba(0, 0, 0, 0.1)   
        z-index 1000 
        ul
          font-size 0
          background-color #ffffff
        &.enStyle
          // left -100px
          // right -400px        
          .first-item
            display inline-block
            font-size 12px
            text-align center
            // min-width 80px
            margin 0px 5px
            &:hover
            a
              display inline-block
              min-width 80px
              color: #DA000D
              .tit
                cursor pointer
                color #000000   
        &.showSecondNavStyle
          transition all .1s
          display block
          color #DA000D   
    &.en
    &:nth-of-type(4)      
      .firstChildwrap
        display none
        position absolute
        top 40px
        // width 750px
        box-shadow 0 5px 10px 1px rgba(0, 0, 0, 0.1)    
        z-index 1000
        ul
          font-size 0
          background-color #ffffff
        &.enStyle
          // left -100px
          // right -400px        
          .first-item
            display inline-block
            font-size 12px
            text-align center
            // min-width 80px
            margin 0px 5px
            &:hover
            a
              display inline-block
              min-width 80px
              color: #DA000D
              .tit
                cursor pointer
                color #000000    
        &.showSecondNavStyle
          transition all .1s
          display block
          color #DA000D                 
</style>

