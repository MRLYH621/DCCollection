<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/SystemMonitor' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电站监测</el-breadcrumb-item>
      <el-breadcrumb-item>故障列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="0" style="margin-left:0px">
        <el-col :span="4">
          <el-card class="box-card-left">
            <el-form
              class="form-left"
              ref="form"
              v-for="item in FaultNumList"
              :key="item.id"
              label-width="80px"
            >
              <el-form-item style="margin:0px">
                <el-badge :value="item.num" class="item">
                  <el-button type="text" size="medium" class="item-left">{{item.EqName}}</el-button>
                </el-badge>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <el-card class="box-card-right">
              <el-table :data="UserList" style="width:100% " border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="UserName" label="故障发生时间" width="180"></el-table-column>
                <el-table-column prop="Email" label="故障恢复时间"></el-table-column>
                <el-table-column prop="RoleName" label="故障级别"></el-table-column>
                <el-table-column prop="IsUsing" label="故障名称">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.IsUsing"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                    ></el-switch>
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
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  created() {
    this.GetAllFaultInfo()
  },
  data() {
    return {
      FaultNumList: [],
      FaultEquipList: [
        { id: 1, equipName: '设备名称' },
        { id: 2, equipName: '设备名称' },
        { id: 3, equipName: '设备名称' },
        { id: 4, equipName: '设备名称' },
        { id: 5, equipName: '设备名称' },
        { id: 6, equipName: '设备名称' },
        { id: 7, equipName: '设备名称' },
        { id: 8, equipName: '设备名称' },
        { id: 9, equipName: '设备名称' },
        { id: 10, equipName: '设备名称' },
        { id: 11, equipName: '设备名称' },
        { id: 12, equipName: '设备名称' },
        { id: 13, equipName: '设备名称' }
      ],
      queryinfo: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      total: 0
    }
  },
  methods: {
    GetAllFaultInfo() {
      this.$http.get('/Fault/GetFaultByEquip').then(res => {
        this.FaultNumList = res.data
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
<style lang="less" scoped>
.box-card {
  padding: 0px !important;
}
.form-left {
  position: relative;
  top: 0px;
}
.box-card-left {
  position: relative;
  left: 5px;
  width: 200px;
  height: 1200px;
  .item-left {
    width: 120px;
    height: 30px;
    text-align: center;
    font-size: 14px;
    position: absolute;
    left: -110px;
    top: -10px;
    border-bottom-color: #eaedf1;
  }
}
.box-card-right {
  width: 1100px;
  height: 555px;
}
</style>
