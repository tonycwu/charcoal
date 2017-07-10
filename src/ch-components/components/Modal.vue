<template>
    <div class="modal" :class="{ 'is-active': isOpen }">
        <div class="modal-background"></div>
        <div class="modal-card" v-if="hasModalCard">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    {{ title }}
                </p>
                <button 
                    class="delete" 
                    @click="closeClick">
                </button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <a @click="primaryClick" class="button is-success">
                    Save changes
                </a>
                <a @click="closeClick" class="button">
                    Cancel
                </a>
            </footer>
        </div>
        <div class="image-container" v-else>
            <div class="modal-content">
                <p class="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png">
                </p>
            </div>
            <button 
                @click="closeClick"
                class="modal-close is-large">
            </button>
        </div>
    </div>
</template>

<script>
    
export default {
    props: ['title', 'isOpen', 'hasModalCard'],
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