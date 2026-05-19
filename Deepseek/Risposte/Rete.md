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