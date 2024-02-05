<template>
  <h1>{{ title }}</h1>
  <!-- Passing props with data bindings-->
  <div v-if="modal.show">
    <Modal
    :header="modal.header"
    :content="modal.content"
    :theme="modal.theme"
    @close="toggleModal"
    />
  </div>
  <p>Welcome ...</p>
  <button @click="toggleModal">Collect your discount!</button>
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
        header: "Sign up for the Giveaway!",
        content: "Collect your 50% discount!",
        theme: 'sale',
        show: false
      }
    }
  },
  methods: {
    toggleModal() {
      this.modal.show = !this.modal.show;
    },
  }
}
</script>

<style>
#app {
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
