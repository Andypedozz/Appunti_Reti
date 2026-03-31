# Livello Trasporto

Questo livello è il cuore dello stack protocollare, si basa sul livello rete per fornire il trasporto dei dati da un processo su una macchina sorgente a un processo su una macchina destinazione con un'affidabilità desiderata e indipendente dai livelli sottostanti.

## Descrizione dei Servizi
L'obiettivo di tale livello è fornire un servizio di trasmissione dati efficiente e affidabile in termini dei costi ai suoi utenti. Per farlo si serve dei servizi del livello rete. L'hardware e il software di questo livello vengono chiamati entità di trasporto. L'entità di trasporto può essere situata nel kernel del sistema operativo, in un processo utente, in librerie associate alle applicazioni di rete o nella scheda di rete.

Esso offre due servizi di trasporto, orientato e non orientato alla connessione, ma in entrambi i casi le connessioni seguono tre fasi: impostazione, trasferimento dati e rilascio.

Se in una rete connectionless vengono persi o danneggiati i pacchetti, l'entità di trasporto può rilevare il problema ed effettuare ritrasmissioni, oppure se la rete è connectionful, un entità di trasporto è informata a metà di lunga trasmissione che la connessione è stata interrotta, e può impostare una nuova connessione verso l'entità di trasporto remota.

Il livello di trasporto svolge la funzione di isolare i livelli superiori dalla struttura e dalle imperfezioni della rete, fornitori del livello trasporto.

## Primitive
Per consentire agli utenti di accedere al servizio di trasporto, tale livello fornisce alcune funzionalità ai programmi applicativi, un interfaccia.

Consideriamo un applicazione  con un server e client remoti. Per iniziare il server esegue una LISTEN, chiamando generalmente una procedura di libreria, che effettua una systemcall che blocca il server fino al sopraggiungere di un client. Quando un client vuole comunicare con il server, esegue una primitiva CONNECT. L'entità di trasporto esegue questa primitiva bloccando il chimante e inviando un pacchetto al server, contenente nel payload il messaggio per il server.

In mancanza di un termine migliore, chiamiamo segmento un messaggio spedito da un entità di trasporto all'altra.
TCP, UDP e altri protocolli usano questo termine, mentre altri usavano il termine TPDU (Transport control data unit). Dunque i segmenti sono contenuti in pacchetti che a loro volta sono contenuti in frame. (Livello 4 - 3 - 2)

La chiamata CONNECT del client provoca l'invio al server di un segmento CONNECTION REQUEST. Quando arriva, l'entità di trasporto controlla se il server è bloccato su una LISTEN: in tal caso sblocca il server e invia un segmento CONNECTION ACCEPTED al client. Quando questo arriva al client, esso viene sbloccato e la connessione è stabilita. Da ora i messaggi possono essere scambiati tramite primitive SEND e RECEIVE, e in entrambi i lati possono inviare una RECEIVE bloccante in attesa di una risposta dall'altro lato.

Quando una connessione non è più necessaria, deve essere rilasciata per liberare spazio nelle tabelle delle due entità di trasporto. La disconnessione presenta due varianti: asimmetrica e simmetrica:
* Asimmetrica: ogni utente del trasporto può emettere una DISCONNECGT che provoa l'invio di un segmento DISCONNET all'entità remota. Al suo arrivo la connessione viene rilasciata.
* Simmetrica: ogni direzione viene chiusa separatamente, indipendentemente dall'altra.
Quando un lato usa DISCONNECT significa che non ha altro da iniare, ma è ancora in grado di ricevere dal suo partner. Perciò la connessione viene chiusa quando entrami chiamano DISCONNECT.

## Socket di Berkeley
Le socket di Berkeley sono un gruppo di primitive di trasporto usate per TCP, che seguono circa lo stesso modello precedente ma aggiungono caratteristiche e flessibilità.
* SOCKET
* BIND
* LISTEN
* ACCEPT
* CONNECT
* SEND
* RECEIVE
* CLOSE

Funzionamento:
* Creazione e assegnazione di indirizzo: la sequenza inizia con la creazione di una socket, seguita dall'assegnazione di un indirizzo usando la primitiva BIND.
* Ascolto delle connessioni in arrivo: la chiamata LISTEN permette al server di accodare le connessioni in arrivo in caso più client tentino di connettersi simultaneamente.
* Accettazione delle connessioni in ingresso: Quando giunge una richiesta, il server usa ACCEPT per creare una nuova socket.

Lato client:
* Connessione al server: il client usa CONNECT per avviare il processo di connessione. Una volta stabilita, entrambe le parti possono trasmettere con SEND e RECEIVE.

## Elementi dei Protocolli di Trasporto
Per certi aspetti il livello di trasporto ricorda i protocolli data link. Entrambi hanno a che fare con controllo degli errori, l'ordinamento e il controllo di flusso.

