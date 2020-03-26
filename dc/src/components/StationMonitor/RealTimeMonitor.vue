<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/SystemMonitor' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电站监测</el-breadcrumb-item>
      <el-breadcrumb-item>实时监测</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="height:135px">
      <el-row :gutter="4">
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <span class="grid-content-text">瞬时功率</span>
            <br />
            <img class="body-img" src="../../assets/logo.jpg" alt />
            <br />
            <span class="grid-conten-text">2MW</span>
          </div>
        </el-col>
      </el-row>
      <el-row></el-row>
    </el-card>
    <el-card style="margin-top:5px">
      <div
        class="realtimepower"
        id="power"
        style="width:1250px;height:450px;left:0px;margin-left:0px"
      ></div>
    </el-card>
  </div>
</template>
<script>
export default {
  created() {},
  mounted() {
    this.GetPowerData()
  },
  data() {
    return {}
  },
  methods: {
    GetPowerData() {
      this.$http.get('StationData/GetTodayStationData').then(data => {
        console.log(data)
        var mycharts = this.$echarts.init(document.getElementById('power'))
        var date = []
        var xdata = []
        for (var i = 0; i < data.data.length; i++) {
          date.push(data.data[i].parm_006)
          xdata.push(data.data[i].DZZ_Parm_008)
        }
        console.log(date)
        console.log(xdata)

        var option = {
          tooltip: {
            trigger: 'axis',
            position: function(pt) {
              return [pt[0], '20%']
            }
          },
          title: {
            left: 'center',
            text: '当日实时功率'
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
              end: 100
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
                    color: 'rgb(255, 158, 288)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 70, 233)'
                  }
                ])
              },
              data: xdata
            }
          ]
        }
        mycharts.setOption(option)
      }).catch(this.$message.error)
    }
  }
}
</script>
<style lang="less" scoped>
.body-img {
  height: 50px;
  margin-top: 10px;
}
.el-row {
  font-size: 16px;
  margin-bottom: 0px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-bottom: 0px;
}
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 20px;
  .grid-content-text {
    margin-bottom: 20px;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
  margin-bottom: 20px;
}
</style>
