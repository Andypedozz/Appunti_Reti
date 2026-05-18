
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
1. I cinque servizi principali offerti dal livello collegamento sono:
   * Indirizzamento MAC
   * Controllo degli errori
   * Controllo dell'accesso al mezzo
   * Controllo della velocità di trasmissione (flusso)
   * Framing
2. Il termine framing significa che il livello datalink prende i pacchetti provenienti dal livello rete, e li trasforma in frame, ossia unità trasmissive di più basso livello, pronte a essere trasferite come segnali di una certa natura dal livello fisico.
3. L'indirizzamento è essenziale nei canali condivisi perchè altrimenti non sarebbe possibile distinguere tra diversi mittenti e destinatari, e non sarebbe possibile perciò effettuare alcun multiplexing, smistamento di messaggi e quant altro.
4. La differenza tra un collegamento dedicato e uno condiviso è che un collegamento dedicato mette in comunicazione al massimo due dispositivi, rimuovendo la necessità di un indirizzamento, mentre uno condiviso consente a n dispositivi di utilizzare lo stesso canale per comunicare.

7. Il livello Datalink viene suddiviso nei livelli:
   * LLC: Logical Link Control, che implementa parte delle funzioni di framing, il controllo degli errori, il controllo del flusso, ed è indipendente dalla rete fisica sottostante
   * MAC: Medium Access Control, dipende dalla rete fisica sottostante, implementa il core del framing, le modalità di accesso al mezzo condiviso (CSMA/CD e CSMA/CA), e fornisce l'indirizzamento hardware (MAC Address) dei nodi.

10. I campi di un frame Ethernet Standard sono:
   * Preambolo
   * Delimitatore
   * Tipo o Lunghezza
   * MAC Mittente
   * MAC Destinatario
   * Dati
   * CRC

14. L'acronimo CSMA/CD sta per Carrier Sense Multiple Access / Collision Detection, ed è un algoritmo di accesso al mezzo condiviso che serve a ridurre, ma non eliminare totalmente, le collisioni possibili quando due nodi tentano di trasmettere sul mezzo simultaneamente.
