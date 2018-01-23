<template>
    <aside class="menu">
        <div class="label-and-list" v-for="menu in menuData">
            <p class="menu-label">
                {{ menu.label }}
            </p>
            <ul class="menu-list">
                <li v-for="link in menu.linkData">
                    <a :href="link.url">
                        {{ link.text }}
                    </a>
                    <ul>
                        <li v-for="subLink in link.subLinkData">
                            <a :href="subLink.url">
                                {{ subLink.text }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>

export default {
    props: {
        menuData: {
            type: Array
        }
    }
}

</script>

<style lang="scss"></style>