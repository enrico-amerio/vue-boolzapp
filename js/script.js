import { contacts } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts
    }
  }
}).mount('#app');