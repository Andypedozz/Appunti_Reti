## Descrizione dei servizi di Trasporto
Il livello di trasporto rappresenta il nucleo della gerarchia protocollare: utilizza i servizi del livello di rete per garantire il trasferimento dati tra processi su host distinti, offrendo un grado di affidabilità definito e indipendente dalle tecnologie di rete sottostanti. Il suo obiettivo è fornire un servizio efficiente, affidabile e economicamente sostenibile agli utenti (livelli superiori), sfruttando le funzionalità del livello inferiore. Le componenti che implementano tali funzioni sono le entità di trasporto, collocate tipicamente nel kernel, in processi utente, librerie applicative o hardware di rete.

Il livello di trasporto supporta due modalità di servizio: orientata alla connessione e non orientata. In entrambi i casi, la comunicazione si articola in tre fasi fondamentali: instaurazione della connessione, trasferimento dei dati e rilascio. Un aspetto cruciale è la capacità di aumentare l’affidabilità rispetto al livello di rete: in reti non affidabili, può rilevare errori o perdite e correggerli tramite ritrasmissioni; in reti orientate alla connessione, può ristabilire una connessione interrotta durante una trasmissione. In questo modo, isola i livelli superiori dalle imperfezioni e dalla complessità della rete sottostante.

### Primitive
Per permettere l’interazione con le applicazioni, il livello di trasporto espone un’interfaccia basata su primitive. In un modello client-server, il server invoca LISTEN per mettersi in attesa di richieste, bloccandosi fino all’arrivo di un client. Il client utilizza CONNECT per avviare la comunicazione: questa operazione genera l’invio di un segmento (unità dati del livello di trasporto) contenuto in un pacchetto di rete, a sua volta incapsulato in un frame. Il segmento rappresenta quindi l’unità logica di comunicazione tra entità di trasporto.

Quando il server riceve una richiesta di connessione (CONNECTION REQUEST), verifica la presenza di una LISTEN attiva; in caso positivo, accetta la connessione inviando un segmento di conferma (CONNECTION ACCEPTED), sbloccando entrambe le parti e stabilendo il canale comunicativo. Lo scambio dati avviene tramite primitive SEND e RECEIVE, generalmente bloccanti: un processo in attesa (RECEIVE) viene sbloccato alla ricezione di un segmento e può elaborarlo e rispondere. Il corretto funzionamento richiede coordinamento tra le parti nella gestione delle operazioni di invio e ricezione.

La terminazione della connessione è necessaria per liberare risorse interne e può avvenire secondo due modalità. Nel rilascio asimmetrico, un lato invia DISCONNECT e la connessione viene immediatamente chiusa anche per l’altro lato. Nel rilascio simmetrico, invece, ogni direzione viene chiusa indipendentemente: un lato può cessare l’invio mantenendo la capacità di ricezione. La connessione si considera definitivamente chiusa solo quando entrambe le parti hanno inviato il proprio DISCONNECT.

Infine, il comportamento del sistema può essere formalizzato tramite un diagramma di stati, in cui ogni transizione è determinata da eventi come chiamate alle primitive da parte dell’utente o arrivo di segmenti dalla rete. Questo modello descrive in modo rigoroso l’evoluzione della connessione durante le fasi di apertura e chiusura.

### Socket di Berkeley
Le socket di Berkeley rappresentano un insieme di primitive di trasporto utilizzate principalmente con TCP, progettate per offrire maggiore flessibilità e controllo rispetto al modello astratto di base. Pur mantenendo la stessa logica generale (instaurazione, trasferimento e terminazione della connessione), introducono meccanismi più articolati per la gestione delle comunicazioni.

Il processo lato server inizia con la creazione di una socket, seguita dall’associazione a un indirizzo tramite la primitiva **BIND**, operazione fondamentale per rendere il servizio raggiungibile dai client remoti. Successivamente, il server invoca **LISTEN**, che abilita la ricezione di richieste di connessione e consente di gestire più tentativi simultanei mediante una coda di pending connections; a differenza del modello semplificato, questa operazione non blocca l’esecuzione.

Quando una richiesta arriva, il server utilizza **ACCEPT**, che genera una nuova socket dedicata alla singola connessione. Questo meccanismo permette la gestione concorrente di più client: la socket originale rimane in ascolto, mentre le nuove socket gestiscono le sessioni attive.

Dal lato client, la comunicazione viene avviata tramite la primitiva **CONNECT**, che stabilisce la connessione con il server. Una volta completata questa fase, entrambe le estremità possono scambiarsi dati attraverso le primitive **SEND** e **RECEIVE**, mantenendo una comunicazione bidirezionale affidabile.

### Elementi dei protocolli di Trasporto
Il servizio di trasporto è realizzato tramite protocolli di trasporto che operano tra entità di trasporto remote. Questi protocolli condividono alcune funzionalità con quelli del livello data link, come controllo degli errori, gestione dell’ordine dei dati e controllo di flusso. Tuttavia, le differenze tra i due livelli derivano principalmente dal diverso contesto operativo.

Nel livello data link, la comunicazione avviene tra nodi adiacenti attraverso un canale fisico diretto (cablato o wireless); al contrario, nel livello di trasporto il “canale” è costituito dall’intera rete, introducendo maggiore complessità e variabilità nel comportamento della comunicazione.

Tra le principali differenze:

* **Indirizzamento esplicito**: mentre nel data link il destinatario è implicitamente determinato dal collegamento fisico, nel trasporto è necessario specificare esplicitamente l’indirizzo del destinatario (processo/host).
* **Instaurazione della connessione più complessa**: nel data link l’altra estremità è sempre presente e nota; nel trasporto, invece, la creazione della connessione richiede meccanismi più articolati per localizzare e sincronizzare le entità coinvolte.
* **Persistenza e comportamento della rete**: a livello data link i frame non subiscono ritardi arbitrari o percorsi imprevedibili; nel trasporto, invece, la rete può memorizzare temporaneamente i pacchetti, causando ritardi, perdite o duplicazioni, rendendo necessari meccanismi avanzati di gestione.
* **Buffering e controllo di flusso**: entrambi i livelli li implementano, ma nel trasporto devono gestire un numero elevato e dinamico di connessioni, richiedendo una gestione più flessibile ed efficiente delle risorse di buffer.

### Indirizzamento
Nel livello di trasporto, l’indirizzamento è necessario per identificare in modo univoco il processo applicativo destinatario di una comunicazione. Quando un’applicazione vuole stabilire una connessione (o inviare dati, nel caso non orientato alla connessione), deve specificare esattamente quale processo remoto deve ricevere i dati.

