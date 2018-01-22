<template>
    <div class="tabs-container">
        <div class="tabs" :class="modifier">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                    <a :href="tab.link" @click="selectTab(tab)">
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    props: {
        modifier: {
            type: String
        }
    },
    created() {
        this.tabs = this.$children;
    },
    data() {
        return {
            tabs: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name;
            });
        }
    }
}

</script>

<style lang="scss"></style>