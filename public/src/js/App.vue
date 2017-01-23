<template>
  <div class="container app-container">
    <div class="row">
      <ch-header></ch-header>
      <ch-body></ch-body>
      <ch-footer></ch-footer>
    </div>
  </div>
</template>

<script>
  
  var Vue = require('vue');
  
  // Instantiate Layout Components
  var Header = require('./components/layout/Header.vue'),
      Body = require('./components/layout/Body.vue'),
      Footer = require('./components/layout/Footer.vue');
  
  // Instantiate UI Components
  var Button = require('./components/ui/Button.vue'),
      Link = require('./components/ui/Link.vue'),
      Card = require('./components/ui/Card.vue'),
      Tabs = require('./components/ui/Tabs.vue');

  // Register Layout Components
  Vue.component('ch-header', Header);
  Vue.component('ch-body', Body);
  Vue.component('ch-footer', Footer);

  // Register UI Components
  Vue.component('ch-button', Button);
  Vue.component('ch-link', Link);
  Vue.component('ch-card', Card);
  Vue.component('ch-tabs', Tabs);

  module.exports = {};

</script>