<template>
  <h1>Racer reaction test</h1>
  <button @click="start" :disabled="isPlaying">Play</button>

  <Block v-if="isPlaying" :delay="delay" @clicked="end"/>
  <Result v-if="showResult" :score="score"/>
</template>

<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',
  components: {Block, Result},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    }
  },
  methods: {
    start() {
      // Mỗi lần chơi, Block sẽ xuất hiện trong khoảng từ 2 tới 6 giây.
      this.delay = 2000 + Math.random() * 4000;
      this.isPlaying = true;
      this.showResult = false;
      // console.log(`At [App.vue] Block appear after ${this.delay}ms`);
    },
    end(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
      this.showResult = true;
      // console.log(`At [App.vue] Stop timer at: ${this.score}ms`);
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
  }
  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[display] {
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>
