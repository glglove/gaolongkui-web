<!--
  User: xxxxxxx
  Date: ******
  功能：企业新闻
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="hotNews">
        <container-cmp strFlag="hotNews"></container-cmp>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'hotNews',
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


