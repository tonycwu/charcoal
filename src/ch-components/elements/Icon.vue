<template>
    <div class="icon-container">
        <span :class="`icon ${describer}`">
            <i :class="`fa ${icon}`"></i>
        </span>
    </div>
</template>

<script>

export default {
    props: {
        describer: {
            type: String
        },
        icon: {
            type: String
        }
    }
}

</script>

<style lang="scss"></style>