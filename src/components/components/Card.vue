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
                <span>
                    <a :href="item.link"><i class="fa" :class="item.icon"></i> {{ item.verb }}</a>
                </span>
            </p>
        </footer>
    </div>
</template>

<script>
    
export default {
    props: ['title', 'subtitle', 'footerItems']
}

</script>