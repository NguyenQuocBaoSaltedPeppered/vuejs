<template>
  <div class="post-container">
    <div v-for="post in posts" :key="post.id" class="post-list">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
  }
};
</script>

<style></style>
