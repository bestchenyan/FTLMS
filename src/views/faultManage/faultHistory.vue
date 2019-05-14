<template>
    <div class="faultHistory">
        <div class="top">
            <el-row>
                <el-col :span="4">
                    <el-button type="primary">导出数据</el-button>
                </el-col>
                <el-col :span="8">
                    <el-input style="width:50%" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="serach" clearable>
                    </el-input>
                    <el-button type="primary" icon="el-icon-search" circle></el-button>
                </el-col>
                <el-col :span="12">
                    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
                    <el-button @click="clearFilter">清除所有过滤器</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="middle">
            <el-table ref="filterTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="fault_name" label="故障名称">
                </el-table-column>
                <el-table-column prop="fault_message" label="故障数据">
                </el-table-column>
                <el-table-column prop="fault_location" label="故障坐标">
                </el-table-column>
                <el-table-column prop="start_time" label="起始时间">
                </el-table-column>
                <el-table-column prop="end_time" label="完成时间">
                </el-table-column>
                <el-table-column prop="fault_serviceman_id" label="维修人员">
                </el-table-column>
                <el-table-column prop="is_emergent" label="故障等级" width="100" :filters="[{ text: '黄色', value: '黄色' }, { text: '红色', value: '红色' }, { text: '黑色', value: '黑色' }]" :filter-method="filterTag" filter-placement="bottom-end">
                    <!--<template slot-scope="scope">-->
                        <!--<el-faultlevel :type="scope.row.faultlevel === '家' ? 'primary' : 'success'" disable-transitions>{{scope.row.faultlevel}}</el-faultlevel>-->
                    <!--</template>-->
                </el-table-column>
                <el-table-column prop="fault_state" label="故障状态">
                </el-table-column>
            </el-table>
        </div>
        <div class="bottom">
            <el-pagination background layout="prev, pager, next" :total="totalFaults">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            serach: '',
            options: [{
                value: '选项1',
                label: '日期'
            }, {
                value: '选项2',
                label: '故障类型'
            }],
            value: '',
            tableData:'',
            totalFaults:'',
        }
    },
    created(){
        this.getFault()
    },
    methods: {
        getFault(){
            this.$axios.get('/api/fault/getFault',{
                withCredentials: true
            }).then(res => {
                console.log(res.data.data)
                this.totalFaults = res.data.data.length
                this.tableData = res.data.data
            }).catch(err => {
                throw new Error(err.message)
            })
        },
        resetDateFilter() {
            this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
            this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>
<style>
.faultHistory {
    height: 100%;
    margin: 1rem;
    padding: 1rem;
    background-color: white;
}
</style>