const { ref, watchEffect } = Vue

const SummaryTable = {
  props: ['page'],
  setup(props) {
    // 同樣這個路由, 指是帶的query不一樣, setup()也是僅會執行一次;
    const title = ref('')
    // console.log(props.page)

    watchEffect(() => {
      if (props.page == 1) {
        console.log('a')
      } else if (props.page == 2) {
        console.log('b')
      } else {
        console.log('c')
      }
    })

    return { title }
  },
  template: `
    <h2>summary table</h2>
    <h3>Title: {{ title }}</h3>
    <p>page: {{ page }}</p>
    <p>current page: {{ currentPage }}</p>
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
  `,
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1
    },
  },
}

export default SummaryTable
