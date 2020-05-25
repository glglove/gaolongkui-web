<!--
  User: xxxxxxx
  Date: ******
  功能：关于我们-董事长致辞页面 
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="speech">
       <container-cmp strFlag="speech"></container-cmp> 
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'speech',
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


