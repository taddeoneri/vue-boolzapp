const dt = luxon.DateTime;

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: [
                {
                    id:1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:33',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex: 0,
            newMessage: '',
            flag: false,
            hover: false,
            messagesUser: [
                {
                    message: 'Va bene',
                    status: 'received'
                },
                {
                    message: 'Adesso non sono disponibile',
                    status: 'received'
                },
                {
                    message: 'Ci vediamo presto',
                    status: 'received'
                },
                {
                    message: 'Buonanotte',
                    status: 'received'
                },
                {
                    message: 'Salutami tuo fratello',
                    status: 'received'
                },
                {
                    message: 'Fanstastico',
                    status: 'received'
                }
            ]
            
        }
    },
    methods: {
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        selectChat(index){
            this.activeIndex = index;
        },
        addMessage(activeIndex){
            if(this.newMex !== undefined && this.newMex.trim() !== ''){
                const newMessage = {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT),
                    message: this.newMex,
                    status: 'sent'
                };
                this.contacts[activeIndex].messages.push(newMessage);
                this.newMex = '';
                const newMessageUser = {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT),
                    message: this.messagesUser[this.getRandomInt(0, 5)].message,
                    status: 'received'
                };
                setTimeout(()=> {
                    this.contacts[activeIndex].messages.push(newMessageUser);
                    this.$nextTick(()=> {
                        this.$refs.msg[this.$refs.msg.length - 1].scrollIntoView();
                    });
                }, 1000);
            }
        },
        newArray(){
            const findChat = this.search;
            for(let i = 0; i < this.contacts.length; i++){
                if(!(this.contacts[i].name.toUpperCase().includes(findChat.toUpperCase()))){
                    this.contacts[i].visible = false;
                }else{
                    this.contacts[i].visible = true;
                }
            }
        },
        removeMessage(index){
            this.contacts[this.activeIndex].messages.splice(index, 1);
        }
    }
}).mount('#app');