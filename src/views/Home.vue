<template>
    <section class="section">
        <div class="has-text-centered margin-bottom">
            <img width="200" src="../assets/charcoal-logo.png">
            <h1 class="title is-1">
                {{ title }}
            </h1>
            <h2 class="subtitle">
                {{ subtitle }}
            </h2>
        </div>
        <div class="columns">
            <div class="column">
                <ch-card
                    title="First"
                    subtitle="Genius Name"
                    :footerItems="[
                        { 
                            verb: 'Like', 
                            link: 'www.google.com' 
                        }, 
                        { 
                            verb: 'Tweet', 
                            link: 'www.google.com'
                        }, 
                        { 
                            verb: 'Share', 
                            link: 'www.google.com' }]">
                </ch-card>
            </div>
            <div class="column">
                <ch-card
                    title="Second"
                    subtitle="Genius Name"
                    :footerItems="[
                        { 
                            verb: 'Like', 
                            link: 'www.google.com' 
                        }, 
                        { 
                            verb: 'Tweet', 
                            link: 'www.google.com'
                        }, 
                        { 
                            verb: 'Share', 
                            link: 'www.google.com' }]">
                </ch-card>
            </div>
            <div class="column">
                <ch-card
                    title="Third"
                    subtitle="Genius Name"
                    :footerItems="[
                        { 
                            verb: 'Like', 
                            link: 'www.google.com' 
                        }, 
                        { 
                            verb: 'Tweet', 
                            link: 'www.google.com'
                        }, 
                        { 
                            verb: 'Share', 
                            link: 'www.google.com' }]">
                </ch-card>
            </div>
        </div>
    </section>
</template>

<script>

import ChCard from '../components/components/Card.vue'

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