## Sezione 1.1: Scopi delle Reti e Loro Classificazione

**1. Quali sono i quattro principali parametri che influenzano le prestazioni di una rete di calcolatori come sistema di telecomunicazione?**

I quattro parametri sono:
1. **Consegna**: il sistema deve consegnare le informazioni al corretto destinatario, e solo a esso.
2. **Precisione**: il sistema deve consegnare i dati senza alterazioni; in caso di errori, deve essere in grado di ripristinarne la correttezza.
3. **Tempestività**: il sistema deve garantire la consegna in tempi utili; dati che arrivano in ritardo potrebbero essere inutili.
4. **Jitter**: è la variazione del ritardo con cui i dati giungono al destinatario.

---

**2. Descrivi le differenze tra comunicazione Simplex, Half-Duplex e Full-Duplex, fornendo un esempio per ciascuna.**

| Modalità | Direzione | Esempio | Vantaggio/Svantaggio |
|----------|-----------|---------|----------------------|
| **Simplex** | Una sola direzione (sempre mittente → sempre destinatario) | Televisione (TV trasmittente → apparecchio ricevente) | Vantaggio: nessun problema di traffico; svantaggio: nessun feedback |
| **Half-Duplex** | Entrambe le direzioni, ma non contemporaneamente | Walkie-talkie | Richiede alternanza ("passo la palla") |
| **Full-Duplex** | Entrambe le direzioni contemporaneamente | Telefonata | Vantaggio: comunicazione simultanea; svantaggio: non tutta la banda è sfruttata per singolo flusso |

---

**3. Spiega il paradigma Client-Server, elencando almeno due vantaggi e due svantaggi rispetto all'architettura Peer-to-Peer (P2P).**

**Client-Server**: il client (processo attivo) genera richieste di servizi; il server (processo reattivo) esegue computazioni solo a seguito di richieste.

| Vantaggi | Svantaggi |
|----------|------------|
| Gestione dati (backup) facile ed economica | Se il server si guasta, l'intera rete è inattiva |
| Prestazioni migliori (server più potente) | Costo di manutenzione del server elevato |
| Sicurezza più facile da gestire | Aggiornamenti costosi per gestire più richieste |
| Scalabilità limitata solo dalle risorse del server | |

---

**4. In che modo il modello Peer-to-Peer (P2P) puro gestisce l'assenza di un server centrale per la connessione tra i nodi?**

Nel P2P puro, non essendoci un server centrale, viene integrata una **Overlay network virtuale** (rete sovrapposta virtuale), con la quale i nodi formano una sottorete rispetto alla rete fisica principale. L'overlay è utilizzata principalmente per **indicizzare e mappare i nodi**, in modo da conoscere la topologia della rete.

---

**5. Qual è la principale differenza tra un "sistema distribuito" e una semplice "rete di calcolatori"?**

La differenza sta nel **middleware**. In un sistema distribuito, la garanzia della comunicazione e la coerenza delle informazioni scambiate è compito del middleware (es. DBMS, Web Server). Una rete di calcolatori è la mera connessione fisica e logica tra dispositivi; il sistema distribuito si appoggia sulla rete per svolgere un compito specifico.

*Esempio*: Internet è una rete di calcolatori; il World Wide Web è un sistema distribuito che si appoggia su Internet.

---

## Sezione 1.1.2: Grids, Cloud e Virtualizzazione

**6. Definisci i tre principali modelli di servizio del Cloud Computing: SaaS, PaaS e IaaS. In quale di questi l'azienda cliente ha il pieno controllo sulle applicazioni ma non sull'infrastruttura sottostante?**

| Modello | Significato | Controllo del cliente |
|---------|-------------|------------------------|
| **SaaS** | Software-as-a-Service | Solo sulle funzionalità del software (configurazione identità e accessi) |
| **PaaS** | Platform-as-a-Service | **Pieno controllo sulle applicazioni e impostazioni di configurazione** (non su rete, server, OS, storage) |
| **IaaS** | Infrastructure-as-a-Service | Gestione di networking, storage e risorse di calcolo (non su infrastruttura fisica sottostante) |

La risposta alla domanda è **PaaS**.

---

**7. Confronta i modelli di deployment Public Cloud, Private Cloud e Hybrid Cloud, evidenziando vantaggi e svantaggi in termini di sicurezza e costi.**

| Modello | Descrizione | Vantaggi | Svantaggi |
|---------|-------------|----------|------------|
| **Public Cloud** | Disponibile via internet per il pubblico, proprietà di un'organizzazione | Flessibile, affidabile, altamente scalabile, costi bassi | Scarsa sicurezza, bassa personalizzazione |
| **Private Cloud** | Disponibile solo per un'organizzazione, gestito On Premise | Maggiore controllo su dati e accessi, protezione privacy | Costo elevato, poca scalabilità |
| **Hybrid Cloud** | Combinazione di due o più modelli (es. pubblico + privato) | Salvaguardia risorse critiche, efficienza in costi e risorse, portabilità dei dati | Complessità di gestione |

**Community Cloud**: modello intermedio (più sicurezza del pubblico, costi ridotti rispetto al privato), consigliato per enti di ricerca e aziende consociate.

---

**8. Cosa si intende per Virtualizzazione? Descrivi il concetto di "incapsulamento" in questo contesto.**

La **virtualizzazione** è la capacità di astrarre hardware e software su una sola macchina fisica, permettendo l'esecuzione di più sistemi operativi e applicazioni su un singolo host.

**Incapsulamento**: è uno dei concetti chiave della virtualizzazione. Significa che l'intero stato di una macchina virtuale (VM) viene salvato su file. Ciò consente di **spostare e copiare le macchine virtuali con la stessa facilità con cui si spostano e copiano file**, indipendentemente dall'hardware sottostante.

Altri concetti chiave: partizionamento, isolamento, indipendenza hardware.

---

**9. Qual è la funzione del middleware in una rete Grid?**

Il **middleware** in una rete Grid è il protocollo/software di rete che **gestisce e coordina le risorse condivise** all'interno dell'organizzazione virtuale. È il vero responsabile della rete Grid, mentre i nodi di controllo sono semplicemente i suoi esecutori.

---

**10. Quali sono i tre nodi che compongono una rete di Grid Computing?**

1. **Nodo di controllo**: server che amministra l'intera rete e tiene conto delle risorse nel pool di rete.
2. **Provider**: computer che contribuisce con le proprie risorse al pool di risorse in rete.
3. **Utente**: nodo che utilizza le risorse.

Un computer può assumere sia il ruolo di utente che di provider in base alle esigenze.

---

## Sezione 1.2: Modelli di Riferimento OSI e TCP/IP

**11. Spiega il principio di "incapsulamento" (o incapsulamento) nei modelli a strati. Cosa aggiunge tipicamente ogni livello ai dati ricevuti dal livello superiore?**

L'**incapsulamento** è il meccanismo in cui l'informazione (PDU - Protocol Data Unit) passa da un livello superiore a quello inferiore, e ogni livello aggiunge un insieme di dati chiamato **header** (e a volte una **tail**).

Nel nodo ricevente avviene il processo inverso (**decapsulamento**), con le intestazioni eliminate a ogni livello man mano che l'informazione procede verso il livello applicazione.

---

**12. Quali sono le principali differenze tra un servizio di rete "orientato alla connessione" (connection-oriented) e uno "senza connessione" (connectionless)? A quale sistema della vita reale vengono paragonati?**

| Caratteristica | Connection-oriented | Connectionless |
|----------------|---------------------|----------------|
| Analogia | Sistema telefonico | Servizio postale |
| Fasi | 3 fasi: instaurazione, trasferimento, terminazione | 1 fase: trasferimento dati |
| Negoziazione | Sì, parametri negoziati | No |
| Affidabilità | Maggiore | Minore |

---

**13. Descrivi le funzioni principali del Livello Fisico, del Livello Collegamento Dati e del Livello Rete nel modello OSI.**

| Livello | Funzioni principali |
|---------|---------------------|
| **Fisico** | Trasmissione di bit grezzi sul canale; sincronizzazione bit; controllo velocità; definizione topologie fisiche; modalità di trasmissione (simplex, half-duplex, full-duplex) |
| **Collegamento Dati** | Framing; indirizzamento fisico (MAC); controllo errori; controllo di flusso; controllo degli accessi al mezzo (MAC) |
| **Rete** | Instradamento (routing); indirizzamento logico (IP); consegna da rete a rete |

---

**14. Quanti e quali livelli compongono il modello TCP/IP? A quali livelli OSI corrispondono approssimativamente i livelli "Network Interface" e "Application" del modello TCP/IP?**

Il modello TCP/IP ha **4 livelli**:

| Livello TCP/IP | Livelli OSI corrispondenti |
|----------------|----------------------------|
| Applicazione | Applicazione + Presentazione + Sessione |
| Trasporto | Trasporto |
| Internet | Rete |
| Network Interface | Collegamento Dati + Fisico |

Il livello **Network Interface** corrisponde a **Collegamento Dati + Fisico** (livelli 1-2 OSI).  
Il livello **Application** corrisponde a **Applicazione + Presentazione + Sessione** (livelli 5-7 OSI).

---

**15. Qual è il ruolo del protocollo IP (Internet Protocol) e del protocollo TCP (Transmission Control Protocol) all'interno della suite TCP/IP?**

| Protocollo | Livello | Ruolo |
|------------|---------|-------|
| **IP** | Internet | Responsabile della consegna dei pacchetti dall'host sorgente all'host destinatario osservando gli indirizzi IP nelle intestazioni. Versioni: IPv4 e IPv6. |
| **TCP** | Trasporto | Protocollo orientato alla connessione che fornisce comunicazione affidabile e priva di errori, con segmentazione, riassemblaggio, controllo di flusso e ritrasmissione in caso di errore. |

---

**16. Quali sono le principali differenze tra il modello OSI e quello TCP/IP in termini di numero di livelli e approccio (orizzontale vs. verticale)?**

