<template>
    <div class="notification-container">
        <div :class="`notification ${describer}`">
            <button class="delete"></button>
            <slot></slot>
        </div>
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