Certamente. Ecco le risposte alle domande sul capitolo 3 ("Livello Collegamento"), riprese una per una e sviluppate in modo meno sintetico, basandosi esclusivamente sul contenuto del PDF.

---

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