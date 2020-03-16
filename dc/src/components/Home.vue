<template>
  <el-container class="home-container">
    <el-header>
      <div class="header-container">
        <img class="header-nav-img" src="../assets/logo.jpg" alt="无" />
        <span>直流汇集系统</span>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-row>
          <el-col :span="15">
            <el-menu
              :collapse="false"
              background-color="#373d41"
              text-color="#fff"
              active-text-color="#409eff"
              unique-opened
              router
              :default-active="this.$route.path"
              :collapse-transition="false"
            >
              <el-submenu
                :popper-append-to-body="true"
                show-timeout="200"
                :index="item.path"
                v-for="item in menuList"
                :key="item.id"
              >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item
                  v-for="subitem in item.children"
                  :key="subitem.id"
                  :index="subitem.path"
                >
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{subitem.name}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 右侧主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: '电站检测',
          path: '/SystemMonitor',
          children: [
            { id: 4, name: '系统监测', path: '/SystemMonitor' },
            { id: 5, name: '实时监测', path: '/RealTimeMonitor' },
            { id: 6, name: '故障列表', path: '/FaultList' },
            { id: 7, name: '历史报表', path: '/HistoryForm' }
          ]
        },
        {
          id: 2,
          name: '能源分析',
          path: '/energy',
          children: [
            { id: 4, name: '能效分析', path: '/Effciency' },
            { id: 5, name: '发电量分析', path: '/ElectricProductive' },
            { id: 6, name: '可靠性分析', path: '/Reliability' }
          ]
        },
        {
          id: 3,
          name: '用户管理',
          path: '/UserManager',
          children: [{ id: 3, name: '用户列表', path: '/UserManager' }]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped >
.home-container {
  height: 100%;
}
.el-header {
  .header-container {
    margin-left: 0;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 25px;
    color: #ffffff;
    .header-nav-img {
      height: 70%;
      width: 30px;
    }
    span {
      margin-left: 15px;
    }
  }
  padding-left: 0;
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
}
.el-aside {
  background-color: #373d41;
  .el-menu {
    border-right: solid 0px;
    padding-left: 0px;
    .el-submenu {
      margin-left: auto;
      padding: 0 0;
    }
    .el-menu-item {
      position: relative;
    }
  }
}
.el-main {
  background-color: #eaedf1;
}
.element.style {
    color: rgb(64, 158, 255);
    background-color: rgb(55, 61, 65);
    padding-left: 25px;
}
</style>
