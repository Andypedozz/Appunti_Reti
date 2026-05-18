
## Introduzione
1. I quattro principali parametri che influenzano le prestazioni di una rete sono la sua capacità di recapitare un messaggio al corretto destinatario o destinatari, la celerità ed efficienza con cui il messaggio viene recapitato e il jitter, ovvero un valore di quanto è variante la latenza della comunicazione durante la trasmissione dei pacchetti.
2. La comunicazione Simplex è una modalità di comunicazione che utilizza tutta la banda disponibile sul mezzo in quanto un nodo è sempre mittente e l'altro sempre ricevente, senza bisogno di alcun feedback dal ricevente, come nel caso della televisione; la modalità half-duplex consente agli attori di cambiare il loro ruolo tra mittente e ricevente, ma non è possibile ricevere e trasmettere simultaneamente, come nei walkie-talkie; la comunicazione in full duplex consente invece di ricevere e trasmettere simultaneamente, come nelle chiamate telefoniche, ma non è possibile utilizzare tutta la larghezza di banda per la comunicazione a causa dei controlli necessari alla gestione della comunicazione.
3. Il paradigma Client Server è un modello di comunicazione che sta alla base di Internet, che prevede la presenza di uno o più Client, che effettuano delle richieste di risorse di vario tipo, e restano in attesa di una Risposta da parte di un computer più potente detto Server, che in assenza di richieste attende, e all'occorrenza effettua elaborazioni o fornisce risorse ai client.
I vantaggi di questa architettura stanno nel fatto che la maggior parte della sicurezza e intelligenza sta in un singolo Nodo, ovvero il server, e aumentare le risorse della rete corrisponde ad aumentare le risorse del server; il problema principale sta nel fatto che se accade un guasto al server, tutta la rete è compromessa; nel modello P2P invece non vi sono ruoli fissi tra Client e Server, ma tutti i nodi sono interconnessi ma indipendenti, con loro sicurezza e potenza computazionale; il principale vantaggio è che se avviene un guasto a un nodo, la rete non è compromessa; uno svantaggio è che la scalabilità della rete non è centralizzata come in Client Server.
5. Un sistema distribuito è un software che esegue su un a rete di calcolatori; potremmo dire che la rete di calcolatori è il supporto fisico (o logico) che permette l'esecuzione del sistema distribuito (come ad esempio il World Wide Web che esegue sulla rete di calcolatori Internet). Nei sistemi distribuiti assume un ruolo fondamentale il middleware, ovvero parti di software che si occupano della coerenza del sistema distribuito, come allocazione delle risorse o sincronizzazione dei dati tra i vari nodi.

## Grids, Cloud e Virtualizzazione
6. - SaaS è un modello di servizio Cloud che sta per Software as a Service, e riguarda quei fornitori di servizi che offrono solamente programmi on demand al cliente.
   - PaaS è un modello che riguarda quei fornitori di servizi che offrono piattaforme di sviluppo ai clienti.
   - IaaS riguarda quei fornitori di servizi che offrono il pieno controllo dell'infrastruttura sottostante, come sistema operativo, configurazione di rete, sviluppo e programmi al cliente.

7. I modelli di deploy Public, Private e Hybrid differiscono in base al grado di disponibilità che offrono: la Public viene messa a disposizione tramite internet a una larga fetta di utenti: è flessibile, con costi limitati, scalabile, ma pecca in sicurezza, di fatti è adibita per utenti che non devono gestire dati sensibili.
Private è un modello di deploy mirato per una singola organizzazione, ma ha costi maggiori. Quella hybrid è un modello che combina più modelli, come ad esempio un implementazione che esegue attività non critiche come sviluppo e testing su un cloud pubblico, mentre le attività come gestione di dati sensibili vengono effettuate su un cloud privato.

8. La virtualizzazione è una tecnica che consente di astrarre macchine hardware, e simularne il funzionamento ma a livello software. Questo porta numerosi benefici, come per le macchine virtuali che implementano degli spazi computazionali isolati, e il cui spostamento è facile quanto spostare un file. Tali ambienti virtualizzati sono incapsulati, in quanto un processo che esegue su una macchina virtuale non può uscire da quello spazio di memoria, isolando eventuali guasti.

