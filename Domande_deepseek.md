## 1 Introduzione
### Sezione 1.1: Scopi delle Reti e Loro Classificazione

1.  Quali sono i quattro principali parametri che influenzano le prestazioni di una rete di calcolatori come sistema di telecomunicazione? (Consegna, Precisione, Tempestività, Jitter)
2.  Descrivi le differenze tra comunicazione Simplex, Half-Duplex e Full-Duplex, fornendo un esempio per ciascuna.
3.  Spiega il paradigma Client-Server, elencando almeno due vantaggi e due svantaggi rispetto all'architettura Peer-to-Peer (P2P).
4.  In che modo il modello Peer-to-Peer (P2P) puro gestisce l'assenza di un server centrale per la connessione tra i nodi? (Overlay network virtuale)
5.  Qual è la principale differenza tra un "sistema distribuito" e una semplice "rete di calcolatori"? (Ruolo del middleware)

### Sezione 1.1.2: Grids, Cloud e Virtualizzazione

6.  Definisci i tre principali modelli di servizio del Cloud Computing: SaaS, PaaS e IaaS. In quale di questi l'azienda cliente ha il pieno controllo sulle applicazioni ma non sull'infrastruttura sottostante? (PaaS)
7.  Confronta i modelli di deployment Public Cloud, Private Cloud e Hybrid Cloud, evidenziando vantaggi e svantaggi in termini di sicurezza e costi.
8.  Cosa si intende per Virtualizzazione? Descrivi il concetto di "incapsulamento" in questo contesto.
9.  Qual è la funzione del middleware in una rete Grid? (Gestire e coordinare le risorse condivise).
10. Quali sono i tre nodi che compongono una rete di Grid Computing? (Nodo di controllo, Provider, Utente)

### Sezione 1.2: Modelli di Riferimento OSI e TCP/IP

11. Spiega il principio di "incapsulamento" (o incapsulamento) nei modelli a strati. Cosa aggiunge tipicamente ogni livello ai dati ricevuti dal livello superiore? (Header e talvolta Tail).
12. Quali sono le principali differenze tra un servizio di rete "orientato alla connessione" (connection-oriented) e uno "senza connessione" (connectionless)? A quale sistema della vita reale vengono paragonati?
13. Descrivi le funzioni principali del Livello Fisico, del Livello Collegamento Dati e del Livello Rete nel modello OSI.
14. Quanti e quali livelli compongono il modello TCP/IP? A quali livelli OSI corrispondono approssimativamente i livelli "Network Interface" e "Application" del modello TCP/IP?
15. Qual è il ruolo del protocollo IP (Internet Protocol) e del protocollo TCP (Transmission Control Protocol) all'interno della suite TCP/IP?
16. Quali sono le principali differenze tra il modello OSI e quello TCP/IP in termini di numero di livelli e approccio (orizzontale vs. verticale)?

### Sezione 1.3: Esempi di Reti e Standardizzazione (Topologie, Tecnologie, Estensioni)

17. Descrivi la topologia a stella (star). Qual è il suo principale punto di vulnerabilità e perché è ancora ampiamente utilizzata?
18. Qual è il numero di collegamenti necessari per connettere n dispositivi in una topologia a maglia completa (full mesh)? (n * (n - 1))/2
19. Distingui le reti broadcast dalle reti point-to-point (unicasting).
20. Classifica le reti in base all'estensione geografica (PAN, LAN, MAN, WAN), indicando per ciascuna un esempio d'uso tipico.
21. Cos'è una rete a commutazione di pacchetto (packet-switched) e in cosa differisce da una a commutazione di circuito (circuit-switched)?

### Sezione 1.3.4: Standard di Rete e Organizzazioni

22. Qual è la differenza tra uno standard proprietario e uno standard aperto? Perché gli standard aperti hanno avuto più successo nel settore delle reti?
23. Quali sono le principali organizzazioni di standardizzazione citate nel testo? Di quale famoso modello è responsabile l'ISO? (OSI)
24. Cosa significa l'acronimo RFC? Descrivi brevemente le fasi che un documento deve attraversare per diventare un "Internet Standard". (Proposed -> Draft -> Internet Standard)
25. Qual è il ruolo dell'ICANN e dell'IANA nella gestione di Internet? (Assegnazione indirizzi IP, gestione DNS, parametri protocolli).
26. Cosa sono i RIR (Regional Internet Registries)? Fai un esempio di un RIR europeo. (RIPE NCC)

Ecco una lista di domande d'esame basate sul Capitolo 2 (Livello Fisico) del file che hai fornito. Le domande coprono i segnali analogici/digitali, la multiplexing, le metriche di prestazione, i mezzi guidati (doppino, coassiale, fibra) e i mezzi wireless/satellitari.

