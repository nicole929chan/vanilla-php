import CourierService from './CourierService.js'
const { ref, reactive, watch } = Vue
const { onBeforeRouteUpdate, useRoute, useRouter } = VueRouter

const SummaryTable = {
  props: ['page'],
  setup(props) {
    // 同樣這個路由, 指是帶的query不一樣, setup()也是僅會執行一次;
    const route = useRoute()
    const router = useRouter()
    const areas = ref([])
    const areaId = ref('')
    const statuses = ref([])
    const statusCode = ref('')
    const summary = ref([])
    const state = reactive({
      areaId: null,
      statusCode: null,
      page: null,
    })

    CourierService.getAreas().then((response) => {
      areas.value = response.data
    })
    CourierService.getStatuses().then((response) => {
      statuses.value = response.data
    })

    watch(
      // 重新查詢時, page設定為1, 這也會監聽到, 又執行了一次;
      () => props.page,
      () => {
        console.log('watch:', props.page)
        state.page = props.page
        fetchData()
      }
    )

    function query() {
      // 固定查詢條件
      state.areaId = areaId
      state.statusCode = statusCode
      state.page = 1

      router.push({
        name: 'SummaryTable',
        query: { page: 1 },
      })

      fetchData()
    }

    function fetchData() {
      CourierService.getSummary(state).then((response) => {
        summary.value = response.data
      })
      // query已經把page改成空值, 但是router有設定預設1
      // 但這裡log的值是上一個狀態, 而不是1
      // console.log('props.page: ', props.page)
      // console.log('route page: ', route.query.page)
      // page = 1 也不代表是新查詢, 有可以只是點page1查看;
      // CourierService.getSummary(state.value)
    }

    return {
      areas,
      areaId,
      statuses,
      statusCode,
      summary,
      state,
      query,
    }
  },
  template: `
    <h2>summary table</h2>
    <div class="summary-query">
      <select v-model="areaId">
        <option value="">請選擇站所</option>
        <option v-for="area in areas" :value="area.id" :key="area.id">{{ area.name }}</option>
      </select>
      <select v-model="statusCode">
        <option value="">請選擇狀態</option>
        <option v-for="status in statuses" :value="status.code" :key="status.code">{{ status.name }}</option>
      </select>
      <button @click="query">查詢</button>
    </div>
    <p>page of props: {{ page }}</p>
    <p class="summary-block">{{ JSON.stringify(summary) }}</p>
    <div class="pagination">
      <div>
        <router-link :to="{ name: 'SummaryTable' }">page 0</router-link> 
      </div>
      <div>
        <router-link :to="{ name: 'SummaryTable', query: { page: 1 } }">page 1</router-link> 
      </div>
      <div>
        <router-link :to="{ name: 'SummaryTable', query: { page: 2 } }">page 2</router-link> 
      </div>
      <div>
        <router-link :to="{ name: 'SummaryTable', query: { page: 3 } }">page 3</router-link> 
      </div>
      <div>
        <router-link :to="{ name: 'CargoList' }">cargo list</router-link>
      </div>
    </div>
  `,
}

export default SummaryTable
