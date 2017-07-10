import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})