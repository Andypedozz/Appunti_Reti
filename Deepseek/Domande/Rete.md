## Livello Rete

### Sezione 5.1 – Problemi Architetturali dello Stato Rete
1. Qual è lo scopo principale del livello di rete?
2. Cosa significa l'architettura "store and forward" nel livello di rete?
3. Quali sono le due scuole di pensiero contrastanti riguardo al servizio che la rete dovrebbe fornire al livello di trasporto?
4. Che differenza c'è tra una rete orientata alla connessione e una non orientata alla connessione?
5. Cosa si intende per "rete a datagram"? Quali informazioni contiene un datagramma?
6. Perché nelle reti a datagram è difficile garantire Qualità del Servizio (QoS) e controllo della congestione?
7. Quale vantaggio offre una rete a datagram in caso di malfunzionamento di un router?

### Sezione 5.2 – Protocollo IPv4 e Indirizzamento
8. Perché il protocollo IP è definito "connectionless" e "inaffidabile"? Elenca almeno quattro caratteristiche.
9. In IPv4, i pacchetti possono seguire percorsi diversi e arrivare in ordine diverso da quello di invio. A quale livello superiore spetta riordinarli?
10. Qual è la dimensione minima e massima dell'header di un pacchetto IPv4 (in byte)?
11. Quali sono i due componenti fondamentali di un pacchetto IP?

#### Sottosezione 5.2.1 – Pacchetti IPv4
12. Descrivi brevemente la funzione di ciascuno dei seguenti campi dell'header IPv4: Version, Length, Total Length, Identification, Time To Live (TTL), Protocol, Header Checksum.
13. A cosa serve il campo Type of Service (ToS) e quali sottocampi contiene?
14. Qual è la funzione dei tre bit Flags nell'header IPv4? Spiega il significato di "Don't Fragment" e "More Fragment".
15. Cosa indica il campo Fragment Offset e in quale unità di misura è espresso?
16. Come funziona il campo Time To Live (TTL) nell'IPv4 moderno? Cosa rappresenta oggi?
17. Cosa specifica il campo Protocol nell'header IPv4 e chi mantiene la lista dei codici?

#### Sottosezione 5.2.2 – Indirizzamento IP
18. Come viene rappresentato un indirizzo IPv4 in notazione decimale puntata? Fai un esempio.
19. Quanti bit compongono un indirizzo IPv4 e a quanti indirizzi totali corrisponde?
20. Cos'era l'indirizzamento classfull (a classi)? In quante classi era suddiviso e quali erano?
21. In cosa consiste la divisione tra netid e hostid nell'indirizzamento a classi?
22. Quali sono i principali limiti dell'indirizzamento a classi?
23. Cosa significa l'acronimo CIDR? Quale innovazione ha introdotto rispetto all'indirizzamento classfull?
24. Cosa indica la notazione 192.168.0.0/24? Quanti bit identificano la rete e quanti l'host?
25. Perché il prefisso CIDR non deve essere necessariamente un multiplo di 8?
26. Qual è la differenza tra un indirizzo IP pubblico e uno privato?
27. Quale dispositivo assegna gli indirizzi IP privati all'interno di una rete domestica?
28. Che differenza c'è tra un indirizzo IP statico e uno dinamico? Quali sono i vantaggi di ciascuno?
29. Elenca i tre range di indirizzi IP privati (classi A, B e C).

### Sezione 5.3 – Protocollo IPv6 e Indirizzamento
30. Perché è stato definito IPv6 e in che anno?
31. Quanti bit ha un indirizzo IPv6 rispetto a IPv4? A quanti indirizzi totali corrisponde?
32. Come viene rappresentato testualmente un indirizzo IPv6? Fai un esempio.
33. Come si può comprimere un indirizzo IPv6? Spiega la regola dei leading zeros e della compressione degli zeri.
34. Quali sono le tre parti principali della struttura di un indirizzo IPv6 Global Unicast?
35. Quanti bit occupa l'Interface ID in IPv6 e cosa identifica?
36. Perché attualmente tutti gli indirizzi IPv6 pubblici iniziano con la cifra 2?
37. Come si scrivono in IPv6 l'indirizzo non specificato (unspecified) e l'indirizzo di loopback?
38. Cosa sono gli indirizzi link-local in IPv6? Come si riconoscono e a cosa servono?
39. Cosa sono gli indirizzi site-local in IPv6? Come si differenziano dai link-local?
40. Qual è la differenza fondamentale tra IPv4 e IPv6 per quanto riguarda la necessità del NAT?

