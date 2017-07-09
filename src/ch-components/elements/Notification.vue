<template>
    <div class="notification" :class="describer">
        <button class="delete"></button>
        <slot></slot>
    </div>
</template>

<script>
    
export default {
    props: ['describer']
}

</script>