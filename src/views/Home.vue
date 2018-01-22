<template>
    <Hero class="is-danger is-bold is-large has-text-centered">
        <img
            src="../assets/charcoal-logo.svg"
            width="150"
        >
        <h1 class="title is-1">
            {{ title }}
        </h1>
        <h2 class="subtitle">
            {{ subtitle }}
        </h2>
    </Hero>
</template>

<script>

import Hero from '../ch-components/layout/Hero.vue'
import Section from '../ch-components/layout/Section.vue'

export default {
    data() {
        return {
            title: 'Charcoal',
            subtitle: 'Fuel for Web Apps'
        }
    },
    components: {
        Hero,
        Section
    }
}

</script>

<style lang="scss"></style>