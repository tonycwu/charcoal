<template>
    <div class="image-container">
        <figure :class="image ${describer}">
            <img :src="src" />
        </figure>
    </div>
</template>

<script>

export default {
    props: {
        describer: {
            type: String
        },
        src: {
            type: String
        }
    }
}

</script>

<style lang="scss"></style>