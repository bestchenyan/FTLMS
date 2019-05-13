<template>
    <div>
        <el-row>
            <el-col :span="16">
                <div v-loading="loading" class="mapContent">
                    <div id="maps"></div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="location">
                    <FaultLocation></FaultLocation>
                </div>
                <div class="transmission">
                    <FaultTransmission></FaultTransmission>
                </div>
                <!--<div class="inspection">-->
                    <!--<Inspection></Inspection>-->
                <!--</div>-->
            </el-col>
        </el-row>
    </div>
</template>
<script>
import randomNumber from '@/map/index';
import FaultLocation from '@/views/common/faultLocation.vue';
import FaultTransmission from '@/views/common/faultTransmission.vue';
import Inspection from '@/views/common/inspection.vue';
export default {
    data() {
        return {
            loading: false,
        };
    },
    components: {
        FaultLocation,
        FaultTransmission,
        Inspection
    },
    mounted() {
        // 百度地图API功能
        var map = new BMap.Map("maps"); // 创建Map实例,设置地图允许的最小/大级别
        map.centerAndZoom(new BMap.Point(114.2018, 30.3365), 18);
        map.enableScrollWheelZoom(true);

        //起始经度
        var startLongitude = [114.202525, 114.202727, 114.202929, 114.203131, 114.203333];
        //终点经度
        var endLongitude = [114.197999, 114.198201, 114.198403, 114.198605, 114.198807];
        var startLatitude = 30.34000; //起始纬度
        var endLatitude = 30.32210; //终点纬度
        var XInspection = [114.201400, 114.199600, 114.201700, 114.199750];
        var YInspection = [30.33640, 30.32920, 30.33280, 30.32500];
        var obj = {
            totalNode: 500, //区域内节点总数
            lineNum: 5, //输电线数
        }
        /**
         * 地图上画线
         * @param  {[type]} var i             [description]
         * @return {[type]}     [description]
         */
        for (var i = 0; i < startLongitude.length; i++) {
            var polyline = new BMap.Polyline([
                new BMap.Point(startLongitude[i], startLatitude),
                new BMap.Point(endLongitude[i], endLatitude)
            ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }); //创建折线
            map.addOverlay(polyline); //增加折线
        }
        var pointA = new BMap.Point(114.202525, 30.34000);
        var pointB = new BMap.Point(114.199999, 30.32210);
        // console.log('输电线的距离是：' + (map.getDistance(pointA, pointB)).toFixed(2) + ' 米。'); //获取两点距离,保留小数点后两位
        /**
         * 线上布点
         */
        var sig = obj.totalNode / obj.lineNum; //每根线上的点数
        var ss = (startLatitude - endLatitude) * 100000;
        var sigDis = Math.round(parseInt(ss) / sig); //每隔sigDis放一个点
        var para = randomNumber.newRandomNumbersWithNoRepeat(0, 499, 100);

        function line(y, s) {
            var x;
            var x1 = startLongitude[s];
            var x2 = endLongitude[s];
            var y1 = startLatitude;
            var y2 = endLatitude;
            var k = (x2 - x1) / (y2 - y1);
            return x = (y - y1) * k + x1;
        }

        function line2(y, s) {
            var x;
            var x1 = startInspection[s];
            var x2 = endInspection[s];
            var y1 = startLatitude;
            var y2 = endLatitude;
            var k = (x2 - x1) / (y2 - y1);
            return x = (y - y1) * k + x1;
        }
        // 编写自定义函数,创建标注
        function addMarker(point, title) {
            // if (para.includes(title)) {
            //     var myIcon = new BMap.Icon("/static/images/anchor.png", new BMap.Size(16, 16));
            // } else {
            //     var myIcon = new BMap.Icon("/static/images/unknownNode.png", new BMap.Size(16, 16));
            // }
            // var pointCollection = new BMap.PointCollection(points, options);
            //  map.addOverlay(pointCollection);  // 添加Overlay
            var myIcon = new BMap.Icon("/static/images/anchor.png", new BMap.Size(16, 16));
            var marker = new BMap.Marker(point, { icon: myIcon });
            map.addOverlay(marker);
            marker.setTitle(title);
            marker.addEventListener("click", getAttr);

            function getAttr() {
                var p = marker.getPosition(); //获取marker的位置
                alert("marker的位置是" + p.lng + "," + p.lat);
            }
        }
        function addMarker1(point, title){
              var myIcon = new BMap.Icon("/static/images/routing_inspection.png", new BMap.Size(32, 32));
            var marker = new BMap.Marker(point, { icon: myIcon });
            marker.setTitle(title);
            map.addOverlay(marker);
             marker.addEventListener("click", getAttr);

            function getAttr() {
                var p = marker.getPosition(); //获取marker的位置
                alert("marker的位置是" + p.lng + "," + p.lat);
            }
        }

        var Y = new Array(5);
        for (var i = 0; i < Y.length; i++) {
            Y[i] = new Array(100);
        }
        var X = new Array(5);
        for (var i = 0; i < X.length; i++) {
            X[i] = new Array(100);
        }

        for (var s = 0; s < obj.lineNum; s++) {
            Y[s][0] = startLatitude;
            for (var i = 0; i < sig - 1; i++) {
                Y[s][i + 1] = (Y[s][i] * 100000 - sigDis) / 100000;
            }
            for (var j = 0; j < Y[s].length; j++) {
                X[s][j] = parseInt(line(Y[s][j], s) * 1000000) / 1000000;
            }
            for (var k = 0; k < Y[s].length; k++) {
                var point = new BMap.Point(X[s][k], Y[s][k]);
                if (k < 10) { k = '0' + k };
                var title = "" + s + k;
                if (para.includes(title)) {
                    addMarker(point, title);
                    // var myIcon = new BMap.Icon("/static/images/anchor.png", new BMap.Size(16, 16));
                }
                // addMarker(point, title);
            }
        }
        for (var i = 0; i < 4; i++) {
            var title = +i;
            var point = new BMap.Point(XInspection[i], YInspection[i]);
            addMarker1(point, title);
        }
        console.log(point)

    },
    methods: {

    }
};
</script>
<style scoped>
.mapContent {
    height: 40rem;
    margin: 1rem;
    padding: 1rem;
    background-color: #fff;
}



/*.title {
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
*/

#maps {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
}

.BMap_cpyCtrl {
    display:none;
}
.anchorBL{
    display:none;
}

/*.faultLocation {
    position: relative;
    height: 20rem;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    background-color: #fff;
}

.faultTransmission {
    position: relative;
    height: 20rem;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    background-color: #fff;
}

.inspection {
    position: relative;
    height: 20rem;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    background-color: #fff;
}*/
</style>