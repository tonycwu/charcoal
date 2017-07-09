<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                {{ title }}
            </p>
            <p class="subtitle">
                {{ subtitle }}
            </p>
        </div>
        <footer class="card-footer">
            <p v-for="item in footerItems" class="card-footer-item">
                <a :href="item.link">
                    <span class="icon is-small">
                        <i class="fa margin-right" :class="item.icon"></i> {{ item.verb }}
                    </span>
                </a>
            </p>
        </footer>
    </div>
</template>

<script>
    
export default {
    props: ['title', 'subtitle', 'footerItems']
}

</script>

<style lang="scss">
    
footer.card-footer {
    .margin-right {
        margin-right: 8px;
    }
}

</style>