La soluzione consiste nell’utilizzo di indirizzi di trasporto associati a punti terminali su cui i processi restano in ascolto. In Internet, questi endpoint sono noti come **porte (port)**. In termini generali, tali punti di accesso al servizio di trasporto sono chiamati **TSAP (Transport Service Access Point)**.

A livello di rete esiste un concetto analogo: gli **NSAP (Network Service Access Point)**, che identificano gli host nella rete. Gli indirizzi IP rappresentano un esempio concreto di NSAP.

La comunicazione completa si struttura quindi su due livelli di indirizzamento:

* gli **NSAP** identificano le macchine nella rete;
* i **TSAP** identificano i singoli processi all’interno di ciascuna macchina.

Una connessione di trasporto avviene collegando un TSAP locale a un TSAP remoto, sfruttando gli NSAP dei rispettivi host per instradare i dati. L’introduzione dei TSAP è fondamentale perché un singolo host (dotato di un unico NSAP) può eseguire più processi contemporaneamente: senza un ulteriore livello di identificazione, non sarebbe possibile distinguere i diversi destinatari interni.

### Stabilire una connessione
L’instaurazione di una connessione nel livello di trasporto è un processo complesso a causa dell’inaffidabilità intrinseca della rete: i pacchetti possono essere persi, ritardati, duplicati o arrivare fuori ordine. Un semplice schema richiesta/accettazione non è sufficiente, perché il comportamento non deterministico della rete può generare ambiguità e errori.

Un caso critico si verifica in condizioni di congestione: gli acknowledgment possono subire ritardi o non arrivare affatto, inducendo il mittente a ritrasmettere i pacchetti. Questo aumenta ulteriormente il traffico, peggiorando la congestione. Inoltre, in reti a datagrammi, i pacchetti possono seguire percorsi diversi, arrivando in ritardo o in sequenza errata. In scenari sensibili (es. transazioni finanziarie), tali fenomeni possono causare duplicazioni o inconsistenze, come operazioni eseguite più volte.

Per mitigare questi problemi, si introducono meccanismi per limitare la “vita” dei pacchetti, evitando che duplicati ritardati interferiscano con nuove comunicazioni. Tra le tecniche utilizzate:

* limitazioni progettuali della rete;
* contatori di salti (hop count);
* timestamp.

Un approccio più strutturato, proposto da **Tomlinson**, prevede l’uso di un orologio locale per generare numeri di sequenza iniziali. Ogni host dispone di un contatore che avanza nel tempo (anche durante inattività), e i bit meno significativi vengono utilizzati come numero di sequenza iniziale. Questo consente di distinguere segmenti nuovi da duplicati, evitando ambiguità legate al riutilizzo dei numeri di sequenza. Tuttavia, tra connessioni successive, non essendo mantenuta memoria dei numeri precedenti, resta il problema di riconoscere richieste di connessione duplicate.

La soluzione a questo limite è l’**handshake a tre vie (three-way handshake)**, che garantisce la sincronizzazione reciproca tra le due entità. Il meccanismo funziona così:

1. l’host mittente invia una richiesta di connessione con un numero di sequenza iniziale (x);
2. il destinatario risponde con un acknowledgment di (x) e comunica il proprio numero iniziale (y);
3. il mittente conferma (y), completando la sincronizzazione.

Questo processo assicura che entrambe le parti verifichino la validità della connessione e che i segmenti coinvolti non siano duplicati residui della rete, rendendo l’instaurazione della connessione affidabile nonostante le incertezze del mezzo trasmissivo.

### Rilascio di una connessione
Il rilascio di una connessione è concettualmente più semplice rispetto alla sua instaurazione, ma presenta comunque diverse criticità operative. Esistono due modalità principali:

* **rilascio asimmetrico**: analogo al sistema telefonico, in cui la connessione viene chiusa immediatamente quando una delle due parti termina;
* **rilascio simmetrico**: considera la connessione come composta da due flussi unidirezionali indipendenti, richiedendo la chiusura separata di ciascuno.

Nel caso simmetrico, il rilascio avviene tramite un meccanismo simile a un handshake. Un lato invia un segmento **DR (Disconnection Request)**; il destinatario risponde con un proprio DR e avvia un timer per gestire eventuali perdite. Quando il mittente riceve questo secondo DR, invia un **ACK** e rilascia la connessione; infine, anche il destinatario, ricevuto l’ACK, completa il rilascio. La chiusura implica la rimozione dello stato della connessione dalle strutture interne dell’entità di trasporto e la notifica all’applicazione.

Tuttavia, la perdita di segmenti introduce diversi scenari problematici:

* se l’ACK finale viene perso, il destinatario utilizza un timeout per chiudere comunque la connessione;
* se il secondo DR viene perso, il mittente iniziale effettua una ritrasmissione dopo timeout, ripetendo la procedura;
* se più ritrasmissioni falliscono, dopo un numero massimo di tentativi (N), il mittente abbandona e chiude la connessione.

Quest’ultimo caso può generare una situazione critica detta **connessione aperta a metà**: un lato considera la connessione chiusa, mentre l’altro rimane attivo, non avendo ricevuto alcuna richiesta di disconnessione.

Possibili soluzioni teoriche (come continuare a ritrasmettere indefinitamente fino a risposta) introducono altri problemi: se l’altro lato ha già terminato per timeout, non risponderà mai, causando un ciclo infinito; viceversa, eliminare i timeout porta a connessioni bloccate. Ne deriva un compromesso progettuale: i protocolli adottano meccanismi basati su timeout e ritrasmissioni limitate, accettando una piccola probabilità di inconsistenza pur garantendo efficienza e terminazione del processo.

### Controllo di flusso e degli errori
Nei protocolli di trasporto, l’uso di **finestre scorrevoli di grandi dimensioni** rende il **buffering** un elemento critico. Poiché un host può gestire simultaneamente molte connessioni, ciascuna con i propri dati in transito, è necessaria una quantità significativa di memoria buffer sia lato mittente sia lato destinatario. In particolare, il mittente deve conservare i segmenti già inviati ma non ancora confermati (acknowledged), per poterli eventualmente ritrasmettere in caso di perdita.

La gestione dei buffer dipende dalla dimensione dei segmenti:

* con segmenti di dimensione uniforme, è efficiente utilizzare **buffer a dimensione fissa**, uno per segmento;
* con segmenti di dimensioni variabili, questo approccio diventa inefficiente: buffer troppo grandi causano spreco di memoria, mentre buffer piccoli richiedono frammentazione e gestione più complessa;
* una soluzione alternativa è l’uso di **buffer a dimensione variabile**, che ottimizzano l’uso della memoria ma aumentano la complessità gestionale;
* un’altra strategia consiste nell’assegnare **un unico buffer circolare per connessione**, soluzione semplice e indipendente dalla dimensione dei segmenti, ma efficiente solo se le connessioni sono intensamente utilizzate.

