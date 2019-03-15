<template>
    <div class="container">
        <div class="top">
            <el-row>
                <el-col :span="12">
                    <el-input style="width:50%" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="serach" clearable>
                    </el-input>
                    <el-button type="primary" icon="el-icon-search" circle></el-button>
                </el-col>
                <el-col :span="6">

                <el-button  type="primary">数据预处理</el-button>
            </el-col>
                <el-col :span="6">

                    <el-button  type="primary">导出数据</el-button>
                </el-col>
            </el-row>
        </div>
        <el-table
                :data="tableData"
                border
                stripe
                height="30rem"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="BottomTemp"
                    label="BottomTemp"
                    width="180">
            </el-table-column>
            <el-table-column

                    prop="MotorPressure"
                    label="MotorPressure"
                    width="180">
            </el-table-column>
            <el-table-column
                    sortable
                    prop="Vaccum"
                    label="Vaccum"
                    width="180">
            </el-table-column>
            <el-table-column
                    sortable
                    prop="Weight"
                    label="Weight"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="UpSealPressure"
                    label="UpSealPressure"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="Soc"
                    label="Soc"
                    width="180">
            </el-table-column>
            <el-table-column
                    sortable
                    prop="Draws"
                    label="Draws"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="ChanelNO"
                    label="ChanelNO"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="Shift"
                    label="Shift"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="ProductNO"
                    label="ProductNO"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="BandTime"
                    label="BandTime"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="GroupNO"
                    label="GroupNO"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="DeviceGroupDID"
                    label="DeviceGroupDID"
                    width="180">
            </el-table-column>
        </el-table>
        <div class="bottom">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="100"
                    layout=" prev, pager, next, jumper,total, sizes"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

                tableData: [{
                    BottomTemp: '180',
                    MotorPressure: '0.00',
                    Vaccum: '-92.45',
                    Weight: '56.132',
                    UpSealPressure: '0.22',
                    Soc: '6.632',
                    Draws: '0.168',
                    ChanelNO: '3',
                    Shift:'E',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'

                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.00',
                    Vaccum: '-94.75',
                    Weight: '56.297',
                    UpSealPressure: '0.24',
                    Soc: '6.717',
                    Draws: '0.053',
                    ChanelNO: '5',
                    Shift:'E',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.10',
                    Vaccum: '-92.80',
                    Weight: '56.212',
                    UpSealPressure: '0.23',
                    Soc: '6.602',
                    Draws: '0.198',
                    ChanelNO: '4',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.00',
                    Vaccum: '-93.35',
                    Weight: '56.245',
                    UpSealPressure: '0.32',
                    Soc: '6.695',
                    Draws: '0.145',
                    ChanelNO: '2',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.05',
                    Vaccum: '-93.90',
                    Weight: '56.243',
                    UpSealPressure: '0.23',
                    Soc: '6.653',
                    Draws: '0.177',
                    ChanelNO: '4',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.00',
                    Vaccum: '-95.30',
                    Weight: '56.134',
                    UpSealPressure: '0.32',
                    Soc: '6.714',
                    Draws: '0.096',
                    ChanelNO: '2',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.10',
                    Vaccum: '-94.30',
                    Weight: '55.995',
                    UpSealPressure: '0.23',
                    Soc: '6.615',
                    Draws: '0.235',
                    ChanelNO: '5',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.05',
                    Vaccum: '-94.50',
                    Weight: '56.139',
                    UpSealPressure: '0.23',
                    Soc: '6.579',
                    Draws: '0.241',
                    ChanelNO: '4',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.45',
                    Vaccum: '-93.25',
                    Weight: '56.257',
                    UpSealPressure: '0.24',
                    Soc: '6.727',
                    Draws: '0.123',
                    ChanelNO: '1',
                    Shift:'M',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }, {
                    BottomTemp: '180',
                    MotorPressure: '0.00',
                    Vaccum: '-92.45',
                    Weight: '56.132',
                    UpSealPressure: '0.22',
                    Soc: '6.632',
                    Draws: '0.168',
                    ChanelNO: '3',
                    Shift:'E',
                    ProductNO:'U21',
                    BandTime:'4',
                    GroupNO:'DGA#1',
                    DeviceGroupDID:'MIB#1'
                }]
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>
<style scoped>
    .el-pagination{
        float: left;
    }
    .top{

        background: #ffffff;
    }
    .container{
        margin: 1rem;
    }

</style>

