<template>
  <h1>{{ title }}</h1>
  <p>Welcome ...</p>

  <!-- Passing props with data bindings-->
  <div v-if="modal.show">
    <Modal
      :theme="modal.theme"
      @close="toggleModal"
    >
      <!-- slot and Named slot -->
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">More information!</a>
      </template>
      <h1>Sign up for the Giveaway!</h1>
      <p>Collect your 50% discount!</p>
    </Modal>
  </div>

  <!-- Using teleport component -->
  <Teleport to=".modals" v-if="modal2.show">
    <Modal
      @close="toggleModal2"
    >
      <h1>Sign up for the Giveaway!</h1>
      <p>Collect your 50% discount!</p>
    </Modal>
  </Teleport>

  <button @click="toggleModal">Collect your discount!</button>
  <button @click="toggleModal2">Open Modal2</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: "My first Vue App =)))",
      modal: {
        theme: 'sale',
        show: false
      },
      modal2: {
        show: false
      }
    }
  },
  methods: {
    toggleModal() {
      this.modal.show = !this.modal.show;
    },
    toggleModal2() {
      this.modal2.show = !this.modal2.show;
    },
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
