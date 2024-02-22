<template>
  <div class="detail-container">
      <div v-if="error">{{ error }}</div>
      <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
      </div>
  </div>
</template>

<script>
import getPost from '../composables/getPost'

export default {
    props: ['id'],
    setup(props) {
        const {post, error, loadDataAsync} = getPost(props.id);

        loadDataAsync();

        return {post, error};
    }
}
</script>

<style>
.post {
    margin: 0 auto;
    max-width: 1200px;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>