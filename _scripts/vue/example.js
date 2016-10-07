"use strict";
// import * as Vue from "vue/src/shared/util"; // require("vue/types/vue");

// addEventListener("DOMContentLoaded", () => {
    const Todos = Vue.extend({
        name: `todos`
    });

    const vm = new Todos({
        el: `#todos`,
        ready: () => console.log('ViewModel ready!')
    });
// }, true);
