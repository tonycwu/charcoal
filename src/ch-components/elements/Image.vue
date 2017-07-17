<template>
    <div class="image-container">
        <figure class="image" :class="describer">
            <img :src="src" />
        </figure>
    </div>
</template>

<script>

    export default {
        props: ['describer', 'src']
    }

</script>

<style lang="scss"></style>