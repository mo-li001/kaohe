
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
                data: [],
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
                data: []
            }
        ]
    };
    $.ajax({
        type : "get",
        async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url : "https://edu.telking.com/api/?type=month",    //请求发送到TestServlet处
        data : {},
        dataType : "json",        //返回数据形式为json
        success : function(result1) {
            console.log(result1);
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result1) {
                
                var series = result1.data.series;   
                var xAxis = result1.data.xAxis;   
            }
            myChart.setOption(
                {
                    xAxis: [
                        {
                            data: xAxis
                        }
                    ],
                    series: [{
                        // 根据名字对应到相应的系列
                        name: '',
                        
                        type: 'line',
                        data: series
                    }]
                }
            )
            
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChart.hideLoading();
        }
    });
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
                data: [],
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
    $.ajax({
        type : "get",
        async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url : "https://edu.telking.com/api/?type=week",    //请求发送到TestServlet处
        data : {},
        dataType : "json",        //返回数据形式为json
        success : function(result2) {
            console.log(result2);
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result2) {
                var xAxis = result2.data.xAxis;
                var series = result2.data.series; 
                
               
                 
                
                
            }
            myChart.setOption(
                {
    
                    series: [{
                        // 根据名字对应到相应的系列
                        name: '访问来源',
                        
                        type: 'pie',
                        data: [
                            {value: series[0], name: xAxis[0]},
                            {value: series[1], name: xAxis[1]},
                            {value: series[2], name: xAxis[2]},
                            {value: series[3], name: xAxis[3]},
                            {value: series[4], name: xAxis[4]},
                            {value: series[5], name: xAxis[5]},
                            {value: series[6], name: xAxis[6]}
                            
                        ]
                    }]
                }
            )
            
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChart.hideLoading();
        }
    });  
    //3.把配置给实例对象
    myChart.setOption(option);
})();
// 图3
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
                data: []
            }
        ]
    };
//利用数组，自己将东西直接接收
var series=[];

//利用ajax动态获取数据，地址为java提供的接口
$.ajax({
    type : "get",
    async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url : "https://edu.telking.com/api/?type=week",    //请求发送到TestServlet处
    data : {},
    dataType : "json",        //返回数据形式为json
    success : function(result3) {
        console.log(result3);
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result3) {
            
            var series = result3.data.series;        
        }
        myChart.setOption(
            {

                series: [{
                    // 根据名字对应到相应的系列
                    name: '数值量',
                    
                    type: 'bar',
                    data: series
                }]
            }
        )
        
    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChart.hideLoading();
    }
});
         
    //3.把配置给实例对象
    myChart.setOption(option);
})();