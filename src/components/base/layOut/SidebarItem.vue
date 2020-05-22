<!--
  User: xxxxxxx
  Date: 2017/12/15
  功能：home页中 顶部 和 左边的导航—— 菜单项目items的组件，被 horizontalFlagSidebar.vue组件 和 leftSidebarItem组件所 引用
-->
<template>
    <div class="menuItemCmp u-f-jsr page-wrapper">
      <template 
        class='menu-wrapper'
        v-for="(item,key) in routes">
        <!--菜单只有主菜单一级的情况-->
        <router-link 
          class="menu-nav u-f0"
          v-if="!item.hidden&&item.noDropdown"
          :to="item.path"
          tag="li"
          active-class="activeClass"
          @mouseover.native="navMouseover(item, key)"
          >
          <a class="navitem" :style="key==currentKey? currentStyle: ''">
           {{item.name}}
          </a>
        </router-link>

        <!---一级菜单下面有下级菜单的情况---->
        <router-link
          class="menu-nav u-f0"
          v-if="!item.hidden&&!item.noDropdown&&item.children.length>0"
          :to="item.path"
          tag="li"
          event="click"
          @mouseover.native="navMouseover(item, key)"
          active-class="activeClass"
          :style="key==currentKey? currentStyle: ''">
          <a class="navitem" :style="key==currentKey? currentStyle: ''">
           {{item.name}}
          </a> 

          <div class="firstChildwrap" :style="key==currentKey? showSecondNavStyle:''">
            <ul class="u-f-jst">
              <router-link 
                v-for="(firstChild, key) in item.children"
                :key="key"
                class="first-item u-f0"
                :to="item.path +'/' + item.children[key].path"
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
  export default {
    name: 'SidebarItem',
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
        currentKey: 0,
        currentStyle: "background-Color: #ffffff;color: #CC0000; boxShowdow: 0 -10px 10px 10px rgba(0, 0, 0, 0.1)",
        showSecondNavStyle: 'display: block; color: #DA000D'
      }
    },
    created () {
      // debugger
      // console.log(this.routes)
    },
    components: {
      iconSvg
    },
    methods: {
      navMouseover(item, key){
        // debugger
        this.currentKey = key
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
  li
    position relative
    height 100%
    line-height 40px  
    cursor pointer
    .navitem
      font-size 14px
      margin 0 20px
      font-weight bold
      color #ffffff
    .firstChildwrap
      display none
      position absolute
      top 40px
      // box-shadow 0 2px 1px 1px blue
      box-shadow 0 5px 10px 1px rgba(0, 0, 0, 0.1)
      ul
        font-size 0
        background-color #ffffff
        .first-item
          display inline-block
          font-size 12px
          text-align center
          min-width 70px
          margin 0px 5px
          &:hover
          a
            color: #DA000D
            .tit
              cursor pointer
              color #000000
</style>

