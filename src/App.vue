<template>
    <div id="app">
        <ch-header></ch-header>
        <transition
            name="fade"
            mode="out-in">
            <router-view></router-view>
        </transition>
        <ch-footer></ch-footer>
    </div>
</template>

<script>

import ChHeader from './ch-components/constants/Header.vue'
import ChFooter from './ch-components/constants/Footer.vue'

export default {
    components: {
        ChHeader,
        ChFooter
    }
}

</script>

<style lang="scss">

$primary: #4d4d4d;

@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/font-awesome/css/font-awesome.css";
    
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}

</style>
