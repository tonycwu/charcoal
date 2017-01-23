<template>
  <a :href="url" :class="{'btn': buttonBool}">
    <slot></slot>
  </a>
</template>

<script>
  module.exports = {
    props: ['url','buttonBool'],
  };
</script>