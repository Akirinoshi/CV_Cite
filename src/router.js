import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Biography from "@/views/Biography";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/biography',
            component: Biography
        }
    ]
})