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
      this.scrollDown();
      this.goTopPlace();
    },
    replyMessage(){
      this.activeContact.messages.push(
        {
          date: `${DateTime.now().toFormat('D TT')}`,
          message: `${this.getRandomReply()}`,
          status: 'received'
      },)
      this.scrollDown();
      this.goTopPlace();

    },
    getRandomReply() {
      const randomNumber = Math.floor(Math.random() * this.reply.messageReplies.length);
      return this.reply.messageReplies[randomNumber];
    },
    scrollDown(){
      const chatContainer = document.querySelector('.chat');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    },
    goTopPlace(){
      const activeIndexData = this.chats.contacts.findIndex(contact => contact.ID === this.activeContactID);
      const activeContactData = this.chats.contacts.splice(activeIndexData, 1)[0];
      this.chats.contacts.unshift(activeContactData); 
      const activeIndex = this.messagesFound.findIndex(contact => contact.ID === this.activeContactID);
      const activeContact = this.messagesFound.splice(activeIndex, 1)[0];
      this.messagesFound.unshift(activeContact); 
      this.scrollUp();
      },
    scrollUp(){
      const contactContainer =  document.querySelector('.old-msg');
      contactContainer.scrollTop = 0;
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