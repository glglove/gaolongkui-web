<!-----
  User: gaol
  Date: 2020/5/31
  by： gaol
  功能：better-scroll 滚动组件
------->
<template>
  <div class="wrapper" :ref="wrapper">
    <ul class="u-fi-ac" id="line-bottom-ul">
        <li 
            class="marginR10"
            :style="currentHoverBottomitemKey==index? currentHoverBottomStyle:''"
            v-for="(item, index) in contentList" 
            :key="index"
            @mouseenter="itemMouseenter (item, index)"
            @mouseleave="itemMouseleave(item, index)"
            @click="joinDetail(item, index)"
        >
            <el-image :src="item.picUrl" fit="fill" style="width: 80px;height: 110px"></el-image>              
            <p class="tipTit center" style="font-size:10px">{{ item.headTit }}</p>                
        </li>
    </ul>
    
    <slot name="scroll-slot"></slot>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
        wrapper: {
            type: String,
            default: 'bscrollWrap'
        },
        contentList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs[this.wrapper], {
            click: true,  // 元素可触发点击事件
            scrollX: true,  // 横向可滑动，默认为false
            scrollY: false,  // 纵向可滑动，默认为true
            bounce: false,  // 当滚动超过边缘的时候无回弹动画
            preventDefaultException: {  // 设置局部某元素原生事件不被禁止（默认preventDefault为true）
                className: /^qrcode$/ //【正则表达式】这里 是 匹配的 class 值为  qrcode 的 元素
            },
            snap: {  // 滑动切换的一些配置
                speed: 800,  // 滑动切换的速度
                easing: {  // 滑动切换的动画效果
                style: 'ease-in'
                },
                threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
                stepX: window.innerWidth,  // 横向切换距离为窗口宽度
                stepY: window.innerHeight  // 纵向切换距离为窗口高度
            }
        })
      })
    },
    methods: {
        itemMouseenter (item, key){
        debugger
        this.$parent.bottomItemmouseenter(item,key)
        // this.currentHoverBottomitemKey = key
        //     clearInterval(this.timer_bottom)
        },
        itemMouseleave(item, key){
            this.$parent.bottomItemmouseleave(item,key)
        },         
        joinDetail(item, key){
            // 进入到详情页面
            debugger
            let url = `${item.str}/${item.tagId}`
            this.$router.push({
                // path: '/news/companyNews',
                path: url,
                query: {
                str: item.str,
                tagId: item.tagId,
                fromFlag: 'isfromHomePage',
                contentList: JSON.stringify(item)
                },
            })
        },        
    }
  }
</script>