Un approccio più avanzato prevede la **gestione dinamica dei buffer**, separando il meccanismo di buffering dagli acknowledgment. In questo modello, la dimensione della finestra diventa variabile:

* il mittente richiede un certo numero di buffer;
* il destinatario concede una quantità compatibile con le proprie risorse;
* ogni segmento inviato riduce la quota disponibile del mittente, che deve fermarsi quando raggiunge zero;
* il destinatario comunica nuove disponibilità di buffer insieme agli acknowledgment.

Questo schema è adottato da TCP, che utilizza il campo **Window size** per indicare la quantità di dati che il mittente può ancora trasmettere. Il risultato è un controllo dinamico del flusso, adattato alle risorse del destinatario.

Quando il buffering non rappresenta più il limite principale, emerge un altro vincolo: la **capacità della rete**. Per affrontarlo, si introduce un meccanismo di **controllo della congestione**, in cui il mittente regola dinamicamente la dimensione della finestra in base alla capacità effettiva della rete. In questo modo, una finestra scorrevole dinamica svolge una doppia funzione:

* controllo di flusso (basato sui buffer del destinatario);
* controllo di congestione (basato sulla capacità della rete).

Poiché la capacità disponibile può variare nel tempo, la dimensione della finestra deve essere adattata continuamente, rendendo il sistema reattivo alle condizioni dinamiche della rete.

### Multiplexing
Il **multiplexing** nel livello di trasporto consente di gestire simultaneamente più comunicazioni utilizzando risorse di rete condivise. Questa necessità nasce, ad esempio, quando un host dispone di un unico indirizzo di rete (NSAP/IP): tutte le connessioni di trasporto devono quindi transitare attraverso lo stesso endpoint di rete. Di conseguenza, quando un segmento arriva, il livello di trasporto deve determinare a quale processo applicativo destinarlo. Questa operazione di demultiplexing si basa tipicamente sull’uso delle porte (TSAP), permettendo di distinguere più connessioni logiche che condividono lo stesso indirizzo di rete.

In questo scenario, più connessioni di trasporto distinte risultano “multiplexate” su una singola connessione di rete, ottimizzando l’uso delle risorse disponibili e consentendo la coesistenza di più flussi applicativi sullo stesso host.

Un caso opposto è il **multiplexing inverso (inverse multiplexing)**: qui una singola connessione di trasporto viene distribuita su più connessioni o percorsi di rete. Questo approccio è utile quando si desidera aumentare la banda disponibile o migliorare l’affidabilità. Il traffico viene suddiviso tra più canali (ad esempio con una strategia round-robin), sfruttando percorsi multipli per ottenere prestazioni complessive migliori.

In sintesi:

* il multiplexing “classico” aggrega più connessioni di trasporto su un’unica risorsa di rete;
* il multiplexing inverso suddivide una singola connessione su più risorse di rete, migliorando throughput e robustezza.

### Ripristino dopo un crash
Il **ripristino dopo un crash** nel livello di trasporto è un problema critico soprattutto in presenza di connessioni lunghe (es. trasferimenti di grandi file). Se il guasto riguarda la rete o i router, il recupero è relativamente semplice: i protocolli di trasporto sono progettati per gestire perdite tramite ritrasmissioni. La situazione diventa invece complessa quando il crash coinvolge un host, poiché lo stato delle connessioni (buffer, numeri di sequenza, avanzamento) viene perso.

Un caso tipico riguarda un server che, durante una trasmissione (ad esempio con protocollo **stop-and-wait**), subisce un crash e viene riavviato: le sue strutture interne sono azzerate e non è più in grado di determinare quali dati siano già stati ricevuti ed elaborati. Una possibile strategia è notificare il crash ai client, chiedendo loro lo stato della connessione. I client possono trovarsi in:

* **S1**: segmento inviato ma non ancora confermato;
* **S0**: nessun segmento in sospeso.

In teoria, il client dovrebbe ritrasmettere solo nello stato S1. Tuttavia, questa logica non è affidabile a causa della separazione tra due operazioni lato server:

* invio dell’**acknowledgement (ACK)**;
* consegna dei dati all’applicazione.

Se il server invia l’ACK ma crasha prima di consegnare i dati, il client crede che il segmento sia stato elaborato (stato S0) e non lo ritrasmette → **perdita di dati**.
Viceversa, se il server consegna i dati ma crasha prima di inviare l’ACK, il client ritrasmette → **duplicazione dei dati**.

Cambiare l’ordine delle operazioni (prima scrittura poi ACK, o viceversa) non risolve il problema: introduce semplicemente errori opposti. In generale, esistono molte combinazioni tra:

* comportamento del server (ordine tra ACK, scrittura, crash);
* strategia del client (ritrasmettere sempre, mai, solo in S0 o solo in S1).

L’analisi mostra che **per ogni combinazione esiste una sequenza di eventi che porta al fallimento**, cioè alla perdita o duplicazione dei dati. Questo dimostra un limite fondamentale: senza meccanismi aggiuntivi, non è possibile garantire un ripristino perfetto dopo un crash.

In sintesi, il problema nasce dall’impossibilità di mantenere una visione coerente dello stato tra client e server dopo un’interruzione improvvisa. I protocolli reali affrontano questa difficoltà introducendo soluzioni più avanzate (es. numeri di sequenza persistenti, logging, protocolli idempotenti), ma non esiste una strategia semplice che elimini completamente il rischio di inconsistenza.

### Protocolli a finestra scorrevole
Durante la fase di utilizzo di una connessione, i protocolli di trasporto devono gestire due aspetti fondamentali: **controllo degli errori** (garantire l’integrità dei dati) e **controllo di flusso** (evitare che un mittente veloce sovraccarichi un destinatario lento). Questi problemi vengono affrontati tramite meccanismi già noti dal livello data link, ma adattati al contesto end-to-end del trasporto.

I principali strumenti utilizzati sono:

* **codici di rilevamento degli errori** (checksum), per verificare l’integrità dei dati ricevuti;
* **numeri di sequenza**, che identificano univocamente i segmenti e permettono di gestire ritrasmissioni;
* **ARQ (Automatic Repeat reQuest)**, cioè ritrasmissione dei segmenti finché non viene ricevuto un acknowledgment;
* **finestre di trasmissione**, che limitano il numero di segmenti non ancora confermati (in sospeso).

Il caso più semplice è il protocollo **stop-and-wait**, in cui può essere trasmesso un solo segmento alla volta. Tuttavia, per migliorare le prestazioni, si utilizzano **finestre scorrevoli (sliding window)**, che permettono di inviare più segmenti consecutivamente senza attendere ogni singolo acknowledgment, introducendo il **pipelining** e aumentando l’efficienza su collegamenti ad alta latenza o alta capacità.

