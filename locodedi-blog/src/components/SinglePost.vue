<template>
  <div class="post-detail-container">
    <router-link :to="{ name: 'detail', params: {id: post.id}}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
        #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
        return props.post.body.length > 100 ? props.post.body.substring(0, 100) + '...' : props.post.body;
    });
    return { snippet };
  }
};
</script>

<style></style>
