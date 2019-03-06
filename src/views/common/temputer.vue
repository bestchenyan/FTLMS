<template>
    <div>
        <div id="temputer" style="width: 500px;height:400px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    data() {
        return {

        }
    },
    mounted() {
        var myChart = echarts.init(document.getElementById('temputer'));
        var app = {};
        var option = null;

        function randomData() {
            now = new Date(+now + oneDay);
            switch(now.getMonth() + 1){
                case 2: value = (Math.random()*(-5)+2);break;
                case 3: value = (Math.random()*(2));break;
                case 4: value = (Math.random()*(10)+2);break;
                case 5: value = (Math.random()*(15)+8);break;
                case 6: value = (Math.random()*(20)+10);break;
                case 7: value = (Math.random()*(22)+15);break;
                case 8: value = (Math.random()*(15)+20);break;
                case 9: value = (Math.random()*(22)+15);break;
                case 10: value = (Math.random()*(20)+10);break;
                case 11: value = (Math.random()*(15)+8);break;
                case 12: value = (Math.random()*(10)+2);break;
                case 1: value = (Math.random()*(-5)+2);break;
            }
            // value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            }
        }

        var data = [];
        var now = +new Date(2018, 1, 1);
        var oneDay = 24 * 3600 * 1000;
        var value;
        for (var i = 0; i < 200; i++) {
            data.push(randomData());
        }

        option = {
            title: {
                text: '巡检区域平均温度(单位：°C)'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                // maxInterval: 3600 * 24 * 1000,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        setInterval(function() {

            for (var i = 0; i < 1; i++) {
                data.shift();
                data.push(randomData());
            }

            myChart.setOption({
                series: [{
                    data: data
                }]
            });
        }, 5000);;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
}
</script>
<style scoped>
</style>