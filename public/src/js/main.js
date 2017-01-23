var Vue = require('vue');
var App = require('./App.vue');

new Vue({
  el: '#app',
  components: {
    'ch-app': App
  }
});