# Livello Datalink

Unità informativa: frames
Servizi:
* Framing: incapsulamento dei pacchetti dal livello 3
* Accesso al canale: definisce le modalità di accesso al mezzo fisico
* Indirizzamento: identifica i nodi tramite indirizzi hardware (MAC)
* Controllo del flusso: controllo delle velocità di trasmissione o capacità dei buffer dei vari nodi
* Gestione degli errori: rilevazione e correzione degli errori durante la trasmissione

LAN Cablate: Ethernet
1973-76 Xerox Palo Alto (Robert Metcalfe)

* LLC (Logical Link Control): controllo errori, controllo flusso, parte del framing, e indipendente dalla rete fisica usata.
* MAC (Medium Access Control): framing, metodo di accesso al mezzo fisico, dipendente dall'hardware utilizzato.

IEEE ha prodotto vari standard  sotto il nome 802, ma ognuno con un sottogruppo diverso che ne indica le particolarità della tecnologia usata.

* 802.1: specifiche generali
* 802.2: sottolivello LLC
* 802.3: metodo di accesso CSMA/CD
* 802.4 token bus

## Sottolivello MAC
Il MAC si occupa dell'accesso al mezzo e la formazione dei frame. Un frame ethernet contiene 7 campi:
* Preambolo: 7 byte composti da 0 e 1 alternati per la sincronizzazione 
* Delimitatore: 1 byte che segnala inizio e fine frame ed è l'ultima chance di sincronizzazione (0 e 1 lternati ma termina con 11)
* MAC Destinatario: 6 byte del MAC di destinazione
* MAC Mittente: 6 byte del MAC mittente
* Lunghezza o tipo: 2 byte usati per segnalare il protocollo di livello superiore o il numero di byte del campo successivo
* Dati: dati provenienti dal livello superiore(46 - 1500 byte)
* CRC: 4 byte di codice a ridondanza ciclica per il controllo errori

A causa di CSMA/CD, Ethernet necessita di un frame minimo di 64 byte, con obbligatori solo i campi degli indirizzi MAC, lunghezza e CRC, lasciando 46 byte liberi per i dati. la dimensione massima è di 1518 byte.

I MAC stanno nella NIC (Network Interface Card), che individua il nodo nella rete: sono specificati in esadecimale con separatore tra byte il caratter ":".

I 6 byte sono divisi in modo che i primi 3 byte hex identifichino il produttore della scheda di rete (OUI - Organizationally Unique Identifier).
I MAC si dividono tra "globally unique" (o UAA) e "locally administered". La differenza si nota dal secondo bit meno significativo del byte più significativo dell'indirizzo: se il bit è settato a 0 è globally unique, altrimenti è locally administered. Gli UAA sono più comuni, gli altri sono indirizzi che vanno a coprire il reale MAC address della scheda, per motivi necessari all'amministratore di rete, sostituendolo con un valido solo localmente.

L'altra divisione dei MAC va in base all'ultimo bit significativo del primo byte, che distingue con 0 un indirizzo unicast e con 1 multicast. L'indirizzo di broadcast è uno speciale indirizzo di gruppo, e corrisponde da una sequenza di tutti 1 nell'indirizzo.

## Accesso al mezzo
CSMA/CD 1-insistente.
Tra i vari standard progettati per l'accesso al mezzo ci si è accorti che per minimizzare le collisioni, è necessario che il nodo trasmittente controlli lo stato del mezzo prima di inviare. CSMA riduce le possibilità di collisione, ma non le elimina a causa del ritardo di propagazione.

Infatti, se definiamo tempo di vulnerabilità il tempo in cui è possibile che avvenga una collisione, allora il valore che tale tempo assume in CSMA è proprio il tempo di propagazione, ossia il tempo necessario al segnale per propagarsi da un capo all'altro del mezzo.

Quindi, il nodo che deve trasmettere, controlla il mezzo prima di farlo,
    * se è occupato continua a controllare finchè non si libera
    * se è libero spedisce immediatamente il frame.
L'intervallo di tempo da usare con CSMA/CD è dato da 2 volte Tp massimo (andata e ritorno), più il tempo di spedizione di un segnale di jamming.

Queste problematiche insieme ad altre di tipo fisico, limitano la lunghezza massima di Ethernet Standard a 2550m e velocità fino a 10Mbps.

## Fast Ethernet
Con Fast Ethernet si sono abbattuti

## Wifi
Wireless Fidelty, sviluppato da IEEE, lo standard è l'802, gruppo di studio 11 affiancato da lettere per i vari sottogruppi. I parametri di ogni standard di rete wifi sono tipicamente:
* velocità: velcità di trasmissione in Mbps
* frequenza: su quale radiofrequenza insiste la rete. Le bande classiche sono 2,4 GHz e 5 Ghz, ma da poco tempo è previsto anche & GHz

La banda 2,4 è comune e utilizzata da un ampio spettro di dispositivi, pertanto il segnale diventa rumoroso e la velocità diminuisce. Quindi è entrato in scena il canale a 5GHz, anch'esso oggi piuttosto utilizzato ma la sua interferenza è ancora accettabile. La banda 2,4 ha una velocità inferiore alla 5 ma ha una portata maggiore, il viceversa per la 5: la portata inferiore è data dalla più alta frequenza.

Per accedere al mezzo condiviso si usa CSMA/CA che invece di gestire le collisioni dopo che si sono verificate, le previene, e può essere descritto nei seguenti passi:
* la stazione verifica se il canale è libero
    * se è occupato, attende finchè non si libera
    * se è libero la stazione attende un intervallo di tempo Interframe Gap e invia il frame