Nonostante questi meccanismi esistano anche nel livello data link, nel livello di trasporto assumono un ruolo diverso:

* il controllo degli errori a livello data link è **locale (link-by-link)**, mentre quello del trasporto è **end-to-end**, coprendo l’intero percorso tra sorgente e destinazione;
* questo è fondamentale perché errori possono verificarsi anche all’interno dei nodi intermedi (es. router), dove i controlli del data link non sono applicati.

Questa osservazione è formalizzata nell’**end-to-end argument** di Saltzer: i controlli end-to-end sono essenziali per la correttezza, mentre quelli locali migliorano soprattutto le prestazioni, evitando la propagazione inutile di dati corrotti.

Un’altra differenza riguarda la **scala (grado)** dei meccanismi:

* in reti con basso prodotto banda-ritardo (es. wireless o collegamenti satellitari semplici), una finestra molto piccola o lo stop-and-wait sono sufficienti;
* in reti ad alta capacità e latenza (es. backbone Internet), il prodotto banda-ritardo è elevato, quindi è necessario mantenere molti segmenti “in volo” per sfruttare appieno la banda disponibile.

Ad esempio, in una connessione con **RTT elevato**, limitarsi allo stop-and-wait riduce drasticamente il throughput, perché il mittente resta inattivo in attesa degli acknowledgment. L’uso di finestre scorrevoli grandi consente invece di mantenere un flusso continuo di dati, migliorando significativamente le prestazioni.

In sintesi, i protocolli a finestra scorrevole nel livello di trasporto estendono e generalizzano i meccanismi del data link, adattandoli a un contesto end-to-end più complesso, dove variabilità della rete, latenza e affidabilità richiedono maggiore flessibilità ed efficienza.

## Il protocollo di trasporto internet senza connessione: UDP
Nel livello di trasporto Internet esistono due protocolli fondamentali, complementari tra loro: uno **non orientato alla connessione** e uno **orientato alla connessione**. Il primo è **UDP (User Datagram Protocol)**, che si limita a trasportare datagrammi tra applicazioni senza instaurare connessioni, lasciando alle applicazioni stesse la gestione di affidabilità e controllo. Il secondo è **TCP**, che invece integra un insieme completo di funzionalità: instaurazione e gestione della connessione, ritrasmissioni per garantire affidabilità, controllo di flusso e controllo di congestione.

UDP fornisce un servizio minimale ma efficiente, descritto nell’RFC 768. I segmenti UDP sono composti da un’intestazione fissa di 8 byte seguita dal payload. L’elemento chiave dell’intestazione è la presenza delle **porte sorgente e destinazione**, che permettono il **demultiplexing** dei dati verso il processo applicativo corretto all’interno dell’host. Quando un pacchetto UDP arriva, il sistema operativo utilizza la porta di destinazione per consegnare il payload all’applicazione associata, stabilita tramite meccanismi come la primitiva **BIND**. In questo senso, le porte funzionano come identificatori logici (simili a caselle postali) che distinguono i diversi processi su uno stesso host.

La porta sorgente è utile soprattutto per le risposte: copiandola nel campo di destinazione del pacchetto di ritorno, il destinatario può indirizzare correttamente la risposta al processo originario. Il campo **length** indica la dimensione totale del segmento UDP (header + dati), con un massimo limitato dalla dimensione dei pacchetti IP. È inoltre presente un campo **checksum opzionale**, che consente un controllo end-to-end dell’integrità dei dati.

Il checksum UDP viene calcolato sommando in complemento a uno parole da 16 bit relative a intestazione, dati e una **pseudointestazione IP**, che include indirizzi sorgente e destinazione, numero di protocollo e lunghezza del segmento. Questa scelta migliora la capacità di rilevare errori end-to-end, ma introduce una leggera violazione della stratificazione dei livelli, poiché coinvolge informazioni appartenenti al livello IP. TCP utilizza un meccanismo analogo per il proprio controllo di errore.

UDP non implementa funzioni avanzate tipiche dei protocolli di trasporto completi: non gestisce **controllo di flusso**, **controllo di congestione** né **ritrasmissioni automatiche**. Tutti questi aspetti vengono eventualmente gestiti dalle applicazioni. Di conseguenza, UDP offre un’interfaccia minimale verso IP, aggiungendo solo il multiplexing tramite porte e un controllo opzionale degli errori.

Questo approccio risulta particolarmente utile in applicazioni semplici e a bassa latenza, come comunicazioni client-server con scambi brevi. In questi casi, l’assenza di connessione riduce l’overhead: bastano pochi messaggi (richiesta e risposta), senza le fasi di setup e teardown tipiche di TCP. Un esempio tipico è il **DNS**, in cui il client invia una richiesta UDP contenente un nome host e riceve in risposta l’indirizzo IP corrispondente, senza stabilire alcuna connessione persistente.

### Remote Procedure Call: RPC
Il **Remote Procedure Call (RPC)** nasce dall’analogia tra comunicazione di rete e chiamate a funzione nei linguaggi di programmazione: in entrambi i casi si parte da un insieme di parametri e si ottiene un risultato. Questa corrispondenza ha portato a modellare le interazioni richiesta/risposta tra host come vere e proprie chiamate a procedura, semplificando la progettazione delle applicazioni distribuite.

L’obiettivo dell’RPC è rendere una chiamata remota il più possibile simile a una chiamata locale, nascondendo i dettagli della comunicazione di rete al programmatore. Un esempio tipico è una funzione come `getIPaddress(hostname)`, che internamente invia una richiesta (ad esempio tramite UDP a un server DNS), attende la risposta, gestisce eventuali timeout e ritenta se necessario, senza esporre questi meccanismi all’applicazione.

L’architettura RPC si basa su componenti intermedi chiamati **stub**:

* il **client stub**, che rappresenta la procedura remota nel processo client;
* il **server stub**, che rappresenta la procedura nel processo server.

Il client non invoca direttamente la procedura remota, ma chiama il client stub come se fosse una funzione locale. Questo stub si occupa di:

* serializzare (marshalling) i parametri;
* inviarli attraverso la rete;
* ricevere la risposta.

Sul lato server, il server stub riceve i messaggi, estrae i parametri e invoca la procedura reale. Al termine, il risultato viene nuovamente impacchettato e inviato indietro al client stub, che lo restituisce al programma chiamante.

In questo modo gli stub mascherano completamente la natura non locale della comunicazione, rendendo trasparente il fatto che la chiamata attraversi la rete e non avvenga nello stesso spazio di indirizzamento.

