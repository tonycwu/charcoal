<template>
    <div class="delete-container">
        <a class="delete" :class="describer"></a>
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