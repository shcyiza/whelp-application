<script>
import Paginator from './Paginator'

export default {
    name: "WholeWorld",
    components: {
        Paginator
    },
    computed: {
        countries() {
            return this.$store.getters.getAllCountries
        }
    }
}
</script>

<template>
    <div>
        <h1>All the countries</h1>
        <br>
        <paginator :list="countries" relatifPath="/"></paginator>
    </div>
</template>

<style scoped lang="sass">
</style>