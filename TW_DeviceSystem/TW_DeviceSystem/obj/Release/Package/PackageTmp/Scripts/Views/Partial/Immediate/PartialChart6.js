﻿var myChart6 = echarts.init(document.getElementById('form6'));

option = {
    color: ['#EFEF3F'],
    title: {
        text: 'A相1通道放电频次(单位HZ)',
        textStyle: {
            color: '#8F3A2F',
            fontSize: 12,
        },
        top: '5%',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#333333',
            }
        }
    },
    grid: {
        top: '25%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: null,
        silent: false,
        axisLabel: {
            color: '#333333',
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#333333',
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        splitLine: {
            lineStyle: {
                color: '#898C95',
            }
        },
    }],
    series: [{
        name: '频次',
        type: 'bar',
        data: null,
        barWidth: '40%'
    }]
};

myChart6.setOption(option);

/*重置Chart6*/
function resetEchart6(xAxisData, seriesData, titleText, yMax, color) {
    var options = myChart6.getOption();
    if (myChart6) {
        myChart6.dispose();
    }
    myChart6 = echarts.init(document.getElementById('form6'));
    if (typeof options === 'object') {
        options.color = color;
        options.xAxis[0].data = xAxisData;
        options.series[0].data = seriesData;
        options.title[0].text = titleText;
        options.yAxis[0].max = yMax;
        myChart6.setOption(options, true);
    }
}