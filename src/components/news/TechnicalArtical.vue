<!--
  User: xxxxxxx
  Date: ******
  功能：技术文章
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="technicalArtical">
        <container-cmp strFlag="technicalArtical"></container-cmp>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'technicalArtical',
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


