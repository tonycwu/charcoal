<template>
    <div class="home-container">
        <section class="section">
            <div class="has-text-centered">
                <img width="200" src="../assets/charcoal-logo.png">
                <h1 class="title is-1">
                    {{ title }}
                </h1>
                <h2 class="subtitle">
                    {{ subtitle }}
                </h2>
            </div>
        </section>
        <section class="section">
            <div class="columns">
                <div class="column" v-for="card in ['First', 'Second', 'Third']">
                    <ch-card
                        :title="card"
                        subtitle="Genius Name"
                    >
                    </ch-card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import ChCard from '../ch-components/components/Card.vue'

export default {
    data() {
        return {
            title: 'Charcoal',
            subtitle: 'Fuel for Web Apps'
        }
    },
    components: {
        ChCard
    }
}

</script>

<style lang="scss"></style>