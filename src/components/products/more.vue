<!--
    User: xxxxxxx
  Date: 2019/4/30
  by： gaol
  功能：
-->
<template>
  <div class='product-more'>
      <!-- permissionRouters: {{permissionRouters}} -->
      <!-- <left-siderbaritem-cmp :routes="currentLeftSidebar[0]"></left-siderbaritem-cmp> -->
      <container-cmp strFlag="more"></container-cmp>
  </div>
</template>

<script>
import LeftSiderbaritemCmp from '@/components/base/layOut/leftSidebarItem'
import containerCmp from '@/components/base/container'
import { mapGetters } from 'vuex'
export default {
    components: {
        LeftSiderbaritemCmp,
        containerCmp
    },
    computed: {
        ...mapGetters([
            'permissionRouters'
        ])
    },
    watch: {
        $route (routeInfo) {
            debugger
            if(routeInfo.path && routeInfo.path != '/' && routeInfo.path != '/index'){
                this.getLeftSideBar(routeInfo)
            }        
        }        
    },
    data(){
        return {
            currentLeftSidebar:{},
            parentRoute:''
        }
    },
    methods: {
        getLeftSideBar(routeInfo){
            debugger
            let routerMatched = routeInfo.matched
            this.parentRoute = routerMatched[0]  
            this.currentLeftSidebar = this.permissionRouters.filters((item, key) => {
                if(item.path == this.parentRoute.path){
                    return item.children
                }
            })
        },
    },
    watch: {

    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
