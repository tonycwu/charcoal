<template>
  <button class="btn" @click="buttonAlert">
    <slot></slot>
  </button>
</template>

<script>
  module.exports = {
    props: [],
    methods: {
      buttonAlert: function() {
        alert('You clicked a button.');
      }
    }
  };
</script>