<template>
    <div class="entering">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="故障名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="维修人员">
                <el-select v-model="form.region" placeholder="请选择维修人员">
                    <el-option label="李磊" value="lilei"></el-option>
                    <el-option label="李明" value="liming"></el-option>
                    <el-option label="韩梅梅" value="hanmeimei"></el-option>
                    <el-option label="李华" value="lihua"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="故障发生时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
                <el-form-item label="预计结束时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时维修">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="故障等级">
                <el-radio-group v-model="form.type">
                    <el-radio label="黄色" name="type"></el-radio>
                    <el-radio label="红色" name="type"></el-radio>
                    <el-radio label="黑色" name="type"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="故障状态">
                <el-radio-group v-model="form.resource">
                    <el-radio label="待检修"></el-radio>
                    <el-radio label="维修中"></el-radio>
                    <el-radio label="已检修"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="详细描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '待检修',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style>
.entering {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #e4e5e6;
}
.el-form-item__label{
	width: 160px;
}
</style>