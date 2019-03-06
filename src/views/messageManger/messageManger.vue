<template>
    <div>
        <div class="temputer">
            <Temputer></Temputer>
        </div>
        <div class="humidity">
            <Humidity></Humidity>
        </div>
        <div class="pressure">
        	<Pressure></Pressure>
        </div>
         <div class="windSpead">
        	<WindSpead></WindSpead>
        </div>
         <div class="amplitude">
        	<Amplitude></Amplitude>
        </div>
    </div>
</template>
<script>
import Temputer from '@/views/common/temputer.vue';
import Humidity from '@/views/common/humidity.vue';
import Pressure from '@/views/common/pressure.vue';
import WindSpead from '@/views/common/windSpead.vue';
import Amplitude from '@/views/common/amplitude.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        Temputer,
        Humidity,
        Pressure,
        WindSpead,
        Amplitude,
    }
}
</script>
<style scoped>
.temputer{
	display: inline-block;
	float: left;
	margin: 1rem;

}
.humidity{
	display: inline-block;
	margin: 1rem;
	/*width: 600px;*/
}
.pressure{
	display: inline-block;
	float: right;
	margin: 1rem;
	/*width: 600px;*/
}
.windSpead{
	display: inline-block;
	float: left;
	margin: 1rem;
	/*width: 600px;*/
}
.amplitude{
	display: inline-block;
	margin: 1rem;
		float: left;
	/*width: 600px;*/
}
</style>