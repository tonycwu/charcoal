<template>
    <div class="elements-container">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">
                    Elements
                </h1>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6">
                <h5 id="checkbox-group" class="title is-5">
                    Checkbox Group
                </h5>
                <ch-field-checkbox-group 
                    @checkboxPick="setFontChoices"
                    :checkboxData="fontData">
                </ch-field-checkbox-group>
                <br>
                <pre><code>{{ fontChoices }}</code></pre>
            </div>
            <div class="column is-6">
                <h5 class="title is-5">
                    Code
                </h5>
                <pre><code>&lt;ch-field-checkbox-group<br>    @checkboxPick="setFontChoices"<br>    :checkboxData="fontData"&gt;<br>&lt;/ch-field-checkbox-group&gt;</code></pre>
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-6">
                <h5 id="radio-group" class="title is-5">
                    Radio Group
                </h5>
                <ch-field-radio-group
                    @radioPick="setFontStyle($event.target.value)"
                    :radioData="fontStyleData">
                </ch-field-radio-group>
                <br>
                <pre><code>{{ fontStyleSelection }}</code></pre>
            </div>
            <div class="column is-6">
                <h5 class="title is-5">
                    Code
                </h5>
                <pre><code>&lt;ch-field-radio-group<br>    @radioPick="setFontStyle($event.target.value)"<br>    :radioData="fontStyleData"&gt;<br>&lt;/ch-field-radio-group&gt;</code></pre>
            </div>
        </div>
    </div>
</template>

<script>

import ChFieldCheckboxGroup from '../ch-components/elements/FieldCheckboxGroup.vue';
import ChFieldRadioGroup from '../ch-components/elements/FieldRadioGroup.vue';

export default {
    data() {
        return {
            fontChoices: [],
            fontStyleSelection: 'Select from Radio Group',
            fontData: [
                { name: 'Helvetica', value: 'helvetica' },
                { name: 'Baskerville', value: 'baskerville' },
                { name: 'Avenir', value: 'avenir' },
                { name: 'Source Sans', value: 'source-sans' },
                { name: 'Montserrat', value: 'montserrat' },
                { name: 'Clarendon', value: 'clarendon' },
            ],
            fontStyleData: [
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