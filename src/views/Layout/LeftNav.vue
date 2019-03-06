<template>
    <div>
        <div slot="title" class="title">输电线路故障位置监测系统</div>
        <div class="tac">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#20222a" text-color="#d2d3d4" active-text-color="#ffd04b">
                <template v-for="(menu_v,menu_k) in menu">
                    <el-submenu v-if="menu_v.children" :index="menu_k">
                        <template slot="title">
                            <i :class="menu_v.icon"></i>
                            <span slot="title">{{ menu_v.name }}</span>
                        </template>
                        <el-menu-item v-if=" role === '0' " v-for="(menuChildren_v,menuChildren_k) in menu_v.children" :key="menuChildren_k" :index="menuChildren_v.path" @click="menuFunction(menuChildren_v.path)">
                            <i class="is-children fa fa-circle-o"></i>
                            <span slot="title">{{ menuChildren_v.name }}</span>
                        </el-menu-item>
                        <el-menu-item v-else v-for="(menuChildren_v,menuChildren_k) in menu_v.children" :key="menuChildren_k" :index="menuChildren_v.path" @click="menuFunction(menuChildren_v.path)" disabled>
                            <i class="is-children fa fa-circle-o"></i>
                            <span slot="title">{{ menuChildren_v.name }}</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="menu_v.path" @click="menuFunction(menu_v.path)">
                        <i :class="menu_v.icon"></i>
                        <span slot="title">{{ menu_v.name }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>
import Menu from '@/menu/index';
export default {
    props: ["role"],
    data() {
        return {
            menu: Menu,
        };
    },
    mounted() {

    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        menuFunction(path) {
            this.$emit('resultChange', path);
            // console.log(path)
        }
    }
}
</script>
<style scoped>
.title {
    line-height: 5rem;
    font-size: 2rem;
    color: #d2d3d4;
    border-bottom: 2px solid #1c1e25;
}

.el-submenu {
    width: 100%;
}

.el-menu {
    width: 100%;
}

.el-menu-item {
    width: 100%;
}

.is-children {
    font-size: 12px;
}
</style>