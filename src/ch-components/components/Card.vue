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
            <p v-for="btn in btnList" class="card-footer-item">
                <a :href="btn.link">
                    <span class="icon is-small">
                        <i class="fa margin-right" :class="btn.icon"></i> {{ btn.verb }}
                    </span>
                </a>
            </p>
        </footer>
    </div>
</template>

<script>
    
export default {
    props: ['title', 'subtitle', 'btnList']
}

</script>

<style lang="scss">
    
footer.card-footer {
    .margin-right {
        margin-right: 8px;
    }
}

</style>