9. Una rete Grid è un insieme di dispositivi che collaborano condividendo risorse a un compito solitamente computazionalmente costoso e pesante. In questo tipo di rete si distinguono 3 ruoli:
* Nodo di controllo: un server che amministra la rete e tiene conto delle risorse
* Provider: un computer che mette a disposizione le proprie risorse al pool di rete
* Client: un computer che utilizza le risorse messe a disposizione sulla rete per effettuare processing.
Il software che si occupa di mantenere traccia coerente delle risorse disponibili sulla rete è il middleware.

11. Il principio di incapsulamento nei modelli a strati è necessario a gestire la complessità dello stack tecnologico che abilita le reti di calcolatori odierne. Di fatti, ogni strato dei modelli come OSI o TCP/IP ha uno specifico insieme di funzioni, che offrono ai livelli superiori come servizi pronti e i cui dettagli sono nascosti. Tipicamente ogni livello aggiunge ai dati ricevuti dal livello superiore un header, e talvolta Tail, che servono ai livelli inferiori per poter gestire la trasmissione correttamente, e all'arrivo al nodo ricevente per poter decapsulare il messaggio e ottenere i dati desiderati.

12. Le principali differenze tra un servizio connection oriented e uno connectionless sta nel fatto che quelli connection oriented si basano sul fatto che la comunicazione avvenga tramite l'instaurazione di una connessione, che venga poi utilizzata durante tutto lo scambio di dati, e poi venga chiusa, come il sistema telefonico. Un servizio connectionless invece funziona come la posta, ovvero non vi è l'instaurazione di una connessione fissa, ma la semplice spedizione di un messaggio alla volta, ognuno contenente l'indirizzo del destinatario, e i messaggi possono perciò percorrere tragitti diversi nella rete dal mittente al destinatario.

13. Le funzioni principali del livello Fisico sono:
    * ricevere un flusso di bit codificato dal livello datalink
    * tradurli in segnali fisici adatti al mezzo fisico, che sia fibra, rame o onde radio.
    * Definire la topologia della rete
    * Gestire la sincronizzazione dei bit e la gestione del flusso.
    Le funzioni del livello Datalink sono:
    * Indirizzamento hardware (MAC Address)
    * Correzione degli errori
    * Controllo dell'accesso al mezzo
    * Gestione dei collegamenti punto-punto
    Le funzioni del livello Rete sono:
    * Indirizzamento logico (IP Address)
    * Instradamento dei pacchetti tra diverse LAN (Routing)
    * Gestione della congestione

14. Il modello TCP/IP è costituito da 4 layer:
   * Application
   * Transport
   * Internet
   * Network Interface
I livelli Application e Network Interface corrispondono, nel modello OSI, ai livelli Applicazione, Presentazione e Sessione, e ai livelli Datalink e Fisico.
15. Il ruolo del protocollo IP è quello di identificare a livello logico i nodi sulla rete, e di effettuare l'instradamento dei pacchetti tra LAN diverse. Il protocollo TCP invece lavora al livello 4 (trasporto), e si occupa di gestire la trasmissione dei segmenti end-to-end, da una LAN a un altra, garantendo la consegna, il corretto ordinamento dei pacchetti, la correzione degli errori, mitigare eventuali congestioni, e di effettuare anche multiplexing e demultiplexing, delle connessioni, che potrebbero essere multiple anche tra due singoli nodi, identificando i vari processi sulle macchine tramite le porte.
16. Le principali differenze tra il modello OSI e TCP/IP sono che il modello OSI è un modello teorico che sviscera in modo più dettagliato la struttura dello stack di rete, mentre il modello TCP/IP è un modello più concreto che riflette la costruzione reale che le reti hanno subito nel tempo.

17. La topologia a stella è una topologia di rete che prevede che i nodi siano connessi gli uni con gli altri tramite un dispositivo centrale, che sia un hub, uno switch, o un router. Il suo principale punto di vulnerabilità è proprio il device centrale, in quanto se subisse un guasto tutta la rete sarebbe compromessa. è ancora utilizzata perchè ogni device necessita di una singola porta per comunicare con la rete, è facile installarla, e presenta un facile rilevamento dei guasti.

18. Il numero di collegamenti necessari per connettere n dispositivi in una rete mesh completa è dato da n * (n - 1) / 2.

19. 

