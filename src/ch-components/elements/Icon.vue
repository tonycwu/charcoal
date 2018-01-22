<template>
    <span class="icon">
        <i :class="`fa ${icon}`"></i>
    </span>
</template>

<script>

export default {
    props: {
        icon: {
            type: String
        }
    }
}

</script>

<style lang="scss"></style>