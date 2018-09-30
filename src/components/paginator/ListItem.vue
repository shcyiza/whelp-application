<script>
export default {
    name: "ListItem",
    data() {
        return {
            gMapsKey: ''
        }
    },
    props:{
        // list given by the paginatorBase component
        country:{
            type: Object,
            required:true
        },
        i: {
            type: Number,
            required:true
        }
    },
    computed: {
        staticMapImg() {

        },
    },
    methods:{
        openModal(i) {
            this.$modal.show('modal' + i);
        },
        hideModal (i) {
            this.$modal.hide('modal' + i);
        }
    }
}
</script>

<template>

<div class="column is-one-quarter">
    <div class="country"
         @click="openModal(i)"
    >
        <img class="flag" :src="country.flag">
        <br>
        <b class="name">{{country.name}}</b>
        <br>
        <b>Capital city:</b> {{country.capital}}
        <br>
        <b>Apha2 code:</b> {{country.alpha2Code}}
    </div>
    <modal
            :name="'modal' + i"
            :resizable="true"
    >
        <div class="modals">
            <div class="title">
                <a class="delete is-large is-pulled-right"
                   @click="hideModal(i)"
                ></a>
                {{country.name}}
            </div>
            <div class="columns is-multiline">
                <div class="column is-half">
                    <img class="flag" :src="country.flag">
                </div>
                <div class="column is-one-quarter data-name">
                    Apha2 code:
                    <br>
                    Capital city:
                    <br>
                    Region:
                    <br>
                    Population:
                    <br>
                </div>
                <div class="column is-one-quarter">
                    {{country.alpha2Code}}
                    <br>
                    {{country.capital}}
                    <br>
                    {{country.region}}
                    <br>
                    {{country.population.toLocaleString('be')}}
                    <br>
                </div>
            </div>
            <br>
        </div>
    </modal>
</div>

</template>

<style scoped lang="sass">
.country
    cursor: help;
    color: black
    height: 200px
    border: 2px solid #e8e8e8
    &:hover
        border-color: #00bf9d
        color: #00bf9d
    img.flag
        -webkit-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
        box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
        width: 100px
    .name
        font-size: 20px
        text-decoration: underline overline
        font-family: Quicksand

.modals
    height: 400px
    padding: 10px
    img.flag
        -webkit-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
        box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
        width: 200px

    .title
        color: white
        background-color: #00bf9d
        text-align: center;
        font-size: 40px
        font-weight: bold
        font-family: Quicksand
    .data-name
        color: grey
        font-weight: bold
</style>