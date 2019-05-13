<template>
    <div>
        <div v-loading="loading2" element-loading-text="定位结束显示传输过程" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" class="faultTransmission">
            <div class="title">故障传输过程</div>
            <div class="steps">
                <el-steps :active="4" align-center>
                    <el-step title="step1" description=""></el-step>
                    <el-step title="step2" description=""></el-step>
                    <el-step title="step3" description=""></el-step>
                    <el-step title="step4" description=""></el-step>
                </el-steps>
            </div>
            <div class="status">
                <div v-if="TransmissionFlag === 'true' ">
                    <el-tabs :tab-position="tabPosition">
                        <el-tab-pane label="路由表">
                            <div class="multicast">
                                <el-table :data="tableData" style="width: 100% "height="12rem" >
                                    <el-table-column  prop="source" label="源节点" width="80">
                                    </el-table-column>
                                    <el-table-column prop="router1" label="路由节点1" width="100">
                                    </el-table-column>
                                    <el-table-column prop="router2" label="路由节点2" width="100">
                                    </el-table-column>
                                    <el-table-column prop="router3" label="路由节点3" width="100">
                                    </el-table-column>
                                    <el-table-column prop="router4" label="路由节点4" width="100">
                                    </el-table-column>
                                    <el-table-column prop="router5" label="路由节点5" width="100">
                                    </el-table-column>
                                    <el-table-column prop="router6" label="路由节点6" width="100">
                                    </el-table-column>
                                    <el-table-column prop="destination" label="叶子节点">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                        <!--<el-tab-pane label="接受状态">显示巡检人员接受状态</el-tab-pane>-->
                        <!--<el-tab-pane label="响应状态">显示哪个巡检人员响应状态</el-tab-pane>-->
                    </el-tabs>
                </div>
                <div v-else>
                    <el-progress type="circle" :percentage="50"></el-progress>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading2: false,
            TransmissionFlag: "true",
            tabPosition: "left",
            tableData: [{
                source: '节点214',
                router1: '节点239',
                router2: '节点321',
                router3: '节点365',
                router4: '节点389',
                router5: '节点267',
                router6: '节点421',
                destination: '节点1'
            },{
                source: '',
                router1: '',
                router2: '',
                router3: '节点312',
                router4: '节点364',
                router5: '节点154',
                router6: '节点267',
                destination: '节点2'
            },{
                source: '',
                router1: '',
                router2: '',
                router3: '',
                router4: '节点426',
                router5: '节点127',
                router6: '节点226',
                destination: '节点3'
            },{
                source: '',
                router1: '',
                router2: '',
                router3: '',
                router4: '',
                router5: '节点337',
                router6: '节点114',
                destination: '节点4'
            }]
        }
    },
    mounted() {

    },
    methods: {}

}
</script>
<style scoped>
.steps {
    height: 5rem;
}


.multicast {
    width: 100%;
    height: 20rem;
}

.title {
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "微软雅黑";
}

.status {
    height: 10rem;
}

.faultTransmission {
    position: relative;
    height: 19rem;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    background-color: #fff;
}
</style>