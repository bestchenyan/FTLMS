<template>
    <div>
        <div class="lineManageUser">
            <div class="user" v-if="tableData.length != 0">
                <div class="usercontent" v-for="(item,index) in tableData">
                    <p style="display: inline-block" v-if="item.device_type == 1">设备类型：未知节点</p>
                    <p style="display: inline-block" v-else>设备类型：锚节点</p>
                    <el-dropdown style="float: right">
                    <span class="el-dropdown-link">
                        <i class="el-icon-setting el-icon--right"></i>
                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <el-popover placement="top" width="160" v-model="visible2">
                                    <p>确定删除吗？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="visible2 = false"
                                                   @click.stop="handleDelete(item)">确定
                                        </el-button>
                                    </div>
                                    <el-button slot="reference" @click.stop="open(item)">故障信息录入</el-button>
                                </el-popover>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <p>故障坐标：{{item.device_location}}</p>
                    <p>故障数据：{{item.last_data}}</p>
                </div>
            </div>
            <div v-else><p class="usercontent">线路运行稳定，暂无故障信息！</p></div>
        </div>
        <el-dialog
                :visible.sync="centerDialogVisible"
                :fullscreen=true
                center>
            <FaultEnter :id="id" :device_location="device_location" :last_data="last_data"></FaultEnter>
        </el-dialog>

    </div>
</template>
<script>
    import FaultEnter from '@/views/common/faultEnter.vue'
    export default {
        data() {
            return {
                id:'',
                device_location:'',
                last_data:'',
                visible2: false,
                centerDialogVisible: false,
                tableData: '',
            }
        },
        components: {
            FaultEnter,
        },
        created() {
            this.getZigbee();
        },
        methods: {
            getZigbee() {
                this.$axios.get('/api/zigbee/getZigbee', {
                    withCredentials: true
                }).then(res => {
                    console.log(res.data)
                    this.tableData = res.data
                }).catch(err => {
                    throw new Error(err.message)
                })
            },

            open(index) {
                this.centerDialogVisible = true
                this.id=index._id
                this.device_location=index.device_location
                this.last_data = index.last_data

            }
        }
    }
</script>
<style>
    .lineManageUser {
        height: 100%;
        margin: 1rem;
        padding: 1rem;
        background-color: white;
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

    .el-form-item__label {
        width: 160px;
    }
</style>