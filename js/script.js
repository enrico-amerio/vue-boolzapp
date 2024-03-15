const { DateTime } = luxon;

import { chats } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      chats,
      counter: 0,
      newMessage: '',
      search: '',
      messageReplies: [
        "Non tutti coloro che vagano sono perduti.",
        "L'anello deve essere distrutto!",
        "Devi decidere cosa fare del tempo che ti è stato dato.",
        "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.",
        "Io sono l'amico di Gandalf il Grigio; non temo alcuna oscurità.",
        "E non è questo il senso del viaggio, scendere nella tomba mugghiante, per scoprire se è possibile uscirne?",
        "Che gli alberi siano con noi!",
        "Non posso portare l'Anello, ma posso portare te.",
        "Addio e arrivederci, ecco il sole tramonta!",
        "Ciò che faremo della vita di ogni uomo la farà tremare la terra.",
        "Una grande avventura, si sta spalancando davanti a noi.",
        "Non ti lascerò mai finché sarò vivo.",
        "Nessuno esce da queste terre con la vita.",
        "La luce è lì. Sta rischiarando la terra dell'ombra.",
        "Sono venuto con te, Sam. Io sono il tuo amico!",
        "Io sarei il tuo Sam!",
        "E' un piccolo, piccolo sogno di un piccolo, piccolo uomo che non contava niente.",
        "So che non è giusto, ma lo desidero tanto!",
        "Al di là di questi argini e di queste siepi vedo più chiaro il cielo!",
        "L'unico modo per tenere lontano il male è andare incontro a esso.",
        "Le vie del mondo si snodano per chi le osa percorrere.",
      ]
    }
  },
  methods:{
    sendMessage(){
      if(this.newMessage.length > 0){
        this.chats.contacts[this.counter].messages.push(
          {
            date: `${DateTime.now().toFormat('D T')}`,
            message: `${this.newMessage}`,
            status: 'sent'
        },
        )
        this.newMessage= ''
        setTimeout(this.replyMessage, 1000);
      }
    },
    replyMessage(){
      this.chats.contacts[this.counter].messages.push(
        {
          date: `${DateTime.now().toFormat('D TT')}`,
          message: `${this.getRandomReply()}`,
          status: 'received'
      },)
    },
    getRandomReply() {
      const randomNumber = Math.floor(Math.random() * this.messageReplies.length);
      return this.messageReplies[randomNumber];
    }
  },
  computed:{
    messagesFound(){
      return chats.contacts.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()))
    }
    
  },
  
}).mount('#app');