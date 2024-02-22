<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="!posts.length" class="loader">Loading...</div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, loadDataAsync } = getPosts();
    loadDataAsync();

    return { posts, error };
  },
  components: { PostList },
};
</script>
