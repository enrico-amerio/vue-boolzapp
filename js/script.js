import { contacts } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      counter: 0
    }
  }
}).mount('#app');