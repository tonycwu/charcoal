<template>
    <div class="field">
        <label class="label">
            {{ label }}
        </label>
        <div class="control">
            <input
                :placeholder="placeholder"
                :value="value"
                @input="handleInput($event.target.value)"
                class="input"
                type="text"
            />
        </div>
        <p
            class="help"
            v-if="helperText"
        >
            {{ helperText }}
        </p>
    </div>
</template>

<script>

export default {
    props: {
        helperText: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: 'Enter text'
        },
        value: {
            type: String
        }
    },
    methods: {
        handleInput(val) {
            this.$emit('input', val)
        }
    }
}

</script>

<style lang="scss"></style>