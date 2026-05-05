# Appunti di Reti di Calcolatori

# Capitolo 1 - Introduzione alle Reti di Calcolatori
## 1.1 Scopi delle Reti e Loro Classificazione
### 1.1.1 Scopi delle Reti di Calcolatori
La convergenza tra computer e comunicazioni ha portato dal modello centralizzato (un unico calcolatore) a sistemi distribuiti composti da molti nodi interconnessi. Una rete di calcolatori è una connessione fisica/logica tra dispositivi che scambiano informazioni e condividono risorse hardware/software. Obiettivo: rendere accessibili programmi, periferiche e dati indipendentemente dalla posizione.

Distinzione tra rete e sistema distribuito: il sistema distribuito usa la rete per svolgere compiti specifici, garantendo coerenza e comunicazione tramite middleware (es. DBMS, Web server). Internet è l’interconnessione globale di reti; il World Wide Web è un sistema distribuito sopra Internet.

Come sistema di telecomunicazione, una rete deve garantire:

* consegna corretta al destinatario,
* precisione (assenza di errori o loro correzione),
* tempestività (latenza ridotta),
* jitter (variazione del ritardo).

Componenti:

* messaggio (dati: testo, video, ecc.),
* mittente,
* destinatario,
* mezzo trasmissivo,
* protocollo (regole di comunicazione).

Modalità di trasmissione:

* simplex: unidirezionale, nessun feedback, uso completo del canale;
* half-duplex: bidirezionale ma non simultanea;
* full-duplex: bidirezionale simultanea, ma con banda condivisa.

Scopo principale: facilitare comunicazione e condivisione (file, risorse). Vantaggio economico: riduzione costi hardware condividendo dispositivi.

Modello client-server: processi distinti.

* client: attivo, invia richieste;
* server: reattivo, elabora e risponde.
  Dati centralizzati su server potente, client accedono via rete.

Vantaggi:

* gestione dati centralizzata (backup semplice),
* migliori prestazioni (server potente),
* sicurezza centralizzata,
* buona scalabilità (limitata dalle risorse del server).

Svantaggi:

* singolo punto di guasto (server),
* alti costi di manutenzione/aggiornamento.

Modello peer-to-peer (P2P): nodi equivalenti, senza ruoli fissi.
Carico distribuito tra i peer; spesso usa overlay network per mappare nodi e topologia.

Vantaggi:

* assenza di server centrale → costi minori,
* guasto di un nodo non blocca la rete,
* configurazione semplice.

Svantaggi:

* scarsa scalabilità in reti grandi,
* gestione autonoma di sicurezza e dati per ogni nodo.

Applicazioni delle reti:

* accesso a informazioni remote,
* comunicazione (email asincrona, IM sincrona, VoIP/video),
* intrattenimento (multiplayer, streaming),
* e-commerce,
* formazione online,
* smart working,
* grid e cloud computing.


### 1.1.2 Grids, Cloud e Virtualizzazione
Le reti evolvono introducendo paradigmi: grid computing, cloud computing e virtualizzazione.

**Grid computing**: infrastruttura di calcolo distribuito per condividere risorse (dati, software, hardware: CPU/GPU) tra organizzazioni virtuali. Nasce per problemi data-intensive con dati distribuiti geograficamente; richiede cooperazione tramite protocolli aperti e QoS elevata. Architettura:

* nodo di controllo: gestisce risorse,
* provider: fornisce risorse,
* utente: le utilizza.
  Un nodo può essere sia provider che utente. Il controllo reale è affidato al middleware; i nodi eseguono.

**Cloud computing**: modello in cui risorse IT (software, hardware) sono servizi on-demand via Internet forniti da provider. Consente elasticità, accesso remoto e risposta agile a esigenze di business. “Servizio” = risorsa disponibile su richiesta.

Modelli di servizio:

* **SaaS**: applicazioni pronte, gestione completa del provider; utente configura solo funzionalità.
* **PaaS**: piattaforma per sviluppo/test/deploy; utente controlla applicazioni, non infrastruttura.
* **IaaS**: infrastruttura virtuale; provider gestisce hardware, utente controlla OS, rete, storage e applicazioni.
* **On-premise**: gestione completa interna (acquisto, installazione, manutenzione).

Modelli di deployment:

