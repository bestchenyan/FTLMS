<template>
    <div>
        <div class="inspection">
            <div class="title">巡检人员信息</div>
            <div class="table">
                <el-table :data="tableData" style="width: 100%" height="10rem">
                    <el-table-column fixed prop="date" label="日期" width="100">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="100">
                    </el-table-column>
                    <el-table-column prop="longitude" label="经度" width="100">
                    </el-table-column>
                     <el-table-column prop="laitude" label="纬度" width="100">
                    </el-table-column>
                    <el-table-column prop="statue" label="状态" width="100">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2018-12-31',
                name: '李磊',
                longitude: '114.2014',
                laitude:'30.3364',
                statue: '巡检中'
            }, {
                date: '2018-12-31',
                name: '李明',
                longitude: '114.1996',
                laitude:'30.3292',
                statue: '巡检中'
            }, {
                date: '2018-12-31',
                name: '韩梅梅',
                longitude: '114.2017',
                laitude:'30.3328',
                statue: '巡检中'
            }, {
                date: '2018-12-31',
                name: '李华',
                longitude: '114.19975',
                laitude:'30.325',
                statue: '巡检中'
            }]
        }
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    }
}
</script>
<style scoped>
.title {
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "微软雅黑";
}

.table {
    height: 18rem;
}

.steps {
    height: 8rem;
}

.status {
    height: 10rem;
}
.inspection {
    position: relative;
    height: 20rem;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    background-color: #fff;
}
</style>