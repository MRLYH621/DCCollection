<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/SystemMonitor' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源分析</el-breadcrumb-item>
      <el-breadcrumb-item>能效分析</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card-left">
      <div class="contain-left-echarts-top" id="echartsACDC" style="width:300px;height:300px;"></div>
      <div
        class="contain-left-echarts-bottom"
        id="series-parallel"
        style="width:300px;height:300px;"
      ></div>
    </el-card>
    <el-card class="card-right" id="1"></el-card>
  </div>
</template>
<script>
export default {
  created() {},
  mounted() {
    this.GetTableACDC()
    this.GetTableSeriesAndParallel()
    this.GetTableS()
  },
  data() {
    return {}
  },
  methods: {
    // 获取交流直流对比数据
    GetTableACDC() {
      var mycharts = this.$echarts.init(document.getElementById('echartsACDC'))
      var option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      mycharts.setOption(option)
      console.log(1)
    },
    // 获取串联并联对比数据
    GetTableSeriesAndParallel() {
      var mycharts = this.$echarts.init(
        document.getElementById('series-parallel')
      )
      var option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10]
          }
        ]
      }
      mycharts.setOption(option)
      console.log(2)
    },
    // 获取串联并联对比数据
    GetTableS() {
      var mycharts = this.$echarts.init(document.getElementById('1'))
      var base = +new Date(1968, 9, 3)
      var oneDay = 24 * 3600 * 1000
      var date = []

      var data = [Math.random() * 300]

      for (var i = 1; i < 288; i++) {
        var now = new Date((base += oneDay))
        date.push(
          [
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate(),
            now.getHours(),
            now.getMinutes()
          ].join('/')
        )
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
      }

      var option = {
        tooltip: {
          trigger: 'axis',
          position: function(pt) {
            return [pt[0], '20%']
          }
        },
        title: {
          left: 'center',
          text: '大数据量面积图'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: data
          }
        ]
      }
      mycharts.setOption(option)
      console.log(2)
    }
  }
}
</script>
<style lang="less" scoped>
.card-left {
  width: 500px;
  height: 600px;
  position: absolute;
  left: 220px;
  border-radius: 10px;
}
.card-right {
  width: 790px;
  height: 600px;
  position: absolute;
  right: 10px;
  border-radius: 10px;
}
</style>
