<template>
    <div class="form-container">
        <ch-notification
            class="is-success"
            v-show="isVisible && isSuccessful"
            @dismiss="dismissNotification"
        >
            {{ successMsg }}
        </ch-notification>
        <ch-notification
            class="is-danger"
            v-show="isVisible && isFailure"
            @dismiss="dismissNotification"
        >
            {{ failureMsg }}
        </ch-notification>
        <form
            @submit.prevent="submitForm"
        >
            <slot></slot>
        </form>
    </div>
</template>

<script>

import ChNotification from '../elements/Notification.vue'

export default {
    props: {
        failureMsg: {
            type: String,
            default: 'Failure.'
        },
        payload: {
            type: Object,
            required: true
        },
        successMsg: {
            type: String,
            default: 'Success!'
        },
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            err: {},
            isVisible: true,
            res: {}
        }
    },
    components: {
        ChNotification
    },
    computed: {
        isFailure() {
            return this.res.status === 400
                || this.res.status === 401;
        },
        isSuccessful() {
            return this.res.status === 200
                || this.res.status === 201;
        }
    },
    methods: {
        dismissNotification() {
            this.isVisible = false;
        },
        submitForm() {
            this.$http.post(this.url, this.payload)
                .then(() => {
                    throw Error('Flopped!');
                })
                .then(res => {
                    this.res = res;
                })
                .catch(err => {
                    this.err = err;
                });
        }
    }
}
</script>

<style lang="scss"></style>