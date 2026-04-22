 Poiché TCP offre un flusso di byte affidabile non abbiamo bisogno di checksum |
									       |
1. Email 								       |			
2. Rapporto segnale rumore
 	- Se sul canale è presente un rumore casuale, la situazione peggiora 
		rapidamente, ma il rumore termico provocato dal movimento 
		delle molecole del sistema non può essere rimosso. Il livello di
		di rumore termico si misura facendo il rapporto tra la 
		potenza del segnale e la potenza del rumore: questo rapporto 
		viene chiamato SNR (signal-to-noise ratio). Solitamente, 
		invece di indicare direttamente S/N, il rapporto segnale/rumore 
		viene definito come 10log10S/N e si misura in dB. 


3. Differenza tra router switch hub bridge
	- Cos’è un Router? Il router instrada pacchetti di dati lungo network 
		diversi.  Deve essere collegato ad almeno due network; in genere 
		a due LAN o a due WAN o una LAN ed un network ISP. I router 
		identificano il percorso da seguire utilizzando headers e 
		tabelle di instradamento ed utilizzano protocolli di 
		comunicazione per comunicare tra di loro e per stabilire 
		l’instradamento ottimale tra due host.

	- Cos’è uno Switch? In ambito network, uno switch è un dispositivo che 
		filtra ed instrada pacchetti di dati tra segmenti di LAN.
  		Gli switch operano a livello datalink ed a volte a livello 
		network e sono in grado di supp qualsiasi protocollo dati.
	
	- Cos’è un Hub? Un Hub è un punto di collegamento comune per 
		dispositivi in un network.  Gli hub in genere sono utilizzati 
		per collegare segmenti di una LAN. Un hub contiene molteplici 
		porte. Quando un pacchetto dati arriva in una porta, viene 
		immediatamente copiato anche sulle altre porte così che anche 
		gli altri network possano vedere i pacchetti dati.

	- Confronto Hub e Switch? Ambedue fungono da collegamento centrale per 
		tutti i dispositivi collegati al network e gestiscono un 
		tipo di dati chiamato frame.  I frame trasportano i tuoi dati. 
		Quando un frame arriva nel dispositivo, viene amplificato 
		e trasmesso al dispositivo a cui è destinato.  La differenza 
		sta solo nel modo in cui questi frame vengono consegnati.
		L’hub condivide la lunghezza di banda con tutte le sue porte.  
		Se per esempio molteplici PC inviano dati all’hub, 
		la bandwidth sarà suddivisa tra tutti i sistemi attivi, tutto 
		ciò a discapito della performance. Con gli switch questo non 
		accade. Oltre a gestire i pacchetti dati in maniera più 
		efficiente e veloce (tramite MAC address) non suddivide 
		la lunghezza di banda. Questo è il motivo per cui lo switch 
		in genere è la scelta preferita.

	- Router? I router sono dispositivi completamente diversi. A 
		differenza degli switch che consentono la commutazione dei 
		frame inviandoli direttamente verso le destinazioni usando 
		l’indirizzo MAC, i router effettuano l’instradamento dei 
		pacchetti in base all’indirizzo IP di destinazione. In breve 
		un hub unisce segmenti di una rete ethernet, uno switch è in 
		grado di fare la stessa cosa ma in maniera molto più efficiente 
		ed un router, oltre a svolgere le stesse funzioni, può 
		indirizzare pacchetti TCP/IP tra molteplici LAN e/ WAN, e molto 
		altro ovviamente.
		
	Nota finale: I router sono gli unici dispositivi in grado di condividere 
		un unico indirizzo IP tra clienti di uno stesso network.


4. Differenza crittografia simmetrica e asimmetrica
	- La differenza tra i due metodi è che mentre la cifratura simmetrica 
		utilizza chiavi private, quella asimmetrica utilizza una 
		chiave di cifratura pubblica e una di decifratura privata, che 
		dev’essere mantenuta segreta dal proprietario.


5. Firma digitale
	- La Firma Digitale è costituita da un dispositivo (smart card o 
		chiavetta USB) che contiene un certificato digitale di 
		sottoscrizione, tramite il quale il titolare può firmare 
		digitalmente i propri documenti.


6. Funzione hash 
	- Essa è utilizzata per restituire un valore basato su una certa mole di
		dati, ad esempio un file o un messaggio. Ogni cambiamento 
		accidentale o intenzionale sui dati cambierà questo valore 
		di hash.


7. NRZ (no return to zero)
	- Lo stato digitale “1” è rappresentato con un segnale alto. Lo stato 
		digitale “0” è rappresentato con un segnale basso. Questo metodo 
		è facilmente ottenibile e non richiede circuiti complicati anche 
		perché non si tratta di una vera e propria codifica, visto che i
		dati vengono passati direttamente come tali in uscita. Si ha 
		inoltre una alta robustezza agli errori, anche se lunghe
		stringhe di “0” o di “1” potrebbero causare la perdita 
		del sincronismo.


8. In che modo si evitano le collisioni a livello data link
	- Per evitare una catena di collisioni si richiede che a fronte di due 
		collisioni consecutive si raddoppi il tempo di attesa 
		massimo e cosi via.


9. Algoritmo di routing, a stati 
	- Scoprire i propri vicini e i relativi indirizzi di rete
	  Misurare la distanza da ogni vicino
	  Costruire un pacchetto che contenga tutte le informazioni raccolte
	  Inviare il pacchetto a tutti gli altri router e ricevere i loro 
		pacchetti
	  Elaborare il percorso più breve verso gli altri router


1. Differenza tra indirizzo logico (indirizzo IP) e indirizzo fisico (MAC)
	- Il MAC address è l'indirizzo fisico di ogni scheda di rete. Un numero 
		univoco attribuito dal costruttore a ogni scheda di rete
	- L'indirizzo IP è una specie di indirizzo civico, cioè un indirizzo 
		virtuale (cioè non fisso, modificabile dinamicamente) che 
		permette più facilmente di risalire a un singolo host 
		all'interno di una rete
	- il MAC address è permanente, immodificabile, memorizzato in modo 
		hardware su ogni scheda di rete. Si tratta, in ultima 
		analisi, del vero indirizzo che identifica un nodo all'interno 
		di una rete locale. Viceversa l'indirizzo IP è virtuale,
	        cioè può essere modificato e consente di indirizzare in modo 
		più efficienti i computer all'interno di diverse sottoreti.
	- Il protocollo ARP (Address Resolution Protocol) permette di conoscere 
		l'indirizzo fisico di una scheda di rete corrispondente 
		ad un dato indirizzo IP, ed è per questo che si chiama 
		Protocollo di risoluzione d'indirizzo.


