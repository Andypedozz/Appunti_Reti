## DNS - Domain Name Server
Il DNS è un sistema per identificare gli host con dei nomi testuali e separare i nomi dagli indirizzi IP. Il DNS è gerarchico e basato su un database distribuito.

Per associare un IP a un nome, l'applicazione usa una procedura di libreria (resolver) come getHostByName(). Una volta ottenuto l'IP si può stabilire la connessione.

### Spazio dei nomi
Lo spazio dei nomi DNS è strutturato gerarchicamente.
Quando un host invia una richeista DNS, questa viene inoltrata al resolver DNS configurato localmente, che può essere quello dell'ISP o di Google ad esempio.

Il processo di risoluzione è il seguente:
1. Un client effettua una richiesta controllando se l'IP associato al dominio richiesto è presente nella cache del sistema operativo.
2. Se non lo è inoltra la richiesta al resolver DNS, che controllerà nella sua cache se l'IP è presente.
3. Se non lo è il resolver contatterà un root DNS, che non avrà la risposta direttamente ma saprà indicare un server TLD (Top Level Domain - .com, .org, .net) a cui rivolgersi.
4. Il resolver inoltra la richiesta allora al TLD, che non avrà la risposta diretta ma ci saprà dire a quale server DNS autoritativo rivolgerci.
5. Il Resolver inoltra la richiesta al DNS autoritativo che saprà dirci l'IP corrispondente al dominio completo richiesto.
6. Infine il resolver restituisce al Client iniziale la risposta contenente l'IP.

DNS è leggero e usa UDP per le query per ridurre l'overhead. Le query superiori a 512 byte passano a usare TCP per evitare problemi di consegna.

### Campi del Protocollo
I campi dei messaggi DNS specificano vari dettagli sulle richieste o risposte.

Tra i principali abbiamo:
* Identifier: un ID a 16 bit che identifica il messaggio
* Query / Response Flag: 4 bit che indicano se è una richiesta o una risposta
* Opcode: indica il tipo di messaggio, ossia:
    * 0: query standard
    * 1: query inversa
    * 2: stato del server
    * 3: riservato e non utilizzato
    * 4: messaggio di notifica
    * 5: aggiornamento (Dynamic DNS)
* AA: 1 bit che indica se è una risposta autorevole.
* TC: 1 bit per la troncatura. Indica di solito che è stata inviata con UDP ma era più lunga di 512 byte
* RD: 1 bit "Ricorsione desiderata", che indica che il client sta chiedendo di attraversare l'albero per conto del client e fornire solo la risposta desiderata
* RA: 1 bit "Ricorsione Disponibile", con cui il server indica a un client se supporta la ricorsione.

Poi ci sono altri campi come:
* Z: 3 bit riservati sempre a 0
* RCode: 4 bit impostato su 0 nelle query con le seguenti opzioni:
    * 0: nessun errore
    * 1: errore di formato
    * 2: errore del server
    * 3: errore di nome
    * 4: non implementato
    * 5: rifiutato
    * 6: il nome esiste ma non dovrebbe
    * 7: esiste un record risorsa che non dovrebbe
    * 9: risposta non autorevole
    * 10: il nome della risposta non è nella zona specificata
* QDCount
* ANCount
* ARCount

Una query DNS ha vari elementi:
* qname: nome di dominio
* qtype: tipo di query (A, AAAA, MX, CNAME, PTR, SRV, TXT, NS)
* qclass: classe della query, di solito IN - Internet, mentre CH e HS sono poco usati
* flags: QR (Response Code), RD (Recursive Desired), EDNS Opt, DO (DNSSEC OK), AD (Authenticated Data).

I record delle risorse sono associati a ogni dominio e includono:
* Name
* TTL
* Class
* Type
* Value

Ad esempio:
* SOA
* A
* MX
* NS
* CNAME
* PTR
* HINFO
* TXT

### Server
I server dei nomi DNS gestiscono lo spazio dei nomi DNS in zone non sovrapposte. Quando un resolver chiede un dominio viene interrogato il server dei nomi locale.


## Distribuzione dei contenuti
La rete int

### Server Farm
Una server farm è un insieme di macchine che contibuiscono all'elaborazione delle richieste come se fossero un unico server. Per fare in modo che più server appaiano come un unico sito ci sono vari modi. Ogni server deve avere una copa del sito.

### Proxy Web


## CDN