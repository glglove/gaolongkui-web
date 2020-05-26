<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：分享插件 (baidu分享)
-->
<template>
    <div class="Comprehensive-share-cmp" >
        <!-- currentLanguage: {{currentLanguage}} -->
        <div 
            class="bdsharebuttonbox" 
            v-if="currentLanguage == 'zh'"
        >
            <!-- 以下链接和setShare()中的bdSelectMiniList属性相对应 -->
            <a href="#" class="bds_more" data-cmd="more" v-if="hasMore"></a>
            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
            <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
            <!-- <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a> -->
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
        //中文  采用 百度一件分享
        setTimeout(() => {
            that.setShare()
        }, 0) 
    },
    data () {
        return {

        }
    },
    watch: {

    },  
    methods: {
        setShare(){
            debugger
            window._bd_share_config = {
                common : {
                        bdText : '自定义分享内容', 
                        bdDesc : '自定义分享摘要', 
                        bdUrl : '自定义分享url地址',  
                        bdPic : '自定义分享图片'
                    },
                share : [{
                    bdSize: 16
                }],
                slide : [{   
                    bdImg : 0,
                    bdPos : "right",
                    bdTop : 200
                }],
                image : [{
                    viewType : 'list',
                    viewPos : 'top',
                    viewColor : 'black',
                    viewSize : '16',
                    viewList : ['qzone','tsina','huaban','tqq','renren']
                }],
                selectShare : [{
                    "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
                }]
            } 
            
            const s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "/static/api/js/share.js?v=89860593.js?cdnversion=" + ~(-new Date() / 36e5);
            document.body.appendChild(s)  
            
            // 百度分享有自动销毁的逻辑，加这么一段代码   重新初始化就没问题了。
            if (window._bd_share_main) {
                window._bd_share_main.init();
            }            
        },
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.bdsharebuttonbox {
//   width: 200px;
//   height: 60px;
//   line-height: 60px;
//   background: #fff;
//   border: 1px solid #666;
//   position: fixed;
//   bottom: 36px;
//   right: 0;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
    text-align: right
}
</style>