* dopo aver inviato il frame, imposta untimer
* la stazione attenda la conferma dal ricevitore. Se riceve conferma prima della scadenza del timer, segnala trasmissione riuscita
* Altrimenti, attende un periodo di backoff e riavvia l'algoritmo

Poi è stato introdotto MACA, per risolvere il problema dei nodi nascosti ed esposti di CSMA/CA + RTS/CTS.

## Bluetooth
Bluetooth è uno standard per voce e dati wireless a corto raggio.
E' una tecnologia  WPAN inventata dall'azienda Ericson nel 1994.
Funziona sulla banda ISM e Il numero massimo dei dispositivi che possono essere collegati contemporaneamente è 7 e fornisce velocità dati fino a 50 Mbps.
La tecnica di diffusione che utilizza è FHSS (Frequency Hopping Spread Spectrum).

Una rete bluetooth è chiamata PicoNet e una raccolta di PicoNet interconnesse è chiamata ScatterNet.

* PicoNet: rete elementare, contiene un nodo master e 7 nodi secondari attivi, detti slave. Quindi ci sono 8 nodi attivi a una distanza di 10 metri. La comunicazione tra master e slave avviene uno a uno o uno a molti. Essa prevede anche un max di 255 nodi parcheggiati (parked), questi sono secondari e non possono partecipare alla comunicazione se non passano allo stato attivo, mettendo in park altri nodi attivi.
* ScatterNet: varie piconet interconnesse. Uno slave in una piconet può fungere da master in un altra. Questo tipo di nodo può ricevere un messaggio da un master in una piconet e consegnarlo a uno slave dell'altra piconet dove funge da master. Ciò implementa quello che si dice un nodo bridge. Un nodo non può essere master di due piconet nella stessa scatternet.

Per superare le interferenze Bluetooth usa FHSS, ossia una trasmissione a spettro diffuso e salto di frequenza (AFH):
* la banda viene difisa in canali più piccoli (es. 40 in BLE)
* si passa rapidamente da un canale all'altro durante la trasmissione dei pacchetti.
* inoltre vengono tracciati e evitati i canali rumorosi.

AFH funziona così: ogni volta che si richiede un collegamento, una coppia di nodi ha la possibilità di scambiare pacchetti, ma all'inizio di ogni connessione, si verifica un salto di frequenza su un canale selezionato deterministicamente. Ogni dispositivo coinvolto nella comunicazione passerà a quel canale, e effettuando salti frequentemente si riduce significativamente la probabilità di collisione.

Bluetooth supporta due tipi di collegamento:
* Synchronous Connection Oriented (SCO): utilizzato principalmente per la voce
* Asynchronous Connectionless (ACL): utilizzato principalmente per i dati a pacchetto.

### SCO
All'interno della stessa PicoNet, master e slave possono cambiare tipo di collegamento in qualsiasi momento.
Entrambi i tipi di collegamento full duplex supportano 16 tipi diversi di pacchetto
4 di questi sono pacchetti di controllo e sono comuni sia per i link SCO che ACL.

Il link SCO è simmetrico e in genere viene usato per la voce, dove non sono ammessi alti ritardi. Usano degli slot riservati per la comunicazione, e una volta stabilita la connessione, sia i master che gli slave possono inviare pacchetti SCO indifferentemente.
SCO supporta connessioni punto punto fino a 64 kbps.

### ACL
ACL è orientato ai pacchetti e supporta sia traffico simmetrico che asimmetrico. Il master controlla la bandwidth e decide quanta banda assegnare a ciascun slave della PicoNet. Gli slave devono essere interrogati prima di trasmettere.

ACL supporta messaggi broadcast dal master agli slave nella piconet. La velocità massima è di 721 kbps in una dirzeion e 57,6 kbps nell'altra se non vi è alcuna tecnica di correzione di errori.

In ACL si usa la ritrasmissione automatica ARQ, così quando arriva un pacchetto, viene eseguito un controllo su di esso: se si rileva un errore, il ricevente lo indica nel pacchetto di ritorno, e il mittente ritrasmette automaticamente solo i pacchetti difettosi. Per collegamento di dati real time (come voce), la ritrasmissione non è fattibile, quindi si lavora maggiormente sul controllo degli errori.

### Stack Protocollare di Bluetooth
* Livello Radio: dettagli interfaccia radio, frequenza, l'uso del salto di frequenza e potenza di trasmissione. Modulazione/demodulazione dei dati in segnali RF.
* Baseband Link Layer: motore digitale di Bluetooth, equivalente di MAC nelle LAN. Crea la connessione in una PicoNet, indirizzamento, formato del pacchetto, temporizzazione e controllo dell'alimentazione.
* Protocollo Link Manager: gestisce i collegamenti già stabiliti, inclusi autenticazione e crittografia.
* Protocollo Logical Link Control and Adaptation (L2CAP): comunicazione tra i livelli superiori e inferiori dello stack di bluetooth. Impacchetta i dati dai livelli superiori nella forma prevista dai livelli inferiori. Esegue segmentazione e multiplexing.
* Service Discovery Protocol (SDP): consente di scoprire servizi su un altro dispositivo bluetooth 
* Livello di comunicazione RF: protocollo sostitutivo della comunicazione cablata. Abbreviazione di Radio Frontend Component.
* OBEX
* Wireless Acces Protocol (WAP)
* Telephony Control Protocol (TCS)
* Livello Applicazione:

