<template>
    <progress
        :class="describer"
        :max="max"
        :value="number"
        class="progress"
    >
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