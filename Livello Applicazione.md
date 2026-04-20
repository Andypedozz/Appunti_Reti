# Livello Applicazione

In questo livello si trovano tutte le applicazioni, che fruiscono dei livelli sottostanti per il trasporto affidabile. Anche qui tuttavia c'è bisogno di protocolli di supporto, tra cui fondamentale il DNS, che gestisce i nomi in Internet. Poi vedremo: posta elettronica, World Wide Web e contenuti multimediali.

## Posta Elettronica: MIME, SMTP, IMAP, POP3

L'architettura dei sistemi di posta elettronica è composta da sottosistemi normalmente:
* User Agent: consentono di leggere e inviare posta elettronica
* Message Transfer Agent: spostano i messaggi dalla sorgente alla destinazione, informalmente chiamati mail server.

### User Agent
Un User Agent è un programma con un interfaccia grafica, testuale, o su comandi, per interagire con il sistema di posta: comporre, rispondere, visualizzare o organizzare messaggi.

Alcune elaborazione dello User Agent possono essere automatiche, anticipando i desideri degli utenti, come il filtraggio delle e-mail in ingresso per estrarre o attribuire una minore priorità ai messaggi come spam. Altri user agent forniscono compilazione automatica di una e-mail di risposta.

## Message Transfer Agent
Sono tipicamente processi di sistema eseguiti come servizi sui mail server e pensati per essere sempre disponibili. Il loro compito è spostare automaticamente le e-mail attraverso il sistema dalla sorgente al destinatario tramite SMTP (Simple Mail Transfer Protocol).

### SMTP
SMTP vennere specificato nell'RFC 821, poi rivisto in RFC 5321. Esso invia le e-mail con un approccio orientato alla connessione e notifica lo stato della consegna e errori, fondamentale e con rilevanza legale in alcune applicazioni.

I message transfer agent implementano anche le mailing list, tramite cui copie di un messaggio vengono consegnate a ogni iscritto alla lista.

### Mailbox
Le mailbox memorizzano le e-mail ricevute dall'utente e sono mantenute dai mail server, e gli user agent tramite comandi possono accedere a tali mailbox e manipolare, cancellando, ispezionando i contenuti, le e-mail.

Nei sistemi di posta si distingue tra involucro (envelope) e il contenuto. L'involucro incapsula il messaggio inserendo informazioni come indirizzo di destinazione, livello di protezione, priorità, e vengono usate dai message transfer agent per il routing. Il messaggio invece è costituito da intestazione e corpo: la prima contiene informazioni di controllo per gli user agent, il secondo è tutto contenuto di messaggio per l'utente.

### Formato dei messaggi
La struttura dei messaggi di posta, descritti nel RFC 5321, è costituita da:
* Involucro:
    parte iniziale del messaggio, con info per la consegna, mittente e destinatari. Costruito dal MTA tramite i campi intestazione

* Intestazione:
    informazioni aggiuntive che danno dettagli sul messaggio, come:
    * To: indirizzi DNS dei destinatari del messaggio
    * Cc: Indirizzi dei destinatari secondari
    * Bcc: Simile a Cc, ma nascosto ai destinatari principali e secondari
    * From: Chi ha scritto il messaggio
    * Sender: chi ha effettivamente inviato il messaggio
    * Received: Aggiunti da ogni MTA lungo il percorso, info sulla ricezione del messaggio
    * Return-Path: un modo per ricontattare il mittente
    * Message-Id: identificativo del messaggio per evitare duplicazioni
    * Reply-to: a chi rispondere, utile quando mittente e inviatore sono diversi

* Corpo del messaggio:
    contenuto effettivo del messaggio, come testo, allegati, immagini, ecc.

### MIME
MIME (Multipurpose Internet Mail Extension) è stato sviluppato per superare i limiti dei messaggi di posta basati solo su testo ASCII, consentendo di inviare contenuti più complessi, come lingue con accenti, alfabeti non latini, ideogrammi e file non testuali.

I messaggi MIME includono 5 nuove intestazioni:
* MIME-Version: Versione MIME utilizzata nel messaggio
* Content-Description: Contenuto del messaggio per aiutare il destinatario a decidere se leggerlo
* Content-Id: Identificativo del contenuto
* Content-Transfer-Encoding: Codifica usata per trasmettere il contenuto con SMTP
* Content-Type: natura del corpo del messaggio, tipo di dati, come testo, immagini, audio, ecc

