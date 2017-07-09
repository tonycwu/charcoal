<template>
    <figure class="image" :class="describer">
        <img :src="src">
    </figure>
</template>

<script>
    
export default {
    props: ['describer', 'src']
}

</script>