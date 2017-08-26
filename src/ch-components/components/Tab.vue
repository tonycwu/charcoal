<template>
    <div class="tab-container" v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>

export default {
    props: {
        name: {
            type: String
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.isActive = this.selected;
    },
    data() {
        return {
            isActive: false
        }
    }
}

</script>

<style lang="scss"></style>