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
                    <h5 id="breadcrumb" class="title is-5">
                        Breadcrumb
                    </h5>
                    <ch-breadcrumb 
                        :crumbList="crumbList">
                    </ch-breadcrumb>
                    <hr>

                    <h5 id="card" class="title is-5">
                        Card
                    </h5>
                    <ch-card
                        :title="card.title"
                        :subtitle="card.subtitle">
                    </ch-card>
                    <hr>

                    <h5 id="level" class="title is-5">
                        Level
                    </h5>
                    <ch-level
                        :levelList="levelList">
                    </ch-level>
                    <hr>

                    <h5 id="media-object" class="title is-5">
                        Media Object
                    </h5>
                    <ch-media-object>
                    </ch-media-object>
                    <hr>

                    <h5 id="menu" class="title is-5">
                        Menu
                    </h5>
                    <ch-menu
                        :menuList="menuList">
                    </ch-menu>
                    <hr>

                    <h5 id="message" class="title is-5">
                        Message
                    </h5>
                    <ch-message
                        describer="is-info"
                        title="Test Message">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusantium, laudantium suscipit soluta, atque ipsum distinctio doloremque vero, facere nam asperiores odio dolor aspernatur reprehenderit repudiandae optio sed. Culpa, inventore.
                        </p>
                        <a href="#">Another Link</a>
                        <p>
                            You should try Charcoal!
                        </p>
                    </ch-message>
                    <hr>
                    
                    <h5 id="modal" class="title is-5">
                        Modal
                    </h5>
                    <button 
                        @click="modal1IsOpen = !modal1IsOpen" 
                        class="button">
                        Open Modal 1
                    </button>
                    <button 
                        @click="modal2IsOpen = !modal2IsOpen" 
                        class="button">
                        Open Modal 2
                    </button>
                    <ch-modal
                        @closeModal="modal1IsOpen = !modal1IsOpen"
                        @primaryClickModal="fakeSave"
                        :isOpen="modal1IsOpen"
                        title="A Very Excellent Modal">
                        <p>
                            I've got some content!
                        </p>
                    </ch-modal>
                    <ch-modal
                        @closeModal="modal2IsOpen = !modal2IsOpen"
                        @primaryClickModal="fakeSave"
                        :isOpen="modal2IsOpen"
                        hasModalCard="true"
                        title="A Second Modal">
                        <p>
                            I've got even better content!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id est vitae labore omnis nostrum autem, incidunt eaque at nam voluptatibus eum quas, illo amet. A voluptatibus sapiente dolor voluptates aliquam?
                        </p>
                    </ch-modal>
                    <hr>

                    <h5 id="navbar" class="title is-5">
                        Navbar
                    </h5>
                    <ch-navbar>
                    </ch-navbar>
                    <hr>

                    <h5 id="pagination" class="title is-5">
                        Pagination
                    </h5>
                    <ch-pagination>
                    </ch-pagination>
                    <hr>

                    <h5 id="panel" class="title is-5">
                        Panel
                    </h5>
                    <ch-panel>
                    </ch-panel>
                    <hr>

                    <h5 id="tabs" class="title is-5">
                        Tabs
                    </h5>
                    <ch-tabs>
                    </ch-tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import ChBreadcrumb from '../ch-components/components/Breadcrumb.vue';
import ChCard from '../ch-components/components/Card.vue';
import ChLevel from '../ch-components/components/Level.vue';
import ChMediaObject from '../ch-components/components/MediaObject.vue';
import ChMenu from '../ch-components/components/Menu.vue';
import ChMessage from '../ch-components/components/Message.vue';
import ChModal from '../ch-components/components/Modal.vue';
import ChNavbar from '../ch-components/components/Navbar.vue';
import ChPagination from '../ch-components/components/Pagination.vue';
import ChPanel from '../ch-components/components/Panel.vue';
import ChTabs from '../ch-components/components/Tabs.vue';

export default {
    data() {
        return {
            bagMenuList: [
                {
                    label: 'Components',
                    linkList: [
                        {
                            text: 'Breadcrumb',
                            url: '#breadcrumb',
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
                            url: '#card'
                        },
                        {
                            text: 'Level',
                            url: '#level'
                        },
                        {
                            text: 'Media Object',
                            url: '#media-object'
                        },
                        {
                            text: 'Menu',
                            url: '#menu'
                        },
                        {
                            text: 'Message',
                            url: '#message'
                        },
                        {
                            text: 'Modal',
                            url: '#modal'
                        },
                        {
                            text: 'Navbar',
                            url: '#navbar'
                        },
                        {
                            text: 'Pagination',
                            url: '#pagination'
                        },
                        {
                            text: 'Panel',
                            url: '#panel'
                        },
                        {
                            text: 'Tabs',
                            url: '#tabs'
                        }
                    ]
                }
            ],
            card: {
                title: 'Pheonix',
                subtitle: 'Rise from the Ashes'
            },
            crumbList: [
                {
                    title: 'A',
                    link: '#'
                },
                {
                    title: 'B',
                    link: '#'
                },
                {
                    title: 'C',
                    link: '#'
                }
            ],
            levelList: [
                {
                    heading: 'Brisket',
                    title: '$15.00 / lb'
                },
                {
                    heading: 'Sausage',
                    title: '$8.00 / lb'
                },
                {
                    heading: 'Chicken',
                    title: '$7.00 / lb'
                }
            ],
            menuList: [
                {
                    label: 'First Label',
                    linkList: [
                        {
                            text: 'Link 1',
                            url: '#',
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
                        }
                    ]
                },
                {
                    label: 'Second Label',
                    linkList: [
                        {
                            text: 'Link 1',
                            url: '#'
                        },
                        {
                            text: 'Link 1',
                            url: '#'
                        }
                    ]
                }
            ],
            modal1IsOpen: false,
            modal2IsOpen: false
        };
    },
    components: {
        ChBreadcrumb,
        ChCard,
        ChLevel,
        ChMediaObject,
        ChMenu,
        ChMessage,
        ChModal,
        ChNavbar,
        ChPagination,
        ChPanel,
        ChTabs
    },
    methods: {
        closeModal() {
            return this.modalIsOpen = false;
        },
        fakeSave() {
            console.log('Saved!');
        }
    }
}

</script>