<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：分享插件 (addthis 分享)
-->
<template>
    <div class="Comprehensive-share-cmp" >
        <!-- currentLanguage: {{currentLanguage}} -->
        <div 
            class="addthis_toolbox u-f-ac u-f-wrap animated fadeInRight addthis_default_style addthis_32x32_style" 
        >
            <a class="addthis_button_linkedin"></a>
            <a class="addthis_button_twitter"></a>
            <a class="addthis_button_facebook"></a>
            <a class="addthis_button_google_plusone_share"></a>
            <a class="addthis_button_sinaweibo"></a>
            <a class="addthis_button_compact"></a>
        </div>          
    </div>    
</template>

<script>      
import { mapGetters } from 'vuex'
export default {
    props: {
        hasMore: {
            type: Boolean,
            default: true
        }
    },
    components: {

    },
    created () {
    },
    computed:{
        ...mapGetters([
            'currentLanguage'
        ])
    },
    mounted(){  
        const that = this;
        // 英文 Addthis 
        setTimeout(() => {
            that.setAddThisShare()
        }, 10)                
    },
    data () {
        return {

        }
    },
    watch: {

    },  
    methods: {
        setAddThisShare(){
            debugger
            const s1 = document.createElement("script")
            s1.type = "text/javascript"
            s1.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55754f584f46a708"
            s1.async = "async"
            document.body.appendChild(s1)  

            // 百度分享有自动销毁的逻辑，加这么一段代码   重新初始化就没问题了。
            if (window.addthis) {
                window.addthis.init();
            }              
        },
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.addthis_toolbox {
    width 40px
    position fixed
    top 15%
    right 0 !important 
    transform translateY(-50%) !important
    z-index 2000
    a {
        margin-bottom 0 !important
    }
}
@media screen and (max-width: 600px) {
    .addthis_toolbox {
        width 40px
        position fixed
        top 25%
        right 0 !important 
        transform translateY(-50%) !important
        z-index 2000
        a {
            margin-bottom 0 !important
        }        
    }
}   

</style>
