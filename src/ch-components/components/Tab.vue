<template>
    <div class="card" v-show="isActive">
        <div class="card-content">
            <slot></slot>
        </div>
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