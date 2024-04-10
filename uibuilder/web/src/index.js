// @ts-nocheck
'use strict'

// // Vuetify
// // import 'vuetify/styles'
// // import { createVuetify } from 'vuetify'
// const { createVuetify } = vuetify
// // import * as components from 'vuetify/components'
// const { components } = vuetify/components
// // import * as directives from 'vuetify/directives'
// const { directives } = vuetify/directives

// const vuetify = createVuetify({
//     components,
//     directives,
// })

const { createApp } = Vue

// Using the Vue options API style for beginner simplicity
// No need to pre-define Quasar's $q when working with the options API
const app = createApp({
    // Define Vue reactive variables
    data() { return {

        count: 0,
        input1: '',
        workers: [
            { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33},
            { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47 },
            { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22 },
            { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28 },
        ],

    } },

    // Dynamic data
    computed: {},

    // Supporting functions
    methods: {

        // REALLY Simple method to return DOM events back to Node-RED.
        doEvent: (event) => uibuilder.eventSend(event),

    },

    // Lifecycle hooks
    mounted() {
        // If msg changes - msg is updated when a standard msg is received from Node-RED
        uibuilder.onChange('msg', (msg) => {
            console.log('>> msg recvd >>', msg, this)
            // // If the msg.payload is a string, show in on the page
            // if (typeof msg.payload === 'string') this.message = msg.payload
        })
    },
})

app.mount('#app')
// app.use(vuetify).mount('#app')
