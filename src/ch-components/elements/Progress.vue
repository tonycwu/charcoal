<template>
    <progress
        class="progress"
        :class="describer"
        :value="number"
        :max="max">
        {{ number }}
    </progress>
</template>

<script>

export default {
    props: {
        describer: {
            type: String
        },
        number: {
            type: String
        },
        max: {
            type: String
        }
    }
}

</script>

<style lang="scss"></style>