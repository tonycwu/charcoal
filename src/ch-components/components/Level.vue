<template>
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
</template>

<script>
    
export default {
    props: ['levelList']
}

</script>