I tipi MIME includono testo, immagine, audio, video, modello, applicazione e messaggio, con vari sottotipi.
Esempi:
* text/plain
* text/html
* image/jpeg
* audio/mpeg
* application/pdf
* application/json

MIME consente anche di comporre messaggi multipli, inclusi allegati e varianti in diverse lingue e formati, grazie ai tipi multipart.

### Consegna Finale


### IMAP
IMAP (Internet Message Access Protocol) è un protocollo usato per accedere e gestire le email sul server di posta. Esso prevede IMAP ascolti sulla porta 143. Un client IMAP si connette al server e usa una serie di comandi per interagire con le mail.

Prima dell'utilizzo, il client può instaurare una sessione di trasporto sicura autenticandosi sul server. Fatto ciò, può lavorare con le mailbox.

IMAP è un miglioramento rispetto a POP3 (Post Office Protocol). Mentre POP3 scarica di solito i messaggi sul client, rendendo difficile la gestione delle mail su più dispositivi, IMAP mantiene i messaggi sul server e li sincronizza tra diversi device. Tuttavia POP3 è ancora in uso.

### Webmail
Webmail è un alternativa sempre più diffusa rispetto a IMAP e SMTP per gestire la posta, consentendo agli utenti di consultare la posta tramite GUI Web. I principali provider sono Gmail, Hotmail, Yahoo. In questo modello, il software di gestione posta è fornito come servizio Web.

In questa architettura il provider gestisce un server di posta che accetta messaggi tramite SMTP sulla porta 25. Lo UA è un interfaccia realizzata nel browser.

Quando un utente accede allo UA, inserisce le sue credenziali, inviata al server per la convalida. Se l'autenticazione ha successo, il server recupera le caselle di posta dell'utente e genera una pagina web che ne mostra il contenuto.

Per inviare un nuovo messaggio, l'utente compila un modulo web e invia i dati al server usando HTTP. Il server Web invia il messaggio tramite il sistema di consegna tradizionale.

## Protocolli di Trasporto File

### FTP
FTP (File Transfer Protocol) è stato progettato per consentire a utentei di trasferire file in modo efficiente e affidabile da un host all'altro attraverso Internet.

Esso offre due tipi di accesso: autenticato e anonimo. Quello autentivcato richiedi una coppia di account/password, mentre quello anonimo è senza restrizioni.

Nel funzionamento di FTP, il client FTP stabilisce una connessione TCP con il server FTP remoto. Poi, viene effettuata l'autenticazione inviando nome utente e password come comandi FTP, permettendo poi il trasferimento di file da e verso il server.

Esistono due modalità di trasferimento: modalità attiva e passiva.
In quella attiva, la connessioni di controllo è avviata dal client mentre quella dati è avviata dal server. In quella passiva, entrambe sono avviate dal client.

### TFTP
Il protocollo TFTP (Trivial File Transfer Protocol) è stato progettato per scopi specifici, come trasferire file rapidamente, senza necessità di tutte le funzionalità di FTP.

Caratteristiche Principali:
* Utilizzo e design: TFTP viene usato per trasferire file tra processi in una rete. Overhead minimo e non include funzionalità di sicurezza come l'autenticazione.
* Protocollo di trasporto: progettato per usare UDP, ma può essere usato anche con altri protocolli di trasporto.
* Facilità di implementazione: progettato per essere facile da implementare, perciò adatto a dispositivi con capacità limitate o firmware incorporato.
* Piccole dimensioni: dimensioni ridotte.
* Messaggi del protocollo: TFTP si basa su cinque tipi di messaggi
    - Richiesta di lettura: inviata dal client per richiedere il trasferimento di un file dal server
    - Richiesta di scrittura: inviata dal client per inviare un file al server
    - Dati: inviati dal server al client e contengono blocchi di dati del file
    - Acknowledgement: inviato dal client al server per confermare la ricezione dei dati
    - Errore: inviato dal server al client in caso di errore nel trasferimento
* Modalità attiva e passiva:

## DNS - Domain Name System
All'inizio Internet era piccolo: meno di 100 host popolavano la rete, perciò tutti conoscevano tutti, ma ciò non era adatto allo scalare della rete.