2. Bluetooth
	- È un Wireless PAN, e a differenza del WiFi copre un’area molto 
		limitata. Utilizza una topologia ad hoc, e comprende un supporto 
		ai dispositivi voce e dati, il tutto con un basso consumo di 
		energia.


3. IP
	- Gli indirizzi IP sono lunghi 32bit,sia lato sorgente che destinazione, 
		e non si riferiscono ad un host specifico 
		(inteso come macchina) ma alla scheda di rete: 
		nel momento in cui un host è collegato a due reti differenti, 
		deve avere 2 indirizzi IP. 


4. Scoda ???
5. Snort
	- è un software di rilevazione e prevenzione delle intrusioni. Tale 
		software è totalmente gratuito e open-source.
		Diverse istanze di Snort potranno essere eseguite all’interno 
			della stessa rete, ciascuna con un compito differente:
		- monitoraggio del traffico transitante internamente alla rete 
			locale
		- monitoraggio del traffico diretto verso una macchina specifica
		- monitoraggio del traffico proveniente dalla rete internet
	- Snort può essere eseguito secondo quattro livelli diversi di 
		protezione (crescente):
 	    - sniffer: legge i pacchetti di rete e li mostra sulla console per 
		essere analizzati dal responsabile della rete;
	    - packet logger: come la precedente, ma consente di salvare i 
		pacchetti sospetti sul disco;
	    - intrusion detection system (IDS): modalità che consiste nel 
		monitoraggio, analisi, logging e alerting;
 	    - intrusion prevention system (IPS): effettua una difesa attiva 
		dagli attacchi di rete. 
	È buona pratica di sicurezza abbinarne un firewall.


6. Perchè si chiama router
7. A che livello si trova il router
	- Al livello di rete


1. TCP
	- TCP è un accordo standardizzato per la trasmissione dei dati tra 
		diversi utenti di una rete informatica. Permette a due punti 
		terminali all’interno di una rete informatica comune di 
		realizzare una connessione attraverso cui può avvenire una 
		trasmissione bidirezionale dei dati. Nell’ambito di questa 
		connessione, le eventuali perdite di dati vengono 
		riconosciute e corrette automaticamente; per questo il TCP 
		viene denominato anche protocollo affidabile


2. Da quale n* viene rappresentata la sequenza?
3. Nella connessione cosa rappresenta la x ?
4. Dove trovo l'indirizzamento?
5. Qual'è l'indirizzo 4 a livello rete?
6. A cosa serve l'indirizzamento?
	-  Insieme di procedure tecniche automatiche che permettono a un 
		pacchetto di dati di essere correttamente trasferito da un 
		computer all'altro di una rete. prevede il collegamento 
		corretto del mittente e del destinatario nel'invio dei dati


