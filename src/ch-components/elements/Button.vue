<template>
    <a class="button" :class="describer">
        <slot></slot>
    </a>
</template>

<script>
    
export default {
    props: ['describer']
}

</script>