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
    </el-card >
    <el-card  style="margin-top:5px"></el-card>
  </div>
</template>
<script>
export default {}
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
