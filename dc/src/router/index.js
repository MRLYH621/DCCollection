import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import SystemMonitor from '../components/StationMonitor/SystemMonitor'
import RealTimeMonitor from '../components/StationMonitor/RealTimeMonitor'
import FaultList from '../components/StationMonitor/FaultList'
import HistoryForm from '../components/StationMonitor/HistoryForm'
import UserManager from '../components/UserManager/UserManager.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/SystemMonitor',
    children: [
      { path: '/SystemMonitor', component: SystemMonitor },
      { path: '/RealTimeMonitor', component: RealTimeMonitor },
      { path: '/FaultList', component: FaultList },
      { path: '/HistoryForm', component: HistoryForm },
      { path: '/UserManager', component: UserManager }
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