#### Sottosezione 5.3.1 – Prefix Delegation e Subnetting
41. Cosa significa Prefix Delegation in IPv6? Quale protocollo lo implementa?
42. Secondo le raccomandazioni europee, quali prefissi dovrebbero essere delegati dagli ISP?
43. Dato un prefisso /56, quante sottoreti /64 si possono ottenere? Perché?
44. Cosa significa l'acronimo SLAAC? A cosa serve?
45. Quali sono le due procedure per generare un indirizzo auto-assegnato con SLAAC?
46. Cosa sono le Privacy Extensions in IPv6 e a cosa servono?

#### Sottosezione 5.3.2 – Altre Novità di IPv6
47. Quali campi sono stati rimossi dall'header IPv6 rispetto a IPv4? Perché?
48. Quanto è lungo l'header IPv6 in byte? Perché è più lungo di quello IPv4?
49. Cosa sono gli Extension Header in IPv6?
50. Quali tre macro-categorie di indirizzi sono previste in IPv6? Quale categoria è stata eliminata rispetto a IPv4?
51. A cosa serve un indirizzo multicast in IPv6? Quale prefisso hanno?
52. Cosa sono gli indirizzi anycast? Come si comporta la rete quando viene inviato un pacchetto a un indirizzo anycast?
53. Quali due extension header forniscono sicurezza in IPv6? Che differenza c'è tra AH e ESP?
54. Qual è la differenza tra Transport Mode e Tunnel Mode per AH e ESP?
55. Cosa si intende per Security Association (SA)?

### Sezione 5.4 – Algoritmi di Routing
56. Quali sono i due servizi principali forniti da un router?
57. Cosa si intende per Autonomous System (AS)? A cosa serve l'ASN?
58. Qual è la differenza tra interior router e edge router?
59. Quali due elementi deve contenere come minimo ogni entry di una tabella di routing?
60. Qual è la differenza tra algoritmi di routing statici e dinamici?
61. Quali metriche possono essere utilizzate per selezionare il percorso migliore? Quali due sono universalmente accettati?
62. Quali sono le cinque caratteristiche tipiche degli algoritmi di routing (ottimizzazione, semplicità, rapidità di convergenza, scalabilità, robustezza)?

#### Sottosezione 5.4.1 – Distance Vector
63. Su quale algoritmo matematico si basa il Distance Vector?
64. Qual è l'idea base dell'algoritmo Distance Vector?
65. Cosa contiene la tabella di routing di un nodo al "cold start"?
66. Cosa succede in caso di malfunzionamento di un link? Quali tre azioni compie il nodo?
67. Cosa sono l'effetto rimbalzo (bouncing) e il counting to infinity?
68. Come si può terminare il counting to infinity?
69. In cosa consiste la tecnica Split Horizon?
70. Come funziona la variante più aggressiva "Split Horizon con poison reverse"?

#### Sottosezione 5.4.2 – Link State
71. Qual è il principio base degli algoritmi Link State?
72. Quali sono i tre concetti chiave del Link State Routing?
73. Cosa si intende per flooding nel contesto del Link State?
74. Quando un router invia informazioni agli altri router in un protocollo Link State?
75. Quali sono le quattro fasi dell'algoritmo Link State?
76. Quale algoritmo viene tipicamente usato nella fase 3 per calcolare il percorso minimo?
77. Quali sono i principali vantaggi degli algoritmi Link State rispetto a Distance Vector?
78. Quali sono i principali svantaggi degli algoritmi Link State?
79. Cosa significa l'acronimo OSPF? Quali sono le tre versioni e cosa le caratterizza?
80. Cosa sono gli LSA (Link State Advertisements) e l'LSDB (Link State Database)?
81. A cosa servono le aree in OSPF? Quali regole devono rispettare?

