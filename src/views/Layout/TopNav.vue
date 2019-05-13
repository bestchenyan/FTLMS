<template>
    <div>
        <el-row class="top">
            <el-col :span="8">
                <div class="title">
                巡检区域：
                    <el-select v-model="value1" placeholder="请选择巡检区域">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="center"></div>
            </el-col>
            <el-col :span="8">
                <el-badge is-dot class="item">
                    <el-button class="share-button" icon="el-icon-bell" size="mini" type="primary" circle></el-button>
                </el-badge>
                <span class="container">
                    <el-dropdown  @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人中心</el-dropdown-item>
                    <el-dropdown-item command="b" >修改密码</el-dropdown-item>
                    <el-dropdown-item command="c" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
                </span>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
     props:["username"],
    data() {
        return {
            options: [{
                value: '选项1',
                label: '武深高速K1标段'
            }, {
                value: '选项2',
                label: '武深高速K2标段',
                disabled: true
            }, {
                value: '选项3',
                label: '武深高速K3标段'
            }],
            value1: '选项1',
        }
    },
    methods: {
        handleCommand(command) {
            this.$message('click on item ' + command);
        }
    }
}
</script>
<style scoped>
.top {
    width: 100%;
    height: 100%;
}

.item {
    margin-right: 40px;
}

.title {
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Microsoft YaHei";
    height: 5rem;
    line-height: 5rem;
    text-align: center;
}

.center {
    width: 100%;
    height: 5rem;
}

.container {
    margin: 0 2rem;
}

.container i {
    font-size: 1.6rem;
}

.el-dropdown-link {
    line-height: 5rem;
    cursor: pointer;
    color: #666666;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Microsoft YaHei";
}

.el-icon-arrow-down {
    font-size: 12px;
}

.el-dropdown-menu {
    width: 8rem;
    text-align: center;
}
</style>