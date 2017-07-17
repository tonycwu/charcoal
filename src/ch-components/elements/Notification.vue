<template>
    <div class="notification-container">
        <div class="notification" :class="describer">
            <button class="delete"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['describer']
    }

</script>

<style lang="scss"></style>