Perciò arrivò il DNS, in sistema per introdurre nomi in ASCII per identificare gli host e separare i nomi dagli indirizzi IP. Il DNS è un sistema di denominazione gerarchico, basato su un database distribuito per la sua implementazione.

Per associare un IP a un nome, le app richiamano una procedura di libreria (resolver), come getHostByName(). Con l'IP, l'app può stabilire una connessione TCP o UDP.

Lo spazio dei nomi DNS è strutturato gertarchicamente, come un indirizzo di posta, cona una directory radice rappresentata da un punto (.), seguita da due gerarchie di dominio di primo livello: organizzativa e geografica.

Quando un host invia una richiesta DNS, viene inoltrata al server locale, che agisce come server proxy.

Il processo di risoluzione dei nomi segue i seguenti passi:
1. Un server DNS ha una cache iniziale (hints) che contiene gli indirizzi noti dei server di nome radice, che viene aggiornato periodicamente in modo affidabile.
2. Quando un client effettua una richiesta ricorsiva a quel server, esso elabora la richiesta usando la cache
3. Viene effettuata una query a uno dei server radice per trovare il server autoritativo per il dominio di primo livello richiesto
4. Viene ricevuta una risposta che indica il nameserver per quella risorsa
5. Il server visita l'albero da destra a sinistra, passando presso i vari nameserver, fino al passo finale che restituisce l'IP dell'host in questione.
6. L'IP della risorsa viene restituito al client.
Il DNS è relativamente leggero e usa UDP, in modo che abbiano poco overhead. Le query superiori a 512 byte, e altre operazioni più pesanti, usano TCP per evitare problemi di consegna.

### Campi del protocollo
I campi del protocollo DNS sono fondamentali per il suo funzionamento, in quanto specificano dettagli delle richieste o risposte.
* Identifier: un ID a 16 bit che identifica risposte e richieste
* Query/Response Flag: campo a 4 bit che dice se il pacchetto è richiesta o risposta
* Opcode: tipo di messaggio:
    - 0: query standard
    - 1: query inversa (obsoleta)
    - 2 stato del server
    - 3: riservato e non usato
    - 4: messaggio di notifica
    - 5: aggiornamento (Dynamic DNS)
* AA: 1 bit che indica una risposta autorevole
    - 1 se è autorevole, ossia il server che ha fornito la risposta è autorevole per il dominio in questione
    - 0 non è autorevole
* TC: campo a 1 bit per la troncatura. Indica che è stata inviata tramite UDP ma era più lunga di 512 byte
* RD: campo a 1 bit chiamato "Ricorsione Desiderata", significa che il client sta chiedendo al server di attraversare l'albero per conto del client e restituire solo la risposta anziche indicare dove cercare:
* RA: 1 bit chiamato "Ricorsione Disponibile", in cui un server DNS indica a un client se supporta o meno la ricorsione.

Poi ci sono altri campi:
* Z: 3 bit riservati sempre a 0
* RCode: 4 bit impostato a 0 nelle query con le seguenti opzioni:
    0: nessun errore
    1: errore di formato
    2: errore del server
    3: errore di nome
    4: non implementato
    5: rifiutato
    6: il nome esiste ma non dovrebbe
    7: esiste un record che non dovrebbe esistere
    9: risposta non autorevole
    10: il nome della risposta non è all'interno della zona specificata
* QDCount: quante domande nella sezione delle domande
* ANCount: Quante risposte nella sezione delle risposte
* NSCount: quanti record nella sezione di autorità
* ARCount: quanti record nella sezione aggiuntiva

Una query DNS consiste in:
* qname: nome di dominio (www.ripe.net)
* qtype: il tipo di query, che può essere A, AAAA, MX, CNAME, PTR, SRV, TXT, NS.
* qclass: classe della query, generalmente IN (Internet), mentre CH e HS sono poco usati
* Flags: includono QR (Response Code), RD (Recursive Desired), EDNS Opt, DO (DNSSEC OK), AD (Authenticated Data), ecc.

I record delle risorse sono associati a ogni dominio e possono includere:
* Name
* TTL
* Class
* Type
* Value

Ad esempio:
* SOA
* A
* MX
* NS
* CNAME
* PTR
* HINFO
* TXT

### Server
I server DNS gestiscono lo spazio dei nomi DNS, diviso in zone disgiunte. Quando un resolver ha una query per un dominio, viene interrogato il server dei nomi locale.

