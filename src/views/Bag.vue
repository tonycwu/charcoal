<template>
    <div class="bag-container">
        <section class="section">
            <div class="columns">
                <div class="column is-4">
                    <ch-menu
                        :menuList="bagMenuList">
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
                bagMenuList: [
                    {
                        label: 'Components',
                        linkList: [
                            {
                                text: 'Breadcrumb',
                                url: 'components#breadcrumb',
                                subLinkList: [
                                    {
                                        text: 'Link 2',
                                        url: '#'
                                    },
                                    {
                                        text: 'Link 2',
                                        url: '#'
                                    }
                                ]
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
                        linkList: [
                            
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