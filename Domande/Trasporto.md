## Livello Trasporto

### Sezione 7.1 – Descrizione dei Servizi di Trasporto
1. Qual è l'obiettivo finale del livello di trasporto?
2. Cosa si intende per "entità di trasporto"? Dove può essere situata?
3. Quali sono le tre fasi che seguono le connessioni di trasporto (sia orientate che non orientate)?
4. Come può il livello di trasporto essere più affidabile del sottostante servizio di rete?
5. Qual è la funzione principale del livello di trasporto rispetto ai livelli superiori e inferiori?

#### Sottosezione 7.1.1 – Primitiva
6. A cosa servono le primitive del livello di trasporto?
7. Descrivi la sequenza di primitive utilizzata da un server per accettare una connessione.
8. Cosa fa la primitiva CONNECT dal lato client?
9. Come si chiama un messaggio spedito da un'entità di trasporto a un'altra?
10. Qual è la relazione di nidificazione tra segmenti, pacchetti e frame?

#### Sottosezione 7.1.2 – Socket di Berkeley
11. Quali sono le primitive delle socket utilizzate per TCP?
12. A cosa serve la primitiva SOCKET?
13. Cosa fa la primitiva BIND?
14. A cosa serve la primitiva LISTEN e cosa significa che non è bloccante?
15. Come fa un server a gestire più connessioni simultanee usando ACCEPT?
16. Quali primitive usano client e server per trasmettere e ricevere dati?

### Sezione 7.2 – Elementi dei Protocolli di Trasporto
17. Per quali aspetti i protocolli di trasporto ricordano i protocolli data link?
18. Quali sono le principali differenze tra l'ambiente del livello data link e quello del livello di trasporto?
19. Perché nel livello di trasporto è necessario un indirizzamento esplicito delle destinazioni?
20. Perché la costituzione della connessione è più complessa nel livello di trasporto rispetto al data link?
21. Quale problema introduce la possibilità di memorizzazione dei pacchetti nella rete per il livello di trasporto?

#### Sottosezione 7.2.1 – Indirizzamento
22. Cosa si intende per TSAP (Transport Service Access Point)?
23. Cosa si intende per NSAP (Network Service Access Point)? Fai un esempio.
24. Perché servono i TSAP quando ogni computer ha un singolo NSAP?
25. Come vengono chiamati gli endpoint di trasporto su Internet?

#### Sottosezione 7.2.2 – Stabilire una Connessione
26. Perché l'instaurazione di una connessione è complessa in presenza di reti che possono perdere, ritardare, corrompere e duplicare pacchetti?
27. Quale scenario peggiore viene descritto con una transazione finanziaria critica?
28. Come si può limitare la vita dei pacchetti nella rete?
29. Quale soluzione propose Tomlinson basata sugli orologi?
30. Cosa richiede l'handshake a tre vie (three-way handshake)?
31. Descrivi la sequenza normale dell'handshake a tre vie tra host 1 e host 2.

#### Sottosezione 7.2.3 – Rilascio della Connessione
32. Qual è la differenza tra rilascio asimmetrico e rilascio simmetrico?
33. Descrivi il caso normale di rilascio di una connessione con handshake a tre vie (segmenti DR e ACK).
34. Cosa succede se il segmento ACK finale viene perso durante il rilascio?
35. Cosa succede se il secondo DR viene perso?
36. Cosa genera una "connessione aperta a metà" (half-open connection) e in quali circostanze si verifica?

#### Sottosezione 7.2.4 – Controllo degli Errori e Controllo di Flusso
37. Perché il buffering è importante nel livello di trasporto?
38. Cosa mostra l'esempio di allocazione dinamica dei buffer nella Figura 7.12?
39. Cosa propone Belsnes per limitare le trasmissioni del mittente basandosi sulla capacità della rete?

#### Sottosezione 7.2.5 – Multiplexing
40. Cosa si intende per multiplexing nel livello di trasporto? Fai un esempio.
41. Cosa si intende per multiplexing inverso (inverse multiplexing)? In quale situazione è utile?

#### Sottosezione 7.2.6 – Ripristino Dopo un Crash
42. Perché il ripristino dopo un crash dell'host è più complesso del ripristino dopo un crash della rete?
43. Quali sono le due implementazioni possibili per il server (ordine di scrittura e acknowledgement)?
44. Perché, indipendentemente dall'implementazione, esiste sempre una sequenza di eventi che fa fallire il protocollo di ripristino?

