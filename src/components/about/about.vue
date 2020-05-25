<!--
  User: xxxxxxx
  Date: ******
  功能：关于我们页面 
-->
<style lang="stylus" rel="stylesheet/stylus">
     
</style>

<template>
	<div class="about">
       <container-cmp strFlag="about"></container-cmp>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'about',
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


