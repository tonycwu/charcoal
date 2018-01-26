<template>
    <div
        class="dropdown"
        :class="{ 'is-active': isOpen }"
    >
        <div class="dropdown-trigger">
            <button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                class="button"
                @click="openDropdown"
            >
                <span>
                    <slot name="name"></slot>
                </span>
                <span class="icon is-small">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div
            class="dropdown-menu"
            id="dropdown-menu"
            role="menu"
        >
            <div class="dropdown-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        openDropdown() {
            this.$emit('openDropdown');
        }
    }
}

</script>

<style lang="scss"></style>