### Protocolli di Trasporto Real-Time
I protocolli di **trasporto real-time** nascono dall’esigenza di supportare applicazioni multimediali su Internet (audio, video streaming, VoIP, videoconferenza), dove non basta la semplice consegna affidabile dei dati, ma è fondamentale anche il rispetto dei vincoli temporali. In questo contesto, molte applicazioni hanno inizialmente sviluppato soluzioni ad hoc, fino a convergere verso un protocollo generico riutilizzabile: **RTP (Real-Time Transport Protocol)**, definito nell’RFC 3350.

RTP si colloca nello stack di rete come un meccanismo di trasporto per dati multimediali, tipicamente sopra UDP. La sua funzione principale è trasportare flussi audio e video, mentre aspetti critici come la sincronizzazione temporale e la riproduzione corretta dei contenuti sono gestiti soprattutto dal lato ricevente. Questo include il buffering e il riordinamento dei pacchetti per garantire una riproduzione fluida nel tempo corretto, nonostante ritardi e variazioni della rete.

La posizione di RTP nello stack protocollare è ambigua: da un lato è implementato nello spazio utente e strettamente integrato con le applicazioni, quindi può essere considerato un protocollo di livello applicazione; dall’altro lato fornisce funzionalità tipiche del trasporto (gestione dei flussi multimediali indipendente dall’applicazione). Per questo motivo, la sua collocazione più accurata è quella di un **protocollo di trasporto realizzato a livello applicazione**, progettato per offrire servizi generici di supporto al real-time senza essere legato a una singola applicazione.

In sintesi, RTP rappresenta uno strato intermedio specializzato che colma il gap tra trasporto tradizionale (come UDP) e le esigenze delle applicazioni multimediali sensibili al tempo, permettendo una gestione uniforme di audio e video su reti IP.

### RTP
RTP (Real-Time Transport Protocol) ha come funzione principale il **multiplexing di flussi multimediali real-time** (audio/video) all’interno di un unico flusso di pacchetti UDP. Questi flussi possono essere inviati sia in modalità unicast sia multicast. Poiché RTP si appoggia su UDP, non introduce trattamenti speciali a livello di rete: i router non distinguono i pacchetti RTP e non vengono garantite affidabilità, consegna ordinata o assenza di ritardi o perdite.

Per questo motivo, RTP è progettato per lavorare in ambienti **lossy e a latenza variabile**, dove la ritrasmissione non è efficace: un pacchetto ritrasmesso arriverebbe spesso troppo tardi per essere utile. Di conseguenza, RTP non utilizza né acknowledgment né meccanismi di ritrasmissione, delegando la gestione delle perdite alle applicazioni (ad esempio, salto di frame video o interpolazione nei flussi audio).

Ogni pacchetto RTP contiene un payload che può includere uno o più campioni multimediali, codificati secondo diversi schemi. RTP definisce infatti **profili e formati di codifica** per garantire interoperabilità (es. PCM, GSM, MP3, codifiche predittive o compresse). Il protocollo segnala il tipo di codifica tramite un campo dell’intestazione, ma non esegue direttamente la codifica.

L’intestazione RTP è composta da tre parole da 32 bit più eventuali estensioni. I principali campi hanno funzioni specifiche:

* **Version**: versione del protocollo (attualmente 2).
* **P (padding)**: indica riempimento per allineamento a multipli di 4 byte.
* **X (extension)**: segnala la presenza di un header esteso per funzionalità non standard.
* **CC (CSRC count)**: numero di sorgenti contribuenti (fino a 15).
* **M (marker)**: bit applicativo per marcare eventi significativi (es. inizio frame audio/video).
* **Payload type**: identifica il tipo di codifica del contenuto.
* **Sequence number**: numero incrementale per rilevare perdita o disordine dei pacchetti.
* **Timestamp**: indica il tempo di generazione del primo campione nel pacchetto, fondamentale per la sincronizzazione e la riproduzione fluida.
* **SSRC (Synchronization Source Identifier)**: identifica in modo univoco il flusso RTP.
* **CSRC (Contributing Source Identifiers)**: lista delle sorgenti che contribuiscono al flusso, tipica dei mixer.

In sintesi, RTP non si occupa di garantire affidabilità, ma di fornire **metadati temporali e strutturali** che permettono al ricevente di ricostruire correttamente flussi multimediali nonostante ritardi, perdita e variabilità della rete.

### RTCP
RTCP (Real-Time Transport Control Protocol) è il protocollo complementare di RTP, definito insieme a esso nell’RFC 3550, ma con una funzione distinta: non trasporta dati multimediali, bensì informazioni di controllo e monitoraggio del flusso.

La sua funzione principale è fornire **feedback dal ricevente alla sorgente** sulle condizioni della rete e della trasmissione, includendo metriche come ritardo, jitter, perdita di pacchetti, congestione e disponibilità di banda. Queste informazioni vengono utilizzate dai sistemi di codifica per adattare dinamicamente la qualità del flusso: ad esempio aumentando il bitrate quando la rete è stabile oppure riducendolo in caso di congestione, con possibili cambi di codifica (da formati compressi come MP3 a PCM o codifiche più leggere).

RTCP consente quindi un meccanismo di **adattamento dinamico della qualità del servizio**, permettendo al mittente di ottimizzare continuamente la trasmissione in base alle condizioni reali della rete. Il feedback influisce anche sulla scelta del tipo di payload, che può variare durante la sessione in funzione delle risorse disponibili.

Un problema rilevante è che i messaggi RTCP vengono inviati a tutti i partecipanti di una sessione multicast. In scenari con molti utenti, questo può generare un sovraccarico significativo di traffico di controllo. Per evitare la saturazione della rete, il protocollo regola automaticamente la frequenza dei report RTCP, riducendola in modo da limitare il consumo complessivo di banda (tipicamente a una frazione piccola del traffico totale).

Oltre al feedback, RTCP svolge anche la funzione di **sincronizzazione tra flussi diversi**, che possono avere clock indipendenti con deriva temporale differente. Attraverso i report, è possibile riallineare audio e video o altri stream correlati, garantendo la coerenza temporale della riproduzione.

Infine, RTCP fornisce anche informazioni di **identificazione delle sorgenti**, spesso sotto forma di nomi testuali (ASCII), che possono essere mostrati all’utente finale per indicare l’origine del flusso (ad esempio il nome di chi sta parlando in una videoconferenza).

## Il protocollo di trasporto internet orientato alla connessione: TCP
TCP (Transmission Control Protocol) è il principale protocollo di trasporto orientato alla connessione di Internet ed è progettato per fornire un **flusso affidabile di byte end-to-end** su una internetwork intrinsecamente inaffidabile. A differenza di una singola rete, una internetwork può includere segmenti con caratteristiche molto diverse (topologie, capacità, latenze, dimensioni dei pacchetti), e TCP deve adattarsi dinamicamente a questa variabilità mantenendo affidabilità e buone prestazioni.

