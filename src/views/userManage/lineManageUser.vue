<template>
    <div class="lineManageUser">
        <div class="search">
            <el-input style="width:20%; " placeholder="请输入内容" prefix-icon="el-icon-search" v-model="serach" clearable>
            </el-input>
            <el-button type="primary" icon="el-icon-search" circle></el-button>
        </div>
        <div class="user">
            <div class="usercontent">
                <p style="display: inline-block">姓名：陈岩</p>
                <el-dropdown style="float: right">
                    <span class="el-dropdown-link">
                        <i class="el-icon-setting el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>切换区域
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-popover placement="top" width="160" v-model="visible2">
                                <p>确定删除吗？</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                                    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
                                </div>
                                <el-button slot="reference">删除</el-button>
                            </el-popover>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <p>角色：线路管理员</p>
                <p>手机号：13100609890</p>
                <p>邮箱：chenyanwust@vip.qq.com</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            serach: '',
            visible2: false,

        }
    },
    methods: {

    }
}
</script>
<style scoped>
.lineManageUser {
    height: 100%;
    margin: 1rem;
    padding: 1rem;
    background-color: white;
}

.search {
    width: 100%;
    height: 100%;
    text-align: left;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.usercontent {
    width: 25rem;
    line-height: 2rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "微软雅黑";
    border-radius: 2px;
    border: 1px solid #333;
    margin: 1rem;
    padding: 1rem;
    -webkit-box-shadow: 3px 3px #409EFF;
    -moz-box-shadow: 3px 3px #409EFF;
    box-shadow: 3px 3px #409EFF;
}
</style>