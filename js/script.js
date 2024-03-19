const { DateTime } = luxon;

import { chats } from "./contacts.js";
import { reply } from "./replies.js";

const { createApp } = Vue;

chats.contacts.forEach((contact, i) => {
  const genID = i + 1;
  contact.ID = genID;
});

createApp({
  data(){
    return{
      chats,
      reply,
      counter: 0, 
      activeContactID: 1,
      newMessage: '',
      search: '',
     
    }
  },
  methods:{
    setActiveContact(contactID) {
      this.activeContactID = contactID;
    },
    sendMessage(){
      if(this.newMessage.length > 0){
        this.activeContact.messages.push(
          {
            date: `${DateTime.now().toFormat('D T')}`,
            message: `${this.newMessage}`,
            status: 'sent'
        },
        )
        this.newMessage= ''
        setTimeout(this.replyMessage, 1000);
      }
      this.scrollDown()
    },
    replyMessage(){
      this.activeContact.messages.push(
        {
          date: `${DateTime.now().toFormat('D TT')}`,
          message: `${this.getRandomReply()}`,
          status: 'received'
      },)
      this.scrollDown()
    },
    getRandomReply() {
      const randomNumber = Math.floor(Math.random() * this.reply.messageReplies.length);
      return this.reply.messageReplies[randomNumber];
    },
    scrollDown(){
      const chatContainer = document.querySelector('.chat');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  },
  updated() {
    this.scrollDown();
  },
  computed:{
    messagesFound(){
      return chats.contacts.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()))
    },
    activeContact(){
      return this.chats.contacts.find(contact => contact.ID === this.activeContactID);
    }
  },
}).mount('#app');