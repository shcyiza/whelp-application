<script>
import Paginator from './Paginator'

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
        <paginator :list="countries" relatifPath="/eu"></paginator>
    </div>
</template>

<style scoped>

</style>