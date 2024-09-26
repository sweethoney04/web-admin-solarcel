import React from 'react'
import ReactECharts from 'echarts-for-react'; 
import * as echarts from 'echarts';

export default function Wavech() {
  const option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'The growth'
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // legend: {
    //   data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    // },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(82, 152, 226, 1)'
            },
            {
              offset: 1,
              color: 'rgba(86, 148, 222, 0.3)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [10, 36, 45, 62, 44, 82, 60, 45, 20, 27, 32, 100, 70]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        // data: [120, 282, 111, 234, 220, 340, 310, 170, 260, 165, 310, 180]
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        // data: [320, 132, 201, 334, 190, 130, 220, 245, 189, 200, 235, 315]
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)'
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        // data: [220, 402, 231, 134, 190, 230, 120, 156, 278, 200, 180, 200]
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)'
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        // data: [220, 302, 181, 234, 210, 290, 150, 200, 190, 234, 212, 197]
      }
    ]
  };
  return (
    <div>
        <ReactECharts option={option} />
    </div>
  )
}
