
## Introduzione
1. I quattro principali parametri che influenzano le prestazioni di una rete sono la sua capacità di recapitare un messaggio al corretto destinatario o destinatari, la celerità ed efficienza con cui il messaggio viene recapitato e il jitter, ovvero un valore di quanto è variante la latenza della comunicazione durante la trasmissione dei pacchetti.
2. La comunicazione Simplex è una modalità di comunicazione che utilizza tutta la banda disponibile sul mezzo in quanto un nodo è sempre mittente e l'altro sempre ricevente, senza bisogno di alcun feedback dal ricevente, come nel caso della televisione; la modalità half-duplex consente agli attori di cambiare il loro ruolo tra mittente e ricevente, ma non è possibile ricevere e trasmettere simultaneamente, come nei walkie-talkie; la comunicazione in full duplex consente invece di ricevere e trasmettere simultaneamente, come nelle chiamate telefoniche, ma non è possibile utilizzare tutta la larghezza di banda per la comunicazione a causa dei controlli necessari alla gestione della comunicazione.
3. Il paradigma Client Server è un modello di comunicazione che sta alla base di Internet, che prevede la presenza di uno o più Client, che effettuano delle richieste di risorse di vario tipo, e restano in attesa di una Risposta da parte di un computer più potente detto Server, che in assenza di richieste attende, e all'occorrenza effettua elaborazioni o fornisce risorse ai client.
I vantaggi di questa architettura stanno nel fatto che la maggior parte della sicurezza e intelligenza sta in un singolo Nodo, ovvero il server, e aumentare le risorse della rete corrisponde ad aumentare le risorse del server; il problema principale sta nel fatto che se accade un guasto al server, tutta la rete è compromessa; nel modello P2P invece non vi sono ruoli fissi tra Client e Server, ma tutti i nodi sono interconnessi ma indipendenti, con loro sicurezza e potenza computazionale; il principale vantaggio è che se avviene un guasto a un nodo, la rete non è compromessa; uno svantaggio è che la scalabilità della rete non è centralizzata come in Client Server.
5. Un sistema distribuito è un software che esegue su un a rete di calcolatori; potremmo dire che la rete di calcolatori è il supporto fisico (o logico) che permette l'esecuzione del sistema distribuito (come ad esempio il World Wide Web che esegue sulla rete di calcolatori Internet). Nei sistemi distribuiti assume un ruolo fondamentale il middleware, ovvero parti di software che si occupano della coerenza del sistema distribuito, come allocazione delle risorse o sincronizzazione dei dati tra i vari nodi.

## Grids, Cloud e Virtualizzazione
6. - SaaS è un modello di servizio Cloud che sta per Software as a Service, e riguarda quei fornitori di servizi che offrono solamente programmi on demand al cliente.
   - PaaS è un modello che riguarda quei fornitori di servizi che offrono piattaforme di sviluppo ai clienti.
   - IaaS riguarda quei fornitori di servizi che offrono il pieno controllo dell'infrastruttura sottostante, come sistema operativo, configurazione di rete, sviluppo e programmi al cliente.
7. Le principali differenze tra un servizio connection oriented e uno connectionless sta nel fatto che quelli connection oriented si basano sul fatto che la comunicazione avvenga tramite l'instaurazione di una connessione, che venga poi utilizzata durante tutto lo scambio di dati, e poi venga chiusa, come il sistema telefonico. Un servizio connectionless invece funziona come la posta, ovvero non vi è l'instaurazione di una connessione fissa, ma la semplice spedizione di un messaggio alla volta, ognuno contenente l'indirizzo del destinatario, e i messaggi possono perciò percorrere tragitti diversi nella rete dal mittente al destinatario.
8. La virtualizzazione è una tecnica che consente di astrarre macchine hardware, e simularne il funzionamento ma a livello software. Questo porta numerosi benefici, come per le macchine virtuali che implementano degli spazi computazionali isolati, e il cui spostamento è facile quanto spostare un file. Tali ambienti virtualizzati sono incapsulati, in quanto un processo che esegue su una macchina virtuale non può uscire da quello spazio di memoria, isolando eventuali guasti.

11. Il principio di incapsulamento nei modelli a strati è necessario a gestire la complessità dello stack tecnologico che abilita le reti di calcolatori odierne. Di fatti, ogni strato dei modelli come OSI o TCP/IP ha uno specifico insieme di funzioni, che offrono ai livelli superiori come servizi pronti e i cui dettagli sono nascosti. Tipicamente ogni livello aggiunge ai dati ricevuti dal livello superiore un header, e talvolta Tail, che servono ai livelli inferiori per poter gestire la trasmissione correttamente, e all'arrivo al nodo ricevente per poter decapsulare il messaggio e ottenere i dati desiderati.
12. Le funzioni principali del livello Fisico sono:
    * ricevere un flusso di bit codificato dal livello datalink
    * tradurli in segnali fisici adatti al mezzo fisico, che sia fibra, rame o onde radio.
    * Definire la topologia della rete
    * Gestire la sincronizzazione dei bit e la gestione del flusso.
    Le funzioni del livello Datalink sono:
    * Indirizzamento hardware (MAC Address)
    * Correzione degli errori
    * Controllo dell'accesso al mezzo
    * Gestione dei collegamenti punto-punto
    Le funzioni del livello Rete sono:
    * Indirizzamento logico (IP Address)
    * Instradamento dei pacchetti tra diverse LAN (Routing)
    * Gestione della congestione