20. Le reti seguono la seguente classificazione in base alla estensione geografica:
   * PAN: le reti PAN sono reti che coinvolgono nodi a distanze nel range di pochi metri, e comprendono ad esempio le reti di dispositivi indossabili.
   * LAN: le reti LAN si estendono nel range di poche centinaia di metri, e costituiscono le reti domestiche, reti aziendali o reti scolastiche ad esempio.
   * MAN: le reti MAN stanno per Metropolitan Area Network e si estendono nel raggio del territorio cittadino, quindi qualche km.
   * WAN: le reti WAN comprendono l'interconnessione di diverse LAN e MAN, e si estendono per diversi km, includendo regioni o intere nazioni.

21. Una rete a commutazione di pacchetto è una rete che prevede che l'invio di ogni pacchetto possa seguire percorsi diversi in maniera indipendente, mentre una rete a commutazione di circuito prevede che l'instradamento dei pacchetti di una certa connessione segua lo stesso percorso.

## Livello Fisico
1. Le principali differenze tra un segnale analogico e uno digitale stanno nel fatto che un segnale analogico segue una forma d'onda continua nel tempo e nel valore del segnale. Il segnale è limitato in un range di valori ma può assumere infiniti valori in quell'intervallo. Un segnale digitale invece è un segnale discreto nel tempo e nei valori assunti.
2. Un'onda sinusoidale è descritta da 3 parametri:
   * Ampiezza: l'ampiezza rappresenta l'energia del segnale, identificando minimi e massimi della sinusoide
   * Frequenza: indica la velocità di variazione del valore del segnale
   * Fase: indica lo spostamento nel tempio della sinusoide rispetto al tempo 0.
3. Per larghezza di banda si possono intendere due significati: se si parla di un segnale analogico, la larghezza di banda rappresenta il range di frequenze che il segnale utilizza (in Hertz), mentre se si parla di un segnale digitale si parla del numero di bit al secondo che il segnale può trasportare.

4. 

7. Il multiplexing è la tecnica con cui si abilità la condivisione di un mezzo fisico e lo si mette a disposizione di più dispositivi che voglio trasmettere segnali su quel mezzo. è importante nelle reti di telecomunicazione per il semplice fatto che sarebbe ingestibili strutturare reti con una moltitudine di nodi se fosse necessario creare mezzi di comunicazione dedicati per ogni nodo.
8. Il multiplexer è quel componente hardware o software che si occupa di prendere messaggi da più sorgenti e trasmetterle su un singolo canale, mentre il demultiplexer fa l'opposto, ovvero prende messaggi da un mezzo condiviso, e li smista verso più riceventi.

9. La larghezza di banda rappresenta la capacità massima, ideale di un mezzo trasmissivo, una sorta di limite superiore. Il Throughput invece è la quantità di informazioni effettivmente trasportate in un certo lasso di tempo. Potremmo paragonarlo alla larghezza di un tubo e all'effettiva quantità di flusso d'acqua che ci passa in un certo momento.

10. I 4 contributi al ritardo totale di una rete sono:
   * tempo di propagazione: è il tempo impiegato dai bit per viaggiare da sorgente a destinazione, e può essere calcolato come il rapporto tra la lunghezza del collegamento e la velocità di propagazione sul mezzo. t_p = d / v_p
   * tempo di trasmissione: tempo necessario per inviare il segnale lungo la linea di trasmissione, dipende dalla dimensione del messaggio e dalla larghezza di banda del mezzo: t_T = G / L
   * tempo di accomodamento: è il tempo necessario affinché i pacchetti passino dalla porta di ingresso a quella di uscita dei router.
   * ritardo di elaborazione: il tempo che il router impiega per calcolare l'instradamento del pacchetto.

11. Con RTT (Round Trip Time) si intende la latenza impiegata da un pacchetto per attraversare il mezzo da sorgente a destinatario + tempo di ritorno. Differisce dal "one-way" in quanto esso non considera il tempo di ritorno.

13. Il Jitter è un valore che indica quanto varia il ritardo in una rete, ossia quanto "instabile" è la rete. Infatti, un valore alto di jitter corrisponde a una rete la cui latenza è molto variabile. Le principali cause sono interferenze elettromagnetiche e diafonia tra i segnali. è mitigabile tramite l'utilizzo di buffer, che rendono più regolarmente scandito il ritmo di trasmissione dei diversi pacchetti.

