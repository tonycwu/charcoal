<template>
    <div class="level-container">
        <nav class="level">
            <div v-for="level in levelList" class="level-item has-text-centered">
                <div>
                    <p class="heading">
                        {{ level.heading }}
                    </p>
                    <p class="title">
                        {{ level.title }}
                    </p>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

    export default {
        props: ['levelList']
    }

</script>

<style lang="scss"></style>