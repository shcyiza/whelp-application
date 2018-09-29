import Vue from 'vue'
import Vuex from 'vuex'
import apiCall from './plugins/apiCalls'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  getters: {
    getAllCountries: state => state.countries,
    getEuCountries: state => state.countries.filter((country) => {
      return country.regionalBlocs.filter((region) => {
        return region.acronym === "EU"
      }).length >= 1;
    }),
    getSearchResult: state => (query) => {
      state.countries.filter((country) => {
        return country.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
      })
    },

  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    }
  },
  actions: {
    fetchCountries(context) {
      apiCall.getAllCountries(context)
        .then(res => {
          context.commit('setCountries', res.data)
        })
        .catch(error => {
          throw error
        })
    }
  }
})
