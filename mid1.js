(function() {
    var chartDom = document.getElementById('mid1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['北京', '江苏', '天津', '广东', '广西']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
                // data: ['03-06', '03-15', '03-23', '04-01', '04-10', '04-19', '04-28', '05-10 ', ' 05-20', ' 6-03']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: '北京',
                type: 'line',

                data: []
            },
            {
                name: '江苏',
                type: 'line',

                data: []
            },
            {
                name: '天津',
                type: 'line',

                data: []
            },
            {
                name: '广东',
                type: 'line',

                data: []
            },
            {
                name: '广西',
                type: 'line',

                data: []
            }
        ]
    };

    myChart.showLoading({
        text: '数据加载中......',
        color: 'CadetBlue1',
        textColor: 'red',
        maskColor: 'rgba(255,255,255,0.9)',

    });
    fetchData();

    function fetchData() {
        setTimeout(function() {
            $.get('mid1.json').done(function(data) {
                // 数据加载完成后，再调用 hideLoading 方法隐藏加载动画
                myChart.hideLoading();
                // 填入数据到上面空模板
                myChart.setOption({
                    xAxis: {
                        data: data.categories
                    },
                    series: [{
                            // 注意：！！！根据名字对应到相应的系列
                            name: '北京',
                            data: data.北京
                        },
                        {
                            name: '江苏',
                            data: data.江苏
                        },
                        {
                            name: '天津',
                            data: data.天津
                        },
                        {
                            name: '广东',
                            data: data.广东
                        },
                        {
                            name: '广西',
                            data: data.广西
                        },
                    ]
                })
            })
        }, 3000)
    }

    myChart.setOption(option);

})();