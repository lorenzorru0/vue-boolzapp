const app = new Vue ({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                userStatus: "Offline",
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent', 
                        deleteMessage: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        deleteMessage: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        deleteMessage: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                userStatus: "Offline",
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent',
                    deleteMessage: false
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    deleteMessage: false
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received',
                    deleteMessage: false
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                userStatus: "Offline",
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    deleteMessage: false
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    deleteMessage: false
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    deleteMessage: false
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                userStatus: "Offline",
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    deleteMessage: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    deleteMessage: false
                }
                ],
            },
        ],
        currentContact: 0,
        newMessage: "",
        searchString: "",
        testContacts: [],
        randomMessages: [
            "S??",
            "?? cos??.",
            "Sarebbe bello.",
            "E come?",
            "Giustamente.",
            "Sta bene.",
            "Si pu?? anche convenire.",
            "Da quanto ?? stato detto almeno, pare cos??.",
            "Di' pure come.",
            "Sia pure cos??.",
            "Come no?",
            "Molto bene.",
            "Certamente.",
            "Tutto questo ?? stato assolutamente chiarito a sufficienza.",
            "Cos?? almeno sembra.",
            "Bene.",
            "Questo non lo sapevo.",
            "?? verissimo quel che dici.",
            "Ma ?? chiaro!",
            "Perfetto.",
            "Infatti ?? cos??.",
            "Come dici?",
            "Ma per forza!",
            "Ma certamente!",
            "E perch?? non dovrei?",
            "Si disse proprio cos??.",
            "Come potrebbe essere diversamente?",
            "Senza meno.",
            "Eh gi??!",
            "Dillo pure!",
            "Si trattava proprio di questo.",
            "Non ho capito.",
            "Pare.",
            "Bisogna ammetterlo senza riserva.",
            "Sta proprio cos??.",
            "?? vero.",
            "?? assolutamente cos??.",
            "Questo almeno ?? verosimile.",
            "Dici bene.",
            "Esattamente.",
            "C'?? proprio modo che questo avvenga soprattutto per questa ragione.",
            "Perch?? no?",
            "Difficilmente, sicuro!",
            "Non potrebbe affatto.",
            "Sicuro!",
            "Veramente no.",
            "E come non ammetterlo?",
            "Tu dici bene: bisogna fare cos??.",
            "Va chiamata cos??.",
            "Ebbene?",
            "Giusto.",
            "Come e a quale scopo dici questo?",
            "E perch???",
            "?? impossibile.",
            "Assolutamente no.",
            "?? assolutamente necessario.",
            "In che senso dici?",
            "?? molto chiaro.",
            "S??, nel modo pi?? assoluto.",
            "Ti seguo.",
            "Pare certamente cos??.",
            "Lo vedo anche troppo bene.",
            "E che cos'altro potremmo dire?",
            "Anche questo.",
            "Mi pare che questo punto si debba dibattere nei nostri ragionamenti.",
            "?? verissimo.",
            "Lo hai detto.",
            "Per quel che mi riguarda non mi sembra affatto che tu sbagli.",
            "Di' pure chiaro quel che vuoi dire.",
            "Lo vedo.",
            "Forse s??.",
            "Eh, s??!",
            "Tu dici il vero.",
            "?? molto giusto quello che dici.",
            "?? necessario.",
            "Sembra senza dubbio che la questione stia cos??.",
            "Sar?? cos??.",
            "Tutto questo a me pare che sia assurdo!",
            "Certamente s??.",
            "Verissimo.",
            "Senza dubbio.",
            "Assolutamente.",
            "?? proprio cos??.",
            "?? come dici.",
            "Tu dici cosa autentica e vera.",
            "Questo anch'io mi sento capace di affermarlo.",
            "S??, certamente.",
            "Forse.",
            "?? esatto.",
            "Ma questo ?? impossibile.",
            "Pressappoco.",
            "Ma certo.",
            "Senza remora alcuna, assolutamente.",
            "Nel modo pi?? evidente.",
            "Su per gi?? ?? cos??.",
            "Dici il giusto.",
            "?? giustissimo.",
            "A questo punto non ci sono arrivato.",
            "?? verosimile.",
            "Tutto il contrario."
        ],
        darkLigthModeView: false,
        darkLigthMode: false,
        darkLigthModeViewR: false,
        sectionLeftView: false
    },
    mounted() {
        this.copyContacts()
    },
    methods: {
        randomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        copyContacts: function() {
            this.contacts.forEach((contact) => {
                this.testContacts.push(contact);
            });
        },
        changeChat: function(contactsIndex) {
            this.currentContact = contactsIndex;
        },
        getDate: function() {
            let dateTime = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return dateTime;
        },
        getRandomMessage: function() {
            return this.randomMessages[this.randomNumber(0, this.randomMessages.length - 1)]
        },
        addMessage: function() {
            let currentDateTime = this.getDate();
            this.contacts[this.currentContact].messages.push({
                date: currentDateTime,
                message: this.newMessage,
                status: 'sent',
                deleteMessage: false
            });
            this.newMessage = "";
            setTimeout(() => {
                this.contacts[this.currentContact].userStatus = "Online";
                setTimeout(() => { 
                    let currentDateTime = this.getDate();
                    this.contacts[this.currentContact].messages.push({
                        date: currentDateTime,
                        message: this.getRandomMessage(),
                        status: 'received',
                        deleteMessage: false
                    });
                    setTimeout(() => {
                        this.contacts[this.currentContact].userStatus = `Last access on ${this.getDate()}`;
                    }, 3000);
                }, 3000);
            }, 3000);
            
            
        },
        searchChat: function() {
            let testSearchString = this.searchString.charAt(0).toLowerCase() + this.searchString.slice(1); 
            let testArray = [];

            this.contacts.forEach((contact) => {
                let testName = contact.name.charAt(0).toLowerCase() + contact.name.slice(1);
                if ( testName.includes(testSearchString) == true ) {
                    testArray.push(contact);
                }
            });

            this.testContacts = testArray;

        },
        toggleDeleteMessage: function(messageIndex) {
            this.contacts[this.currentContact].messages[messageIndex].deleteMessage = !this.contacts[this.currentContact].messages[messageIndex].deleteMessage;
        },
        deleteMessageFunction: function(messageIndex) {
            this.contacts[this.currentContact].messages.splice(messageIndex, 1);
        },
        toggleLigthDarkMode: function() {
            this.darkLigthModeView = !this.darkLigthModeView;
        },
        darkMode: function() {
            this.darkLigthMode = !this.darkLigthMode;
            this.darkLigthModeView = false;
        },
        toggleLigthDarkModeR: function () {
            this.darkLigthModeViewR = !this.darkLigthModeViewR;
        },
        darkModeR: function() {
            this.darkLigthMode = !this.darkLigthMode;
            this.darkLigthModeViewR = false;
        },
        sectionLeftViewFunction: function() {
            this.sectionLeftView = !this.sectionLeftView;
        }
    }
});