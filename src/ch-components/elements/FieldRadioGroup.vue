<template>
    <div class="radio-container">
        <div class="field" v-for="radio in radioData">
            <p class="control">
                <label class="radio">
                    <input
                        :name="radio.name"
                        :value="radio.value"
                        @click="radioClicked"
                        type="radio"
                        v-model="radioModel"
                    />
                    {{ radio.name }}
                </label>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        radioData: {
            type: Array
        }
    },
    data() {
        return {
            radioModel: ''
        }
    },
    methods: {
        radioClicked(e) {
            this.$emit('radioPick', e);
        }
    }
}

</script>

<style lang="scss">

.radio-container {
    .field {
        margin-right: 10px;
    }
}

</style>