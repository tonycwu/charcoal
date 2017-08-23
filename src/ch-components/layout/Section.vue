<template>
    <div class="section-container" :class="describer">
        <slot></slot>
    </div>
</template>

<script>

export default {
    props: {
        describer: {
            type: String
        }
    }
}

</script>

<style lang="scss"></style>