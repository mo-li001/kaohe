(function (){
//步骤一:创建异步对象
var ajax = new XMLHttpRequest();
//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
ajax.open('get','https://edu.telking.com/api/?type=month');
//步骤三:发送请求
ajax.send();
//步骤四:注册事件 onreadystatechange 状态改变就会调用
ajax.onreadystatechange = function () {   
  if (ajax.readyState==4 &&ajax.status==200) {
    //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　　　
    console.log(ajax.responseText);//输入相应的内容  　　
    var str = ajax.responseText;
    // 字符串转化为Object 
    var obj = eval('('+str+')');
    console.log(obj);
    var myChart = echarts.init(document.querySelector(".content .datadir"));
    var colorList = ["#4587f0"];
    var option = {
        title: {
            text: '曲线图数据展示',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#4587f0'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        //下载数据图
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: colorList,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: obj.data.xAxis,
                //修改刻度标签 相关样式
                axisLabel: {
                color: "rgba(0,0,0,.6)",
                fontSize: "12"
                },
                //不显示x坐标轴的样式
                axisLine: {
                    // show: false，
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                //不显示y坐标轴的样式
                axisLine: {
                    // show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                //修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(0,0,0,.6)",
                    fontSizeL: "12"
                },
                //y轴分割线
                splitLine: {
                    lineStyle: {
                        // color: "rgba(255,255,255,.1)",
                        type: 'dotted'
                    }
                }
            }
        ],
        series: [
            {
                // name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {
                    //图形透明度
                    opacity: 0.2,
                    backgroundColor: "#2718b4"
                },
                data: obj.data.series
            }
        ]
    };
    myChart.setOption(option);
  }
}
})();
//图2
(function (){
    //步骤一:创建异步对象
    var ajax = new XMLHttpRequest();
    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
    ajax.open('get','https://edu.telking.com/api/?type=week');
    //步骤三:发送请求
    ajax.send();
    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    ajax.onreadystatechange = function () {   
      if (ajax.readyState==4 &&ajax.status==200) {
        //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　　　
        console.log(ajax.responseText);//输入相应的内容  　　
        var str = ajax.responseText;
        // 字符串转化为Object 
        var obj = eval('('+str+')');
        console.log(obj);
        //1.实例化对象
    var myChart = echarts.init(document.querySelector("#graphs_left"));
    var series = obj.data.series; 
    var xAxis = obj.data.xAxis;
    //2.指定配置和数据
    var option = {
        title: {
            text: '饼状图数据展示',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                            {value: series[0], name: xAxis[0]},
                            {value: series[1], name: xAxis[1]},
                            {value: series[2], name: xAxis[2]},
                            {value: series[3], name: xAxis[3]},
                            {value: series[4], name: xAxis[4]},
                            {value: series[5], name: xAxis[5]},
                            {value: series[6], name: xAxis[6]}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
      }
}
})();
//图三
(function (){
    //步骤一:创建异步对象
    var ajax = new XMLHttpRequest();
    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
    ajax.open('get','https://edu.telking.com/api/?type=week');
    //步骤三:发送请求
    ajax.send();
    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    ajax.onreadystatechange = function () {   
      if (ajax.readyState==4 &&ajax.status==200) {
        //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　　　
        console.log(ajax.responseText);//输入相应的内容  　　
        var str = ajax.responseText;
        // 字符串转化为Object 
        var obj = eval('('+str+')');
        console.log(obj);
            //1.实例化对象
        var myChart = echarts.init(document.querySelector("#graphs_right"));
        //2.指定配置和数据
        var option = {
            title: {
                text: '柱状图数据展示',
                left: 'center'
            },
            color: ['#4586ef'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['']
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
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true,
                    },
                    //修改刻度标签 相关样式
                    axisLabel: {
                        color: "rgba(0,0,0,.6)",
                        fontSize: "12"
                        },
                        //不显示x坐标轴的样式
                        axisLine: {
                            // show: false，
                            lineStyle: {
                                color: "rgba(255,255,255,.1)"
                            }
                        }
                    
                }
            ],
            yAxis: [
                {
                    name: '商品数',
                    axisLine: {
                        show: false,
                        opacity: 0,
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                        }
                    },
                    type: 'value',
                    axisLine: {
                        show: false,
                        opacity: 0,
                        lineStyle: {
                            color: "rgba(0,0,0,.8)",
                        }
                    },
                    //修改刻度标签 相关样式
                    axisLabel: {
                        color: "rgba(0,0,0,.8)",
                        fontSizeL: "12"
                    },
                    //y轴分割线
                    splitLine: {
                        lineStyle: {
                            // color: "rgba(255,255,255,.1)",
                            type: 'dotted',
                        }
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '30%',
                    data: obj.data.series
                }
            ]
        };
        myChart.setOption(option);
      }
    }
    })();