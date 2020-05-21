<!--
  User: xxxxxxx
  Date: 2017/12/15
  功能：home页中 顶部 和 左边的导航—— 菜单项目items的组件，被 horizontalFlagSidebar.vue组件 和 leftSidebarItem组件所 引用
-->
<template>
  <div class='menu-wrapper'>
    <!-- routes: {{routes[5]}} -->
    <template v-for="(item,key) in routes">
      <!-- horizontalFlag: {{horizontalFlag}} -->
      <!-- {{routes[5].hidden}} && {{routes[5].noDropdown}} && {{routes[5].children.length}} && {{horizontalFlag}}------ -->
      <!--菜单只有主菜单一级的情况-->
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0&&!horizontalFlag"
                   :to="item.path + item.children[0].path">
        <el-menu-item :index="item.path + item.children[0].path" class='submenu-title-noDropdown'>
          <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
          <span>{{item.name}}</span>
        </el-menu-item>
      </router-link>

        <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
            :to="item.children[0].path">
            <el-menu-item :index="item.path + item.children[0].path" 
                        style="display:inline-block" 
                        :class="['submenu-title-noDropdown',!horizontalFlag? 'leftSidebar-submenu-title-noDropdown': '']">
            <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
            <span>{{item.name}}</span>
            </el-menu-item>
        </router-link>


      <!--菜单名下有子菜单的情况-->
       <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">

        <template slot="title">
          <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
          <span class="parentName">{{item.name}}</span>
        </template>

      </el-submenu>

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
    created () {
      // debugger
      // console.log(this.routes)
    },
    components: {
      iconSvg
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .menu-wrapper
    .parentName
      margin-right 20px
    .leftSidebar-submenu-title-noDropdown
      width 190px !important
</style>