#### Sottosezione 7.2.7 – Protocolli a Finestra Scorrevole
45. Quali sono i punti chiave che i protocolli a finestra scorrevole devono gestire?
46. Qual è la differenza tra un checksum del livello data link e uno del livello trasporto?
47. Cosa afferma l'end-to-end argument di Saltzer et al.?
48. Perché lo stop-and-wait è accettabile su linee wireless ma azzopperebbe le prestazioni su connessioni ad alto prodotto banda-ritardo?

### Sezione 7.3 – Il Protocollo di Trasporto Internet Senza Connessione: UDP
49. Quali sono i due protocolli principali del livello di trasporto Internet? Quale differenza fondamentale li caratterizza?
50. Cosa significa l'acronimo UDP?
51. Quanti byte ha l'intestazione UDP e da quali campi è composta?
52. A cosa serve la porta sorgente in UDP?
53. Qual è la lunghezza minima e massima di un segmento UDP?
54. Il checksum UDP è obbligatorio o opzionale? Cosa verifica?
55. Cos'è la pseudointestazione UDP? Perché il suo uso viola la gerarchia dei protocolli?
56. Cosa UDP non può fare (controllo di flusso, congestione, ritrasmissione)?
57. Perché UDP è particolarmente utile per applicazioni client-server come DNS?
58. Quale protocollo utilizza UDP per la risoluzione dei nomi di dominio?

#### Sottosezione 7.3.1 – Remote Procedure Call: RPC
59. Qual è l'idea alla base di RPC (Remote Procedure Call)?
60. Cosa sono il client stub e il server stub in RPC?

#### Sottosezione 7.3.2 – Protocolli di Trasporto Real-Time
61. Perché è stato sviluppato un protocollo di trasporto generico real-time?
62. In quale livello si colloca RTP (Real-time Transport Protocol)? Perché è difficile classificarlo?
63. Qual è la funzione base di RTP?
64. RTP utilizza acknowledgement o ritrasmissioni? Perché?
65. A cosa serve il campo Sequence number nell'intestazione RTP?
66. Cosa indica il campo Payload type in RTP?
67. Quali informazioni sono contenute nei campi Synchronization source identifier e Contributing source identifier?
68. A cosa serve RTCP (Real-time Transport Control Protocol)?
69. Come fa RTCP a evitare di consumare troppa banda in applicazioni multicast con molti partecipanti?
70. Quali funzioni svolge RTCP oltre al feedback sulla congestione?

### Sezione 7.4 – Il Protocollo di Trasporto Internet Orientato alla Connessione: TCP
71. Cosa significa l'acronimo TCP?
72. Perché TCP è considerato il "principale motore di Internet"?
73. Quali problemi della internetwork TCP è stato progettato per gestire?
74. In che dimensione tipica TCP suddivide i flussi dati? Perché?

#### Sottosezione 7.4.1 – Il Modello di Servizi
75. Cosa sono le socket in TCP? Da cosa è composto il loro indirizzo?
76. Cosa sono le well-known port? Quali numeri di porta sono riservati?
77. Elenca almeno 5 porte ben note con i relativi protocolli e utilizzi.
78. Che cos'è inetd nei sistemi UNIX? Qual è il suo scopo?
79. Quali caratteristiche hanno le connessioni TCP (full-duplex, punto a punto)?
80. A cosa serve il flag PUSH in TCP?
81. A cosa servono i dati urgenti (flag URG) in TCP?
82. Quanti bit ha il numero di sequenza di un byte in TCP?
83. Quali sono i due limiti sulla dimensione di un segmento TCP?
84. Qual è il protocollo di base utilizzato da TCP?

#### Sottosezione 7.4.2 – Intestazione del Segmento TCP
85. Quali sono i campi principali dell'intestazione TCP?
86. Perché l'identificatore di connessione TCP è chiamato "quintupla"? Quali cinque elementi lo compongono?
87. Il campo Acknowledgement number in TCP è cumulativo? Cosa significa?
88. A cosa serve il campo TCP header length?
89. Quali sono i flag CWR e ECE e a cosa servono?
90. A cosa serve il flag URG e il campo Urgent pointer?
91. Cosa indica il flag ACK?
92. A cosa serve il flag PSH?
93. Cosa fa il flag RST?
94. Qual è la differenza tra un segmento SYN con ACK=0 e uno con ACK=1?
95. A cosa serve il flag FIN?
96. Come viene gestito il controllo di flusso in TCP?
97. Cosa significa un campo Window size pari a 0?
98. Il checksum in TCP è obbligatorio? Cosa verifica?
99. A cosa serve l'opzione MSS (Maximum Segment Size)?

