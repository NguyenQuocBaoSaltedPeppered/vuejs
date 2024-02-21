<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  setup() {
    console.log("setup")
    let name = 'BaoNQ';
    let age = 24;
    const handleClick = () => {
      console.log('You clicked me!');
    };
    return { name, age, handleClick};
  },
}
</script>