| Caratteristica | OSI | TCP/IP |
|----------------|-----|--------|
| Numero di livelli | 7 | 4 |
| Tipo | Modello concettuale | Modello pratico, implementato |
| Approccio | Verticale (dal basso verso l'alto) | Orizzontale (tra livelli pari di nodi diversi), dall'alto verso il basso |
| Focalizzazione | Standardizzazione di hardware (router, switch, etc.) | Client-server, protocolli |
| Utilizzo | Quasi mai usato nella pratica | Usato su Internet |

---

## Sezione 1.3: Esempi di Reti e Standardizzazione

**17. Descrivi la topologia a stella (star). Qual è il suo principale punto di vulnerabilità e perché è ancora ampiamente utilizzata?**

Nella **topologia a stella**, ogni dispositivo è connesso a un dispositivo centrale (hub o switch). I dispositivi non comunicano direttamente tra loro, ma tramite il nodo centrale.

**Principale vulnerabilità**: se il nodo centrale si guasta, l'intera rete si interrompe.

**Motivi dell'ampio utilizzo**:
- Poco costosa (ogni dispositivo necessita solo di una porta I/O)
- Facile installazione
- Se un singolo collegamento fallisce, il resto della rete continua a funzionare
- Facile rilevamento dei guasti

---

**18. Qual è il numero di collegamenti necessari per connettere n dispositivi in una topologia a maglia completa (full mesh)?**

\[
\frac{n(n-1)}{2}
\]

*Esempio*: con 4 dispositivi → (4×3)/2 = 6 collegamenti.

---

**19. Distingui le reti broadcast dalle reti point-to-point (unicasting).**

| Caratteristica | Reti broadcast | Reti point-to-point |
|----------------|----------------|---------------------|
| Canale | Unico canale condiviso da tutte le macchine | Molte connessioni tra singole coppie di macchine |
| Comunicazione | Un messaggio viene ricevuto da tutte le macchine; campo indirizzo individua il destinatario | Per andare dalla sorgente alla destinazione, un pacchetto deve visitare una o più macchine intermedie |
| Termine alternativo | - | Unicasting |

---

**20. Classifica le reti in base all'estensione geografica (PAN, LAN, MAN, WAN), indicando per ciascuna un esempio d'uso tipico.**

| Sigla | Nome | Estensione | Esempio tipico |
|-------|------|------------|----------------|
| **PAN** | Personal Area Network | Pochi metri | Computer portatile collegato a stampante e smartphone |
| **LAN** | Local Area Network | Qualche centinaio di metri | Rete domestica o di piccoli uffici; campus universitario |
| **MAN** | Metropolitan Area Network | Copertura cittadina | Televisione via cavo americana; dorsale metropolitana in fibra ottica |
| **WAN** | Wide Area Network | Molti km, macro-regioni o nazioni | Dorsale di Internet; connessione tra sedi distanti di un'azienda |

---

**21. Cos'è una rete a commutazione di pacchetto (packet-switched) e in cosa differisce da una a commutazione di circuito (circuit-switched)?**

| Caratteristica | Commutazione di pacchetto | Commutazione di circuito |
|----------------|---------------------------|--------------------------|
| Percorso | Ogni pacchetto può seguire percorsi diversi | Percorso unico e dedicato per tutti i pacchetti del flusso |
| Risorse | Condivise | Dedicata per tutta la durata della connessione |
| Esempio | Internet | Rete telefonica tradizionale |
| Meccanismo | Store-and-forward (i router inoltrano i pacchetti) | Circuito fisico instaurato tra mittente e destinatario |

---

## Sezione 1.3.4: Standard di Rete e Organizzazioni

**22. Qual è la differenza tra uno standard proprietario e uno standard aperto? Perché gli standard aperti hanno avuto più successo nel settore delle reti?**

| Standard proprietario | Standard aperto |
|----------------------|-----------------|
| Sviluppato e controllato da una singola azienda | Amministrato da organizzazione senza scopo di lucro o gruppo industriale ampio |
| Altre aziende sono escluse dal processo di sviluppo | Chiunque può contribuire |
| Incentiva lo sviluppo di standard concorrenti | Favorisce l'interoperabilità e la collaborazione |

**Perché gli standard aperti hanno più successo**: perché permettono a produttori diversi di realizzare dispositivi e componenti che possono coesistere e funzionare insieme, favorendo la concorrenza, l'innovazione e l'adozione universale (es. Internet non sarebbe possibile senza standard aperti).

---

**23. Quali sono le principali organizzazioni di standardizzazione citate nel testo? Di quale famoso modello è responsabile l'ISO?**

| Organizzazione | Settore/Specialità |
|----------------|---------------------|
| **ISO** | Modello OSI (Open System Interconnection) |
| **ANSI** | Coordinamento standard informatici ed elettronici negli USA |
| **ETSI** | Standard di telecomunicazione per il mercato europeo |
| **IEEE** | Progetto IEEE 802 (Ethernet, WiFi, Bluetooth) |
| **EIA/TIA** | Standard per cablaggio di reti |
| **ITU-T** | Standard per l'industria delle telecomunicazioni |
| **IETF** | Sviluppo tecnologie Internet e TCP/IP (RFC) |

L'**ISO** (International Organization for Standardization) è responsabile del **modello di riferimento OSI**.

---

**24. Cosa significa l'acronimo RFC? Descrivi brevemente le fasi che un documento deve attraversare per diventare un "Internet Standard".**

**RFC** = *Request for Comments* (richiesta di commenti). Sono documenti tecnici pubblicati dall'IETF che descrivono protocolli, tecnologie o proposte per Internet.

**Fasi per diventare Internet Standard**:

1. **Sviluppo di base**: specifica senza status formale, solo un'idea.
2. **Proposed Standard**: specifica stabile, sufficientemente utilizzata, nessun problema riscontrato.
3. **Draft Standard**: rimane Proposed Standard per almeno 6 mesi ed esistono almeno due implementazioni indipendenti che hanno interagito per provarne le funzionalità.
4. **Internet Standard**: supera un'ulteriore soglia di 4 mesi con utilizzo considerevole.

Altre categorie RFC: Best Current Practice, Informativo, Sperimentale.

---

**25. Qual è il ruolo dell'ICANN e dell'IANA nella gestione di Internet?**

| Organizzazione | Ruolo |
|----------------|-------|
| **IANA** (Internet Assigned Numbers Authority) | Storicamente responsabile dell'assegnazione degli indirizzi IP, della gestione dei nomi di dominio DNS e del registro dei protocolli |
| **ICANN** (Internet Corporation for Assigned Names and Numbers) | Oggi ha la responsabilità generale; IANA opera sotto la sua egida, ancora responsabile dell'assegnazione degli indirizzi IP e del coordinamento dei parametri |

---

**26. Cosa sono i RIR (Regional Internet Registries)? Fai un esempio di un RIR europeo.**

I **RIR** (Regional Internet Registries) sono organizzazioni responsabili dell'allocazione gerarchica degli indirizzi IP e di altre risorse Internet (es. numeri AS) per specifiche regioni geografiche. IANA assegna blocchi di indirizzi ai RIR, che poi li suddividono tra ISP, organizzazioni o altri registri (NIR, LIR).

**Esempio di RIR europeo**: **RIPE NCC** (Réseaux IP Européens Network Coordination Centre) - copre Europa, Medio Oriente e Asia Centrale.

Altri RIR:
- AfriNIC (Africa)
- APNIC (Asia e Oceano Pacifico)
- ARIN (Nord America)
- LACNIC (America Latina e Caraibi)


## Sezione 2.1: Basi Teoriche della Comunicazione e Trasmissione Fisica dei Dati

**1. Quali sono le principali differenze tra un segnale analogico e un segnale digitale? Fornisci un esempio per ciascuno.**

| Caratteristica | Segnale analogico | Segnale digitale |
|----------------|-------------------|------------------|
| **Natura** | Continuo nel tempo e nei valori | Discreto (valori finiti, tipicamente 0 e 1) |
| **Rappresentazione** | Onda continua (es. sinusoidale) | Sequenza di impulsi (onda quadra) |
| **Esempio** | Segnale audio da un microfono, sismografo | Codice Morse, dati in un computer |
| **Vantaggi** | Maggiore densità, minore larghezza di banda | Più immune a rumore e distorsione, crittografabile, memorizzabile |
| **Svantaggi** | Soggetto a rumore e perdita di qualità su lunghe distanze | Richiede maggiore larghezza di banda per la stessa quantità di informazioni |

---

**2. Descrivi i tre parametri fondamentali che identificano un'onda sinusoidale (ampiezza, frequenza, fase) e il loro significato fisico.**

Un'onda sinusoidale semplice è descritta dalla formula: \( f(t) = A \sin(\omega t + \phi) \)

| Parametro | Simbolo | Significato fisico |
|-----------|---------|-------------------|
| **Ampiezza** | A | Valore assoluto del segnale; proporzionale all'energia trasportata. Graficamente è il picco della sinusoide. |
| **Frequenza** | ω (omega) o f | Velocità con cui il segnale cambia nel tempo. Si misura in Hertz (Hz). Frequenza alta = cambiamenti veloci; frequenza bassa = cambiamenti lenti. |
| **Fase** | φ (phi) | Posizione dell'onda rispetto al tempo zero; frazione di periodo trascorsa rispetto a un istante fissato. |

**Relazioni importanti**:
- Periodo \( T = \frac{1}{f} \) (tempo per un ciclo completo)
- Lunghezza d'onda \( \lambda = \frac{c}{f} \) (distanza tra due massimi consecutivi)

---

**3. Cosa si intende per "larghezza di banda" in Hertz e in bps? Qual è la relazione tra queste due definizioni?**

| Definizione | Unità di misura | Significato |
|-------------|----------------|-------------|
| **Larghezza di banda in Hertz** | Hz | Intervallo di frequenze contenuto in un segnale composito (differenza tra frequenza massima e minima che un canale lascia passare) |
| **Larghezza di banda in bps** | bit al secondo (bps) | Numero di bit al secondo che un canale o collegamento può trasmettere |

**Relazione**: Se un ciclo di segnale trasporta 1 bit di informazione, la frequenza in Hz è uguale alla velocità in bps. È possibile aumentare la velocità (bps) senza modificare la frequenza (Hz) facendo sì che ogni ciclo trasporti più bit (es. tecniche di modulazione).

---

**4. Spiega il concetto di attenuazione di un segnale. Come viene misurata e con quale dispositivo si può compensare?**

**Attenuazione**: è la perdita di energia che un segnale subisce mentre attraversa un mezzo trasmissivo. La resistenza del mezzo fa sì che la forza del segnale diminuisca con l'aumentare della distanza.

**Misurazione**: l'attenuazione è misurata in **decibel (dB)**, che esprimono il rapporto di potenza tra due segnali o tra lo stesso segnale in due punti diversi:
\[
\text{attenuazione} = 10 \log_{10} \frac{P_{\text{trasmessa}}}{P_{\text{ricevuta}}}
\]

**Compensazione**: dispositivi chiamati **amplificatori** (nei sistemi analogici) o **rigeneratori/ripetitori** (nei sistemi digitali) vengono utilizzati per riportare il segnale attenuato all'energia originale.

---

**5. Cosa sono le armoniche e qual è il ruolo della serie di Fourier nell'analisi dei segnali periodici?**

**Armoniche**: sono frequenze multiple della frequenza fondamentale \( \omega_1 \), cioè \( \omega_n = n \cdot \omega_1 \).

**Serie di Fourier**: è uno strumento matematico che permette di decomporre un segnale periodico generico in una somma infinita di sinusoidi (armoniche) con frequenze, ampiezze e fasi diverse.

**Ruolo**: la scomposizione tramite serie di Fourier (al nodo mittente) permette una successiva rapida ricostruzione del segnale al nodo destinatario tramite la formula inversa (antitrasformata). È fondamentale perché segnali complessi (utili per la trasmissione di informazioni) possono essere analizzati come combinazione di sinusoidi semplici.

---

**6. Distingui i segnali in banda base dai segnali a banda passante.**

| Caratteristica | Segnale in banda base | Segnale a banda passante |
|----------------|----------------------|--------------------------|
| **Frequenza più bassa** | 0 Hz | Maggiore di 0 Hz |
| **Larghezza di banda** | Coincide con la frequenza massima | Intervallo di frequenze che passa attraverso un filtro |
| **Origine** | Segnale originale non modulato | Segnale in uscita da un filtro passabanda |
| **Esempio** | Segnale audio non modulato | Segnale radio modulato |

---

## Sezione 2.1.2: Modalità di Multiplazione (Multiplexing)

**7. Che cos'è il multiplexing e perché è importante nelle reti di telecomunicazione?**

Il **multiplexing** (multiplazione) è la tecnica che consente a più utenti di trasferire informazioni attraverso lo stesso canale di comunicazione (linea di trasmissione come doppino, cavo coassiale, fibra, o etere).

**Importanza**: permette di condividere un mezzo ad alta capacità tra più flussi di comunicazione, evitando di dover installare canali fisici separati per ogni coppia di comunicanti (approccio costoso). I gradi di libertà sfruttabili sono la **banda/frequenza** e il **tempo**.

**Componenti**: un **multiplexer** divide il canale fisico in sottocanali e li assegna agli utenti; un **demultiplexer** all'altra estremità ricostruisce i flussi originali.

---

**8. Qual è la funzione di un multiplexer e di un demultiplexer in un sistema di comunicazione condiviso?**

| Dispositivo | Posizione | Funzione |
|-------------|-----------|----------|
| **Multiplexer (MUX)** | Lato mittente (all'inizio del canale) | Riceve dati da più utenti/flussi, li combina e li trasmette attraverso un unico canale fisico condiviso, assegnando a ciascun utente un sottocanale (frequenza, time slot, etc.) |
| **Demultiplexer (DEMUX)** | Lato destinatario (alla fine del canale) | Riceve il flusso combinato dal canale unico, identifica ciascun flusso originale (es. tramite etichette di frequenza o temporali), e invia le informazioni ai rispettivi destinatari |

---

## Sezione 2.1.3: Criteri di Valutazione delle Reti (QoS)

**9. Spiega la differenza tra larghezza di banda e throughput, utilizzando un'analogia (es. un tubo e il flusso d'acqua).**

| Concetto | Definizione | Analogia del tubo |
|----------|-------------|-------------------|
| **Larghezza di banda** | Capacità massima teorica di trasmissione di un collegamento (misurata in bps) | **Diametro del tubo** - la quantità massima d'acqua che potrebbe passare |
| **Throughput** | Quantità effettiva di dati trasmessi per unità di tempo (misurata in bps) | **Flusso effettivo d'acqua** che esce dal tubo (in rosso nella figura) |

**Relazione**: il throughput non potrà mai superare la larghezza di banda. La larghezza di banda è la misura della trasmissione **potenziale**; il throughput è la misura **effettiva**.

---

**10. Descrivi i quattro contributi principali al ritardo totale (latenza) in una rete: tempo di propagazione, tempo di trasmissione, tempo di accodamento e ritardo di elaborazione.**

Il ritardo totale \( R \) è dato da: \( R = t_P + t_T + t_A + r_E \)

| Componente | Formula | Significato |
|------------|---------|-------------|
| **Tempo di propagazione** (\( t_P \)) | \( t_P = \frac{d}{v_P} \) (d = distanza, \( v_P \) = velocità di propagazione) | Tempo necessario al bit per viaggiare fisicamente da sorgente a destinazione |
| **Tempo di trasmissione** (\( t_T \)) | \( t_T = \frac{G}{L} \) (G = grandezza messaggio, L = larghezza di banda) | Tempo per inviare tutti i bit del messaggio sulla linea |
| **Tempo di accodamento** (\( t_A \)) | Variabile, dipende dal traffico e dalle politiche QoS | Tempo che un pacchetto trascorre in coda in un router in attesa di essere inoltrato |
| **Ritardo di elaborazione** (\( r_E \)) | Dipende dalla complessità del protocollo e dalla potenza hardware | Tempo che il router impiega per decidere dove inviare il pacchetto |

---

**11. Cosa si intende per Round-Trip Time (RTT)? In cosa differisce dalla latenza "one-way"?**

| Concetto | Definizione |
|----------|-------------|
| **Latenza one-way** | Tempo che un singolo pacchetto impiega per percorrere il tragitto dal mittente al destinatario |
| **Round-Trip Time (RTT)** | Tempo totale che intercorre tra l'invio di un messaggio da un capo all'altro di una rete e la ricezione della risposta (andata + ritorno) |

**Differenza chiave**: la latenza one-way considera solo il percorso di andata; l'RTT considera anche il percorso di ritorno ed eventuali tempi di elaborazione al destinatario. L'RTT è spesso più rilevante per i protocolli che richiedono conferme (es. TCP).

**Differenza tra latenza e tempo di risposta**: il tempo di risposta aggiunge alla latenza il tempo che un nodo impiega per elaborare il pacchetto e rimetterlo sul canale; quindi il tempo di risposta è sempre maggiore della latenza.

---

**12. Qual è il significato fisico del prodotto "larghezza di banda × ritardo"? Perché è importante nelle reti ad alte prestazioni?**

Il prodotto **larghezza di banda × ritardo** rappresenta il **volume del canale di comunicazione** (analogia del tubo: ritardo = lunghezza, larghezza di banda = diametro; prodotto = volume).

**Significato fisico**: è il numero massimo di bit che possono essere in transito attraverso il canale in un dato istante.

**Importanza nelle reti ad alte prestazioni**: corrisponde alla quantità di bit che il mittente deve trasmettere prima che il primo bit arrivi al destinatario. Se il mittente deve attendere una conferma (ACK) prima di inviare altri dati, dovrà inviare una quantità di dati pari a \( RTT \times L \) prima di sapere che il primo bit è stato ricevuto con successo. Questo concetto è fondamentale per il dimensionamento dei buffer e per l'efficienza dei protocolli di trasporto.

---

**13. Definisci il jitter. Per quali tipi di applicazioni è particolarmente problematico e come può essere mitigato?**

**Jitter**: è la **varianza del ritardo del pacchetto**, ovvero la variazione del tempo di consegna tra pacchetti diversi appartenenti allo stesso flusso. Si misura in millisecondi (ms).

**Applicazioni particolarmente sensibili**: tutte le applicazioni **tempo-sensibili** (real-time), in particolare:
- Audio/VoIP (può introdurre "clic" o effetti indesiderati)
- Video/streaming (può causare sfarfallio dello schermo)
- Videoconferenze
- Giochi multiplayer

**Cause principali**: interferenze elettromagnetiche (EMI), diafonia tra segnali, congestione di rete.

**Mitigazione**:
1. **Buffer** (nodo destinatario): i pacchetti vengono ricevuti nel buffer e poi espulsi a velocità regolare
2. **Routing selettivo**: instradare i pacchetti lungo i percorsi più stabili o che garantiscono il tempo di consegna desiderato

---

## Sezione 2.2: Mezzi di Trasmissione Guidati

**14. Descrivi il principio di funzionamento del doppino intrecciato (twisted pair). Perché i conduttori vengono attorcigliati?**

**Principio di funzionamento**: il doppino intrecciato è costituito da una coppia di conduttori in rame, ciascuno ricoperto da una guaina isolante, tra loro intrecciati. Un conduttore trasporta il segnale, l'altro funge da riferimento di massa. Il ricevitore utilizza la **differenza di segnale** tra i due conduttori (segnale differenziale).

**Perché vengono attorcigliati?** Per ridurre la **diafonia** (interferenza elettromagnetica che si genera tra due cavi vicini quando in uno di essi passa corrente, generando scambio di energia da una linea all'altra). Nella prima torsione un conduttore è vicino alla sorgente di rumore e l'altro è lontano; nella torsione successiva avviene il contrario, e il rumore risultante si cancella parzialmente.

La qualità del segnale dipende dal **numero di torsioni per unità di lunghezza**.

---

**15. Quali sono le differenze principali tra cavo UTP e STP in termini di schermatura, vantaggi e svantaggi?**

| Caratteristica | UTP (Unshielded Twisted Pair) | STP (Shielded Twisted Pair) |
|----------------|-------------------------------|-------------------------------|
| **Schermatura** | Nessuna schermatura aggiuntiva | Rivestimento protettivo (maglia di rame intrecciata) |
| **Vantaggi** | Flessibile, economico, facile da installare | Maggiore larghezza di banda; protegge da interferenze elettromagnetiche; adatto a lunghe distanze in ambienti rumorosi |
| **Svantaggi** | Larghezza di banda limitata; efficace solo per distanze ≤ 100 m | Costoso, più difficile da installare, manutenzione costosa |

---

**16. Elenca le categorie di cavo Ethernet più comuni (Cat5e, Cat6, Cat7, Cat8) specificando per ciascuna la velocità massima tipica e un utilizzo consigliato.**

| Categoria | Velocità massima tipica | Distanza | Utilizzo consigliato |
|-----------|------------------------|----------|---------------------|
| **Cat5e** | 100 Mbps (Fast Ethernet) | 100 m | Reti sub-Gigabit, nuove installazioni economiche |
| **Cat6** | 1 Gbps su 100 m; 10 Gbps su 35 m | 100 m (1 Gbps) | Reti Gigabit Ethernet standard |
| **Cat6a** | 10 Gbps | 100 m | Reti 10 Gigabit su lunghe distanze |
| **Cat7** | 10 Gbps | 100 m | Standard proprietario (non IEEE/EIA); connettori GG45 |
| **Cat7a** | 40 Gbps su 50 m; 100 Gbps su 15 m | 50/15 m | Per prestazioni estreme (proprietario) |
| **Cat8** | 40 Gbps | 30 m | Comunicazioni switch-to-switch in data center (25GBase-T, 40GBase-T) |

**Nota**: Cat5, Cat3, Cat4 sono obsoleti (max 10-16 Mbps). Cat7/Cat7a hanno scarso supporto IEEE/EIA.

---

**17. Quale connettore è standard per i cavi Ethernet in rame? Che differenza c'è tra RJ45 e 8P8C?**

Il connettore standard per i cavi Ethernet in rame è il **RJ45** (che è un tipo specifico di connettore **8P8C**).

**Differenza**:
- **8P8C** (Eight Position, Eight Contact): categoria più ampia di connettori con 8 posizioni e 8 contatti
- **RJ45** (Registered Jack 45): è l'esempio più comune di connettore 8p8c, standardizzato per Ethernet

I termini sono spesso usati in modo intercambiabile, ma tecnicamente RJ45 è un sottotipo di 8P8C.

**Standard di cablaggio**: T568A (più comune, richiesto da contratti federali USA) e T568B (differisce nell'assegnazione dei pin per le coppie verde e arancione). Entrambe le estremità devono usare lo stesso standard.

---

**18. Spiega la struttura del cavo coassiale. Quali sono i connettori più comuni (es. BNC)?**

**Struttura del cavo coassiale** (dall'esterno verso l'interno):
1. Guaina di plastica esterna (isolamento)
2. Strato di conduttore metallico (schermatura)
3. Due strati di materiale isolante (separati dal conduttore metallico)
4. Anima metallica centrale (solitamente in rame)

**Caratteristiche**: porta segnali a frequenze più alte del doppino; il segnale degrada più velocemente con la distanza.

**Connettori più comuni**:
- **BNC** (Bayonet Neill-Concelman): il più comune oggi; si inserisce e si blocca con mezzo giro a baionetta
- **Connettore a barilotto/botte** (a vite)
- **Connettore push-on** (senza bloccaggio, meno sicuro)

**Classificazioni RG** (Radio Government): RG-8, RG-9, RG-11 (thick Ethernet), RG-58 (thin Ethernet).

---

**19. Descrivi il principio di funzionamento della fibra ottica basato sulla riflessione interna totale.**

**Principio**: la luce che attraversa la fibra viene riflessa all'interno fino all'altra estremità. Ciò avviene perché il **core** (nucleo di vetro) ha un indice di rifrazione più alto rispetto al **cladding** (guaina di vetro che lo avvolge). Quando un raggio luminoso colpisce l'interfaccia core-cladding con un'angolazione appropriata (> angolo critico), viene **totalmente riflesso** all'interno del core.

**Convenzione di codifica**: impulso di luce = 1; assenza di luce = 0.

**Velocità**: circa quella della luce. Il limite di banda non è dovuto alla velocità di trasmissione ma alla **decodifica** del segnale luminoso in impulso elettrico.

---

**20. Distingui la fibra monomodale dalla fibra multimodale in termini di struttura, propagazione della luce e tipica applicazione.**

| Caratteristica | Fibra multimodale | Fibra monomodale |
|----------------|-------------------|------------------|
| **Diametro del core** | Maggiore (decine di micron) | Molto piccolo (pochi micron) |
| **Propagazione** | Più raggi (modi) con angoli di riflessione diversi | Un solo raggio in linea retta (guida d'onda) |
| **Attenuazione** | Maggiore | Minore (fino a 50 Gbps per 100 km) |
| **Tolleranza** | Più tollerante (allineamento meno critico) | Richiede allineamento di precisione (< micron) |
| **Applicazione tipica** | Reti LAN a corta/media distanza | Lunghe distanze (WAN, backbone) |

---

**21. Quali sono i principali vantaggi della fibra ottica rispetto al cavo in rame? E quali i principali svantaggi?**

**Vantaggi**:
- Maggiore ampiezza di banda
- Non influenzata da sorgenti elettriche (interferenze EMI)
- Non influenzata da campi magnetici
- Molto più leggera
- Non disperde la luce (minore attenuazione)
- Maggiore sicurezza (difficile intercettare i dati)
- Nessun rischio di scariche elettriche

**Svantaggi**:
- Tecnologia relativamente nuova e ancora in evoluzione
- Grossi costi di manutenzione
- Connettori e splicing più delicati e costosi
- Richiede competenze specializzate per l'installazione

---

**22. Nomina almeno tre tipi di connettori per fibra ottica (es. FC, ST, SC, LC) indicando una caratteristica distintiva di ciascuno.**

| Connettore | Caratteristica distintiva |
|------------|---------------------------|
| **FC** (Ferrule Connector) | Primo connettore con ghiera in ceramica; blocco a vite; ancora preferito in ambienti con vibrazioni elevate |
| **ST** (Straight Tip) | Connettore twist-lock a baionetta; economico e facile da installare; un tempo il più comune; ancora usato in ambito industriale/militare |
| **SC** (Subscriber Connector) | Meccanismo push-pull a scatto (simile a RJ45); affidabile e durevole (1.000 cicli); usato in configurazioni simplex/duplex |
| **LC** (Lucent Connector) | Dimensioni ridotte (50% ingombro in meno rispetto a SC); blocco sicuro; ampiamente usato in data center e telecomunicazioni |

---

**23. Cosa sono le "onde convogliate" (Power Line Communication)? In quali contesti vengono utilizzate?**

Le **onde convogliate** (Power Line Communication, PLC) sfruttano i **cavi conduttori in rame della rete di alimentazione elettrica** come mezzo trasmissivo per i dati, evitando così un cablaggio aggiuntivo.

**Tecnica**: si sovrappone un segnale ad alta frequenza (opportunamente modulato) alla corrente elettrica già circolante a bassa frequenza. Un sistema dedicato filtra e separa le frequenze utilizzate per la trasmissione delle informazioni.

**Contesti d'uso**:
- Telelettura dei contatori di corrente elettrica (smart meters)
- Scambio di informazioni tra treni in marcia
- LAN in edifici con difficile ricablatura
- Domotica (controllo di elettrodomestici tramite rete elettrica domestica)

---

## Sezione 2.3: Mezzi di Trasmissione Wireless

**24. Quali sono le tre macro-tipologie di segnali wireless menzionate nel testo? Per ciascuna, indica una caratteristica principale.**

| Tipo di segnale | Caratteristica principale |
|----------------|---------------------------|
| **Onde Radio** | Frequenze molto basse-medie seguono la curvatura della Terra; frequenze alte-altissime vengono riflesse dalla ionosfera; attraversano l'aria facilmente; non dannose per il corpo umano |
| **Microonde** | Frequenze 1-300 GHz; richiedono linea di vista (LoS) per alcune tecnologie (>3 GHz); assorbite da corpi "molli" (riscaldamento); usate per telefonia mobile, satelliti, WiFi |
| **Infrarossi** | Usati per comunicazioni di prossimità (telecomandi); assorbiti da qualsiasi ostacolo (non穿透ono pareti) |

---

**25. Cosa si intende per banda ISM? Fornisci almeno due esempi di frequenze ISM e un dispositivo che le utilizza.**

**Banda ISM** (Industrial, Scientific and Medical): è una banda di frequenze riservata dall'ITU (Unione Internazionale delle Telecomunicazioni) per trasmissioni radio per uso industriale, scientifico e medico. Queste frequenze **non sono soggette a licenza** e il loro uso è libero, purché si rispettino i limiti di potenza.

**Esempi di frequenze ISM**:

| Frequenza | Larghezza di banda | Dispositivi tipici |
|-----------|-------------------|-------------------|
| 2,4 GHz | 100 MHz | WiFi (IEEE 802.11b/g/n/ax), Bluetooth, forni a microonde, telefoni cordless |
| 5,735 - 5,875 GHz | 150 MHz | WiFi (IEEE 802.11a/h/j/n/ac/ax) |
| 902 - 928 MHz | 26 MHz | Radioamatori, alcuni dispositivi industriali |
| 24,0 - 24,25 GHz | 250 MHz | Applicazioni radar e sensori |

---

**26. Quali sono i principali fattori che limitano la copertura e l'affidabilità delle comunicazioni wireless?**

1. **Area di copertura**: le tecnologie wireless funzionano bene in ambienti aperti, ma materiali da costruzione (cemento, metallo), strutture e orografia del terreno ne limitano la copertura effettiva. È sempre una sfida capire la qualità del segnale nelle zone coperte.

2. **Interferenza**: il wireless è suscettibile a interferenze da dispositivi comuni che operano sulle stesse frequenze (telefoni cordless domestici, luci fluorescenti, forni a microonde, altri standard wireless come Bluetooth).

3. **Sicurezza**: viaggiando nell'aria, le informazioni trasmesse in wireless possono essere intercettate da dispositivi e utenti non autorizzati. La sicurezza della rete è una componente fondamentale dell'amministrazione della rete wireless.

---

**27. Perché la sicurezza è una preoccupazione particolare nelle reti wireless rispetto a quelle cablate?**

Nelle reti **cablate** (es. fibra ottica, doppino), l'accesso fisico al mezzo trasmissivo è limitato: per intercettare i dati è necessario accedere fisicamente al cavo, tagliarlo o installare una derivazione (operazione facilmente rilevabile).

Nelle reti **wireless**, i segnali si propagano nell'aria e possono essere ricevuti da **qualsiasi dispositivo nelle vicinanze** che sintonizzi sulla frequenza corretta, senza bisogno di accesso fisico. Questo rende l'intercettazione (eavesdropping) molto più facile e difficile da rilevare.

Per questo motivo, le reti wireless richiedono protocolli di crittografia e autenticazione robusti (es. WPA2/WPA3, 802.1X) per proteggere i dati trasmessi.

---

## Sezione 2.3.1: Reti Satellitari

**28. Descrivi le tre categorie di satelliti in base all'orbita (GEO, MEO, LEO), specificando per ciascuna l'altitudine tipica e un'applicazione d'esempio.**

| Categoria | Altitudine | Periodo orbitale | Applicazione | Note |
|-----------|------------|------------------|--------------|------|
| **GEO** (Geostazionario) | ~36.000 km | 24 ore (stessa rotazione Terra) | Telecomunicazioni, TV satellitare, meteo | Antenne a terra fisse; servono almeno 3 satelliti per coprire il globo |
| **MEO** (Medium Earth Orbit) | Tra le due fasce di Van Allen (≈ 10.000-20.000 km) | Variabile (es. 12 ore) | **GPS**, navigazione | Utilizzano triangolazione dei dati |
| **LEO** (Low Earth Orbit) | 500 - 2.000 km | 90-120 minuti | **Costellazioni**: Iridium, Globalstar, **Starlink** (SpaceX) | Satelliti molto numerosi; ogni satellite funziona come uno switch; comunicazione intersatellitare (CIS) |

---

**29. Perché i satelliti GEO vengono definiti "geostazionari"? Quanti ne servono almeno per coprire l'intero globo?**

**Geostazionari**: i satelliti GEO orbitano alla **stessa velocità angolare di rotazione della Terra** (periodo di 24 ore). Di conseguenza, appaiono **fissi nel cielo** rispetto a un punto sulla superficie terrestre. Questo permette alle antenne a terra di essere puntate permanentemente verso il satellite senza bisogno di inseguimento.

**Copertura globale**: servono **almeno 3 satelliti GEO** posizionati a distanze angolari appropriate (circa 120° l'uno dall'altro) per coprire l'intero globo terrestre, escludendo le regioni polari (che rimangono scoperte).

**Perché proprio 36.000 km?** La distanza di circa 35.786 km dall'equatore è quella in cui il periodo orbitale (determinato dalla legge di Keplero) eguaglia esattamente il periodo di rotazione terrestre.

---

**30. Quali sono i punti di forza della fibra ottica rispetto ai satelliti e viceversa? In quali contesti le due tecnologie sono complementari?**

| Aspetto | Fibra ottica | Satelliti |
|---------|-------------|-----------|
| **Larghezza di banda** |  Molto alta (vantaggio per link punto-punto) | Limitata, condivisa tra molti utenti |
| **Latenza** |  Bassa | Alta (GEO: ~250 ms RTT; LEO: migliore ma comunque > fibra) |
| **Copertura geografica** | Limitata a dove è stata posata |  Globale, anche aree remote (montagne, oceani, deserti, polo) |
| **Broadcast/multicast** | Inefficiente (consuma molta banda) |  Naturale: un segnale può raggiungere milioni di ricevitori |
| **Installazione** | Costosa e lenta (scavo, posa) |  Rapida (basta installare una parabola) |
| **Affidabilità fisica** | Vulnerabile a scavi, terremoti, incidenti |  Immune a problemi del terreno |

**Complementarietà**: fibra e satellite sono spesso usati insieme. Esempio: un provider può usare fibra per backbone urbano e satellite per raggiungere utenti in zone rurali/montane dove la fibra non arriva o avrebbe costi proibitivi a causa dell'orografia del terreno.

---

**31. Cosa si intende per "costellazione" di satelliti LEO? Come comunicano tra loro i satelliti in questo tipo di rete?**

**Costellazione LEO**: insieme di **molti satelliti** (da decine a migliaia) che orbitano a bassa quota (500-2000 km) in modo coordinato, formando una trama fitta che copre l'intera superficie terrestre. Esempi: Iridium (77 satelliti previsti, da cui il nome), Globalstar, Starlink (migliaia di satelliti).

**Comunicazione tra satelliti LEO**:
- **Collegamenti intersatellitari (CIS - Crosslink Inter-Satellite)** : satelliti vicini tra loro comunicano direttamente nello spazio, senza passare attraverso stazioni a terra. Questo permette di instradare i dati attraverso la costellazione (routing spaziale), riducendo la dipendenza da gateway terrestri.
- Oltre ai CIS, ogni satellite può comunicare con:
  - **Terminali utente** (antenne a terra)
  - **Gateway** (stazioni terrestri collegate a Internet via fibra)

La costellazione forma di fatto una **rete mesh nello spazio** che estende la connettività Internet a livello globale.

---

### Tabella Riassuntiva (Figura 2.12) - Domanda 32

**Completa la seguente tabella comparativa:**

| Mezzo di trasmissione | Attenuazione | Interferenze EMI | Sicurezza | Costo |
|----------------------|--------------|------------------|-----------|-------|
| **UTP** (Doppino non schermato) | **Alta** | **Alta** | **Bassa** | **Basso** |
| **STP** (Doppino schermato) | Alta | Moderata | Bassa | Moderato |
| **Cavo coassiale** | Moderata | Moderata | Bassa | Moderato |
| **Fibra ottica** | **Bassa** | **Bassa** | **Alta** | **Alto** |

**Risposte alla domanda specifica**:
- Quale mezzo guidato ha la maggiore attenuazione? → **UTP**
- Quale mezzo offre la migliore sicurezza intrinseca? → **Fibra ottica** (difficile intercettare senza essere rilevati)
- Quale mezzo guidato è generalmente il più economico? → **UTP**
- Quale mezzo wireless ha generalmente il costo più elevato? → **Satellite**


### Sezione 3.1 – Data Link Control

1. **Quali sono i cinque servizi principali offerti dal livello collegamento?**
   Il livello collegamento offre cinque servizi fondamentali:
   - **Framing**: incapsula i dati dei livelli superiori aggiungendo intestazione e coda.
   - **Accesso al canale**: gestisce l'uso del mezzo fisico, sia esso dedicato o condiviso.
   - **Indirizzamento**: identifica i nodi tramite indirizzi hardware, essenziale nei canali condivisi.
   - **Controllo di flusso**: adatta la velocità di trasmissione tra nodi con capacità diverse.
   - **Gestione degli errori**: rileva e gestisce errori di trasmissione.

2. **Cosa si intende con il termine "framing" e a cosa serve?**
   Il framing è il processo che incapsula i dati provenienti dai livelli superiori (come il livello rete) all'interno di una struttura chiamata frame. A questo scopo, vengono aggiunte informazioni di controllo in testa (header) e in coda (tail). L'header contiene tipicamente indirizzi e informazioni di sincronizzazione, mentre la coda può contenere codici per il controllo degli errori. Il formato esatto del frame dipende dal protocollo di livello collegamento adottato.

3. **Perché il servizio di "indirizzamento" è essenziale nei canali condivisi?**
   Nei canali condivisi (ad esempio una rete Wi-Fi o un bus Ethernet), più nodi condividono lo stesso mezzo trasmissivo. Senza un sistema di indirizzamento, un nodo non potrebbe distinguere se un frame ricevuto è destinato a sé o ad un altro nodo. L'indirizzamento di livello collegamento utilizza identificatori hardware (indirizzi MAC, tipicamente a 48 bit) per garantire che ciascun frame raggiunga il destinatario corretto.

4. **Che differenza c'è tra un collegamento dedicato e un canale condiviso?**
   - **Collegamento dedicato**: esiste un collegamento fisico esclusivo tra due nodi (ad esempio un cavo punto-punto). Non c'è contesa per l'uso del mezzo.
   - **Canale condiviso**: più nodi condividono lo stesso mezzo fisico (ad esempio un cavo coassiale condiviso o una cella Wi-Fi). È necessario un protocollo di accesso multiplo per evitare o gestire le collisioni.

---

### Sezione 3.2 – LAN Cablate: Ethernet

5. **In che anno e da chi è stato sviluppato il progetto originale di Ethernet?**
   Il progetto originale di Ethernet fu sviluppato tra il 1973 e il 1976 presso il centro di ricerca Xerox di Palo Alto, a partire da un'idea di Robert Metcalfe. Successivamente Metcalfe lasciò Xerox per fondare la 3Com, con l'obiettivo di commercializzare la tecnologia.

6. **Quale ente ha standardizzato le reti Ethernet e con quale progetto?**
   Le reti Ethernet sono state standardizzate dalla IEEE (Institute of Electrical and Electronics Engineers) attraverso il progetto IEEE 802, avviato nei primi anni '80 per permettere l'interconnessione di hardware di produttori diversi, agendo sui primi due livelli del modello ISO/OSI.

7. **In quali due sottolivelli viene suddiviso il livello Data Link nello standard IEEE 802?**
   Il livello Data Link è suddiviso in:
   - **Logical Link Control (LLC)**, indipendente dal tipo di rete fisica.
   - **Medium Access Control (MAC)**, specifico per ogni tecnologia di rete.

8. **Che ruolo ha il sottolivello LLC (Logical Link Control)?**
   Il sottolivello LLC implementa funzioni di controllo degli errori, controllo di flusso e parte delle funzioni di framing. È unico e non dipende dal tipo di rete fisica (può essere usato sia con Ethernet che con Token Ring, Wi-Fi, ecc.).

9. **Cosa definisce il sottolivello MAC (Medium Access Control)?**
   Il sottolivello MAC definisce il metodo di accesso al mezzo fisico (ad esempio CSMA/CD per Ethernet cablata, CSMA/CA per Wi-Fi). Esistono diverse varianti di MAC, ciascuna specializzata per un particolare tipo di rete (802.3, 802.4, 802.11, ecc.).

10. **Elenca i 7 campi di un frame Ethernet standard e la loro dimensione in byte.**
    - Preambolo: 7 byte
    - Delimitatore (Start Frame Delimiter): 1 byte
    - Indirizzo Destinatario: 6 byte
    - Indirizzo Mittente: 6 byte
    - Lunghezza o tipo: 2 byte
    - Dati: da 46 a 1500 byte
    - CRC (Cyclic Redundancy Check): 4 byte

11. **A cosa serve il campo "Preambolo" e di quanti byte è composto?**
    Il preambolo è una sequenza di 7 byte composti da bit 0 e 1 alternati (101010...). Serve a sincronizzare il ricevitore con il segnale in arrivo, permettendogli di riconoscere l'inizio di un frame anche se non era pronto immediatamente. Formalmente non fa parte del frame di livello Data Link, ma è un ausilio fisico.

12. **Cosa indica il campo "Lunghezza o tipo" in un frame Ethernet?**
    Questo campo di 2 byte ha due possibili interpretazioni:
    - **Nella Ethernet legacy**: indica il protocollo di livello superiore trasportato (es. IP, ARP).
    - **Nello standard IEEE 802**: indica il numero di byte del campo dati successivo.
    Entrambe le modalità sono ancora in uso nell'Ethernet moderno.

13. **Qual è la dimensione minima e massima del campo dati in un frame Ethernet?**
    Il campo dati può contenere da un minimo di 46 byte a un massimo di 1500 byte. Il minimo garantisce che il frame abbia una lunghezza sufficiente per il corretto funzionamento del meccanismo di rilevamento delle collisioni.

14. **Cosa significa l'acronimo CSMA/CD e a cosa serve?**
    CSMA/CD sta per *Carrier Sense Multiple Access with Collision Detection*. È il protocollo di accesso al mezzo utilizzato da Ethernet standard. Ogni stazione che vuole trasmettere ascolta il canale (Carrier Sense) e trasmette solo se libero; se due stazioni trasmettono contemporaneamente, rilevano la collisione (Collision Detection) e interrompono la trasmissione, attendendo un tempo casuale prima di riprovare.

15. **Perché anche con CSMA possono verificarsi delle collisioni?**
    Le collisioni si verificano a causa del **ritardo di propagazione** del segnale. Una stazione può iniziare a trasmettere dopo aver rilevato il canale libero, ma il segnale di un'altra stazione può ancora essere in viaggio e non essere stato ancora rilevato. Questo intervallo, detto **tempo di vulnerabilità**, è pari al tempo di propagazione del segnale sull'intero mezzo.

16. **A cosa corrisponde il "tempo di vulnerabilità" nel protocollo CSMA?**
    Nel protocollo CSMA, il tempo di vulnerabilità è il periodo durante il quale una trasmissione può ancora entrare in collisione con un'altra. Esso è pari esattamente al **tempo di propagazione massimo (Tp)** del segnale da un estremo all'altro del mezzo. In CSMA/CD, l'intervallo critico è pari a **2 × Tp** (andata e ritorno) più il tempo per inviare un segnale di jamming.

17. **Qual è la lunghezza massima di una rete Ethernet standard a 10 Mbps e perché?**
    La lunghezza massima è di **2500 metri**. Questo limite deriva dal compromesso tra la velocità di trasmissione (10 Mbps), il tempo di propagazione del segnale e il tempo necessario per inviare un segnale di jamming, necessari per garantire il corretto funzionamento del meccanismo CSMA/CD.

18. **Quali erano i quattro obiettivi principali dello standard Fast Ethernet (802.3u)?**
    1. Aumentare la velocità di trasmissione a 100 Mbps.
    2. Mantenere la compatibilità con Ethernet standard.
    3. Mantenere lo stesso schema di indirizzamento a 48 bit.
    4. Mantenere lo stesso formato e le stesse dimensioni dei frame (limiti max/min invariati).

19. **Che differenza c'è tra una connessione half-duplex e full-duplex in Ethernet?**
    - **Half-duplex**: i nodi possono trasmettere o ricevere, ma non contemporaneamente. Richiede CSMA/CD. Tipico di reti con hub.
    - **Full-duplex**: i nodi possono trasmettere e ricevere contemporaneamente. Non richiede CSMA/CD. Tipico di reti con switch, dove ogni nodo ha una porta dedicata.

20. **Perché nelle reti Gigabit Ethernet half-duplex non è praticamente utilizzabile?**
    Perché all'aumentare della velocità (Gbps), il tempo di rilevazione delle collisioni si riduce, accorciando la distanza massima teorica a circa 25 metri. Questo rende la modalità half-duplex di fatto inutilizzabile. La compatibilità half-duplex è mantenuta solo per ragioni storiche.

21. **Cosa determina la lunghezza massima del cavo nelle reti full-duplex?**
    Nelle reti full-duplex, non essendoci collisioni, la lunghezza massima del cavo è determinata esclusivamente dall'**attenuazione del segnale** nel cavo stesso, cioè dalla distanza oltre la quale il segnale diventa troppo debole per essere interpretato correttamente.

22. **Spiega il significato dei nomi: 10Base5, 10Base2, 10BaseT, 100BaseT.**
    - **Numero iniziale**: velocità massima in Mbps (10, 100, 1000...).
    - **"Base"**: Baseband, indica che i dati vengono trasmessi in banda base (non modulati su portante), con codifica Manchester.
    - **Sigla finale**:
        - **5**: cavo spesso, lunghezza massima 500 m.
        - **2**: cavo sottile, lunghezza massima 200 m.
        - **T**: Twisted pair (doppino telefonico).
        - **F**: Fibra ottica.
        - **SX/LX**: fibra a corto/lungo raggio.

23. **Quale topologia viene utilizzata a partire da 10BaseT?**
    A partire da 10BaseT, la topologia diventa **a stella**, utilizzando un hub come nodo centrale. Questa topologia viene mantenuta anche per Fast Ethernet e Gigabit Ethernet.

24. **Cosa sono un bridge e uno switch? Quale vantaggio portano in termini di domini di collisione?**
    - **Bridge**: dispositivo che divide una rete in più segmenti indipendenti. Ogni segmento costituisce un dominio di collisione separato, riducendo le collisioni complessive.
    - **Switch**: evoluzione del bridge. Ha porte dedicate a singoli nodi, ciascuna con il proprio buffer. Se usato in full-duplex, elimina completamente le collisioni, rendendo CSMA/CD inutile.

25. **Che tipo di codifica viene usata in Fast Ethernet (100BaseT) e perché non si usa più Manchester?**
    Fast Ethernet usa **MLT-3** (per ridurre la larghezza di banda richiesta) e **4B/5B** (per garantire la sincronizzazione). La codifica Manchester non viene più usata perché richiederebbe una larghezza di banda doppia rispetto al bit rate (200 MHz per 100 Mbps), cosa non sostenibile sui cavi Cat5e disponibili all'epoca.

---

### Sezione 3.3 – LAN Wireless: IEEE 802.11 e Bluetooth

26. **Quali sono le due bande di frequenza più comuni per il Wi-Fi?**
    Le due bande classiche sono **2,4 GHz** (molto affollata, ma con maggiore portata) e **5 GHz** (meno affollata, maggiore velocità, minore portata). Recentemente è stata introdotta anche la banda **6 GHz**.

27. **Quale standard Wi-Fi è stato il primo a funzionare su entrambe le bande 2,4 e 5 GHz?**
    Lo standard **IEEE 802.11n** (introdotto nel 2009) è stato il primo a supportare entrambe le bande, gestendole singolarmente.

28. **Quale standard Wi-Fi è il più recente tra quelli elencati e quale velocità massima dichiara?**
    Lo standard più recente elencato è **IEEE 802.11ax** (rilasciato nel 2019), con una velocità massima dichiarata di **10 Gbps** e un miglioramento del 30-40% rispetto a 802.11ac.

29. **Qual è il nuovo schema di denominazione della Wi-Fi Alliance?**
    La Wi-Fi Alliance ha annunciato un nuovo schema che associa un numero progressivo alla parola "Wi-Fi" per indicare la generazione (es. **Wi-Fi 1**, **Wi-Fi 2**, ...). Questo rende più semplice per i consumatori identificare la tecnologia, rispetto ai nomi complessi come "802.11b".

30. **Quali sono le due modalità operative del Wi-Fi?**
    - **Ad-hoc (IBSS - Independent Basic Service Set)**: i dispositivi comunicano direttamente tra loro in modalità peer-to-peer, senza un punto di accesso.
    - **A infrastruttura (BSS)**: i dispositivi comunicano tramite un **Access Point (AP)** che funge da stazione base e può fornire accesso a un'altra rete (es. Internet).

31. **Cosa sono un BSS (Basic Service Set) e un ESS (Extended Service Set)?**
    - **BSS (Basic Service Set)** : gruppo di stazioni (client e AP) che comunicano utilizzando lo stesso canale fisico. Può essere indipendente (ad-hoc) o con infrastruttura.
    - **ESS (Extended Service Set)** : insieme di BSS interconnessi tra loro tramite un sistema di distribuzione (DS), che permette il roaming dei dispositivi tra diverse celle.

32. **Che differenza c'è tra DCF e PCF nel MAC Wi-Fi?**
    - **DCF (Distributed Coordination Function)** : accesso distribuito al mezzo utilizzando **CSMA/CA**. Ogni stazione compete per l'accesso in modo asincrono. È obbligatorio.
    - **PCF (Point Coordination Function)** : accesso centralizzato senza contese, implementato sopra DCF. Un **Point Coordinator** (solitamente l'AP) concede il diritto di trasmettere tramite polling periodico. È opzionale.

33. **Perché le reti wireless usano CSMA/CA invece di CSMA/CD?**
    Perché nelle reti wireless **non è possibile rilevare la collisione durante la trasmissione** (Collision Detection). Un nodo wireless, mentre trasmette, non può ascoltare efficacemente il canale a causa della grande differenza di potenza tra il segnale trasmesso (alto) e il segnale ricevuto (basso). Si usa quindi **CSMA/CA (Collision Avoidance)** , che cerca di *evitare* le collisioni anziché rilevarle.

34. **Spiega a cosa serve e come funziona il meccanismo RTS/CTS.**
    RTS/CTS (Request to Send / Clear to Send) è un meccanismo opzionale che risolve i problemi di **nodo nascosto**. Funziona così:
    1. Il mittente invia un frame **RTS** (Request to Send) e imposta un timer **NAV** (Network Allocation Vector) per riservare il canale.
    2. Il destinatario risponde con **CTS** (Clear to Send), anch'esso con NAV.
    3. Tutte le altre stazioni che sentono RTS o CTS si astengono dal trasmettere per la durata indicata.
    4. Il mittente invia i dati.
    5. Il destinatario conferma con **ACK**.
    Questo riduce la probabilità di collisioni, specialmente in presenza di nodi nascosti.

35. **Cosa significa l'acronimo FHSS e a cosa serve nel Bluetooth?**
    FHSS sta per **Frequency-Hopping Spread Spectrum** (spettro diffuso a salto di frequenza). Bluetooth lo utilizza in versione **Adaptive Frequency Hopping (AFH)** : la banda disponibile (2,4 - 2,485 GHz) è divisa in canali (es. 40 canali per Bluetooth Low Energy). I dispositivi saltano rapidamente da un canale all'altro secondo una sequenza deterministica, evitando quelli rumorosi o occupati, riducendo così le interferenze.

36. **Quanti dispositivi attivi possono essere collegati contemporaneamente in una piconet Bluetooth?**
    In una piconet (rete elementare Bluetooth) possono esserci al massimo **8 nodi attivi**: un nodo **master** (primario) e fino a **7 nodi slave** (secondari). Possono esistere anche fino a 255 nodi *parcheggiati* (inattivi, non partecipanti).

37. **Che differenza c'è tra una Piconet e una Scatternet?**
    - **Piconet**: rete singola composta da un master e fino a 7 slave attivi. La comunicazione avviene solo tra master e slave, non direttamente tra slave.
    - **Scatternet**: insieme di più piconet interconnesse. Un nodo può essere **bridge**, cioè slave in una piconet e master in un'altra, consentendo il passaggio di messaggi tra le due reti.

38. **Quali sono i due tipi di collegamento supportati da Bluetooth?**
    - **SCO (Synchronous Connection Oriented)** : simmetrico, usa slot riservati. Ideale per **traffico vocale** in tempo reale (basso ritardo). Data rate tipico 64 kbps. Non usa ritrasmissione.
    - **ACL (Asynchronous Connectionless)** : orientato ai pacchetti, supporta traffico simmetrico o asimmetrico. Il master controlla la banda. Usa **ARQ (ritrasmissione automatica)** per correggere errori. Velocità fino a 721 kbps in una direzione e 57,6 kbps nell'altra.

---

### Sezione 3.4 – LAB (Comandi di rete)

39. **A cosa serve il comando `ipconfig`?**
    Mostra la configurazione corrente della rete TCP/IP, inclusi indirizzo IP, subnet mask, gateway predefinito e server DNS. Può anche essere usato per aggiornare il lease DHCP o rilasciare configurazioni.

40. **Come si utilizza `ping` per verificare la connettività di rete?**
    Si utilizza inviando pacchetti ICMP Echo Request a un indirizzo specifico (es. `ping 8.8.8.8`). Si possono testare:
    - l'indirizzo di loopback (127.0.0.1) per verificare lo stack TCP/IP locale,
    - l'IP del proprio host,
    - l'IP del gateway predefinito,
    - un IP remoto.

41. **Che differenza c'è tra `tracert` e `pathping`?**
    - **`tracert`** (Trace Route): determina il percorso (i router intermedi) da un host a un altro, misurando il tempo di ogni salto.
    - **`pathping`** : combina le funzionalità di `ping` e `tracert`. Fornisce non solo il percorso, ma anche **latenza e perdita di pacchetti** per ogni router e collegamento, risultando più utile per diagnosticare problemi di rete.

42. **Cosa mostra il comando `netstat`?**
    Mostra le statistiche dei protocolli di rete e le connessioni TCP/IP attualmente attive. Può visualizzare tutte le connessioni, la tabella di routing, le statistiche Ethernet, le statistiche per protocollo (TCP, UDP, ICMP, IP), e altri dettagli.

43. **A cosa serve il comando `arp`?**
    Visualizza e modifica le voci della tabella ARP (Address Resolution Protocol) sul computer locale. ARP consente a un host di trovare l'indirizzo MAC (fisico) di un altro host sulla stessa rete, a partire dal suo indirizzo IP.

---

### Domande trasversali e di confronto

44. **Quali sono le principali differenze nella gestione delle collisioni tra Ethernet cablata (CSMA/CD) e Wi-Fi (CSMA/CA)?**
    - **CSMA/CD** (cablate): rileva le collisioni *dopo* che sono avvenute, interrompe la trasmissione e ritrasmette dopo un backoff. Possibile grazie alla capacità di ascoltare mentre si trasmette.
    - **CSMA/CA** (wireless): *evita* le collisioni *prima* che avvengano, attendendo un intervallo (IFG) e usando meccanismi come RTS/CTS e backoff. Necessario perché sulle wireless non si può rilevare la collisione durante la trasmissione.

45. **Confronta le velocità e i mezzi trasmissivi di Ethernet standard, Fast Ethernet e Gigabit Ethernet.**
    - **Ethernet standard (10 Mbps)** : 10Base5 (coassiale grosso), 10Base2 (coassiale sottile), 10BaseT (doppino), 10BaseF (fibra).
    - **Fast Ethernet (100 Mbps)** : 100BaseT (doppino), 100BaseSX (fibra multimodo corto raggio).
    - **Gigabit Ethernet (1000 Mbps)** : 1000BaseTX (4 coppie doppino), 1000BaseLX (fibra monomodale, 5 km), 1000BaseSX (fibra multimodo).

46. **Quali problematiche specifiche riguardano le reti wireless e non quelle cablate?**
    - **Alimentazione/batteria**: dispositivi mobili o sensori hanno durata limitata.
    - **Direzionalità**: difficile direzionare il segnale verso un singolo ricevitore.
    - **Interferenze**: altri dispositivi (anche non Wi-Fi) possono disturbare la trasmissione.
    - **Sicurezza**: impossibile impedire ad altri di ascoltare trasmissioni non a loro destinate.
    - **Potenza di trasmissione**: limitata per legge per evitare interferenze.
    - **Nodi nascosti ed esposti**: tipici delle wireless, richiedono meccanismi aggiuntivi come RTS/CTS.

47. **Perché la codifica Manchester non è adatta per Fast Ethernet a 100 Mbps su doppino?**
    La codifica Manchester raddoppia la larghezza di banda necessaria rispetto al bit rate (per ogni bit si ha una transizione, quindi servono 200 MHz per 100 Mbps). I cavi Cat5e disponibili all'epoca non potevano supportare una larghezza di banda così elevata su lunghe distanze (100 m). Fast Ethernet ha quindi adottato MLT-3 (banda ridotta) più 4B/5B (sincronizzazione).

## Tecnologie di Accesso – Risposte

### Sezione 4.1 – Local loop e Vecchie Tecnologie

1. **Quale sarà il numero totale di utenti Internet nel mondo entro il 2023 e quale percentuale della popolazione mondiale rappresenterà?**
   - 5,3 miliardi di utenti, pari al 66% della popolazione mondiale prevista.

2. **Cosa sono le connessioni M2M e perché sono importanti per la crescita dei dispositivi connessi?**
   - Sono connessioni machine-to-machine (es. contatori intelligenti, videosorveglianza, monitoraggio sanitario). Entro il 2023 rappresenteranno la metà dei dispositivi e connessioni totali, crescendo di 2,5 volte (fino a 14,7 miliardi).

3. **Perché lo streaming video Ultra-High-Definition (UHD/4K) ha un effetto moltiplicatore sul traffico di rete?**
   - Perché richiede un bit rate di 15-18 Mbps, più del doppio dell'HD e 9 volte superiore allo standard definition (SD).

4. **Quanti hotspot Wi-Fi pubblici erano presenti nel 2018 e quanti se ne prevedono entro il 2023?**
   - 169 milioni nel 2018, quasi 628 milioni entro il 2023 (quattro volte di più).

5. **Cosa significa l'acronimo PSTN e qual era la sua caratteristica principale dal punto di vista della commutazione?**
   - PSTN = Public Switched Telephone Network (rete telefonica pubblica commutata). Era tradizionalmente una rete a commutazione di circuito.

6. **Descrivi brevemente l'evoluzione storica della rete telefonica, dal primo ufficio di commutazione di Bell fino alla gerarchia a cinque livelli.**
   - Inizialmente telefoni venduti in coppia con cavi direttamente collegati. Nel 1878 Bell aprì il primo ufficio di commutazione a New Haven con operatori che collegavano manualmente chiamanti e chiamati. Successivamente vennero collegati gli uffici di commutazione per le chiamate interurbane, e la gerarchia crebbe fino a cinque livelli.

7. **Quali sono le tre componenti principali del sistema telefonico descritte nel capitolo?**
   - Local Loop (ultimo miglio, doppini intrecciati in rame e fibra FTTH)
   - Trunks o Backbone (dorsale, in fibra ottica o microonde)
   - Centrali di smistamento (armadi e box di distribuzione)

8. **Cosa si intende per "Local Loop" o "ultimo miglio"? Con quali mezzi fisici è realizzato tradizionalmente?**
   - È il collegamento tra l'utente e la centrale telefonica. Tradizionalmente realizzato con doppini intrecciati in rame (ancora analogici), oggi anche con fibra ottica FTTH.

9. **Qual è la funzione del Giunto di Sfioccamento nella rete di accesso primaria?**
   - Gestisce fino a un massimo di 800 doppini derivanti dai vari Box Stradali, collegandoli alla centrale telefonica.

### Sezione 4.1 (continua) – Metro Access Network

10. **Cos'è la Metro Access Network e quali velocità può offrire?**
    - È una rete su standard Ethernet che connette gli abbonati a una rete di servizi più ampia (es. Internet). Velocità da 20 Mbps a 1 Gbps.

11. **Quali sono le due principali architetture della rete di accesso basata su fibra ottica?**
    - Basata su rame (in via di sostituzione) e basata su fibra ottica (TDM-PON e WDM-PON).

12. **Spiega il principio del multiplexing TDM-PON. Come viene condivisa la banda tra gli utenti?**
    - Time Division Multiplexing: assegna sequenzialmente (a turno) l'intera banda a tutti gli utenti durante intervalli di tempo fissi chiamati "Time Slots".

13. **Spiega il principio del multiplexing WDM-PON. Quale vantaggio offre in termini di velocità?**
    - Wavelength Division Multiplexing: assegna a ciascun abbonato una specifica lunghezza d'onda, aumentando la larghezza di banda fino a velocità dell'ordine di 10 Gbps.

### Sezione 4.2 – Tecnologia xDSL

14. **Cosa significa l'acronimo CPE? Fai almeno due esempi di dispositivi CPE.**
    - Customer Premises Equipment (apparecchiatura presso il cliente). Esempi: ricevitori telefonici, TV via cavo, modem/router per l'accesso a Internet.

15. **Cos'è un modem e quali sono le due operazioni fondamentali che esegue?**
    - Dispositivo che permette ai dati digitali di circolare su canale analogico. Esegue modulazione (codifica di dati digitali in segnale analogico) e demodulazione (operazione inversa).

16. **Elenca almeno quattro tipi di modulazione utilizzati nei modem.**
    - AM (Amplitude Modulation), FSK (Frequency Shift Keying), PSK (Phase Shift Keying), QAM (Quadrature Amplitude Modulation).

17. **Qual è la differenza tra baud e bps? Fai un esempio concreto.**
    - bps = bit al secondo (quantità di bit trasmessi al secondo). Baud = numero di simboli trasmessi al secondo. Esempio: modem 4-QAM a 1200 baud trasmette 2400 bps (2 bit per simbolo).

18. **Quale banda di frequenze usavano i primi modem telefonici e perché?**
    - La banda fonica da 300 Hz a 3400 Hz (frequenze udibili dall'orecchio umano).

19. **Come è stato possibile raggiungere velocità di 56 Kbps con modem V90 mantenendo 1200 baud?**
    - Aumentando le informazioni di ogni singolo baud, che è passato da 1 bit fino a raggiungere 46,6 bit per baud.

20. **Cosa significa l'acronimo QAM? Su quale piano complesso viene rappresentata?**
    - Quadrature Amplitude Modulation (modulazione combinata di ampiezza e fase). Viene rappresentata su un diagramma detto "costellazione" sul piano complesso.

21. **Spiega il principio della modulazione DMT usata nei modem xDSL.**
    - Suddivide la banda disponibile in un alto numero di sottocanali di uguale dimensione (4,3125 KHz ciascuno).

22. **Nell'ADSL, in quanti sottocanali viene suddivisa la banda di 1104 KHz e quanti ne vengono destinati all'upload?**
    - 256 sottocanali. 32 per l'upload (da 25,875KHz a 163,875KHz), 218 per il download.

23. **Qual è la differenza principale tra ADSL2+ e ADSL2 in termini di banda per il download?**
    - ADSL2+ ha raddoppiato la banda per il download, spostando il limite superiore da 1,1 MHz a 2,2 MHz.

24. **Cosa introduce il VDSL rispetto alle tecnologie ADSL dal punto di vista infrastrutturale?**
    - Introduce la fibra ottica nell'infrastruttura fisica: la fibra arriva fino all'armadio di strada, l'ultimo miglio (armadio-unità immobiliare) resta in rame.

25. **Con quale tecnica VDSL2 separa i due versi di trasmissione (upload e download)?**
    - Con la tecnica FDD (Frequency Division Duplexing).

26. **Quali sono i tre profili di frequenza del VDSL2 (8, 12, 17 MHz) e in quali scenari vengono utilizzati?**
    - 8 e 12 MHz: linee più lunghe; 17 MHz: utilizzi da cabinet.

27. **Cosa si intende per Enhanced VDSL2 e fino a quale frequenza estende lo spettro?**
    - Estensione dello spettro del VDSL2 fino a 35 MHz, per incrementare la velocità sulle reti in rame preservando la compatibilità con FTTC.

### Sezione 4.3 – Tecnologia d'Accesso in Fibra Ottica

28. **Cosa significa l'acronimo NGAN e cosa indica la sigla generica FTTx?**
    - NGAN = Next Generation Access Network (rete di accesso di nuova generazione). FTTx = generalizzazione delle architetture che usano la fibra (FTTH, FTTB, FTTC, ecc.).

29. **Cosa significa l'acronimo OTN (Optical Transport Network)? Qual è l'obiettivo finale di questa tecnologia?**
    - Optical Transport Network (rete di trasporto ottico). L'obiettivo è una "Rete Tutta Ottica".

30. **Quali sono le tre tipologie di ODU (Optical Data Unit) e quali velocità supportano?**
    - ODU-1: fino a 2,5 Gbit/s; ODU-2: da 2,5 a 10 Gbit/s; ODU-3: da 10 a 40 Gbit/s.

31. **Quante ODU-1 possono essere trasportate in un ODU-2 e quante ODU-2 in un ODU-3?**
    - Quattro ODU-1 in un ODU-2; quattro ODU-2 in un ODU-3.

32. **Perché gli operatori hanno inizialmente preferito sfruttare la rete in rame esistente invece di passare subito alla fibra?**
    - Per la larga diffusione e capillarità della classica rete di distribuzione in rame sviluppata per il servizio telefonico.

33. **Quali sono i quattro vantaggi delle architetture PON (Passive Optical Network) rispetto alle soluzioni punto-punto?**
    - Affidabilità elevata, manutenzione semplificata, riduzione del numero di fibre in centrale e del costo per utente, possibilità di evoluzione mediante sostituzione degli apparati terminali.

34. **Cosa significa che una rete PON è "passiva"? Dove si trovano gli apparati attivi?**
    - Assenza di apparati attivi al di fuori delle sedi dove sono collocate le OLT e le ONT-ONU.

35. **Qual è la differenza tra OLT (Optical Line Termination) e ONT/ONU (Optical Network Termination/Unit)?**
    - OLT: terminazione di linea ottica in centrale, interfaccia tra utenti connessi e rete core. ONT/ONU: terminazione di rete ottica presso l'utente.

36. **Cosa significa l'acronimo ODN (Optical Distribution Network) e in quale configurazione è organizzato?**
    - Optical Distribution Network (rete di distribuzione ottica) in configurazione punto-multipunto con splitter ottici passivi.

37. **Qual è la differenza architetturale tra FTTH, FTTB e FTTC?**
    - FTTH: ONT per ogni singolo cliente; FTTB/FTTC: maggior grado di condivisione della terminazione ottica (ONU), con tratto terminale in rame.

38. **Perché in architetture FTTB o FTTC si può ancora utilizzare il rame nel tratto terminale? Quale tecnologia si usa?**
    - Per sfruttare la capillarità della rete in rame e ridurre la posa di nuova fibra. Si usano sistemi trasmissivi ad alta velocità su rame della famiglia VDSL.

### Sezione 4.4 – Fixed Wireless Access and Satellite

39. **Cosa significa l'acronimo FWA? Qual è il modello comune a tutti i sistemi FWA?**
    - Fixed Wireless Access. Modello comune: stazione base (BTS) collegata a una dorsale e un numero di CPE distribuite su un'ampia area.

40. **Cosa significa l'architettura FTTT (Fiber to the Tower)?**
    - Fibra ottica che arriva fino a una torre, da cui parte il segnale radio fino alle abitazioni.

41. **Quali sono i principali vantaggi delle reti FWA?**
    - Colmare il divario digitale nelle aree meno servite; non richiedono connessione a infrastrutture via cavo; installazione semplice senza scavi di trincee.

42. **Quali sono i principali svantaggi o limitazioni delle reti FWA?**
    - Distanza di trasmissione limitata (linea di vista); fattori ambientali (alberi, edifici, path loss); dipendenza dalla frequenza (frequenze alte riducono la portata).

43. **Quali fattori ambientali possono influire sulle prestazioni di una connessione FWA?**
    - Ostacoli come alberi, edifici e path loss che dipende dall'orografia del terreno.

44. **In che anno è iniziata la storia del FWA e con quale tecnologia?**
    - Metà anni 2000 con la tecnologia HiperLAN2.

45. **Qual era il principale limite del protocollo HiperLAN2 in termini di gestione del canale?**
    - Protocollo semplice, non sincronizzato e senza gestione del canale radio: ogni client trasmette immediatamente senza prenotazione. Con l'aumento dell'occupazione del canale, la latenza diventa imprevedibile e molto variabile.

46. **Cosa significa l'acronimo WiMAX e in quale banda di frequenze lavora?**
    - Worldwide Interoperability for Microwave Access. Lavora in banda 3,4 - 3,6 GHz.

47. **Quali sono le due modalità operative del WiMAX? In cosa differiscono?**
    - Non-line-of-sight: CPE comunica direttamente con la BTS (basse frequenze). Line-of-sight: per CPE distanti dalla BTS e per trasferimenti Torre-Torre.

48. **Perché il 5G rappresenta un'importante svolta per le offerte FWA nel presente e nel prossimo futuro?**
    - Per le prestazioni che riesce a offrire: velocità di download/upload che possono eguagliare quelle di una rete in fibra FTTC.

### Domande trasversali e di confronto

49. **Confronta le tecnologie ADSL2+, VDSL2 ed Enhanced VDSL2 in termini di spettro di frequenza utilizzato e velocità.**
    - ADSL2+: fino a 2,2 MHz; VDSL2: 8-30 MHz (profili a 8, 12, 17 MHz); Enhanced VDSL2: estensione fino a 35 MHz.

50. **Quali sono le differenze principali tra una rete PON con splitter passivi e una rete punto-punto attiva in termini di costo, manutenzione e affidabilità?**
    - PON: maggiore affidabilità, manutenzione semplificata, riduzione del numero di fibre e costo per utente; punto-punto attiva: richiede apparati attivi "in strada" con maggiore complessità manutentiva.

51. **Confronta i vantaggi e gli svantaggi di una connessione in fibra FTTH rispetto a una connessione FWA con 5G.**
    - FTTH: massima velocità e affidabilità, ma richiede scavi e posa di fibra. FWA con 5G: installazione semplice senza cavi, ma soggetta a limitazioni ambientali, distanza e linea di vista.

52. **Perché il doppino in rame viene ancora utilizzato in architetture FTTC/FTTB nonostante l'esistenza della fibra ottica?**
    - Per sfruttare la capillarità della rete in rame esistente nel tratto terminale, riducendo la necessità di posa di nuova fibra.

53. **Quali problemi di latenza e indeterminismo si manifestano in HiperLAN2 quando aumenta il numero di utenti attivi?**
    - Col crescere dell'occupazione del canale, la latenza diventa imprevedibile, indeterministica e molto variabile (nessun sistema di prenotazione della risorsa trasmissiva).

54. **Qual è il rapporto tra numero di sottocanali, rapporto segnale/rumore (S/N) e velocità di trasmissione nella modulazione DMT?**
    - Per ogni sottocanale, il modem trasmette da 2 a 15 bit al periodo in funzione del rapporto S/N: più S/N è basso, minore è il numero di bps generati, per evitare elevati tassi di errore.

## Livello Rete – Risposte

### Sezione 5.1 – Problemi Architetturali dello Stato Rete

1. **Qual è lo scopo principale del livello di rete?**
   - Interconnettere tra loro i diversi collegamenti punto-punto per mettere in comunicazione dispositivi geograficamente lontani.

2. **Cosa significa l'architettura "store and forward" nel livello di rete?**
   - I pacchetti sono interamente ricevuti da ogni nodo prima di essere ritrasmessi.

3. **Quali sono le due scuole di pensiero contrastanti riguardo al servizio che la rete dovrebbe fornire al livello di trasporto?**
   - Servizio orientato alla connessione (affidabile, con QoS, come reti telefoniche) vs servizio non orientato alla connessione (reti a datagram, stile Internet).

4. **Che differenza c'è tra una rete orientata alla connessione e una non orientata alla connessione?**
   - Orientata alla connessione: servizio affidabile con QoS; non orientata: ogni pacchetto è inoltrato indipendentemente, senza mantenere informazioni sullo stato delle connessioni.

5. **Cosa si intende per "rete a datagram"? Quali informazioni contiene un datagramma?**
   - Rete non orientata alla connessione. Il datagramma contiene sempre indirizzi del destinatario e del mittente (32 bit per IPv4, 128 bit per IPv6).

6. **Perché nelle reti a datagram è difficile garantire Qualità del Servizio (QoS) e controllo della congestione?**
   - Perché i router non mantengono alcuna informazione sullo stato delle connessioni.

7. **Quale vantaggio offre una rete a datagram in caso di malfunzionamento di un router?**
   - Non ci sarebbero grossi problemi sulla connessione in atto, solo la perdita dei datagrammi presenti nel router al momento del malfunzionamento.

### Sezione 5.2 – Protocollo IPv4 e Indirizzamento

8. **Perché il protocollo IP è definito "connectionless" e "inaffidabile"? Elenca almeno quattro caratteristiche.**
   - Tratta ogni pacchetto in maniera indipendente; non garantisce la consegna; non garantisce la correttezza dell'informazione trasportata; non richiede acknowledgment da alcun host.

9. **In IPv4, i pacchetti possono seguire percorsi diversi e arrivare in ordine diverso da quello di invio. A quale livello superiore spetta riordinarli?**
   - A un protocollo di livello superiore (es. livello di trasporto).

10. **Qual è la dimensione minima e massima dell'header di un pacchetto IPv4 (in byte)?**
    - Minimo 20 byte, massimo 24 byte.

11. **Quali sono i due componenti fondamentali di un pacchetto IP?**
    - Intestazione (header) e componente dati (payload).

#### Sottosezione 5.2.1 – Pacchetti IPv4

12. **Descrivi brevemente la funzione di ciascuno dei seguenti campi dell'header IPv4: Version, Length, Total Length, Identification, Time To Live (TTL), Protocol, Header Checksum.**
    - **Version**: versione di IP (4 per IPv4)
    - **Length**: lunghezza dell'intestazione in parole di 32 bit
    - **Total Length**: lunghezza del datagramma (intestazione + dati) in byte
    - **Identification**: intero univoco che identifica il datagramma
    - **TTL**: tempo di vita (oggi numero di salti)
    - **Protocol**: tipo di protocollo di livello superiore
    - **Header Checksum**: controllo errori dell'header

13. **A cosa serve il campo Type of Service (ToS) e quali sottocampi contiene?**
    - Serve per la QoS. Contiene cinque sottocampi: precedenza, ritardo, velocità di trasmissione, affidabilità.

14. **Qual è la funzione dei tre bit Flags nell'header IPv4? Spiega il significato di "Don't Fragment" e "More Fragment".**
    - **Reserved**: sempre 0
    - **Don't Fragment**: se 1 il pacchetto non viene frammentato
    - **More Fragment**: se 0 indica pacchetto non frammentato o ultimo frammento

15. **Cosa indica il campo Fragment Offset e in quale unità di misura è espresso?**
    - Lo scostamento di questo frammento nel datagramma originale, misurato in byte.

16. **Come funziona il campo Time To Live (TTL) nell'IPv4 moderno? Cosa rappresenta oggi?**
    - Rappresenta il numero di "salti" da nodo a nodo nella rete. Ogni router lo decrementa prima di inoltrare il pacchetto.

17. **Cosa specifica il campo Protocol nell'header IPv4 e chi mantiene la lista dei codici?**
    - Specifica il tipo di protocollo di livello superiore contenuto nel pacchetto. La lista è mantenuta dalla IANA.

#### Sottosezione 5.2.2 – Indirizzamento IP

18. **Come viene rappresentato un indirizzo IPv4 in notazione decimale puntata? Fai un esempio.**
    - 4 numeri decimali separati da punti. Esempio: 208.67.220.220

19. **Quanti bit compongono un indirizzo IPv4 e a quanti indirizzi totali corrisponde?**
    - 32 bit, 2³² = 4.294.967.296 indirizzi (circa 4,3 miliardi).

20. **Cos'era l'indirizzamento classfull (a classi)? In quante classi era suddiviso e quali erano?**
    - Schema in cui l'indirizzo è ad autoidentificazione dai primi 4 bit. Cinque classi: A, B, C, D, E.

21. **In cosa consiste la divisione tra netid e hostid nell'indirizzamento a classi?**
    - **Netid**: indirizzo di rete (prefisso)
    - **Hostid**: indirizzo del computer all'interno della rete (suffisso)

22. **Quali sono i principali limiti dell'indirizzamento a classi?**
    - Numero limitato di host gestibili per classe; esaurimento degli indirizzi univoci di una classe richiede il passaggio a una classe superiore (cambiamento non indolore).

23. **Cosa significa l'acronimo CIDR? Quale innovazione ha introdotto rispetto all'indirizzamento classfull?**
    - Classless Inter-Domain Routing. Introduce maschere di sottorete di lunghezza arbitraria (dinamica), non fissa come nelle classi.

24. **Cosa indica la notazione 192.168.0.0/24? Quanti bit identificano la rete e quanti l'host?**
    - I primi 24 bit identificano la rete, i rimanenti 8 bit l'host.

25. **Perché il prefisso CIDR non deve essere necessariamente un multiplo di 8?**
    - Perché la suddivisione rete/host è dinamica e arbitraria, non vincolata agli ottetti.

26. **Qual è la differenza tra un indirizzo IP pubblico e uno privato?**
    - **Pubblico**: usato per interagire con Internet
    - **Privato**: opera sulla rete locale (LAN)

27. **Quale dispositivo assegna gli indirizzi IP privati all'interno di una rete domestica?**
    - Il router (o altro dispositivo che ne fa le veci).

28. **Che differenza c'è tra un indirizzo IP statico e uno dinamico? Quali sono i vantaggi di ciascuno?**
    - **Statico**: non cambia nel tempo, utile per servizi online uniformi
    - **Dinamico**: può cambiare, più semplice ed economico per i provider, offre maggiore anonimato

29. **Elenca i tre range di indirizzi IP privati (classi A, B e C).**
    - Classe A: 10.0.0.0 – 10.255.255.255
    - Classe B: 172.16.0.0 – 172.31.255.255
    - Classe C: 192.168.0.0 – 192.168.255.255

### Sezione 5.3 – Protocollo IPv6 e Indirizzamento

30. **Perché è stato definito IPv6 e in che anno?**
    - A causa dell'esaurimento degli indirizzi IPv4. Definito negli anni '90.

31. **Quanti bit ha un indirizzo IPv6 rispetto a IPv4? A quanti indirizzi totali corrisponde?**
    - 128 bit (il quadruplo di IPv4). 2¹²⁸ indirizzi.

32. **Come viene rappresentato testualmente un indirizzo IPv6? Fai un esempio.**
    - 32 caratteri esadecimali raggruppati in 8 gruppi da 4 caratteri separati da due punti. Esempio: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

33. **Come si può comprimere un indirizzo IPv6? Spiega la regola dei leading zeros e della compressione degli zeri.**
    - Rimuovere gli zeri all'inizio di ciascun gruppo (leading zeros); comprimere le parti composte solo da zeri (una sola volta per indirizzo).

34. **Quali sono le tre parti principali della struttura di un indirizzo IPv6 Global Unicast?**
    - Primi 3 bit (range global unicast), Subnet Prefix (rete estesa, 16 bit), Interface ID (host, 64 bit).

35. **Quanti bit occupa l'Interface ID in IPv6 e cosa identifica?**
    - 64 bit (seconda metà dell'indirizzo). Identifica la specifica interfaccia di rete del dispositivo.

36. **Perché attualmente tutti gli indirizzi IPv6 pubblici iniziano con la cifra 2?**
    - Perché la IANA ha allocato finora 1/8 dello spazio unicast IPv6, quello che inizia per "001" (indirizzi 2xxx::/3).

37. **Come si scrivono in IPv6 l'indirizzo non specificato (unspecified) e l'indirizzo di loopback?**
    - Unspecified: ::/128
    - Loopback: ::1/128

38. **Cosa sono gli indirizzi link-local in IPv6? Come si riconoscono e a cosa servono?**
    - Indirizzi locali a un solo segmento di rete (non instradati dai router). Iniziano con FE8x, FE9x, FEAx, FEBx. Usati per autoconfigurazione, ND (Neighbor Discovery) e ARP.

39. **Cosa sono gli indirizzi site-local in IPv6? Come si differenziano dai link-local?**
    - Indirizzi che possono essere instradati solo all'interno di una rete privata (Site). Iniziano con FECx, FEDx, FEEx, FEFx (decimo bit = 1, mentre link-local hanno decimo bit = 0).

40. **Qual è la differenza fondamentale tra IPv4 e IPv6 per quanto riguarda la necessità del NAT?**
    - IPv6 ha spazio di indirizzi sufficiente per assegnare un indirizzo pubblico a ogni dispositivo, eliminando la necessità del NAT (tipico di IPv4 per la penuria di indirizzi).

#### Sottosezione 5.3.1 – Prefix Delegation e Subnetting

41. **Cosa significa Prefix Delegation in IPv6? Quale protocollo lo implementa?**
    - Un router dell'operatore delega al router del cliente la gestione di un prefisso IPv6 per creare sottoreti e assegnare indirizzi pubblici. Implementato da DHCPv6.

42. **Secondo le raccomandazioni europee, quali prefissi dovrebbero essere delegati dagli ISP?**
    - Prefisso statico /56 oppure /48 per ciascuna linea.

43. **Dato un prefisso /56, quante sottoreti /64 si possono ottenere? Perché?**
    - 256 sottoreti /64 (2⁸, perché 64-56 = 8 bit).

44. **Cosa significa l'acronimo SLAAC? A cosa serve?**
    - Stateless Address Auto-Configuration. Permette ai dispositivi di autoconfigurarsi assegnandosi un indirizzo IPv6 senza server DHCP.

45. **Quali sono le due procedure per generare un indirizzo auto-assegnato con SLAAC?**
    - Assegnazione casuale; sistema EUI-64 (da indirizzo MAC con i caratteri ff:fe).

46. **Cosa sono le Privacy Extensions in IPv6 e a cosa servono?**
    - Cambiamento periodico dell'indirizzo autoconfigurato per rendere più difficile il tracciamento e mantenere la privacy.

#### Sottosezione 5.3.2 – Altre Novità di IPv6

47. **Quali campi sono stati rimossi dall'header IPv6 rispetto a IPv4? Perché?**
    - Rimosso il campo checksum per semplificare e velocizzare l'inoltro dei pacchetti sui router.

48. **Quanto è lungo l'header IPv6 in byte? Perché è più lungo di quello IPv4?**
    - 40 byte (il doppio di IPv4), a causa degli indirizzi più lunghi (128 bit vs 32 bit).

49. **Cosa sono gli Extension Header in IPv6?**
    - Intestazioni aggiuntive a catena che permettono di definire funzionalità aggiuntive; sono multipli di 8 ottetti.

50. **Quali tre macro-categorie di indirizzi sono previste in IPv6? Quale categoria è stata eliminata rispetto a IPv4?**
    - Unicast, anycast, multicast. Eliminato il broadcast.

51. **A cosa serve un indirizzo multicast in IPv6? Quale prefisso hanno?**
    - Inviare pacchetti a tutte le interfacce che appartengono a un gruppo. Prefisso ff00::/8.

52. **Cosa sono gli indirizzi anycast? Come si comporta la rete quando viene inviato un pacchetto a un indirizzo anycast?**
    - Attribuiti a diverse interfacce di più nodi. La rete consegna il pacchetto al nodo del gruppo che risponde prima (il più vicino in base al protocollo di instradamento).

53. **Quali due extension header forniscono sicurezza in IPv6? Che differenza c'è tra AH e ESP?**
    - **AH (Authentication Header)** : integrità e autenticazione, ma non confidenzialità.
    - **ESP (Encapsulation Security Payload)** : integrità, autenticazione e confidenzialità.

54. **Qual è la differenza tra Transport Mode e Tunnel Mode per AH e ESP?**
    - **Transport Mode**: protezione solo ai dati.
    - **Tunnel Mode**: protezione all'intero datagramma IP.

55. **Cosa si intende per Security Association (SA)?**
    - Relazione tra due entità in comunicazione che identifica particolari condizioni di sicurezza.

### Sezione 5.4 – Algoritmi di Routing

56. **Quali sono i due servizi principali forniti da un router?**
    - Determinare il percorso ottimale; trasportare le informazioni tra 2 reti diverse.

57. **Cosa si intende per Autonomous System (AS)? A cosa serve l'ASN?**
    - Gruppi di network controllati e gestiti da ISP. L'ASN (numero intero) identifica univocamente un AS.

58. **Qual è la differenza tra interior router e edge router?**
    - **Interior router**: instradano all'interno dello stesso AS.
    - **Edge router** (router di frontiera): instradano tra AS diversi.

59. **Quali due elementi deve contenere come minimo ogni entry di una tabella di routing?**
    - Un indirizzo di destinazione; il tipo d'indirizzo di destinazione (collegato direttamente o next-hop router).

60. **Qual è la differenza tra algoritmi di routing statici e dinamici?**
    - **Statici**: tabelle predisposte da un amministratore e non cambiano.
    - **Dinamici**: tabelle continuamente aggiornate in base all'evoluzione della rete.

61. **Quali metriche possono essere utilizzate per selezionare il percorso migliore? Quali due sono universalmente accettati?**
    - Metriche: lunghezza del percorso, banda passante, affidabilità, ritardo, carico di rete. Universalmente accettati: hops (numero di salti) e costo.

62. **Quali sono le cinque caratteristiche tipiche degli algoritmi di routing (ottimizzazione, semplicità, rapidità di convergenza, scalabilità, robustezza)?**
    - **Ottimizzazione**: scegliere la strada migliore
    - **Semplicità**: funzionale ed efficiente con basso uso di risorse
    - **Rapidità di convergenza**: distribuire velocemente aggiornamenti
    - **Scalabilità**: adattarsi a varie circostanze
    - **Robustezza**: continuare a lavorare nonostante guasti, traffico elevato

#### Sottosezione 5.4.1 – Distance Vector

63. **Su quale algoritmo matematico si basa il Distance Vector?**
    - Algoritmo di Bellman-Ford.

64. **Qual è l'idea base dell'algoritmo Distance Vector?**
    - Ogni nodo mantiene una tabella che indica la distanza da ogni altro nodo della rete (vettore delle distanze).

65. **Cosa contiene la tabella di routing di un nodo al "cold start"?**
    - Una singola voce: quella del nodo stesso (conoscenza solo del proprio indirizzo).

66. **Cosa succede in caso di malfunzionamento di un link? Quali tre azioni compie il nodo?**
    - Scarta i distance vector ricevuti da quel link; ricalcola la propria tabella mediante fusione dei distance vector; distribuisce eventualmente il nuovo distance vector ai propri vicini.

67. **Cosa sono l'effetto rimbalzo (bouncing) e il counting to infinity?**
    - **Bouncing**: aggiornamento delle tabelle che fa divergere l'algoritmo a causa di un tempo di vulnerabilità.
    - **Counting to infinity**: loop dovuto alla caduta di più link che impedisce la convergenza.

68. **Come si può terminare il counting to infinity?**
    - Convenzione sulla rappresentazione di infinito con distanza settata a un valore maggiore del diametro della rete.

69. **In cosa consiste la tecnica Split Horizon?**
    - Un nodo non annuncia a un vicino le destinazioni che sono instradate attraverso quel vicino.

70. **Come funziona la variante più aggressiva "Split Horizon con poison reverse"?**
    - Il vettore include tutte le destinazioni, ma imposta a infinito le distanze instradate attraverso il link caduto.

#### Sottosezione 5.4.2 – Link State

71. **Qual è il principio base degli algoritmi Link State?**
    - Ogni nodo mantiene una copia intera della mappa di rete, scambia informazioni sui vicini e calcola i migliori percorsi con l'algoritmo del percorso più breve.

72. **Quali sono i tre concetti chiave del Link State Routing?**
    - Conoscenza dei nodi vicini; flooding; condivisione delle informazioni solo al cambiamento.

73. **Cosa si intende per flooding nel contesto del Link State?**
    - Ogni router invia le informazioni che detiene a tutti gli altri router tranne a quelli direttamente connessi.

74. **Quando un router invia informazioni agli altri router in un protocollo Link State?**
    - Solo quando vi è un cambiamento che modifica lo stato dei suoi link.

75. **Quali sono le quattro fasi dell'algoritmo Link State?**
    - Inizializzazione; costruzione e distribuzione dei pacchetti; calcolo del percorso minimo; consolidamento delle route.

76. **Quale algoritmo viene tipicamente usato nella fase 3 per calcolare il percorso minimo?**
    - Algoritmo di Dijkstra.

77. **Quali sono i principali vantaggi degli algoritmi Link State rispetto a Distance Vector?**
    - Convergenza abbastanza veloce; non soffre della problematica della divergenza.

78. **Quali sono i principali svantaggi degli algoritmi Link State?**
    - Difficile implementazione in reti molto vaste (non scalabile come Distance Vector); richiede uso intensivo di risorse (memoria e CPU).

79. **Cosa significa l'acronimo OSPF? Quali sono le tre versioni e cosa le caratterizza?**
    - Open Shortest Path First.
    - OSPFv1 (1989, quasi scomparsa), OSPFv2 (1998, per IPv4), OSPFv3 (2008, introduce IPv6 ma compatibile con IPv4).

80. **Cosa sono gli LSA (Link State Advertisements) e l'LSDB (Link State Database)?**
    - **LSA**: pacchetti con informazioni sulla rete.
    - **LSDB**: struttura che organizza gli LSA (Link State Database).

81. **A cosa servono le aree in OSPF? Quali regole devono rispettare?**
    - Suddividono una rete OSPF estesa in sottodomini per ridurre le dimensioni del database.
    - Regole: deve esistere un'area backbone; ogni area non backbone deve essere connessa direttamente al backbone; il backbone non può essere frammentato.

### Sezione 5.5 – Congestione

82. **Cosa si intende per congestione della rete?**
    - Fenomeno che si verifica quando i nodi sorgenti immettono più pacchetti di quanti la rete riesca a consegnare.

83. **Quali sono le principali cause della congestione?**
    - Diversi flussi sulla stessa linea; esaurimento dei buffer nei router; lentezza della CPU del router.

84. **Quali due parametri consentono di riscontrare l'insorgere di congestione?**
    - Ritardo e throughput.

85. **Come si comportano ritardo e throughput al crescere del traffico?**
    - **Ritardo**: minimo inizialmente, cresce con l'aumento del traffico.
    - **Throughput**: cresce proporzionalmente fino a 85-90% della capacità, poi diminuisce.

#### Sottosezione 5.5.1 – Controllo Proattivo

86. **In cosa consiste l'approccio proattivo al controllo della congestione?**
    - Tecniche che cercano di prevenire la congestione (a ciclo aperto).

87. **Quali rischi comporta una politica di ritrasmissione aggressiva in termini di congestione?**
    - Può aumentare la congestione sulla rete.

88. **Perché il meccanismo di finestra scorrevole con ripetizione selettiva è preferibile a Go Back N in presenza di congestione?**
    - Invia un numero minore di pacchetti sul canale rispetto al Go Back N.

89. **In che modo le politiche di eliminazione dei pacchetti nei router possono prevenire la congestione?**
    - I router eliminano preventivamente pacchetti (es. alcuni pacchetti audio) per evitare la congestione.

90. **Come funzionano le politiche di accesso per reti a circuito virtuale nella prevenzione della congestione?**
    - I router coinvolti indicano la disponibilità delle risorse richieste; in caso di risorse scarse, negano l'accesso alla rete.

#### Sottosezione 5.5.2 – Controllo Reattivo

91. **In cosa consiste l'approccio reattivo al controllo della congestione?**
    - Tecniche messe in atto quando la congestione si è già verificata per eliminarla o attenuarla (a ciclo chiuso).

92. **Cosa sono i choke packets? Come funzionano?**
    - Pacchetti di segnalazione che il router invia direttamente al mittente quando rileva congestione, chiedendo di rallentare.

93. **Cosa fa il meccanismo Source Quench in TCP/IP? Perché oggi non viene quasi mai usato?**
    - Notifica al mittente che i buffer del router sono sovraccarichi; il mittente riduce la finestra di invio. L'abuso potrebbe portare a DoS.

94. **In cosa consiste la tecnica della "pressione all'indietro" (backpressure)? Quale effetto collaterale può avere?**
    - Un nodo congestionato smette di ricevere pacchetti dal nodo precedente. Può spostare la congestione verso i nodi upstream.

95. **Qual è la differenza tra segnalazione implicita e segnalazione esplicita della congestione?**
    - **Implicita**: la sorgente deduce la congestione da eventi (timeout, duplicati di conferme).
    - **Esplicita**: un nodo invia esplicitamente un pacchetto per informare della congestione.

96. **Che differenza c'è tra segnalazione diretta (forward) e segnalazione all'indietro (backward)?**
    - **Diretta**: l'avviso va nella direzione del flusso principale (verso la destinazione).
    - **All'indietro**: l'avviso va nella direzione opposta al flusso (verso la sorgente).

#### Sottosezione 5.5.3 – Leaky Bucket / Token Bucket

97. **A cosa servono gli algoritmi Leaky Bucket e Token Bucket?**
    - A "modellare" il traffico e ridurre la congestione.

98. **Spiega il funzionamento dell'algoritmo Leaky Bucket usando l'analogia del secchio bucato.**
    - I pacchetti entrano dall'alto (input), escono dal buco sul fondo a velocità costante (output). Se il secchio si riempie, i pacchetti in eccesso vengono scartati.

99. **Cosa significa "tail drop" nel contesto del Leaky Bucket?**
    - Quando il buffer è pieno, l'algoritmo scarta i pacchetti appena ricevuti indipendentemente dall'importanza o dal flusso.

100. **Quale limite ha il Leaky Bucket che il Token Bucket supera?**
    - Il Leaky Bucket non tiene conto del tempo di inattività di un host. Il Token Bucket permette di accumulare credito (token) durante l'inattività.

101. **Spiega il funzionamento dell'algoritmo Token Bucket.**
    - I token vengono aggiunti a un rate costante (fino a un massimo). Ogni volta che si spedisce, i token vengono tolti. Si possono inviare pacchetti alla massima velocità se ci sono abbastanza token.

102. **Quali sono i principali svantaggi del Token Bucket rispetto al Leaky Bucket?**
    - Se il bucket è vuoto, i pacchetti attendono nuovi token con aumento della latenza; meno flessibile per traffico mutevole (velocità fissa di generazione token).

#### Sottosezione 5.5.4 – Load Shedding

103. **Cosa si intende per load shedding (riduzione del carico)?**
    - Approccio che consiste nello scartare pacchetti quando il buffer è pieno secondo una politica implementata a livello di collegamento.

104. **Qual è la differenza tra la "wine policy" e la "milk policy" nella scelta dei pacchetti da scartare? Per quale tipo di applicazione è adatta ciascuna?**
    - **Wine policy** (più vecchio vale di più): per trasferimento di file.
    - **Milk policy** (più nuovo è più importante): per traffico multimediale (es. VoIP).

105. **In quale campo dell'header IP il mittente può contrassegnare la priorità del pacchetto?**
    - Campo ToS (Type of Service).

106. **Cosa significa l'acronimo RED (Random Early Detection)? Di che tipo di approccio si tratta (proattivo/reattivo)?**
    - Random Early Detection. Comportamento proattivo (cerca di prevenire la congestione).

107. **Quali sono i punti essenziali dell'algoritmo RED?**
    - Rilevamento congestione tramite dimensione buffer di uscita; prevenzione mediante marcatura pacchetti; uso di media pesata della coda; due soglie (min e max).

108. **Perché RED utilizza una media pesata della lunghezza della coda invece del valore istantaneo?**
    - Per ignorare picchi episodici e trattare solo picchi di traffico persistenti.

109. **Cosa succede quando la lunghezza media della coda supera la soglia minima in RED? E quando supera la soglia massima?**
    - **Sopra soglia minima**: alcuni pacchetti vengono marcati a caso (numero crescente con la lunghezza media).
    - **Sopra soglia massima**: tutti i pacchetti sono marcati.

110. **In quali due modi può consistere la "marcatura" di un pacchetto in RED?**
    - Rimozione del pacchetto; impostazione di un bit o campo nel pacchetto.

### Domande trasversali e di confronto

111. **Confronta IPv4 e IPv6 in termini di: lunghezza dell'indirizzo, dimensione dell'header, presenza del checksum, supporto al broadcast, sicurezza nativa.**
    - **Indirizzo**: IPv4 32 bit, IPv6 128 bit
    - **Header**: IPv4 20-24 byte, IPv6 40 byte fisso
    - **Checksum**: presente in IPv4, rimosso in IPv6
    - **Broadcast**: presente in IPv4, eliminato in IPv6
    - **Sicurezza nativa**: IPv4 affidata a protocolli esterni, IPv6 ha AH e ESP

112. **Confronta gli algoritmi Distance Vector e Link State in termini di: conoscenza della topologia, velocità di convergenza, rischio di loop, scalabilità, consumo di risorse.**
    - **Conoscenza topologia**: DV solo vicini, LS intera rete
    - **Convergenza**: DV lenta, LS veloce
    - **Rischio loop**: DV sì (count to infinity), LS no
    - **Scalabilità**: DV scalabile, LS poco scalabile
    - **Consumo risorse**: DV basso, LS alto

113. **Spiega la differenza tra controllo proattivo e reattivo della congestione. Fornisci almeno due esempi per ciascuna categoria.**
    - **Proattivo**: ritrasmissione, gestione finestra scorrevole, politiche di eliminazione, politiche di accesso.
    - **Reattivo**: choke packets, pressione all'indietro, segnalazione implicita/esplicita.

114. **Confronta l'algoritmo Leaky Bucket e Token Bucket in termini di gestione dei burst e del tempo di inattività.**
    - **Leaky Bucket**: modella traffico a raffica in traffico a velocità fissa; non tiene conto dell'inattività.
    - **Token Bucket**: permette di accumulare token durante l'inattività per gestire burst futuri.

115. **Quali sono le differenze principali tra indirizzi unicast, multicast e anycast in IPv6?**
    - **Unicast**: singola interfaccia
    - **Multicast**: gruppo di interfacce (consegna a tutte)
    - **Anycast**: gruppo di interfacce (consegna a una sola, la migliore)

116. **Perché il NAT è molto comune in IPv4 ma non necessario in IPv6?**
    - IPv4 soffre di penuria di indirizzi; IPv6 ha spazio di indirizzi sufficiente per assegnare un indirizzo pubblico univoco a ogni dispositivo, eliminando la necessità di traduzione.

# Internetworking – Risposte Dettagliate

## Sezione 6.1 – Protocolli di Controllo

### 1. Quali sono i principali protocolli di controllo utilizzati nel livello di rete oltre a IP?

Oltre a IP, utilizzato per il trasferimento dei dati, Internet ha diversi protocolli di controllo utilizzati nel livello di rete. I principali protocolli di controllo menzionati nel capitolo sono:

- **ICMP (Internet Control Message Protocol)** : utilizzato per inviare messaggi di errore e altre informazioni operative
- **ARP (Address Resolution Protocol)** : utilizzato per risolvere gli indirizzi IP in indirizzi Ethernet (o di livello data link)
- **DHCP (Dynamic Host Configuration Protocol)** : utilizzato per configurare automaticamente gli host con indirizzi IP e altre informazioni di rete

### 2. Perché i protocolli di controllo vengono esaminati nella versione IPv4?

Il testo specifica che i protocolli di controllo vengono esaminati descrivendo le versioni che corrispondono a IPv4 "in quanto sono quelle comunemente usate". In altre parole, all'epoca della scrittura del capitolo, le versioni IPv4 di ICMP, ARP e DHCP erano le più diffuse e utilizzate nella pratica, mentre le corrispondenti versioni per IPv6 erano meno comuni o ancora in fase di adozione.

### 3. Qual è l'equivalente di ARP per IPv6?

L'equivalente di ARP (Address Resolution Protocol) per IPv6 è chiamato **NDP (Neighbor Discovery Protocol)** . ICMP e DHCP hanno versioni simili per IPv6 (ICMPv6 e DHCPv6), mentre l'equivalente di ARP per IPv6 è NDP. Il testo precisa che "ICMP e DHCP hanno versioni simili per IPv6; l'equivalente di ARP per IPv6 è chiamato NDP".

#### Sottosezione 6.1.1 – Internet Control Message Protocol (ICMP)

### 4. A cosa serve ICMP (Internet Control Message Protocol)?

ICMP è un protocollo di rete utilizzato per **inviare messaggi di errore e altre informazioni operative**. Serve a comunicare informazioni diagnostiche e di controllo tra router e host sulla rete IP. Ad esempio, quando un pacchetto non può raggiungere la sua destinazione, il router che rileva il problema può inviare un messaggio ICMP al mittente per informarlo dell'errore.

### 5. Quali sono le due versioni principali di ICMP e quali sono le loro differenze?

Le due versioni principali di ICMP sono:

1. **ICMP per IPv4 (ICMPv4)** : Utilizzato per inviare messaggi di errore (ad esempio, quando un pacchetto non può raggiungere la sua destinazione) e per funzioni di diagnostica come il comando "ping", che verifica la connettività tra due dispositivi.

2. **ICMP per IPv6 (ICMPv6)** : Include **tutte le funzionalità di ICMPv4**, oltre a supportare le operazioni di NDP (Neighbor Discovery Protocol) e altre funzioni specifiche di IPv6. In pratica, ICMPv6 è più ricco di funzionalità perché incorpora protocolli che in IPv4 erano separati (come ARP).

### 6. Quale comando diagnostico utilizza ICMP per verificare la connettività tra due dispositivi?

Il comando diagnostico che utilizza ICMP per verificare la connettività tra due dispositivi è il comando **"ping"** . Ping invia pacchetti ICMP Echo Request a un host di destinazione e attende una risposta ICMP Echo Reply. Se la risposta arriva, significa che il percorso di rete tra i due dispositivi è funzionante e che l'host di destinazione è attivo e raggiungibile.

### 7. Quale funzionalità aggiuntiva offre ICMPv6 rispetto a ICMPv4?

ICMPv6 offre, rispetto a ICMPv4, il supporto alle operazioni di **NDP (Neighbor Discovery Protocol)** e altre funzioni specifiche di IPv6. NDP sostituisce diverse funzionalità che in IPv4 erano gestite da protocolli separati, tra cui ARP (per la risoluzione degli indirizzi), ICMPv4 (per i messaggi di redirect), e parte del funzionamento di DHCP. ICMPv6 è quindi un protocollo più integrato e potente nel contesto di IPv6.

#### Sottosezione 6.1.2 – ARP – Address Resolution Protocol

### 8. Perché gli indirizzi IP non possono essere utilizzati direttamente dalle schede di rete? Che tipo di indirizzi usano le schede Ethernet?

Gli indirizzi IP non possono essere utilizzati direttamente dalle schede di rete perché le schede di rete che operano a livello data link (come le schede Ethernet) **non comprendono gli indirizzi Internet**. Le schede di rete sono progettate per funzionare a livello di collegamento e utilizzano indirizzi fisici propri.

Le schede Ethernet incorporano un **indirizzo Ethernet a 48 bit** (chiamato anche indirizzo MAC – Media Access Control). Questo indirizzo è univoco a livello mondiale: ogni produttore richiede a IEEE un blocco di indirizzi per garantire che nessuna coppia di schede utilizzi lo stesso indirizzo, evitando conflitti se dovessero capitare sulla stessa LAN. Le schede di rete inviano e ricevono frame basati su questi indirizzi Ethernet a 48 bit e non sanno nulla degli indirizzi IP a 32 bit.

### 9. Quanti bit ha un indirizzo Ethernet e come viene garantita l'univocità?

Un indirizzo Ethernet ha **48 bit**. L'univocità degli indirizzi Ethernet è garantita dal fatto che ogni produttore richiede a IEEE (Institute of Electrical and Electronics Engineers) un blocco di indirizzi. IEEE assegna al produttore un prefisso unico (chiamato OUI – Organizationally Unique Identifier, tipicamente i primi 24 bit). Il produttore è poi responsabile di assegnare in modo univoco i restanti 24 bit a ciascuna scheda di rete prodotta. Questo sistema assicura che non ci siano due schede di rete al mondo con lo stesso indirizzo MAC, evitando conflitti se dovessero capitare sulla stessa LAN.

### 10. Spiega il funzionamento di base di ARP. Cosa fa un host quando vuole conoscere l'indirizzo Ethernet corrispondente a un indirizzo IP?

Il funzionamento di base di ARP (Address Resolution Protocol) è il seguente: quando un host vuole conoscere l'indirizzo Ethernet corrispondente a un indirizzo IP (ad esempio 192.32.65.5), l'host **trasmette attraverso la Ethernet un pacchetto broadcast** che chiede chi sia il proprietario di quell'indirizzo IP. La trasmissione broadcast arriva a **tutte le macchine** della rete Ethernet. Ciascuna macchina controlla il proprio indirizzo IP: solo l'host che possiede quell'indirizzo IP risponde, inviando il proprio indirizzo Ethernet (E2). In questo modo, l'host che ha fatto la richiesta scopre che l'indirizzo IP cercato è associato a un determinato indirizzo Ethernet. ARP è definito nell'RFC 826.

### 11. Cos'è una trasmissione broadcast nel contesto di ARP?

Una trasmissione **broadcast** (trasmissione a tutti) nel contesto di ARP è un tipo di frame Ethernet che viene inviato a un indirizzo speciale (l'indirizzo broadcast, che è tipicamente FF:FF:FF:FF:FF:FF) che viene ricevuto da **tutte le macchine** presenti sulla stessa rete Ethernet. Quando un host invia una richiesta ARP in broadcast, tutti gli host sulla LAN ricevono il messaggio. Ogni host controlla se l'indirizzo IP richiesto corrisponde al proprio; solo l'host che possiede quell'IP risponde, mentre gli altri ignorano la richiesta.

### 12. A cosa serve la cache ARP? Perché le informazioni nella cache dovrebbero scadere dopo pochi minuti?

La **cache ARP** è una tabella memorizzata in ogni host che contiene le associazioni (mapping) tra indirizzi IP e indirizzi Ethernet recentemente risolti. Serve a evitare di ripetere le richieste ARP per lo stesso indirizzo IP ogni volta che si deve inviare un pacchetto, migliorando le prestazioni.

Le informazioni nella cache dovrebbero **scadere dopo pochi minuti** (tipicamente 2-20 minuti) per permettere cambiamenti nelle associazioni. Ad esempio, quando un host viene configurato per utilizzare un nuovo indirizzo IP mantenendo quello Ethernet, la vecchia associazione nella cache degli altri host diventerebbe errata. La scadenza periodica assicura che le voci obsolete vengano rimosse e che venga eseguita una nuova risoluzione ARP quando necessario.

### 13. Cos'è il gratuitous ARP (ARP gratuito)? A cosa serve e quando viene eseguito?

Il **gratuitous ARP** (ARP gratuito) è un'operazione in cui un computer trasmette in broadcast la propria associazione (IP → MAC) **durante l'accensione** (o quando viene configurato con un nuovo indirizzo IP). Questa trasmissione broadcast è generalmente eseguita sotto forma di una ricerca ARP mirata al proprio indirizzo IP. L'operazione, che non dovrebbe ricevere alcuna risposta (perché nessun altro dovrebbe avere lo stesso IP), ottiene l'effetto di **inserire una voce nella cache ARP di tutti gli altri computer** presenti sulla stessa rete. In questo modo, gli altri host conoscono subito l'indirizzo MAC del nuovo host senza doverlo richiedere esplicitamente.

### 14. Cosa significa se un host riceve una risposta a un gratuitous ARP?

Se un host riceve una risposta (inaspettata) a un gratuitous ARP, significa che **due computer hanno ricevuto lo stesso indirizzo IP** (c'è un conflitto di indirizzi IP sulla rete). L'errore deve essere risolto dall'amministratore di rete prima che le due macchine possano usare la rete. Il gratuitous ARP funge quindi anche da meccanismo di rilevazione di conflitti di indirizzi IP.

### 15. In una rete con router, come fa un host a inviare un pacchetto a un host su una rete diversa?

In una rete con router, quando un host (ad esempio Host 1) vuole inviare un pacchetto a un host (Host 4) che si trova su una rete diversa, l'host 1 vede che l'indirizzo IP di destinazione **non si trova sulla propria rete**. Sa che deve inviare tutto il traffico fuori rete al **router** (che prende anche il nome di **default gateway**). Per convenzione, il default gateway ha l'indirizzo più basso sulla rete (ad esempio 198.31.65.1). L'host 1, per inviare un frame al router, deve conoscere l'indirizzo Ethernet della scheda di rete del router sulla propria rete. Lo scopre inviando un **broadcast ARP** per l'indirizzo IP del default gateway (198.31.65.1), dal quale impara l'indirizzo Ethernet del router (E3). Solo dopo può inviare il frame al router, che si occuperà di inoltrarlo verso la rete di destinazione.

### 16. Cos'è il default gateway? Quale indirizzo gli viene tipicamente assegnato per convenzione?

Il **default gateway** (gateway predefinito) è il router sulla rete locale che un host utilizza per inviare tutto il traffico destinato a reti esterne. È il dispositivo che consente agli host sulla rete locale di comunicare con il resto di Internet.

Per convenzione, il default gateway ha l'**indirizzo più basso sulla rete** (o talvolta il più alto, ma il testo specifica "per convenzione, ha l'indirizzo più basso sulla rete"). Ad esempio, su una rete 192.31.65.0/24, il default gateway potrebbe essere 192.31.65.1.

### 17. In cosa consiste il proxy ARP? In quali situazioni viene utilizzato?

Il **proxy ARP** è una tecnica in cui un router risponde alle richieste ARP per un host che si trova su una rete diversa, fornendo il proprio indirizzo Ethernet invece di quello dell'host destinazione. Quando un host (Host 1) su una rete (CS) vuole inviare un pacchetto a un host (Host 4) su un'altra rete (EE), il router sulla rete CS può rispondere alle richieste ARP per l'Host 4 fornendo il proprio indirizzo Ethernet (E3). In questo modo, l'Host 1 invierà il pacchetto al router, che poi lo inoltrerà all'Host 4 sulla rete EE.

Il proxy ARP è utilizzato in situazioni in cui un host vuole **apparire su una rete anche se effettivamente risiede in un'altra**. Una situazione comune, ad esempio, è quando una **stazione mobile** (un dispositivo che si sposta) vuole che qualche altro nodo raccolga il proprio traffico quando non si trova nella sua LAN di appartenenza.

### 18. Perché in una configurazione con proxy ARP l'host di destinazione non può rispondere direttamente alla richiesta ARP?

In una configurazione con proxy ARP, l'host di destinazione non può rispondere direttamente alla richiesta ARP perché **i router non inoltrano i messaggi broadcast a livello Ethernet**. La richiesta ARP è un frame Ethernet broadcast che viene inviato sulla rete locale (CS). I router, per loro natura, non inoltrano i frame broadcast da una rete all'altra. Pertanto, l'Host 4 (sulla rete EE) non vede mai la richiesta ARP proveniente dall'Host 1 (sulla rete CS). È per questo motivo che il router deve intervenire come proxy, rispondendo per conto dell'Host 4.

#### Sottosezione 6.1.3 – DHCP – Dynamic Host Configuration Protocol

### 19. Quale problema risolve DHCP (Dynamic Host Configuration Protocol)?

DHCP risolve il problema della **configurazione manuale degli host**. ARP e altri protocolli di Internet assumono che gli host siano configurati con alcune informazioni di base, come il proprio indirizzo IP. Configurare manualmente ogni computer (inserendo indirizzo IP, maschera di sottorete, default gateway, DNS, etc.) è **tedioso e suscettibile di errori**. DHCP automatizza questo processo: quando un computer si avvia, ottiene automaticamente un indirizzo IP e altre informazioni di configurazione da un server DHCP, senza intervento umano.

### 20. Quali informazioni di base deve avere un host per funzionare in rete? Perché la configurazione manuale è problematica?

Un host deve avere diverse informazioni di base per funzionare in rete, tra cui: il proprio indirizzo IP, la maschera di sottorete, l'indirizzo IP del default gateway (router), l'indirizzo IP del server DNS, e talvolta altri parametri come il server per la sincronizzazione dell'orologio (time server).

La configurazione manuale è problematica perché:
- È **tediosa** per l'amministratore, specialmente su reti con molti host
- È **suscettibile di errori** (si possono inserire indirizzi errati, causare conflitti di IP, o dimenticare di aggiornare la configurazione quando la rete cambia)
- Non è scalabile in reti di grandi dimensioni o con host che si connettono e disconnettono frequentemente (come computer portatili)

### 21. Spiega il processo di configurazione di un host tramite DHCP partendo dall'avvio.

Il processo di configurazione di un host tramite DHCP, partendo dall'avvio, è il seguente:

1. Quando un computer viene avviato, ha un indirizzo Ethernet (o altro di livello data link) all'interno della scheda di rete, ma **non ha un indirizzo IP**.

2. Analogamente ad ARP, il computer invia sulla rete una richiesta **broadcast** tramite un pacchetto **DHCP DISCOVER** per ottenere un indirizzo IP.

3. Il pacchetto deve raggiungere il server DHCP. Se il server non è direttamente collegato alla stessa rete, il router deve essere configurato per ricevere il messaggio DHCP e inoltrarlo al server (funzione di DHCP relay).

4. Quando il server riceve il pacchetto, **alloca un indirizzo IP libero** e lo invia all'host in un pacchetto **DHCP OFFER** (che potrebbe dover essere inoltrato nuovamente dal router).

5. Per essere in grado di eseguire questa operazione anche quando gli host non hanno indirizzo IP, il server identifica un host tramite il suo **indirizzo Ethernet** (contenuto nel pacchetto DHCP DISCOVER).

### 22. Cosa sono i pacchetti DHCP DISCOVER e DHCP OFFER?

- **DHCP DISCOVER**: è il pacchetto che il client (host che si avvia) invia in **broadcast** sulla rete per trovare un server DHCP e richiedere un indirizzo IP. Contiene l'indirizzo Ethernet del client come identificatore.

- **DHCP OFFER**: è il pacchetto che il server DHCP invia in risposta al DHCP DISCOVER. Contiene un **indirizzo IP offerto** al client (un indirizzo libero prelevato dal pool di indirizzi gestiti dal server), insieme ad altre informazioni di configurazione (maschera di sottorete, default gateway, DNS, lease time, etc.).

### 23. Come identifica il server DHCP un host che ancora non ha un indirizzo IP?

Il server DHCP identifica un host che ancora non ha un indirizzo IP tramite il suo **indirizzo Ethernet (MAC address)** . Il client include il proprio indirizzo Ethernet nel pacchetto DHCP DISCOVER. Anche se il client non ha un indirizzo IP (o il suo indirizzo IP è ancora sconosciuto), l'indirizzo Ethernet è un identificatore fisico unico che il server può utilizzare per riconoscere il client e associargli un indirizzo IP. Il server può anche mantenere una tabella di associazioni tra indirizzi Ethernet e indirizzi IP assegnati (per assegnazioni fisse o "reserved").

### 24. Cos'è il leasing in DHCP? Come funziona il rinnovo?

Il **leasing** (locazione) in DHCP è una tecnica per cui l'assegnazione dell'indirizzo IP viene fissata per un **periodo di tempo limitato** (la durata del lease). Questo risolve il problema degli indirizzi IP che andrebbero definitivamente persi se un host abbandonasse la rete senza restituire il proprio indirizzo al server DHCP.

Il funzionamento del rinnovo è il seguente:
- Il server assegna un indirizzo IP al client con una durata specifica (es. 24 ore, 7 giorni, etc.).
- Il client può utilizzare l'indirizzo per tutta la durata del lease.
- **Poco prima della scadenza del leasing**, l'host deve **chiedere al server DHCP il rinnovo dell'indirizzo** (inviando un messaggio DHCP REQUEST).
- Se il server concede il rinnovo (inviando un DHCP ACK), il client può continuare a utilizzare lo stesso indirizzo IP per un nuovo periodo di lease.
- Se il client non riesce a fare la richiesta (es. è spento o fuori rete) o la richiesta viene **rifiutata** dal server (ad esempio perché l'indirizzo è stato riassegnato ad altri), il client **non può più utilizzare** l'indirizzo IP che gli era stato assegnato precedentemente.

### 25. Perché il leasing è necessario? Cosa accadrebbe senza questa tecnica?

Il leasing è necessario perché **se un host abbandona la rete e non restituisce il proprio indirizzo IP al server DHCP, quell'indirizzo andrebbe definitivamente perso**. Dopo un po' di tempo, molti indirizzi IP potrebbero non essere più disponibili perché "legati" a host che non esistono più o che non sono più in rete.

Senza il leasing, il server DHCP allocherebbe indirizzi IP in modo permanente. In una rete mobile o con molti host che si connettono e disconnettono, il pool di indirizzi si esaurirebbe rapidamente. Il leasing garantisce che gli indirizzi vengano automaticamente rilasciati dopo un certo tempo se l'host non ne richiede il rinnovo, consentendo il riutilizzo degli indirizzi da parte di altri host.

### 26. Quali parametri aggiuntivi può configurare DHCP oltre all'indirizzo IP?

DHCP può configurare numerosi parametri aggiuntivi oltre all'indirizzo IP. Esempi comuni menzionati nel testo sono:
- **Maschera di rete** (subnet mask)
- **Indirizzo IP del default gateway** (router predefinito)
- **Indirizzo IP del server DNS** (Domain Name System)
- **Server per la sincronizzazione dell'orologio interno** (time server, NTP)

Il testo specifica che DHCP è "molto usato in Internet per configurare **ogni sorta di parametro** oltre a fornire indirizzi IP agli host".

### 27. In quali contesti viene utilizzato DHCP (reti domestiche, aziendali, ISP)?

DHCP è utilizzato in molteplici contesti:
- **Reti aziendali**: per configurare automaticamente i computer dei dipendenti, semplificando l'amministrazione di rete
- **Reti domestiche**: il router domestico tipicamente include un server DHCP che assegna indirizzi IP privati ai dispositivi della LAN domestica
- **ISP (Internet Service Provider)** : gli ISP usano DHCP per configurare i parametri dei dispositivi di accesso a Internet (modem/router dei clienti), in modo che i clienti non debbano telefonare all'ISP per avere tali informazioni

### 28. Quali protocolli precedenti sono stati quasi completamente sostituiti da DHCP? Perché?

DHCP ha quasi del tutto sostituito i seguenti protocolli precedenti:
- **RARP (Reverse Address Resolution Protocol)** : permetteva a un host di scoprire il proprio indirizzo IP a partire dal proprio indirizzo Ethernet, ma richiedeva un server RARP sulla stessa rete e non forniva altri parametri di configurazione.
- **BOOTP (Bootstrap Protocol)** : più flessibile di RARP, permetteva di fornire più parametri di configurazione, ma era più limitato di DHCP (ad esempio, non supportava il leasing e la riconfigurazione dinamica).

La sostituzione è avvenuta perché DHCP offre **funzionalità più avanzate**, tra cui: leasing (assegnazione temporanea degli indirizzi), supporto a una gamma molto più ampia di parametri configurabili, e la capacità di riconfigurare dinamicamente gli host anche durante il funzionamento.

---

## Sezione 6.2 – NAT – Network Address Translation

### 29. Quale problema principale affronta il NAT (Network Address Translation)?

Il NAT affronta il problema della **scarsità degli indirizzi IPv4**. Gli indirizzi IP sono scarsi; ad esempio, un ISP potrebbe avere un indirizzo /16 che consente di gestire 65.534 host, ma se il numero dei clienti supera questo valore, sorge un problema. La questione dell'esaurimento degli indirizzi IP non è un problema teorico che potrebbe presentarsi in un lontano futuro: "sta accadendo proprio qui e ora". Il NAT è stato sviluppato come una **soluzione rapida attuabile in tempi brevi** per mitigare la scarsità di indirizzi IPv4, in attesa della transizione a IPv6.

### 30. Perché la scarsità di indirizzi IPv4 è un problema concreto e non solo teorico?

La scarsità di indirizzi IPv4 è un problema concreto perché il numero di dispositivi connessi a Internet è cresciuto in modo esponenziale (computer, smartphone, tablet, dispositivi IoT, server, etc.), mentre il numero totale di indirizzi IPv4 è limitato a circa 4,3 miliardi (2³²), molti dei quali non sono utilizzabili (indirizzi riservati, privati, multicast, etc.). Gli indirizzi IPv4 disponibili sono stati effettivamente **esauriti** a livello dei registri regionali tra il 2011 e il 2019. Senza soluzioni come il NAT, non sarebbe possibile connettere tutti i dispositivi attuali a Internet con indirizzi IPv4 univoci.

### 31. Qual è la soluzione a lungo termine al problema dell'esaurimento degli indirizzi IPv4? Perché la transizione è lenta?

La soluzione a **lungo termine** è che tutta Internet passi a **IPv6**, il protocollo che adotta indirizzi a 128 bit, fornendo uno spazio di indirizzamento virtualmente infinito.

La transizione è lenta perché:
- IPv6 è un protocollo **molto diverso da IPv4**, con retrocompatibilità limitata
- Richiede l'aggiornamento di **tutti i router, switch, sistemi operativi e applicazioni** su Internet
- Molti ISP e organizzazioni hanno investito molto in infrastrutture IPv4 e sono riluttanti a sostenere i costi della migrazione
- Esistono soluzioni "ponte" come il NAT che, seppur imperfette, permettono di continuare a usare IPv4
- La transizione richiede la **coesistenza** di entrambi i protocolli per un lungo periodo (dual stack)

### 32. Qual è l'idea di base del NAT? Quanti indirizzi IP pubblici assegna tipicamente a un'azienda o casa?

L'idea di base del NAT è assegnare a ogni azienda o casa un **singolo indirizzo IP** (o, al massimo, un piccolo numero di indirizzi) per il traffico di Internet. Dentro la rete del cliente, ogni computer riceve un indirizzo IP unico (privato), utilizzato per instradare il traffico interno alla rete locale. Tuttavia, quando un pacchetto sta per lasciare la rete locale per dirigersi verso l'ISP, viene eseguita una **traduzione di indirizzo** dall'indirizzo IP interno a quello pubblico condiviso.

In pratica, molti dispositivi sulla LAN condividono lo **stesso indirizzo IP pubblico** verso Internet.

### 33. Quali sono i tre intervalli di indirizzi IP privati riservati per l'uso interno? Quanti host supporta ciascuno?

I tre intervalli di indirizzi IP privati (dichiarati tali dalle specifiche NAT) sono:

| Intervallo | CIDR | Numero di host |
|------------|------|----------------|
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 | 16.777.216 host |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 | 1.048.576 host |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 | 65.536 host |

L'unica regola è che nessun pacchetto contenente questi indirizzi possa apparire su Internet; devono essere tradotti dal NAT prima di uscire verso la rete pubblica.

### 34. Perché i pacchetti contenenti indirizzi privati non possono apparire su Internet?

I pacchetti contenenti indirizzi privati non possono apparire su Internet perché **non sono instradabili globalmente**. I router su Internet (i router dei core network) sono configurati per **scartare** (o non inoltrare) qualsiasi pacchetto che abbia come indirizzo sorgente o destinazione un indirizzo degli intervalli privati. Questo è un accordo universale tra tutti i provider Internet. Se un pacchetto con indirizzo privato uscisse su Internet, non potrebbe essere consegnato perché nessun router saprebbe dove si trova quella rete (l'indirizzo non è univoco a livello globale e non è stato allocato a nessun provider specifico). Inoltre, rappresenterebbe un potenziale problema di sicurezza.

### 35. Quale intervallo di indirizzi privati è la scelta più comune nelle aziende? Perché?

Il primo intervallo (10.0.0.0 – 10.255.255.255, /8) è la scelta comune in molte aziende, anche in quelle che non hanno bisogno di così tanti indirizzi (16.777.216 host). La ragione è che offre **massima flessibilità** per la crescita futura e semplifica la pianificazione della rete (un grande blocco contiguo è più facile da gestire e suddividere in sottoreti rispetto a blocchi più piccoli). Inoltre, utilizzando il blocco /8, un'azienda evita conflitti di indirizzamento quando si collega con partner che potrebbero usare gli altri blocchi privati.

### 36. Descrivi il percorso di un pacchetto che esce da una rete con NAT: cosa succede quando attraversa l'apparato NAT?

Quando un pacchetto esce dalla rete interna e raggiunge l'apparato NAT, accade quanto segue:

1. L'indirizzo sorgente interno (ad esempio 10.0.0.1) viene **sostituito** dall'indirizzo IP pubblico dell'azienda (ad esempio 198.60.42.12).

2. Il campo della **porta sorgente** (nell'intestazione TCP o UDP) viene **sostituito con un indice** che punta alla tabella di traduzione del NAT. Questa tabella contiene l'indirizzo IP originale e la porta sorgente originale.

3. I **checksum** delle intestazioni IP e TCP/UDP vengono **ricalcolati** (perché i campi dell'indirizzo e della porta sono cambiati) e inseriti nel pacchetto.

4. Il pacchetto viene quindi inoltrato verso l'ISP (e da lì verso Internet) con il nuovo indirizzo sorgente pubblico.

### 37. Con quali altri dispositivi viene spesso abbinato l'apparato NAT?

L'apparato NAT è spesso abbinato a un **firewall** (muro di fuoco), inserito all'interno di un singolo apparecchio che **protegge la rete locale**, controllando attentamente tutti i dati che entrano e che escono dalla LAN. Si può anche integrare l'apparato NAT nel **router** o nel **modem ADSL aziendale** (o nel router domestico). Nella maggior parte dei dispositivi consumer (router domestici), NAT e firewall sono integrati nello stesso dispositivo.

### 38. Qual è il problema principale nella gestione delle risposte ai pacchetti in NAT?

Il problema principale è che quando i dati di risposta tornano da Internet (ad esempio da un server web), sono indirizzati all'IP pubblico (come 198.60.42.12). A questo punto, il NAT deve decidere a quale **indirizzo di destinazione interno** (quale host nella LAN privata) inviare questi dati. Idealmente, un campo nell'intestazione IP potrebbe essere utilizzato per tenere traccia dell'indirizzo sorgente originale, ma nell'intestazione IP rimane inutilizzato solo un singolo bit, insufficiente per memorizzare questa informazione.

### 39. Perché i progettisti di NAT hanno scelto di utilizzare le porte TCP/UDP invece di campi dell'intestazione IP?

I progettisti di NAT hanno notato che la maggior parte dei pacchetti IP trasporta al suo interno **TCP o UDP**, entrambi con intestazioni che contengono una **porta sorgente e una porta di destinazione** (numeri interi a 16 bit). Quando un processo vuole stabilire una connessione TCP con un processo remoto, si lega a una porta TCP inutilizzata sulla sua macchina (porta sorgente). Questa associazione (indirizzo IP + porta) identifica univocamente il processo sulla macchina. Utilizzando le porte, il NAT può distinguere diverse connessioni provenienti dallo stesso indirizzo IP interno (o da indirizzi diversi) anche se condividono lo stesso IP pubblico in uscita.

### 40. Cosa sono le porte TCP? Quanti bit hanno e a cosa servono?

Le porte TCP sono **numeri interi a 16 bit** (quindi vanno da 0 a 65.535) che indicano dove inizia e finisce una connessione TCP (o UDP). Quando un processo vuole stabilire una connessione TCP con un processo remoto, si lega a una porta TCP inutilizzata sulla sua macchina, chiamata **porta sorgente**, e fornisce anche una **porta di destinazione** (che identifica il servizio remoto, ad esempio la porta 80 per HTTP). Questo permette di identificare i processi che utilizzano la connessione. Le porte consentono il **multiplexing/demultiplexing** dei flussi di dati: un singolo host può avere molte connessioni TCP attive contemporaneamente, ciascuna identificata dalla coppia (IP sorgente, porta sorgente, IP destinazione, porta destinazione).

### 41. Spiega nel dettaglio come il NAT tiene traccia delle associazioni tra indirizzi interni ed esterni usando le porte sorgente.

Il NAT tiene traccia delle associazioni nel modo seguente:

1. Quando un pacchetto esce dalla rete interna, il NAT crea una **nuova entry** nella sua tabella di traduzione.

2. L'entry contiene: (indirizzo IP interno, porta sorgente originale, porta sorgente tradotta assegnata dal NAT, indirizzo IP pubblico, porta di destinazione remota, indirizzo IP remoto).

3. Il NAT **sostituisce** la porta sorgente originale nel pacchetto con un **numero di porta univoco** (scelto dal NAT) che servirà come indice (o come chiave) per identificare la connessione.

4. Il NAT **ricalcola** i checksum di IP e TCP/UDP e invia il pacchetto modificato su Internet.

5. Quando arriva un pacchetto di risposta dall'ISP, contiene nel campo "porta destinazione" (nel pacchetto di risposta, la porta sorgente dell'originale diventa porta destinazione) il numero di porta che il NAT aveva assegnato.

6. Il NAT utilizza questo numero di porta come **indice** nella sua tabella di associazione per trovare l'entry corrispondente.

7. Dalla tabella, il NAT estrae l'indirizzo IP interno e la porta sorgente TCP originale, e **sostituisce** l'indirizzo e la porta nel pacchetto in ingresso.

8. Il NAT **ricalcola** nuovamente i checksum e inoltra il pacchetto al router interno per la normale consegna basata sull'indirizzo privato.

### 42. Cosa contiene la tabella di traduzione del NAT?

La tabella di traduzione del NAT (NAT translation table) contiene tipicamente, per ogni connessione attiva che attraversa il NAT:

- L'indirizzo IP interno (privato) del client
- La porta sorgente originale (TCP o UDP) del client
- La porta sorgente tradotta (assegnata dal NAT, univoca per quella connessione in uscita)
- L'indirizzo IP pubblico del NAT (lo stesso per tutte le connessioni in uscita)
- La porta di destinazione remota e l'indirizzo IP remoto (opzionali, ma aiutano a distinguere connessioni verso server diversi)

Per connessioni TCP, il NAT mantiene anche lo stato della connessione (SYN_SENT, ESTABLISHED, FIN_WAIT, etc.) per gestire correttamente il rilascio e il timeout delle entry.

### 43. Perché il NAT deve ricalcolare i checksum delle intestazioni IP e TCP?

Il NAT deve ricalcolare i **checksum** delle intestazioni IP e TCP/UDP perché i checksum vengono calcolati su campi che **cambiano** durante la traduzione:
- Il checksum IP copre l'indirizzo sorgente (che viene modificato dal NAT)
- Il checksum TCP/UDP copre una pseudointestazione che include gli indirizzi IP sorgente e destinazione (e le porte, che vengono modificate per la porta sorgente)

Se il NAT non ricalcolasse i checksum, il destinatario (o i router intermedi) troverebbe un checksum errato e scarterebbe il pacchetto. Il checksum deve essere ricalcolato sia per i pacchetti in uscita (dopo la traduzione dell'indirizzo sorgente e della porta) sia per i pacchetti in ingresso (dopo la traduzione inversa dell'indirizzo destinazione e della porta).

### 44. Come fa il NAT a gestire un pacchetto di risposta che arriva dall'ISP?

Quando un pacchetto di risposta dall'ISP raggiunge il NAT, la procedura è la seguente:

1. Il campo della **porta destinazione** nell'intestazione TCP/UDP (che corrisponde alla porta sorgente che il NAT aveva assegnato nel pacchetto in uscita) viene utilizzato come **indice** nella tabella di associazione.

2. Da questa tabella, il NAT estrae l'indirizzo IP interno e la porta sorgente TCP originale.

3. Il NAT **sostituisce** l'indirizzo IP destinazione (quello pubblico) con l'indirizzo IP interno privato.

4. Il NAT **sostituisce** la porta destinazione (quella assegnata) con la porta sorgente originale del client.

5. Il NAT **ricalcola** i checksum IP e TCP/UDP (poiché indirizzo e porta sono cambiati).

6. Il NAT **inoltra** il pacchetto al router interno (o direttamente al client sulla LAN) per la normale consegna basata sull'indirizzo privato.

### Obiezioni e Limiti del NAT

### 45. Perché il NAT viola il modello gerarchico di IP?

Il NAT viola il modello gerarchico di IP perché, secondo il modello originale di IP, ogni indirizzo IP identifica in modo univoco una singola macchina a livello globale. Con il NAT, **migliaia di macchine possono condividere lo stesso indirizzo IP** (come 10.0.0.1 è usato in milioni di reti private diverse). Questo rompe l'assunzione di univocità globale degli indirizzi IP e rende più complessa l'architettura di Internet, perché la rete non può più contare sul fatto che un indirizzo IP identifichi univocamente un host.

### 46. In che modo il NAT rompe il modello di connettività end-to-end di Internet?

Il NAT rompe il modello di **connettività end-to-end** di Internet, impedendo a un host pubblico di iniziare una comunicazione con un host privato senza una connessione preesistente. In Internet pura (senza NAT), qualsiasi host può contattare qualsiasi altro host (se non ci sono firewall) perché ogni host ha un indirizzo pubblico raggiungibile. Con il NAT, gli host nella rete privata non hanno indirizzi pubblici, e la tabella di traduzione del NAT è inizialmente vuota. Per un host pubblico, non esiste un modo diretto per contattare un host privato a meno che non sia già stata stabilita una connessione dall'interno verso l'esterno (che ha creato una entry nella tabella). Questo rende difficili (o impossibili) molte applicazioni peer-to-peer, server domestici, giochi online con hosting locale, e servizi di condivisione file.

### 47. Perché si dice che il NAT trasforma Internet da rete non orientata alla connessione a rete orientata alla connessione? Quale vulnerabilità introduce?

Il NAT trasforma Internet da una rete non orientata alla connessione (connectionless) a una rete orientata alla connessione (connection-oriented) perché il NAT **deve mantenere lo stato delle connessioni che attraversano**. In una rete puramente a datagram (senza NAT), i router non mantengono alcuno stato sulle connessioni. Con il NAT, invece, il dispositivo NAT deve tenere una tabella che ricorda quali connessioni sono attive e quali traduzioni sono state effettuate.

La vulnerabilità che questo introduce è che se il **NAT si guasta** o viene riavviato, tutte le informazioni di stato vengono perse, e quindi **tutte le connessioni TCP in corso vengono interrotte** (non possono essere riprese perché il NAT non sa più a quale host interno associare i pacchetti di risposta). Questo rende il NAT un **single point of failure** (punto singolo di guasto) per tutte le connessioni che lo attraversano.

### 48. Quale principio della stratificazione dei protocolli viola il NAT? Perché?

Il NAT viola il principio della stratificazione dei protocolli che afferma che **ogni livello non deve fare ipotesi su ciò che il livello superiore ha inserito nel payload**. In particolare, il livello di rete (IP) dovrebbe ignorare completamente il contenuto dei pacchetti (che potrebbe essere TCP, UDP, ICMP, o qualsiasi altro protocollo). Tuttavia, il NAT deve **ispezionare il payload** dei pacchetti IP (per leggere le porte TCP/UDP) per poter funzionare. Questo crea una **dipendenza** dal protocollo di trasporto (TCP/UDP) e dalle specifiche delle loro intestazioni. Se in futuro il protocollo TCP venisse aggiornato con uno schema di intestazione diverso, il NAT non funzionerebbe più correttamente (a meno di essere aggiornato specificatamente). Questo è un esempio di violazione del principio di "information hiding" (nascondimento delle informazioni) che sta alla base della progettazione a livelli.

### 49. Perché il NAT non supporta bene i protocolli non TCP/UDP? Fai un esempio di protocollo problematico.

Il NAT non supporta bene i protocolli non TCP/UDP perché la sua tabella di traduzione si basa sulle **porte TCP/UDP** per distinguere le connessioni. Se un protocollo non usa né TCP né UDP (ad esempio, ICMP, GRE, IPsec in modalità trasporto, o altri protocolli IP con numero di protocollo diverso da 6 o 17), il NAT non ha un campo "porta" da utilizzare come indice nella tabella. Inoltre, alcuni protocolli come **FTP (File Transfer Protocol)** sono problematici perché FTP utilizza **connessioni separate** per il controllo (porta 21) e per i dati (porta 20 in modalità attiva, o porte casuali in modalità passiva), e inoltre FTP incorpora gli indirizzi IP all'interno del payload (nei comandi PORT o PASV). Il NAT deve ispezionare e modificare anche questi payload specifici di FTP, rendendo necessario un **ALG (Application Level Gateway)** specifico per FTP.

### 50. Quale limite deriva dalla dimensione del campo della porta sorgente TCP (16 bit) in termini di numero massimo di macchine associabili?

Poiché il campo della porta sorgente TCP è di 16 bit, un indirizzo IP pubblico può teoricamente essere associato a un **massimo di 65.536 macchine** (2¹⁶) contemporaneamente (una per ogni possibile porta sorgente, da 0 a 65535). Tuttavia, il numero effettivo è **leggermente inferiore** perché alcune porte sono riservate per usi speciali (le well-known ports da 0 a 1023 sono tipicamente riservate per servizi standard). Inoltre, il NAT deve anche riservare alcune porte per il proprio funzionamento e per evitare conflitti. Nella pratica, 65.000 connessioni simultanee sono sufficienti per la maggior parte delle reti domestiche e di piccole/medie aziende, ma possono essere un limite in reti molto grandi.

### 51. Qual è l'RFC che discute i problemi legati al NAT?

I problemi legati al NAT sono discussi nell'**RFC 2993** (Architectural Implications of NAT). Questo RFC descrive le implicazioni architetturali del NAT, includendo molti dei problemi menzionati: violazione del modello end-to-end, violazione della stratificazione, difficoltà di supporto a protocolli non TCP/UDP, problemi di sicurezza, e altri aspetti problematici.

### 52. Nonostante i suoi limiti, perché il NAT è ancora ampiamente utilizzato?

Nonostante i suoi limiti, il NAT è ancora ampiamente utilizzato perché rappresenta una **soluzione pratica al problema della mancanza di indirizzi IP** (scarsità di IPv4), specialmente nelle reti domestiche e nelle piccole aziende. Inoltre, il NAT è spesso combinato con funzioni di **firewall** per bloccare i pacchetti in arrivo non richiesti, fornendo un ulteriore livello di sicurezza (anche se questa sicurezza è più un effetto collaterale che una funzionalità progettuale). Il NAT è anche relativamente semplice da implementare e configurare, ed è supportato da tutti i router domestici e aziendali.

### 53. Con quale altra funzionalità viene spesso combinato il NAT nelle reti domestiche e nelle piccole aziende?

Il NAT viene spesso combinato con le funzioni di **firewall** (muro di fuoco). In molti dispositivi (router domestici, modem/router, appliance di sicurezza), NAT e firewall sono integrati nello stesso apparecchio. Il firewall può bloccare i pacchetti in arrivo non richiesti (proteggendo la rete interna da attacchi esterni), mentre il NAT traduce gli indirizzi. Il firewall può anche lavorare con la tabella NAT per consentire selettivamente l'accesso dall'esterno verso server interni specifici (port forwarding).

### 54. Secondo il testo, il NAT scomparirà completamente con l'adozione diffusa di IPv6? Perché?

Secondo il testo, **anche con l'adozione diffusa di IPv6, è improbabile che il NAT scompaia completamente**. Anche se IPv6 elimina la necessità del NAT per la conservazione degli indirizzi (grazie allo spazio di indirizzamento enorme), il NAT è stato anche utilizzato come strumento di sicurezza (per nascondere la topologia interna della rete) e come meccanismo di controllo amministrativo. Molti amministratori di rete potrebbero continuare a utilizzare NAT in IPv6 per ragioni di policy, sicurezza, o per semplificare la riconfigurazione delle reti. Inoltre, molte applicazioni e dispositivi esistenti si sono adattati alla presenza del NAT; potrebbero continuare a usarlo anche quando IPv6 sarà prevalente.

---

## Domande trasversali e di confronto

### 55. Confronta ARP e DHCP in termini di: scopo, tipo di trasmissione utilizzata, informazioni fornite.

| Caratteristica | ARP | DHCP |
|----------------|-----|------|
| **Scopo** | Risolvere indirizzi IP in indirizzi MAC (Ethernet) | Assegnare automaticamente indirizzi IP e parametri di configurazione agli host |
| **Tipo di trasmissione** | Broadcast (richiesta ARP) e unicast (risposta ARP) | Broadcast (DHCP DISCOVER) e unicast (DHCP OFFER/ACK) |
| **Informazioni fornite** | Associazione IP ↔ MAC (indirizzo Ethernet) | Indirizzo IP, maschera di sottorete, default gateway, DNS, time server, lease time, etc. |
| **Direzione** | Da IP a MAC (risoluzione) | Da server a client (configurazione) |
| **Protocollo di trasporto** | Livello data link (Ethernet) diretto | UDP (porta 67 per server, 68 per client) |

### 56. Spiega la differenza tra ARP, gratuitous ARP e proxy ARP. In quali scenari viene usato ciascuno?

| Tipo | Funzionamento | Scenari di utilizzo |
|------|---------------|---------------------|
| **ARP standard** | Un host invia un broadcast chiedendo "chi ha questo indirizzo IP?"; l'host che possiede quell'IP risponde con il suo indirizzo MAC | Comunicazione normale tra host sulla stessa rete: un host deve inviare un pacchetto a un altro host sulla stessa LAN e ha bisogno del suo indirizzo MAC |
| **Gratuitous ARP** | Un host trasmette una richiesta ARP per il **proprio** indirizzo IP all'avvio, senza aspettarsi risposta. Inserisce la propria associazione nella cache di tutti gli altri host | All'avvio di un host (o quando cambia IP) per popolare preventivamente le cache ARP altrui; rilevazione di conflitti IP (se arriva una risposta) |
| **Proxy ARP** | Un router risponde alle richieste ARP per host su reti diverse, fornendo il proprio indirizzo MAC | Quando un host vuole apparire su una rete diversa da quella in cui risiede (es. stazioni mobili, reti con subnet distinte ma logicamente unificate) |

### 57. Confronta i tre intervalli di indirizzi privati (Classe A, B, C) in termini di numero di host supportati e uso tipico.

| Intervallo | Classe equivalente | CIDR | Numero di host | Uso tipico |
|------------|-------------------|------|----------------|------------|
| 10.0.0.0 – 10.255.255.255 | A | 10.0.0.0/8 | 16.777.216 | Grandi aziende, organizzazioni con molte subnet, provider di servizi cloud |
| 172.16.0.0 – 172.31.255.255 | B | 172.16.0.0/12 | 1.048.576 | Medie imprese, università, organizzazioni con esigenze di subnetting moderate |
| 192.168.0.0 – 192.168.255.255 | C | 192.168.0.0/16 | 65.536 | Reti domestiche, piccole aziende, laboratori, ambienti di test |

### 58. Quali sono le differenze principali tra ICMPv4 e ICMPv6?

| Caratteristica | ICMPv4 | ICMPv6 |
|----------------|--------|--------|
| **Funzionalità base** | Messaggi di errore e diagnostica (ping, traceroute) | Tutte le funzionalità di ICMPv4 |
| **Protocolli incorporati** | ARP, IGMP sono separati | Neighbor Discovery (NDP), MLD (Multicast Listener Discovery) sono incorporati |
| **Autoconfigurazione** | Non supportata (richiede DHCP o configurazione manuale) | SLAAC (Stateless Address Autoconfiguration) tramite ICMPv6 |
| **Router discovery** | Limitata (ICMP Router Discovery Protocol, obsoleto) | Incorporata in NDP |
| **Messaggi specifici** | Echo Request/Reply, Destination Unreachable, Time Exceeded, Redirect, Parameter Problem | Stessi + Neighbor Solicitation/Advertisement, Router Solicitation/Advertisement, Redirect |
| **Struttura** | Più semplice | Più complessa e ricca di funzionalità |

### 59. Perché il NAT è considerato una soluzione "rapida" e "transitoria" mentre IPv6 è la soluzione "definitiva"?

Il NAT è considerato una **soluzione rapida e transitoria** perché:
- È stato sviluppato come **ripiego** (workaround) per la scarsità di indirizzi IPv4 in attesa di una soluzione più pulita
- Non risolve il problema fondamentale (lo spazio di indirizzi IPv4 rimane limitato)
- Introduce problemi architetturali (violazione end-to-end, problemi con alcuni protocolli, necessità di mantenere stato)
- È una soluzione "patch" che aggiunge complessità senza eliminare la causa radice

IPv6 è considerato la **soluzione definitiva** perché:
- Risolve il problema alla **radice**: lo spazio di indirizzi a 128 bit elimina per sempre la scarsità di indirizzi (almeno per il futuro prevedibile)
- Ripristina il **modello end-to-end** originale di Internet (ogni dispositivo può avere un indirizzo pubblico raggiungibile)
- È stato progettato **ex novo** per superare i limiti di IPv4, includendo funzionalità di sicurezza (IPsec), autoconfigurazione (SLAAC), e header semplificato per prestazioni migliori
- È lo standard ufficiale dell'IETF per il futuro di Internet

Tuttavia, come notato, anche con IPv6 il NAT potrebbe non scomparire completamente per ragioni di sicurezza e policy amministrative.

## Livello Trasporto – Risposte

### Sezione 7.1 – Descrizione dei Servizi di Trasporto

1. **Qual è l'obiettivo finale del livello di trasporto?**
   - Fornire un servizio di trasmissione dati efficace, affidabile ed efficiente in termini di costi ai suoi utenti (processi applicativi), basandosi sui servizi del livello di rete.

2. **Cosa si intende per "entità di trasporto"? Dove può essere situata?**
   - È l'insieme di hardware e software che implementa il livello di trasporto. Può essere situata nel kernel del sistema operativo, in un processo utente separato, in librerie associate alle applicazioni o nella scheda di rete.

3. **Quali sono le tre fasi che seguono le connessioni di trasporto (sia orientate che non orientate)?**
   - Impostazione (setup), trasferimento dati, rilascio (release).

4. **Come può il livello di trasporto essere più affidabile del sottostante servizio di rete?**
   - Può rilevare perdite o alterazioni di pacchetti e compensarle tramite ritrasmissioni (reti a datagram) o può impostare nuove connessioni in caso di interruzione (reti orientate alla connessione).

5. **Qual è la funzione principale del livello di trasporto rispetto ai livelli superiori e inferiori?**
   - Isolare i livelli superiori (utenti del servizio di trasporto) dalla struttura e dalle imperfezioni della rete (livelli inferiori).

#### Sottosezione 7.1.1 – Primitiva

6. **A cosa servono le primitive del livello di trasporto?**
   - A fornire un'interfaccia di servizio ai programmi applicativi, consentendo loro di accedere alle funzionalità del livello di trasporto.

7. **Descrivi la sequenza di primitive utilizzata da un server per accettare una connessione.**
   - Il server esegue LISTEN (bloccante fino all'arrivo di un client), poi CONNECT dal client, e infine il server accetta con ACCEPT.

8. **Cosa fa la primitiva CONNECT dal lato client?**
   - Blocca il chiamante e invia un pacchetto al server per tentare di stabilire una connessione.

9. **Come si chiama un messaggio spedito da un'entità di trasporto a un'altra?**
   - Segmento (o TPDU – Transport Protocol Data Unit).

10. **Qual è la relazione di nidificazione tra segmenti, pacchetti e frame?**
    - I segmenti (livello trasporto) sono contenuti in pacchetti (livello rete), che a loro volta sono contenuti in frame (livello data link).

#### Sottosezione 7.1.2 – Socket di Berkeley

11. **Quali sono le primitive delle socket utilizzate per TCP?**
    - SOCKET, BIND, LISTEN, ACCEPT, CONNECT, SEND, RECEIVE, CLOSE.

12. **A cosa serve la primitiva SOCKET?**
    - Crea un nuovo punto finale di comunicazione (socket).

13. **Cosa fa la primitiva BIND?**
    - Associa un indirizzo locale a una socket.

14. **A cosa serve la primitiva LISTEN e cosa significa che non è bloccante?**
    - Annuncia la capacità di accettare connessioni e fornisce la dimensione della coda. Non è bloccante: il server può continuare altre operazioni mentre attende connessioni.

15. **Come fa un server a gestire più connessioni simultanee usando ACCEPT?**
    - ACCEPT crea una nuova socket per ogni connessione in arrivo, lasciando la socket originale libera per accettare altre connessioni.

16. **Quali primitive usano client e server per trasmettere e ricevere dati?**
    - SEND (invia dati) e RECEIVE (riceve dati).

### Sezione 7.2 – Elementi dei Protocolli di Trasporto

17. **Per quali aspetti i protocolli di trasporto ricordano i protocolli data link?**
    - Entrambi si occupano di controllo degli errori, ordinamento e controllo di flusso.

18. **Quali sono le principali differenze tra l'ambiente del livello data link e quello del livello di trasporto?**
    - Data link: canale fisico diretto; Trasporto: canale sostituito dall'intera rete (più complesso). Differenze: indirizzamento esplicito, costituzione connessione più complessa, possibilità di memorizzazione nella rete, buffering con molti flussi.

19. **Perché nel livello di trasporto è necessario un indirizzamento esplicito delle destinazioni?**
    - Perché a differenza dei collegamenti punto-punto, il livello di trasporto deve identificare destinazioni multiple su reti diverse.

20. **Perché la costituzione della connessione è più complessa nel livello di trasporto rispetto al data link?**
    - Perché nel livello trasporto l'altra estremità non è sempre presente e possono esserci ritardi, perdite e duplicazioni di pacchetti.

21. **Quale problema introduce la possibilità di memorizzazione dei pacchetti nella rete per il livello di trasporto?**
    - Pacchetti duplicati o ritardati possono emergere dopo molto tempo, causando confusione e potenziali errori.

#### Sottosezione 7.2.1 – Indirizzamento

22. **Cosa si intende per TSAP (Transport Service Access Point)?**
    - È uno specifico endpoint nel livello di trasporto (in Internet chiamato "porta").

23. **Cosa si intende per NSAP (Network Service Access Point)? Fai un esempio.**
    - È un endpoint nel livello di rete. Gli indirizzi IP sono esempi di NSAP.

24. **Perché servono i TSAP quando ogni computer ha un singolo NSAP?**
    - Per distinguere i diversi endpoint di trasporto (processi) che condividono lo stesso NSAP (stesso computer).

25. **Come vengono chiamati gli endpoint di trasporto su Internet?**
    - Porte (port).

#### Sottosezione 7.2.2 – Stabilire una Connessione

26. **Perché l'instaurazione di una connessione è complessa in presenza di reti che possono perdere, ritardare, corrompere e duplicare pacchetti?**
    - Perché pacchetti duplicati o ritardati potrebbero essere scambiati per nuove richieste o risposte, causando connessioni errate o duplicate.

27. **Quale scenario peggiore viene descritto con una transazione finanziaria critica?**
    - Se i pacchetti prendono percorsi alternativi, il mittente potrebbe avere timeout e ritrasmettere, causando transazioni duplicate e involontarie.

28. **Come si può limitare la vita dei pacchetti nella rete?**
    - Progettando reti con restrizioni, inserendo un contatore di salti (TTL) in ogni pacchetto, o applicando un timestamp.

29. **Quale soluzione propose Tomlinson basata sugli orologi?**
    - Equipaggiare ogni host con un orologio (contatore binario che si incrementa a intervalli regolari). I k bit più bassi dell'orologio sono usati come primo numero di sequenza.

30. **Cosa richiede l'handshake a tre vie (three-way handshake)?**
    - La verifica reciproca da parte dei peer che l'attuale richiesta di connessione non sia un duplicato.

31. **Descrivi la sequenza normale dell'handshake a tre vie tra host 1 e host 2.**
    - Host1 sceglie numero di sequenza x e invia CONNECTION REQUEST (con x). Host2 risponde con ACK per x e annuncia suo numero di sequenza y. Host1 conferma la scelta di y con il primo segmento dati inviato.

#### Sottosezione 7.2.3 – Rilascio della Connessione

32. **Qual è la differenza tra rilascio asimmetrico e rilascio simmetrico?**
    - Asimmetrico: una parte riattacca e la connessione viene interrotta (come telefono). Simmetrico: la connessione è trattata come due connessioni unidirezionali separate, ciascuna rilasciata indipendentemente.

33. **Descrivi il caso normale di rilascio di una connessione con handshake a tre vie (segmenti DR e ACK).**
    - Utente invia DR (DISCONNECTION REQUEST). Destinatario restituisce DR e avvia timer. Mittente originale invia ACK e rilascia. Ricevente rilascia quando arriva ACK.

34. **Cosa succede se il segmento ACK finale viene perso durante il rilascio?**
    - Il timer del ricevente scade e la connessione viene comunque rilasciata.

35. **Cosa succede se il secondo DR viene perso?**
    - Il mittente originale va in timeout e ritrasmette il DR. Dopo N tentativi, se nessuna risposta arriva, il mittente rilascia la connessione.

36. **Cosa genera una "connessione aperta a metà" (half-open connection) e in quali circostanze si verifica?**
    - Si verifica quando il DR iniziale e tutte le N ritrasmissioni vengono perse: il mittente abbandona e rilascia, mentre l'altro lato rimane attivo e non sa nulla dei tentativi di disconnessione.

#### Sottosezione 7.2.4 – Controllo degli Errori e Controllo di Flusso

37. **Perché il buffering è importante nel livello di trasporto?**
    - Perché un host può avere molte connessioni, ognuna trattata separatamente, e sono necessarie notevoli quantità di buffer per gestire i dati in transito.

38. **Cosa mostra l'esempio di allocazione dinamica dei buffer nella Figura 7.12?**
    - Mostra come mittente e destinatario si scambiano informazioni sulla disponibilità di buffer, consentendo al mittente di inviare solo quando il destinatario ha spazio.

39. **Cosa propone Belsnes per limitare le trasmissioni del mittente basandosi sulla capacità della rete?**
    - Uno schema di controllo di flusso a finestra scorrevole in cui il mittente regola dinamicamente la dimensione della finestra per farla corrispondere alla capacità di trasporto della rete.

#### Sottosezione 7.2.5 – Multiplexing

40. **Cosa si intende per multiplexing nel livello di trasporto? Fai un esempio.**
    - Più connessioni di trasporto distinte che utilizzano la stessa connessione di rete (stesso indirizzo IP). Esempio: quattro connessioni TCP diverse sullo stesso host che condividono lo stesso IP.

41. **Cosa si intende per multiplexing inverso (inverse multiplexing)? In quale situazione è utile?**
    - Una connessione che distribuisce il traffico su diversi percorsi di rete (es. round-robin). Utile quando un utente ha bisogno di più ampiezza di banda o più affidabilità di quella fornita da un singolo percorso.

#### Sottosezione 7.2.6 – Ripristino Dopo un Crash

42. **Perché il ripristino dopo un crash dell'host è più complesso del ripristino dopo un crash della rete?**
    - Perché dopo un crash, l'host perde tutte le informazioni sullo stato delle connessioni (tabelle, numeri di sequenza, etc.) e deve recuperare tali informazioni dai client.

43. **Quali sono le due implementazioni possibili per il server (ordine di scrittura e acknowledgement)?**
    - Prima inviare acknowledgement e poi scrivere i dati (si rischia di perdere dati se il crash avviene dopo l'ACK ma prima della scrittura). Prima scrivere i dati e poi inviare acknowledgement (si rischiano duplicati).

44. **Perché, indipendentemente dall'implementazione, esiste sempre una sequenza di eventi che fa fallire il protocollo di ripristino?**
    - Perché le otto combinazioni di strategie client/server non coprono tutte le possibili sequenze di eventi (ACK, Write, Crash in ordini diversi).

#### Sottosezione 7.2.7 – Protocolli a Finestra Scorrevole

45. **Quali sono i punti chiave che i protocolli a finestra scorrevole devono gestire?**
    - Controllo degli errori (con checksum, ARQ) e controllo di flusso (finestra per limitare i pacchetti in sospeso).

46. **Qual è la differenza tra un checksum del livello data link e uno del livello trasporto?**
    - Data link: protegge un frame mentre percorre un singolo collegamento. Trasporto: protegge un segmento mentre attraversa l'intero percorso di rete (controllo end-to-end).

47. **Cosa afferma l'end-to-end argument di Saltzer et al.?**
    - Il controllo del livello di trasporto che funziona in modo end-to-end è essenziale per la correttezza; i controlli a livello data link non sono essenziali, ma sono preziosi per le prestazioni.

48. **Perché lo stop-and-wait è accettabile su linee wireless ma azzopperebbe le prestazioni su connessioni ad alto prodotto banda-ritardo?**
    - Su linee wireless il prodotto banda-ritardo è piccolo, quindi stop-and-wait è efficiente. Su connessioni ad alto prodotto (es. 1 Mbps con RTT 100ms = 200 Kbit), stop-and-wait limita a pochi segmenti al secondo.

### Sezione 7.3 – Il Protocollo di Trasporto Internet Senza Connessione: UDP

49. **Quali sono i due protocolli principali del livello di trasporto Internet? Quale differenza fondamentale li caratterizza?**
    - UDP (non orientato alla connessione) e TCP (orientato alla connessione). UDP è semplice e non aggiunge affidabilità; TCP offre affidabilità, controllo di flusso e congestione.

50. **Cosa significa l'acronimo UDP?**
    - User Datagram Protocol (protocollo per datagrammi utente).

51. **Quanti byte ha l'intestazione UDP e da quali campi è composta?**
    - 8 byte: Source port, Destination port, UDP length, UDP checksum.

52. **A cosa serve la porta sorgente in UDP?**
    - Serve principalmente per inviare una risposta al mittente: copiando il campo Source port nel campo Destination port del segmento in uscita.

53. **Qual è la lunghezza minima e massima di un segmento UDP?**
    - Minima: 8 byte (sola intestazione). Massima: 65.515 byte (inferiore a 65.535 per limiti di IP).

54. **Il checksum UDP è obbligatorio o opzionale? Cosa verifica?**
    - Opzionale (se non calcolato, viene salvato come 0). Verifica l'intestazione, i dati e una pseudointestazione IP.

55. **Cos'è la pseudointestazione UDP? Perché il suo uso viola la gerarchia dei protocolli?**
    - Una struttura concettuale che include indirizzi IP sorgente e destinazione, numero di protocollo e lunghezza UDP. Viola la gerarchia perché UDP usa informazioni del livello IP.

56. **Cosa UDP non può fare (controllo di flusso, congestione, ritrasmissione)?**
    - Non si occupa di controllo di flusso, controllo di congestione o ritrasmissione dopo errori; questi compiti sono lasciati ai processi utente.

57. **Perché UDP è particolarmente utile per applicazioni client-server come DNS?**
    - Perché richiede meno messaggi (uno in ogni direzione) rispetto a protocolli che richiedono setup iniziale, ed è più semplice da implementare.

58. **Quale protocollo utilizza UDP per la risoluzione dei nomi di dominio?**
    - DNS (Domain Name System).

#### Sottosezione 7.3.1 – Remote Procedure Call: RPC

59. **Qual è l'idea alla base di RPC (Remote Procedure Call)?**
    - Eseguire una chiamata a procedura remota in maniera più simile possibile a una locale, nascondendo tutti i dettagli della rete al programmatore.

60. **Cosa sono il client stub e il server stub in RPC?**
    - Client stub: procedura di libreria che rappresenta la procedura del server nello spazio di indirizzamento del client. Server stub: procedura associata al server. Nascondono il fatto che la chiamata non sia locale.

#### Sottosezione 7.3.2 – Protocolli di Trasporto Real-Time

61. **Perché è stato sviluppato un protocollo di trasporto generico real-time?**
    - Perché ogni applicazione multimediale reinventava lo stesso protocollo; si è capito che un protocollo generico era utile.

62. **In quale livello si colloca RTP (Real-time Transport Protocol)? Perché è difficile classificarlo?**
    - È eseguito nello spazio utente ed è collegato all'applicazione (livello applicazione), ma fornisce funzionalità di trasporto (livello trasporto). È un "protocollo di trasporto implementato nel livello applicazione".

63. **Qual è la funzione base di RTP?**
    - Eseguire il multiplexing di flussi di dati real-time in un singolo flusso di pacchetti UDP (unicast o multicast).

64. **RTP utilizza acknowledgement o ritrasmissioni? Perché?**
    - No, perché la ritrasmissione arriverebbe troppo tardi per essere utile. Se un pacchetto è perso, si salta un fotogramma o si interpola.

65. **A cosa serve il campo Sequence number nell'intestazione RTP?**
    - È un contatore incrementato a ogni invio; serve al destinatario per scoprire se mancano pacchetti.

66. **Cosa indica il campo Payload type in RTP?**
    - Indica quale algoritmo di codifica è stato utilizzato (es. audio a 8 bit non compresso, MP3, etc.). Può cambiare durante la trasmissione.

67. **Quali informazioni sono contenute nei campi Synchronization source identifier e Contributing source identifier?**
    - SSRC: specifica a quale flusso appartiene il pacchetto (multiplexing). CSRC: usato da mixer per elencare i flussi combinati.

68. **A cosa serve RTCP (Real-time Transport Control Protocol)?**
    - Gestisce feedback verso la sorgente (ritardi, jitter, congestione), sincronizzazione tra flussi, e interfaccia utente (denominare le sorgenti).

69. **Come fa RTCP a evitare di consumare troppa banda in applicazioni multicast con molti partecipanti?**
    - I mittenti RTCP diminuiscono il tasso dei loro rapporti per consumare collettivamente non più del 5% della banda.

70. **Quali funzioni svolge RTCP oltre al feedback sulla congestione?**
    - Sincronizzazione tra flussi con clock diversi e denominazione delle sorgenti (testo ASCII da visualizzare).

### Sezione 7.4 – Il Protocollo di Trasporto Internet Orientato alla Connessione: TCP

71. **Cosa significa l'acronimo TCP?**
    - Transmission Control Protocol (protocollo di controllo della trasmissione).

72. **Perché TCP è considerato il "principale motore di Internet"?**
    - Perché fornisce un flusso di byte affidabile end-to-end su una internetwork inaffidabile, con controllo di flusso e congestione.

73. **Quali problemi della internetwork TCP è stato progettato per gestire?**
    - Diverse topologie, larghezze di banda, ritardi, dimensioni di pacchetti; si adatta dinamicamente alle proprietà della internetwork.

74. **In che dimensione tipica TCP suddivide i flussi dati? Perché?**
    - Tipicamente 1.460 byte di dati, in modo che stiano in un singolo frame Ethernet con le intestazioni IP e TCP.

#### Sottosezione 7.4.1 – Il Modello di Servizi

75. **Cosa sono le socket in TCP? Da cosa è composto il loro indirizzo?**
    - Sono i punti terminali di una connessione TCP. L'indirizzo è composto dall'indirizzo IP dell'host e da un numero di porta a 16 bit.

76. **Cosa sono le well-known port? Quali numeri di porta sono riservati?**
    - Porte riservate per servizi standard (minori di 1024), accessibili solo da utenti privilegiati.

77. **Elenca almeno 5 porte ben note con i relativi protocolli e utilizzi.**
    - 20/21 (FTP – trasferimento file), 22 (SSH – login remoto), 25 (SMTP – posta elettronica), 80 (HTTP – web), 443 (HTTPS – web sicuro), 110 (POP-3 – posta), 143 (IMAP – posta).

78. **Che cos'è inetd nei sistemi UNIX? Qual è il suo scopo?**
    - È un demone (internet daemon) associato a più porte che attende connessioni in ingresso. Quando arriva una connessione, genera un nuovo processo ed esegue il demone appropriato.

79. **Quali caratteristiche hanno le connessioni TCP (full-duplex, punto a punto)?**
    - Full-duplex: traffico in entrambe le direzioni contemporaneamente. Punto a punto: ogni connessione ha esattamente due punti terminali (non supporta multicast o broadcast).

80. **A cosa serve il flag PUSH in TCP?**
    - Permette alle applicazioni di forzare l'uscita immediata dei dati senza buffering. Oggi si usa TCP_NODELAY.

81. **A cosa servono i dati urgenti (flag URG) in TCP?**
    - Per dati ad alta priorità (es. CTRL-C per interrompere un processo remoto). Il flag URG e l'Urgent pointer indicano dove si trovano i dati urgenti.

82. **Quanti bit ha il numero di sequenza di un byte in TCP?**
    - 32 bit.

83. **Quali sono i due limiti sulla dimensione di un segmento TCP?**
    - Deve essere contenuto nel payload IP (65.515 byte max) e nella MTU di ogni collegamento (per evitare frammentazione).

84. **Qual è il protocollo di base utilizzato da TCP?**
    - Protocollo a finestra scorrevole con dimensione dinamica della finestra.

#### Sottosezione 7.4.2 – Intestazione del Segmento TCP

85. **Quali sono i campi principali dell'intestazione TCP?**
    - Source port, Destination port, Sequence number, Acknowledgement number, TCP header length, Flags (CWR, ECE, URG, ACK, PSH, RST, SYN, FIN), Window size, Checksum, Urgent pointer, Options.

86. **Perché l'identificatore di connessione TCP è chiamato "quintupla"? Quali cinque elementi lo compongono?**
    - Protocollo (TCP), IP sorgente, porta sorgente, IP destinazione, porta destinazione.

87. **Il campo Acknowledgement number in TCP è cumulativo? Cosa significa?**
    - Sì, specifica il successivo byte previsto (non l'ultimo ricevuto), riassumendo tutti i dati ricevuti con un solo numero.

88. **A cosa serve il campo TCP header length?**
    - Indica quanti gruppi di 32 bit sono contenuti nell'intestazione TCP (perché Options ha lunghezza variabile).

89. **Quali sono i flag CWR e ECE e a cosa servono?**
    - Usati per segnalare congestione con ECN (Explicit Congestion Notification). ECE: ECN-Echo al mittente per rallentare. CWR: Congestion Window Reduced dal mittente.

90. **A cosa serve il flag URG e il campo Urgent pointer?**
    - URG indica che ci sono dati urgenti; Urgent pointer indica lo spiazzamento in byte dove si trovano.

91. **Cosa indica il flag ACK?**
    - Indica che il campo Acknowledgement number è valido. Quasi tutti i pacchetti lo hanno settato.

92. **A cosa serve il flag PSH?**
    - Richiede al ricevente di consegnare i dati all'applicazione all'arrivo, senza bufferizzare.

93. **Cosa fa il flag RST?**
    - Reimposta una connessione confusa (malfunzionamento) o rifiuta un segmento non valido o un tentativo di connessione.

94. **Qual è la differenza tra un segmento SYN con ACK=0 e uno con ACK=1?**
    - SYN+ACK=0: richiesta di connessione (CONNECTION REQUEST). SYN+ACK=1: risposta alla richiesta (CONNECTION ACCEPTED).

95. **A cosa serve il flag FIN?**
    - Rilascia una connessione: indica che il mittente non ha altri dati da trasmettere.

96. **Come viene gestito il controllo di flusso in TCP?**
    - Con finestra scorrevole a dimensione variabile (campo Window size). Indica quanti byte possono essere inviati a partire da quello che ha ricevuto acknowledgement.

97. **Cosa significa un campo Window size pari a 0?**
    - Che il ricevente ha ricevuto i byte fino ad Acknowledgement number-1, ma non ha spazio per altri dati per ora.

98. **Il checksum in TCP è obbligatorio? Cosa verifica?**
    - Sì, obbligatorio. Verifica intestazione, dati e pseudointestazione (con numero di protocollo TCP=6).

99. **A cosa serve l'opzione MSS (Maximum Segment Size)?**
    - Permette a ogni host di specificare la dimensione massima del segmento che è disposto ad accettare.

#### Sottosezione 7.4.3 – Instaurazione di una Connessione

100. **Come viene stabilita una connessione TCP? Descrivi il three-way handshake.**
     - Client invia SYN (seq=x). Server risponde con SYN+ACK (seq=y, ack=x+1). Client invia ACK (ack=y+1). Connessione stabilita.

101. **Cosa succede se un segmento SYN arriva su una porta dove nessun processo è in ascolto?**
     - Viene inviata una risposta con il bit RST=1 per rifiutare la connessione.

102. **Descrivi il caso di instaurazione simultanea di una connessione da entrambi i lati.**
     - Entrambi inviano SYN con ACK=0. Entrambi rispondono con SYN+ACK. Viene creata una sola connessione (identificata dalla stessa coppia di socket).

103. **Perché un segmento SYN consuma un byte nello spazio dei numeri di sequenza?**
     - Per poter ricevere un acknowledgement non ambiguo che confermi la ricezione del SYN stesso.

#### Sottosezione 7.4.4 – Rilascio di una Connessione

104. **Perché è utile immaginare una connessione TCP come due connessioni simplex separate?**
     - Perché ogni direzione può essere rilasciata indipendentemente: una parte può chiudere la sua direzione ma continuare a ricevere dati.

105. **Quanti segmenti sono normalmente necessari per rilasciare una connessione TCP? Perché a volte bastano tre?**
     - Normalmente 4 (FIN, ACK, FIN, ACK). A volte 3 se il primo ACK e il secondo FIN sono nello stesso segmento.

106. **Come si evita il problema dei due esercizi nel rilascio di una connessione TCP?**
     - Usando timer: se una risposta a FIN non arriva entro il tempo di vita massimo di due pacchetti, il mittente del FIN rilascia comunque la connessione.

#### Sottosezione 7.4.5 – Modello di Gestione della Connessione

107. **Quali sono i principali stati della macchina a stati finiti TCP? Descrivili brevemente.**
     - CLOSED (nessuna connessione), LISTEN (in attesa), SYN RCVD (richiesta ricevuta), SYN SENT (richiesta inviata), ESTABLISHED (normale), FIN WAIT 1/2 (chiusura iniziata), TIME WAIT (attesa pacchetti), CLOSE WAIT (altro lato ha iniziato chiusura), LAST ACK, CLOSING.

108. **Qual è il percorso normale degli stati per un client? E per un server?**
     - Client: CLOSED → SYN SENT → ESTABLISHED → FIN WAIT 1/2 → TIME WAIT → CLOSED. Server: CLOSED → LISTEN → SYN RCVD → ESTABLISHED → CLOSE WAIT → LAST ACK → CLOSED.

109. **In quale stato un server attende connessioni in ingresso?**
     - LISTEN.

110. **In quale stato avviene il normale trasferimento dei dati?**
     - ESTABLISHED.

#### Sottosezione 7.4.6 – La Finestra Scorrevole

111. **Cosa sono i delayed acknowledgement (acknowledgement ritardato)? Perché sono utili?**
     - Ritardare gli acknowledgement e gli aggiornamenti della finestra (tipicamente 500 ms) per aggregarli con dati in uscita. Riduce il numero di pacchetti e l'utilizzo della banda.

112. **In cosa consiste l'algoritmo di Nagle? Quale problema risolve?**
     - Inviare il primo gruppo di dati piccoli, bufferizzare i successivi fino all'arrivo dell'acknowledgement. Riduce lo spreco di banda causato da molti pacchetti piccoli.

113. **Cos'è la silly window syndrome (sindrome della finestra stupida)? Come si manifesta?**
     - Quando il ricevente legge 1 byte alla volta, inviando aggiornamenti della finestra per 1 byte, e il mittente invia segmenti da 1 byte. Causa inefficienza.

114. **Qual è la soluzione di Clark alla silly window syndrome?**
     - Il ricevente invia aggiornamenti della finestra solo quando può gestire la dimensione massima del segmento o quando il buffer è vuoto per metà.

#### Sottosezione 7.4.7 – Controllo della Congestione

115. **Come interpreta TCP la perdita di pacchetti?**
     - Come segnale binario di congestione.

116. **Cos'è la finestra di congestione (congestion window)? Come si relaziona con la finestra di controllo del flusso?**
     - È il numero di byte che il mittente può avere sulla rete. La finestra effettiva è la minima tra finestra di congestione e finestra di controllo del flusso.

117. **In cosa consiste l'algoritmo di slow start? Perché si chiama così se ha crescita esponenziale?**
     - La finestra di congestione inizia a 1 segmento e raddoppia a ogni RTT. Si chiama "lenta" rispetto all'algoritmo precedente che inviava un'intera finestra subito.

118. **Cos'è la slow start threshold? Quando viene aggiornata?**
     - Soglia che limita lo slow start. Quando si verifica una perdita (timeout), la soglia viene impostata a metà della finestra di congestione corrente.

119. **Cosa succede quando viene rilevata una perdita di pacchetto (timeout)?**
     - La slow start threshold viene impostata a metà della finestra corrente, la finestra di congestione viene reimpostata a 1 segmento, e ricomincia lo slow start.

120. **In cosa consiste la fase di incremento additivo (additive increase)?**
     - Dopo aver superato la soglia, la finestra di congestione viene aumentata di 1 segmento per ogni RTT (crescita lineare).

121. **Cosa sono TCP Tahoe e TCP Reno?**
     - Versioni di TCP con controllo della congestione. Tahoe: slow start + incremento additivo. Reno: aggiunge fast recovery e fast retransmit.

122. **Cos'è il fast recovery? Quando viene utilizzato?**
     - Modalità temporanea che mantiene l'ack clock in funzione dopo una fast retransmit, evitando lo slow start. La finestra viene ridotta a metà.

123. **Quale profilo segue la finestra di congestione di TCP con AIMD?**
     - Profilo a "dente di sega": incrementi additivi (di 1 segmento per RTT) e decrementi moltiplicativi (di metà in un RTT dopo una perdita).

124. **Cosa sono i SACK (Selective Acknowledgement)? Quale vantaggio offrono?**
     - Elencano fino a tre intervalli di byte ricevuti. Permettono al mittente di ritrasmettere solo i pacchetti realmente persi, non l'intera finestra.

#### Sottosezione 7.4.8 – Gestione dei Timer

125. **Qual è il timer più importante in TCP? A cosa serve?**
     - Il timer di ritrasmissione (RTO – Retransmission Timeout). Quando scade prima dell'ACK, il segmento viene ritrasmesso.

126. **Cos'è il RTO (Retransmission Timeout)?**
     - L'intervallo di timeout dopo il quale un segmento non riconosciuto viene ritrasmesso.

127. **Come viene calcolato dinamicamente il RTO? Cosa sono SRTT e la formula EWMA?**
     - SRTT = α·SRTT + (1-α)·R (con α=7/8). È una media mobile a peso esponenziale (EWMA) che stima il round-trip time corrente.

128. **Perché il timeout in TCP deve essere adattivo e non fisso?**
     - Perché le prestazioni di rete variano nel tempo (congestione, percorsi diversi, carico). Un timeout fisso sarebbe troppo breve (ritrasmissioni inutili) o troppo lungo (scarsa reattività).

#### Sottosezione 7.4.9 – WebRTC

129. **Cosa significa l'acronimo WebRTC?**
     - Web Real-Time Communication.

130. **Quale protocollo di trasporto utilizza WebRTC per la comunicazione dati? Perché?**
     - TCP (in aggiunta a UDP per media). TCP garantisce affidabilità e ordine corretto, essenziale per applicazioni real-time.

131. **Quali sono i principali pregi di WebRTC?**
     - Bassa latenza, architettura P2P (riduce latenza e migliora qualità), compatibilità con browser moderni.

132. **Quali sono i principali difetti di WebRTC?**
     - Complessità di configurazione, limitazioni di sicurezza (vulnerabilità in implementazioni non corrette), requisiti di rete (connessione stabile e ad alta velocità).

### Sezione 7.5 e 7.6 – LAB (Socket e Sistemi Client-Server)

133. **A cosa serve una socket nella programmazione di rete?**
     - È un punto terminale di comunicazione che permette a un processo di inviare e ricevere dati attraverso la rete.

134. **Quali sono le fasi tipiche di implementazione di un sistema client-server con socket?**
     - Server: socket(), bind(), listen(), accept(), recv()/send(), close(). Client: socket(), connect(), send()/recv(), close().

### Domande trasversali e di confronto

135. **Confronta UDP e TCP in termini di: orientamento alla connessione, affidabilità, controllo di flusso, controllo di congestione, dimensione intestazione, campi principali.**

| Caratteristica | UDP | TCP |
|----------------|-----|-----|
| Orientamento connessione | No (connectionless) | Sì (connection-oriented) |
| Affidabilità | Nessuna (best effort) | Affidabile (ACK, ritrasmissioni) |
| Controllo di flusso | No | Sì (finestra scorrevole) |
| Controllo congestione | No | Sì (AIMD, slow start) |
| Dimensione intestazione | 8 byte | 20-60 byte |
| Campi principali | Source port, Dest port, Length, Checksum | Source/dest port, Seq/ACK num, Flags, Window, Checksum |

136. **Quali sono le differenze tra il controllo degli errori nel livello data link e nel livello trasporto?**
     - Data link: protegge un singolo collegamento (hop-by-hop). Trasporto: protegge l'intero percorso (end-to-end). Il checksum del trasporto è essenziale per la correttezza; quello del data link è utile per le prestazioni.

137. **Confronta slow start e incremento additivo in termini di crescita della finestra di congestione.**
     - Slow start: crescita esponenziale (raddoppia ogni RTT). Incremento additivo: crescita lineare (aumenta di 1 segmento per RTT).

138. **Spiega la differenza tra il three-way handshake per stabilire una connessione e il three-way handshake per rilasciarla.**
     - Setup: SYN, SYN+ACK, ACK (stabilisce numeri di sequenza). Rilascio: FIN, ACK+FIN, ACK (chiusura di ciascuna direzione). Il rilascio può richiedere 4 segmenti (o 3 se combinati).

139. **Qual è la differenza tra multiplexing e inverse multiplexing nel livello di trasporto?**
     - Multiplexing: più connessioni di trasporto condividono lo stesso NSAP (stesso IP). Inverse multiplexing: una connessione di trasporto distribuisce il traffico su più percorsi di rete.

140. **Confronta RTP e RTCP in termini di funzionalità e scopo.**
     - RTP: trasporta dati multimediali (audio/video) con timestamp e sequenze, senza ritrasmissioni. RTCP: trasporta informazioni di controllo (feedback su congestione, jitter, sincronizzazione tra flussi, identificazione delle sorgenti).


# Livello Applicazione – Risposte Dettagliate

## Sezione 8.1 – Posta Elettronica: MIME, SMTP, IMAP, POP3

### 1. Quali sono i due sottosistemi che compongono l'architettura di un sistema di posta elettronica?

I due sottosistemi sono:
- **User Agent (agenti utente)** : programmi che consentono alle persone di leggere, comporre, rispondere, visualizzare e organizzare i messaggi di posta.
- **Message Transfer Agent (agenti di trasferimento dei messaggi, MTA)** : processi di sistema (mail server) che spostano i messaggi dalla sorgente alla destinazione.

### 2. Cosa sono gli user agent (agenti utente)? Quali funzioni svolgono?

Sono programmi che forniscono un'interfaccia (grafica, testuale o basata su comandi) per interagire con il sistema di posta elettronica. Le funzioni includono: comporre, rispondere, visualizzare, organizzare i messaggi (filtrarli, cercarli, scartarli). Alcuni user agent offrono funzioni avanzate come la compilazione automatica di risposte o il filtraggio dello spam.

### 3. Cosa sono i message transfer agent (MTA)? Dove vengono eseguiti e a cosa servono?

Sono tipicamente processi di sistema eseguiti come servizi sui mail server, pensati per essere sempre disponibili. Il loro compito è spostare automaticamente le e-mail attraverso il sistema dalla sorgente al destinatario facendo uso di **SMTP (Simple Mail Transfer Protocol)** .

### 4. Quale protocollo utilizzano i message transfer agent per spostare le e-mail?

Utilizzano **SMTP (Simple Mail Transfer Protocol)** , specificato nell'RFC 5321 (originariamente RFC 821). SMTP invia le e-mail con un approccio orientato alla connessione e notifica lo stato della consegna e gli errori.

### 5. Cosa sono le mailbox (caselle di posta)? Chi le mantiene?

Sono caselle che memorizzano le e-mail ricevute dall'utente. Sono mantenute dai **mail server** (MTA). Gli user agent presentano agli utenti una visione dei contenuti delle loro mailbox, inviando comandi per manipolarle (ispezionare contenuti, cancellare messaggi, etc.).

### 6. Qual è la differenza tra involucro (envelope) e contenuto di un messaggio di posta elettronica?

- **Involucro**: contiene tutte le informazioni necessarie per il trasporto (indirizzo di destinazione, priorità, livello di protezione). I message transfer agent utilizzano l'involucro per il routing.
- **Contenuto**: consiste di intestazione (informazioni di controllo per gli user agent) e corpo (dedicato al destinatario umano).

### 7. Quali sono le due parti che compongono il messaggio all'interno dell'involucro?

L'intestazione (header) e il corpo (body). L'intestazione contiene informazioni di controllo (es. To, From, Subject), mentre il corpo è il contenuto effettivo del messaggio destinato all'utente.

#### Sottosezione 8.1.1 – Formato dei Messaggi

### 8. Quali sono le tre componenti principali di un messaggio di posta elettronica secondo l'RFC 5321?

Secondo l'RFC 5321 (che descrive SMTP), le tre componenti principali sono:
1. **Involucro** (envelope)
2. **Campi di intestazione** (header fields)
3. **Corpo del messaggio** (body)

### 9. A cosa serve il campo "To" nell'intestazione di un messaggio?

Indica gli indirizzi DNS dei destinatari **principali** del messaggio (destinatari diretti).

### 10. Qual è la differenza tra i campi "Cc" e "Bcc"?

- **Cc (Carbon Copy)** : elenca gli indirizzi dei destinatari **secondari** (copie per conoscenza). Questi indirizzi sono visibili a tutti i destinatari.
- **Bcc (Blind Carbon Copy)** : simile a Cc, ma **nascosto** ai destinatari principali e secondari. I destinatari elencati in Bcc non sono visibili agli altri.

### 11. Qual è la differenza tra i campi "From" e "Sender"?

- **From**: identifica chi ha **scritto** il messaggio (l'autore).
- **Sender**: indica chi ha **effettivamente inviato** il messaggio (può essere diverso dal mittente, ad esempio un segretario che invia per conto del capo).

### 12. A cosa serve il campo "Received" aggiunto da ogni MTA?

È un campo aggiunto da ogni MTA (mail server) lungo il percorso del messaggio. Contiene informazioni sulla ricezione del messaggio (timestamp, identità del server, etc.). Serve per il tracciamento del percorso e per il debugging.

### 13. Cosa indica il campo "Return-Path"?

Fornisce un modo per **ricontattare il mittente**, tipicamente utilizzato per i messaggi di errore (es. notifiche di mancata consegna). Indica l'indirizzo a cui inviare le notifiche di bounce.

### 14. A cosa serve il campo "Message-Id"?

È un numero univoco (generato dal sistema) per identificare il messaggio in modo univoco a livello globale. Serve a prevenire consegne duplicate e a tracciare i messaggi.

### 15. A cosa serve il campo "Reply-To"?

Specifica a chi **rispondere** (indirizzo di risposta). È utile quando il mittente e l'inviatore sono diversi: ad esempio, un messaggio inviato da un segretario (Sender) ma si vuole che le risposte vadano al capo (Reply-To).

### 16. Cosa sono le intestazioni personalizzate che iniziano con "X-"?

Sono intestazioni create dagli utenti per aggiungere informazioni specifiche o personalizzate non previste dagli standard. L'RFC 5321 riconosce la possibilità di crearle. Esempi: X-Priority, X-Mailer, X-Spam-Status.

##### Sottosezione 8.1.1.1 – RFC 5322 (ex RFC 822)

### 17. Quale RFC descrive il formato originale dei messaggi di posta elettronica ASCII?

L'**RFC 822** (e la sua ultima revisione **RFC 5322**). Descrive la struttura dei messaggi di posta elettronica con intestazioni in formato ASCII.

##### Sottosezione 8.1.1.2 – MIME

### 18. Perché è stato sviluppato MIME (Multipurpose Internet Mail Extension)?

Per **superare le limitazioni** dei messaggi di posta elettronica basati esclusivamente su testo ASCII. MIME consente l'invio di contenuti più complessi, come lingue con accenti, alfabeti non latini (cirillico, arabo, etc.), ideogrammi (cinese, giapponese) e file non testuali come immagini, audio, video e documenti binari.

### 19. Quali limitazioni dei messaggi ASCII supera MIME?

- Testo in lingue che non usano l'alfabeto latino (accenti, caratteri speciali)
- Alfabeti non latini (cirillico, arabo, greco, etc.)
- Ideogrammi (cinese, giapponese, coreano)
- File binari (immagini, audio, video, documenti eseguibili, PDF, etc.)
- Messaggi con più parti (allegati)

### 20. Quali sono le cinque nuove intestazioni introdotte da MIME?

1. **MIME-Version**: indica la versione MIME utilizzata
2. **Content-Description**: descrive il contenuto del messaggio (aiuta il destinatario a decidere se leggerlo)
3. **Content-Id**: identifica univocamente il contenuto (simile a Message-Id)
4. **Content-Transfer-Encoding**: specifica la codifica utilizzata per trasmettere il contenuto via SMTP
5. **Content-Type**: indica la natura del corpo del messaggio (tipo di dati)

### 21. A cosa serve il campo "Content-Type" in MIME?

Indica la **natura del corpo del messaggio** e il tipo di dati, come testo, immagini, audio, video, applicazioni, etc. Viene specificato come "tipo/sottotipo", ad esempio text/plain, image/jpeg, application/pdf.

### 22. A cosa serve il campo "Content-Transfer-Encoding"? Quali schemi di codifica esistono?

Specifica la **codifica utilizzata per trasmettere il contenuto tramite SMTP** (che originariamente era progettato solo per ASCII). I cinque schemi di codifica comuni sono:
- **ASCII** (7 bit)
- **8 bit**
- **Binario** (binary)
- **Base64** (per dati binari)
- **Quoted-printable** (per testi con caratteri speciali)

### 23. Elenca almeno cinque tipi MIME con relativi sottotipi (es. text/plain).

- **text/plain** – testo semplice
- **text/html** – pagina web HTML
- **image/jpeg** – immagine JPEG
- **image/png** – immagine PNG
- **audio/mpeg** – audio MP3
- **video/mp4** – video MP4
- **application/pdf** – documento PDF
- **application/zip** – archivio ZIP
- **application/json** – dati JSON
- **multipart/mixed** – messaggio con allegati

### 24. Cosa permettono di fare i tipi multipart (multipart/mixed, multipart/alternative, multipart/related)?

- **multipart/mixed**: permette di comporre messaggi con allegati (parti separate)
- **multipart/alternative**: permette di fornire lo stesso contenuto in formati alternativi (es. text/plain e text/html) – il client sceglie il formato più adatto
- **multipart/related**: permette di includere risorse correlate (es. immagini inline in un messaggio HTML)

### 25. Quali sfide legate alla sicurezza presenta l'uso di MIME?

Quando si eseguono o interpretano contenuti ricevuti (es. allegati eseguibili, script, macro) ci sono **sfide legate alla sicurezza**. Un allegato malevolo potrebbe essere eseguito automaticamente dall'user agent se non gestito correttamente, causando infezioni o violazioni della sicurezza. È fondamentale validare e sanitizzare i contenuti ricevuti.

#### Sottosezione 8.1.2 – Consegna Finale

### 26. Perché SMTP non è adatto per la consegna finale della posta al client? (cos'è un protocollo push?)

SMTP è un protocollo **push** (di spinta): prende un messaggio e si connette al server remoto per trasferirlo. Non è adatto per la consegna finale perché:
- La casella di posta deve continuare a essere memorizzata sul mail server (non scaricata e cancellata)
- Lo user agent potrebbe non essere connesso a Internet nel momento in cui SMTP tenta di inoltrare i messaggi
- Serve un protocollo **pull** (di prelievo) che permetta al client di recuperare i messaggi quando è connesso

### 27. Quali sono i protocolli utilizzati per la consegna finale della posta?

I principali protocolli sono **IMAP** (Internet Message Access Protocol) e **POP3** (Post Office Protocol versione 3), oltre a protocolli proprietari (es. Microsoft Exchange) e Webmail (che usa HTTP/HTTPS).

##### Sottosezione 8.1.2.1 – IMAP

### 28. Cosa significa l'acronimo IMAP? Su quale porta ascolta il server IMAP?

IMAP significa **Internet Message Access Protocol** (protocollo di accesso ai messaggi Internet). La sua versione più recente è definita nell'RFC 3501. Il server IMAP ascolta sulla **porta 143**.

### 29. Quali operazioni può eseguire un client IMAP dopo l'autenticazione?

Può eseguire numerose operazioni, tra cui:
- Elencare le cartelle (mailbox)
- Visualizzare i messaggi
- Etichettare i messaggi
- Spostare i messaggi tra le cartelle
- Cercare messaggi per vari criteri
- Gestire le flag (letto, risposto, cancellato, etc.)

### 30. Quali sono i principali miglioramenti di IMAP rispetto a POP3?

- **IMAP mantiene i messaggi sul server**, mentre POP3 di solito li scarica sul client (e li cancella dal server)
- IMAP permette la **sincronizzazione tra diversi dispositivi** (stato dei messaggi coerente su PC, telefono, tablet)
- IMAP permette di **gestire le cartelle** sul server
- Con POP3, se il client si guasta, i messaggi possono essere persi
- IMAP supporta accesso **parziale** ai messaggi (si possono scaricare solo gli header prima di decidere)

### 31. Quale RFC definisce POP3?

POP3 è definito nell'**RFC 1939**.

##### Sottosezione 8.1.2.2 – Webmail

### 32. Come funziona il Webmail? Quale protocollo usa il browser per comunicare con il server?

Il provider (es. Gmail, Hotmail) gestisce un server di posta che accetta messaggi via SMTP (porta 25). Lo user agent è un'interfaccia web accessibile tramite **browser**. L'utente accede alla pagina web del servizio, inserisce le credenziali (inviate al server via HTTP/HTTPS per la convalida). Se autenticato, il server recupera la casella di posta e genera una pagina web che viene inviata al browser (via **HTTP** o **HTTPS**). Per inviare un nuovo messaggio, l'utente compila un modulo web e invia i dati al server sempre con HTTP.

### 33. Quali sono i principali provider di Webmail menzionati nel testo?

- **Google Gmail**
- **Microsoft Hotmail**
- **Yahoo! Mail**

### 34. Come avviene l'invio di un nuovo messaggio in un sistema di Webmail?

L'utente compila un modulo web (con destinatario, oggetto, corpo del messaggio, eventuali allegati). I dati vengono inviati al server utilizzando il normale protocollo **HTTP** (o HTTPS per la sicurezza). Il server Web si occupa quindi di inviare il messaggio attraverso il sistema di consegna tradizionale, utilizzando i protocolli standard della posta (SMTP verso i server di destinazione).

---

## Sezione 8.2 – Protocolli di Trasporto File

### 35. Quali sono i due protocolli di trasporto file descritti nel capitolo?

**FTP (File Transfer Protocol)** e **TFTP (Trivial File Transfer Protocol)** . Differiscono significativamente nelle funzionalità e nel modo in cui operano.

#### Sottosezione 8.2.1 – FTP

### 36. Cosa significa l'acronimo FTP? A cosa serve?

FTP significa **File Transfer Protocol** (protocollo di trasferimento file). È stato progettato per consentire agli utenti di trasferire file in modo efficiente e affidabile da un host all'altro attraverso Internet, offrendo la possibilità di replicare dati per backup su larga scala.

### 37. Quali due tipi di accesso offre FTP?

- **Accesso autenticato**: richiede una coppia di account/password per l'autenticazione dell'utente
- **Accesso anonimo**: di solito senza restrizioni (si accede con "anonymous" come username e email come password, tipico per download pubblici)

### 38. Quale protocollo di trasporto utilizza FTP?

FTP stabilisce una connessione **TCP** (orientata alla connessione) con il server FTP remoto. Nome utente e password vengono inviati come comandi FTP.

### 39. Perché FTP è definito un protocollo "out-of-band"? Quante connessioni TCP parallele utilizza?

È un protocollo **out-of-band** (fuori banda) perché utilizza **due connessioni TCP parallele**:
- Una per il **controllo** (persistente): invia comandi (USER, PASS, RETR, STOR, etc.) e riceve risposte
- Una per i **dati** (non persistente): trasferisce effettivamente i file (si apre e chiude per ogni trasferimento)

### 40. Qual è la differenza tra la connessione di controllo e la connessione dati in FTP?

- **Connessione di controllo**: persistente, rimane aperta per tutta la sessione. Utilizza tipicamente la porta 21. Trasporta comandi e risposte (testuali).
- **Connessione dati**: non persistente, viene aperta per ogni trasferimento file (o per il listing delle directory). Utilizza tipicamente la porta 20 in modalità attiva, o una porta casuale in modalità passiva.

### 41. Qual è la differenza tra modalità attiva e modalità passiva in FTP?

- **Modalità attiva**: la connessione di controllo è avviata dal client; la **connessione dati è avviata dal server** verso il client. Il server si connette a una porta casuale del client (specificata nel comando PORT). Può causare problemi con firewall client.
- **Modalità passiva**: **entrambe le connessioni** (controllo e dati) sono **avviate dal client**. Il server comunica al client su quale porta ascoltare (comando PASV), e il client si connette a quella porta. È preferita quando il client è dietro un firewall.

#### Sottosezione 8.2.2 – TFTP

### 42. Cosa significa l'acronimo TFTP?

**Trivial File Transfer Protocol** (protocollo di trasferimento file banale/triviale).

### 43. Per quali scopi è stato progettato TFTP?

Per scopi specifici in cui è necessario trasferire file in modo **rapido e semplice** senza richiedere tutte le funzionalità avanzate offerte da FTP. È ideale per dispositivi con risorse limitate o firmware incorporato.

### 44. Quale protocollo di trasporto utilizza tipicamente TFTP?

Sebbene sia progettato per l'uso con **UDP** (User Datagram Protocol), potrebbe potenzialmente essere utilizzato con altri protocolli di trasporto. L'uso di UDP lo rende più leggero ma senza le garanzie di affidabilità di TCP (l'affidabilità è implementata a livello applicativo).

### 45. Perché TFTP è adatto per dispositivi con risorse limitate o firmware incorporato?

Perché è progettato per essere **facile da implementare** e di **piccole dimensioni** (codice ridotto). Può essere facilmente incluso nei firmware dei dispositivi (es. router, switch, stampanti di rete, terminali boot diskless) che hanno poca memoria e poca potenza di calcolo.

### 46. Quali sono i cinque tipi di messaggi del protocollo TFTP?

1. **Richiesta di lettura (Read Request, RRQ)** : inviata dal client per richiedere il trasferimento di un file dal server
2. **Richiesta di scrittura (Write Request, WRQ)** : inviata dal client per inviare un file al server
3. **Dati (DATA)** : inviati dal server al client (o viceversa per scrittura), contengono blocchi di dati del file (tipicamente 512 byte)
4. **Acknowledgment (ACK)** : inviato dal client al server per confermare il ricevimento dei dati
5. **Errore (ERROR)** : inviato dal server (o dal client) al client in caso di errore durante il trasferimento

### 47. TFTP supporta la modalità attiva e passiva? Come funzionano?

Sì, TFTP supporta entrambe le modalità:
- **Modalità attiva**: la connessione di controllo è inizializzata dal client (il client invia RRQ o WRQ a una porta nota del server, tipicamente 69). Il server risponde da una porta casuale, e il trasferimento procede con pacchetti DATA e ACK su quella coppia di porte.
- **Modalità passiva**: **entrambe le connessioni** (controllo e dati) sono inizializzate dal client (meno comune, concettualmente simile a FTP passivo).

---

## Sezione 8.3 – DNS – Domain Name System

### 48. Perché il vecchio sistema basato sul file hosts non poteva sostenersi con l'espansione di Internet?

Il file hosts era distribuito a tutti gli host (in un ambiente centralizzato). Con l'espansione di Internet (meno di 100 host iniziali → milioni di host), questo modello non poteva sostenersi perché:
- Mantenere un file hosts aggiornato su tutti gli host sarebbe stato **impossibile** (cambiamenti continui)
- Il file sarebbe diventato **enorme** e ingestibile
- Non c'era un meccanismo automatico per distribuire gli aggiornamenti
- Non c'era **scalabilità**

### 49. Cosa significa l'acronimo DNS? A cosa serve?

DNS significa **Domain Name System** (sistema dei nomi di dominio). È un sistema per introdurre nomi in formato ASCII per identificare gli host e separare così i nomi dagli indirizzi IP. Serve a tradurre i nomi di dominio (es. www.example.com) in indirizzi IP (es. 93.184.216.34) e viceversa.

### 50. Quale RFC definisce il DNS?

DNS è definito nell'**RFC 1035**.

### 51. Com'è strutturato lo spazio dei nomi DNS?

È strutturato **gerarchicamente**, simile a un indirizzo postale (o a una struttura ad albero). Ha una **directory radice** (root) rappresentata da un punto (.) seguita da due gerarchie di dominio di primo livello: **organizzativa** (es. .com, .org, .edu, .gov, .net) e **geografica** (es. .it, .fr, .uk, .de, .jp).

### 52. Qual è il simbolo che rappresenta la directory radice del DNS?

Il punto ( **.** ). È la radice dell'albero DNS, anche se nella scrittura comune viene spesso omesso (es. www.example.com. con il punto finale è il nome completo, FQDN – Fully Qualified Domain Name).

### 53. Quali sono le due gerarchie di dominio di primo livello?

- **Dominio organizzativo (gTLD – generic Top Level Domain)** : .com, .org, .edu, .gov, .net, .mil, .int
- **Dominio geografico (ccTLD – country code Top Level Domain)** : .it (Italia), .fr (Francia), .uk (Regno Unito), .de (Germania), .jp (Giappone), etc.

### 54. Cos'è un resolver DNS? Fai un esempio (come gethostbyname()).

Un **resolver** è una procedura di libreria (tipicamente nel sistema operativo) che un'applicazione chiama per risolvere un nome di dominio in un indirizzo IP. L'applicazione richiama il resolver, che si occupa di interrogare i server DNS. L'esempio fornito è **gethostbyname()** (chiamata di sistema in C per la risoluzione DNS). Con l'indirizzo IP ottenuto, l'applicazione può stabilire una connessione TCP o inviare pacchetti UDP.

### 55. Descrivi i passaggi del processo di risoluzione dei nomi DNS.

1. Un server DNS è configurato con una cache iniziale (hints) contenente gli indirizzi noti dei server di nome radice
2. Quando un client effettua una **query ricorsiva** a quel server, questo elabora la richiesta usando la cache (se già possiede la risposta) o esegue i passaggi successivi per conto del client
3. Viene effettuata una query a uno dei **server radice** (root server) per trovare il server autoritativo per il dominio di primo livello richiesto (es. .com)
4. Viene ricevuta una risposta che indica il nameserver per quella risorsa (es. nameserver per example.com)
5. Il server "**attraversa l'albero**" da destra a sinistra, passando da nameserver a nameserver (es. root → .com → example.com → www.example.com), fino al passo finale che restituisce l'indirizzo IP dell'host
6. L'indirizzo IP della risorsa viene quindi restituito al client

### 56. Perché le query DNS usano tipicamente UDP? Quando passano a TCP?

Le query DNS usano tipicamente **UDP** (User Datagram Protocol) perché sono **leggere** e devono avvenire **rapidamente** senza l'overhead di stabilire una connessione TCP. Le query standard hanno dimensioni piccole (fino a 512 byte).

Passano a **TCP** quando:
- La risposta supera i **512 byte** (ad esempio, risposte con molti record o con DNSSEC)
- Si effettuano **trasferimenti di zona** (zone transfer) tra server DNS

### 57. A cosa serve il campo Identifier nel protocollo DNS?

Il campo **Identifier** è un campo ID a 16 bit che **corrisponde le richieste e le risposte**. Il client imposta un identificatore univoco nella query, e il server restituisce lo stesso identificatore nella risposta. Permette al client di abbinare ogni risposta alla query corrispondente (essenziale quando ci sono più query in sospeso concorrenti su UDP).

### 58. Cosa indica il flag QR (Query/Response)?

È un campo a 1 bit che designa se il pacchetto è una **richiesta (Query)** o una **risposta (Response)** . QR=0 per una query, QR=1 per una risposta.

### 59. Cosa indica il flag AA (Authoritative Answer)?

È un campo a 1 bit che indica una **risposta autorevole**. Il bit è impostato su 1 se il server che ha fornito la risposta è **autorevole** per il dominio in questione (cioè ha l'autorità sui dati). Se impostato a 0, è una **risposta non autorevole** (proveniente da una cache).

### 60. Cosa indica il flag TC (Truncation)?

Campo a 1 bit per la **troncatura** (truncation). Indica che la risposta è stata **troncata** perché era più lunga di 512 byte ed è stata inviata tramite UDP. Di solito, il client deve **riprovare con TCP** (che non ha limiti di lunghezza) per ottenere la risposta completa.

### 61. Cosa significa il flag RD (Recursion Desired)?

**Recursion Desired** (ricorsione desiderata) è un campo a 1 bit. Indica che il client sta chiedendo al server di **attraversare l'albero** (eseguire la risoluzione completa) per conto del client e di restituire semplicemente la risposta, anziché indicare dove cercare successivamente (risposta iterativa).

### 62. Cosa significa il flag RA (Recursion Available)?

**Recursion Available** (ricorsione disponibile) è un campo a 1 bit in cui un server DNS indica a un client se **supporta o meno la ricorsione**. Se RA=1, il server è disposto a fare query ricorsive; se RA=0, il client deve fare query iterative.

### 63. Quali sono i possibili valori di RCode (Response Code) e cosa indicano?

RCode è un campo a 4 bit. I valori significativi sono:
- **0**: nessun errore (No error)
- **1**: errore di formato (Format error)
- **2**: errore del server (Server failure)
- **3**: errore di nome (Name error) – il dominio non esiste (NXDOMAIN)
- **4**: non implementato (Not implemented)
- **5**: rifiutato (Refused)
- **6**: il nome esiste ma non dovrebbe
- **7**: esiste un record di risorsa che non dovrebbe
- **8**: un record di risorsa che dovrebbe esistere non esiste
- **9**: la risposta non è autorevole
- **10**: il nome nella risposta non è all'interno della zona specificata

### 64. Cosa sono QDCount, ANCount, NSCount e ARCount?

Sono campi che indicano il **numero di record** in ciascuna sezione del messaggio DNS:
- **QDCount (Question count)** : quante domande nella sezione delle domande
- **ANCount (Answer count)** : quante risposte nella sezione delle risposte
- **NSCount (Authority count)** : quanti record di risorse nella sezione di autorità (nameserver autoritativi)
- **ARCount (Additional count)** : quanti record di risorse nella sezione aggiuntiva (es. indirizzi A/AAAA dei nameserver)

### 65. Quali sono gli elementi che compongono una query DNS (qname, qtype, qclass)?

- **qname**: il nome di dominio da risolvere (es. www.ripe.net)
- **qtype**: il tipo di query (es. A, AAAA, MX, CNAME, PTR, SRV, TXT, NS)
- **qclass**: la classe della query (generalmente **IN** per Internet; CH e HS sono poco utilizzati oggi)

### 66. Cosa sono i Resource Records (RR)? Quali informazioni contengono?

I **Resource Records** (record di risorse) sono associati a ogni dominio e contengono informazioni specifiche. Ogni record contiene:
- **Name**: il nome di dominio a cui il record appartiene
- **TTL** (Time To Live): tempo di vita (quanto tempo il record può essere memorizzato in cache)
- **Class**: generalmente IN (Internet)
- **Type**: tipo di record (es. A, MX, NS, CNAME, etc.)
- **Value**: il valore effettivo del record (indirizzo IP, nome, etc.)

### 67. Spiega i seguenti tipi di record DNS: A, AAAA, MX, CNAME, PTR, NS, SOA, TXT, HINFO, SRV.

- **A** (Address): contiene l'indirizzo IPv4 di un host
- **AAAA**: contiene l'indirizzo IPv6 di un host
- **MX** (Mail eXchange): specifica il nome dell'host configurato per accettare la posta per quel dominio (con priorità)
- **CNAME** (Canonical Name): permette di creare alias (un nome alternativo per un host)
- **PTR** (Pointer): utilizzato per le ricerche inverse (da indirizzo IP a nome)
- **NS** (Name Server): specifica il server di nomi autoritativo per un dominio
- **SOA** (Start of Authority): fornisce le informazioni principali sul server di nomi della zona (contatto amministrativo, seriale, refresh, retry, expire, TTL minimo)
- **TXT** (Text): testo libero, utilizzato facoltativamente per auto-identificazione del dominio, verifiche (SPF, DKIM, DMARC)
- **HINFO** (Host Information): utilizzato per conoscere il tipo di macchina (CPU) e il sistema operativo
- **SRV** (Service): specifica un servizio (porta, protocollo, priorità, peso) per un dominio

### 68. Cosa indica il campo TTL (Time To Live) in un record DNS?

Il **TTL** (Time To Live) indica il tempo di vita del record (in secondi). Specifica per quanto tempo il record può essere **memorizzato nella cache** da resolver e server DNS prima di essere considerato obsoleto e dover essere rinfrescato con una nuova query. TTL più alti riduono il carico sui server DNS ma possono causare tempi di propagazione più lunghi in caso di cambiamenti.

#### Sottosezione 8.3.2 – Server DNS

### 69. Come viene diviso lo spazio dei nomi DNS tra i server? Cosa sono le zone?

Lo spazio dei nomi DNS viene diviso in **zone non sovrapposte**. Una **zona** è una porzione contigua dello spazio dei nomi DNS (un sottoalbero) che è gestita da uno specifico server DNS autoritativo. Un server può essere responsabile di una o più zone. La zona contiene i record di risorse per i domini che gli sono delegati.

### 70. Qual è la differenza tra un server DNS autorevole e un server cache?

- **Server autorevole (authoritative server)** : contiene i record nel suo file di zona (dati originali) e risponde solo alle query per i dati sotto la sua autorità. Se non può rispondere, indica l'autorità (delega) ma non effettua query in modo ricorsivo.
- **Server cache (caching resolver)** : non ha nomi autoritativi propri; esegue solo query ricorsive e caching. Salva le risposte per future richieste entro un certo periodo di tempo (TTL). Serve ad accelerare le query DNS per la rete.

### 71. Cosa sono le query ricorsive in DNS?

Le **query ricorsive** sono quelle in cui il client chiede al server di **svolgere tutto il lavoro per lui**. Il client invia nella sua query il flag **RD (RECURSION DESIRED)** . Il server DNS (se supporta la ricorsione e se il flag RA è 1) si assume l'onere di contattare tutti i server DNS necessari (root, TLD, authoritative) fino a ottenere la risposta definitiva, che restituisce al client. Il client riceve direttamente la risposta, senza dover fare altre query.

### 72. Cosa sono le query iterative in IPv6? (in realtà "iterative" in DNS)

Le **query iterative** sono l'opposto delle query ricorsive. Quando vengono utilizzate, il server **non cerca la risposta per il client** (a meno che non sia la prima domanda e risposta), ma piuttosto **indica al client dove guardare successivamente**. Quindi, se il client chiede per chat.google.com, il server gli indica di controllare con i server .com e considera il suo lavoro completato. Il client deve quindi ripetere la query al server successivo (iterazione).

### 73. Qual è la differenza tra risposte autorevoli e non autorevoli?

- **Risposte autorevoli**: provengono direttamente da un server dei nomi che ha **autorità** sul record in questione (cioè contiene i dati originali nel suo file di zona). Il flag AA è impostato a 1.
- **Risposte non autorevoli**: provengono da un'altra fonte, ad esempio da un server **cache** che ha memorizzato la risposta da una query precedente, non dalla fonte originale. Il flag AA è impostato a 0.

### 74. Cosa sono le query inverse (reverse DNS)? A cosa servono?

Le **query inverse** semplicemente **invertono il senso** delle ricerche DNS: vanno dall'indirizzo IP al nome (invece che dal nome all'indirizzo IP). Le query in avanti (forward) sono le normali query di nome-a-IP. Le query inverse utilizzano il dominio speciale **in-addr.arpa** per IPv4 (es. 65.43.32.192.in-addr.arpa per l'IP 192.32.43.65) e **ip6.arpa** per IPv6. Servono per applicazioni come logging di sicurezza, verifica di identità, anti-spam, etc.

### 75. Cosa sono i trasferimenti di zona (zone transfer)? Che differenza c'è tra AXFR e IXFR?

I **trasferimenti di zona** sono il mezzo attraverso il quale i **server slave** (secondari) recuperano i record dai **server master** (primari) per scopi di backup e ridondanza.

- **AXFR (Full Zone Transfer)** : trasferimento completo dell'intera zona (tutti i record). Viene usato per la sincronizzazione iniziale o quando ci sono molti cambiamenti.
- **IXFR (Incremental Zone Transfer)** : trasferimento incrementale (solo le modifiche). Più efficiente perché trasferisce solo i record cambiati, non l'intera zona.

### 76. Perché i trasferimenti di zona usano TCP invece di UDP?

I trasferimenti di zona avvengono tramite **TCP** perché i dati trasferiti sono solitamente **consistenti** (grandi volumi di record) e molto probabilmente **superiori a 512 byte**. UDP ha un limite di 512 byte per le risposte DNS standard; i trasferimenti di zona superano quasi sempre questo limite. TCP permette anche un trasferimento affidabile (con ACK e ritrasmissioni) senza perdite di dati.

### 77. Perché i trasferimenti di zona sono sensibili dal punto di vista della sicurezza?

Sono sensibili perché quando qualcuno **sa cosa e dove si trovano le tue risorse** (la topologia della rete, i nomi e indirizzi IP dei server, le configurazioni), può **pianificare un attacco** contro di te (es. identificare obiettivi vulnerabili, mappare la rete). Per questo motivo, i trasferimenti di zona dovrebbero essere **consentiti solo da sistemi approvati** (autenticazione e restrizione degli IP dei server slave).

#### Sottosezione 8.3.3 – Problemi del DNS

### 78. Come aiuta il DNS nella consegna della posta elettronica?

Il DNS aiuta gli agenti di consegna della posta (MTA) a inviare la posta su Internet utilizzando i **record MX (Mail eXchange)** . Quando un MTA deve consegnare un'email a un dominio (es. example.com), interroga il DNS per ottenere il record MX di quel dominio, che specifica il nome dell'host (server di posta) configurato per accettare la posta per quel dominio (e la priorità, nel caso ci siano più server).

### 79. Quali sono i problemi di base del DNS (testo non cifrato, UDP, struttura ad albero, fiducia)?

- **Testo non cifrato**: le query e le risposte DNS sono in chiaro (senza crittografia), quindi intercettabili
- **UDP semplice, senza sessioni**: le query sono su UDP senza connessione, vulnerabili a spoofing e iniezione di risposte false
- **Struttura ad albero con deleghe**: dipendenza da una catena di fiducia; se un anello è compromesso, l'intero albero sotto di esso può essere compromesso
- **Ogni entità è responsabile di una parte limitata di esso**: la responsabilità è distribuita, ma anche la vulnerabilità è distribuita
- **I resolver sono vittime di attacchi, dirottamenti e errori**: i resolver possono essere ingannati da risposte false (cache poisoning) o configurati male
- **È necessaria fiducia**: bisogna fidarsi dei server DNS upstream e delle deleghe

### 80. Cosa significa l'acronimo DNSSEC? Quale problema risolve?

DNSSEC significa **DNS Security Extensions** (estensioni di sicurezza DNS). Aggiunge strati al DNS per renderlo **verificabile**, garantendo **autenticità e integrità** dei dati. Risolve il problema della mancanza di sicurezza nel DNS tradizionale, prevenendo attacchi come:
- **Cache poisoning** (avvelenamento della cache)
- **Spoofing** (falsificazione) di risposte DNS
- Iniezione di record falsi

### 81. Come funziona DNSSEC? Cosa sono le firme RRSIG e i record DS?

DNSSEC funziona firmando i **Resource Record Sets** (insiemi di record di risorse) con la **chiave privata DNSKEY**. Il processo:
1. Il proprietario della zona genera una coppia di chiavi (pubblica/privata)
2. I record della zona vengono firmati con la chiave privata, generando **firme RRSIG** (Resource Record Signature)
3. Per verificare le firme RRSIG, il resolver deve disporre delle **chiavi pubbliche DNSKEY**.
4. Il **genitore** garantisce l'autenticità della chiave del figlio firmando l'hash di essa (record **DS – Delegation Signer**)
5. Questo processo viene ripetuto per il genitore e il nonno, creando una **catena di fiducia** dalla radice verso il basso
6. Nell'ideale, viene distribuita una sola chiave pubblica DNSKEY (quella della radice)

### 82. Quali sono i principali software DNS menzionati (BIND, Unbound, NSD, Microsoft DNS, Knot DNS, PowerDNS)?

- **BIND** (Berkeley Internet Name Domain): il software DNS open source più ampiamente utilizzato su Internet. Mantenuto da ISC. Versione attuale BIND 9.11.4-P2 (all'epoca del testo).
- **Unbound**: un resolver DNS di caching (non fa da server autorevole)
- **NSD** (Name Server Daemon): un nameserver **solo autorevole** (non fa caching ricorsivo)
- **Microsoft DNS**: fornito con Windows Server
- **Knot DNS**: un nameserver solo autorevole
- **PowerDNS**: supporta diversi backend di archiviazione dei dati (file, database SQL, etc.)

### 83. Cosa è BIND? Chi lo mantiene?

**BIND** (Berkeley Internet Name Domain) è il software DNS open source più ampiamente utilizzato su Internet. È mantenuto dall'**Internet Systems Consortium (ISC)** . È sia un server DNS autorevole che un resolver ricorsivo/cache.

---

## Sezione 8.4 – World Wide Web

### 84. Cos'è il World Wide Web dal punto di vista dell'utente?

Dal punto di vista degli utenti, il Web è una **vasta raccolta mondiale di documenti o pagine Web** (spesso definite per brevità solamente pagine). Ogni pagina può contenere **collegamenti (link)** ad altre pagine situate ovunque nel mondo. Gli utenti possono seguire un collegamento facendo click su di esso e raggiungendo così la pagina indicata; il processo può essere ripetuto indefinitamente.

### 85. Cosa sono i link (collegamenti) ipertestuali?

Sono elementi (tipicamente testo sottolineato o immagini) che puntano ad altre pagine Web. L'idea di fare in modo che ogni pagina puntasse a un'altra è l'**ipertesto (hypertext)** . Quando l'utente fa click su un link, il browser carica e visualizza la pagina collegata.

### 86. Cos'è un browser? Fai alcuni esempi.

Un **browser** è un programma che visualizza le pagine Web e rileva i click del mouse sugli elementi in esse visualizzati. Quando viene selezionato un elemento, il browser segue il collegamento ipertestuale e preleva la pagina selezionata. Esempi: **Firefox, Internet Explorer, Chrome** (i più popolari al momento della scrittura del testo).

### 87. Qual è la differenza tra pagina statica e pagina dinamica?

- **Pagina statica**: è sempre uguale (il documento viene semplicemente letto da un disco). Il contenuto non cambia a meno che il file non venga modificato manualmente.
- **Pagina dinamica**: viene **generata su richiesta** da un programma (es. script lato server) o contiene del codice eseguibile. Si presenta in modo diverso ogni volta che viene visualizzata (es. risultati di ricerca, homepage personalizzate con raccomandazioni, carrello della spesa).

### 88. Cosa sono i cookie e a cosa servono?

I **cookie** sono un meccanismo che permette ai siti Web di **tenere traccia delle informazioni sugli utenti** tra una visita e l'altra (o tra pagine diverse dello stesso sito). Servono a:
- Mantenere lo stato della sessione (es. carrello della spesa, login)
- Memorizzare preferenze dell'utente
- Tracciare il comportamento per pubblicità mirata (cookie di terze parti)
Il nome deriva da un antico gergo dei programmatori ("cookie" = qualcosa che un programma passa a un altro e che potrebbe in seguito dover presentare per svolgere un lavoro).

#### Sottosezione 8.4.1 – Il Lato Client

### 89. Quali tre domande devono essere risolte prima di poter visualizzare una pagina selezionata?

1. Come si chiama la pagina?
2. Dov'è situata la pagina?
3. Com'è possibile accedere alla pagina?

La soluzione è l'**URL (Uniform Resource Locator)** che risolve tutte e tre le domande contemporaneamente.

### 90. Cosa significa l'acronimo URL? Da quali tre parti è composto?

URL significa **Uniform Resource Locator**. È composto da tre parti:
1. **Protocollo (o schema)** : specifica come accedere alla risorsa (es. http, https, ftp)
2. **Nome DNS della macchina** su cui è situata la pagina (es. www.cs.washington.edu)
3. **Percorso (path)** : indica in modo univoco la pagina specifica (un file da leggere o un programma da eseguire) sul server

### 91. Analizza l'URL: http://www.cs.washington.edu/index.html

- **Protocollo**: http
- **Nome DNS dell'host**: www.cs.washington.edu
- **Percorso**: /index.html

### 92. Descrivi i passaggi che il browser esegue quando un utente fa click su un collegamento ipertestuale.

1. Il browser determina l'URL (osservando che cosa è stato selezionato)
2. Il browser richiede al DNS l'indirizzo IP del server (es. www.cs.washington.edu)
3. Il DNS risponde con l'indirizzo IP (es. 128.208.3.88)
4. Il browser esegue una connessione TCP alla porta 80 su quell'indirizzo IP
5. Invia una richiesta HTTP per la pagina specifica (es. /index.html)
6. Il server invia la pagina come risposta HTTP
7. Se la pagina include URL necessari alla visualizzazione (immagini, script, video), il browser prende gli altri URL usando lo stesso procedimento
8. Il browser visualizza la pagina completa
9. La connessione TCP viene rilasciata se non vi sono altre richieste agli stessi server per un breve periodo

### 93. Su quale porta TCP lavora tipicamente un server HTTP?

La porta **80** (porta di default per HTTP). Per HTTPS, la porta è 443.

### 94. Quali sono alcuni schemi di URL comuni oltre a http (https, ftp, file, mailto, rtsp, sip, about)?

- **http**: ipertesto (HTML) – http://www.example.com/
- **https**: ipertesto con sicurezza (SSL/TLS) – https://www.bank.com/accounts/
- **ftp**: trasferimento file con FTP – ftp://ftp.cs.vu.nl/pub/minix/README
- **file**: file locale – file:///usr/suzanne/prog.c
- **mailto**: spedire e-mail – mailto:johnUser@acm.org
- **rtsp**: streaming multimediale – rtsp://youtube.com/montypython.mpg
- **sip**: chiamate multimediali – sip:vee@adversary.com
- **about**: informazioni sul browser – about:plugins

##### Sottosezione 8.4.1.1 – Minacce alla Sicurezza

### 95. Quali sono le principali minacce alla sicurezza lato server (SQL Injection, XSS, CSRF, File Inclusion)?

- **SQL Injection (iniezione SQL)** : iniezione di codice SQL malevolo nei moduli di input dell'utente, per violare, cancellare o modificare il database.
- **Cross-Site Scripting (XSS)** : iniezione di codice JavaScript dannoso in una pagina web, che viene eseguito nel browser di altri utenti (rubando cookie o eseguendo azioni dannose).
- **Cross-Site Request Forgery (CSRF)** : indurre un utente autenticato a eseguire azioni non volute su un'applicazione web (sfruttando la fiducia del sito verso l'utente).
- **File Inclusion**: inserimento di file dannosi nel server sfruttando vulnerabilità nei percorsi di inclusione dei file, portando all'esecuzione di codice arbitrario.

### 96. Cos'è l'SQL Injection? Come può essere prevenuta?

L'**SQL Injection** è un attacco in cui un malintenzionato sfrutta vulnerabilità nei moduli di input dell'utente (es. form di login, caselle di ricerca) per **iniettare codice SQL malevolo** nei comandi che il server esegue su un database. Esempio: inserendo `' OR '1'='1` in un campo password, l'attaccante potrebbe bypassare l'autenticazione. Può essere prevenuta con **validazione e sanitizzazione degli input** (escape dei caratteri speciali, uso di prepared statements/parametri, white-list validation).

### 97. Cos'è il Cross-Site Scripting (XSS)? Quali danni può causare?

Il **Cross-Site Scripting (XSS)** è un attacco in cui un attaccante riesce a **iniettare codice JavaScript dannoso** in una pagina web visualizzata da altri utenti. Questo codice (eseguendosi nel browser della vittima) può:
- Rubare informazioni sensibili (cookie di sessione, token, dati di autenticazione)
- Eseguire azioni a nome dell'utente (es. modificare impostazioni, inviare messaggi)
- Deface (modificare l'aspetto) della pagina
- Redirigere l'utente verso siti malevoli

### 98. Cos'è il Cross-Site Request Forgery (CSRF)? Come funziona?

Il **CSRF** (Cross-Site Request Forgery) è un attacco che consente a un attaccante di **indurre un utente autenticato** a eseguire **azioni non volute** su un'applicazione web in cui è autenticato, sfruttando la fiducia del sito verso l'utente. Esempio: l'utente è loggato su un sito bancario. L'attaccante invia un link (via email) che, quando cliccato, esegue un trasferimento di denaro. Il sito bancario, ricevendo la richiesta con i cookie di sessione validi, la esegue credendo che sia voluta dall'utente.

### 99. Quali sono le principali minacce alla sicurezza lato client (XSS, Clickjacking, MitM, Phishing)?

- **Cross-Site Scripting (XSS)** : codice malevolo eseguito nel contesto del browser dell'utente
- **Clickjacking**: sovrapposizione di elementi invisibili/trasparenti per indurre l'utente a cliccare su pulsanti nascosti o eseguire azioni non volute
- **Man-in-the-Middle (MitM)** : intercettazione e modifica della comunicazione tra client e server (rubare credenziali, inserire dati dannosi)
- **Phishing**: pagine web fraudolente che imitano siti legittimi per indurre l'utente a fornire informazioni personali (credenziali, dati di carte di credito)

### 100. Cos'è il Clickjacking? Come si può prevenire con l'intestazione X-Frame-Options?

Il **Clickjacking** è un attacco in cui gli attaccanti **sovrappongono una pagina web con contenuti invisibili o trasparenti** per indurre gli utenti a cliccare su elementi diversi da quelli che intendono (come pulsanti nascosti che eseguono azioni non volute). L'utente pensa di cliccare su un pulsante visibile, ma in realtà sta cliccando su un elemento invisibile sovrapposto (es. un "Mi piace" su Facebook, o un pulsante di trasferimento fondi).

**Prevenzione**: usare l'intestazione HTTP **X-Frame-Options** per impedire l'incorporazione delle pagine in iframe di terze parti. Valori tipici: `DENY` (nessuna incorporazione), `SAMEORIGIN` (solo dalla stessa origine).

### 101. Cos'è un attacco Man-in-the-Middle (MitM)? Come lo previene HTTPS?

Un attacco **Man-in-the-Middle (MitM)** avviene quando un attaccante si insedia **tra il client e il server**, intercettando e potenzialmente modificando la comunicazione. L'attaccante può rubare informazioni sensibili (password, numeri di carta di credito) o inserire dati dannosi.

**HTTPS** previene MitM crittografando la comunicazione con TLS/SSL. Anche se un attaccante intercetta il traffico, non può decifrarlo senza la chiave di sessione. Inoltre, HTTPS include meccanismi di autenticazione del server (certificati digitali), che permettono al client di verificare di stare comunicando con il server legittimo.

### 102. Cos'è il Phishing?

Il **Phishing** è una minaccia costante in cui gli utenti possono essere ingannati da pagine web fraudolente che **imitano siti legittimi** (es. siti bancari, servizi di posta, social network). L'obiettivo è indurre l'utente a **fornire informazioni personali**, come credenziali di accesso o dettagli di carte di credito. Spesso il phishing arriva via email con link che portano a siti clone.

### 103. Quali tecnologie di difesa sono menzionate (validazione input, HTTPS, CSP, cookie SameSite)?

- **Validazione e sanitizzazione degli input**: per prevenire SQL injection e XSS
- **Autenticazione e autorizzazione robuste**: per garantire che solo utenti autorizzati accedano alle risorse
- **HTTPS**: per crittografare i dati in transito e prevenire MitM
- **Content Security Policy (CSP)** : specifica quali script possono essere eseguiti sul sito web (prevenire XSS)
- **Cookie SameSite**: limitano le richieste cross-site, riducendo il rischio di CSRF
- **X-Frame-Options**: previene il clickjacking

#### Sottosezione 8.4.2 – Il Lato Server

### 104. Quali sono i passaggi eseguiti da un server Web nel suo ciclo principale?

In prima approssimazione, un server Web esegue questi passaggi:
1. Accettare una connessione TCP da un client (browser)
2. Ottenere il percorso della pagina (nome del file richiesto)
3. Ottenere il file (dal disco)
4. Inviare il contenuto del file al client
5. Rilasciare la connessione TCP

### 105. Quale problema risolve l'implementazione multithread di un server Web?

Risolve il problema di **servire una singola richiesta alla volta**. Con un server multithread, un modulo di front-end accetta tutte le richieste in ingresso e le distribuisce a \(k\) moduli di elaborazione (thread). I \(k+1\) thread appartengono allo stesso processo, condividendo la cache e lo spazio di indirizzamento. In questo modo, il server può gestire **molte richieste contemporaneamente** (concorrenza).

### 106. Quali sono i passaggi che un modulo di elaborazione di un server Web moderno può eseguire?

I passaggi (dopo che è stata stabilita la connessione TCP e i meccanismi di trasporto sicuri come SSL/TLS):
1. Risolvere il nome della pagina Web richiesta
2. Eseguire il controllo di accesso sulla pagina Web
3. Controllare la cache (se la pagina è già in cache)
4. Prelevare la pagina richiesta dal disco o eseguire un programma che la costruisca (pagina dinamica)
5. Determinare il resto della risposta (per esempio, il tipo MIME da includere)
6. Restituire la risposta al client
7. Aggiungere un elemento al registro delle operazioni svolte dal server (logging)

#### Sottosezione 8.4.3 – Cookie

### 107. Cosa sono i cookie in ambito Web? Da dove deriva il nome?

I **cookie** sono piccoli dati che il server invia al browser, che il browser memorizza e rispedisce al server nelle richieste successive. Servono a mantenere lo stato tra diverse richieste HTTP (che di per sé è stateless). Il nome deriva da un antico gergo dei programmatori: un programma chiama una procedura e ottiene qualcosa che potrebbe in seguito dover presentare per svolgere un lavoro ("cookie" come "ciò che viene passato").

### 108. Quali informazioni contiene tipicamente un cookie (dominio, percorso, contenuto, scadenza, sicuro)?

- **Dominio** (Domain): il dominio per cui il cookie è valido
- **Percorso** (Path): il percorso del sito per cui il cookie è valido
- **Contenuto** (Content/Value): i dati effettivi del cookie (es. ID di sessione, preferenze)
- **Scadenza** (Expires/Max-Age): data e ora di scadenza del cookie (se assente, cookie non persistente)
- **Sicuro** (Secure/SameSite): flag che indica se il cookie può essere inviato solo con connessioni sicure (HTTPS) o limitazioni cross-site

### 109. Qual è la differenza tra cookie persistente e cookie non persistente?

- **Cookie non persistente** (session cookie): il campo Expires è **assente**. Il browser scarta il cookie alla sua chiusura. Viene utilizzato per mantenere lo stato durante la sessione di navigazione (es. carrello della spesa).
- **Cookie persistente**: viene fornita una data e un'ora nel campo Expires (o Max-Age). Il cookie è **salvato su disco** e persiste anche dopo la chiusura del browser fino alla scadenza.

### 110. Come si può rimuovere un cookie dal disco rigido del client?

Per rimuovere un cookie dal disco rigido del client, un server deve inviarlo di nuovo, ma con un **tempo di scadenza già trascorso** (es. una data nel passato). Il browser, ricevendo un cookie già scaduto, lo eliminerà.

### 111. Cosa indica il campo "Secure" in un cookie?

Il campo **Secure** (sicuro) indica che il browser può restituire il cookie a un server **solo usando un sistema di trasporto sicuro** come **SSL/TLS** (HTTPS). Questa funzionalità è utilizzata per il commercio elettronico, il remote banking e altre applicazioni sicure. Un cookie con flag Secure non verrà mai inviato su una connessione HTTP non cifrata.

#### Sottosezione 8.4.4 – HTTP

### 112. Cosa significa l'acronimo HTTP? Quale RFC lo specifica?

HTTP significa **HyperText Transfer Protocol** (protocollo di trasferimento ipertestuale). È specificato nell'**RFC 2616** (per HTTP/1.1).

### 113. Su quale modello si basa HTTP (request-response)?

HTTP si basa sul modello di **domanda e risposta (request-response)** . Il client (browser) invia una richiesta al server, e il server restituisce una risposta. Normalmente implementato su **TCP**.

### 114. Quali sono le differenze tra HTTP 1.0 e HTTP 1.1?

- **HTTP 1.0**: dopo avere stabilito la connessione, veniva inviata una singola richiesta e restituita una singola risposta; poi la connessione TCP veniva **rilasciata** (connessione non persistente). Ogni oggetto (immagine, script, foglio di stile) richiedeva una nuova connessione.

- **HTTP 1.1**: supporta **connessioni persistenti**. È possibile stabilire una connessione TCP, inviare più richieste e ottenere più risposte senza dover riaprire la connessione ogni volta.

### 115. Cosa sono le connessioni persistenti in HTTP 1.1?

Le **connessioni persistenti** (keep-alive) permettono di riutilizzare la stessa connessione TCP per **più richieste HTTP** (e relative risposte). Questo ammortizza l'overhead di impostazione e rilascio di TCP su più richieste, migliorando le prestazioni, specialmente per pagine con molti oggetti (immagini, script, CSS).

### 116. Cosa significa "pipelining" delle richieste in HTTP?

Il **pipelining** (concatenamento) delle richieste significa inviare la **richiesta 2 prima dell'arrivo della risposta alla richiesta 1**. Il client non deve attendere la risposta alla richiesta precedente per inviarne una nuova. HTTP 1.1 supporta il pipelining su connessioni persistenti, migliorando ulteriormente le prestazioni.

### 117. Cosa sono i metodi HTTP? Perché sono stati resi generici?

I **metodi HTTP** sono operazioni (comandi) che il client può inviare al server. Oltre al classico **GET** (recuperare una pagina) e **POST** (inviare dati), esistono HEAD, PUT, DELETE, OPTIONS, TRACE, CONNECT. Sono stati resi generici (indipendenti dal contenuto) per supportare future applicazioni orientate agli oggetti (es. servizi web, API REST). Questa generalità ha permesso la nascita di protocolli come **SOAP** (Simple Object Access Protocol).

#### Sottosezione 8.4.5 – Caching

### 118. Cos'è il caching delle pagine Web? Quale vantaggio offre?

Il **caching** è la procedura di memorizzare in una cache (locale o condivisa) delle pagine e risorse Web recuperate per farne un uso successivo. Il vantaggio è che quando una pagina è memorizzata nella cache, non è necessario **ripetere il trasferimento** (risparmiando tempo e banda). HTTP ha un supporto integrato che aiuta i client a identificare quando possono riusare le pagine in modo sicuro.

### 119. Cos'è un GET condizionale (conditional GET)? Quando viene usato?

Un **GET condizionale** è una richiesta HTTP GET che include intestazioni condizionali come **If-Modified-Since** (e/o If-None-Match con ETag). Viene usato quando il client ha una copia nella cache, ma non sa se sia ancora valida. Il server risponde con:
- **304 Not Modified** se la copia nella cache è ancora valida (risposta breve)
- **200 OK** con la risorsa completa se la copia è obsoleta

### 120. Come fa il client a sapere se una copia nella cache è ancora valida?

Il client usa una **richiesta GET condizionale**. Invia al server la data di ultima modifica (If-Modified-Since) e/o l'ETag (If-None-Match) della copia in cache. Il server confronta queste informazioni con lo stato attuale della risorsa sul server:
- Se la risorsa non è stata modificata dopo quella data (o l'ETag corrisponde), risponde con **304 Not Modified**
- Se è stata modificata, risponde con la nuova risorsa (200 OK)

---

## Sezione 8.5 – Distribuzione dei Contenuti

### 121. Come è cambiato l'uso di Internet dalle comunicazioni ai contenuti?

Storicamente, Internet era basata unicamente sulle **comunicazioni**: accademici si collegavano a macchine remote per fare login, email per comunicare, e più recentemente voce/video su IP. Con la crescita del Web, Internet ha cominciato a riguardare più i **contenuti** della comunicazione: reperire informazioni, condividere file peer-to-peer (film, musica, programmi). Oggi la maggior parte della banda Internet è usata per trasmettere **video registrati**.

### 122. Cosa sono gli "elefanti" e i "topi" nel traffico di rete?

Sono metafore per descrivere la distribuzione del traffico:
- **Elefanti**: lunghi flussi di traffico (flussi molto grandi). Sono pochi, ma contano perché sono molto grandi e consumano la maggior parte della banda.
- **Topi**: brevi flussi di traffico. Sono molti numericamente, ma ciascuno piccolo.

Questa caratteristica è legata all'**auto-similarità** (self-similarity) del traffico di rete, che presenta molti vuoti brevi e lunghi su diverse scale temporali.

### 123. Cosa afferma la legge di Zipf in relazione alla popolarità dei contenuti? Qual è la formula?

La **legge di Zipf** afferma che, quando sono disponibili \(N\) oggetti (es. film), la frazione di tutte le richieste per il \(k\)-esimo più popolare è circa \(C/k\), dove \(C\) è una costante di normalizzazione tale che la somma dia 1. In formula:
\[
C = 1 / (1 + 1/2 + 1/3 + 1/4 + 1/5 + \dots + 1/N)
\]

Conseguenza pratica: il film più popolare lo è **7 volte di più** del film numero 7. La popolarità dei contenuti segue una distribuzione a "lunga coda" (long tail).

#### Sottosezione 8.5.1 – Server Farm e Proxy Web

### 124. Cos'è una server farm? A cosa serve?

Una **server farm** è un **cluster di computer** che agisce come un singolo server Web. Serve a costruire grandi siti Web che lavorino bene (velocemente e con alta disponibilità) quando un singolo server non è sufficiente a gestire il carico. I server condividono un database comune e un front-end distribuisce le richieste tra di loro.

### 125. Come fa una server farm ad apparire come un singolo sito Web?

Ogni server deve avere una **copia del sito Web** (contenuti condivisi, tipicamente attraverso un database comune o storage condiviso). Un **front-end** (switch a livello data link o router IP) distribuisce le richieste in entrata su un insieme di server, usando tecniche come round-robin, hashing (es. basato su IP sorgente), o politiche più complesse. Il front-end si assicura che tutti i pacchetti di una stessa connessione TCP vadano allo stesso server.

### 126. Cos'è il load balancing? Quale politica semplice si può usare (round-robin)?

Il **load balancing** (bilanciamento del carico) è la politica con cui il front-end associa le richieste ai server della server farm per distribuire il carico in modo uniforme. Una politica semplice è il **round-robin** (a turno): il front-end assegna ogni nuova richiesta al server successivo in ordine ciclico. Il front-end deve ricordarsi dell'associazione per ogni richiesta (connessione TCP).

### 127. Cosa sono i middlebox? Perché violano i principi della stratificazione dei protocolli?

I **middlebox** sono dispositivi (es. switch, router, NAT, load balancer) che prendono decisioni basate su informazioni provenienti dal **livello di trasporto o da livelli superiori** (es. guardano le porte TCP/UDP o i contenuti HTTP). Violano il principio di stratificazione dei protocolli perché ogni livello dovrebbe limitarsi a utilizzare solo la propria intestazione per il controllo, senza ispezionare il payload dei livelli superiori. Questo crea potenziali problemi di compatibilità e funzionamento nel lungo termine.

### 128. Cos'è un proxy Web? A cosa serve?

Un **proxy Web** è un server che agisce da intermediario tra i client (browser) e i server Web. Fornisce una **cache grande e condivisa** per un gruppo di client (es. un'azienda o un ISP). Serve a:
- Aumentare la velocità delle richieste Web (risposte dalla cache locale)
- Ridurre l'utilizzo di banda verso l'esterno (meno richieste ai server remoti)
- Filtrare o monitorare il traffico Web

### 129. Qual è la tipica configurazione di un'organizzazione che usa un proxy Web?

La tipica configurazione prevede **un solo proxy** per tutti gli utenti dell'organizzazione (azienda o ISP). I browser degli utenti sono configurati per inviare le richieste al proxy. Il proxy gestisce una cache condivisa e inoltra le richieste non soddisfatte dalla cache al server Web remoto (o a un upstream proxy).

### 130. Cosa sono upstream proxy e downstream proxy?

- **Upstream proxy** (proxy di livello superiore): il proxy verso cui un proxy (o un browser) inoltra le richieste che non può soddisfare dalla propria cache.
- **Downstream proxy** (proxy di livello inferiore): i proxy (o browser) che si rivolgono a un proxy per soddisfare le loro richieste.

Si possono creare gerarchie di proxy: browser → proxy aziendale → proxy ISP → server Web.

#### Sottosezione 8.5.1.1 – Server Farm (approfondimento)

### 131. Quali soluzioni esistono per distribuire le richieste su una server farm?

1. **DNS-based**: il DNS restituisce indirizzi IP diversi (round-robin) per distribuire le richieste
2. **Front-end switch (layer 4)**: distribuisce basandosi su indirizzi IP e porte TCP/UDP
3. **Front-end load balancer (layer 7)**: ispeziona il contenuto HTTP (es. URL, cookie) per distribuire

### 132. Come può il DNS essere usato per distribuire le richieste?

Il DNS può restituire **indirizzi IP diversi** (in round-robin) per lo stesso nome di dominio. Ad esempio, www.example.com può risolvere a 192.0.2.1, poi 192.0.2.2, poi 192.0.2.3, etc. I client (e i resolver) ricevono indirizzi diversi in tempi diversi, distribuendo il carico tra i server della farm. Questa soluzione è semplice ma non permette di bilanciare in modo fine (non tiene conto del carico effettivo dei server).

#### Sottosezione 8.5.1.2 – Proxy Web (approfondimento)

### 133. Quali benefici porta un proxy Web a un'azienda o ISP?

- **Maggiore velocità** nelle richieste Web (risposte dalla cache locale, senza attraversare la rete esterna)
- **Riduzione della banda** consumata verso l'esterno (le richieste soddisfatte dalla cache non consumano banda sull'uplink)
- **Risparmio economico** (aziende e ISP spesso pagano in base alla banda consumata)

### 134. Perché un singolo livello di cache è spesso sufficiente?

Un singolo livello di cache (es. un proxy aziendale) è spesso sufficiente per guadagnare la **maggior parte dei benefici** del caching, perché la cache locale può già servire una percentuale significativa delle richieste (es. risorse comuni, pagine visitate frequentemente, fogli di stile, script condivisi). Aggiungere ulteriori livelli di proxy introduce complessità aggiuntiva con benefici marginali decrescenti.

---

## Sezione 8.6 – Content Delivery Network

### 135. Cosa significa l'acronimo CDN (Content Delivery Network)?

**Content Delivery Network** (rete per la distribuzione di contenuti). È un'infrastruttura distribuita in cui un provider installa un insieme di macchine (nodi) in diversi luoghi di Internet e le usa per **distribuire contenuti ai client** da nodi a loro vicini.

### 136. In cosa differisce una CDN dalla cache Web tradizionale?

- **Cache Web tradizionale**: sono i **client** (o i proxy) che cercano una copia della pagina richiesta in una cache vicina. La cache è popolata dinamicamente in base alle richieste degli utenti.
- **CDN**: è il **provider** (il proprietario del contenuto) che mette una copia della pagina in un insieme di nodi in differenti posizioni e **dirige il client** in modo che usi un nodo a lui vicino come server. Il contenuto viene distribuito proattivamente (push o pull in anticipo) ai nodi CDN.

### 137. Descrivi il funzionamento di una CDN con l'esempio dell'albero di distribuzione.

Il server di origine (origin server) nella CDN **distribuisce una copia del contenuto** ad altri nodi della CDN in diverse regioni geografiche (es. Sydney, Boston, Amsterdam). Questi nodi sono posizionati strategicamente vicino agli utenti finali. I client prendono quindi le pagine dal **nodo a loro più vicino** nella CDN (linea continua), non dal server di origine che potrebbe trovarsi dall'altra parte del mondo. In questo modo, la latenza è ridotta e il carico sul server di origine è ridotto.

### 138. Quali sono le tre ragioni per cui l'uso di proxy server fallisce nella pratica per le CDN?

1. I client in una certa parte della rete appartengono a organizzazioni diverse e usano proxy diversi. Le cache non sono normalmente condivise tra organizzazioni diverse per limitato beneficio e motivi di sicurezza.
2. Possono esserci più CDN (diversi provider), ma ogni client usa un solo proxy. Quale CDN dovrebbe usare il client come proxy?
3. I proxy Web sono **configurati dal client** (utente o amministratore). Possono essere configurati per beneficiare o meno di una distribuzione di contenuti di una CDN, e c'è poco che la CDN possa fare in questo senso.

### 139. Cos'è il mirroring? Cosa sono i mirror?

Il **mirroring** (specchiamento) è un approccio semplice per supportare un albero di distribuzione: il server di origine **replica i contenuti** (li copia) nei nodi CDN. I nodi CDN in diverse regioni della rete sono chiamati **mirror** (specchi, perché **riflettono** il contenuto del server di origine). Le pagine Web sul server di origine contengono **collegamenti espliciti** a mirror distinti, indicando di solito anche la loro locazione geografica.

### 140. Cos'è la DNS redirection (reindirizzamento DNS)? Come funziona?

È una tecnica che usa il DNS per dirigere i client verso il nodo CDN più vicino. Funziona così:
1. Il browser usa il DNS per risolvere il nome di dominio (es. www.cdn.com)
2. Il name server del dominio (gestito dalla CDN) **guarda l'indirizzo IP del client** che fa la richiesta (o il resolver)
3. Il name server restituisce l'indirizzo IP del nodo CDN **più vicino** a quel client (geograficamente o in termini di rete)
4. Esempio: un client a Sydney riceve IP del nodo Sydney; un client ad Amsterdam riceve IP del nodo Amsterdam

### 141. Quali due fattori determinano la scelta del nodo CDN "più vicino"?

1. **Distanza di rete** (percorso di rete breve e ad alta capacità). Le CDN usano una mappa di associazioni per tradurre l'indirizzo IP del client nella sua posizione in rete.
2. **Carico già gestito dal nodo CDN**. Se un nodo è sovraccarico, sarà lento; si possono associare alcuni client a nodi leggermente più lontani ma meno carichi (bilanciamento del carico).

### 142. Quale azienda fu la prima ad adottare la tecnica DNS per la distribuzione di contenuti? In che anno?

**Akamai** nel **1998**, quando il Web stava soffrendo sotto il carico della sua crescita iniziale. Akamai fu la prima grande CDN e divenne un leader industriale.

### 143. Quali vantaggi hanno gli ISP nell'ospitare un nodo CDN?

- **Riduce la banda di rete in uscita** (a pagamento), perché i contenuti sono serviti localmente all'interno della rete dell'ISP
- **Aumenta la velocità di risposta** per i clienti dell'ISP (che apprezzano un servizio più veloce)
- Dà un **vantaggio competitivo** rispetto a ISP che non hanno nodi CDN
- I benefici non costano all'ISP (la CDN installa e gestisce i nodi)

Il testo riassume: fornitori di contenuti, ISP e clienti si avvantaggiano tutti di questo schema, e la CDN fa ottimi affari.

### 144. Quali sono gli esempi di CDN ottimizzate per il video menzionati (Ustream, JET-Stream/Streamzilla)?

- **Ustream**: CDN ottimizzato per video, offre servizi per "Pro Broadcasting", "Corporate Internal Communications" (Ustream Align) e marketing per lead generation (Ustream Demand)
- **JET-Stream** (precedentemente noto come **Streamzilla**): CDN ottimizzato per video, sta guadagnando quote di mercato in Europa. Offre streaming adattivo con bitrate variabile tramite HTTP

### 145. Cosa sono i MultiCDN? Quali vantaggi offrono (bilanciamento del carico, CDN stacking, etc.)?

I **MultiCDN** sono una tecnologia emergente che combina più CDN (globali) in un'unica piattaforma. Vantaggi:
- **Bilanciamento del carico imposto**: distribuisce immediatamente il traffico senza dipendere da sistemi DNS di terze parti
- **Failover automatico**: se una CDN fallisce, viene immediatamente esclusa dal pool
- **CDN stacking**: il traffico viene bilanciato su un pool di CDN, creando di fatto il CDN più grande al mondo
- **Bilanciamento granulare**: ottimizzato per singoli ISP e fino agli indirizzi IP
- **Integrazione profonda**: permette di controllare le CDN come se fossero server edge propri
- **Mix ibrido**: ottimizzazione su mix di risorse (CDN proprietary + edge server propri + CDN globali)

### 146. Cosa significa "CDN stacking"?

Il **CDN stacking** è una tecnica MultiCDN in cui il traffico viene **bilanciato su un pool di CDN** (aggregazione di più CDN). Invece di usare una singola CDN, si sfrutta la capacità combinata di tutte le CDN nel pool, creando di fatto il "CDN più grande al mondo" (in termini di capacità distribuita aggregata).

### 147. Quale vantaggio offre lo streaming HTTP adattivo con bitrate variabile?

Lo streaming HTTP adattivo (Adaptive Bitrate Streaming, ABR) permette di **adattare dinamicamente la qualità del video** (bitrate) alle condizioni della rete. Se la larghezza di banda diminuisce, lo streaming passa a un bitrate più basso (evitando buffering); se la banda aumenta, la qualità migliora. JET-Stream (ex Streamzilla) ha implementato questa tecnologia, superando le offerte dei CDN tradizionali e aprendo nuove opportunità.

---

## Domande trasversali e di confronto

### 148. Confronta IMAP e POP3 in termini di gestione dei messaggi sul server e supporto multi-dispositivo.

| Caratteristica | POP3 | IMAP |
|----------------|------|------|
| Gestione messaggi | Scarica i messaggi sul client (tipicamente cancella dal server) | Mantiene i messaggi sul server |
| Accesso multi-dispositivo | Difficile (lo stato non è sincronizzato; ciò che si fa su un dispositivo non si vede sugli altri) | Completo (lo stato è sincronizzato; letto, cancellato, spostato si riflettono su tutti i dispositivi) |
| Struttura cartelle | Non supportata (solo inbox locale) | Supporto completo di cartelle sul server |
| Accesso parziale ai messaggi | No (deve scaricare tutto) | Sì (può scaricare solo header, poi selettivamente il corpo) |
| Perdita dati | Rischio perdita se il client si guasta dopo il download | Nessun rischio (i messaggi sono sempre sul server) |

### 149. Confronta FTP e TFTP in termini di: affidabilità, autenticazione, protocollo di trasporto, complessità.

| Caratteristica | FTP | TFTP |
|----------------|-----|------|
| Affidabilità | Alta (TCP, connessione affidabile) | Affidabilità implementata a livello applicativo su UDP |
| Autenticazione | Sì (username/password, accesso anonimo) | No (nessuna autenticazione) |
| Protocollo di trasporto | TCP | UDP (tipicamente) |
| Connessioni | 2 connessioni (controllo persistente + dati non persistente) | 1 connessione (o coppia di porte dinamiche) |
| Complessità | Alto (comandi multipli, due modalità, gestione directory) | Basso (solo 5 tipi di messaggi, implementazione semplice) |
| Dimensione | Codice grande (client e server complessi) | Piccolo (adatto per firmware embedded) |
| Utilizzo tipico | Trasferimento file generico, backup | Boot diskless, trasferimento configurazioni su router/switch |

### 150. Confronta HTTP 1.0 e HTTP 1.1 in termini di connessioni e pipeline.

| Caratteristica | HTTP 1.0 | HTTP 1.1 |
|----------------|----------|----------|
| Connessioni | Non persistenti (una connessione per richiesta) | Persistenti (riutilizzo connessione per più richieste) |
| Pipeline | Non supportato | Supportato (inviare richiesta 2 prima della risposta 1) |
| Overhead | Alto (TCP setup/release per ogni risorsa) | Basso (un setup per più risorse) |
| Prestazioni | Scadenti per pagine con molti oggetti | Buone per pagine con molti oggetti |

### 151. Confronta server farm, proxy Web e CDN come soluzioni per migliorare le prestazioni del Web.

| Soluzione | Scopo | Come funziona | Limitazioni |
|-----------|-------|---------------|-------------|
| **Server farm** | Aumentare capacità di elaborazione (lato server) | Cluster di server + front-end bilanciamento carico | Non riduce latenza geografica |
| **Proxy Web** | Cache condivisa (lato client/ISP) | Cache locale per gruppo di utenti; serve le risposte senza contattare il server remoto | La cache è popolata dinamicamente; non serve il primo utente |
| **CDN** | Distribuzione geografica del contenuto | Contenuto replicato proattivamente su nodi vicini agli utenti; reindirizzamento DNS | Più complessa; richiede coordinamento con ISP |

### 152. Spiega la differenza tra una query DNS ricorsiva e una iterativa.

- **Ricorsiva**: il client chiede al server DNS di **svolgere tutto il lavoro** (seguire tutte le deleghe) e restituire la risposta definitiva. Il server contatta i root server, i TLD server, i nameserver autoritativi, poi restituisce la risposta al client.
- **Iterativa**: il server DNS **non** cerca la risposta per il client (a meno che non ce l'abbia già in cache). Invece, **indica al client dove guardare successivamente** (es. "chiedi al server .com"). Il client deve ripetere la query al server successivo (iterazione).

### 153. Confronta i record DNS A, AAAA e MX: a cosa serve ciascuno?

| Record | Scopo | Esempio |
|--------|-------|---------|
| **A** | Mappa un nome di dominio a un **indirizzo IPv4** | `example.com. 3600 IN A 93.184.216.34` |
| **AAAA** | Mappa un nome di dominio a un **indirizzo IPv6** | `example.com. 3600 IN AAAA 2606:2800:220:1:248:1893:25c8:1946` |
| **MX** | Specifica il server di posta per un dominio (con priorità) | `example.com. 3600 IN MX 10 mail.example.com.` |

### 154. Qual è la differenza tra un server DNS autorevole e un server DNS cache?

- **Server autorevole**: contiene i record originali (file di zona) e **risponde in modo autoritativo** (flag AA=1). Non esegue query ricorsive per conto dei client (salvo configurazione speciale).
- **Server cache** (caching resolver): non ha dati autoritativi propri. **Esegue query ricorsive** per conto dei client e **memorizza le risposte** (cache) per un tempo pari al TTL. Riduce la latenza e il carico sui server autorevoli.

### 155. Confronta le minacce alla sicurezza lato server e lato client nel Web.

| Minaccia | Lato server | Lato client | Descrizione |
|----------|-------------|-------------|-------------|
| **SQL Injection** | ✓ | – | Iniezione di codice SQL in input, compromette database |
| **XSS** | ✓ | ✓ | Iniezione di JavaScript; lato server (se non sanitizza), lato client (esecuzione) |
| **CSRF** | ✓ | – | Sfrutta la sessione autenticata dell'utente verso il server |
| **File Inclusion** | ✓ | – | Inclusione di file dannosi sul server |
| **Clickjacking** | – | ✓ | Interfaccia ingannevole con elementi trasparenti |
| **Man-in-the-Middle** | – | ✓ | Intercettazione comunicazione tra client e server |
| **Phishing** | – | ✓ | Pagina fraudolenta che imita un sito legittimo |

### 156. Confronta i cookie persistenti e non persistenti: quando viene cancellato ciascuno?

- **Cookie non persistente** (session cookie): viene cancellato **alla chiusura del browser**. Non ha data di scadenza. Usato per mantenere lo stato durante la sessione (carrello, login temporaneo).
- **Cookie persistente**: viene cancellato alla **data di scadenza** specificata nel campo `Expires` (o dopo il tempo nel campo `Max-Age`). Sopravvive alla chiusura del browser e viene salvato su disco.

### 157. Qual è la differenza architetturale tra una CDN e una rete P2P per la distribuzione di contenuti?

- **CDN** (Content Delivery Network): architettura **centralizzata/distribuita controllata**. Un provider commerciale installa nodi (server) in posizioni strategiche della rete. Il contenuto è distribuito da server professionali. Esempi: Akamai, Cloudflare, Amazon CloudFront.

- **P2P** (Peer-to-Peer): architettura **decentralizzata**. I computer degli utenti (peer) **usano le proprie risorse** (banda in uplink, storage) per distribuire contenuti tra di loro, **senza server separati o punti centrali di controllo**. Ogni peer può sia scaricare che caricare. Esempi storici: BitTorrent, eMule.


# Sicurezza delle Reti – Risposte Dettagliate

## Sezione 9.1 – Controllo degli Accessi

### 1. Perché la sicurezza delle reti è diventata un problema critico rispetto ai primi decenni delle reti di calcolatori?

Nei primi decenni della loro esistenza, le reti di calcolatori venivano utilizzate prevalentemente da ricercatori universitari per inviare e ricevere e-mail e dalle aziende per condividere le stampanti. In quelle applicazioni non si prestava particolare attenzione alla sicurezza. Oggi, milioni di persone usano le reti per fare acquisti, home banking oppure compilare la dichiarazione dei redditi. La sicurezza delle reti è quindi diventata un problema potenzialmente molto vasto perché sono in gioco dati finanziari, personali e sensibili.

### 2. Quali sono i principali obiettivi della sicurezza delle reti (impedire letture non autorizzate, modifiche, accesso a servizi, autenticazione, etc.)?

La sicurezza delle reti si occupa di:
- Impedire che intrusi riescano a **leggere** (o, peggio ancora, **modificare di nascosto**) i messaggi destinati a terzi
- Impedire che determinate persone possano **accedere a servizi remoti** che non sono autorizzate a usare
- **Accertarsi dell'identità** dei mittenti dei messaggi (autenticazione)
- Impedire l'**intercettazione e la ripetizione** di messaggi legittimi catturati sulla rete
- **Perseguire** chi afferma di non aver mai spedito certi messaggi (non ripudio)

### 3. Cos'è il controllo degli accessi? Quali benefici porta l'adozione di una politica di controllo degli accessi?

Il **controllo degli accessi** è un processo fondamentale che determina "**chi può fare cosa a cosa**" basandosi su una specifica politica. Questo processo è essenziale per limitare l'accesso a un sistema o alle risorse del sistema in base a criteri che vanno oltre l'identità dell'utente.

I benefici dell'adozione di una politica di controllo degli accessi sono:
- **Attenzione** dell'organizzazione su problemi di sicurezza (presa di coscienza)
- **Allocazione più efficiente** delle risorse per la sicurezza del sistema
- Possibilità di **configurare la sicurezza appropriata** per ciascuna risorsa del sistema in base al ruolo e all'importanza
- Facilitazione delle operazioni di **auditing e testing** del sistema

### 4. Quali sono i quattro elementi principali del controllo degli accessi?

1. **Soggetti** (utenti e gruppi di utenti) – chi richiede l'accesso
2. **Oggetti** (file e risorse come memoria, stampanti e scanner) – a cosa si vuole accedere
3. **Operazioni** – cosa si vuole fare (leggere, scrivere, eseguire, aggiungere)
4. **Monitor di riferimento** – componente che verifica le regole per concedere l'accesso a un oggetto a un soggetto

### 5. Cosa sono i diritti di accesso? Quali quattro diritti di accesso vengono menzionati?

I **diritti di accesso** regolano le autorizzazioni degli utenti per ogni risorsa del sistema. Le modalità di accesso possono essere di due tipi: **osservare** o **alterare**. I quattro diritti di accesso menzionati sono:
1. **Eseguire** (execute)
2. **Leggere** (read)
3. **Aggiungere** (append)
4. **Scrivere** (write)

### 6. Cosa si intende per modalità di accesso "osservare" e "alterare"?

- **Osservare**: permette all'utente di visualizzare o leggere il contenuto di una risorsa (es. leggere un file, visualizzare una directory)
- **Alterare**: permette all'utente di modificare, aggiungere o cancellare il contenuto di una risorsa (es. scrivere un file, cancellare un file, aggiungere dati)

### 7. Chi è responsabile della definizione dei diritti di accesso per una risorsa?

Il **proprietario della risorsa** è responsabile della definizione dei diritti di accesso. I diritti degli utenti prevalgono sempre sui diritti dei gruppi.

### 8. Quali tecniche e tecnologie esistono per gestire i diritti di accesso?

Le tecniche e tecnologie menzionate sono:
- Matrici di controllo degli accessi
- Tabelle di capacità
- Liste di controllo degli accessi (ACL – Access Control Lists)
- Controllo degli accessi basato sui ruoli (RBAC – Role-Based Access Control)
- Controllo degli accessi basato su regole
- Interfacce limitate
- Controllo degli accessi dipendente dal contenuto

### 9. Cos'è una matrice di controllo degli accessi? Come è strutturata?

La **matrice di controllo degli accessi** organizza tutte le informazioni necessarie per l'amministrazione del controllo degli accessi in una matrice con:
- **Righe** che rappresentano i soggetti o gruppi di soggetti (utenti)
- **Colonne** che rappresentano gli oggetti (risorse)
- **Corpo della matrice**: i permessi dei soggetti sugli oggetti (quali operazioni ciascun soggetto può eseguire su ciascun oggetto)

### 10. Cosa sono le liste di controllo degli accessi (ACL)?

Le **liste di controllo degli accessi (ACL – Access Control Lists)** sono un metodo per memorizzare i **gruppi con i diritti di accesso associati agli oggetti**. Invece di guardare dalla prospettiva del soggetto (come nella matrice), le ACL sono associate a ciascun oggetto e contengono l'elenco dei soggetti (utenti o gruppi) e i permessi che hanno su quell'oggetto.

### 11. Cosa sono le tabelle di capacità?

Le **tabelle di capacità** (capability tables) specificano le **operazioni che un soggetto può eseguire su un oggetto**. Dal punto di vista del soggetto, una tabella di capacità elenca per ogni oggetto a cui il soggetto ha accesso quali operazioni sono consentite. È il complemento delle ACL: mentre le ACL sono legate all'oggetto, le tabelle di capacità sono legate al soggetto.

### 12. Cosa significa l'acronimo "AAA"? Quali sono i tre pilastri che lo compongono?

Il concetto di "**AAA**" è il pilastro di qualsiasi disciplina sistematica della sicurezza. I tre pilastri sono:

1. **Autenticazione (Authentication)** : conferma l'identità degli utenti remoti che accedono alla rete
2. **Autorizzazione (Authorization)** : assegna diritti differenziati per l'utilizzo di servizi specifici
3. **Contabilità (Accounting)** : registra tutte le operazioni di un utente durante il processo di servizio di rete per raccogliere informazioni sull'uso delle risorse di rete

### 13. Spiega l'autenticazione, l'autorizzazione e la contabilità nel contesto del modello AAA.

- **Autenticazione**: verifica che l'utente sia effettivamente chi dice di essere. Esempi: password, biometrici, dispositivi di sicurezza, autenticazione a più livelli. Un utente invia nome utente e password a un server AAA; se le credenziali sono corrette, il server invia un messaggio di accettazione, altrimenti invia un messaggio di rifiuto bloccando l'accesso.

- **Autorizzazione**: determina quali servizi e risorse l'utente autenticato può utilizzare. Ad esempio, un utente può essere autorizzato a leggere un file ma non a modificarlo, o a usare la stampante ma non l'accesso a Internet.

- **Contabilità**: registra (in log) tutte le attività dell'utente durante la sessione: quando si è connesso, quali risorse ha usato, quanto traffico ha generato, etc. Queste informazioni sono usate per auditing, fatturazione, analisi di sicurezza.

### 14. Quali forme di autenticazione esistono (biometrici, dispositivi di sicurezza, autenticazione a più livelli)?

Le forme di autenticazione menzionate sono:
- **Sistemi biometrici**: basati su caratteristiche fisiche uniche (impronte digitali, riconoscimento facciale, scansione dell'iride, riconoscimento vocale)
- **Dispositivi di sicurezza**: token hardware, smart card, chiavi USB, generatori di OTP (One-Time Password)
- **Autenticazione a più livelli (MFA – Multi-Factor Authentication)** : combinazione di due o più fattori (es. qualcosa che sai – password, qualcosa che hai – token, qualcosa che sei – biometria)

### 15. Come funziona il processo di autenticazione verso un server AAA?

Il processo di autenticazione verso un server AAA funziona come segue:
1. Un utente invia il proprio **nome utente e password** (o altre credenziali) a un server AAA (es. RADIUS server)
2. Il server AAA verifica le credenziali confrontandole con un database (locale o directory centrale come LDAP/Active Directory)
3. Se le credenziali sono **corrette**, il server AAA invia un messaggio di **accettazione** (Access-Accept) e concede l'accesso alla rete
4. Se le credenziali sono **errate**, il server AAA invia un messaggio di **rifiuto** (Access-Reject), **bloccando l'accesso** alla rete
5. Durante la sessione, il server AAA può anche gestire l'autorizzazione e la contabilità

---

## Sezione 9.2 – Crittografia

### 16. Quali quattro gruppi di persone hanno storicamente contribuito all'arte della crittografia?

Storicamente quattro gruppi di persone hanno usato e dato il loro contribuito all'arte della crittografia:
1. **I militari** – il ruolo più importante, hanno dato forma alla disciplina nel corso dei secoli
2. **Il corpo diplomatico** – per comunicazioni segrete tra ambasciate e governi
3. **Gli scrittori di diari** – per tenere informazioni private al sicuro
4. **Gli amanti** – per corrispondenze amorose segrete

### 17. Quali erano i due vincoli contrastanti nella crittografia militare tradizionale?

Nelle organizzazioni militari tradizionali, i messaggi da cifrare erano assegnati ad addetti di basso livello e bassa paga. I due vincoli contrastanti erano:
1. **Capacità degli addetti alla codifica** di riuscire a compiere le operazioni necessarie, spesso sul campo di battaglia con equipaggiamento minimo. La crittografia doveva essere abbastanza semplice da poter essere eseguita da personale non altamente specializzato.
2. **Difficoltà nel cambiare velocemente** da un metodo crittografico a un altro, perché significava dover formare una grande quantità di persone. Tuttavia, il pericolo che un addetto alla codifica potesse essere catturato rendeva essenziale la possibilità di cambiare il metodo crittografico all'istante, se necessario.

### 18. Cosa si intende per testo in chiaro (plaintext)?

Il **testo in chiaro (plaintext)** è il messaggio originale da cifrare, prima dell'applicazione del processo di crittografia. È il messaggio nella sua forma leggibile e comprensibile, prima di essere trasformato in testo cifrato.

### 19. Cosa si intende per testo cifrato (ciphertext)?

Il **testo cifrato (ciphertext)** è l'output del processo di cifratura. È il testo in chiaro trasformato tramite una funzione parametrizzata da una chiave. Il testo cifrato viene generalmente trasmesso tramite un messaggero o via radio. Un intruso che intercetta il testo cifrato non può facilmente decifrarlo senza conoscere la chiave di decifrazione.

### 20. Descrivi il modello di cifratura a chiave simmetrica rappresentato nella figura del capitolo.

Il modello di cifratura a chiave simmetrica (Figura 9.1 nel PDF) funziona come segue:
1. Il mittente ha un **testo in chiaro (plaintext)** e una **chiave segreta** (condivisa con il destinatario)
2. Il mittente applica una **funzione di cifratura** \( E_K(P) \) che trasforma il testo in chiaro \(P\) in testo cifrato \(C\) utilizzando la chiave \(K\)
3. Il **testo cifrato** viene trasmesso attraverso un canale insicuro (dove un intruso può intercettarlo)
4. Il destinatario riceve il testo cifrato e applica la **funzione di decifratura** \( D_K(C) \) utilizzando la **stessa chiave segreta** \(K\)
5. Il destinatario ottiene il testo in chiaro originale, con la proprietà che \( D_K(E_K(P)) = P \)

L'intruso (nemico) ascolta il canale e trascrive il testo cifrato, ma non conoscendo la chiave \(K\), non può decifrarlo facilmente.

### 21. Qual è la differenza tra intruso passivo e intruso attivo?

- **Intruso passivo**: si limita ad **ascoltare il canale di comunicazione** e a trascrivere il testo cifrato. Non altera i messaggi, si limita all'intercettazione passiva (eavesdropping).

- **Intruso attivo**: non solo ascolta, ma riesce anche a **registrare i messaggi per poi ritrasmetterli** aggiungendo informazioni oppure a **modificare i messaggi legittimi** prima che raggiungano il destinatario. Può iniettare messaggi falsi, modificare messaggi esistenti, o ritrasmettere messaggi precedentemente intercettati (attacchi replay).

### 22. Cosa sono la crittografia, la criptoanalisi e la crittologia?

- **Crittografia (cryptography)** : l'arte di **inventare** cifrari (metodi di cifratura)
- **Criptoanalisi (cryptanalysis)** : l'arte di **far saltare (rompere o forzare)** i cifrari
- **Crittologia (cryptology)** : il nome collettivo per l'insieme di crittografia e criptoanalisi

### 23. Qual è la differenza tra "decifrare" (decrypt) e "decrittare" (decipher)?

- **Decifrare (decrypt)** : operazione **legittima** di lettura di un messaggio cifrato da parte del destinatario autorizzato, utilizzando la chiave corretta. È l'operazione inversa della cifratura.
- **Decrittare (decipher)** : attività di **decifrazione da parte di un criptoanalista (intruso)** , che cerca di leggere il messaggio senza conoscere la chiave legittima.

### 24. Spiega la notazione C = EK(P) e P = DK(C). Cosa rappresenta?

- \( C = E_K(P) \) indica che la **cifratura** del testo in chiaro \(P\) usando la chiave \(K\) genera il testo cifrato \(C\). \(E\) è la funzione di cifratura (encryption), \(K\) è la chiave, \(P\) è il plaintext, \(C\) è il ciphertext.

- \( P = D_K(C) \) indica la **decifratura** di \(C\) per estrarre il testo in chiaro \(P\). \(D\) è la funzione di decifratura (decryption).

La proprietà fondamentale è che \( D_K(E_K(P)) = P \) (decifrare ciò che è stato cifrato con la stessa chiave restituisce il testo originale). Questa notazione suggerisce che \(E\) e \(D\) sono semplicemente delle funzioni matematiche.

### 25. Cos'è la crittografia simmetrica? Quale caratteristica la rende adatta per un uso diffuso?

La **crittografia simmetrica** è un metodo di codifica in cui il messaggio originale (plaintext) viene trasformato in un messaggio cifrato (ciphertext) utilizzando una **chiave segreta**. Per decifrare il ciphertext e ottenere nuovamente il plaintext, è necessaria la **stessa chiave** utilizzata per la cifratura (da cui il nome "simmetrica").

La caratteristica che la rende adatta per un uso diffuso è che **non richiede che l'algoritmo di crittografia sia tenuto segreto**; l'unica cosa che deve essere mantenuta riservata è la **chiave**. Questo permette di standardizzare gli algoritmi (es. AES, DES) e renderli pubblici, mentre la sicurezza risiede esclusivamente nella segretezza della chiave.

### 26. Nella crittografia simmetrica, cosa deve essere mantenuto segreto? L'algoritmo deve essere segreto?

Nella crittografia simmetrica, **solo la chiave deve essere mantenuta segreta**. L'algoritmo di crittografia stesso non deve essere segreto; anzi, gli algoritmi crittografici standardizzati (come AES) sono pubblici e ampiamente analizzati dalla comunità scientifica. La sicurezza del sistema si basa sulla **difficoltà di indovinare la chiave** (o di decifrare il messaggio senza la chiave), non sul segreto dell'algoritmo. Questo principio è noto come "Kerckhoffs' principle": un sistema crittografico dovrebbe essere sicuro anche se tutto del sistema è noto tranne la chiave.

### 27. Cos'è la crittografia asimmetrica? Qual è la differenza fondamentale rispetto alla crittografia simmetrica?

La **crittografia asimmetrica** (o a chiave pubblica) utilizza un sistema di crittografia in cui le operazioni di cifratura e decifratura sono eseguite con **chiavi diverse**: una **chiave pubblica** (che può essere distribuita liberamente) e una **chiave privata** (che deve essere mantenuta segreta).

La differenza fondamentale rispetto alla crittografia simmetrica è che **le chiavi per cifrare e decifrare sono diverse**: ciò che viene cifrato con la chiave pubblica può essere decifrato solo con la corrispondente chiave privata, e viceversa (in molti algoritmi). Questo elimina il problema della distribuzione della chiave (il "problema dello scambio di chiavi") che affligge la crittografia simmetrica, dove le due parti devono condividere una chiave segreta attraverso un canale sicuro.

### 28. A cosa servono la chiave pubblica e la chiave privata nella crittografia asimmetrica?

- **Chiave pubblica**: viene distribuita liberamente a chiunque voglia comunicare con il proprietario. Può essere usata per **cifrare** messaggi destinati al proprietario (solo il proprietario potrà decifrarli con la chiave privata), o per **verificare** le firme digitali create con la chiave privata.

- **Chiave privata**: viene mantenuta **segreta** dal proprietario. Può essere usata per **decifrare** i messaggi cifrati con la chiave pubblica, o per **firmare** digitalmente i messaggi (chiunque può verificare la firma con la chiave pubblica).

In sintesi:
- **Riservatezza (confidenzialità)** : cifrare con la chiave pubblica del destinatario (solo il destinatario può decifrare)
- **Autenticazione / non ripudio**: cifrare con la propria chiave privata (firma digitale); chiunque può verificare con la chiave pubblica del mittente

### 29. Su cosa si basano gli algoritmi a chiave pubblica (funzioni matematiche vs sostituzioni/permutazioni)?

Gli algoritmi a chiave pubblica si basano su **funzioni matematiche** (in particolare su problemi ritenuti computazionalmente difficili, come la fattorizzazione di grandi numeri – RSA, o il logaritmo discreto – ElGamal, Diffie-Hellman, curve ellittiche – ECC), piuttosto che su **sostituzioni e permutazioni** che sono tipiche della crittografia simmetrica classica (come nel cifrario di Cesare, Vigenère, o nei moderni algoritmi a blocchi come AES che però combinano sostituzioni e permutazioni in modo complesso). L'uso di funzioni matematiche rende possibile la sicurezza anche quando l'algoritmo è noto pubblicamente.

---

## Sezione 9.3 – Protocolli di Autenticazione

### 30. Cos'è l'autenticazione nel contesto dei processi di comunicazione?

L'**autenticazione** è la tecnica usata dai processi per **verificare che la loro controparte nella comunicazione sia veramente chi indica di essere e non un impostore**. È la risposta alla domanda: "Sei veramente chi dici di essere?" La verifica dell'identità di un processo remoto, per combattere gli intrusi attivi e in malafede, è un compito sorprendentemente difficile, che richiede dei protocolli crittografici complessi.

### 31. Qual è la differenza tra autenticazione e autorizzazione? Fai un esempio concreto.

- **Autenticazione**: riguarda il problema di **assicurare l'identità** del processo con cui si sta comunicando ("Chi sei?"). Risponde alla domanda: "La richiesta viene veramente da un processo di Scott?"

- **Autorizzazione**: si occupa, invece, di stabilire **che cosa può fare** un processo ("Cosa ti è permesso fare?"). Risponde alla domanda: "Scott è autorizzato a cancellare ricettario.old?"

**Esempio concreto**: un processo client che contatta un file server e gli comunica: "Sono il processo di Scott e voglio cancellare il file ricettario.old". Il file server ha bisogno delle risposte a due domande:
1. La richiesta viene veramente da un processo di Scott? → **autenticazione**
2. Scott è autorizzato a cancellare ricettario.old? → **autorizzazione**

La richiesta può essere evasa soltanto dopo che entrambe le domande hanno ottenuto una risposta certa e affermativa. Una volta che il file server sa con chi sta parlando (autenticazione), il controllo dell'autorizzazione consiste solamente in una ricerca dentro tabelle locali o in un database.

### 32. Perché l'autenticazione è considerata la domanda cruciale rispetto all'autorizzazione?

Una volta che il file server **sa con chi sta parlando** (ha autenticato l'utente), il controllo dell'autorizzazione consiste solamente in una ricerca dentro tabelle locali o in un database (relativamente semplice). Se invece l'autenticazione fallisce (non si è sicuri dell'identità), l'autorizzazione non può nemmeno essere valutata, perché non si sa quali privilegi attribuire a un'entità non identificata. L'autenticazione è il prerequisito fondamentale per qualsiasi controllo degli accessi basato sull'identità.

### 33. Cos'è l'IP spoofing? Perché l'uso dell'indirizzo IP non è un metodo di autenticazione sicuro?

L'**IP spoofing** è una tecnica in cui si creano datagrammi IP con **indirizzi IP falsi** (falsificati). Questo è possibile se si ha accesso al kernel del sistema operativo (o se si utilizza un sistema operativo che permette di impostare manualmente l'indirizzo sorgente nei pacchetti).

L'uso dell'indirizzo IP non è un metodo di autenticazione sicuro perché **chiunque può falsificare l'indirizzo IP sorgente** nei pacchetti che invia. Un attaccante può far sembrare che un pacchetto provenga da un host di fiducia quando in realtà proviene da un host malevolo. Basare l'autenticazione sull'indirizzo IP è quindi rischioso e non sufficiente in ambienti non fidati.

### 34. Quale problema ha l'autenticazione tramite password (es. Telnet)?

Un approccio comune per l'autenticazione è l'uso di password (come nei PIN dei dispositivi bancari o nei login dei sistemi operativi). Questo metodo **non è completamente sicuro** perché un malintenzionato può **intercettare la password** mentre viene trasmessa sulla rete. L'esempio fornito è **Telnet**, che invia la password **in chiaro** (senza crittografia). Se qualcuno monitora la rete locale (con uno sniffer), può rubare le password di login.

### 35. Cos'è un nonce in un protocollo di autenticazione? A cosa serve?

Un **nonce** (numero usato una sola volta) è un numero univoco che viene utilizzato **una sola volta** nel protocollo. Serve a **prevenire attacchi di replay** (ritrasmissione di messaggi vecchi). Poiché il nonce è diverso ogni volta che il protocollo viene eseguito, un attaccante che intercetta una risposta valida non può riutilizzarla in una sessione successiva (il nonce sarebbe diverso). I nonce sono tipicamente generati come numeri casuali o sequenziali.

### 36. Descrivi il protocollo di autenticazione basato su nonce con crittografia simmetrica.

Il protocollo di autenticazione basato su nonce con crittografia simmetrica funziona come segue:
1. Alice invia a Bob un messaggio: "**Sono Alice**" (identificazione)
2. Bob sceglie un **nonce** \( R \) (numero casuale) e lo invia ad Alice
3. Alice **cifra il nonce** con la sua **chiave segreta** (condivisa con Bob) e lo rimanda a Bob
4. Bob **decifra** il messaggio ricevuto con la stessa chiave segreta. Se riesce a decifrare e a **verificare che il valore ottenuto è \( R \)** (il nonce che ha inviato), allora Alice è **autenticata**.

Questo protocollo funziona perché solo Alice (e Bob) conoscono la chiave segreta; solo Alice poteva cifrare \( R \) correttamente.

### 37. Descrivi il protocollo di autenticazione basato su nonce con crittografia asimmetrica.

Il protocollo di autenticazione basato su nonce con crittografia asimmetrica (a chiave pubblica) funziona come segue:
1. Alice invia a Bob un messaggio: "**Sono Alice**" (identificazione)
2. Bob sceglie un **nonce** \( R \) e lo invia ad Alice
3. Alice **cifra il nonce** con la sua **chiave privata** e lo invia a Bob
4. Bob **decifra** il messaggio ricevuto con la **chiave pubblica di Alice**. Se ottiene il valore corretto \( R \), allora Alice è autenticata.

Questo protocollo è sicuro quanto il **sistema di distribuzione delle chiavi pubbliche** (PKI). È essenziale che Bob sia sicuro che la chiave pubblica che usa per decifrare sia effettivamente quella di Alice. Se un malintenzionato riesce a sostituire la chiave pubblica di Alice con la propria (man-in-the-middle), può **spacciarsi per Alice**.

### 38. Da cosa dipende la sicurezza del protocollo di autenticazione a chiave pubblica?

La sicurezza del protocollo di autenticazione a chiave pubblica dipende dall'**affidabilità del sistema di distribuzione delle chiavi pubbliche (PKI – Public Key Infrastructure)** . È necessario che la chiave pubblica usata per verificare l'identità sia **autentica** (cioè appartenga veramente alla persona o entità dichiarata). Se un malintenzionato riesce a far sì che Bob usi la **chiave pubblica sbagliata** (ad esempio la propria), può **spacciarsi per Alice** (firmando il nonce con la propria chiave privata, che corrisponde a una chiave pubblica falsamente attribuita ad Alice). Per questo motivo sono necessari **certificati digitali** e **Autorità di Certificazione (CA)** per garantire l'associazione tra identità e chiave pubblica.

### 39. Cosa è OAuth2? Quali sono i suoi punti di forza e le sue vulnerabilità?

**OAuth2** è un protocollo di autorizzazione (non di autenticazione, anche se spesso usato insieme all'autenticazione). Permette a un'applicazione di accedere a risorse protette su un server per conto di un utente, senza dover condividere le credenziali dell'utente.

**Punti di forza**:
- Semplice da implementare
- Fornisce un'autorizzazione lato server del codice (token di accesso)

**Vulnerabilità**:
- Vulnerabile nella gestione di diversi set di codice (alcune implementazioni)
- Può avere seri effetti sui siti connessi a un sistema compromesso

### 40. Cosa è RADIUS? Quali sono i suoi vantaggi e svantaggi?

**RADIUS** (Remote Authentication Dial-In User Service) è un protocollo AAA (Authentication, Authorization, Accounting) ampiamente utilizzato per l'accesso remoto a reti (es. dial-up, VPN, Wi-Fi enterprise).

**Vantaggi**:
- Meccanismo efficace per fornire accesso multiplo agli amministratori
- Assegna un'identità unica a ogni utente in una sessione

**Svantaggi**:
- L'implementazione iniziale può essere **complessa e costosa**
- La comunicazione tra client RADIUS (es. NAS – Network Access Server) e server RADIUS può richiedere configurazioni specifiche (shared secret, porte UDP 1812/1813)

### 41. Cosa è SAML? Quali sono i suoi vantaggi e svantaggi?

**SAML** (Security Assertion Markup Language) è un linguaggio basato su XML per lo scambio di dati di autenticazione e autorizzazione tra domini di sicurezza. È usato per il **Single Sign-On (SSO)** , dove un utente si autentica una sola volta e accede a più servizi (provider di servizi) tramite un Identity Provider (IdP).

**Vantaggi**:
- Riduce i costi amministrativi per gli utenti finali (non devono ricordare password multiple)
- Offre un **unico punto di accesso** per autenticarsi attraverso vari fornitori di servizi

**Svantaggi**:
- Dipende **fortemente dal fornitore di identità (IdP)** : se l'IdP è giù, nessun servizio è accessibile
- Gestisce tutti i dati in un unico formato **XML** (che può essere verbose e pesante)
- La configurazione può essere complessa

---

## Sezione 9.4 – Certificati Digitali

### 42. A cosa servono i certificati digitali?

I **certificati digitali** servono a **legare un'identità (persona, organizzazione, server) a una chiave pubblica** in modo verificabile e trustato. Sono l'infrastruttura che rende sicuro l'uso della crittografia asimmetrica, perché permettono a una parte di essere sicura che una determinata chiave pubblica appartenga effettivamente alla controparte dichiarata. I certificati sono rilasciati e firmati da un'entità fidata chiamata **Autorità di Certificazione (CA – Certification Authority)** .

### 43. Cosa contiene tipicamente un certificato digitale?

Un certificato digitale (es. X.509) contiene tipicamente:
- **Informazioni sull'identità del soggetto** (nome, organizzazione, paese, etc.)
- **Chiave pubblica del soggetto**
- **Periodo di validità** (data di inizio e fine)
- **Informazioni sul certificatore (CA)** che ha emesso il certificato
- **Numero di serie** (univoco)
- **Algoritmo di firma** utilizzato
- **Firma digitale** della CA sull'intero certificato (hash del certificato cifrato con la chiave privata della CA)

### 44. Cos'è un hash firmato in relazione a un certificato?

Un **hash firmato** (o firma digitale) in un certificato è il risultato di:
1. Calcolare l'**hash** (impronta digitale) del certificato (escluso il campo della firma stessa) con una funzione di hash crittografico (es. SHA-256)
2. **Cifrare l'hash** con la **chiave privata della CA** che ha emesso il certificato
3. Il risultato è la **firma digitale** del certificato

Chiunque possieda la **chiave pubblica della CA** (che è pre-installata e considerata fidata) può verificare che il certificato non è stato alterato decifrando la firma, ricalcolando l'hash del certificato, e confrontando i due valori. Se corrispondono, il certificato è autentico e integro.

### 45. Quale ente rilascia e firma i certificati digitali?

I certificati digitali sono rilasciati e firmati da un'**Autorità di Certificazione (CA – Certification Authority)** . Le CA sono enti fidati (es. DigiCert, Let's Encrypt, GlobalSign, IdenTrust, e molte altre) che verificano l'identità di chi richiede un certificato prima di rilasciarlo. I browser e i sistemi operativi includono una lista di CA fidate (trust store) con le loro chiavi pubbliche pre-installate, che permette di verificare la catena di fiducia dei certificati.

### 46. Qual è il ruolo dell'Autorità di Certificazione (CA) nella gestione dei certificati?

L'**Autorità di Certificazione (CA)** ha un ruolo centrale nella PKI (Public Key Infrastructure):
1. **Verifica l'identità** del richiedente (con diversi livelli di validazione: DV – Domain Validation, OV – Organization Validation, EV – Extended Validation)
2. **Genera o approva** la coppia di chiavi (o ne verifica il possesso)
3. **Rilascia il certificato** firmandolo con la propria chiave privata
4. **Mantiene una lista di revoche** (CRL – Certificate Revocation List) o fornisce servizi OCSP (Online Certificate Status Protocol) per indicare quali certificati non sono più validi (es. chiave compromessa, certificato scaduto, etc.)
5. **Garantisce l'affidabilità** della catena di fiducia: il certificato della CA radice è auto-firmato e distribuito nei trust store dei client

---

## Domande trasversali e di confronto

### 47. Confronta crittografia simmetrica e asimmetrica in termini di: numero di chiavi, distribuzione delle chiavi, utilizzo tipico.

| Caratteristica | Crittografia Simmetrica | Crittografia Asimmetrica |
|----------------|------------------------|--------------------------|
| **Numero di chiavi** | Una chiave (condivisa) | Due chiavi per entità (pubblica + privata). Per comunicazione bidirezionale tra N parti, servono 2N chiavi (N pubbliche + N private) |
| **Distribuzione delle chiavi** | Problema difficile: le due parti devono condividere la chiave segreta tramite un canale sicuro (o incontrandosi fisicamente) | Facilitata: le chiavi pubbliche possono essere distribuite liberamente anche su canali insicuri; la chiave privata rimane segreta. Serve PKI/Certificati per l'autenticità |
| **Utilizzo tipico** | Cifratura di grandi quantità di dati (file, dischi, comunicazioni bulk) perché gli algoritmi simmetrici (es. AES) sono molto più veloci | Scambio di chiavi (es. Diffie-Hellman, RSA per cifrare chiave simmetrica), firme digitali (autenticazione, non ripudio), cifratura di piccoli dati (es. chiavi di sessione) |

### 48. Confronta i protocolli di autenticazione OAuth2, RADIUS e SAML in termini di: complessità di implementazione, gestione delle identità, formato dei dati.

| Caratteristica | OAuth2 | RADIUS | SAML |
|----------------|--------|--------|------|
| **Complessità implementazione** | Semplice (sono disponibili librerie per molti linguaggi) | Complessa (infrastruttura client-server, configurazione shared secret, porte UDP specifiche) | Complessa (gestione XML, configurazione IdP e SP, metadati) |
| **Gestione delle identità** | Basata su token e scopes; delega l'autenticazione a un Identity Provider (es. Google, Facebook, Auth0) | Centralizzata su server RADIUS; utenti in database locale/LDAP/Active Directory | Centralizzata su Identity Provider (IdP); funziona con directory esistenti (LDAP, Active Directory) |
| **Formato dei dati** | Token in JSON (JWT – JSON Web Tokens) o stringhe opache; comunicazione su HTTP/HTTPS (API REST) | Pacchetti UDP (porta 1812/1813) con attributi codificati in formato RADIUS (RFC 2865/2866) | XML (SOAP) over HTTP/HTTPS |

### 49. Spiega la relazione tra autenticazione, autorizzazione e contabilità nel modello AAA.

Nel modello **AAA** (Authentication, Authorization, Accounting), i tre pilastri sono in sequenza logica:

1. **Autenticazione (Authentication)** : primo passo. L'utente dimostra la propria identità (es. fornendo credenziali). Il sistema verifica che l'utente sia chi dice di essere. Se fallisce, il processo si ferma.

2. **Autorizzazione (Authorization)** : secondo passo. Una volta autenticato, il sistema determina **quali risorse e servizi** l'utente può utilizzare e **quali operazioni** può eseguire (es. leggere file, stampare, accedere a Internet). L'autorizzazione si basa su politiche e liste di controllo degli accessi (ACL).

3. **Contabilità (Accounting)** : terzo passo (parallelo). Durante l'uso dei servizi, il sistema **registra** le attività dell'utente: orario di connessione, disconnessione, risorse utilizzate, quantità di dati trasferiti, etc. Questi log servono per auditing, fatturazione (billing), analisi di sicurezza, e forensic.

### 50. Perché il controllo degli accessi basato esclusivamente sull'indirizzo IP non è considerato sicuro?

Il controllo degli accessi basato esclusivamente sull'indirizzo IP non è considerato sicuro per le seguenti ragioni:

1. **IP spoofing**: gli indirizzi IP possono essere **falsificati** (spoofed). Un attaccante può creare pacchetti con un indirizzo IP sorgente falso, facendoli sembrare provenienti da un host fidato.

2. **Assenza di autenticazione**: l'indirizzo IP non autentica la persona o il processo; autentica solo la posizione di rete, che può essere condivisa (es. NAT) o può essere compromessa (es. un host fidato che viene infettato).

3. **Dinamicità**: molti indirizzi IP sono **assegnati dinamicamente** (DHCP). Un utente legittimo oggi potrebbe avere un IP diverso domani, e un attaccante potrebbe ottenere lo stesso IP che era di un utente fidato.

4. **NAT**: migliaia di dispositivi possono condividere lo stesso indirizzo IP pubblico (NAT). Non si può distinguere quale dispositivo specifico sta facendo la richiesta.

5. **Man-in-the-middle**: un attaccante sulla stessa rete locale (o che controlla un router) può intercettare e modificare il traffico, indipendentemente dall'indirizzo IP.

Per questi motivi, l'indirizzo IP può essere usato come **fattore aggiuntivo** (es. per restrizioni geografiche o whitelisting in contesti limitati), ma non come unico meccanismo di autenticazione o controllo degli accessi in ambienti sensibili.