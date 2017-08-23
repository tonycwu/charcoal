<template>
    <div class="checkbox-group-container">
        <div class="field" v-for="checkbox in checkboxData">
            <p class="control">
                <label class="checkbox">
                    <input
                        type="checkbox"
                        :name="checkbox.name"
                        :value="checkbox.value"
                        v-model="checkboxModel"
                        @click="checkboxClicked" />
                    {{ checkbox.name }}
                </label>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        checkboxData: {
            type: Array
        }
    },
    data() {
        return {
            checkboxModel: []
        }
    },
    methods: {
        checkboxClicked() {
            this.$emit('checkboxPick', this.checkboxModel);
        }
    }
}

</script>

<style lang="scss" scoped>

label {
    cursor: pointer;
}

</style>