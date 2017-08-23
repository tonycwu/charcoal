<template>
    <div class="message-container">
        <article class="message" :class="describer">
            <div class="message-header">
                <p>
                    {{ title }}
                </p>
                <button class="delete" @click="closeMessage"></button>
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    props: {
        describer: {
            type: String
        },
        title: {
            type: String
        }
    },
    methods: {
        closeMessage() {
            alert('Close message fired...');
        }
    }
}

</script>

<style lang="scss"></style>