* **Public cloud**: accesso via Internet, alta scalabilità e basso costo; svantaggi: sicurezza e personalizzazione limitate.
* **Private cloud**: dedicato a una sola organizzazione, maggiore controllo e sicurezza; svantaggi: costi elevati, minore scalabilità.
* **Community cloud**: condiviso tra organizzazioni simili; vantaggi: costi ridotti, maggiore sicurezza rispetto al pubblico; svantaggi: risorse condivise, diffusione limitata.
* **Hybrid cloud**: combinazione (es. pubblico per carichi non critici, privato per dati sensibili); ottimizza costi, sicurezza e portabilità.

**Virtualizzazione**: astrazione di hardware/software su un’unica macchina fisica. Base del cloud.
Macchina virtuale (VM): ambiente isolato con OS e applicazioni propri; più VM su un host tramite strato software che alloca dinamicamente risorse.

Concetti chiave:

* partizionamento: più OS su una macchina, risorse divise;
* isolamento: separazione guasti e sicurezza, controllo risorse;
* incapsulamento: stato VM salvato come file, facile copia/migrazione;
* indipendenza hardware: VM migrabili su qualsiasi host.

Tipi:

* desktop virtualization: distribuzione rapida di ambienti utente, utile per mobilità e outsourcing;
* server virtualization: più OS su un server → riduzione costi, migliore utilizzo risorse, deploy rapido;
* network virtualization: replica logica della rete fisica (switch, router, firewall, VPN, load balancer), con maggiore flessibilità operativa.


## 1.2 Modelli di Riferimento OSI e TCP/IP
### 1.2.1 Software di Rete
Una rete richiede hardware (trasmissione bit) e software (gestione comunicazione). Per ridurre complessità, il software è organizzato in **strati (layer)**: ogni livello fornisce servizi a quello superiore nascondendo i dettagli (information hiding).

Lo **strato n** comunica con lo stesso strato su un altro nodo tramite **protocolli**, cioè regole su formato, ordine dei messaggi e azioni. Tra strati adiacenti esistono **interfacce** che definiscono servizi e operazioni disponibili.

**Architettura di rete** = insieme di strati + protocolli (non include le interfacce).
**Pila di protocolli** = protocolli usati da un nodo.

Tipi di servizi:

* **connection-oriented**: simile a telefonia, richiede negoziazione e connessione prima della trasmissione;
* **connectionless**: simile alla posta, ogni messaggio è indipendente e contiene indirizzo completo.

La comunicazione avviene tra **peer** (livelli omologhi su nodi diversi) tramite protocolli. La suddivisione in livelli scompone il problema della trasmissione: dai livelli alti (applicazione) fino al livello fisico (trasmissione segnali).

Storicamente vari modelli (SNA, AppleTalk, IPX/SPX, OSI), oggi prevale **TCP/IP**, suite di protocolli alla base di Internet.

Principio fondamentale: **incapsulamento**. I dati (PDU) scendono nello stack dal livello applicativo a quello fisico; ogni livello aggiunge informazioni di controllo (**header**, eventualmente **trailer**) necessarie alla trasmissione.
Al ricevitore avviene il processo inverso (**decapsulamento**): ogni livello rimuove il proprio header fino a consegnare i dati all’applicazione.

### 1.2.2 Il modello di Riferimento OSI
Il modello **OSI (Open System Interconnection)**, definito da ISO (1984), è un’architettura a **7 livelli** cooperanti per la trasmissione dati tra nodi. Principi: separazione per astrazione, funzioni ben definite, supporto a standard internazionali, minimizzazione interfacce, numero di livelli sufficiente ma non eccessivo.

**Livello fisico**: trasmissione di bit sul canale.

* sincronizzazione (clock),
* velocità di trasmissione,
* topologia fisica (bus, stella, mesh),
* modalità (simplex, half/full duplex).

**Data Link**: consegna nodo-nodo, affidabilità.

* sottolivelli: LLC, MAC,
* framing,
* indirizzamento fisico (MAC),
* controllo errori (rilevazione/ritrasmissione),
* controllo flusso,
* accesso al mezzo (arbitraggio canale condiviso).

**Network**: comunicazione tra reti diverse.

* routing (scelta percorso),
* indirizzamento logico (IP univoco).

**Trasporto**: consegna end-to-end, PDU = segmento.

