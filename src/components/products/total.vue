<!--
    User: xxxxxxx
  Date: 2019/4/30
  by： gaol
  功能：产品展示中的 所有产品
-->
<template>
  <div class='product-total'>
      <!-- permissionRouters: {{permissionRouters}} -->
      <!-- <left-siderbaritem-cmp :routes="currentLeftSidebar[0]"></left-siderbaritem-cmp> -->
      <container-cmp strFlag="total"></container-cmp>
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
    
    },
    data(){
        return {
 
        }
    },
    methods: {

    },
    watch: {

    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
