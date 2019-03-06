<template>
    <div>
        <el-row class="top">
            <el-col :span="12">
                <FaultLocation></FaultLocation>
            </el-col>
            <el-col :span="12">
                <FaultTransmission></FaultTransmission>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import FaultLocation from '@/views/common/faultLocation.vue';
import FaultTransmission from '@/views/common/faultTransmission.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        FaultLocation,
        FaultTransmission,
    },
    method: {

    }
}
</script>
<style scoped>
.top {
    width: 100%;
    height: 60rem;
}
</style>