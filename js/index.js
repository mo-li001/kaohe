(function () {
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
                data: ['01/26', '01/28', '01/30', '02/01', '02/03', '02/05', '02/07',, '02/09', '02/11', '02/13', '02/15', '02/17', '02/19', '02/21', '02/23'],
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
            // {
            //     name: '邮件营销',
            //     type: 'line',
            //     stack: '总量',
            //     areaStyle: {},
            //     data: [120, 132, 101, 134, 90, 230, 210]
            // },
            // {
            //     name: '联盟广告',
            //     type: 'line',
            //     stack: '总量',
            //     areaStyle: {},
            //     data: [220, 182, 191, 234, 290, 330, 310]
            // },
            // {
            //     name: '视频广告',
            //     type: 'line',
            //     stack: '总量',
            //     areaStyle: {},
            //     data: [150, 232, 201, 154, 190, 330, 410]
            // },
            // {
            //     name: '直接访问',
            //     type: 'line',
            //     stack: '总量',
            //     areaStyle: {},
            //     data: [320, 332, 301, 334, 390, 330, 320]
            // },
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
                data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,1330]
            }
        ]
    };
    myChart.setOption(option);
})();
//图2
(function (){
    //1.实例化对象
    var myChart = echarts.init(document.querySelector("#graphs_left"));
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
                    {value: 276, name: 'Mon'},
                    {value: 6680, name: 'Tue'},
                    {value: 2354, name: 'Wed'},
                    {value: 8346, name: 'Thu'},
                    {value: 5056, name: 'Fri'},
                    {value: 9928, name: 'Sat'},
                    {value: 2623, name: 'Sun'}
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
    
    //3.把配置给实例对象
    myChart.setOption(option);
})();
//图3
(function (){
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
                data: [276, 6680, 2354, 8346, 5056, 9928, 2623]
            }
        ]
    };
    // var xhr = new XMLHttpRequest();
    // xhr.open('get','https://edu.telking.com/api/?type=month');
    //     xhr.onload = function(){
    //         console.log(xhr.responseText);
    //         // document.querySelector('data').innerdata = xhr.responseText;
    //     }
    //     xhr.send(null);

    // var xhr = new XMLHttpRequest();
    // xhr.open('get','https://edu.telking.com/api/?type=week');
    //     xhr.onload = function(result){
    //         if (result.status) {
    //             var list = result.list;
    //             for(var i=0;i<list.length;i++){
    //                 data['200'].push(list[i].data);
    //             }
    //             for(var i=0;i<list.length;i++){
    //                 data['200'].push(list[i].xAxis);
    //             }
    //             for(var i=0;i<list.length;i++){
    //                 data['200'].push(list[i].precipitation);
    //             }
    //             myChart.hideLoading();
    //             myChart.setOption({
    //                 tooltip : {
    //                     trigger: 'xAxis'
    //                 },
    //                 legend: {
    //                     data:['category']
    //                 },
    //                 toolbox: {
    //                     show : true,
    //                     feature : {
    //                         mark : {show: true},
    //                         dataView : {show: true, readOnly: false},
    //                         magicType : {show: true, type: ['line', 'bar']},
    //                         restore : {show: true},
    //                         saveAsImage : {show: true}
    //                     }
    //                 },
    //                 calculable : true,
    //                 xAxis: {
    //                 data: data['200'].series
    //                 },
    //                 yAxis:{},//注意一定不能丢了这个，不然图表Y轴不显示
    //                 series: [{
    //                 // 根据名字对应到相应的系列，并且要注明type
    //                 name: '直接访问',
    //                 type:'bar',
    //                 data: data['200'].series
    //             },{
    //                 // 根据名字对应到相应的系列，并且要注明type
    //                 name: '直接访问',
    //                 type:'bar',
    //                 data: precipitations
    //             }]
                
    //             })
    //         }
            
    //     }
        // xhr.send();

    //3.把配置给实例对象
    myChart.setOption(option);
})();