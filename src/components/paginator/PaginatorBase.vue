<script>
export default {
    name: "Paginator",
    props:{
        list:{
        type:Array,
        required:true
        },
        sizePerPage:{
            type:Number,
            required:false,
            default: 16
        },
        relatifPath:{
            type: String,
            required:true
        }
    },
    computed: {
        current() {
            return this.$route.query.currentPage
        },
        pageNumber() {
            let final_result = 0 // what will be return, it's the page number
            let block_result = isNaN()

            // here we check if the query param 'curentPage' is valid
            if (this.current !== undefined && this.current >= 0) {
                // final_result stays 0 if no query param or if query param lower then 0
                if (this.pageArray[this.pageCount - 1] >= this.current) {
                // final_result stays 0 if query param has reached max
                // doloopback effect
                    block_result = Number(this.current)   
                }
            }
            
            if (block_result !== isNaN()) {
                // check if block_result go converted into valid number
                // final_result changes cause query params is valide
                final_result = block_result
            }
            
            return final_result // it's retrun as promised
        },
        pageCount() {
            let l = this.list.length,
                s = this.sizePerPage;

            return Math.ceil(l/s);
        },
        paginatedList() {
            const   start = this.pageNumber * this.sizePerPage,
                    end = start + this.sizePerPage;

            return this.list.slice(start, end);
        },
        pageArray() {
            let i = 0,
                arr = []
            for (i ; i < this.pageCount; i++) { 
                i
                arr.push(i)
            }
            return arr
        }
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
    <div>

        <div class="countries columns is-multiline is-gapless">
            <div class="column is-one-quarter"
            v-for="(country, i) in paginatedList" v-bind:key="i"
            >
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
                        <div class="columns">
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
        </div>

        <hr>

        <div class="pageChanger columns"
        v-if="pageCount > 1"
        >
            <div class="column is-one-third">
                <router-link :to="relatifPath + '?currentPage=' + (pageNumber - 1)">
                    <button class="button is-primary"
                    :disabled="pageNumber <= 0"
                    >
                        <i class="material-icons">
                            navigate_before
                        </i>
                        previous
                    </button>
                </router-link>
            </div>

            <div class="column is-one-third">
                <ul class="columns is-multiline field is-grouped">
                    <li class="column is-1 control"
                    v-for="i in pageArray" :key="i"
                    >
                        <router-link class="button"
                        :to="relatifPath + '?currentPage=' + i"
                        >
                            {{i}}
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="column is-one-third">
                <router-link :to="relatifPath + '?currentPage=' + (pageNumber + 1)">
                    <button class="button is-primary"
                    :disabled="pageNumber > pageArray[pageCount - 2]"
                    >
                        next
                        <i class="material-icons">
                            navigate_next
                        </i>
                    </button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<style scoped lang="sass">
.countries
    min-height: 482px
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
    
.button
    &:hover
        border-color: #00bf9d
        color: #00bf9d
   
.button.exact
   border-color: #00bf9d
   background-color: #00bf9d
   color: white
</style>