* segmentazione/riassemblaggio,
* indirizzamento tramite porte (processi),
* controllo flusso end-to-end,
* multiplexing/demultiplexing (più processi su un canale),
* affidabilità (ack, ritrasmissioni).

Servizi:

* connection-oriented: setup → trasferimento → chiusura, affidabile (ack);
* connectionless: invio diretto, veloce ma non affidabile.

Mittente: segmenta, aggiunge porte, controlla errori/flusso.
Ricevente: usa porte per consegna al processo, riordina e riassembla.

**Sessione**: gestione comunicazione tra processi.

* apertura/chiusura sessioni,
* sincronizzazione (checkpoint per recovery),
* controllo dialogo (half/full duplex).

**Presentazione**: formato e rappresentazione dati.

* traduzione (es. ASCII/EBCDIC),
* crittografia/decrittografia,
* compressione.

**Applicazione**: interfaccia con l’utente e servizi di rete (email, DNS, IM).

### 1.2.3 Il modello di Riferimento TCP/IP
Il modello **TCP/IP** è l’architettura reale di Internet, sviluppata da DARPA negli anni ’70 per ARPANET. A differenza di OSI (più teorico e complesso), TCP/IP nasce pragmaticamente dall’implementazione di protocolli. È una **suite di protocolli** organizzata in **4 livelli**.

Caratteristiche:

* architettura flessibile,
* facile aggiunta di nodi,
* supporto a servizi connection-oriented,
* affidabilità e riordino dei dati.

**Livelli TCP/IP:**

**1. Interfaccia Network** (≈ Fisico + Data Link OSI)
Gestisce trasmissione fisica e indirizzamento hardware. Include protocolli per accesso al mezzo.
Nota: ARP appartiene logicamente al livello Internet ma è incapsulato qui.

**2. Internet** (≈ Network OSI)
Gestisce instradamento e indirizzamento logico.

* **IP**: consegna pacchetti tramite indirizzi IP (IPv4/IPv6; IPv6 nasce per esaurimento IPv4).
* **ICMP**: segnala errori/problemi di rete.
* **ARP**: risolve IP → indirizzo hardware.

**3. Trasporto** (≈ Trasporto OSI)
Comunicazione end-to-end tra processi:

* segmentazione dati,
* consegna al processo corretto (porte),
* controllo errori, riordino, flusso.

Protocolli:

* **TCP**: affidabile, orientato alla connessione, garantisce ordine e integrità; costo: maggiore latenza/overhead.
* **UDP**: connectionless, veloce, senza garanzie di affidabilità o ordine.

**4. Applicazione** (≈ Applicazione + Presentazione + Sessione OSI)
Gestisce comunicazione tra applicazioni e interfaccia utente. Include protocolli come HTTP/HTTPS, FTP, TFTP, SSH, SMTP, SNMP, NTP, DNS.

### 1.2.4 Confronto tra i Modelli Presentati
Differenza chiave: TCP/IP accorpa livelli superiori OSI e riduce la stratificazione, privilegiando semplicità e implementabilità rispetto alla formalità del modello OSI.

**Somiglianze:**

* Entrambi modelli **a livelli** con stack di protocolli e comunicazione tra peer.
* Forniscono un **framework** per progettazione/implementazione di protocolli e dispositivi.
* Garantiscono **interoperabilità** tra componenti di produttori diversi.

**Differenze:**

* **OSI**: modello concettuale/teorico, poco usato operativamente.
  **TCP/IP**: modello pratico, base reale di Internet.
* **TCP/IP** nasce da implementazioni (paradigma client-server); **OSI** è progettato come riferimento formale.
* **TCP/IP** abilita comunicazione tra sistemi eterogenei; **OSI** standardizza funzioni e progettazione di hardware/software di rete.
* Struttura: **TCP/IP = 4 livelli**, **OSI = 7 livelli**
  (TCP/IP accorpa: Applicazione+Presentazione+Sessione; e Fisico+Data Link).
* **TCP/IP** orientato ai **protocolli**; **OSI** orientato alle **funzioni dei livelli**.
* **TCP/IP** enfatizza comunicazione **orizzontale** (peer-to-peer tra nodi); **OSI** anche organizzazione **verticale** dei servizi tra livelli.
* Approccio: **TCP/IP top-down** (dalle applicazioni); **OSI bottom-up** (dal livello fisico).

