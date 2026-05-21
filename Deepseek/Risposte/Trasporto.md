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