Ogni host che supporta TCP dispone di un’entità di trasporto TCP (implementata nel kernel, come libreria o processo), che gestisce la comunicazione tra applicazioni locali e il livello IP. TCP riceve flussi di byte dalle applicazioni e li segmenta in unità trasmissibili: in teoria fino a 64 KB, ma nella pratica tipicamente segmenti di circa 1460 byte, per adattarsi ai limiti dei frame Ethernet e includere intestazioni IP e TCP. Ogni segmento viene incapsulato in un datagramma IP e inviato indipendentemente nella rete.

Sul lato ricevente, TCP ricompone i segmenti ricevuti per ricostruire il flusso di byte originale, presentandolo all’applicazione come un canale ordinato e continuo.

Poiché il livello IP offre un servizio **best-effort** (senza garanzie di consegna, ordine o controllo di velocità), TCP deve farsi carico di numerose funzionalità aggiuntive:

* rilevazione e **ritrasmissione dei segmenti persi**;
* gestione dei segmenti fuori ordine tramite riordinamento;
* controllo della velocità di invio per evitare congestione;
* adattamento dinamico alla capacità della rete.

In sintesi, TCP compensa le limitazioni di IP fornendo alle applicazioni un servizio affidabile, ordinato e controllato, che si adatta alle condizioni variabili della rete pur operando sopra un’infrastruttura non affidabile.

### Modello dei servizi
Il **modello di servizio TCP** si basa sul concetto di **socket**, già introdotte come punti terminali della comunicazione. Una socket è identificata da una coppia composta da **indirizzo IP dell’host + numero di porta (16 bit)**. Le porte rappresentano l’equivalente TCP dei TSAP e permettono di indirizzare i processi applicativi corretti.

Per stabilire una comunicazione TCP è necessario creare esplicitamente una connessione tra una socket del mittente e una del destinatario. L’identificazione di una connessione non dipende da un identificatore separato, ma dalla coppia di socket coinvolte ((socket sorgente, socket destinazione)). Una singola socket può inoltre supportare più connessioni simultanee.

Le porte con numero inferiore a 1024 sono dette **well-known ports** e sono riservate a servizi standard (es. IMAP sulla porta 143, SSH sulla 22). In genere sono accessibili solo a processi privilegiati. Storicamente, i servizi potevano essere avviati come demoni permanenti, ma per ottimizzare le risorse si utilizza spesso un super-server come **inetd**, che ascolta su più porte e attiva dinamicamente i servizi solo quando richiesti.

Le connessioni TCP sono **punto a punto e full-duplex**, quindi permettono comunicazione bidirezionale simultanea, ma non supportano multicast o broadcast.

Dal punto di vista del trasferimento dati, TCP gestisce un comportamento flessibile: i dati possono essere inviati immediatamente o bufferizzati per ottimizzare il throughput. In alcune applicazioni è necessario forzare l’invio immediato; per questo esiste il meccanismo del flag **PUSH**, anche se nella pratica viene spesso sostituito da opzioni di sistema (es. TCP_NODELAY) che controllano la Nagle’s algorithm.

TCP prevede anche dati con priorità tramite il meccanismo di **urgent data**, attivato dal flag URGENT. Questo consente di segnalare informazioni che devono essere processate immediatamente (es. interrupt come CTRL-C). I dati urgenti interrompono temporaneamente il flusso normale e vengono gestiti con priorità, anche se la loro delimitazione è parzialmente affidata all’applicazione.

Una caratteristica fondamentale di TCP è che **ogni byte del flusso è numerato con un numero di sequenza a 32 bit**, permettendo controllo fine su ordine e affidabilità. I dati vengono trasportati in segmenti, composti da un’intestazione minima di 20 byte (più opzioni) e da un payload variabile. La dimensione dei segmenti è decisa dinamicamente dal protocollo, ma è vincolata sia dal limite IP (65.535 byte complessivi) sia dalla **MTU** del collegamento, per evitare frammentazione.

Il funzionamento di base di TCP è quello di un **protocollo a finestra scorrevole dinamica**: il mittente invia segmenti e avvia un timer; il ricevente risponde con acknowledgment cumulativi che indicano il prossimo byte atteso e la finestra disponibile. Se il mittente non riceve l’ACK entro il timeout, ritrasmette il segmento. Questo meccanismo garantisce affidabilità, ordine e controllo del flusso su una rete intrinsecamente non affidabile.

### Intestazione del Segmento TCP
Il paragrafo descrive in modo dettagliato il formato dell’intestazione TCP e il ruolo dei suoi campi principali.

I campi **Source port** e **Destination port** identificano rispettivamente porta sorgente e porta destinazione. In combinazione con gli indirizzi IP, formano endpoint a 48 bit; la connessione TCP è quindi identificata da una **quintupla**: protocollo (TCP), IP sorgente, porta sorgente, IP destinazione, porta destinazione.

I campi **Sequence number** e **Acknowledgement number** gestiscono l’affidabilità: il sequence number numeri i byte del flusso, mentre l’acknowledgement number indica il **prossimo byte atteso** (ack cumulativo, non segnala buchi oltre i dati mancanti). Entrambi sono a 32 bit.

Il campo **TCP header length** indica la lunghezza dell’intestazione in parole da 32 bit, necessario perché il campo **Options** è variabile; di fatto definisce dove iniziano i dati nel segmento. Seguono 4 bit non usati (storicamente poco sfruttati), segno di un’allocazione iniziale ben progettata.

Sono presenti **otto flag a 1 bit**:

* **CWR/ECE**: gestione congestione con ECN (Explicit Congestion Notification). ECE segnala congestione al mittente (ECN-Echo), CWR indica che il mittente ha ridotto la congestion window.
* **URG**: abilita il puntatore urgente, che indica dati prioritari (meccanismo oggi raro e primitivo).
* **ACK**: indica validità del campo acknowledgement (quasi sempre 1 nei segmenti standard).
* **PSH**: richiede consegna immediata dei dati all’applicazione senza buffering.
* **RST**: reset della connessione o rifiuto di segmenti/connessioni errate.
* **SYN**: usato per instaurare connessioni (SYN=1 per richiesta; SYN=1+ACK=1 per accettazione).
* **FIN**: chiusura della connessione, indicando assenza di ulteriori dati.

Il **Window size** implementa il controllo di flusso tramite finestra scorrevole: indica quanti byte possono essere inviati oltre l’ultimo ACK. Può essere 0, indicando che i dati sono ricevuti ma non ancora consumati; la riapertura della finestra avviene con un nuovo segmento ACK con window > 0. ACK e permesso di invio sono quindi separati, aumentando flessibilità.

