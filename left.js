(function() {
    var chartDom = document.getElementById('left1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        title: {
            text: '广西省2022疫情情况'
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['新增确诊', '新增无症状', '累计确诊', '累计治愈', '现有确诊'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 30,
                textStyle: {
                    color: '#333'
                }
            },
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '4月份疫情',
            type: 'bar',
            barWidth: '60%',
            data: [388, 1848, 1584, 1562, 20]
        }]
    };
    myChart.setOption(option);

    var chartDom1 = document.getElementById('left2');
    var myChart1 = echarts.init(chartDom1);
    var option1;
    option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['新增确诊', '新增无症状', '累计确诊', '累计治愈', '现有确诊'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 30,
                textStyle: {
                    color: '#333'
                }
            },
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '5月份疫情',
            type: 'bar',
            barWidth: '60%',
            data: [50, 487, 1634, 1617, 15]
        }]
    };
    myChart1.setOption(option1);
    myChart1.group = 'group1';
    myChart.group = 'group1';
    echarts.connect('group1');

    myChart1.on('click', function(params) {
        var yt = alert("你刚才点击了    广西省2022年5月的疫情情况 \n" + "                         " + params.name + params.value + "例");
    });

    myChart.on('click', function(params) {
        var yt = alert("你刚才点击了    广西省2022年4月的疫情情况 \n" + "                         " + params.name + params.value + "例");
    });
    window.addEventListener("resize", function() {
        myChart1.resize();
        myChart.resize();
    });
})();