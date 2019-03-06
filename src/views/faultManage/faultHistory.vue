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
                <el-table-column prop="date" label="日期" sortable  column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler">
                </el-table-column>
                <el-table-column prop="faultname" label="故障名称">
                </el-table-column>
                <el-table-column prop="faultdata" label="故障数据">
                </el-table-column>
                <el-table-column prop="faultlocation" label="故障坐标">
                </el-table-column>
                <el-table-column prop="starttime" label="起始时间">
                </el-table-column>
                <el-table-column prop="endtime" label="完成时间">
                </el-table-column>
                <el-table-column prop="maintainer" label="维修人员">
                </el-table-column>
                <el-table-column prop="faultlevel" label="故障等级" width="100" :filters="[{ text: '黄色', value: '黄色' }, { text: '红色', value: '红色' }, { text: '黑色', value: '黑色' }]" :filter-method="filterTag" filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-faultlevel :type="scope.row.faultlevel === '家' ? 'primary' : 'success'" disable-transitions>{{scope.row.faultlevel}}</el-faultlevel>
                    </template>
                </el-table-column>
                <el-table-column prop="faultstatue" label="故障状态">
                </el-table-column>
            </el-table>
        </div>
        <div class="bottom">
            <el-pagination background layout="prev, pager, next" :total="100">
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
            tableData: [{
                date: '2018-03-02',
                faultname: '大风故障',
                faultdata: '振幅：8m',
                faultlocation: '(114.202812,30.33874)',
                starttime: '2018-03-02 09:19:00',
                endtime: '2018-03-02 19:14:00',
                maintainer: '李华',
                faultlevel: '红色',
                faultstatue: '已维修',
            }, {
                date: '2018-05-02',
                faultname: '线路污闪',
                faultdata: '湿度：95%',
                faultlocation: '(114.202994,30.33946)',
                starttime: '2018-05-02 16:09:00',
                endtime: '2018-05-02 20:14:00',
                maintainer: '李磊',
                faultlevel: '黄色',
                faultstatue: '已维修',
            }, {
                date: '2018-08-12',
                faultname: '雷击跳闸',
                faultdata: '电流：80KA',
                faultlocation: '(114.200542,30.33136)',
                starttime: '2018-08-12 10:20:00',
                endtime: '2018-08-12 14:40:00',
                maintainer: '李华',
                faultlevel: '黑色',
                faultstatue: '已维修',
            }, {
                date: '2018-10-26',
                faultname: '外力破坏',
                faultdata: '断线相电压：0V',
                faultlocation: '(114.202812,30.33874)',
                starttime: '2018-10-26 11:33:00',
                endtime: '2018-10-26 17:27:00',
                maintainer: '韩梅梅',
                faultlevel: '黑色',
                faultstatue: '已维修',
            }, {
                date: '2018-12-02',
                faultname: '线路覆冰',
                faultdata: '压力：30N',
                faultlocation: '(114.199111,30.3265)',
                starttime: '2018-12-02 10:49:00',
                endtime: '2018-12-03 14:57:00',
                maintainer: '李明',
                faultlevel: '黄色',
                faultstatue: '已维修',
            }]
        }
    },

    methods: {
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