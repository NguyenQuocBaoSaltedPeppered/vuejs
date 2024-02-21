<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me!</button>
    <button @click="age+=10">Add 10 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const name = ref('BaoNQ');
    const age = ref(24);
    const handleClick = () => {
      name.value = 'BaoNQ pro max';
      age.value++;
    };
    return { name, age, handleClick};
  },
}
</script>
