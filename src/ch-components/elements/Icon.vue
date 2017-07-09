<template>
    <span class="icon" :class="describer">
        <i class="fa" :class="icon"></i>
    </span>
</template>

<script>
    
export default {
    props: ['describer', 'icon']
}

</script>