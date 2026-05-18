## Livello Applicazione

### Sezione 8.1 – Posta Elettronica: MIME, SMTP, IMAP, POP3
1. Quali sono i due sottosistemi che compongono l'architettura di un sistema di posta elettronica?
2. Cosa sono gli user agent (agenti utente)? Quali funzioni svolgono?
3. Cosa sono i message transfer agent (MTA)? Dove vengono eseguiti e a cosa servono?
4. Quale protocollo utilizzano i message transfer agent per spostare le e-mail?
5. Cosa sono le mailbox (caselle di posta)? Chi le mantiene?
6. Qual è la differenza tra involucro (envelope) e contenuto di un messaggio di posta elettronica?
7. Quali sono le due parti che compongono il messaggio all'interno dell'involucro?

#### Sottosezione 8.1.1 – Formato dei Messaggi
8. Quali sono le tre componenti principali di un messaggio di posta elettronica secondo l'RFC 5321?
9. A cosa serve il campo "To" nell'intestazione di un messaggio?
10. Qual è la differenza tra i campi "Cc" e "Bcc"?
11. Qual è la differenza tra i campi "From" e "Sender"?
12. A cosa serve il campo "Received" aggiunto da ogni MTA?
13. Cosa indica il campo "Return-Path"?
14. A cosa serve il campo "Message-Id"?
15. A cosa serve il campo "Reply-To"?
16. Cosa sono le intestazioni personalizzate che iniziano con "X-"?

##### Sottosezione 8.1.1.1 – RFC 5322 (ex RFC 822)
17. Quale RFC descrive il formato originale dei messaggi di posta elettronica ASCII?

##### Sottosezione 8.1.1.2 – MIME
18. Perché è stato sviluppato MIME (Multipurpose Internet Mail Extension)?
19. Quali limitazioni dei messaggi ASCII supera MIME?
20. Quali sono le cinque nuove intestazioni introdotte da MIME?
21. A cosa serve il campo "Content-Type" in MIME?
22. A cosa serve il campo "Content-Transfer-Encoding"? Quali schemi di codifica esistono?
23. Elenca almeno cinque tipi MIME con relativi sottotipi (es. text/plain).
24. Cosa permettono di fare i tipi multipart (multipart/mixed, multipart/alternative, multipart/related)?
25. Quali sfide legate alla sicurezza presenta l'uso di MIME?

