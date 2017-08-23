<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="crumb in crumbData">
                <a :href="crumb.link">
                    {{ crumb.title }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    props: {
        crumbData: {
            type: Array,
            default: []
        }
    }
}

</script>

<style lang="scss"></style>