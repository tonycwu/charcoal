<template>
    <div class="message-container">
        <article class="message" :class="describer">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete"></button>
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>
    </div>
</template>

<script>

    export default {
        props: ['describer', 'title']
    }

</script>

<style lang="scss"></style>