## 2 Livello Fisico
### Sezione 2.1: Basi Teoriche della Comunicazione e Trasmissione Fisica dei Dati

1. Quali sono le principali differenze tra un segnale analogico e un segnale digitale? Fornisci un esempio per ciascuno.
2. Descrivi i tre parametri fondamentali che identificano un'onda sinusoidale (ampiezza, frequenza, fase) e il loro significato fisico.
3. Cosa si intende per "larghezza di banda" in Hertz e in bps? Qual è la relazione tra queste due definizioni?
4. Spiega il concetto di attenuazione di un segnale. Come viene misurata e con quale dispositivo si può compensare?
5. Cosa sono le armoniche e qual è il ruolo della serie di Fourier nell'analisi dei segnali periodici?
6. Distingui i segnali in banda base dai segnali a banda passante.

### Sezione 2.1.2: Modalità di Multiplazione (Multiplexing)

7. Che cos'è il multiplexing e perché è importante nelle reti di telecomunicazione?
8. Qual è la funzione di un multiplexer e di un demultiplexer in un sistema di comunicazione condiviso?

### Sezione 2.1.3: Criteri di Valutazione delle Reti (QoS)

9. Spiega la differenza tra larghezza di banda e throughput, utilizzando un'analogia (es. un tubo e il flusso d'acqua).
10. Descrivi i quattro contributi principali al ritardo totale (latenza) in una rete: tempo di propagazione, tempo di trasmissione, tempo di accodamento e ritardo di elaborazione.
11. Cosa si intende per Round-Trip Time (RTT)? In cosa differisce dalla latenza "one-way"?
12. Qual è il significato fisico del prodotto "larghezza di banda × ritardo"? Perché è importante nelle reti ad alte prestazioni?
13. Definisci il jitter. Per quali tipi di applicazioni è particolarmente problematico e come può essere mitigato?

### Sezione 2.2: Mezzi di Trasmissione Guidati

14. Descrivi il principio di funzionamento del doppino intrecciato (twisted pair). Perché i conduttori vengono attorcigliati?
15. Quali sono le differenze principali tra cavo UTP e STP in termini di schermatura, vantaggi e svantaggi?
16. Elenca le categorie di cavo Ethernet più comuni (Cat5e, Cat6, Cat7, Cat8) specificando per ciascuna la velocità massima tipica e un utilizzo consigliato.
17. Quale connettore è standard per i cavi Ethernet in rame? Che differenza c'è tra RJ45 e 8P8C?
18. Spiega la struttura del cavo coassiale. Quali sono i connettori più comuni (es. BNC)?
19. Descrivi il principio di funzionamento della fibra ottica basato sulla riflessione interna totale.
20. Distingui la fibra monomodale dalla fibra multimodale in termini di struttura, propagazione della luce e tipica applicazione.
21. Quali sono i principali vantaggi della fibra ottica rispetto al cavo in rame? E quali i principali svantaggi?
22. Nomina almeno tre tipi di connettori per fibra ottica (es. FC, ST, SC, LC) indicando una caratteristica distintiva di ciascuno.
23. Cosa sono le "onde convogliate" (Power Line Communication)? In quali contesti vengono utilizzate?

### Sezione 2.3: Mezzi di Trasmissione Wireless

24. Quali sono le tre macro-tipologie di segnali wireless menzionate nel testo? Per ciascuna, indica una caratteristica principale.
25. Cosa si intende per banda ISM? Fornisci almeno due esempi di frequenze ISM e un dispositivo che le utilizza.
26. Quali sono i principali fattori che limitano la copertura e l'affidabilità delle comunicazioni wireless?
27. Perché la sicurezza è una preoccupazione particolare nelle reti wireless rispetto a quelle cablate?

### Sezione 2.3.1: Reti Satellitari

28. Descrivi le tre categorie di satelliti in base all'orbita (GEO, MEO, LEO), specificando per ciascuna l'altitudine tipica e un'applicazione d'esempio.
29. Perché i satelliti GEO vengono definiti "geostazionari"? Quanti ne servono almeno per coprire l'intero globo?
30. Quali sono i punti di forza della fibra ottica rispetto ai satelliti e viceversa? In quali contesti le due tecnologie sono complementari?
31. Cosa si intende per "costellazione" di satelliti LEO? Come comunicano tra loro i satelliti in questo tipo di rete?

### Tabella Riassuntiva (Figura 2.12)

32. Completa la seguente tabella comparativa (concetti generali):
    - Quale mezzo guidato ha la maggiore attenuazione? (UTP)
    - Quale mezzo offre la migliore sicurezza intrinseca? (Fibra ottica)
    - Quale mezzo guidato è generalmente il più economico? (UTP)
    - Quale mezzo wireless ha generalmente il costo più elevato? (Satellite)