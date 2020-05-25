<!--
  User: xxxxxxx
  Date: ******
  功能：行业资讯
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="industryInformation">
       <container-cmp strFlag="industryInformation"></container-cmp>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'industryInformation',
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


