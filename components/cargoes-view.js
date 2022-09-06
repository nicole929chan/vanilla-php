import CargoDetail from './cargo-detail.js'
const { ref } = Vue
const CargoesView = {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let visibled = ref(false)

    function toggle() {
      visibled.value = !visibled.value
    }

    return { visibled, toggle }
  },
  components: { CargoDetail },
  template: `
    <div>{{ list.areaId }}</div>
    <div>{{ list.name }}</div>
    <div>{{ list.total }}</div>
    <div>xx區</div>
    <button @click="toggle">明細</button>
    <div class="cargo-detail">
        <CargoDetail 
            v-for="cargo in list.items" 
            :key="cargo.shipNo" 
            :cargo="cargo"
            />
    </div>
  `,
}

export default CargoesView
