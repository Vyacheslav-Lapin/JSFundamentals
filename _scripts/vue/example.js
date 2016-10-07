"use strict";
// import * as Vue from "vue/src/shared/util"; // require("vue/types/vue");

const Todos = Vue.extend({
    name: `todos`
});

const vm = new Todos({
    // el: `#todos`,
    data: {
        tasks: [
            {title: 'Подготовка материала', done: true},
            {title: 'Запись занятия', done: false},
        ],
        newTask: '',
    },
    methods: {
        addTask: function (evt) {
            evt.preventDefault();
            // console.log(`task added! ${evt.target.elements[0].value}`);
            this.tasks.push({title : this.newTask, done: false});
            this.newTask = '';
        }
    },
    ready: () => console.log('ViewModel ready!')
});

vm.$mount('#todos');
vm.$data.$add('title', `Todos2`);