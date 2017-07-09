<template>
    <progress class="progress" :class="describer" :value="number" :max="max">
        {{ number }}
    </progress>
</template>

<script>
    
export default {
    props: ['describer', 'number', 'max']
}

</script>