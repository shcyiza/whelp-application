<script>
export default {
    name: "ListItem",
    data() {
        return {
            gMapsKey: 'AIzaSyAvb2OQWipY6XeXhNeHRSgFl5xT-_Z8_rg'
        }
    },
    props:{
        // country given by the paginatorBase parent component
        country:{
            type: Object,
            required:true
        },
        // index country of given
        i: {
            type: Number,
            required:true
        }
    },
    computed: {
        staticMapLink() {
            const urlName = this.country.name.replace(" ", "+")
            const link = ("https://maps.googleapis.com/maps/api/staticmap?"
                + "key=" + this.gMapsKey
                + "&center=" + urlName
                + "&zoom=3&scale=1&size=300x300&maptype=hybrid&format=png&visual_refresh=true"
                + "&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C"
                + urlName
            )
            return link        
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
            width="700px" height="500px"
    >
        <div class="modals">
            <div class="title">
                <a class="delete is-large is-pulled-right"
                   @click="hideModal(i)"
                ></a>
                {{country.name}}
            </div>
            <div class="columns is-gapless">
                <div class="column is-half">
                    <img class="flag" :src="country.flag">
                    <hr>
                    <div class="columns">
                        <div class="column is-one-half data-name">
                            Apha2 code:
                            <br>
                            Capital city:
                            <br>
                            Region:
                            <br>
                            Population:
                            <br>
                        </div>
                        <div class="column is-one-half">
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
                </div>
                <div class="column is-half">
                    <img class="map" :src="staticMapLink">
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