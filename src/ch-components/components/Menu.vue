<template>
    <div class="menu-container">
        <aside class="menu">
            <div class="label-and-list" v-for="menu in menuList">
                <p class="menu-label">
                    {{ menu.label }}
                </p>
                <ul class="menu-list">
                    <li v-for="link in menu.linkList">
                        <a :href="link.url">
                            {{ link.text }}
                        </a>
                        <ul>
                            <li v-for="subLink in link.subLinkList">
                                <a :href="subLink.url">
                                    {{ subLink.text }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>

    export default {
        props: ['menuList']
    }

</script>

<style lang="scss"></style>