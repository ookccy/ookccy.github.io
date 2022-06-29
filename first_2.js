(function() {

    var first_2 = echarts.init(document.getElementById("first_2"));

    // 指定图表的配置项和数据
    option = {
        title: {

            text: '四川   北京的疫情情况',
            left: 'center'
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['四川', '北京']

        },
        tooltip: {
            show: true,
            trigger: "item",
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '新增确诊', max: 2000 },
                { name: '新增本土', max: 2000 },
                { name: '新增无症状', max: 2000 },
                { name: '累计确诊', max: 4000 },
                { name: '累计治愈', max: 4000 },
                { name: '累计死亡', max: 20 },
                { name: '现有确诊', max: 500 }
            ],
            radius: '60%'
        },
        series: [{
            name: 'Budget vs spending',
            type: 'radar',

            data: [{
                    value: [834, 352, 1837, 2343, 2227, 3, 113],
                    name: '四川'
                },
                {
                    value: [1884, 1671, 487, 3410, 3093, 9, 308],
                    name: '北京'
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表
    first_2.setOption(option);




})();