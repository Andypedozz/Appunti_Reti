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


## Livello Datalink

### Sezione 3.1 – Data Link Control
1. Quali sono i cinque servizi principali offerti dal livello collegamento?
2. Cosa si intende con il termine "framing" e a cosa serve?
3. Perché il servizio di "indirizzamento" è essenziale nei canali condivisi?
4. Che differenza c'è tra un collegamento dedicato e un canale condiviso?

### Sezione 3.2 – LAN Cablate: Ethernet
5. In che anno e da chi è stato sviluppato il progetto originale di Ethernet?
6. Quale ente ha standardizzato le reti Ethernet e con quale progetto?
7. In quali due sottolivelli viene suddiviso il livello Data Link nello standard IEEE 802?
8. Che ruolo ha il sottolivello LLC (Logical Link Control)?
9. Cosa definisce il sottolivello MAC (Medium Access Control)?
10. Elenca i 7 campi di un frame Ethernet standard e la loro dimensione in byte.
11. A cosa serve il campo "Preambolo" e di quanti byte è composto?
12. Cosa indica il campo "Lunghezza o tipo" in un frame Ethernet?
13. Qual è la dimensione minima e massima del campo dati in un frame Ethernet?
14. Cosa significa l'acronimo CSMA/CD e a cosa serve?
15. Perché anche con CSMA possono verificarsi delle collisioni?
16. A cosa corrisponde il "tempo di vulnerabilità" nel protocollo CSMA?
17. Qual è la lunghezza massima di una rete Ethernet standard a 10 Mbps e perché?
18. Quali erano i quattro obiettivi principali dello standard Fast Ethernet (802.3u)?
19. Che differenza c'è tra una connessione half-duplex e full-duplex in Ethernet?
20. Perché nelle reti Gigabit Ethernet half-duplex non è praticamente utilizzabile?
21. Cosa determina la lunghezza massima del cavo nelle reti full-duplex?
22. Spiega il significato dei nomi: 10Base5, 10Base2, 10BaseT, 100BaseT.
23. Quale topologia viene utilizzata a partire da 10BaseT?
24. Cosa sono un bridge e uno switch? Quale vantaggio portano in termini di domini di collisione?
25. Che tipo di codifica viene usata in Fast Ethernet (100BaseT) e perché non si usa più Manchester?

### Sezione 3.3 – LAN Wireless: IEEE 802.11 e Bluetooth
26. Quali sono le due bande di frequenza più comuni per il Wi-Fi?
27. Quale standard Wi-Fi è stato il primo a funzionare su entrambe le bande 2,4 e 5 GHz?
28. Quale standard Wi-Fi è il più recente tra quelli elencati e quale velocità massima dichiara?
29. Qual è il nuovo schema di denominazione della Wi-Fi Alliance (es. Wi-Fi 4, 5, 6)?
30. Quali sono le due modalità operative del Wi-Fi (Ad-hoc vs infrastruttura)?
31. Cosa sono un BSS (Basic Service Set) e un ESS (Extended Service Set)?
32. Che differenza c'è tra DCF (Distributed Coordination Function) e PCF (Point Coordination Function) nel MAC Wi-Fi?
33. Perché le reti wireless usano CSMA/CA invece di CSMA/CD?
34. Spiega a cosa serve e come funziona il meccanismo RTS/CTS (Request to Send / Clear to Send).
35. Cosa significa l'acronimo FHSS e a cosa serve nel Bluetooth?
36. Quanti dispositivi attivi possono essere collegati contemporaneamente in una piconet Bluetooth?
37. Che differenza c'è tra una Piconet e una Scatternet?
38. Quali sono i due tipi di collegamento supportati da Bluetooth (SCO e ACL)? A cosa servono principalmente?

### Sezione 3.4 – LAB (Comandi di rete)
39. A cosa serve il comando `ipconfig`?
40. Come si utilizza `ping` per verificare la connettività di rete?
41. Che differenza c'è tra `tracert` e `pathping`?
42. Cosa mostra il comando `netstat`?
43. A cosa serve il comando `arp` e cosa fa il protocollo ARP?

### Domande trasversali e di confronto
44. Quali sono le principali differenze nella gestione delle collisioni tra Ethernet cablata (CSMA/CD) e Wi-Fi (CSMA/CA)?
45. Confronta le velocità e i mezzi trasmissivi di Ethernet standard, Fast Ethernet e Gigabit Ethernet.
46. Quali problematiche specifiche (interferenza, potenza, sicurezza) riguardano le reti wireless e non quelle cablate?
47. Perché la codifica Manchester non è adatta per Fast Ethernet a 100 Mbps su doppino?