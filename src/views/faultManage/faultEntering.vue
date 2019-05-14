<template>
    <div class="entering">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="故障名称">
                <el-input v-model="form.fault_name"></el-input>
            </el-form-item>
            <el-form-item label="维修人员">
                <el-select v-model="form.fault_serviceman_id" placeholder="请选择维修人员">
                    <el-option label="李磊" value="lilei"></el-option>
                    <el-option label="李明" value="liming"></el-option>
                    <el-option label="韩梅梅" value="hanmeimei"></el-option>
                    <el-option label="李华" value="lihua"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="故障发生时间">

                    <el-date-picker type="date" placeholder="选择日期" v-model="form.start_time" style="width: 100%;"></el-date-picker>

            </el-form-item>
                <el-form-item label="预计结束时间">

                    <el-date-picker type="date" placeholder="选择日期" v-model="form.end_time" style="width: 100%;"></el-date-picker>

            </el-form-item>
            <el-form-item label="故障等级">
                <el-radio-group v-model="form.is_emergent">
                    <el-radio label="黄色" name="type"></el-radio>
                    <el-radio label="红色" name="type"></el-radio>
                    <el-radio label="黑色" name="type"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="故障状态">
                <el-radio-group v-model="form.fault_state">
                    <el-radio label="待检修"></el-radio>
                    <el-radio label="维修中"></el-radio>
                    <el-radio label="已检修"></el-radio>
                </el-radio-group>
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
                zigbee_dev_id:'1',
                fault_location:'111,222',
                fault_name: '',
                fault_message: "压力：30N",
                fault_serviceman_id: '',
                fault_area_id:'1',
                start_time: '',
                end_time: '',
                is_emergent: '',
                fault_state: '',
                create_time: new Date(),
                update_time:new Date(),
            }
        }
    },
    methods: {
        onSubmit: function () {
            let data = this.form
            return this.$axios.post('/api/fault/setFault', data, {
                withCredentials: true
            }).then(response => {
                return response.data
            }).catch(err => {
                throw new Error(err.message)
            })
        },
    }
}
</script>
<style>
.entering {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:22rem;
    height: 100%;
    width: 100%;
    background-color: #e4e5e6;
}

.el-form-item__label{
	width: 160px;
}
</style>