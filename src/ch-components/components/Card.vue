<template>
    <div class="card-container">
        <div class="card">
            <div class="card-content">
                <p class="title">
                    {{ title }}
                </p>
                <p class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        subtitle: {
            type: String,
            default: 'Subtitle'
        }
    }
}

</script>

<style lang="scss"></style>