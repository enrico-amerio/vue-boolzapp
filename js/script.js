import { chats } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      chats,
      counter: 0,
      newMessage: '',
      search: ''
    }
  },
  methods:{
    sendMessage(){
      this.chats.contacts[this.counter].messages.push(
        {
          date: '10/01/2020 15:50:00',
          message: `${this.newMessage}`,
          status: 'sent'
      },
      )
      this.newMessage= ''
      setTimeout(this.replyMessage, 1000);
    },
    replyMessage(){
      this.chats.contacts[this.counter].messages.push(
        {
          date: '10/01/2020 15:50:00',
          message: 'Ok',
          status: 'received'
      },)
    }
  },
  computed:{
    messagesFound(){
      return chats.contacts.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}).mount('#app');