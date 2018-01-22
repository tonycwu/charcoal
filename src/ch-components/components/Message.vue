<template>
    <article class="message">
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
</template>

<script>

export default {
    props: {
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