const { DateTime } = luxon;

import { chats } from "./contacts.js";

const { createApp } = Vue;


  chats.contacts.forEach((contact, i) => {
    const genID = i + 1;
    contact.ID = genID;
    console.log(contact);
  });


createApp({
  data(){
    return{
      chats,
      counter: 0, 
      activeContactID: 1,
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
        "Nessuno ha mai detto che sarebbe stato facile, Frodo.",
        "Una volta, era un tempo così tranquillo...",
        "Tu devi decidere cosa fare con il tempo che ti è stato dato.",
        "Verranno giorni migliori, figlio mio.",
        "Non scoraggiarti, Frodo. Anche i più piccoli possono cambiare il corso della storia.",
        "E adesso si avvicina la fine. Il viaggio è quasi terminato...",
        "Il coraggio non manca ai hobbit. / Hobbit sono più coraggiosi di quanto si possa immaginare.",
        "Non tutti quelli che errano sono perduti.",
        "Nel tempo di guerra, le tue parole valgono poco.",
        "Una luce debolissima può gettare l'ombra più lunga.",
        "Non temere, per non temere nulla è la soluzione più saggia.",
        "Questo è il segno di un vero hobbit: hanno un gran coraggio.",
        "Anche gli alberi non sono al sicuro quando vi è troppo vento.",
        "La speranza rimane ancora viva.",
        "Il vecchio che è forte non ha bisogno di pietà.",
        "In ogni luogo ci sono ombre e oscurità, ma non disperare.",
        "Non posso esserti di grande aiuto, Sam, se io stesso sono solo un sogno.",
        "Non lasciare mai che il potere corrompa il tuo cuore.",
        "Il cuore dell'uomo è un campo di battaglia.",
        "Nel momento più buio, c'è sempre una via d'uscita.",
        "Non possiamo sfuggire al destino.",
        "Non si tratta di come guardiamo, ma di come decidiamo di reagire.",
        "Non sei mai stato un disastro.",
        "Il coraggio non può essere stimato.",
        "L'ombra è in lotta con la luce, ma non vince mai.",
        "La vera forza sta nel colpire in fretta e in silenzio.",
        "Non sottovalutare la forza dei piccoli.",
        "Dobbiamo combattere insieme, o perire insieme.",
        "Nessuna tenebra durerà per sempre.",
        "Non bisogna essere grandi per essere coraggiosi.",
        "Non è la nostra forza che ci definisce, ma la nostra volontà.",
        "Il vero coraggio è quello di continuare quando tutto sembra perduto.",
        "La speranza è la cosa più luminosa nelle situazioni più buie.",
        "Non dobbiamo mai arrenderci alla disperazione.",
        "Le avventure sono per chi le cerca.",
        "La vita è piena di sorprese, e molte di esse non piacevoli.",
        "Il destino ci mette di fronte a scelte difficili.",
        "Nessuna strada è mai semplice quando si viaggia verso la verità.",
        "La verità è spesso più dolorosa delle menzogne.",
        "Anche quando si viaggia nella disperazione, bisogna trovare la forza di sperare.",
        "La verità ci rende liberi, ma spesso è difficile da affrontare.",
        "La pace è un obiettivo degno, ma spesso elusivo.",
        "Anche nei momenti più bui, la speranza può brillare.",
        "Anche il più piccolo sforzo può portare grandi risultati.",
        "Nel momento del bisogno, la lealtà è la più preziosa delle virtù.",
        "La vera amicizia supera ogni difficoltà.",
      ]
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
    },
    replyMessage(){
      console.log(this.chats.contacts);

      this.activeContact.messages.push(
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
    },
    activeContact(){
      return this.chats.contacts.find(contact => contact.ID === this.activeContactID);
    }
    
   
    
  },
  
}).mount('#app');