14. Un doppino di rame è costituito da due cavi di rame, ricoperti da materiale isolante, tra loro intrecciati. Un cavo trasporta il segnale, l'altro è un riferimento a massa. Il ricevitore usa la differenza di segnali tra i due cavi. La diafonia in due conduttori paralleli è alta, perciò si intrecciano per ridurla.

15. Le differenze principali tra cavo UTP e STP in termini di schermatura sono che il cavo UTP era un cavo non schermato, nella sua forma più comune di cablaggio per sistemi di telefonia vocale casalinga e per uffici. Di solito erano 4 cavi intrecciti a coppie, senza alcun altro isolamento o schermatura.
UTP:
   * flessibile, economico e facile da installare
   * usati per trasmissioni brevi di voce e dati
Svantaggi:
   * larghezza di banda limitata
   * efficienti fino agli 80 metri e devono essere sezionati in tratti minori di 100m

I cavi STP invece hanno un isolamento extra, ossia un rivestimento protettivo sui conduttori sotto forma di una maglia di rame intrecciata, che riduce rumore, interferenza e dà maggior rigidezza al cavo.

Vantaggi:
   * comunicazione a lunga distanza in ambienti rumorosi
   * la schermatura protegge da rumore
   * larghezza di banda maggiore
Svantaggi:
   * più costosi e difficili da installare
   * manutenzione più costosa

16. Le principali categorie di cavo Ethernet sono:
   * Cat. 1
      * Caratteristiche: doppino UTP molto semplice, 2 fili di rame
      * Velocità: non definita per dati (solo voce analogica)
      * Impiego: telefonia vocale domestica e uffici (vecchi impianti)
   * Cat. 2
      * Caratteristiche: doppino per voce e dati primitivi
      * Velocità: fino a 4 Mbps
      * Impiego: reti IBM Token Ring anni ’80
   * Cat. 3
      * Caratteristiche: 4 doppini intrecciati, supporto Ethernet base
      * Velocità: fino a 10 Mbps
      * Impiego: Ethernet 10BaseT, voce digitale, edifici datati
   * Cat. 4
      * Caratteristiche: migliorata rispetto a Cat.3, usata in reti Token Ring
      * Velocità: fino a 16 Mbps
      * Impiego: soprattutto reti IBM Token Ring (oggi obsoleta)
   * Cat. 5
      * Caratteristiche: maggiore torsione per ridurre interferenze
      * Velocità: fino a 100 Mbps
      * Impiego: 10BaseT e 100BaseT (Fast Ethernet), dati + voce + video
      * Distanza tipica: fino a 100 m
   * Cat. 5e
      * Caratteristiche: versione migliorata di Cat.5
      * Velocità: fino a 100 Mbps (più stabile)
      * Impiego: reti domestiche e aziendali base, sub-Gigabit
      * Nota: riduce la diafonia, molto diffusa
   * Cat. 6
      * Caratteristiche: separatore interno (spline), migliore schermatura
      * Velocità:
      * fino a 1 Gbps (100 m)
      * fino a 10 Gbps (≤ 35 m)
      * Impiego: reti moderne ad alte prestazioni
      * Variante Cat6a: fino a 500 MHz, migliori prestazioni
   * Cat. 7
      * Caratteristiche: alta schermatura, connettori proprietari (GG45)
      * Velocità: simile a Cat6a (fino a multi-Gbps)
      * Impiego: reti specializzate ad alta interferenza
      * Limite: standard non ufficiale IEEE/TIA → poco diffusa
   * Cat. 7a
      * Caratteristiche: evoluzione Cat7
      * Velocità:
      * 40 Gbps fino a 50 m
      * 100 Gbps fino a 15 m
      * Impiego: data center avanzati (ma raro)
   * Cat. 8
      * Caratteristiche: schermatura totale, molto rigido
      * Velocità: fino a 40 Gbps
      * Banda: fino a 2 GHz
      * Distanza: fino a 30 m
      * Impiego: collegamenti switch–switch in data center (25G/40G Ethernet)
      * Nota: RJ45 compatibile ma uso molto specializzato

17. Il connettore standard per i cavi Ethernet in rame è l'RJ45. 8P8C (Eight Position, Eight Contact) viene spesso usato come sinonimo di RJ45, ma in realtà è una categoria più ampia di connettori di cui RJ45 fa parte.

