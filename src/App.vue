<script>
export default {
  name: 'app',
  computed: {
    isHome() {
      if (this.$route.path === "/") return true
    }
  },
  created () {
    this.$store.dispatch('fetchCountries')
  }
}
</script>


<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h2>
            <i class="material-icons">
              language
            </i>
            Hello Countries
          </h2>
        </div>
          <router-link v-bind:class="{ active: isHome }" class="navbar-item" to="/" exact>
            Whole World
            <i class="material-icons">
              public
            </i> 
          </router-link>
          <router-link class="navbar-item" to="/eu"> 
            European Union
            <i class="material-icons">
              stars
            </i>
          </router-link>
          <router-link class="navbar-item" to="/search">
            search countries
            <i class="material-icons">
              search
            </i> 
          </router-link>
      </nav>
    </div>
    <router-view/>

    <footer>
      This is an assignment made by 
      <a href="https://shcyiza.herokuapp.com" target="_blank">Patrick cyiza</a>
      with
      <a href="https://vuejs.org" target="_blank">
        <img class="vue" src="https://vuejs.org/images/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      and
      <a href="https://bulma.io" target="_blank">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      for the application at <a href="https://www.whelp.io" target="_blank">WHELP/Start-up Factory</a>
      <br>
      2018
    </footer>
  </div>
</template>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 10px

h1
  font-family: 'Kodchasan', sans-serif
  font-size: 50px !important
  background-color: #58ddc5
  color: white
  font-weight: 900 !important

.navbar-brand
  font-family: Quicksand
  font-size: 50px
  font-weight: 900
  padding-right: 20px
  .material-icons
    font-size: 40px
    

.navbar-item.active
  border-color: #58ddc5
  background-color: #58ddc5
  color: white
  &:hover
    border-color: #58ddc5
    background-color: #58ddc5
    color: white !important
.navbar-item
  font-family: 'Kodchasan', sans-serif
  &:hover
    color: #58ddc5 !important

footer
  background-color: #58ddc5
  color: white
  margin-top: 30px
  padding-top: 30px
  img.vue
    max-width: 60px

</style>
