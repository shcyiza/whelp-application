<script>
//the component redering all the countries of the world

// paginator hadle the render of the countries given in list and paginates them
import Paginator from './paginator/PaginatorBase'

export default {
    name: "WholeWorld",
    components: {
        Paginator
    },
    computed: {
        countries() {
            // getter to get all the countries
            // see src/store/index.js for more comments
            return this.$store.getters.getAllCountries
        }
    }
}
</script>

<template>
    <div>
        <h1>All the countries</h1>
        <br>
        <!--
        passing the list of all the countries as props to handle render
        and the path of the component to handle pagenation
        -->
        <paginator :list="countries" relatifPath="/"></paginator>
    </div>
</template>

<style scoped lang="sass">
</style>