<template>
    <div class="checkbox-group-container">
        <div
            class="field"
            v-for="checkbox in checkboxData"
        >
            <p class="control">
                <label class="checkbox">
                    <input
                        :name="checkbox.name"
                        :value="checkbox.value"
                        @click="checkboxClicked"
                        type="checkbox"
                        v-model="checkboxModel"
                    />
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

<style lang="scss">

label {
    cursor: pointer;
}

</style>