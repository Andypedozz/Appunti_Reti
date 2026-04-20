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


### Server

### Problemi

## World Wide Web

### Il lato client

### Minacce alla sicurezza

### Il lato server

### Cookie

## HTTP

### Caching

## Distribuzione dei contenuti

### Server Farm e Proxy Web

### Server Farm

### Proxy Web

## CDN - Content Delivery Network