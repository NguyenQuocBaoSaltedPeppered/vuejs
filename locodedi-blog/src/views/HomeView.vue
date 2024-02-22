<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="searchTerms">
    <div v-for="name in matchingNames" :key="name" class="nameList">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const names = ref(['reyna', 'neon', 'jett', 'sage', 'omen', 'killjoy']);
    const searchTerms = ref('');

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(searchTerms.value));
    })
    return { names, searchTerms, matchingNames };
  },
}
</script>