## 1.3 Esempi di Reti e Standardizzazione delle Reti
Le reti possono essere classificate per vari criteri; uno fondamentale è la **topologia**, cioè la disposizione geometrica dei nodi e dei collegamenti.

### 1.3.1 Categorizzazione per Topologia
**Topologia a bus**: un unico cavo backbone a cui tutti i dispositivi si collegano.

* Vantaggi: installazione semplice, minor uso di cavi.
* Svantaggi: difficile individuare guasti; scarsa scalabilità (limiti su lunghezza e numero nodi).

**Topologia ad anello**: ogni nodo collegato a due adiacenti, formando un circuito chiuso; i dati circolano lungo l’anello tramite ripetitori.

* Vantaggi: installazione semplice, facile aggiunta/rimozione nodi (solo due collegamenti).
* Svantaggi: un guasto interrompe l’intera rete; traffico condiviso sull’anello.

**Topologia a stella**: tutti i nodi collegati a un nodo centrale (hub/switch); comunicazione mediata dal centro.

* Vantaggi: facile installazione, pochi cavi per nodo, isolamento guasti (un link rotto non blocca la rete), troubleshooting semplice.
* Svantaggi: punto singolo di guasto (nodo centrale); maggiori requisiti e manutenzione del nodo centrale.

**Topologia mesh**: collegamenti punto-punto tra ogni coppia di nodi (completa).

* Numero link: n(n−1)/2.
* Vantaggi: nessuna congestione (link dedicati), alta affidabilità (guasti locali non propagano), maggiore sicurezza, facile diagnosi.
* Svantaggi: elevata complessità e costo (molti cavi), alto numero di porte I/O richieste, scarsa scalabilità.

### 1.3.2 Categorizzazione per Tecnologia
Le reti si classificano anche per **tecnologia di trasmissione**, distinguendo due modelli principali:

**Collegamenti broadcast**: un unico canale condiviso da tutti i nodi.
Ogni macchina trasmette pacchetti che vengono ricevuti da tutti gli altri dispositivi; il destinatario è identificato tramite un campo indirizzo nel pacchetto, che viene verificato per accettare o scartare il dato. Il mezzo è quindi comune e condiviso tra tutti i nodi.

**Collegamenti punto-punto**: la rete è composta da connessioni dedicate tra coppie di nodi (unicasting).
La comunicazione tra sorgente e destinazione avviene tramite uno o più nodi intermedi, attraverso instradamento del pacchetto lungo una sequenza di collegamenti dedicati.

### 1.3.3 Categorizzazione per Estensione
Le reti si classificano anche in base all’**estensione geografica**:

**PAN (Personal Area Network)**: copertura di pochi metri attorno all’utente. Include reti personali semplici (PC, smartphone, stampanti) e sistemi più complessi con sensori (es. monitoraggio parametri vitali).
Tecnologie: onde elettromagnetiche, IRDA, USB, FireWire.
Protocolli: Bluetooth, WiFi, ZigBee, NFC.

**LAN (Local Area Network)**: reti locali (abitazioni, uffici, campus), da pochi dispositivi fino a edifici multipli. Obiettivo: condivisione risorse (stampanti, storage, server, accesso Internet). Topologie tipiche: bus e anello, con necessità di meccanismi di controllo accesso per evitare collisioni.

**MAN (Metropolitan Area Network)**: copertura cittadina. Originariamente usata per TV via cavo, poi anche per Internet. Basata spesso su fibra ottica e backbone ad anello. In ambito moderno include anche tecnologie wireless come WiMAX e 5G per connettività urbana.

**WAN (Wide Area Network)**: reti su grandi distanze (regioni/nazioni). Possono essere semplici collegamenti punto-punto o complesse dorsali interconnesse. Struttura basata su router che inoltrano pacchetti tra LAN. È tipicamente una rete a **commutazione di pacchetto (store-and-forward)**. Alternativa: **commutazione di circuito**, con percorso dedicato per tutto il flusso.

Le reti si distinguono anche per il **mezzo trasmissivo**:

* **wireless**: onde elettromagnetiche, senza supporto fisico guidato;
* **wired**: supporto cablato;
* reti cellulari: sottotipo wireless mobile.

Classificazione wireless:

