"use strict";
// import * as Vue from "vue/src/shared/util"; // require("vue/types/vue");

const Todos = Vue.extend({
    name: `todos`
});

const vm = new Todos({
    // el: `#todos`,
    data: {
        title: 'Todos'
    },
    ready: () => console.log('ViewModel ready!')
});

vm.$mount('#todos');