Se il dominio appartiene alla zona del server dei nomi (come ai.cs.yale.edu), viene fornito un record di risorsa autoritativo. Altrimenti, se il dominio è remoto e non ci sono info locali disponibili, il server dei nomi si rivolge al server di dominio di primo livello (TLD) per il dominio richiesto.

Ad esempio, se un resolver su flits.cs.vu.nl desidera l'IP di linda.cs.yale.edu, il server dei nomi locale (cs.vu.nl) viene interrogato.

### Problemi

## World Wide Web
Dal punto di vista degli utenti, il Web è una raccolta mondiale di documenti e pagine Web. Ogni pagina può contenere link ad altre pagine situate ovunque nel mondo.

Le pagine sono visualizzate con un programma detto browser, tra cui Firefox, Explorer, Chrome. Il browser preleva la pagina richiesta, interpreta il testo e i comandi di formattazione, visualizza la pagina sullo schermo. Il contenuto può essere testo, immagini, comandi di formattazione.

Il modello di base del funzionamento del Web è:
- il browser visualizza una pagina sulla macchina client
- Ogni pagina viene presa inviando una richiesta a uno o più server che rispondono inviando tale pagina.
- il protocollo di domanda e risposta per catturare le pagine è un protocollo basato sul testo, che usa TCP, detto HTTP
- Il contenuto può essere la qualsiasi: un file su disco, un interrogazione a database o l'esecuzione di un programma.

### Il lato client
Un browser è un programma che può visualizzare una pagina e rilevare i click del mouse sugli elementi di essa.

Quando fu creato il Web, divenne subito chiaro che la disponibilità di pagine che ne referenziassero altre richiededva un meccanismo per denominare e individuare le pagine.

Se a ogni pagina fosse assegnato un nome univoco non vi sarebbero ambiguità nell'identificazione; tuttavia non si risolverebbe il problema.

Per identificare le pagina in un modo che risolve tutti i problemi si assegna ad ognuna un URL (Uniform Resource Locator), che serve come nome mondiale per la pagina. Gli URL sono fatti da 3 parti:
* protocollo
* nome DNS della macchina su cui è situata la pagina
* un percorso che indica in modo univoco la pagina specifica.
Nel caso generale il percorso ha struttura gerarchica e rispecchia il modella della struttura gerarchica delle directory.

http://www.cs.washington.edu/index.html
Questo URL è formato da:
- Protocollo: http
- DNS: www.cs.washington.edu
- percorso: index.html

Quando un utente richiede una pagina, il browser esegue i seguenti passaggi:
1. Determina l'URL
2. Richiede al DNS l'IP del server www.cs.washington.edu
3. il DNS risponde con 128.208.3.88
4. Il browser esegue una connessione TCP alla porta 80 su 128.208.3.88
5. Invia una richiesta HTTP per la pagina index.html
6. Il server www.cs.washington.edu invia la pagina come risposta HTTP inviando, il file index.html
7. Se la pagina include URL necessari alla visualizzazione il browser prende gli altri URL usando lo stesso procedimento.
8. Il browser visualizza la pagina
9. La connessione TCP viene rilasciata se non vi sono altre richieste agli stessi server per un breve periodo.

### Minacce alla sicurezza
Le vulnerabilità, sia lato client che server, sono una preoccupazione costante per chi sviluppa e gestisce pagine web, in quanto possono compromettere riservatezza, integrità e disponibilità dei dati.

Sul lato server, una delle principali minacce è l'SQL Injection.
Gli attaccanti possono sfruttare vulnerabilità nei moduli di input dell'utente per iniettare codice SQL malevolo. Questo attacco può portare a violazione dei dati, cancellazioni o modifiche non autorizzate.

Un altra minaccia è l'XSS, che si verifica quando un attaccante inietta del JavaScript malevolo in una pagina web visualizzata da altri utenti. Questo codice può rubare dati sensibili, come i cookie di sessione.

Un altra minaccia è il Cross-Site Request Forgery (CSRF), che consente agli attaccanti di indurre un utente a compiere azioni involontarie su una web app su cui è autenticato.

Infine c'è una minaccia detta File Inclusion, con cui gli attaccanti possono inserire file dannosi sul server, sfruttando vulnerabilità nei percorsi di inclusione dei file.