18. Il cavo coassiale è fatto da una guaina di plastica esterna che contiene al suo interno due strati di materiale isolante divis tra loro da uno strato di conduttore metallico; al centro c'è un anima metallica (rame).
Il più comune dei connettori è quello a baionetta Neill-Concelman (BNC).

19. La fibra ottica funziona tramite la riflessione di uno o più fasci di luce all'interno del cladding, un involucro di vetro con indice di rifrazione minore.
20. La fibra monomodale è un tipo di fibra ottica che utilizza un solo fascio di luce trasmesso in linea retta, quindi senza rifrazione. Essa richiede un ricetrasmettitore pulito e allineato con precisione inferiore al micron.
La fibra multimodale invece è più tollerante, e sfrutta più fasci di luce riflessi lungo il cavo, l'importante è che ogni fascio abbia un angolo di rifrazione diverso dagli altri.
21. I principali vantaggi della fibra ottica sono il fatto che la larghezza di banda, usando impulsi luminosi, non è il collo di bottiglia del mezzo, ma bensì la velocità di decodifica del segnale alla ricezione. L'attenuazione del segnale è nettamente inferiore e di difficile intercettazione. Uno svantaggio delle fibre è la connessione di due di esse, che può avvenire usando apposite prese grazie a edei connettori con perdita del 10-20% della luce. Meccanicamente o tramite fusione.

## Livello Datalink
Certamente. Ecco le risposte a tutte le domande, basate esclusivamente sul contenuto del PDF che hai fornito.

### Sezione 3.1 – Data Link Control

1.  **Quali sono i cinque servizi principali offerti dal livello collegamento?**
    I cinque servizi sono: Framing, Accesso al canale, Indirizzamento, Controllo di flusso, Gestione degli errori.

2.  **Cosa si intende con il termine "framing" e a cosa serve?**
    Il framing è il servizio che incapsula le informazioni provenienti dai livelli superiori, inserendo dati di testa (header) e coda (tail) che servono per gli altri servizi del livello.

3.  **Perché il servizio di "indirizzamento" è essenziale nei canali condivisi?**
    Perché su un collegamento condiviso è necessario capire quale nodo comunica con un altro nodo. L'identificativo è di tipo hardware.

4.  **Che differenza c'è tra un collegamento dedicato e un canale condiviso?**
    In un collegamento dedicato i nodi hanno un collegamento esclusivo, mentre in un canale condiviso (es. telefoni cellulari o rete LAN wireless) più nodi condividono lo stesso mezzo trasmissivo.

### Sezione 3.2 – LAN Cablate: Ethernet

5.  **In che anno e da chi è stato sviluppato il progetto originale di Ethernet?**
    È stato sviluppato da un progetto di ricerca del 1973-1976 alla Xerox di Palo Alto, da un’idea di Robert Metcalfe.

6.  **Quale ente ha standardizzato le reti Ethernet e con quale progetto?**
    La IEEE (Institute of Electrical and Electronics Engineers) con il progetto IEEE 802.

7.  **In quali due sottolivelli viene suddiviso il livello Data Link nello standard IEEE 802?**
    Viene suddiviso in Logical Link Control (LLC) e Medium Access Control (MAC).

8.  **Che ruolo ha il sottolivello LLC (Logical Link Control)?**
    Implementa le funzioni di controllo degli errori, controllo di flusso e parte delle funzioni di framing. È indipendente dal tipo di rete fisica utilizzata.

9.  **Cosa definisce il sottolivello MAC (Medium Access Control)?**
    Definisce il metodo di accesso al mezzo fisico ed è legato al particolare hardware usato.

10. **Elenca i 7 campi di un frame Ethernet standard e la loro dimensione in byte.**
    - Preambolo: 7 bytes
    - Delimitatore: 1 byte
    - Indirizzo Destinatario: 6 bytes
    - Indirizzo Mittente: 6 bytes
    - Lunghezza o tipo: 2 bytes
    - Dati: da 46 a 1500 bytes
    - CRC: 4 bytes

11. **A cosa serve il campo "Preambolo" e di quanti byte è composto?**
    Serve per la sincronizzazione tra mittente e destinatario. È composto da 7 byte.

12. **Cosa indica il campo "Lunghezza o tipo" in un frame Ethernet?**
    Viene usato per segnalare il protocollo di livello superiore trasportato nel campo dati (Ethernet legacy) oppure il numero di byte del campo dati (standard IEEE 802).

