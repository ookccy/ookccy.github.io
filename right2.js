(function() {
    var chartDom = document.getElementById('right2');
    var myChart = echarts.init(chartDom);
    var option;
    const dataBJ = [
        [1, 66],
        [2, 57],
        [3, 54],
        [4, 59],
        [5, 60],
        [6, 58],
        [7, 64],
        [8, 71],
        [9, 69],
        [10, 67],
        [11, 70],
        [12, 67],
        [13, 66],
        [14, 67],
        [15, 61],
        [16, 57],
        [17, 57],
        [18, 51],
        [19, 50],
        [20, 49],
        [21, 47],
        [22, 52],
        [23, 68],
        [24, 78],
        [25, 108],
        [26, 136],
        [27, 184],
        [28, 229],
        [29, 277],
        [30, 319],

    ];
    const dataGD = [
        [1, 434],
        [2, 380],
        [3, 302],
        [4, 247],
        [5, 205],
        [6, 175],
        [7, 171],
        [8, 159],
        [9, 157],
        [10, 163],
        [11, 166],
        [12, 168],
        [13, 205],
        [14, 218],
        [15, 233],
        [16, 257],
        [17, 278],
        [18, 290],
        [19, 295],
        [20, 292],
        [21, 281],
        [22, 275],
        [23, 269],
        [24, 257],
        [25, 235],
        [26, 201],
        [27, 172],
        [28, 163],
        [29, 176],
        [30, 184],

    ];
    const dataGX = [
        [1, 150],
        [2, 152],
        [3, 145],
        [4, 106],
        [5, 83],
        [6, 78],
        [7, 81],
        [8, 70],
        [9, 74],
        [10, 74],
        [11, 72],
        [12, 75],
        [13, 78],
        [14, 75],
        [15, 69],
        [16, 77],
        [17, 78],
        [18, 75],
        [19, 71],
        [20, 72],
        [21, 64],
        [22, 61],
        [23, 60],
        [24, 53],
        [25, 53],
        [26, 49],
        [27, 44],
        [28, 42],
        [29, 22],
        [30, 20]

    ];
    const schema = [
        { name: 'date', index: 0, text: '日' },
        { name: 'AQIindex', index: 1, text: '现确诊病例' }


    ];
    const itemStyle = {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.3)'
    };
    option = {

        color: ['#dd4444', '#fec42c', '#80F1BE'],
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['北京', '广西', '广东'],
            textStyle: {
                fontSize: 16
            }
        },
        title: {
            text: "4月份疫情现有确诊病例分布"
        },
        grid: {
            left: '10%',
            bottom: '10%',
            // top: '0%',

        },
        tooltip: {
            backgroundColor: 'rgba(255,255,255,0.7)',
            formatter: function(param) {
                var value = param.value;
                // prettier-ignore
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                    param.seriesName + ' ' + value[0] + '日' +
                    '</div>' +
                    schema[1].text + '：' + value[1] + '<br>';
            }
        },
        xAxis: {
            type: 'value',
            name: '日期',

        },
        yAxis: {
            type: 'value',
            name: '现有确诊病例',


        },

        series: [{
                name: '北京',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataBJ
            },
            {
                name: '广西',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataGX
            },
            {
                name: '广东',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataGD
            }
        ]
    };

    myChart.setOption(option);

})();