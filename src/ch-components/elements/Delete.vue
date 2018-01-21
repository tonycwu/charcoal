<template>
    <div class="delete-container">
        <a :class="`delete ${describer}`"></a>
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