#### Sottosezione 8.1.2 – Consegna Finale
26. Perché SMTP non è adatto per la consegna finale della posta al client? (cos'è un protocollo push?)
27. Quali sono i protocolli utilizzati per la consegna finale della posta?

##### Sottosezione 8.1.2.1 – IMAP
28. Cosa significa l'acronimo IMAP? Su quale porta ascolta il server IMAP?
29. Quali operazioni può eseguire un client IMAP dopo l'autenticazione?
30. Quali sono i principali miglioramenti di IMAP rispetto a POP3?
31. Quale RFC definisce POP3?

##### Sottosezione 8.1.2.2 – Webmail
32. Come funziona il Webmail? Quale protocollo usa il browser per comunicare con il server?
33. Quali sono i principali provider di Webmail menzionati nel testo?
34. Come avviene l'invio di un nuovo messaggio in un sistema di Webmail?

### Sezione 8.2 – Protocolli di Trasporto File
35. Quali sono i due protocolli di trasporto file descritti nel capitolo?

#### Sottosezione 8.2.1 – FTP
36. Cosa significa l'acronimo FTP? A cosa serve?
37. Quali due tipi di accesso offre FTP?
38. Quale protocollo di trasporto utilizza FTP?
39. Perché FTP è definito un protocollo "out-of-band"? Quante connessioni TCP parallele utilizza?
40. Qual è la differenza tra la connessione di controllo e la connessione dati in FTP?
41. Qual è la differenza tra modalità attiva e modalità passiva in FTP?

#### Sottosezione 8.2.2 – TFTP
42. Cosa significa l'acronimo TFTP?
43. Per quali scopi è stato progettato TFTP?
44. Quale protocollo di trasporto utilizza tipicamente TFTP?
45. Perché TFTP è adatto per dispositivi con risorse limitate o firmware incorporato?
46. Quali sono i cinque tipi di messaggi del protocollo TFTP?
47. TFTP supporta la modalità attiva e passiva? Come funzionano?

### Sezione 8.3 – DNS – Domain Name System
48. Perché il vecchio sistema basato sul file hosts non poteva sostenersi con l'espansione di Internet?
49. Cosa significa l'acronimo DNS? A cosa serve?
50. Quale RFC definisce il DNS?
51. Com'è strutturato lo spazio dei nomi DNS?
52. Qual è il simbolo che rappresenta la directory radice del DNS?
53. Quali sono le due gerarchie di dominio di primo livello?
54. Cos'è un resolver DNS? Fai un esempio (come gethostbyname()).
55. Descrivi i passaggi del processo di risoluzione dei nomi DNS.
56. Perché le query DNS usano tipicamente UDP? Quando passano a TCP?

#### Sottosezione 8.3.1 – Campi del Protocollo DNS
57. A cosa serve il campo Identifier nel protocollo DNS?
58. Cosa indica il flag QR (Query/Response)?
59. Cosa indica il flag AA (Authoritative Answer)?
60. Cosa indica il flag TC (Truncation)?
61. Cosa significa il flag RD (Recursion Desired)?
62. Cosa significa il flag RA (Recursion Available)?
63. Quali sono i possibili valori di RCode (Response Code) e cosa indicano?
64. Cosa sono QDCount, ANCount, NSCount e ARCount?
65. Quali sono gli elementi che compongono una query DNS (qname, qtype, qclass)?
66. Cosa sono i Resource Records (RR)? Quali informazioni contengono?
67. Spiega i seguenti tipi di record DNS: A, AAAA, MX, CNAME, PTR, NS, SOA, TXT, HINFO, SRV.
68. Cosa indica il campo TTL (Time To Live) in un record DNS?

#### Sottosezione 8.3.2 – Server DNS
69. Come viene diviso lo spazio dei nomi DNS tra i server? Cosa sono le zone?
70. Qual è la differenza tra un server DNS autorevole e un server cache?
71. Cosa sono le query ricorsive in DNS?
72. Cosa sono le query iterative in DNS?
73. Qual è la differenza tra risposte autorevoli e non autorevoli?
74. Cosa sono le query inverse (reverse DNS)? A cosa servono?
75. Cosa sono i trasferimenti di zona (zone transfer)? Che differenza c'è tra AXFR e IXFR?
76. Perché i trasferimenti di zona usano TCP invece di UDP?
77. Perché i trasferimenti di zona sono sensibili dal punto di vista della sicurezza?

#### Sottosezione 8.3.3 – Problemi del DNS
78. Come aiuta il DNS nella consegna della posta elettronica?
79. Quali sono i problemi di base del DNS (testo non cifrato, UDP, struttura ad albero, fiducia)?
80. Cosa significa l'acronimo DNSSEC? Quale problema risolve?
81. Come funziona DNSSEC? Cosa sono le firme RRSIG e i record DS?
82. Quali sono i principali software DNS menzionati (BIND, Unbound, NSD, Microsoft DNS, Knot DNS, PowerDNS)?
83. Cosa è BIND? Chi lo mantiene?

### Sezione 8.4 – World Wide Web
84. Cos'è il World Wide Web dal punto di vista dell'utente?
85. Cosa sono i link (collegamenti) ipertestuali?
86. Cos'è un browser? Fai alcuni esempi.
87. Qual è la differenza tra pagina statica e pagina dinamica?
88. Cosa sono i cookie e a cosa servono?

#### Sottosezione 8.4.1 – Il Lato Client
89. Quali tre domande devono essere risolte prima di poter visualizzare una pagina selezionata?
90. Cosa significa l'acronimo URL? Da quali tre parti è composto?
91. Analizza l'URL: http://www.cs.washington.edu/index.html
92. Descrivi i passaggi che il browser esegue quando un utente fa click su un collegamento ipertestuale.
93. Su quale porta TCP lavora tipicamente un server HTTP?
94. Quali sono alcuni schemi di URL comuni oltre a http (https, ftp, file, mailto, rtsp, sip, about)?

##### Sottosezione 8.4.1.1 – Minacce alla Sicurezza
95. Quali sono le principali minacce alla sicurezza lato server (SQL Injection, XSS, CSRF, File Inclusion)?
96. Cos'è l'SQL Injection? Come può essere prevenuta?
97. Cos'è il Cross-Site Scripting (XSS)? Quali danni può causare?
98. Cos'è il Cross-Site Request Forgery (CSRF)? Come funziona?
99. Quali sono le principali minacce alla sicurezza lato client (XSS, Clickjacking, MitM, Phishing)?
100. Cos'è il Clickjacking? Come si può prevenire con l'intestazione X-Frame-Options?
101. Cos'è un attacco Man-in-the-Middle (MitM)? Come lo previene HTTPS?
102. Cos'è il Phishing?
103. Quali tecnologie di difesa sono menzionate (validazione input, HTTPS, CSP, cookie SameSite)?

#### Sottosezione 8.4.2 – Il Lato Server
104. Quali sono i passaggi eseguiti da un server Web nel suo ciclo principale?
105. Quale problema risolve l'implementazione multithread di un server Web?
106. Quali sono i passaggi che un modulo di elaborazione di un server Web moderno può eseguire?

#### Sottosezione 8.4.3 – Cookie
107. Cosa sono i cookie in ambito Web? Da dove deriva il nome?
108. Quali informazioni contiene tipicamente un cookie (dominio, percorso, contenuto, scadenza, sicuro)?
109. Qual è la differenza tra cookie persistente e cookie non persistente?
110. Come si può rimuovere un cookie dal disco rigido del client?
111. Cosa indica il campo "Secure" in un cookie?

#### Sottosezione 8.4.4 – HTTP
112. Cosa significa l'acronimo HTTP? Quale RFC lo specifica?
113. Su quale modello si basa HTTP (request-response)?
114. Quali sono le differenze tra HTTP 1.0 e HTTP 1.1?
115. Cosa sono le connessioni persistenti in HTTP 1.1?
116. Cosa significa "pipelining" delle richieste in HTTP?
117. Cosa sono i metodi HTTP? Perché sono stati resi generici?

#### Sottosezione 8.4.5 – Caching
118. Cos'è il caching delle pagine Web? Quale vantaggio offre?
119. Cos'è un GET condizionale (conditional GET)? Quando viene usato?
120. Come fa il client a sapere se una copia nella cache è ancora valida?

### Sezione 8.5 – Distribuzione dei Contenuti
121. Come è cambiato l'uso di Internet dalle comunicazioni ai contenuti?
122. Cosa sono gli "elefanti" e i "topi" nel traffico di rete?
123. Cosa afferma la legge di Zipf in relazione alla popolarità dei contenuti? Qual è la formula?

#### Sottosezione 8.5.1 – Server Farm e Proxy Web
124. Cos'è una server farm? A cosa serve?
125. Come fa una server farm ad apparire come un singolo sito Web?
126. Cos'è il load balancing? Quale politica semplice si può usare (round-robin)?
127. Cosa sono i middlebox? Perché violano i principi della stratificazione dei protocolli?
128. Cos'è un proxy Web? A cosa serve?
129. Qual è la tipica configurazione di un'organizzazione che usa un proxy Web?
130. Cosa sono upstream proxy e downstream proxy?

#### Sottosezione 8.5.1.1 – Server Farm (approfondimento)
131. Quali soluzioni esistono per distribuire le richieste su una server farm?
132. Come può il DNS essere usato per distribuire le richieste?

#### Sottosezione 8.5.1.2 – Proxy Web (approfondimento)
133. Quali benefici porta un proxy Web a un'azienda o ISP?
134. Perché un singolo livello di cache è spesso sufficiente?

### Sezione 8.6 – Content Delivery Network
135. Cosa significa l'acronimo CDN (Content Delivery Network)?
136. In cosa differisce una CDN dalla cache Web tradizionale?
137. Descrivi il funzionamento di una CDN con l'esempio dell'albero di distribuzione.
138. Quali sono le tre ragioni per cui l'uso di proxy server fallisce nella pratica per le CDN?
139. Cos'è il mirroring? Cosa sono i mirror?
140. Cos'è la DNS redirection (reindirizzamento DNS)? Come funziona?
141. Quali due fattori determinano la scelta del nodo CDN "più vicino"?
142. Quale azienda fu la prima ad adottare la tecnica DNS per la distribuzione di contenuti? In che anno?
143. Quali vantaggi hanno gli ISP nell'ospitare un nodo CDN?
144. Quali sono gli esempi di CDN ottimizzate per il video menzionati (Ustream, JET-Stream/Streamzilla)?
145. Cosa sono i MultiCDN? Quali vantaggi offrono (bilanciamento del carico, CDN stacking, etc.)?
146. Cosa significa "CDN stacking"?
147. Quale vantaggio offre lo streaming HTTP adattivo con bitrate variabile?

### Domande trasversali e di confronto
148. Confronta IMAP e POP3 in termini di gestione dei messaggi sul server e supporto multi-dispositivo.
149. Confronta FTP e TFTP in termini di: affidabilità, autenticazione, protocollo di trasporto, complessità.
150. Confronta HTTP 1.0 e HTTP 1.1 in termini di connessioni e pipeline.
151. Confronta server farm, proxy Web e CDN come soluzioni per migliorare le prestazioni del Web.
152. Spiega la differenza tra una query DNS ricorsiva e una iterativa.
153. Confronta i record DNS A, AAAA e MX: a cosa serve ciascuno?
154. Qual è la differenza tra un server DNS autorevole e un server DNS cache?
155. Confronta le minacce alla sicurezza lato server e lato client nel Web.
156. Confronta i cookie persistenti e non persistenti: quando viene cancellato ciascuno?
157. Qual è la differenza architetturale tra una CDN e una rete P2P per la distribuzione di contenuti?