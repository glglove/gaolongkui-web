<!--
    User: xxxxxxx
  Date: ******
  by：****
  功能：分页插件
-->
<template>
    <div class="pagination-cmp" >
        <el-pagination
            background
            layout="total, sizes, prev, pager, next"
            :total="total"
            :hide-on-single-page="value"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            @prev-click="handleCurrentChange"
            @next-click="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[10]"
            :page-size="pageSize"
        >
        </el-pagination>        
    </div>    
</template>

<script>      
import { mapGetters } from 'vuex'
export default {
    props: {
        total: {
            type: Number,
            default: 0
        },
        value: {
            type: Boolean,
            default: false
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

    },
    data () {
        return {
            pageNum: 1,
            pageSize: 2
        }
    },
    watch: {

    },  
    methods: {
        // 分页--每页多少条
        handleSizeChange (val) {
            this.pageSize = val
            // this._getComTables()
            this.$emit("refreshSizeGetData",this.pageSize,this.pageNum)
        },
        // 分页--当前页
        handleCurrentChange (val) {
            this.pageNum = val
            // this._getComTables()
            this.$emit("refreshGetData",this.pageSize,this.pageNum)
        }        
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #FD7A3A;   // 进行修改背景和字体
  color: #fff;
}
</style>
