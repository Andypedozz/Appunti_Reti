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

7. I modelli di deploy Public, Private e Hybrid differiscono in base al grado di disponibilità che offrono: la Public viene messa a disposizione tramite internet a una larga fetta di utenti: è flessibile, con costi limitati, scalabile, ma pecca in sicurezza, di fatti è adibita per utenti che non devono gestire dati sensibili.
Private è un modello di deploy mirato per una singola organizzazione, ma ha costi maggiori. Quella hybrid è un modello che combina più modelli, come ad esempio un implementazione che esegue attività non critiche come sviluppo e testing su un cloud pubblico, mentre le attività come gestione di dati sensibili vengono effettuate su un cloud privato.

8. La virtualizzazione è una tecnica che consente di astrarre macchine hardware, e simularne il funzionamento ma a livello software. Questo porta numerosi benefici, come per le macchine virtuali che implementano degli spazi computazionali isolati, e il cui spostamento è facile quanto spostare un file. Tali ambienti virtualizzati sono incapsulati, in quanto un processo che esegue su una macchina virtuale non può uscire da quello spazio di memoria, isolando eventuali guasti.

9. Una rete Grid è un insieme di dispositivi che collaborano condividendo risorse a un compito solitamente computazionalmente costoso e pesante. In questo tipo di rete si distinguono 3 ruoli:
* Nodo di controllo: un server che amministra la rete e tiene conto delle risorse
* Provider: un computer che mette a disposizione le proprie risorse al pool di rete
* Client: un computer che utilizza le risorse messe a disposizione sulla rete per effettuare processing.
Il software che si occupa di mantenere traccia coerente delle risorse disponibili sulla rete è il middleware.

11. Il principio di incapsulamento nei modelli a strati è necessario a gestire la complessità dello stack tecnologico che abilita le reti di calcolatori odierne. Di fatti, ogni strato dei modelli come OSI o TCP/IP ha uno specifico insieme di funzioni, che offrono ai livelli superiori come servizi pronti e i cui dettagli sono nascosti. Tipicamente ogni livello aggiunge ai dati ricevuti dal livello superiore un header, e talvolta Tail, che servono ai livelli inferiori per poter gestire la trasmissione correttamente, e all'arrivo al nodo ricevente per poter decapsulare il messaggio e ottenere i dati desiderati.

12. Le principali differenze tra un servizio connection oriented e uno connectionless sta nel fatto che quelli connection oriented si basano sul fatto che la comunicazione avvenga tramite l'instaurazione di una connessione, che venga poi utilizzata durante tutto lo scambio di dati, e poi venga chiusa, come il sistema telefonico. Un servizio connectionless invece funziona come la posta, ovvero non vi è l'instaurazione di una connessione fissa, ma la semplice spedizione di un messaggio alla volta, ognuno contenente l'indirizzo del destinatario, e i messaggi possono perciò percorrere tragitti diversi nella rete dal mittente al destinatario.

13. Le funzioni principali del livello Fisico sono:
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

14. Il modello TCP/IP è costituito da 4 layer:
   * Application
   * Transport
   * Internet
   * Network Interface
I livelli Application e Network Interface corrispondono, nel modello OSI, ai livelli Applicazione, Presentazione e Sessione, e ai livelli Datalink e Fisico.
15. Il ruolo del protocollo IP è quello di identificare a livello logico i nodi sulla rete, e di effettuare l'instradamento dei pacchetti tra LAN diverse. Il protocollo TCP invece lavora al livello 4 (trasporto), e si occupa di gestire la trasmissione dei segmenti end-to-end, da una LAN a un altra, garantendo la consegna, il corretto ordinamento dei pacchetti, la correzione degli errori, mitigare eventuali congestioni, e di effettuare anche multiplexing e demultiplexing, delle connessioni, che potrebbero essere multiple anche tra due singoli nodi, identificando i vari processi sulle macchine tramite le porte.
16. Le principali differenze tra il modello OSI e TCP/IP sono che il modello OSI è un modello teorico che sviscera in modo più dettagliato la struttura dello stack di rete, mentre il modello TCP/IP è un modello più concreto che riflette la costruzione reale che le reti hanno subito nel tempo.

17. La topologia a stella è una topologia di rete che prevede che i nodi siano connessi gli uni con gli altri tramite un dispositivo centrale, che sia un hub, uno switch, o un router. Il suo principale punto di vulnerabilità è proprio il device centrale, in quanto se subisse un guasto tutta la rete sarebbe compromessa. è ancora utilizzata perchè ogni device necessita di una singola porta per comunicare con la rete, è facile installarla, e presenta un facile rilevamento dei guasti.

18. Il numero di collegamenti necessari per connettere n dispositivi in una rete mesh completa è dato da n * (n - 1) / 2.

19. 

20. Le reti seguono la seguente classificazione in base alla estensione geografica:
   * PAN: le reti PAN sono reti che coinvolgono nodi a distanze nel range di pochi metri, e comprendono ad esempio le reti di dispositivi indossabili.
   * LAN: le reti LAN si estendono nel range di poche centinaia di metri, e costituiscono le reti domestiche, reti aziendali o reti scolastiche ad esempio.
   * MAN: le reti MAN stanno per Metropolitan Area Network e si estendono nel raggio del territorio cittadino, quindi qualche km.
   * WAN: le reti WAN comprendono l'interconnessione di diverse LAN e MAN, e si estendono per diversi km, includendo regioni o intere nazioni.

21. Una rete a commutazione di pacchetto è una rete che prevede che l'invio di ogni pacchetto possa seguire percorsi diversi in maniera indipendente, mentre una rete a commutazione di circuito prevede che l'instradamento dei pacchetti di una certa connessione segua lo stesso percorso.