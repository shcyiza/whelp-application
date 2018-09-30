/*
https://vuex.vuejs.org
I used Vuex cause the data we are working with are not updated very often
so i thought it was a good idea to load it just once
with the API endpoint calling all the countries
caching it in the store handle the rest here
instaed of calling'/regions/eu' everytime the EU tab gets clicked
it also gives the capability to work offline once loaded
*/
import Vue from 'vue'
import Vuex from 'vuex'
// My library for Http calls is Axios
// i made functions to call our API in this file
import apiCall from './plugins/apiCalls'

Vue.use(Vuex)

export default new Vuex.Store({
  // the state is where the data is stored
  state: {
    /*
    all we need is one state countaining all the countries
    we don't need to have a state for the EU
    cause cause it's countained in all the countries
    so we just need to filter it and thats what getters are made for
    */
    countries: []
  },
  /*
  getter aquired state for the vue component to use
  it can do everything a function does with state data
  combine, filter,return transformed version of the data,
  but it can not actually mutate or modify it
  it works kind of the same way as the computed properties of a Vue object
  */
  getters: {
    // we just need 3 getters the complete the assigment
    // one for each requested page

    // get all the countries, the easy one.
    getAllCountries: state => state.countries,

    // get countries of the EU. it gets kinda tricky...
    getEuCountries: state => state.countries.filter((country) => {
      // Sinds the countries are given as an array
      // and the reginalBlocs property of a country is also an array
      // we had to use 2 filter method one nested in the other
      return country.regionalBlocs.filter((region) => {
        // first filter method
        // to filter out all the countries not belonging to a regional block
        return region.acronym === "EU"
          // and a secound filter method nested in the first one
          // to get all the countries belonging to the EU
      }).length >= 1;
    }),

    // get countries by search input partially matching name of the countries
    // not as tricky as the EU if you ask me
    getSearchResult: (state) => (query) => {
      if (query !== '' && query.length > 1) {
      // return an empty array if the search input is less the 2 characters
        return state.countries.filter((country) => {
          return country.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
          // make the search input and state data case insensitif
          // and check if there is a match with in String.prototype.indexOf() method
        })
      } else {
        return []
      }
    },
  },
  // Mutation are the only thing able to modify the data
  // can only be called by action
  mutations: {
    // we just need one mutation to populate our countries state
    setCountries(state, payload) {
      state.countries = payload
    }
  },
  actions: {
    // standard promised base API call
    fetchCountries(context) {
      apiCall.getAllCountries(context)
        .then(res => {
          // here is where we use mutation
          // to populate the state with our response
          context.commit('setCountries', res.data)
        })
        .catch(error => {
          throw error
        })
    }
  }
})
