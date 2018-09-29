/* eslint-disable*/
import axios from 'axios'

export default {
  getData(context, link) {
    return axios({
      method: 'get',
      url: 'https://restcountries.eu/rest/v2/' + link
    })
  },
  getAllCountries(context) {
    return this.getData(context, 'all')
  }
}
