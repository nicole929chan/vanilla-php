const { ref, computed } = Vue
import CourierService from './CourierService.js'
const CargoDetail = {
  props: {
    cargo: { type: Object, required: true },
  },
  setup(props) {
    const drivers = ref([])

    CourierService.getDrivers().then((response) => {
      drivers.value = response.data
    })
  },
  template: `
    <div style="display: flex;">
        <div>{{ cargo.shipNo }}</div>
        <div>{{ cargo.addr }}</div>
        <div>{{ cargo.driver }}</div>
    </div>
  `,
}

export default CargoDetail
