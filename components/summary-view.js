import CourierService from './CourierService.js'
const { ref } = Vue
const SummaryView = {
  props: {
    summary: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const summary = props.summary
    let newItems = ref([])
    const originalItems = []
    const drivers = ref([])

    CourierService.getDrivers().then((response) => {
      drivers.value = response.data
    })

    // note: 訂單
    for (let i = 0; i < summary.length; i++) {
      for (let j = 0; j < summary[i].items.length; j++) {
        newItems.value.push(summary[i].items[j])
        originalItems.push({ ...summary[i].items[j] })
      }
    }

    // 後端存檔
    function save() {
      //
    }

    // 取消須將值改回初始值
    function reset() {
      // 淺複製? originalItems還是具互動性
      newItems.value = originalItems
    }

    return { save, reset, newItems, drivers, originalItems }
  },
  template: `
    <h1>=== 分派司機 ===</h1>
    <div v-for="item in newItems" :key="item.shipNo" style="display:flex;">
      <div>{{ item.shipNo }}</div>
      <select v-model="item.driver">
        <option value="">請選擇</option>
        <option v-for="driver in drivers" :value="driver.id">{{ driver.name }}</option>
      </select>
    </div>
    <button @click="save">儲存</button>
    <button @click="reset">取消</button>
    <div>{{ JSON.stringify(originalItems) }}</div>
  `,
}

export default SummaryView
