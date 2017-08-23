<template>
    <div class="button-container">
        <a class="button" :class="describer">
            <slot></slot>
        </a>
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