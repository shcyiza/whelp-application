<script>
//the component redering the EU members

// paginator hadle the render of the countries given in list and paginates them
import Paginator from './paginator/PaginatorBase'

export default {
    name: "EuBloc",
    components: {
        Paginator
    },
    computed: {
        countries() {
            return this.$store.getters.getEuCountries
        }
    }
}
</script>

<template>
    <div>
        <h1>EU Region</h1>
        <br>
        <!--
        passing the list of EU members as props to handle render
        and the path of the component to handle pagenation
        -->
        <paginator :list="countries" relatifPath="/eu"></paginator>
    </div>
</template>

<style scoped>

</style>