13. **Qual è la dimensione minima e massima del campo dati in un frame Ethernet?**
    Minima 46 byte, massima 1500 byte.

14. **Cosa significa l'acronimo CSMA/CD e a cosa serve?**
    Carrier Sense Multiple Access with Collision Detection. È il metodo di accesso al mezzo previsto da Ethernet standard.

15. **Perché anche con CSMA possono verificarsi delle collisioni?**
    A causa del ritardo di propagazione del segnale sul mezzo.

16. **A cosa corrisponde il "tempo di vulnerabilità" nel protocollo CSMA?**
    Corrisponde al tempo di propagazione (Tp), cioè il tempo necessario al segnale per propagarsi da un capo all’altro del mezzo.

17. **Qual è la lunghezza massima di una rete Ethernet standard a 10 Mbps e perché?**
    2500 metri, a causa del tempo di propagazione e del tempo necessario a spedire un segnale di jamming.

18. **Quali erano i quattro obiettivi principali dello standard Fast Ethernet (802.3u)?**
    1. Aumentare la velocità a 100 Mbps.
    2. Mantenere la compatibilità con Ethernet standard.
    3. Mantenere lo stesso indirizzamento a 48 bit.
    4. Mantenere stesso formato e stesse dimensioni dei frame.

19. **Che differenza c'è tra una connessione half-duplex e full-duplex in Ethernet?**
    - Half-duplex: i nodi possono ricevere o spedire, ma non contemporaneamente (serve CSMA/CD).
    - Full-duplex: i nodi possono trasmettere e ricevere contemporaneamente (non servono metodi di accesso).

20. **Perché nelle reti Gigabit Ethernet half-duplex non è praticamente utilizzabile?**
    Perché alle alte velocità le collisioni vengono rilevate in un tempo più breve, accorciando la lunghezza massima della rete a circa 25 metri, rendendola di fatto inutilizzabile.

21. **Cosa determina la lunghezza massima del cavo nelle reti full-duplex?**
    L’attenuazione del segnale nel cavo.

22. **Spiega il significato dei nomi: 10Base5, 10Base2, 10BaseT, 100BaseT.**
    - Il numero iniziale: velocità massima (Mbps).
    - "Base": baseband, dati codificati con Manchester.
    - Sigla finale: caratteristiche fisiche (5→500m, 2→200m, T→Twisted pair, F→Fibra).

23. **Quale topologia viene utilizzata a partire da 10BaseT?**
    Topologia a stella.

24. **Cosa sono un bridge e uno switch? Quale vantaggio portano in termini di domini di collisione?**
    - Bridge: divide la rete in parti indipendenti, riducendo le collisioni.
    - Switch: dispositivo con un solo nodo per porta, con buffer dedicati. Permette comunicazioni full-duplex ed elimina le collisioni.

25. **Che tipo di codifica viene usata in Fast Ethernet (100BaseT) e perché non si usa più Manchester?**
    Si usa MLT-3 e 4B/5B. Manchester non viene usata perché richiederebbe una larghezza di banda troppo elevata rispetto a quella possibile sui cavi cat5e.

### Sezione 3.3 – LAN Wireless: IEEE 802.11 e Bluetooth

26. **Quali sono le due bande di frequenza più comuni per il Wi-Fi?**
    2,4 GHz e 5 GHz.

27. **Quale standard Wi-Fi è stato il primo a funzionare su entrambe le bande 2,4 e 5 GHz?**
    IEEE 802.11n (introdotto nel 2009).

28. **Quale standard Wi-Fi è il più recente tra quelli elencati e quale velocità massima dichiara?**
    IEEE 802.11ax (rilasciato nel 2019), velocità massima dichiarata di 10 Gbps.

29. **Qual è il nuovo schema di denominazione della Wi-Fi Alliance?**
    Aggiungere un numero alla parola "Wi-Fi" che ne individua la generazione (es. Wi-Fi 1, Wi-Fi 2, ecc.).

30. **Quali sono le due modalità operative del Wi-Fi?**
    Ad-hoc (peer-to-peer) e a infrastruttura (con Access Point).

31. **Cosa sono un BSS (Basic Service Set) e un ESS (Extended Service Set)?**
    - BSS: gruppo di stazioni che comunicano sullo stesso canale fisico.
    - ESS: insieme di tutti i BSS connessi.

