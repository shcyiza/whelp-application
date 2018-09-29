<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('fetchCountries')
  }
}
</script>


<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Whole World</router-link> |
      <router-link to="/eu">Eu</router-link> |
      <router-link to="/search">search</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
