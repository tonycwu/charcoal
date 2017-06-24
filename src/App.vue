<template>
  <div id="app">
    <NavBar></NavBar>
    <transition
      name="fade"
      mode="out-in">
      <router-view></router-view>  
    </transition>
  </div>
</template>

<script>

import NavBar from './components/layout/NavBar.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>