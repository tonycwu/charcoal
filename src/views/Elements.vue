<template>
    <div class="elements-container">
        <h5 id="fieldCheckboxGroup" class="title is-5">
            Checkbox Group
        </h5>
        <ch-field-checkbox-group 
            @checkboxPick="setFontChoices"
            :checkboxList="fontList">
        </ch-field-checkbox-group>
        <pre><code>{{ fontChoices }}</code></pre>

        <h5 id="fieldRadioGroup" class="title is-5">
            Radio Group
        </h5>
        <ch-field-radio-group
            @radioPick="setFontStyle($event.target.value)"
            :radioList="fontStyleList">
        </ch-field-radio-group>
        <pre><code>{{ fontStyleSelection }}</code></pre>
    </div>
</template>

<script>

    import ChFieldCheckboxGroup from '../ch-components/elements/FieldCheckboxGroup.vue';
    import ChFieldRadioGroup from '../ch-components/elements/FieldRadioGroup.vue';

    export default {
        props: [''],
        data() {
            return {
                fontChoices: [],
                fontStyleSelection: 'Select from Radio Group',
                fontList: [
                    { name: 'Helvetica', value: 'helvetica' },
                    { name: 'Baskerville', value: 'baskerville' },
                    { name: 'Avenir', value: 'avenir' },
                    { name: 'Source Sans', value: 'source-sans' },
                    { name: 'Montserrat', value: 'montserrat' },
                    { name: 'Clarendon', value: 'clarendon' },
                ],
                fontStyleList: [
                    { name: 'Bold', value: 'bold' },
                    { name: 'Italic', value: 'italic' },
                    { name: 'Underline', value: 'underline' }
                ]
            }
        },
        components: {
            ChFieldCheckboxGroup,
            ChFieldRadioGroup
        },
        methods: {
            setFontChoices(val) {
                this.fontChoices = val;
            },
            setFontStyle(val) {
                this.fontStyleSelection = val;
            }
        }
    }

</script>

<style lang="scss"></style>