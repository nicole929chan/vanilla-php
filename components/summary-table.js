import CourierService from './CourierService.js'
import CargoesView from './cargoes-view.js'
import ModalView from './modal-view.js'
import SummaryView from './summary-view.js'
const { ref, reactive, watch } = Vue
const { onBeforeRouteUpdate, useRoute, useRouter } = VueRouter

const SummaryTable = {
  props: ['page'],
  setup(props) {
    const start_date = ref(null)
    const drivers = ref([])
    const summary = ref([])
    const state = reactive({
      start_date: null,
    })

    CourierService.getDrivers().then((response) => {
      drivers.value = response.data
    })

    function query() {
      CourierService.getSummary().then((response) => {
        summary.value = response.data
      })
    }

    return { start_date, drivers, summary, query, editedSummary: ref(null) }
  },
  components: {
    CargoesView,
    ModalView,
    SummaryView,
  },
  template: `
    <h2>summary table</h2>
    <div class="summary-query">
      <input type="date" v-model="start_date" />
      <button @click="query">查詢</button>
      <button @click="editSummary(summary)">分派司機</button>
    </div>
    <div class="summary-block">
      <div>項次</div>
      <div>站所</div>
      <div>區域</div>
      <div>訂單數</div>
      <div></div>
      <CargoesView v-for="list in summary" :key="list.areaId" :list="list" />
    </div>
    <ModalView v-if="editedSummary" @closeModal="editedSummary = null">
      <SummaryView :summary="editedSummary" />
    </ModalView>
  `,
  methods: {
    editSummary(summary) {
      this.editedSummary = summary
    },
  },
}

export default SummaryTable
