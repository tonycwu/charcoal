<template>
    <div class="tabs">
        <ul>
            <Tab
                v-for="tab in tabList"
                :key="tab"
                :display="tab.display">
            </Tab>
        </ul>
    </div>
</template>

<script>

    import Tab from './Tab.vue'

    export default {
        props: ['tabList'],
        data() {
            return {

            }
        },
        components: {
            Tab
        }
    }

</script>

<style lang="scss"></style>