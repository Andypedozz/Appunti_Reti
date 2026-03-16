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