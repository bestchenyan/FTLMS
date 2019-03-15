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

                    <el-button  type="primary">关联分析</el-button>
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
                    prop="GroupNO"
                    label="GroupNO"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="Floor"
                    label="Floor"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="Location"
                    label="Location"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="TempratureAvg"
                    label="TempratureAvg"
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
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum7',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure8',
                    Soc: 'Soc9',
                    Draws: 'Draws4',
                    ChanelNO: 'ChanelNO4',
                    GroupNO:'DGA#2',
                    Floor:'Floor11',
                    Location:'Location9',
                    TempratureAvg:'TempratureAvg2'

                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum9',
                    Weight: 'Weight5',
                    UpSealPressure: 'UpSealPressure2',
                    Soc: 'Soc6',
                    Draws: 'Draws5',
                    ChanelNO: 'ChanelNO4',
                    GroupNO:'DGA#1',
                    Floor:'Floor9',
                    Location:'Location6',
                    TempratureAvg:'TempratureAvg3'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum9',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure2',
                    Soc: 'Soc8',
                    Draws: 'Draws7',
                    ChanelNO: 'ChanelNO4',
                    GroupNO:'DGA#1',
                    Floor:'Floor16',
                    Location:'Location11',
                    TempratureAvg:'TempratureAvg4'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum7',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure2',
                    Soc: 'Soc9',
                    Draws: 'Draws3',
                    ChanelNO: 'ChanelNO1',
                    GroupNO:'DGA#2',
                    Floor:'Floor3',
                    Location:'Location23',
                    TempratureAvg:'TempratureAvg4'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum9',
                    Weight: 'Weight5',
                    UpSealPressure: 'UpSealPressure8',
                    Soc: 'Soc7',
                    Draws: 'Draws3',
                    ChanelNO: 'ChanelNO1',
                    GroupNO:'DGA#1',
                    Floor:'Floor18',
                    Location:'Location23',
                    TempratureAvg:'TempratureAvg2'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum7',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure2',
                    Soc: 'Soc9',
                    Draws: 'Draws3',
                    ChanelNO: 'ChanelNO1',
                    GroupNO:'DGA#2',
                    Floor:'Floor6',
                    Location:'Location9',
                    TempratureAvg:'TempratureAvg4'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum6',
                    Weight: 'Weight4',
                    UpSealPressure: 'UpSealPressure10',
                    Soc: 'Soc5',
                    Draws: 'Draws6',
                    ChanelNO: 'ChanelNO5',
                    GroupNO:'DGA#1',
                    Floor:'Floor3',
                    Location:'Location6',
                    TempratureAvg:'TempratureAvg2'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum7',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure2',
                    Soc: 'Soc9',
                    Draws: 'Draws2',
                    ChanelNO: 'ChanelNO1',
                    GroupNO:'DGA#2',
                    Floor:'Floor5',
                    Location:'Location19',
                    TempratureAvg:'TempratureAvg3'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum7',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure8',
                    Soc: 'Soc9',
                    Draws: 'Draws3',
                    ChanelNO: 'ChanelNO4',
                    GroupNO:'DGA#2',
                    Floor:'Floor6',
                    Location:'Location7',
                    TempratureAvg:'TempratureAvg4'
                }, {
                    BottomTemp: ' BottomTemp180',
                    Vaccum: 'Vaccum9',
                    Weight: 'Weight10',
                    UpSealPressure: 'UpSealPressure8',
                    Soc: 'Soc9',
                    Draws: 'Draws3',
                    ChanelNO: 'ChanelNO4',
                    GroupNO:'DGA#2',
                    Floor:'Floor2',
                    Location:'Location5',
                    TempratureAvg:'TempratureAvg3'
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

