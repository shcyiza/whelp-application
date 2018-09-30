<script>
import ListItem from './ListItem'
export default {
    /*
    this is a child component that handle the render
    and the pagination of the a given list of countries
     */
    name: "PaginatorBase",
    components: {
        ListItem,
    },
    props:{
        // list given by the parent component
        list:{
        type:Array,
        required:true
        },

        // countries per page
        pageSize:{
            type:Number,
            required:false,
            default: 16
        },

        // relative path of parent component
        // so pagination links routes to the right place
        relatifPath:{
            type: String,
            required:true
        }
    },
    computed: {
        // all the computed properties to handle pagination
        current() {
            // the current page is given in the url so user can go back
            // to any pages and still have the correct data displayed
            return this.$route.query.currentPage
        },
        pageNumber() {
            let final_result = 0 // what will be return, it's the page number
            let block_result = isNaN() // our intermediary data

            // here we check if the query param 'curentPage' is valid
            if (this.current !== undefined && this.current >= 0) {
                // final_result stays 0 if no 'curentPage' or if its lower then 0
                if (this.pageArray[this.pageCount - 1] >= this.current) {
                // final_result stays 0 if 'curentPage' has reached max
                // loopback effect
                    block_result = Number(this.current)   
                }
            }
            
            if (block_result !== isNaN()) {
                // check if block_result got converted into valid number
                // final_result changes if its the case
                final_result = block_result
            }
            
            return final_result // it's retrun as promised
        },
        pageCount() {
            /*
            Math.ceil is to make a new page
            if the list/pageSize ratio is not round
            exemple 2.001 ratio return 3
            so all the data get rendered
            */
            return Math.ceil(this.list.length/this.pageSize);
        },
        paginatedList() {
            // slice the list given by the parent according to page number
            const   start = this.pageNumber * this.pageSize,
                    end = start + this.pageSize;

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
    }
}
</script>

<template>
    <div>

        <div class="countries columns is-multiline is-gapless">

            <!--
            render all the item of the list given by parent compoent
            with child compoent list item
            -->
            <list-item class="column is-one-quarter"
            v-for="(country, i) in paginatedList" v-bind:key="i"
           :country="country" :i="i"
            ></list-item>

        </div>
        <hr>

        <!--
        the part with the page links
        -->
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
    
.button
    &:hover
        border-color: #00bf9d
        color: #00bf9d
   
.button.exact
   border-color: #00bf9d
   background-color: #00bf9d
   color: white
</style>