7. Come è fatto un indirizzo di livello di rete?
	- sono costituiti da una cosiddetta parte di rete (per l'individuazione 
		del percorso nel routing IP) e una parte dell’host (per 
		l'inoltro a un computer specifico). Utilizzando la parte di 
		rete/il prefisso e la parte dell'host/Interface Identifier di 
		un indirizzo IP, i router possono identificare chiaramente a 
		quale destinatario deve essere inoltrato un pacchetto dati.
		IPv4: parte di rete - 192.168.178 parte host - .31


8. Indirizzo e porta cosa identificano?
	- In pratica quando un programma (es. un browser)in esecuzione su una 
		macchina desidera comunicare in rete, il sistema operativo
 		genera un numero di porta (casuale, ma diversa da quelle 
		eventualmente già usate sulla stessa macchina) e invia al 
		router la richiesta, indicando l'indirizzo IP del destinatario. 
		La coppia indirizzo IP del mittente + porta costituisce
		quello che si chiama socket e identifica in modo univoco la 
		macchina e il processo all'interno della rete locale


9. Esiste un indirizzo di livello 4? 
	- si


10. Come è strutturato il segmento TCP?
	- Payload anteposto dal Header : 
		Porta di origine (16 bit): indica il numero di porta del 
			mittente.

		Porta di destinazione (16 bit): indica il numero di porta del 
			destinatario.

		Numero sequenziale (32 bit): il numero sequenziale indica il 
			primo byte del carico utile allegato oppure viene 
			inviato durante l’instaurazione e/o l’abbattimento 
			della connessione. Serve al tempo stesso a convalidare 
			e a ordinare (dopo il trasferimento) i segmenti.

		Numero di conferma (32 bit): in questo campo viene indicato il 
			numero di conferma che il mittente attende 
			successivamente. Affinché il numero sia valido, deve 
			essere preceduto da un flag ACK (nel campo “Flags”).

		Offset (4 bit): il campo “Offset” indica la lunghezza 
			dell’header TCP in blocchi da 32 bit per evidenziare il 
			punto di inizio del carico utile. Poiché questo campo 
			opzionale è variabile, il punto di inizio è diverso da 
			segmento a segmento.

		Riservato (6 bit): riservato per usi futuri secondo la RFC 793, 
			fino ad oggi non utilizzato. Questo campo deve sempre 
			avere il valore “0”.

		Flags (6 bit): attraverso i sei possibili bit singoli nel campo 
			Flags è possibile attivare diverse azioni TCP per 
			organizzare la comunicazione e l’elaborazione dei dati. 
			I Flag che vengono attivati o non attivati a questo 
			scopo sono i seguenti:

			URG: il flag “Urgent” (urgente) segnala all’applicazione
				TCP che il carico utile deve essere elaborato 
				immediatamente fino all’Urgent Pointer definito.
			ACK: in combinazione con il numero di conferma, il flag 
				ACK ha la funzione di confermare la ricezione 
				dei pacchetti TCP. Se il flag non è attivato, 
				anche il numero di conferma è automaticamente 
				non valido.
			PSH: il flag “Push” fa sì che un segmento TCP venga 
				inviato immediatamente, senza dapprima essere 
				accumulato nel buffer interno del mittente e 
				del destinatario.
			RST: se si è verificato un errore durante la 
				trasmissione, un pacchetto TCP con flag RST 
				(“Reset”) attivato permette il ripristino della 
				connessione.
			SYN: i messaggi con flag SYN attivato rappresentano il 
				primo passaggio dell’handshake a tre vie, vale 
				a dire che danno inizio all’instaurazione della 
				connessione.
			FIN: il flag “Finish” segnala alla controparte che un 
				partecipante alla comunicazione termina la 
				trasmissione.

		Dimensione della finestra (16 bit): in questo campo, al partner 
			della comunicazione viene trasmesso il numero di byte 
			che il destinatario è in grado di ricevere.

		Checksum (16 bit): il Transmission Control Protocol è in grado 
			di individuare gli errori di trasmissione in modo 
			affidabile. A questo scopo viene fatto ricorso alla 
			checksum, calcolata in base all’header, al carico utile 
			e al cosiddetto pseudo header.

		Urgent Pointer (16 bit): l’Urgent Pointer (puntatore di 
			“urgenza”) indica la posizione del primo byte dopo il 
			carico utile da elaborare con urgenza. Di conseguenza, 
			questo campo è valido e rilevante solo se il flag URG 
			è attivato.

		Opzioni (0–320 bit): se è necessario attivare funzioni TCP non 
			comprese nell’header generale, è possibile farlo 
			attraverso il campo delle opzioni. Questo può essere 
			utile ad esempio qualora sia necessario definire la 
			dimensione massima dei segmenti. Le opzioni devono 
			sempre avere una lunghezza pari a un multiplo di 32 bit; 
			in caso contrario è necessario eseguire una compilazione
			con una serie di bit zero (padding).


11. Che tipo di protocollo è TCP? affidabile?
	- TCP è un protocollo affidabile: garantisce consegna dei segmenti a 
		destinazione tramite il meccanismo degli acknowledgements.


12. Il percorso rimane lo stesso durante tutta la connessione? 
	- Fino a quando non viene rilasciata


13. Algoritmo di Clark e Nagle
	- Nagle: è un metodo per ridurre lo spreco, quando arrivano dati al 
		mittente in piccoli gruppi, si invia solo il primo gruppo e
		tutto il resto viene inserito in un buffer, finchè non arriva 
		l’ack; dopodichè si inviano tutte le informazioni dentro
		il buffer utilizzando un singolo segmento TCP, e poi si ripete 
		il ciclo. Questo permette di far girare nella rete solo
		un pacchetto di piccole dimensioni, e possiamo inviare un 
		segmento solo quando abbiamo il buffer pieno. 
	- Clark: impedisce al ricevente di inviare l’aggiornamento della 
		finestra per un solo byte ed è obbligato ad attendere la 
		disponibilità di una certa quantità di spazio, ossia solo 
		quando è in grado di gestire la dimensione massima del 
		segmento, oppure quando il buffer è vuoto per metà
		

14. Perchè sono stati inventati questi algoritmi?
	- Nagle risolve il problema delle applicazioni a lato mittente che 
		consegnano i dati 1byte per volta, mentre Clark risolve il 
		problema dell’applicazione a lato ricevente che legge 
		1byte per volta. 


15. Cosa cercano di fare questi algoritmi?
	- Quello che si vuole raggiungere è che il mittente non invii segmenti 
		piccoli, e il ricevente non gli richieda a sua volta. 


16. Cos'è FTP?
	- È un protocollo per la trasmissione di dati tra host basato su TCP e 
		un architettura client-server. Fu progettato per permettere 
		agli utenti di trasferire file in modo efficiente e affidabile 
		da un host ad un altro su internet: 
		il protocollo utilizza connessioni TCP distinte per trasferire 
		i dati e per controllare i trasferimenti, inoltre 
		richiede un’autenticazione del client attraverso una coppia 
		account-password oppure il server può essere configurato 
		per accettare le connessioni anonime (senza restrizioni)


17. Cos'è Rapporto Segnale-Rumore? rumore è una frequenza
18. Intestazione del pacchetto TCP, tutti i campi.

1. DNS e sicurezza
	- Il compito principale del protocollo DNS è fornire affidabilità e 
		buone prestazioni, in quanto è stato progettato per essere 
		molto robusto. Poichè si tratta di un protocollo leggere viene 
		posto sopra UDP, in questo modo le interrogazioni 
		possono essere effettuate molto velocemente senza overhead; 
		però le interrogazioni che superano i 512byte utilizzano 
		TCP, altrimenti la consegna diventerebbe problematica. 


2. Va direttamente al route server?
3. Perchè ricorsivamente? 
	- Perchè è una struttura gerarchica
4. Se il campo è settato?
5. Quality Services? Congestione?
6. Qual'è il migliore?
7. Funzione di Hashing? Hash? Checksum?
8. MD5 ? Collisione?
	- L'MD5 è una funzione hash crittografica, È una funzione unidirezionale
		diversa dalla codifica e cifratura perché irreversibile
		Questa funzione prende in input una stringa di lunghezza 
		arbitraria e ne produce in output un'altra a 128 bit. 
		Il processo avviene molto velocemente e l'output (noto anche 
		come "MD5 Checksum" o "MD5 Hash") restituito è tale per 
		cui è altamente improbabile ottenere con due diverse stringhe 
		in input uno stesso valore hash in output
	- Ad esempio, viene utilizzata per controllare che uno scambio di dati 
		sia avvenuto senza perdite, semplicemente attraverso il 
		confronto della stringa prodotta dal file inviato con quella 
		prodotta dal file ricevuto. Con lo stesso metodo si può 
		verificare se il contenuto di un file è cambiato (funzione 
		utilizzata dai motori di ricerca per capire se una pagina 
		deve essere nuovamente indicizzata). È diffuso anche come 
		supporto per l'autenticazione degli utenti attraverso i 
		linguaggi di scripting Web server-side (PHP in particolare): 
		durante la registrazione di un utente su un portale 
		internet, la password scelta durante il processo verrà 
		codificata tramite MD5 e la sua firma digitale verrà memorizzata
		nel database (o in qualsivoglia contenitore di dati). 
		Successivamente, durante il login la password immessa 
		dall'utente subirà lo stesso trattamento e verrà confrontata 
		con la copia in possesso del server, per avere la certezza 
		dell'autenticità del login.


9. OS-PF (domanda da lode)
	- L'Open Shortest Path First (OS-PF) è un protocollo di instradamento 
		intra-dominio basato sull'algoritmo Link State (LS). 
		Le prime due versioni sono utilizzate con IPv4, mentre la 
			versione 3 è pensata per IPv6.
		Il principale vantaggio di OSPF rispetto agli altri protocolli 
			di instradamento intra-dominio è la scalabilità 
			(fino a qualche centinaio di router):
		- algoritmo LS: la conoscenza della topologia della rete 
			permette una maggiore stabilità rispetto ai protocolli 
			basati sull'algoritmo Distance Vector;
		- instradamento gerarchico: OSPF suggerisce di non avere più di 
			200 router in una singola area:
			- le informazioni di instradamento sulle altre aree 
				possono essere sommarizzate;
			- i cambiamenti delle rotte in un'area non perturbano 
				le altre aree.

