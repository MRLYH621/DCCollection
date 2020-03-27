<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/SystemMonitor' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电站监测</el-breadcrumb-item>
      <el-breadcrumb-item>历史报表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20"></el-row>
      <el-table :data="staLSList" style="width:100%  " border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="DZZ_Parm_008" label="功率" width="180"></el-table-column>
        <el-table-column prop="parm_002" label="邮箱"></el-table-column>
        <el-table-column prop="parm_006" label="时间"></el-table-column>
        <el-table-column prop="IsUsing" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.IsUsing" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope>
            <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <el-button size="mini" type="warning" icon="el-icon-setting" circle></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfo.pagenum"
        :page-sizes="[5, 10, 20]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  created() {
    this.GetStaLSData()
  },
  data() {
    return {
      queryinfo: {
        starttime: '2020-03-15',
        endtime: '2020-03-26',
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      staLSList: []
    }
  },
  methods: {
    GetStaLSData() {
      this.$http
        .get('StationData/GetLSStationData', { params: this.queryinfo })
        .then(res => {
          this.total = res.data[0]
          this.staLSList = res.data[1]
          console.log(res)
        })
    },
    handleSizeChange(newpagesize) {
      this.queryinfo.pagesize = newpagesize
      this.GetStaLSData()
    },
    handleCurrentChange(newpagenum) {
      this.queryinfo.pagenum = newpagenum
      this.GetStaLSData()
    }
  }
}
</script>
<style lang="" scoped>
</style>
