<template>
    <div class="card-container">
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
                <p v-for="btn in btnData" class="card-footer-item">
                    <a :href="btn.link">
                        <span class="icon is-small">
                            <i class="fa margin-right" :class="btn.icon"></i> {{ btn.verb }}
                        </span>
                    </a>
                </p>
            </footer>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['title', 'subtitle', 'btnData']
    }

</script>

<style lang="scss">

    footer.card-footer {
        .margin-right {
            margin-right: 8px;
        }
    }

</style>