* per interconnessione (corto raggio, P2P, multipoint),
* per standard (IEEE 802 e varianti, soprattutto in LAN/MAN/WAN e reti mobili).

Esempi:

* Bluetooth punto-multipunto (PAN),
* WiFi LAN con architettura a infrastruttura (client ↔ access point).

Reti domestiche includono sistemi eterogenei (computer, intrattenimento, comunicazione, elettrodomestici) che convergono nella **domotica**, cioè integrazione e comunicazione tra dispositivi domestici.

Tipi aggiuntivi:

* **Home network**: rete domestica cablata/wireless mista,
* **Internetwork**: interconnessione tra reti diverse (es. LAN ↔ WAN),
* **wireless network**: trasmissione non guidata,
* **domotica**: rete integrata di dispositivi intelligenti in casa.

### 1.3.4 Standard di Rete e Organizzazioni
Gli **standard di rete** sono norme fondamentali che garantiscono interoperabilità tra dispositivi, protocolli e tecnologie. Ogni tecnologia di rete è basata su uno o più standard.

Storicamente si sono affermati **standard proprietari**, in cui le aziende mantenevano segrete le specifiche per ottenere vantaggio competitivo. Questo approccio limita la collaborazione e porta alla creazione di standard concorrenti incompatibili. Oggi prevalgono invece gli **standard aperti**, sviluppati da enti neutrali e condivisi pubblicamente, che favoriscono interoperabilità e diffusione tecnologica.

Gli standard possono essere necessari per:

* evoluzione e revisione di tecnologie esistenti,
* complessità che richiede più documenti,
* dipendenza tra tecnologie,
* collaborazione tra più organizzazioni.

Le principali **organizzazioni di standardizzazione** sono:

* **ISO**: ente internazionale, definisce anche il modello OSI.
* **ANSI**: coordina standard USA e accredita SDO.
* **ETSI**: standard telecomunicazioni europee (es. HiperLAN, regolazione spettro).
* **IEEE**: standard ingegneristici ed elettronici, fondamentale il progetto IEEE 802 (Ethernet, WiFi).
* **TIA/EIA**: standard su cablaggio e telecomunicazioni.
* **ITU-T**: standard globali per telecomunicazioni.
* **IETF**: standard Internet e TCP/IP, organizzata in gruppi di lavoro (WG) e aree gestite da AD.

Il successo di Internet dipende da standard globali condivisi, che garantiscono cooperazione tra hardware e software.

Aspetti critici della standardizzazione:

* **coerenza dei parametri di protocollo** (configurazioni compatibili tra nodi),
* **unicità globale delle risorse** (es. indirizzi IP univoci).

La gestione delle risorse Internet è centralizzata ma gerarchica:

* **IANA** (oggi sotto ICANN) coordina indirizzi IP, DNS e numeri di protocollo.
* Distribuzione tramite **RIR**:

  * AfriNIC (Africa)
  * APNIC (Asia-Pacifico)
  * ARIN (Nord America)
  * LACNIC (America Latina)
  * RIPE NCC (Europa e aree limitrofe)

Gli indirizzi IP oggi sono assegnati tramite **CIDR**, che sostituisce il vecchio schema classful. CIDR utilizza allocazione gerarchica di blocchi di indirizzi: IANA → RIR → ISP → reti locali.

Gli standard Internet sono definiti tramite **RFC (Requests for Comments)**, documenti pubblici che descrivono proposte, specifiche o informazioni tecniche. Non tutte le RFC diventano standard.

Ciclo di standardizzazione:

1. proposta iniziale (bozza senza status formale),
2. **Proposed Standard** (stabile e utilizzata),
3. **Draft Standard** (≥6 mesi + ≥2 implementazioni interoperabili),
4. **Internet Standard** (adozione ampia e consolidata).

Categorie RFC:

* Best Current Practice (linee guida),
* Informativo (documentazione),
* Sperimentale (proposte non ancora standard).

Tipologie di standard:

* **de jure**: formalizzati da enti ufficiali con procedure rigorose,
* **de facto**: adottati dal mercato senza approvazione iniziale formale, ma possono evolvere in de jure.

# Capitolo 2 - Livello Fisico
I dati naturali sono per lo più **analogici**, cioè continui (es. sismografo). I dati digitali invece sono **discreti**, definiti da valori finiti (es. codice Morse). Un **segnale** è un’onda elettrica/elettromagnetica che trasporta dati; può essere analogico o digitale.

