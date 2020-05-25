<!--
  User: xxxxxxx
  Date: ******
  功能：关于我们-公司简介页面 
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="companyProfile">
      <container-cmp strFlag="companyProfile"></container-cmp>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'companyProfile',
    components: {

    },
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        ...mapGetters([

        ])
    },
    created(){
    },
    methods: {

    }
}
</script>


