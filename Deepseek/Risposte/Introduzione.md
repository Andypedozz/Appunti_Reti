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