Il **Checksum** garantisce integrità di intestazione, dati e pseudointestazione (come in UDP), ma con protocol number TCP (6) ed è obbligatorio.

Il campo **Options** consente estensioni del protocollo, con lunghezza variabile fino a 40 byte, allineata a multipli di 32 bit. Le opzioni seguono schema tipo-lunghezza-valore e possono essere usate sia in fase di handshake sia durante la connessione. Un esempio importante è il **MSS (Maximum Segment Size)**, che definisce la dimensione massima dei segmenti accettati.

### Instaurazione di una connessione
Le connessioni TCP vengono instaurate tramite il **three-way handshake**.

Sul lato server, la connessione in ingresso viene gestita in modalità passiva tramite le primitive **LISTEN** e **ACCEPT**, che possono essere associate a una porta specifica oppure restare generiche (qualunque sorgente).

Il client avvia la connessione con la primitiva **CONNECT**, specificando indirizzo IP e porta di destinazione, il **Maximum Segment Size (MSS)** accettato e opzionalmente dati utente (es. autenticazione). CONNECT genera un segmento TCP con **SYN=1 e ACK=0** e poi attende risposta.

Alla ricezione del segmento SYN, il TCP del destinatario verifica la presenza di un processo in ascolto sulla porta indicata:

* Se **non esiste un listener**, viene inviato un segmento con **RST=1** per rifiutare la connessione.
* Se esiste un processo in ascolto, il segmento viene consegnato all’applicazione, che può accettare o rifiutare la richiesta.

In caso di accettazione, viene avviata la fase di handshake: il server risponde con un segmento di **acknowledgement** (tipicamente SYN+ACK nel modello completo). La sequenza standard (Figura 7.22a) mostra lo scambio SYN → SYN+ACK → ACK. Il segmento SYN occupa uno spazio nella numerazione di sequenza, garantendo un’acknowledgement non ambiguo.

Nel caso di **connessione simultanea** (entrambi i lati inviano SYN nello stesso momento), entrambi i peer rispondono e completano comunque l’handshake. Il risultato è una **singola connessione logica**, perché TCP identifica le connessioni tramite la coppia di endpoint. Se entrambe le iniziative corrispondono alla stessa quintupla (x, y), viene creata una sola entry nella tabella delle connessioni.

### Rilascio di una connessione
Il rilascio di una connessione TCP avviene tramite una chiusura **ordinata e bidirezionale**, nonostante il modello sia full-duplex. Per semplificare la descrizione, la connessione viene vista come due flussi simplex indipendenti, ciascuno chiuso separatamente.

Ogni endpoint può avviare la terminazione inviando un segmento con **bit FIN=1**, che indica l’assenza di ulteriori dati da trasmettere in quella direzione. Quando un FIN viene ricevuto, il destinatario risponde con un **ACK**, confermando la chiusura della direzione dati relativa. Da quel momento, quella direzione è chiusa alla trasmissione, ma l’altra direzione può continuare a trasportare dati.

La connessione TCP si considera completamente chiusa solo quando **entrambi i lati hanno inviato e ricevuto FIN con relativo ACK**, quindi quando entrambe le direzioni sono terminate.

Tipicamente la chiusura richiede **quattro segmenti** (FIN + ACK per ciascuna direzione), ma può essere ottimizzata a **tre segmenti** se il secondo FIN e il primo ACK vengono combinati nello stesso pacchetto.

Per gestire il problema dell’attesa indefinita (il cosiddetto “problema dei due eserciti”), TCP utilizza **timer di timeout**: se un ACK di risposta a un FIN non arriva entro un intervallo massimo (stimato come tempo di vita di due pacchetti), il lato che ha inviato il FIN considera la connessione chiusa e la rilascia comunque.

### La finestra scorrevole
La sezione descrive problemi di inefficienza nella trasmissione TCP e le principali tecniche di ottimizzazione legate a **finestra scorrevole**, gestione degli ACK e buffering.

Nel caso di applicazioni interattive (es. SSH o telnet), ogni tasto premuto genera traffico TCP molto frammentato. Un singolo carattere può produrre:

* un segmento TCP di circa **21 byte**
* incapsulato in un datagramma IP di circa **41 byte**
* un **ACK immediato** dal ricevente (altri 40 byte)
* un **window update** per avanzare la finestra (40 byte)
* un ulteriore pacchetto di risposta del terminale (41 byte)

Risultato: circa **4 segmenti e 162 byte** per un solo carattere, quindi utilizzo inefficiente della banda.

Per ridurre questo overhead si usa il meccanismo di **delayed acknowledgement**, che ritarda ACK e aggiornamenti di finestra (tipicamente fino a ~500 ms) per poterli aggregare con altri dati. Se nel frattempo arrivano dati applicativi, si invia un solo pacchetto di ACK/dati, riducendo numero di segmenti e traffico.

Un’ulteriore ottimizzazione lato mittente è l’**algoritmo di Nagle (1984)**: quando i dati arrivano in piccoli blocchi, TCP invia il primo immediatamente e bufferizza i successivi fino alla ricezione dell’ACK. Poi invia tutto insieme in un unico segmento. In questo modo, in ogni RTT circola al massimo un piccolo segmento, migliorando l’efficienza della rete quando i dati sono generati in modo frammentato.

Un problema correlato è la **silly window syndrome**, che degrada le prestazioni quando il ricevente consuma dati molto lentamente (es. 1 byte alla volta). Il ciclo tipico è:

1. buffer pieno → finestra = 0
2. applicazione legge 1 byte → il ricevente annuncia finestra = 1
3. mittente invia 1 byte
4. buffer si riempie di nuovo → finestra torna a 0
   → ripetizione continua con segmenti minuscoli e inefficienza estrema

La soluzione di **Clark** evita questo comportamento imponendo che gli aggiornamenti di finestra vengano inviati solo quando:

* è disponibile spazio sufficiente per almeno un **MSS**, oppure
* il buffer è libero almeno per metà

In parallelo, anche il mittente deve evitare di inviare dati troppo piccoli, cercando di accumulare segmenti più grandi (almeno MSS o una soglia significativa del buffer del ricevente).

### Controllo della congestione
Il controllo della congestione in TCP si basa sull’idea di interpretare la **perdita di pacchetti come segnale binario di congestione** e regolare dinamicamente una finestra di invio detta **finestra di congestione (cwnd)**. Questa rappresenta il numero di byte che il mittente può mantenere “in volo” nella rete. Il throughput dipende da cwnd/RTT. Il controllo segue la logica **AIMD (Additive Increase, Multiplicative Decrease)**.