#### Sottosezione 7.4.3 – Instaurazione di una Connessione
100. Come viene stabilita una connessione TCP? Descrivi il three-way handshake.
101. Cosa succede se un segmento SYN arriva su una porta dove nessun processo è in ascolto?
102. Descrivi il caso di instaurazione simultanea di una connessione da entrambi i lati.
103. Perché un segmento SYN consuma un byte nello spazio dei numeri di sequenza?

#### Sottosezione 7.4.4 – Rilascio di una Connessione
104. Perché è utile immaginare una connessione TCP come due connessioni simplex separate?
105. Quanti segmenti sono normalmente necessari per rilasciare una connessione TCP? Perché a volte bastano tre?
106. Come si evita il problema dei due esercizi nel rilascio di una connessione TCP?

#### Sottosezione 7.4.5 – Modello di Gestione della Connessione
107. Quali sono i principali stati della macchina a stati finiti TCP? Descrivili brevemente.
108. Qual è il percorso normale degli stati per un client? E per un server?
109. In quale stato un server attende connessioni in ingresso?
110. In quale stato avviene il normale trasferimento dei dati?

#### Sottosezione 7.4.6 – La Finestra Scorrevole
111. Cosa sono i delayed acknowledgement? Perché sono utili?
112. In cosa consiste l'algoritmo di Nagle? Quale problema risolve?
113. Cos'è la silly window syndrome? Come si manifesta?
114. Qual è la soluzione di Clark alla silly window syndrome?

#### Sottosezione 7.4.7 – Controllo della Congestione
115. Come interpreta TCP la perdita di pacchetti?
116. Cos'è la finestra di congestione (congestion window)? Come si relaziona con la finestra di controllo del flusso?
117. In cosa consiste l'algoritmo di slow start? Perché si chiama così se ha crescita esponenziale?
118. Cos'è la slow start threshold? Quando viene aggiornata?
119. Cosa succede quando viene rilevata una perdita di pacchetto (timeout)?
120. In cosa consiste la fase di incremento additivo (additive increase)?
121. Cosa sono TCP Tahoe e TCP Reno?
122. Cos'è il fast recovery? Quando viene utilizzato?
123. Quale profilo segue la finestra di congestione di TCP con AIMD (Additive Increase Multiplicative Decrease)?
124. Cosa sono i SACK (Selective Acknowledgement)? Quale vantaggio offrono?

#### Sottosezione 7.4.8 – Gestione dei Timer
125. Qual è il timer più importante in TCP? A cosa serve?
126. Cos'è il RTO (Retransmission Timeout)?
127. Come viene calcolato dinamicamente il RTO? Cosa sono SRTT e la formula EWMA?
128. Perché il timeout in TCP deve essere adattivo e non fisso?

#### Sottosezione 7.4.9 – WebRTC
129. Cosa significa l'acronimo WebRTC?
130. Quale protocollo di trasporto utilizza WebRTC per la comunicazione dati? Perché?
131. Quali sono i principali pregi di WebRTC?
132. Quali sono i principali difetti di WebRTC?

### Sezione 7.5 e 7.6 – LAB (Socket e Sistemi Client-Server)
133. A cosa serve una socket nella programmazione di rete?
134. Quali sono le fasi tipiche di implementazione di un sistema client-server con socket?

### Domande trasversali e di confronto
135. Confronta UDP e TCP in termini di: orientamento alla connessione, affidabilità, controllo di flusso, controllo di congestione, dimensione dell'intestazione, campi principali.
136. Quali sono le differenze tra il controllo degli errori nel livello data link e nel livello trasporto?
137. Confronta slow start e incremento additivo in termini di crescita della finestra di congestione.
138. Spiega la differenza tra il three-way handshake per stabilire una connessione e il three-way handshake per rilasciarla.
139. Qual è la differenza tra multiplexing e inverse multiplexing nel livello di trasporto?
140. Confronta RTP e RTCP in termini di funzionalità e scopo.