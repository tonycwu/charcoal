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
                <div class="column">
                    <ch-card
                        title="First"
                        subtitle="Genius Name"
                        :footerItems="[
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
                                icon: 'fa-share' }]">
                    </ch-card>
                </div>
                <div class="column">
                    <ch-card
                        title="Second"
                        subtitle="Genius Name"
                        :footerItems="[
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
                                icon: 'fa-share' }]">
                    </ch-card>
                </div>
                <div class="column">
                    <ch-card
                        title="Third"
                        subtitle="Genius Name"
                        :footerItems="[
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
                                icon: 'fa-share' }]">
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