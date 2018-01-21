<template>
    <div class="home-container">
        <section class="section">
            <div class="has-text-centered">
                <img
                    src="../assets/charcoal-logo.png"
                    width="200"
                >
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
                <div
                    class="column"
                    v-for="card in ['First', 'Second', 'Third']"
                >
                    <ch-card
                        :footerBtns="cardInfo['footer-buttons']"
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
            subtitle: 'Fuel for Web Apps',
            cardInfo: {
                'footer-buttons': [
                    {
                        verb: 'Like',
                        link: 'http://www.google.com',
                        icon: 'fa-thumbs-up'
                    },
                    {
                        verb: 'Tweet',
                        link: 'http://www.google.com',
                        icon: 'fa-twitter'
                    },
                    {
                        verb: 'Share',
                        link: 'http://www.google.com',
                        icon: 'fa-share'
                    }
                ]
            },
        }
    },
    components: {
        ChCard
    }
}

</script>

<style lang="scss"></style>