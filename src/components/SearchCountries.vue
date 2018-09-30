<script>
import Paginator from './Paginator'

export default {
  name: 'SearchCountries',
  components: {
    Paginator
  },
  data() {
    return {
      query: ''
    }
  },
  computed: {
    countries() {
      return this.$store.getters.getSearchResult(this.query)
    }
  }
}
</script>

<template>
    <div>
    <h1>Search Countries</h1>
    <div class="columns">
      <div class="column is-1 icon">
        <i class="material-icons">
          search
        </i> 
      </div>
      <div class="column is-11">
        <br>
        <input v-model="query" class="input" type="text" placeholder="type 'Bel'">
      </div>
    </div>
    <hr>
    <div class="placeholder"
    v-if="countries.length === 0"
    >
      <i class="material-icons">
        public
      </i>
      <br>
      Look for any country by it's name
    </div>
    <paginator :list="countries" relatifPath="/search"></paginator>
    </div>
</template>


<style scoped lang="sass">
.material-icons
  font-size: 100px
  color: #dbdbdb

.placeholder
  font-family: Quicksand
  font-size: 50px
  color: #dbdbdb
</style>
