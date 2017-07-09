<template>
    <nav class="level">
        <div v-for="item in levelItems" class="level-item has-text-centered">
            <div>
                <p class="heading">
                    {{ item.heading }}
                </p>
                <p class="title">
                    {{ item.title }}
                </p>
            </div>
        </div>
    </nav>
</template>