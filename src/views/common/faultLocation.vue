<template>
    <div>
        <div class="faultLocation">
            <div class="title">故障定位过程</div>
            <div class="steps">
                <el-steps :active="4" align-center>
                    <el-step title="step1" description=""></el-step>
                    <el-step title="step2" description=""></el-step>
                    <el-step title="step3" description=""></el-step>
                    <el-step title="step4" description=""></el-step>
                </el-steps>
            </div>
            <div class="status">
                <div v-if="LocationFlag === 'true' ">
                    <el-tabs :tab-position="tabPosition">
                        <el-tab-pane label="故障位置">
                        <div class="map">
                            <div id="submaps"></div>
                        </div>
                        </el-tab-pane>
                        <el-tab-pane label="故障原因">
                            <div class="faultReason">
                                <p>故障坐标：(114.202291, 30.33748)</p>
                                <p>故障原因：雷击跳闸</p>
                                <p>电流：80KA</p>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="故障状态">
                             <div class="faultStatue">
                                <p>故障等级：Ⅰ级</p>
                                <p>故障状态：待维修</p>
                                <p>维修人员：无</p>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div v-else>
                    <el-progress type="circle" :percentage="25"></el-progress>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            LocationFlag: "true",
            tabPosition: "left",
        }
    },
    mounted() {
        // 百度地图API功能
        var map = new BMap.Map("submaps");
        var point = new BMap.Point(114.202291, 30.33748);
        map.centerAndZoom(point, 18);
        var marker = new BMap.Marker(point); // 创建标注

        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        marker.addEventListener("click", getAttr);
        var loadCount = 1;
        map.addEventListener("tilesloaded",function(){
            if(loadCount == 1){
                map.setCenter(point);
            }
            loadCount  = loadCount + 1;
        });
        function getAttr() {
            var p = marker.getPosition(); //获取marker的位置
            alert("marker的位置是" + p.lng + "," + p.lat);
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.faultLocation {
    position: relative;
    height: 17rem;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    background-color: #fff;
}

.title {
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "微软雅黑";
}
.faultReason{
    line-height: 2rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "微软雅黑";
}
.faultStatue{
    line-height: 2rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "微软雅黑";
}
.steps {
    height: 5rem;
}

.status {
    height: 10rem;
}
.map{
     width: 30rem;
    height: 10rem;

}
#submaps {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
}
</style>