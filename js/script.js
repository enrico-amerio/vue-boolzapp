import { boolzApp } from "./contacts";

const { createApp } = Vue;

createApp({
  data(){
    return{
      boolzApp
    }
  }
}).mount('#app');