### Sezione 5.5 – Congestione
82. Cosa si intende per congestione della rete?
83. Quali sono le principali cause della congestione?
84. Quali due parametri consentono di riscontrare l'insorgere di congestione?
85. Come si comportano ritardo e throughput al crescere del traffico?

#### Sottosezione 5.5.1 – Controllo Proattivo
86. In cosa consiste l'approccio proattivo al controllo della congestione?
87. Quali rischi comporta una politica di ritrasmissione aggressiva in termini di congestione?
88. Perché il meccanismo di finestra scorrevole con ripetizione selettiva è preferibile a Go Back N in presenza di congestione?
89. In che modo le politiche di eliminazione dei pacchetti nei router possono prevenire la congestione?
90. Come funzionano le politiche di accesso per reti a circuito virtuale nella prevenzione della congestione?

#### Sottosezione 5.5.2 – Controllo Reattivo
91. In cosa consiste l'approccio reattivo al controllo della congestione?
92. Cosa sono i choke packets? Come funzionano?
93. Cosa fa il meccanismo Source Quench in TCP/IP? Perché oggi non viene quasi mai usato?
94. In cosa consiste la tecnica della "pressione all'indietro" (backpressure)? Quale effetto collaterale può avere?
95. Qual è la differenza tra segnalazione implicita e segnalazione esplicita della congestione?
96. Che differenza c'è tra segnalazione diretta (forward) e segnalazione all'indietro (backward)?

#### Sottosezione 5.5.3 – Leaky Bucket / Token Bucket
97. A cosa servono gli algoritmi Leaky Bucket e Token Bucket?
98. Spiega il funzionamento dell'algoritmo Leaky Bucket usando l'analogia del secchio bucato.
99. Cosa significa "tail drop" nel contesto del Leaky Bucket?
100. Quale limite ha il Leaky Bucket che il Token Bucket supera?
101. Spiega il funzionamento dell'algoritmo Token Bucket.
102. Quali sono i principali svantaggi del Token Bucket rispetto al Leaky Bucket?

#### Sottosezione 5.5.4 – Load Shedding
103. Cosa si intende per load shedding (riduzione del carico)?
104. Qual è la differenza tra la "wine policy" e la "milk policy" nella scelta dei pacchetti da scartare? Per quale tipo di applicazione è adatta ciascuna?
105. In quale campo dell'header IP il mittente può contrassegnare la priorità del pacchetto?
106. Cosa significa l'acronimo RED (Random Early Detection)? Di che tipo di approccio si tratta (proattivo/reattivo)?
107. Quali sono i punti essenziali dell'algoritmo RED?
108. Perché RED utilizza una media pesata della lunghezza della coda invece del valore istantaneo?
109. Cosa succede quando la lunghezza media della coda supera la soglia minima in RED? E quando supera la soglia massima?
110. In quali due modi può consistere la "marcatura" di un pacchetto in RED?

### Domande trasversali e di confronto
111. Confronta IPv4 e IPv6 in termini di: lunghezza dell'indirizzo, dimensione dell'header, presenza del checksum, supporto al broadcast, sicurezza nativa.
112. Confronta gli algoritmi Distance Vector e Link State in termini di: conoscenza della topologia, velocità di convergenza, rischio di loop, scalabilità, consumo di risorse.
113. Spiega la differenza tra controllo proattivo e reattivo della congestione. Fornisci almeno due esempi per ciascuna categoria.
114. Confronta l'algoritmo Leaky Bucket e Token Bucket in termini di gestione dei burst e del tempo di inattività.
115. Quali sono le differenze principali tra indirizzi unicast, multicast e anycast in IPv6?
116. Perché il NAT è molto comune in IPv4 ma non necessario in IPv6?