Sul lato client, l'XSS rimane una minaccia rilevante, in quanto il codice viene eseguito nel contesto del browser dell'utente, potendo rubare dati locali o alterando il comportamento della pagina.

Un altra minaccia è il ClickJacking, con cui gli attaccanti sovrappongo a una pagina web contenuti invisibili per indurre gli utenti a cliccare su elementi diversi da quelli che intendono.

Gli attacchi Man-In-The-Middle costituiscono un altra criticità, durante la trasmissione dei dati tra client e server, con cui un attaccante può intercettare e dirottare la comunicazione, rubando dati o inserendone di dannosi.

Infini il Phishing, è una minaccia costante, dove gli utenti possono essere ingannati da pagine fraudolente che sembrano legittime, portandoli a fornire dati sensibili come credenziali o carte di credito.

Per difendersi da queste minacce, è essenziale adottare tecnologie e configurazioni difensive. La santizzazione e validazione degli input è fondamentale per evitare iniezioni di codice malevolo. L'implementazione di metodi robusti di autenticazione e autorizzazione garantisce che solo gli utenti autorizzati possano accedere a risorse sensibili. L'adozione di HTTPS è cruciale per criptare iu dati e prevenire attacchi MitM, Le Content Security Policy (CSP) aiutano a prevenire attacchi XSS, specificando quali script possono essere eseguiti sul sito, mentre i cookie con l'attributo "SameSite" limitano le richieste Cross-Site. Infine, l'uso di intestazione HTTP come X-Frame-Options prevengono il ClickJacking, impedendo l'incorporazione delle pagine in iframe di terze parti.

### Il lato server
Come affermato in precedenza, quando si digita un URL, il browser lo analizza sintatticamente e interpreta la parte http::// e lo slash successivo come il nome DNS da cercare.

### Cookie
I cookie sono un meccaniscmo che è stato inserito per fornire pagine differenti a utenti diversi a seconda di quello che hanno già fatto con un server di un sito.

Un cookie è un piccolo file o stringa (che non supera i 4 KB), che il server può associare a un browser. I browser archiviano i cookie in una directory sul disco del client, se attivati. Essi sono solo file o stringhe, non programmi eseguibili, quindi teoricamente non possono contenere virus.

Un cookie può contenere fino a 5 campi:
* Domain: indica da dove proviene il cookie.
* Path: è un percorso nella struttura delle directory del server che identifica quale parte della struttura di file del server può utilizzare il cookie.
* Content: assume la forma nome = valore. Nome e valore sono due stringhe.
* Expires: indica quando scade il cookie. Se è assente, il browser scarta il cookie alla sua chiusura; un cookie del genere si chiama "non persistente".
* Secure: può essere impostato per indicare che il browser può restituire in cookie a un server solo se trasportato con SSL/TLS.

## HTTP
Il protocollo HTTP è un protocollo semplice basato sul modello Request/response, implementato su TCP. Esso indica quali messaggi i client possono inviare ai server e quali risposte vengono restituite. Come SMTP, le intestazioni di domande e risposte sono formate in ASCII. I contenuti dei dati sono in un formato simile al MIME.

All'inizio del web, con HTTP 1.0, dopo aver instaurato la connessione TCP, veniva inviata una singola richiesta e restituita una singola risposta. A questo punto si rilasciava la connessione. Col tempo le pagine si riempivano sempre di più contenuti di diverso tipo, e instaurare singole connessioni e rilasciarle, ad esempio per trasferire un icona, era molto costoso.

Così con HTTP 1.1, si è iniziato a supportare connessioni persistenti. Così si può instaurare una connessione TCP e mantenerla per inviare più richieste e ottenere più risposte. Ciò si dice "Riutilizzo della connessione".

### Caching
Gli utenti tornano spesso alle pagine web già viste, e pagine web correlate hanno spesso le stesse risorse, come immagini usate per la navigazione in un sito, fogli di stile comuni e script.

La procedura di memorizzare in una cache delle pagine recuperate per farne un uso successivo viene detto caching. Il vantaggio è che quando una pagina è in cache, non server richiederla al server. HTTP ha un supporto integrato che aiuta i client a capire quando possono riusare pagine cachate.

## Distribuzione dei contenuti

### Server Farm e Proxy Web

### Server Farm

### Proxy Web

## CDN - Content Delivery Network