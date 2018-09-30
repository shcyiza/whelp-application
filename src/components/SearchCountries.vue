<script>
//the component redering search results

// paginator hadle the render of the countries given in list and paginates them
import Paginator from './paginator/PaginatorBase'

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
        <input v-model="query" class="input" type="text" placeholder="type 'Bel' to find Belgium and Belarus">
      </div>
    </div>
    <hr>

    <!--
    placeholder when no query 
    to give instruction and avoid akwardly empty pages
    -->
    <div class="placeholder"
    v-if="query.length < 2 && countries.length === 0"
    >
      <i class="material-icons">
        public
      </i>
      <br>
      Look for any country by it's name
    </div>

    <!--
    placeholder when no result for query 
    to give instruction
    -->
    <div class="placeholder"
    v-if="query.length > 2 &&countries.length === 0"
    >
      <i class="material-icons">
        sentiment_dissatisfied
      </i>
      <br>
      No results found for "{{query}}"
      <br> Try Something else
    </div>

    <!--
    passing the search results as props to handle render
    and the path of the component to handle pagenation
    -->
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
