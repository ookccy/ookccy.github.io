(function() {
    var chartDom = document.getElementById('right1');
    var myChart = echarts.init(chartDom);
    option = {
        title: {
            text: '中国新冠肺炎病例及死亡数据（年龄组）',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['所有年龄', '60岁以上', '30~59', '60~69', '0~29']
        },
        series: [{
            name: '中国疫情年龄分布',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { "value": 100, "name": "所有年龄" },
                { "value": 54.86, "name": "60岁以上" },
                { "value": 39.63, "name": "30~59" },
                { "value": 17.43, "name": "60~69" },
                { "value": 5.51, "name": "0~29" },
            ]

        }]
    };


    myChart.setOption(option);


    myChart.on('click', function(params) {
        var yt = alert("您刚才点击了   中国新冠肺炎病例及死亡数据\n" + "                        " + params.name);
    });
    window.addEventListener("resize", function() {

        myChart.resize();
    });


})();