<template>
    <div class="icon-container">
        <span class="icon" :class="describer">
            <i class="fa" :class="icon"></i>
        </span>
    </div>
</template>

<script>

    export default {
        props: ['describer', 'icon']
    }

</script>

<style lang="scss"></style>