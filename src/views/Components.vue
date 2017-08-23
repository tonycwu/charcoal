<template>
    <div class="components-container">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">
                    Components
                </h1>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6">
                <h5 id="breadcrumb" class="title is-5">
                    Breadcrumb
                </h5>
                <ch-breadcrumb 
                    :crumbData="crumbData">
                </ch-breadcrumb>
            </div>
            <div class="column is-6">
                <h5 class="title is-5">
                    Code
                </h5>
                <pre><code>&lt;ch-breadcrumb<br>    :crumbData="crumbData"&gt;<br>&lt;/ch-breadcrumb&gt;</code></pre>
            </div>
        </div>
        <hr>

        <div class="columns">
            <div class="column is-6">
                <h5 id="card" class="title is-5">
                    Card
                </h5>
                <ch-card
                    :title="card.title"
                    :subtitle="card.subtitle">
                </ch-card>
            </div>
            <div class="column is-6">
                <h5 class="title is-5">
                    Code
                </h5>
                <pre><code>&lt;ch-card<br>    :title="card.title"<br>    :subtitle="card.subtitle"&gt;<br>&lt;/ch-card&gt;</code></pre>
            </div>
        </div>
        <hr>

        <h5 id="level" class="title is-5">
            Level
        </h5>
        <ch-level
            :levelData="levelData">
        </ch-level>
        <br>
        <h5 class="title is-5">
            Code
        </h5>
        <pre><code>&lt;ch-level<br>    :levelData="levelData"&gt;<br>&lt;/ch-level&gt;</code></pre>
        <hr>

        <h5 id="media-object" class="title is-5">
            Media Object
        </h5>
        <ch-media-object>
        </ch-media-object>
        <br>
        <h5 class="title is-5">
            Code
        </h5>
        <pre><code>&lt;ch-media-object&gt;<br>&lt;/ch-media-object&gt;</code></pre>
        <hr>

        <div class="columns">
            <div class="column is-6">
                <h5 id="menu" class="title is-5">
                    Menu
                </h5>
                <ch-menu
                    :menuData="menuData">
                </ch-menu>
            </div>
            <div class="column is-6">
                <h5 class="title is-5">
                    Code
                </h5>
                <pre><code>&lt;ch-menu<br>    :menuData="menuData"&gt;<br>&lt;/ch-menu&gt;</code></pre>
            </div>
        </div>
        <hr>

        <div class="columns">
            <div class="column">
                <h5 id="message" class="title is-5">
                    Message
                </h5>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6">
                <ch-message
                    describer=""
                    title="Test Message">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusantium, laudantium suscipit soluta, atque ipsum distinctio doloremque vero...
                        <br /><br />
                        <a href="#">
                            A link possibly.
                        </a>
                    </p>
                </ch-message>
            </div>
            <div class="column is-6">
                <pre><code>&lt;ch-message<br/>    describer="..."<br/>    title="..."&gt;<br/>        &lt;p&gt;...&lt;/p&gt;<br/>&lt;/ch-message&gt;</code></pre>
            </div>
        </div>
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
            hasModalCard="true"
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
            <ch-tab name="Serif" selected>
                I do love Baskerville.
            </ch-tab>
            <ch-tab name="Sans Serif">
                Classic Helvetica.
            </ch-tab>
            <ch-tab name="Slab Serif">
                Clarendon might be nice.
            </ch-tab>
        </ch-tabs>
    </div>
</template>

<script>

import ChBreadcrumb from '../ch-components/components/Breadcrumb.vue'
import ChCard from '../ch-components/components/Card.vue'
import ChLevel from '../ch-components/components/Level.vue'
import ChMediaObject from '../ch-components/components/MediaObject.vue'
import ChMenu from '../ch-components/components/Menu.vue'
import ChMessage from '../ch-components/components/Message.vue'
import ChModal from '../ch-components/components/Modal.vue'
import ChNavbar from '../ch-components/components/Navbar.vue'
import ChPagination from '../ch-components/components/Pagination.vue'
import ChPanel from '../ch-components/components/Panel.vue'
import ChTabs from '../ch-components/components/Tabs.vue'
import ChTab from '../ch-components/components/Tab.vue'

export default {
    data() {
        return {
            card: {
                title: 'Frutiger',
                subtitle: 'A Humanist Typeface'
            },
            crumbData: [
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
            levelData: [
                {
                    heading: 'Brisket',
                    title: '$15.00 / lb'
                },
                {
                    heading: 'Sausage',
                    title: '$8.00 / lb'
                }
            ],
            menuData: [
                {
                    label: 'First Label',
                    linkData: [
                        {
                            text: 'Link 1',
                            url: '#',
                            subLinkData: [
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
                    linkData: [
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
            tabData: [
              {
                display: 'Tab 1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo amet id numquam est quasi officiis dolores autem distinctio ipsa, asperiores hic consectetur odio sapiente voluptate iste dignissimos beatae obcaecati sunt?'
              },
              {
                display: 'Tab 2',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum consectetur rem, dolorum, fuga quasi rerum ipsa velit.'
              },
              {
                display: 'Tab 3',
                content: 'Sunt assumenda ullam architecto odit, voluptatum consequatur a deleniti, praesentium ipsa maiores, perferendis itaque ipsam, sequi nisi! Quibusdam doloribus molestias harum iure!'
              },
            ],
            modal1IsOpen: false,
            modal2IsOpen: false
        }
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
        ChTabs,
        ChTab
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

<style lang="scss"></style>