TCP usa due finestre in parallelo:

* **finestra di congestione (cwnd)**: limite imposto dalla rete
* **finestra di flusso (receiver window)**: limite imposto dal destinatario
  La finestra effettiva è il **minimo tra le due**.

### Slow start

All’inizio della connessione cwnd è piccola (tipicamente 1–4 segmenti). Il mittente invia questa finestra iniziale e, per ogni RTT, aumenta cwnd in modo esponenziale:

* ogni ACK valido incrementa cwnd di circa un MSS
* ogni ACK permette l’invio di nuovi segmenti

Risultato: **crescita esponenziale (raddoppio per RTT)** finché non si raggiunge un limite o si verifica perdita. Questo comportamento è chiamato **slow start**.

### Congestione e soglia (ssthresh)

Quando si verifica perdita (tipicamente timeout):

* si assume congestione nella rete
* si imposta **ssthresh = metà di cwnd**
* cwnd viene ridotta e il processo riparte

### Congestion avoidance (incremento additivo)

Quando cwnd supera ssthresh, TCP passa a crescita lineare:

* cwnd aumenta di circa **1 MSS per RTT**
* implementazione fine: incremento distribuito su ogni ACK

In forma approssimata:

* incremento per ACK ≈ (MSS² / cwnd)

Questo mantiene la rete vicino al punto di equilibrio senza saturarla.

### TCP Tahoe e miglioramenti

TCP Tahoe combina slow start + congestion avoidance + gestione timeout. Tuttavia, può essere inefficiente perché ogni perdita causa ritorno allo slow start.

### Fast retransmit e fast recovery

Miglioramento introdotto da Jacobson:

* gli **ACK duplicati** indicano che segmenti successivi sono arrivati ma uno è perso
* dopo 3 ACK duplicati si attiva **fast retransmit**
* la perdita viene rilevata senza attendere timeout

Durante **fast recovery**:

* si riduce cwnd (circa metà)
* si mantiene attivo l’“ACK clock”
* ogni ACK duplicato indica che un pacchetto ha lasciato la rete → si può inviare un nuovo segmento

Terminata la fase di recupero:

* cwnd viene portata alla nuova soglia
* si riprende congestion avoidance (crescita lineare)

Il comportamento risultante è una dinamica a **dente di sega**:

* crescita additiva lenta
* riduzione moltiplicativa improvvisa

### SACK (Selective Acknowledgement)

Con ACK cumulativi è difficile capire esattamente quali segmenti sono persi. **SACK** risolve il problema:

* il ricevente continua a usare ACK cumulativo (ultimo byte in ordine)
* in più invia intervalli di dati ricevuti fuori ordine (fino a 3 blocchi)

Esempio:

* pacchetto 2 perso, ma 3–6 ricevuti → SACK indica blocchi ricevuti
* il mittente identifica con precisione i gap
* ritrasmette solo i segmenti mancanti (es. 2 e 5)

### Sintesi concettuale

TCP controlla la congestione combinando:

* crescita esponenziale iniziale (slow start)
* crescita lineare stabile (AIMD)
* riduzione aggressiva in caso di perdita
* recupero rapido con ACK duplicati
* miglior visibilità dei buchi con SACK

Obiettivo: massimizzare throughput mantenendo la rete stabile evitando collasso da congestione.

### Gestione del Timer
TCP utilizza più **timer logici**, tra cui il principale è il **RTO (Retransmission Timeout)**, che gestisce la ritrasmissione dei segmenti. Quando un segmento viene inviato, si avvia un timer associato: se l’ACK arriva prima della scadenza, il timer viene annullato; se invece scade, il segmento viene considerato perso e viene ritrasmesso, con riavvio del timer. Il problema centrale è determinare un valore corretto del timeout.

Poiché il **round-trip time (RTT)** varia nel tempo, TCP non usa un valore fisso ma un meccanismo **dinamico di stima adattiva**. L’algoritmo classico (Jacobson, 1988) mantiene per ogni connessione una stima chiamata **SRTT (Smoothed RTT)**, che rappresenta una media filtrata del tempo di andata e ritorno osservato.

Ogni volta che arriva un ACK, si misura un campione di RTT (R) e si aggiorna la stima con una **media mobile esponenzialmente pesata (EWMA)**:

SRTT = \alpha SRTT + (1 - \alpha)R

dove **α** è un coefficiente di smoothing (tipicamente circa 7/8), che controlla il peso dei valori passati rispetto alla nuova misura. Valori alti di α rendono la stima più stabile ma meno reattiva.

Questo filtro agisce come un **passa-basso statistico**, riducendo la variabilità dovuta al rumore delle singole misurazioni di rete e producendo una stima più affidabile del RTT, usata poi per calcolare il valore del timeout di ritrasmissione (RTO).

### WebRTC
WebRTC (Web Real-Time Communication) è una tecnologia **open-source** supportata da Google, Mozilla e Opera che consente comunicazioni in tempo reale direttamente tra browser e applicazioni mobili. Integra nativamente **audio, video e scambio dati** nelle applicazioni web, eliminando la necessità di plugin esterni o software di terze parti.

Dal punto di vista del trasporto, il testo assume che WebRTC utilizzi **TCP per il trasferimento dei dati**, sfruttando le sue proprietà di affidabilità: consegna garantita, ordinamento corretto dei pacchetti e recupero da errori. Questo è particolarmente rilevante per applicazioni come videoconferenze, dove la perdita o disordine dei dati può degradare l’esperienza.

### Vantaggi principali

* **Bassa latenza**: progettato per comunicazioni rapide, riduce i tempi di interazione rispetto a soluzioni tradizionali.
* **Architettura P2P (peer-to-peer)**: connessione diretta tra dispositivi senza server centrale nel percorso dati, riducendo latenza e carico infrastrutturale.
* **Ampia compatibilità**: supportato dai principali browser moderni (Chrome, Firefox, Opera), garantendo interoperabilità tra piattaforme.

### Svantaggi principali

* **Complessità di configurazione**: la gestione delle connessioni P2P e della segnalazione può essere complessa da implementare e ottimizzare.
* **Sicurezza non banale**: pur integrando protocolli come **DTLS e SRTP**, configurazioni errate o implementazioni custom possono introdurre vulnerabilità.
* **Dipendenza dalla rete**: richiede connessioni stabili e veloci; in condizioni di rete instabile le prestazioni degradano sensibilmente.

In sintesi, WebRTC è una soluzione per comunicazione real-time integrata nei browser, che privilegia bassa latenza e semplicità d’uso lato utente, ma richiede attenzione nella configurazione e nelle condizioni di rete per garantire prestazioni e sicurezza.



