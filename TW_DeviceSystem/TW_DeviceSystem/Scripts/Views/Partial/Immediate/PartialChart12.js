﻿var myChart12 = echarts.init(document.getElementById('form12'));

option = {
    title: {
        text: 'A相2通道放电波形(单位mV)',
        textStyle: {
            color: '#8F3A2F',
            fontSize: 12,
        },
        top: '5%',
        left: 'center',
    },
    color: ['#EFEF3F'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            lineStyle: {
                color: '#333333',
            },
            crossStyle: {
                color: '#333333',
            }
        }
    },
    xAxis: {
        type: 'category',
        data: null,
    },
    yAxis: {
        type: 'value',
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: '#898C95',
            }
        },
        min: -500,
        max: 500
    },
    grid: {
        top: '25%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    series: [{
        symbol: "none",
        name: "波形",
        data: null,
        type: 'line',
        smooth: true
    }]
};

myChart12.setOption(option);

/*重置Chart12*/
function resetEchart12(xAxisData, seriesData, titleText, color, Yvalue) {
    var options = myChart12.getOption();
    if (myChart12) {
        myChart12.dispose();
    }
    myChart12 = echarts.init(document.getElementById('form12'));
    if (typeof options === 'object') {
        options.color = color;
        options.yAxis[0].min = Yvalue - (Yvalue * 2);
        options.yAxis[0].max = Yvalue;
        options.xAxis[0].data = xAxisData;
        options.series[0].data = seriesData;
        options.title[0].text = titleText;
        myChart12.setOption(options, true);
    }
}