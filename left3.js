(function() {
    var chartDom = document.getElementById('left3');
    var myChart = echarts.init(chartDom);
    var option;
    const colors = ['#5470C6', '#EE6666'];
    option = {
        title: {

            text: '河南省现有确诊病例情况',

        },
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            left: 'right',
            orient: 'vertical',

        },
        grid: {
            top: 90,
            bottom: 20
        },
        xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function(params) {
                            return (
                                '现有确诊病例（4月份）' +
                                params.value +
                                (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                            );
                        }
                    }
                },
                // prettier-ignore
                data: ['4-01', '4-05', '4-10', '4-15', '4-20', '4-25', '4-30']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function(params) {
                            return (
                                '现有确诊病例（5月份）  ' +
                                params.value +
                                (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                            );
                        }
                    }
                },
                // prettier-ignore
                data: ['5-01', '5-05', '5-10', '5-15', '5-20', '5-25', '5-31']
            }
        ],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '现有确诊病例（4月份）',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [
                    117, 107, 23, 21, 24, 44, 40
                ]
            },
            {
                name: '现有确诊病例（5月份）',
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [
                    39, 77, 175, 188, 164, 131, 74
                ]
            }
        ]
    };
    myChart.setOption(option);


})();