1. In che modo vengono codificati i segnali a livello fisico, spiegare il modo
	- Il livello fisico deve codificare opportunamente ogni bit in 
		trasmissione e riconoscerlo in ricezione.
		Il metodo di codifica usato dipende dal mezzo di trasmissione.
		Il metodo più semplice sarebbe la codifica binaria diretta dove 
		0V indica un bit 0 e 5V un bit 1, ma di solito non si 
		usa perché porta ambiguità: non si distingue un mittente 
		inattivo da un bit 0 (volt 0), inoltre una lunga serie di 
		bit 0 o 1 può creare problemi perché si può perdere la 
		sincronizzazione tra le due stazioni; la stazione ricevente 
		può non riuscire a riconoscere il passaggio da un bit al 
		successivo.
	- Il processo di conversione tra bit e i segnali che li rappresentano 
		prendi il nome di modulazione digitale. Esistono 
		strategie che convertono direttamente bit in segnali per 
		ottenere una trasmissione in banda base, nella quale i 
		segnali occupano frequenze che vanno da zero fino a un massimo 
		che dipende dal tasso di trasmissione. Altre strategie 
		agiscono su ampiezza, fase o frequenza di un segnale di base 
		(o portante) per il trasferimento dei dati, ottenendo così
		una trasmissione in banda passante nella quale il segnale 
		occupa una banda di frequenze attorno a quella del segnale 
		importante.
	- NRZI, Manchester Encoding, Scrambling


2. Codifica Manchester e 4bit/5bit?
	- La codifica Manchester usa due livelli di tensione per trasmettere 
		ogni bit.
		Il tempo necessario per inviare ciascun bit (bit time) è diviso 
		in due intervalli; tra un intervallo e l’altro c’è 
		sempre una transizione tra due livelli diversi (codifica bifase). 
		una transizione da livello basso ad alto rappresenta 
		un bit 0, da alto a basso rappresenta un bit 1; il segnale alto 
			è di +0,85 V e il segnale basso di -0,85 V.
		L’assenza di variazione al centro del bit time indica una 
		violazione della codifica,viene usata per delimitare il frame.
		La codifica Manchester, rispetto alla codifica binaria diretta, 
		ha il vantaggio di facilitare la sincronizzazione col 
		mittente, ma richiede il doppio della larghezza di banda perché 
		gli impulsi sono metà della larghezza del bit time.


3. Controllo di flusso a livello 2?
	- Controllo di flusso tramite feedback: la destinazione rimanda alla 
		sorgente delle informazioni per darle il permesso di 
		mandare altri dati o per informarla del suo stato. 
	- Controllo di flusso tramite limitazione del tasso di invio: il 
		protocollo contiene al proprio interno un meccanismo che 
		limita il tasso al quale la sorgente può trasmettere i dati 
		(senza feddback). 


4. Si usano solo a livello 2?
	- data link, rete, trasporto 


5. Cos'è un Firewall?
	- Il firewall forma una barriera attraverso la quale deve passare tutto 
		il traffico di una rete; agisce come un filtro per i 
		pacchetti, ispezionandoli sia entrata che in uscita. Vengono 
		create delle politiche di sicurezza per stabilire quali 
		pacchetti sono autorizzato a passare. Il firewall può essere 
		progettato per operare come filtro a livello di rete 
		(per i pacchetti IP) oppure operare ad un livello più alto per 
		gli altri protocolli. In sostanza un firewall non è 
		altro che una linea di difesa, per isolare i sistemi interni 
		dalle reti esterne.


6. Non sarebbe meglio un Proxy?
	- Un server proxy, invece, è un server che si interpone nel normale 
		flusso di comunicazione tra i client e i server dei servizi 
		web, ad esempio tra il tuo computer e un sito Internet. In 
		questo modo, le richieste del tuo sistema arrivano al server 
		proxy e da qui vengono rinviate al servizio richiesto, pertanto 
		viene eliminato il collegamento diretto tra il client e 
		il server di destinazione.
	Le funzioni principali di un server proxy sono:
		- Fornire l’anonimato durante la navigazione su Internet.
		- Memorizzare una copia locale degli elementi web richiesti per 
			poterli fornire nuovamente senza dover accedere di 
			nuovo al server di destinazione.
		- Funzionare da firewall, agendo come un filtro per il traffico 
			in entrata e in uscita.
	Ovviamente, per la maggior parte degli utenti di Internet l’utilità 
		principale di un server proxy è la possibilità di nascondere 
		il proprio indirizzo IP e navigare in modo anonimo. A tale scopo, 
		esistono due modalità principali di utilizzo dei server
		proxy: connettersi a un server proxy web oppure configurare 
		manualmente la propria connessione a Internet per l’utilizzo 
		di un proxy. Importante: la maggior parte dei server proxy per 
		utilizzo privato e che si trovano su Internet funzionano 
		con i protocolli HTTP, HTTPS e FTP (i protocolli standard per 
		il trasferimento di file e la navigazione tramite browser).
	Questo significa che se decidi di utilizzare un proxy, alcuni servizi 
		basati su altri protocolli specializzati potrebbero non 
		funzionare, ad esempio i giochi online, il VoIP e l’utilizzo 
		di webcam.


1. Differenza del Controllo degli Errori  a livello data link e livello di 
	rete e livello di trasporto.
2. Metodo di transizione IPv4
3. Cos'è una NAT? associa un indirizzo pubblico con provider di rete
	- si pone come risolutore del problema. Assegna ad ogni azienda/casa un 
		singolo indirizzo IP per il traffico di internet 
		all’interno della rete locale; nel momento in cui un pacchetto 
		deve lasciare la rete locale per dirigersi verso l’ISP, 
		viene seguita la traduzione dell’unico indirizzo IP usato nella 
		rete locale nell’unico indirizzo pubblico. Vengono 
		riservati degli indirizzi assegnati ad una casa/azienda, che 
		non potranno mai comparire su internet, fra questi 
		l’intervallo più usato è quello che va da 10.0.0.0  a 
		10.255.255.255/8 perché permette di gestire il maggior numero 
		di host. All’interno di un’azienda, un host ha un unico 
		indirizzo, espresso nella forma 10.x.y.z. 
	

4. E' possibile avere più indirizzi pubblici? 
	- si