**Segnale analogico**: varia nel tempo in modo continuo, con infiniti valori in un intervallo (es. tensione/corrente/frequenza). Rappresenta grandezze fisiche (luce, suono, temperatura, pressione). È più ricco e naturale ma soggetto a distorsioni nel tempo e nella distanza.

**Segnale digitale**: assume valori discreti finiti (0/1). Usato in elettronica e reti.

### Segnali analogici – pro/contro

**Vantaggi**:

* elaborazione semplice (audio/video),
* alta densità informativa,
* minor banda richiesta,
* rappresentazione fedele dei fenomeni fisici,
* minore sensibilità a tolleranze elettriche.

**Svantaggi**:

* degrado su lunghe distanze,
* perdita di generazione (accumulo errori),
* forte sensibilità a rumore/distorsione,
* qualità inferiore rispetto al digitale.

### Segnali digitali – pro/contro

**Vantaggi**:

* maggiore immunità a rumore/interferenze,
* elaborazione flessibile (DSP programmabile),
* sicurezza (crittografia, compressione),
* rilevamento e correzione errori,
* memorizzazione efficiente,
* trasmissione su lunghe distanze.

**Svantaggi**:

* maggiore larghezza di banda richiesta,
* maggiore complessità hardware,
* maggiore consumo energetico,
* sistemi più complessi rispetto all’analogico.

---

### Segnali sinusoidali

I segnali analogici periodici possono essere:

* **semplici** (sinusoide pura, non scomponibile),
* **compositi** (somma di sinusoidi).

Una sinusoide è definita da:

* **ampiezza**: valore massimo (energia del segnale),
* **frequenza**: variazione nel tempo (Hz), con periodo T = 1/f,
* **fase**: posizione iniziale dell’onda.

Formula:
f(t) = A sin(ωt + φ)

Il segnale può essere analizzato nel:

* **dominio del tempo** (variazione ampiezza),
* **dominio della frequenza** (scomposizione in frequenze componenti).

Segnali complessi contengono più informazione e possono essere scomposti tramite **serie di Fourier** in armoniche (multipli della frequenza fondamentale), consentendo analisi e ricostruzione tramite trasformata inversa.

---

### Banda e trasmissione

* **Larghezza di banda**: intervallo di frequenze utilizzabili senza distorsione (Hz), dipende dal mezzo fisico.
* **Banda base**: segnali con frequenza minima 0 Hz.
* **Banda passante**: segnali filtrati in un intervallo specifico di frequenze.

---

### Degrado del segnale

Durante la trasmissione il segnale si altera per resistenza del mezzo:

* **attenuazione**: perdita di energia con la distanza; si misura in dB; può essere compensata con amplificatori.

### 2.1.2 Modalità di multiplazione (spiegazione)

La **multiplazione (multiplexing)** è una tecnica fondamentale nelle reti che permette a **più flussi di dati** di condividere lo stesso mezzo trasmissivo (cavo, fibra ottica o canale radio), ottimizzando l’uso della banda disponibile.

In pratica, invece di dedicare un canale a ogni comunicazione (soluzione costosa e inefficiente), si **suddivide logicamente un unico canale fisico** in più canali “virtuali”.

---

## Idea chiave

Il canale trasmissivo ha due risorse principali:

* **Banda (frequenza)**
* **Tempo**

La multiplazione consiste nel dividere e organizzare queste risorse tra più utenti.

---

## Come funziona

* Un dispositivo chiamato **Multiplexer (MUX)** raccoglie i dati di più sorgenti.
* Li combina in un unico flusso.
* All’altro capo, un **Demultiplexer (DEMUX)** separa il flusso e ridistribuisce i dati ai destinatari corretti.

---

## Perché si usa

Senza multiplazione, ogni comunicazione richiederebbe:

* un canale dedicato
* oppure una coppia trasmettitore/ricevitore per ogni flusso

Questo sarebbe **molto costoso e poco scalabile**. La multiplazione risolve questo problema rendendo efficiente l’uso delle infrastrutture.

---

## Tipi principali di multiplazione (per completezza)

Anche se non sono tutti descritti nel tuo testo, in genere si distinguono:

