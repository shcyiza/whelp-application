# hello-contries

This is an assignment, made by 
<a href="https://shcyiza.herokuapp.com" target="_blank">Patrick cyiza</a>
with
<a href="https://vuejs.org" target="_blank">
Vue.js
</a>
Front-end framework and
<a href="https://bulma.io" target="_blank">
Bulma
</a> stylesheets library,
for the application at 
<a href="https://www.whelp.io" target="_blank">
WHELP/Start-up Factory
</a>.

## Unassigned decisions I made

### Vuex
I've use
<a href="https://vuex.vuejs.org" target="_blank">VUEX</a>
the official state management library for Vue.js.

This enables me to load all the data once and cache it.

I did that because the data we are working with are not updated very often
so i thought it was a good idea to load it just once
with the API endpoint calling all the countries
```
https://restcountries.eu/rest/v2/all
```
caching it in the store and handle the rest in at the clients
instaed of calling
```
https://restcountries.eu/rest/v2/regionalbloc/eu
```
everytime the EU page gets requested or 
```
https://restcountries.eu/rest/v2/{service}?fields={field};{field};{field}
```
For every search query.

Note that it also everything works **offline** once the app is loaded besides flags and maps!

_**See** 'src/store/index.js' **for more comments**_

### Flags and maps

I've added the contries flags and maps.
Because I had the time, I thought it was cool and like VUEX it enhances the UX.


# Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
