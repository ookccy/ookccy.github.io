(function() {
    var chartDom = document.getElementById('first_1')
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '累计确诊分布',

            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {

            top: 'bottom'
        },
        series: [{
            name: '累计确诊分布情况',
            type: 'pie',
            radius: '50%',
            data: [
                { "value": 3410, "name": "北京 " },
                { "value": 713, "name": "重庆" },
                { "value": 1639, "name": "广西" },
                { "value": 7133, "name": "广东" },
                { "value": 2005, "name": "河北 " },
                { "value": 412, "name": "山西" },
                { "value": 2735, "name": "山东" },
                { "value": 2235, "name": "江苏 " },
                { "value": 3138, "name": "浙江" },

                { "value": 1065, "name": "安徽" }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };





    myChart.setOption(option);

    myChart.on('click', function(params) {
        var yt = alert("您刚才点击了       " + params.name + "的累计确诊分布情况");
    });
    window.addEventListener("resize", function() {

        myChart.resize();
    });

})();