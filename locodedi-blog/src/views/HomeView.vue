<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="searchTerms">
    <div v-for="name in matchingNames" :key="name" class="nameList">
      <p>{{ name }}</p>
    </div>
    <button @click="stopWatching">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const names = ref(['reyna', 'neon', 'jett', 'sage', 'omen', 'killjoy']);
    const searchTerms = ref('');

    // Không chạy lúc đầu, chỉ chạy khi searchTerms thay đổi
    const stopWatch = watch(searchTerms, () => {
      console.log('Watch funciton');
    })

    // Chạy lần đầu tiên và chạy lại khi giá trị bên trong hàm bị thay đổi
    // Ở đây là mỗi lần gõ, searchTerms thay đổi giá trị và vì nó đang nằm
    // trong hàm này, watchEffect sẽ biết được.
    const stopWatchEffect = watchEffect(() => {
      console.log('WatchEffect function ', searchTerms.value)
    })

    const stopWatching = () => {
      stopWatch();
      stopWatchEffect();
    }

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(searchTerms.value));
    })
    return { searchTerms, matchingNames, stopWatch, stopWatchEffect, stopWatching };
  },
}
</script>
