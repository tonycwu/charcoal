<template>
  <li
    @click="setActiveTab"
    @check="isActive = !isActive"
    :class="{ 'is-active' : isActive }">
    <a>
      {{ display }}
    </a>
  </li>
</template>

<script>

export default {
  props: ['display'],
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    setActiveTab() {
      this.isActive = !this.isActive;
      this.$emit('check');
    }
  }
}

</script>