Tuttavia vi sono differenze significative, dovute alle diversità tra gli ambienti in cui operano. Nel livello data link due router comunicano direttamente tramite un canale fisico, mentre nel livello di trasporto il canale fisico è costituito da un intera rete.
Altre differenze importantio sono:
* Indirizzamento esplicito nel livello trasporto: a differenza dei link punto-punto, dove ogni linera in uscita specifica univocamente il router destinatario, qui è necessario un indirizzamento esplicito delle destinazioni.
* Complessità nella costituzione della connessione: la costituzione della connession è più complessa rispetto al datalink, in cui l'altra estremità è sempre presente.
* Possibilità di memorizzazione nella rete: i pacchetti in datalink non possono rimbalzare avanti e indietro nella rete. Tuttavia, nel livello trasporto esistono capacaità di memorizzazione nella rete che possono causare ritardi, perdite o duplicazioni.
* Buffering e controllo di flusso: entrambi i livelli richiedono buffering e controllo di flusso.

## Indirizzamento
Quando un processo vuole creare una connessione verso un processo remoto, deve specificare a quale connettersi. Il trasporto non orientato alla connessione presenta lo stesso problema: a chi inviamo questo messaggio? Il metodo utilizzato consiste nel definire indirizzi di trasporto su cui io processi possono restare in ascolto. Tali endpoint (o punti terminali) si chiamano porte.

## Stabilire una connessione
Stabilire una connession è un operazione soggetta a complicazioni dovute alle caratteristiche intrinseche delle reti.
Innanzitutto, il fatto che la rete possa perdere, ritardare o corrompere i pacchetti rende l'instaurazione un operazione complessa.

Un possibile scenario problematico si presenta se la rete è congestionata, dove agli acknowledgments che non riescono quasi mai a tornare indietro in tempo. In tal caso ogni pacchetto potrebbe subire un timeout ed essere ritrasmesso, causando maggior congestione. Se la rete usa datagrammi e i pacchetti seguono percorsi diversi, alcuni di essi potrebbero restare bloccati in zone congestionate, arrivando in ritardo o fuori sequenza.

Il peggior scenario coinvolge una transazione finanziaria critica. Se i pacchetti coinvolti nella transazione vengono instradati in modo diverso, il mittente potrebbe subire il timeout e ritrasmettere i pacchetti convinto che siano persi. Tuttavia essi potrebbero rispuntare in ritardo o fuori sequenza, causando confusione e potenzialmente generando transazioni duplicate.

Tomlinson propose di dotare ogni host di un orologio, che non ha bisogno di essere sincronizzato con gli altri; si assume che ogni orologio sia un contatore binario che si incrementi a intervalli regolari. Il numero di bit deve essere >= al numero di bit del numero di sequenza. Si assume inoltre che l'orologio continui a misurare il tempo anche se l'host non sta funzionando.
Quando viene stabilita una connessione, i k bit di ordine più basso dell'orologio sono usati come primo numero di sequenza. La regione proibita mostra i tempi per cui i numeri di seq sei segmenti non sono ammissibile per essere utilizzati.

Il metodo dell'orologio risolve il problema della distinzione tra segmenti duplicati da quelli nuovi. Tuttavia, poiché normalmente non ricordiamo i numeri di seq tra una connessione e l'altra, non abbiamo modo di sapere se un segmento CONNECTION REQUEST contenente un numero di seq iniziale sia un duplicato di una connessione recente.

Per risolvere ciò, si è introdotto il 3 way handshake.
Questo protocollo per l'impostazione della connessione richiede la verifica reciproca da parte dei peer che l'attuale richiesta di connessione non sia un duplicato.

Procedura:
* l'host 1 sceglie un numero di sequenza x e invia un segmento CONNECTION REQUEST contenente x all'host 2
* l'host 2 risponde con unsegmento ACK per confermare x e annunciare il suo numero di sequenza iniziale y
* l'host conferma la scelta del numero di sequenza iniziale dell'host 2 con il primo segmento dati inviato.

## Rilasciare una connessione
Rilasciare una connessione è più facile di stabilirla, ma ci sono comunque delle complessità.
Il rilascio asimmetrico è utilizzato dal sistema telefonico: quando una delle due parti riattacca la connessione viene interrotta.

Quando arriva un segmento DISCONNECT REQUEST, il destinatario restituisce un segmento DR e avvia un timer. All'arrivo di questo DR, il mittente originale invia un ACK e rilascia la connessione.
Per finire quando arriva l'ACK, il ricevente rilascia la connessione.
Il rilascio di una connessione implica la rimozione all'interno dell'entità di trasporto delle informazioni sulla connessione dalla tabella delle connessioni aperte.

Se l'ACK finale viene perso, la situazione viene risolta dal timer, al cui scadere la connessione viene comunque rilasciata.

## Controllo degli Errori e di Flusso