* **TDM (Time Division Multiplexing)** → divisione del tempo
* **FDM (Frequency Division Multiplexing)** → divisione delle frequenze
* **WDM (Wavelength Division Multiplexing)** → usata nelle fibre ottiche (diverse lunghezze d’onda)
* **CDM (Code Division Multiplexing)** → separazione tramite codici

---

## In sintesi

La multiplazione permette di:

* condividere lo stesso mezzo tra più utenti
* aumentare l’efficienza del canale
* ridurre costi e infrastruttura
* gestire comunicazioni simultanee in modo ordinato

---

### 2.1.3 Criteri di valutazione delle reti

Le prestazioni di una rete vengono valutate tramite la **QoS (Quality of Service)** e, in alcuni casi, anche tramite la **QoE (Quality of Experience)**, cioè la percezione dell’utente. I principali parametri usati sono: **larghezza di banda, throughput, latenza, prodotto banda-ritardo e jitter**.

---

### Larghezza di banda

La **larghezza di banda** indica la quantità massima di dati che un canale può trasportare in un certo intervallo di tempo.

* Nei sistemi digitali si misura in **bit al secondo (bps)**
* Nei sistemi analogici si misura in **Hertz (Hz)**

È importante capire che la larghezza di banda rappresenta la **capacità teorica del canale**, non la velocità reale percepita dall’utente. Infatti spesso viene confusa con la “velocità di Internet”, ma quest’ultima dipende anche da altri fattori, soprattutto dalla latenza.

In pratica:

* **banda = capacità**
* **velocità = dati effettivamente trasferiti nel tempo**

Un altro punto importante è che aumentare la banda non aumenta automaticamente la velocità, perché dipende anche da come il canale viene utilizzato.

---

### Throughput

Il **throughput** è la quantità di dati effettivamente trasmessi in un’unità di tempo.

Dipende da vari fattori:

* larghezza di banda disponibile
* rumore del segnale
* limiti hardware

È sempre un valore **reale e misurato**, mentre la banda è un valore **teorico massimo**. Per questo motivo il throughput è sempre minore o uguale alla larghezza di banda.

---

### Ritardo (latenza)

La **latenza** è il tempo necessario affinché un pacchetto raggiunga la destinazione, partendo dal primo bit inviato fino all’ultimo bit ricevuto.

È composta da quattro elementi:

* **Tempo di propagazione**: tempo necessario al segnale per attraversare il mezzo
* **Tempo di trasmissione**: tempo necessario per “inviare” tutti i bit sul canale
* **Tempo di accodamento**: tempo passato nei buffer dei router in attesa di essere inoltrati
* **Tempo di elaborazione**: tempo che il dispositivo impiega per decidere dove inoltrare il pacchetto

La somma di questi componenti dà il ritardo totale:

R = tP + tT + tA + rE

La latenza può essere misurata anche come **RTT (round-trip time)**, cioè andata e ritorno.

È importante distinguere:

* **latenza** = tempo di viaggio del pacchetto
* **tempo di risposta** = latenza + elaborazione del nodo destinatario

---

### Prodotto banda–ritardo

Il prodotto tra **larghezza di banda e ritardo** rappresenta la quantità di dati che possono essere “in transito” nel canale nello stesso momento.

Può essere visto come un tubo:

* lunghezza = ritardo
* diametro = banda
  → il volume del tubo = quantità di dati presenti nel canale

Questo parametro è importante perché indica quanti bit il mittente deve inviare prima di ricevere una conferma del primo bit arrivato.

---

### Jitter

Il **jitter** è la variazione del ritardo tra pacchetti consecutivi.

Se i pacchetti arrivano con tempi molto diversi, si parla di jitter elevato, che è problematico soprattutto per applicazioni **real-time** come:

* audio
* video
* videoconferenze

Effetti del jitter:

* distorsione audio (click, interruzioni)
* sfarfallio video
* perdita o disordine dei dati

Cause principali:

* interferenze elettromagnetiche
* congestione di rete
* percorsi diversi dei pacchetti

Si riduce usando:

* buffer nei dispositivi
* instradamento più stabile dei pacchetti

---

### Altri criteri generali

Oltre ai parametri principali, una rete viene valutata anche per:

* **affidabilità**: capacità di trasmettere senza errori
* **sicurezza**: protezione dei dati durante la trasmissione
