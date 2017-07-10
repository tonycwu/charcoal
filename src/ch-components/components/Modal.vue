<template>
    <div class="modal" :class="{ 'is-active': isOpen }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    {{ title }}
                </p>
                <button class="delete"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <a class="button is-success">Save changes</a>
                <a class="button">Cancel</a>
            </footer>
        </div>
    </div>
</template>

<script>
    
export default {
    props: ['title', 'isOpen']
}

</script>