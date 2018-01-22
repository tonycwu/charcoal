<template>
    <progress
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