5. Spiegazione passaggio da IP locale a IP pubblico
	- Quando il pacchetto lascia la rete locale passa attraverso un 
		apparato NAT, che converte l’IP interno nel vero IP assegnato 
		all’azienda; di solito alla NAT si abbina un firewall per 
		proteggere la rete locale. Dobbiamo vedere qual’è l’indirizzo 
		di destinazione del pacchetto: dato che la maggior parte di 
		pacchetti IP trasporta al suo interno TCP o UDP, ed entrambi 
		contengono sia la porta sorgente che quella di destinazione, 
		quando viene consegnato il pacchetto si va a vedere la porta 
		sorgente che indica dove devono essere consegnati i pacchetti 
		in arrivo, mentre quella di destinazione determina chi deve 
		ricevere i pacchetti. La NAT viola la gerarchia del modello IP, 
		perché in questo modo IP non è in grado di identificare 
		in modo univoco un singolo host, inoltre i pacchetti in entrata 
		non possono essere accettati se non dopo quelli in uscita 
		e la NAT trasforma internet in una rete orientata la connessione
		perché va a mantenere delle informazioni relative alla 
		connessione (IP privato, porta TCP)
	- L’IP pubblico consente di identificare e raggiungere un dispositivo 
		nella rete Internet mondiale mentre l’IP privato rende 
		accessibile il dispositivo soltanto all’interno della rete LAN.	
		Tutti i dispositivi della stessa LAN utilizzano lo stesso 
		IP pubblico per connettersi a Internet ma devono utilizzare IP 
		privati diversi all’interno della LAN.
	Gli IP pubblici vengono assegnati e regolamentati a livello mondiale e 
		nazionale mentre gli IP privati possono essere assegnati 
		da chiunque.


6. Comodità del NAT per IP?
	- gli IP del protocollo IPv4 hanno cominciato a scarseggiare, l'aumento 
		esponenziale dei dispositivi connessi alla Rete ha fatto 
		si che gli indirizzi disponibili in questo spazio di rete
		(4 miliardi e 300 milioni circa) si esaurissero in fretta. 
		Il NAT è stato quindi utilizzato per poter nascondere dietro 
		un unico indirizzo pubblico decine e decine di indirizzi 
		privati, e quindi altrettanti device, nonostante l'introduzione 
		del protocollo IPv6, questa tattica di mascheramento 
		degli indirizzi privati è molto utilizzata sia per semplice 
		comodità sia perchè capace di garantire un certo numero 
		di vantaggi.


7. Gestione degli indirizzi IP IPv4 in una sotto rete? subnet mask?
8. Indirizzi privati
	- Le classi di indirizzi IP privati sono le seguenti:
		10.0-255.0-255.0-255 per la classe A
		172.16-31.0-255.0-255 per la classe B
		192.168.0-255.0-255 per la classe C


1. Accesso multiplo al canale(canale condiviso)
	- Sottolivello MAC

 
2. Multiplexing al canale tra stazione
	- CDM (code division multiplexing): si tratta di una forma di 
		comunicazione a spettro distribuito in cui un segnale a banda 
		stretta viene sparso su una banda di frequenza più ampia. Ciò 
		rende il segnale più tollerante alle interferenze e 
		permette a più segnali gli utenti diversi di condividere la 
		stessa banda di frequenza. Siccome CDM viene spesso usato per 
		il secondo scopo, è comunemente chiamato CDMA (code division 
		multiple access), visto che permette ogni stazione di 
		trasmettere su tutto lo spettro di frequenze in ogni momento


3. CSMA persistente ecc
	- CD sta per collision detection, perché sia il CSMA persistente che 
		quello non persistente sono un miglioramento dell’ALOHA, 
		però può capitare che 2 stazioni contemporaneamente vedono il 
		canale libero e trasmettono nello stesso momento, generando 
		collisioni, per questo motivo è stato creato il CSMA/CD che 
		permette di rilevare la collisione (molto velocemente), 
		interrompere le trasmissioni migliorando sia l’utilizzo della 
		banda che il ritardo. Questo protocollo viene utilizzato in 
		Ethernet, più in generale nelle LAN con tipologia bus


4. ALOHA
	- Protocolli ad accesso multiplo 


5. Costante numero di Client? Performance di ALOHA ?
	- Frame hanno la stessa lunghezza, aloha normale usa 18% del canale 
		quindi tantissimo spreco di banda, non tiene conto della 
		situazione reale, con gli slot le prestazioni raddoppiano 
		usando il 37% del canale. 


6. Slot di ALOHA?
	- I vantaggi sono: se abbiamo solo 1 nodo che deve trasmettere frame 
		lo può fare al massimo rate e un altro vantaggio è che 
		è semplice da implementare, dove non abbiamo bisogno di una 
			stazione primaria che controlla il canale. 
		Gli svantaggi arrivano quando ci sono più stazioni che vogliono 
			trasmettere, creando tante ritrasmissioni


7. Trasmissione
	- All'inizio di ogni slot


8. Questo come influisce sulle performance? 
	- Prestazioni migliori piu o meno del doppio


9. CSMA cos'è?
	- Sono quei protocolli che si mettono in ascolto del canale e vengono 
			detti protocolli “carrier sense”.  
		CSMA (carrier sense multiple access). Esistono 3 tipi di questi 
			protocolli che si distinguono per il metodo di attesa: 
			- CSMA Non persistente
			- CSMA 1-persistente
			- CSMA P-persistente


10. Back off esponenziale cos'è? 
	- Tempo di ritrasmissione, piu volte viene usato piu aumenta per 
		evitare le collisioni


11. Quante ritrasmissioni posso fare? 
	- max 15/16


12. Che cos'è MPLS ? in che livello si trova
	- MPLS è una tecnologia per reti IP che permette di instradare flussi 
		di traffico multi-protocollo tra nodo origine e destinazione
		tramite l’utilizzo di identificativi tra coppie di ruoter 
			adiacenti. 
		Davanti ad ogni pacchetto viene aggiunta un’etichetta, quindi i 
		router inoltrano i dati in base a questa label 
		aggiunta in precedenza, anzichè tener conto dell’indirizzo di 
		destinazione. Questa etichetta funge da indice associato ad 
		una tabella interna, che serve per determinare la linea di 
		output: l’inoltro può essere effettuato molto più velocemente 
		perché basta eseguire la ricerca di questa etichetta. 
			MPLS offre quindi un routing flessibile e veloce, 
				improntato alla qualità del servizio. 
		- Problema: capire dove posizionare l’etichetta, perché MPLS 
			funziona come un circuito virtuale, ma sappiamo che 
			internet offre un servizio non orientato alla 
			connessione, per cui non sono strutture compatibili. 
		Nell’intestazione IP non si hanno dei campi a disposizione per 
		la numerazione dei circuiti virtuali, quindi si è aggiunta 
		un’intestazione MPLS prima dell’intestazione IP. 


