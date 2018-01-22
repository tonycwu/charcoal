<template>
    <section class="section">
        <div class="has-text-centered">
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
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            title: 'Charcoal',
            subtitle: 'Fuel for Web Apps'
        }
    }
}

</script>

<style lang="scss"></style>