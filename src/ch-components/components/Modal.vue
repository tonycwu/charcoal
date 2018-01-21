<template>
    <div class="modal-container">
        <div class="modal" :class="{ 'is-active': isOpen }">
            <div class="modal-background" @click="closeClick"></div>
            <div class="modal-card" v-if="hasModalCard">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        {{ title }}
                    </p>
                    <button
                        class="delete"
                        @click="closeClick"
                    >
                    </button>
                </header>
                <section class="modal-card-body">
                    <slot></slot>
                </section>
                <footer class="modal-card-foot">
                    <a
                        @click="primaryClick"
                        class="button is-success"
                    >
                        Save changes
                    </a>
                    <a
                        @click="closeClick"
                        class="button"
                    >
                        Cancel
                    </a>
                </footer>
            </div>
            <div class="image-container" v-else>
                <div class="modal-content">
                    <p class="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/1280x960.png" />
                    </p>
                </div>
                <button
                    @click="closeClick"
                    class="modal-close is-large"
                >
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            title: {
                type: String
            },
            isOpen: {
                type: Boolean
            },
            hasModalCard: {
                type: String
            }
        },
        methods: {
            primaryClick() {
                this.$emit('primaryClickModal');
                this.$emit('closeModal');
            },
            closeClick() {
                this.$emit('closeModal');
            }
        }
    }

</script>

<style lang="scss"></style>