13. Come è fatta una rete MPLS? 
	- Ci sono degli attori


14. Che cosa è il traffic shaping?
	- Detto anche pocket shaping, si intende l'insieme di operazioni di 
		controllo sul traffico di una rete dati finalizzate a 
		ottimizzare o a garantire le prestazioni di trasmissione, 
		ridurre o controllare i tempi di latenza e sfruttare al meglio 
		la banda disponibile tramite l'accodamento e il ritardo dei 
		pacchetti che soddisfano determinati criteri.


15. Tecniche di traffic shaping?
	-  Traffic policing, è una tecnica in cui la rete deve controllare 
		periodicamente che l’utente rispetti i patti iniziali, 
		perché se così non fosse andrà a scartare i pacchetti di troppo


16. Leaky bucket e token bucket?
	- Gli host sono collegati alla rete tramite un’interfaccia che contiene 
		un leaky bucket: se vogliamo immettere un pacchetto nella 
		rete dobbiamo poter inserire dei pacchetti nel secchio, ma se 
		il secchio è piene dei pacchetti andranno persi. Per quanto 
		riguarda il Token bucket immaginiamo l’interfaccia di rete 
		sempre come un secchio che si riempie, però a differenza del 
		Leaky è il secchio proprio a riempirsi con rate costante 
		(visto che nel Leaky erano i pacchetti ad essere trasmessi a 
		rate costante): per inviare un pacchetto bisogna prelevare il 
		token dal secchio, che poi verrà distrutto. Nel momento in 
		cui si hanno dei pacchetti in coda e non si hanno token 
		sufficienti all’interno del secchio, i pacchetti che riescono 
		prelevano i token disponibili, mentre gli altri devono 
		aspettare che vengano generati nuovi token. Una volta che si è 
		trasmesso al massimo rate, quando il secchio si svuota i 
		pacchetti andranno a prelevare i token ad un rate pari alla 
		generazione dei token stessi. 

17. Multiplexing sul canale non condiviso? 
	- FDM CDM TDM


18. Spiegazione FDM, 
	- esempio eclatante WIFI, FDM (frequency division multiplexing) sfrutta 
		la trasmissione in banda passante per condividere un canale: 
			divide lo spettro in bande di frequenza di cui ogni 
			utente ha un uso esclusivo. L’eccesso di allocazione di 
			banda prende il nome banda di guardia e permette di 
			tenere i canali ben separati fra loro. Ci sono però 
			delle sovrapposizioni tra i canali, perché i filtri nel 
			mondo reale non hanno spigoli retti come nella teoria, 
			e al giorno d’oggi si preferisce fare multiplexing 
			nel tempo


1. Protocolli di comunicazione datalink
	- HDLC, PPP


2. Link state che cosa è ? 5 passi fondamentali?
	- Algoritmo che si adatta al traffico e alla rete,
		- Scoprire i propri vicini e i relativi indirizzi di rete
	  	 Misurare la distanza da ogni vicino
	 	 Costruire un pacchetto che contenga tutte le informazioni 
			raccolte
	  	 Inviare il pacchetto a tutti gli altri router e ricevere 
			i loro pacchetti
	  	 Elaborare il percorso più breve verso gli altri router


3. L'algoritmo reale che è basato sul link state? 
	- OS-PF, È un protocollo molto potente, infatti è il più utilizzato 
		anche se crea molto traffico, perché anche lui di base 
		utilizza il flooding. Utilizza un routing basato sullo stato 
		dei collegamenti e per questo motivo può bilanciare il carico. 
		Per gestire questo protocollo in maniera congrua si suddivide 
		la rete in aree che contengono un sottoinsieme di router. 
		Tutto il sistema viene partizionato in sistemi autonomi, ed in 
		questi sistemi ci sono le aree di routing: 
			si utilizza un routing multicast. 
	

4. FTP, FTPS?
	- È un protocollo per la trasmissione di dati tra host basato su TCP e 
		un architettura client-server. Fu progettato per permettere 
		agli utenti di trasferire file in modo efficiente e affidabile 
		da un host ad un altro su internet: 
			il protocollo utilizza connessioni TCP distinte per 
			trasferire i dati e per controllare i trasferimenti, 
			inoltre richiede un’autenticazione del client 
			attraverso una coppia account-password oppure il 
			server può essere configurato per accettare le 
			connessioni anonime (senza restrizioni), il protocollo 
			è spesso reso sicuro utilizzando un sottostrato SSL/TLS


5. Collegamento passivo quale sarebbe? 
	- Firewall


6. Reti PSTN, reti telefoniche generali
	- PSTN (public switched telephone network) è la rete telefonica 
		pubblica commutata, progettata per trasmettere la voce umana in 
		una forma più o meno comprensibile. Esiste in questa 
		infrastruttura un fattore limitante, definito come “l’ultimo 
		miglio”, cioè il tratto di cavo/doppino tramite cui il cliente 
		si connette.


7. Che cosa è l'ethernet?
	- è una rete LAN formata da connessioni punto-punto: ogni device si 
		connette ad uno switch, attraverso una connessione punto-punto, 
		che ha la funzione di smistare i pacchetti tra i dispositivi 
		connessi a lui, selezionando il computer destinatario in base 
		all’indirizzo scritto nel pacchetto. 


1. Fibra ottica
	- • Sorgente luminosa: viene posta ad un lato della fibra. Per 
		convenzione si assume che la presenza di luce indica il valore 
		1 mentre la sua assenza indica il valore 0. 
	  • Rilevatore: si colloca dall’altro capo della fibra rispetto alla 
		sorgente luminosa e quando viene colpito dalla luce, genera 
		un impulso elettrico. 
	  • Mezzo di trasmissione: Il mezzo trasmissivo è una fibra di vetro 
		sottile quanto un capello.


2. Divergenza e convergenza dei pacchetti ???
	- 


3. Crittografia simmetrica 
	- Questi algoritmi utilizzano la stessa chiave per cifrare e decifrare 
		i messaggi. Il criptaggio simmetrico trasforma il testo 
		in chiaro in un testo cifrato usando la stessa chiave segreta 
		e un algoritmo di criptaggio: in questo modo il testo in 
		chiaro verrà ricavato dal testo cifrato


