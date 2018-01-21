<template>
    <div class="bag-container">
        <section class="section">
            <div class="columns">
                <div class="column is-2 is-offset-1">
                    <ch-menu :menuData="bagMenuData">
                    </ch-menu>
                </div>
                <div class="column is-8">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import ChMenu from '../ch-components/components/Menu.vue'

export default {
    data() {
        return {
            bagMenuData: [
                {
                    label: 'Components',
                    linkData: [
                        {
                            text: 'Breadcrumb',
                            url: 'components#breadcrumb',
                        },
                        {
                            text: 'Card',
                            url: 'components#card'
                        },
                        {
                            text: 'Level',
                            url: 'components#level'
                        },
                        {
                            text: 'Media Object',
                            url: 'components#media-object'
                        },
                        {
                            text: 'Menu',
                            url: 'components#menu'
                        },
                        {
                            text: 'Message',
                            url: 'components#message'
                        },
                        {
                            text: 'Modal',
                            url: 'components#modal'
                        },
                        {
                            text: 'Navbar',
                            url: 'components#navbar'
                        },
                        {
                            text: 'Pagination',
                            url: 'components#pagination'
                        },
                        {
                            text: 'Panel',
                            url: 'components#panel'
                        },
                        {
                            text: 'Tabs',
                            url: 'components#tabs'
                        }
                    ]
                },
                {
                    label: 'Elements',
                    linkData: [
                        {
                            text: 'Checkbox Group',
                            url: 'elements#checkbox-group'
                        },
                        {
                            text: 'Radio Group',
                            url: 'elements#radio-group'
                        }
                    ]
                }
            ]
        };
    },
    components: {
        ChMenu
    }
}

</script>

<style lang="scss"></style>