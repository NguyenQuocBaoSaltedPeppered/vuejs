<template>
  <nav>
    <router-link to="/">Home</router-link> |

    <!-- <router-link to="/about">About</router-link> -->

    <!-- Dùng kết hợp data binding -->
    <!-- Cách làm này giúp chúng ta thay đổi các đường dẫn (phần path) về sau vẫn được -->
    <!-- miễn phần name của cách phần tử trong mảng routes không bị thay đổi -->
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #fff;
  background: #42b983;
}
</style>