1. La posta elettronica ???
	- 

	
2. 4 protocolli principali 
	- SMTP,  è un protocollo utilizzare per inviare mail in internet
	- MIME, multi purpose internet mail extension, è stato introdotto per 
		poter mandare messaggi di lingue internazionali e per 
		inviare tutti quei file che non contengono testo (immagini, 
		video..).
	Adesso dobbiamo trasferire una copia del messaggio che è arrivata al 
	mail server e deve essere trasferita al destinatario con:
	- POP3, L’user agent apre una connessione TCP sulla porta 110 con il 
		mail server. Quando viene stabilita questa connessione si 
		hanno 3 fasi:
			- Autorizzazione, Transazione (azione dell'utente), 
				Aggiornamento
	- IMAP, cerca di migliorare POP3, il mail server sta in ascolto sulla 
		porta 143 e nasce per risolvere il problema di gestione 
		degli spazi. Viene introdotta la modalità di lettura delle mail 
		direttamente da internet, piuttosto che in locale; 
		inoltre supporta dei meccanismi per leggere tutti o parte dei 
		messaggi


3. SMTP
	- SMTP è un protocollo utilizzare per inviare mail in internet; per 
		svolgere questa operazione si deve stabilire una connessione 
		TCP sulla porta 25, per trasferire il messaggio dalla sorgente 
		alla destinazione


4. PORTA 25 è sicura? 
	- No, si utilizza il protocollo SSL, porta sicura 465. 


7. WEBMAIL , che protocollo usa?
	- SMTP


8. Servizi differenziati ?
	- Nascono perché i servizi integrati offrono una buona qualità del 
		servizio ma hanno un lato negativo, perché dobbiamo impostare 
		preventivamente ogni flusso, e naturalmente in sistemi con 
		milioni di flussi sorgono dei problemi, inoltre all’interno 
		dei router viene mantenuto uno stato interno per ogni flusso 
		per cui se un router si rompe perdo tutti i dati dei flussi 
		memorizzati al suo interno. Per questo nascono i servizi 
		differenziati che mirano ad un approccio locale dei router, 
		basando la qualità del servizio sulle classi (e non sui flussi): 
		vengono offerti da un insieme di router che vanno a 
		costituire un vero e proprio dominio amministrativo, si 
		occupano di definire le classi di servizio e le regole per 
		inoltrare i pacchetti appartenenti ad una data classe

 
9. Servizi assicurati che cosa sono?
	- I servizi integrati nascono per gestire i flussi di pacchetti, 
		affrontando il problema di fornire la qualità del servizio alle 
		applicazioni gestendo le risorse all’interno dei router


10. Distance vector? (routing basato sul vettore delle distanze) che cosa 
	significa convergenza? e divergenza? 
		- Soffre di una lente convergenza. Attestarsi ad un punto, 
			arrivare a quel punto. 
		CONVERGENZA LENTA, ci impiega tanto tempo ( tutto ciò fa parte 
			di distance vector).  


11. Che differenza c'è tra l’agoritmo di bellman-ford e djikstra?
	- Dijkstra non supporta il caso di grafo con archi aventi pesi negativi, 
		mentre Bellmand si


12. A che cosa serve l’agoritmo di dijkstra? 
	- Cammino minimo. 


13. Necessità degli archi di peso negativo, perché?
	- 


15. Che differenza c’è tra monomodale e multimodale?  Con un disegno potresti 
	spiegarmelo?
	- La differenza principale tra la fibra ottica multimodale e quella 
		monomodale è che il nucleo della prima possiede un diametro 
		più largo, tipicamente compreso tra i 50 ed i 100 μm, mentre 
		quello delle fibre monomodali ha un diametro compreso fra 
			gli 8,3 ed i 10 μm.
		L'attrezzatura necessaria per le comunicazioni con fibra ottica 
		multimodale è meno costosa rispetto a quella per le 
		comunicazioni in fibra monomodale: infatti, a causa delle grandi
 		dimensioni del nucleo, e quindi della larga apertura 
		numerica, le fibre multimodali hanno una capacità di 
		"raccogliere la luce" maggiore rispetto a quelle monomodali. 
		In termini pratici, la dimensione del nucleo più grande 
		semplifica i collegamenti e permette anche l'utilizzo di 
		un'elettronica a basso costo


16. Come funziona la fibra monomodale? 
	- La luce viene sparata dritta e non rifrange, invece quella 
		multimodale rifrange nel nucleo di vetro. 


17. Perché si chiama multimodale? 
	- Perché ci sono più onde. 


18. Come mai ci sono più onde?
	- c'è più spazio


1. TCP
	- Il servizio TCP è ottenuto con la creazione di punti terminali, 
		chiamati socket. Ogni socket possiede un indirizzo composto sia 
		dall’IP dell’host che dall’indirizzo locale dell’host, ovvero 
		la porta: ogni endpoint è caratterizzato da indirizzo IP 
		e porta. Per stabilire una connessione bisogna collegare le 
		socket della sorgente e del destinatario; si può usare una 
		singola socket per più connessioni contemporaneamente. 


2. IPV4
	- 


3. UDP
	-  UDP è un protocollo semplice, con utilizzi importanti, ma per la 
		maggior parte delle applicazioni in internet è necessaria 
		l’affidabilità della consegna, che lui non riesce a dare. è il 
		protocollo non orientato alla connessione dove il suo 
		compito è quello di spedire pacchetti tra le applicazioni


4. Cosa sono le CDN? Approcci DNS e approcci anycast -  vantaggi e svantaggi
	- Una rete CDN (Content Delivery Network) è una piattaforma di server 
		altamente distribuita che aiuta a minimizzare il ritardo 
		nel caricamento dei contenuti delle pagine web riducendo la 
		distanza fisica tra il server e l'utente. In tal modo, gli 
		utenti in tutto il mondo possono visualizzare gli stessi 
		contenuti di alta qualità senza rallentare 
		i tempi di caricamento.


5. STANDARD 802.16 , WiMax, differenza con 802.11?
	- Differenza tra A e B, perché girano sulle seguenti frequenze? 
		Sono frequenze libere, non servono licenze. 


6. Tecnologia FHSS – differenza di canali, 1 -2 e 13 . 
	- Tecnica a spettro distribuito a frequenza variabile (FHSS, 
		frequency hopping spread spectrum): il trasmettitore salta da 
		una frequenza all’altra centinaia di volte al secondo. Questo 
		tipo di trasmissione viene utilizzata solitamente nelle 
		comunicazioni militari perché rende difficile rilevare le 
		trasmissioni ed è quasi impossibile da disturbare 


1. Datalink
	-


2. Controllo degli errori a livello di datalink (posso prendere qualsiasi 
	stringa? su distanza di Hamming) può avere qualsiasi valore? 
        o fanno parte di qualche insieme particolare? 
	- Per determinare la distanza di Hamming tra due codewords basta 
		eseguire la somma unaria senza riporto e contare il numero di 1 
		bits risultanti in questa operazione. Il numero d risultante da 
		questo controllo sara' uguale al numero di cambiamenti 
		necessari per far diventare equivalenti i due codewords.
		00101001110 +
		01001001010 =
		-----------
		01100000100
		Nell'esempio la distanza di Hamming tra i due codewords è 3.
		In generale in una trasmissione dati sono possibili tutte le 
			2^m combinazioni di bits ma, a causa dei bit di check 
			non tutte le 2^n combinazioni sono ammissibili. E' 
			possibile, attraverso l'algoritmo di controllo, stilare 
			una lista dei codewords ammissibili e da questa trovare 
			i due codewords che hanno distanza di Hamming minima; 
			tale distanza è detta distanza di Hamming del codice.
		Per testare d errori c'e' bisogno di un codice con distanza d+1 
			poiche' non c'e' modo di confondere un valido codeword 
			in uno non valido con un numero d di bits cosi' il 
			ricevente puo' controllare se ha ricevuto un codeword 
			con errori e richiedere la trasmissione.
		Per correggere d errori c'e' bisogno di un codice con distanza 
			2d+1 in modo che il codeword accettabile che viene 
			recuperato dalla lista sia unico.


3. Se vado a fare la distanza tra due bit, dove vado a fare il controllo errore?
	- Sia dunque la lunghezza totale tale unita' viene di solito chiamata 
		codeword lunga n. Dati due codewords qualsiasi, è possibile 
		determinare di quanti bits questi differiscono; tale misura 
		viene chiamata distanza di Hamming.


4. Lato destinatario, come lo controllo l’errore?
	-


5. Applicando la distanza di Hamming, come faccio a capire se c’è stato un 
	errore o no? 
	- Codework (alfabeto), aggiungendo il bit in più così posso controllare, 
		non possono essere stringhe qualsiasi. Se so che B esiste fa 
		parte dell’alfabeto, invece una lettera strana no. 


6. Distanza di Hamming, come faccio a capire che un codice è a rilevazione o a 
	correzione dell’errore?  
	- N-1 rilevazione , 2n-1 per correzione di errore.


7. Quali tipologie di codici per correzione di errore?  
	- Aggiungo in coda tanti bit


8. Qualche regola per il polinomio generatore?
	- Sia r il grado di G(x), si aggiungono r bit con valore 0 dopo la parte 
		di ordine più basso del frame, così che al suo interno 
		ci sono m + r bit e corrisponda al polinomio M(x) Dividere la 
		sequenza corrispondente a M(x) per la sequenza 
		corrispondente a G(x) usando la divisione modulo 2. Sottrarre il 
		resto della sequenza corrispondente a M(x) usando la 
		sottrazione in modulo 2. Il risultato è il frame con checksum 
		pronto per la trasmissione. Chiamiamo il polinomio T(x). 
		Per avere un buon polinomio generatore bisogna avere che il 
		termine di grado più alto e quello di grado più basso sono 1. 
		Il polinomio M(x) deve essere più lungo di G(x)


1. Protocolli per la gestioni di flusso 
	- Protocollo simplex utopistico, stop-and-wait per un canale privo di 
		errori, stop-and-wait per un canale soggetto a rumore 
	- Protocollo a finestra scorrevole a 1 bit, go-back-n, 
		con ripetizione	selettiva 


2. Tipi di canali 
	- 


3. Simple stop and wait 
	- Quando il buffer del destinatario è saturo il mittente si ferma ed 
		aspetta un feedback per ricominciare. 
		Questo frame si chiama dummy, in pratica è un frame di feedback 
			che serve a “risvegliare” il mittente. 
		Quindi il mittente invia un frame al destinatario e attende il 
			feedback (stop-and-wait)


4. Simplex per canale rumoroso
	-  Si introduce un timer, avviandolo nel momento in cui viene spedito il 
		frame, se l’ack non viene ricevuto prima dello scadere 
		del tempo, allora la sorgente ritrasmette il frame. Questo 
		procedimento soffre di limitazioni perché l’ack potrebbe 
		perdersi, oppure ci sono dei ritardi nel canale e quindi ci 
		troviamo con due frame uguali (ridondanza dei dati): 
			si introduce nell’intestazione dei frame un numero di 
			sequenza che permette di distinguere i frame originali 
			dai duplicati


5. Heaven
	-


6. Che cosa significa ARQ? 
	- Automatic Repeat ReQuest (ARQ) è un gruppo di protocolli di controllo 
		degli errori per la trasmissione di dati su reti di 
		comunicazione rumorose o inaffidabili. Questi protocolli 
		risiedono nel Data Link Layer e nel Transport Layer del modello 
		di riferimento OSI (Open Systems Interconnection). Sono così 
		chiamati perché prevedono la ritrasmissione automatica di 
		frame danneggiati o persi durante la trasmissione.
		Gli ARQ vengono utilizzati per fornire trasmissioni affidabili 
		su servizi di livello superiore inaffidabili
		In questi protocolli, il destinatario invia un messaggio di 
		conferma al mittente se riceve correttamente un frame. 
		Se il mittente non riceve il riconoscimento di un frame 
		trasmesso prima di un determinato periodo di tempo, ovvero si 
		verifica un timeout, il mittente comprende che il frame è stato 
		danneggiato o perso durante il transito. Quindi, 
		il mittente ritrasmette il frame. Questo processo viene ripetuto 
		fino a quando non viene trasmesso il frame corretto


7. Crittografia? 
	- Fa parte della sicurezza, viene utilizzata nello scambio di 
		informazioni di mittente e destinatario


8. Cos'è l hash?
	- Le funzioni di hash (hash functions) sono delle funzioni che 
		a partire da un qualsiasi stringa in input A, producono una 
		stringa B (impronta) che ha una lunghezza costante, 
		a prescindere dalle dimensioni di A.


9. Quando si utilizza una funzione hash?
	- Quando si trattano dati legati alla sicurezza o alla autenticazione, 
		le password degli utenti vengono salvate nel database 
		sotto forma di hash e non in chiaro.