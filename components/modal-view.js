const ModalView = {
  setup(props, { emit }) {
    return { emit }
  },
  template: `
    <div class="xmmmodal">
      <div class="overlay" @click="emit('closeModal')"></div>
      <div class="modal-card">
        <slot />
      </div>
    </div>
    `,
}

export default ModalView
