<template>
    <div class="tag-container">
        <span class="tag" :class="describer">
            <slot></slot>
        </span>
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