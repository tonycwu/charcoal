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

import ChHeader from './components/layout/Header.vue'
import ChFooter from './components/layout/Footer.vue'

export default {
    name: 'app',
    data () {
        return {
            title: 'Charcoal',
            subtitle: 'Fuel for Web Apps'
        }
    },
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

.margin-bottom {
    margin-bottom: 25px;
}

</style>
