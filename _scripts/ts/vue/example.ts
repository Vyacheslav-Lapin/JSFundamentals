// import * as Vue from "vue";
// import { VueComponent, Prop } from 'Vue-typescript'


import {Vue} from "vue/types/vue";
addEventListener("DOMContentLoaded", () => {

    const Todos = Vue.extend({
        name: `todos`
    });

    const vm = new Todos({
        el: `#todos`,
        ready: () => {
            console.log('Viewmodel ready!');
        }
    });
}, true);
