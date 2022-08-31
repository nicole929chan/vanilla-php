import SummaryTable from '../components/summary-table.js'
import CargoList from '../components/cargo-list.js'
const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

const routes = [
  {
    path: '/',
    name: 'SummaryTable',
    component: SummaryTable,
    props: (route) => ({ page: route.query.page }),
  },
  {
    path: '/cargoes',
    name: 'CargoList',
    component: CargoList,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp({
  name: 'Courier',
  template: `
    <h1>Welcome to Courier Page</h1>
    <router-view></router-view>
  `,
})

app.use(router)

app.mount('#courier')