32. **Che differenza c'è tra DCF e PCF nel MAC Wi-Fi?**
    - DCF (Distributed Coordination Function): usa CSMA/CA, accesso distribuito, servizio asincrono.
    - PCF (Point Coordination Function): accesso centralizzato (polling), senza contese, con finestre temporali periodiche.

33. **Perché le reti wireless usano CSMA/CA invece di CSMA/CD?**
    Perché nelle reti wireless non è possibile implementare CSMA/CD (non si può rilevare la collisione mentre si trasmette a causa dell’elevata differenza di potenza tra segnale trasmesso e ricevuto).

34. **Spiega a cosa serve e come funziona il meccanismo RTS/CTS.**
    Serve a ridurre le collisioni dovute a nodi nascosti. Funziona così:
    - Mittente invia RTS (Request to Send) e imposta un NAV.
    - Ricevente risponde con CTS (Clear to Send) e imposta un NAV.
    - Mittente invia i dati.
    - Ricevente invia ACK.

35. **Cosa significa l'acronimo FHSS e a cosa serve nel Bluetooth?**
    Frequency-Hopping Spread Spectrum. Serve a ridurre le interferenze saltando rapidamente da un canale all’altro durante la trasmissione.

36. **Quanti dispositivi attivi possono essere collegati contemporaneamente in una piconet Bluetooth?**
    Massimo 7 nodi slave attivi più 1 nodo master (totale 8 nodi attivi).

37. **Che differenza c'è tra una Piconet e una Scatternet?**
    - Piconet: rete elementare Bluetooth con un master e fino a 7 slave attivi.
    - Scatternet: insieme di più piconet interconnesse tramite nodi bridge.

38. **Quali sono i due tipi di collegamento supportati da Bluetooth?**
    - SCO (Synchronous Connection Oriented): per voce, basso ritardo, 64 kbps.
    - ACL (Asynchronous Connectionless): per dati a pacchetto, con ARQ.

### Sezione 3.4 – LAB (Comandi di rete)

39. **A cosa serve il comando `ipconfig`?**
    Mostra la configurazione corrente della rete TCP/IP (indirizzo IP, subnet mask, gateway predefinito, DNS).

40. **Come si utilizza `ping` per verificare la connettività di rete?**
    Si può pingare l’indirizzo di loopback, l’IP locale, il gateway predefinito o un host remoto per verificare la connettività a livello IP.

41. **Che differenza c'è tra `tracert` e `pathping`?**
    - `tracert`: determina il percorso (router) da un host a un altro.
    - `pathping`: combina `ping` e `tracert`, fornendo anche latenza e perdita di pacchetti per ogni hop.

42. **Cosa mostra il comando `netstat`?**
    Mostra le statistiche del protocollo e le connessioni TCP/IP attuali.

43. **A cosa serve il comando `arp`?**
    Visualizza e modifica le voci della tabella ARP (associazione tra indirizzi IP e indirizzi MAC).

### Domande trasversali e di confronto

44. **Quali sono le principali differenze nella gestione delle collisioni tra Ethernet cablata (CSMA/CD) e Wi-Fi (CSMA/CA)?**
    - CSMA/CD: rileva le collisioni dopo che sono avvenute (usato su cavo).
    - CSMA/CA: evita le collisioni prima che avvengano (usato su wireless).

45. **Confronta le velocità e i mezzi trasmissivi di Ethernet standard, Fast Ethernet e Gigabit Ethernet.**
    - Ethernet standard: 10 Mbps, cavo coassiale o doppino.
    - Fast Ethernet: 100 Mbps, doppino (100BaseT) o fibra (100BaseS).
    - Gigabit Ethernet: 1000 Mbps, fibra (1000BaseLX/SX) o 4 cavi in rame (1000BaseTX).

46. **Quali problematiche specifiche riguardano le reti wireless e non quelle cablate?**
    - Gestione dell’energia (batteria).
    - Difficoltà a direzionare la connessione.
    - Interferenze da altri dispositivi.
    - Sicurezza (ascolto fraudolento).
    - Limitazioni di potenza per legge.

47. **Perché la codifica Manchester non è adatta per Fast Ethernet a 100 Mbps su doppino?**
    Perché richiederebbe una larghezza di banda troppo elevata rispetto a quella possibile sui cavi cat5e, con i quali è nata Fast Ethernet.