<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/SystemMonitor' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电站监测</el-breadcrumb-item>
      <el-breadcrumb-item>历史报表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryinfo.query" clearable @clear="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible=true">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="UserList" style="width:100%  " border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="UserName" label="用户名" width="180"></el-table-column>
        <el-table-column prop="Email" label="邮箱"></el-table-column>
        <el-table-column prop="RoleName" label="角色"></el-table-column>
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
  data() {
    return {
      queryinfo: {
        starttime: '',
        endtime: '',
        pagenum: 1,
        pagesize: 5
      },
      dialogVisible: false,
      total: 0,
      UserList: [
        { UserName: '1' },
        { UserName: '2' },
        { UserName: '3' },
        { UserName: '4' },
        { UserName: '5' },
        { UserName: '6' },
        { UserName: '4' },
        { UserName: '5' }
      ],
      addForm: {
        username: '',
        password: '',
        email: '',
        telephone: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    GetStaLSData() {
      this.$http
        // .get('StationData/GetLSStationData', { params: queryinfo })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
<style lang="" scoped>
</style>
