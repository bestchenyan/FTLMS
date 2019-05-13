<template>
    <div>
        <el-row>
            <el-col :span="4">
                <div class="leftNav">
                    <LeftNav @resultChange="mychangHandle" :role="role"></LeftNav>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple">
                    <div class="topNav">
                        <TopNav :username="username"></TopNav>
                    </div>
                    <div class="centerNav">
                        <div class="grid-content bg-purple">
                            <div v-if="msg === '/' "> <CenterNav></CenterNav></div>
                            <div v-else-if="msg === '/fault_monitoring' "> <FaultManage></FaultManage></div>
                            <div v-else-if="msg === '/fault_entering' "> <FaultEntering></FaultEntering></div>
                            <div v-else-if="msg === '/fault_history' "> <FaultHistory></FaultHistory></div>
                            <div v-else-if="msg === '/user_register' "> <Register></Register></div>
                            <div v-else-if="msg === '/lineManagerUser' "> <LineManageUser></LineManageUser></div>
                            <div v-else-if="msg === '/inspectionUser' "> <InspectionUser></InspectionUser></div>
                            <div v-else-if="msg === '/messageManger' "> <MessageManger></MessageManger></div>
                            <div v-else-if="msg === '/dataShow' "> <DataShow></DataShow></div>
                            <div v-else-if="msg === '/figShow' "> <FigShow></FigShow></div>
                            <div v-else-if="msg === '/dataAnalysis' "> <DataAnaly></DataAnaly></div>
                            <div v-else> {{msg}}完善中</div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="bottomNav">
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <EuiFooter></EuiFooter>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import TopNav from './TopNav.vue';
import LeftNav from './LeftNav.vue';
import EuiFooter from './Footer.vue';
import CenterNav from './CenterNav.vue';
import FaultManage from '@/views/faultManage/faultManage.vue';
import FaultEntering from '@/views/faultManage/faultEntering.vue';
import FaultHistory from '@/views/faultManage/faultHistory.vue';
import Register from '@/views/register/register.vue';
import LineManageUser from '@/views/userManage/lineManageUser.vue';
import InspectionUser from '@/views/userManage/inspectionUser.vue';
import MessageManger from '@/views/messageManger/messageManger.vue';
import DataShow from '@/views/datashow/dataShow.vue';
import FigShow from '@/views/datashow/figShow.vue';
import DataAnaly from '@/views/datashow/dataAnaly.vue';
export default {
    data() {
        return {
            msg: '/',
            username:'',
            role:''
        }
    },
    mounted(){
        var userMessage = this.$route.params.user;
        this.username = userMessage.username;
        this.role = userMessage.role;
    },
    methods: {
        mychangHandle(msg) { this.msg = msg; }
    },
    components: {
        EuiFooter,
        LeftNav,
        TopNav,
        CenterNav,
        Register,
        FaultManage,
        FaultEntering,
        FaultHistory,
        LineManageUser,
        InspectionUser,
        MessageManger,
        DataShow,
        FigShow,
        DataAnaly
    },
}
</script>
<style scoped>
.topNav {
    position: relative;
    top: 0;
    width: 100%;
    height: 5rem;
    background-color: #ffffff;
}
.leftNav{
    height: 48rem;
    background-color: #20222a;
/*    position: relative;
    left:0;
    width: 100%;*/
}
.centerNav {
    position: relative;
    width: 100%;
    /*height: 70rem;*/
}

.bottomNav {
    position: relative;
    /*bottom: 0;*/
    width: 100%;
    height: 4rem;
}

.el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
        margin-bottom: 0;
    }
}
.bg-purple {
    background: #e9e9e9;
}

.topNav .grid-content {
    /*border-radius: 4px;*/
    min-height: 5rem;
}

.centerNav .grid-content {
    /*border-radius: 4px;*/
    /*min-height: 70rem;*/
}

.bottomNav .grid-content {
    /*border-radius: 4px;*/
    min-height: 4rem;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>