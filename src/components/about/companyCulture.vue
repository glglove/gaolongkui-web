<!--
  User: xxxxxxx
  Date: ******
  功能：关于我们-企业文化页面 
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="companyCulture">
       <container-cmp strFlag="companyCulture"></container-cmp>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'companyCulture',
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


