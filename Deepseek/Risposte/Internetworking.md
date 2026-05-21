# Internetworking – Risposte Dettagliate

## Sezione 6.1 – Protocolli di Controllo

### 1. Quali sono i principali protocolli di controllo utilizzati nel livello di rete oltre a IP?

Oltre a IP, utilizzato per il trasferimento dei dati, Internet ha diversi protocolli di controllo utilizzati nel livello di rete. I principali protocolli di controllo menzionati nel capitolo sono:

- **ICMP (Internet Control Message Protocol)** : utilizzato per inviare messaggi di errore e altre informazioni operative
- **ARP (Address Resolution Protocol)** : utilizzato per risolvere gli indirizzi IP in indirizzi Ethernet (o di livello data link)
- **DHCP (Dynamic Host Configuration Protocol)** : utilizzato per configurare automaticamente gli host con indirizzi IP e altre informazioni di rete

### 2. Perché i protocolli di controllo vengono esaminati nella versione IPv4?

Il testo specifica che i protocolli di controllo vengono esaminati descrivendo le versioni che corrispondono a IPv4 "in quanto sono quelle comunemente usate". In altre parole, all'epoca della scrittura del capitolo, le versioni IPv4 di ICMP, ARP e DHCP erano le più diffuse e utilizzate nella pratica, mentre le corrispondenti versioni per IPv6 erano meno comuni o ancora in fase di adozione.

### 3. Qual è l'equivalente di ARP per IPv6?

L'equivalente di ARP (Address Resolution Protocol) per IPv6 è chiamato **NDP (Neighbor Discovery Protocol)** . ICMP e DHCP hanno versioni simili per IPv6 (ICMPv6 e DHCPv6), mentre l'equivalente di ARP per IPv6 è NDP. Il testo precisa che "ICMP e DHCP hanno versioni simili per IPv6; l'equivalente di ARP per IPv6 è chiamato NDP".

#### Sottosezione 6.1.1 – Internet Control Message Protocol (ICMP)

### 4. A cosa serve ICMP (Internet Control Message Protocol)?

ICMP è un protocollo di rete utilizzato per **inviare messaggi di errore e altre informazioni operative**. Serve a comunicare informazioni diagnostiche e di controllo tra router e host sulla rete IP. Ad esempio, quando un pacchetto non può raggiungere la sua destinazione, il router che rileva il problema può inviare un messaggio ICMP al mittente per informarlo dell'errore.

### 5. Quali sono le due versioni principali di ICMP e quali sono le loro differenze?

Le due versioni principali di ICMP sono:

1. **ICMP per IPv4 (ICMPv4)** : Utilizzato per inviare messaggi di errore (ad esempio, quando un pacchetto non può raggiungere la sua destinazione) e per funzioni di diagnostica come il comando "ping", che verifica la connettività tra due dispositivi.

2. **ICMP per IPv6 (ICMPv6)** : Include **tutte le funzionalità di ICMPv4**, oltre a supportare le operazioni di NDP (Neighbor Discovery Protocol) e altre funzioni specifiche di IPv6. In pratica, ICMPv6 è più ricco di funzionalità perché incorpora protocolli che in IPv4 erano separati (come ARP).

### 6. Quale comando diagnostico utilizza ICMP per verificare la connettività tra due dispositivi?

Il comando diagnostico che utilizza ICMP per verificare la connettività tra due dispositivi è il comando **"ping"** . Ping invia pacchetti ICMP Echo Request a un host di destinazione e attende una risposta ICMP Echo Reply. Se la risposta arriva, significa che il percorso di rete tra i due dispositivi è funzionante e che l'host di destinazione è attivo e raggiungibile.

### 7. Quale funzionalità aggiuntiva offre ICMPv6 rispetto a ICMPv4?

ICMPv6 offre, rispetto a ICMPv4, il supporto alle operazioni di **NDP (Neighbor Discovery Protocol)** e altre funzioni specifiche di IPv6. NDP sostituisce diverse funzionalità che in IPv4 erano gestite da protocolli separati, tra cui ARP (per la risoluzione degli indirizzi), ICMPv4 (per i messaggi di redirect), e parte del funzionamento di DHCP. ICMPv6 è quindi un protocollo più integrato e potente nel contesto di IPv6.

#### Sottosezione 6.1.2 – ARP – Address Resolution Protocol

### 8. Perché gli indirizzi IP non possono essere utilizzati direttamente dalle schede di rete? Che tipo di indirizzi usano le schede Ethernet?

Gli indirizzi IP non possono essere utilizzati direttamente dalle schede di rete perché le schede di rete che operano a livello data link (come le schede Ethernet) **non comprendono gli indirizzi Internet**. Le schede di rete sono progettate per funzionare a livello di collegamento e utilizzano indirizzi fisici propri.

Le schede Ethernet incorporano un **indirizzo Ethernet a 48 bit** (chiamato anche indirizzo MAC – Media Access Control). Questo indirizzo è univoco a livello mondiale: ogni produttore richiede a IEEE un blocco di indirizzi per garantire che nessuna coppia di schede utilizzi lo stesso indirizzo, evitando conflitti se dovessero capitare sulla stessa LAN. Le schede di rete inviano e ricevono frame basati su questi indirizzi Ethernet a 48 bit e non sanno nulla degli indirizzi IP a 32 bit.

### 9. Quanti bit ha un indirizzo Ethernet e come viene garantita l'univocità?

Un indirizzo Ethernet ha **48 bit**. L'univocità degli indirizzi Ethernet è garantita dal fatto che ogni produttore richiede a IEEE (Institute of Electrical and Electronics Engineers) un blocco di indirizzi. IEEE assegna al produttore un prefisso unico (chiamato OUI – Organizationally Unique Identifier, tipicamente i primi 24 bit). Il produttore è poi responsabile di assegnare in modo univoco i restanti 24 bit a ciascuna scheda di rete prodotta. Questo sistema assicura che non ci siano due schede di rete al mondo con lo stesso indirizzo MAC, evitando conflitti se dovessero capitare sulla stessa LAN.

### 10. Spiega il funzionamento di base di ARP. Cosa fa un host quando vuole conoscere l'indirizzo Ethernet corrispondente a un indirizzo IP?

Il funzionamento di base di ARP (Address Resolution Protocol) è il seguente: quando un host vuole conoscere l'indirizzo Ethernet corrispondente a un indirizzo IP (ad esempio 192.32.65.5), l'host **trasmette attraverso la Ethernet un pacchetto broadcast** che chiede chi sia il proprietario di quell'indirizzo IP. La trasmissione broadcast arriva a **tutte le macchine** della rete Ethernet. Ciascuna macchina controlla il proprio indirizzo IP: solo l'host che possiede quell'indirizzo IP risponde, inviando il proprio indirizzo Ethernet (E2). In questo modo, l'host che ha fatto la richiesta scopre che l'indirizzo IP cercato è associato a un determinato indirizzo Ethernet. ARP è definito nell'RFC 826.

### 11. Cos'è una trasmissione broadcast nel contesto di ARP?

Una trasmissione **broadcast** (trasmissione a tutti) nel contesto di ARP è un tipo di frame Ethernet che viene inviato a un indirizzo speciale (l'indirizzo broadcast, che è tipicamente FF:FF:FF:FF:FF:FF) che viene ricevuto da **tutte le macchine** presenti sulla stessa rete Ethernet. Quando un host invia una richiesta ARP in broadcast, tutti gli host sulla LAN ricevono il messaggio. Ogni host controlla se l'indirizzo IP richiesto corrisponde al proprio; solo l'host che possiede quell'IP risponde, mentre gli altri ignorano la richiesta.

### 12. A cosa serve la cache ARP? Perché le informazioni nella cache dovrebbero scadere dopo pochi minuti?

La **cache ARP** è una tabella memorizzata in ogni host che contiene le associazioni (mapping) tra indirizzi IP e indirizzi Ethernet recentemente risolti. Serve a evitare di ripetere le richieste ARP per lo stesso indirizzo IP ogni volta che si deve inviare un pacchetto, migliorando le prestazioni.

Le informazioni nella cache dovrebbero **scadere dopo pochi minuti** (tipicamente 2-20 minuti) per permettere cambiamenti nelle associazioni. Ad esempio, quando un host viene configurato per utilizzare un nuovo indirizzo IP mantenendo quello Ethernet, la vecchia associazione nella cache degli altri host diventerebbe errata. La scadenza periodica assicura che le voci obsolete vengano rimosse e che venga eseguita una nuova risoluzione ARP quando necessario.

### 13. Cos'è il gratuitous ARP (ARP gratuito)? A cosa serve e quando viene eseguito?

Il **gratuitous ARP** (ARP gratuito) è un'operazione in cui un computer trasmette in broadcast la propria associazione (IP → MAC) **durante l'accensione** (o quando viene configurato con un nuovo indirizzo IP). Questa trasmissione broadcast è generalmente eseguita sotto forma di una ricerca ARP mirata al proprio indirizzo IP. L'operazione, che non dovrebbe ricevere alcuna risposta (perché nessun altro dovrebbe avere lo stesso IP), ottiene l'effetto di **inserire una voce nella cache ARP di tutti gli altri computer** presenti sulla stessa rete. In questo modo, gli altri host conoscono subito l'indirizzo MAC del nuovo host senza doverlo richiedere esplicitamente.

### 14. Cosa significa se un host riceve una risposta a un gratuitous ARP?

Se un host riceve una risposta (inaspettata) a un gratuitous ARP, significa che **due computer hanno ricevuto lo stesso indirizzo IP** (c'è un conflitto di indirizzi IP sulla rete). L'errore deve essere risolto dall'amministratore di rete prima che le due macchine possano usare la rete. Il gratuitous ARP funge quindi anche da meccanismo di rilevazione di conflitti di indirizzi IP.

### 15. In una rete con router, come fa un host a inviare un pacchetto a un host su una rete diversa?

In una rete con router, quando un host (ad esempio Host 1) vuole inviare un pacchetto a un host (Host 4) che si trova su una rete diversa, l'host 1 vede che l'indirizzo IP di destinazione **non si trova sulla propria rete**. Sa che deve inviare tutto il traffico fuori rete al **router** (che prende anche il nome di **default gateway**). Per convenzione, il default gateway ha l'indirizzo più basso sulla rete (ad esempio 198.31.65.1). L'host 1, per inviare un frame al router, deve conoscere l'indirizzo Ethernet della scheda di rete del router sulla propria rete. Lo scopre inviando un **broadcast ARP** per l'indirizzo IP del default gateway (198.31.65.1), dal quale impara l'indirizzo Ethernet del router (E3). Solo dopo può inviare il frame al router, che si occuperà di inoltrarlo verso la rete di destinazione.

### 16. Cos'è il default gateway? Quale indirizzo gli viene tipicamente assegnato per convenzione?

Il **default gateway** (gateway predefinito) è il router sulla rete locale che un host utilizza per inviare tutto il traffico destinato a reti esterne. È il dispositivo che consente agli host sulla rete locale di comunicare con il resto di Internet.

Per convenzione, il default gateway ha l'**indirizzo più basso sulla rete** (o talvolta il più alto, ma il testo specifica "per convenzione, ha l'indirizzo più basso sulla rete"). Ad esempio, su una rete 192.31.65.0/24, il default gateway potrebbe essere 192.31.65.1.

### 17. In cosa consiste il proxy ARP? In quali situazioni viene utilizzato?

Il **proxy ARP** è una tecnica in cui un router risponde alle richieste ARP per un host che si trova su una rete diversa, fornendo il proprio indirizzo Ethernet invece di quello dell'host destinazione. Quando un host (Host 1) su una rete (CS) vuole inviare un pacchetto a un host (Host 4) su un'altra rete (EE), il router sulla rete CS può rispondere alle richieste ARP per l'Host 4 fornendo il proprio indirizzo Ethernet (E3). In questo modo, l'Host 1 invierà il pacchetto al router, che poi lo inoltrerà all'Host 4 sulla rete EE.

Il proxy ARP è utilizzato in situazioni in cui un host vuole **apparire su una rete anche se effettivamente risiede in un'altra**. Una situazione comune, ad esempio, è quando una **stazione mobile** (un dispositivo che si sposta) vuole che qualche altro nodo raccolga il proprio traffico quando non si trova nella sua LAN di appartenenza.

### 18. Perché in una configurazione con proxy ARP l'host di destinazione non può rispondere direttamente alla richiesta ARP?

In una configurazione con proxy ARP, l'host di destinazione non può rispondere direttamente alla richiesta ARP perché **i router non inoltrano i messaggi broadcast a livello Ethernet**. La richiesta ARP è un frame Ethernet broadcast che viene inviato sulla rete locale (CS). I router, per loro natura, non inoltrano i frame broadcast da una rete all'altra. Pertanto, l'Host 4 (sulla rete EE) non vede mai la richiesta ARP proveniente dall'Host 1 (sulla rete CS). È per questo motivo che il router deve intervenire come proxy, rispondendo per conto dell'Host 4.

#### Sottosezione 6.1.3 – DHCP – Dynamic Host Configuration Protocol

### 19. Quale problema risolve DHCP (Dynamic Host Configuration Protocol)?

DHCP risolve il problema della **configurazione manuale degli host**. ARP e altri protocolli di Internet assumono che gli host siano configurati con alcune informazioni di base, come il proprio indirizzo IP. Configurare manualmente ogni computer (inserendo indirizzo IP, maschera di sottorete, default gateway, DNS, etc.) è **tedioso e suscettibile di errori**. DHCP automatizza questo processo: quando un computer si avvia, ottiene automaticamente un indirizzo IP e altre informazioni di configurazione da un server DHCP, senza intervento umano.

### 20. Quali informazioni di base deve avere un host per funzionare in rete? Perché la configurazione manuale è problematica?

Un host deve avere diverse informazioni di base per funzionare in rete, tra cui: il proprio indirizzo IP, la maschera di sottorete, l'indirizzo IP del default gateway (router), l'indirizzo IP del server DNS, e talvolta altri parametri come il server per la sincronizzazione dell'orologio (time server).

La configurazione manuale è problematica perché:
- È **tediosa** per l'amministratore, specialmente su reti con molti host
- È **suscettibile di errori** (si possono inserire indirizzi errati, causare conflitti di IP, o dimenticare di aggiornare la configurazione quando la rete cambia)
- Non è scalabile in reti di grandi dimensioni o con host che si connettono e disconnettono frequentemente (come computer portatili)

### 21. Spiega il processo di configurazione di un host tramite DHCP partendo dall'avvio.

Il processo di configurazione di un host tramite DHCP, partendo dall'avvio, è il seguente:

1. Quando un computer viene avviato, ha un indirizzo Ethernet (o altro di livello data link) all'interno della scheda di rete, ma **non ha un indirizzo IP**.

2. Analogamente ad ARP, il computer invia sulla rete una richiesta **broadcast** tramite un pacchetto **DHCP DISCOVER** per ottenere un indirizzo IP.

3. Il pacchetto deve raggiungere il server DHCP. Se il server non è direttamente collegato alla stessa rete, il router deve essere configurato per ricevere il messaggio DHCP e inoltrarlo al server (funzione di DHCP relay).

4. Quando il server riceve il pacchetto, **alloca un indirizzo IP libero** e lo invia all'host in un pacchetto **DHCP OFFER** (che potrebbe dover essere inoltrato nuovamente dal router).

5. Per essere in grado di eseguire questa operazione anche quando gli host non hanno indirizzo IP, il server identifica un host tramite il suo **indirizzo Ethernet** (contenuto nel pacchetto DHCP DISCOVER).

### 22. Cosa sono i pacchetti DHCP DISCOVER e DHCP OFFER?

- **DHCP DISCOVER**: è il pacchetto che il client (host che si avvia) invia in **broadcast** sulla rete per trovare un server DHCP e richiedere un indirizzo IP. Contiene l'indirizzo Ethernet del client come identificatore.

- **DHCP OFFER**: è il pacchetto che il server DHCP invia in risposta al DHCP DISCOVER. Contiene un **indirizzo IP offerto** al client (un indirizzo libero prelevato dal pool di indirizzi gestiti dal server), insieme ad altre informazioni di configurazione (maschera di sottorete, default gateway, DNS, lease time, etc.).

### 23. Come identifica il server DHCP un host che ancora non ha un indirizzo IP?

Il server DHCP identifica un host che ancora non ha un indirizzo IP tramite il suo **indirizzo Ethernet (MAC address)** . Il client include il proprio indirizzo Ethernet nel pacchetto DHCP DISCOVER. Anche se il client non ha un indirizzo IP (o il suo indirizzo IP è ancora sconosciuto), l'indirizzo Ethernet è un identificatore fisico unico che il server può utilizzare per riconoscere il client e associargli un indirizzo IP. Il server può anche mantenere una tabella di associazioni tra indirizzi Ethernet e indirizzi IP assegnati (per assegnazioni fisse o "reserved").

### 24. Cos'è il leasing in DHCP? Come funziona il rinnovo?

Il **leasing** (locazione) in DHCP è una tecnica per cui l'assegnazione dell'indirizzo IP viene fissata per un **periodo di tempo limitato** (la durata del lease). Questo risolve il problema degli indirizzi IP che andrebbero definitivamente persi se un host abbandonasse la rete senza restituire il proprio indirizzo al server DHCP.

Il funzionamento del rinnovo è il seguente:
- Il server assegna un indirizzo IP al client con una durata specifica (es. 24 ore, 7 giorni, etc.).
- Il client può utilizzare l'indirizzo per tutta la durata del lease.
- **Poco prima della scadenza del leasing**, l'host deve **chiedere al server DHCP il rinnovo dell'indirizzo** (inviando un messaggio DHCP REQUEST).
- Se il server concede il rinnovo (inviando un DHCP ACK), il client può continuare a utilizzare lo stesso indirizzo IP per un nuovo periodo di lease.
- Se il client non riesce a fare la richiesta (es. è spento o fuori rete) o la richiesta viene **rifiutata** dal server (ad esempio perché l'indirizzo è stato riassegnato ad altri), il client **non può più utilizzare** l'indirizzo IP che gli era stato assegnato precedentemente.

### 25. Perché il leasing è necessario? Cosa accadrebbe senza questa tecnica?

Il leasing è necessario perché **se un host abbandona la rete e non restituisce il proprio indirizzo IP al server DHCP, quell'indirizzo andrebbe definitivamente perso**. Dopo un po' di tempo, molti indirizzi IP potrebbero non essere più disponibili perché "legati" a host che non esistono più o che non sono più in rete.

Senza il leasing, il server DHCP allocherebbe indirizzi IP in modo permanente. In una rete mobile o con molti host che si connettono e disconnettono, il pool di indirizzi si esaurirebbe rapidamente. Il leasing garantisce che gli indirizzi vengano automaticamente rilasciati dopo un certo tempo se l'host non ne richiede il rinnovo, consentendo il riutilizzo degli indirizzi da parte di altri host.

### 26. Quali parametri aggiuntivi può configurare DHCP oltre all'indirizzo IP?

DHCP può configurare numerosi parametri aggiuntivi oltre all'indirizzo IP. Esempi comuni menzionati nel testo sono:
- **Maschera di rete** (subnet mask)
- **Indirizzo IP del default gateway** (router predefinito)
- **Indirizzo IP del server DNS** (Domain Name System)
- **Server per la sincronizzazione dell'orologio interno** (time server, NTP)

Il testo specifica che DHCP è "molto usato in Internet per configurare **ogni sorta di parametro** oltre a fornire indirizzi IP agli host".

### 27. In quali contesti viene utilizzato DHCP (reti domestiche, aziendali, ISP)?

DHCP è utilizzato in molteplici contesti:
- **Reti aziendali**: per configurare automaticamente i computer dei dipendenti, semplificando l'amministrazione di rete
- **Reti domestiche**: il router domestico tipicamente include un server DHCP che assegna indirizzi IP privati ai dispositivi della LAN domestica
- **ISP (Internet Service Provider)** : gli ISP usano DHCP per configurare i parametri dei dispositivi di accesso a Internet (modem/router dei clienti), in modo che i clienti non debbano telefonare all'ISP per avere tali informazioni

### 28. Quali protocolli precedenti sono stati quasi completamente sostituiti da DHCP? Perché?

DHCP ha quasi del tutto sostituito i seguenti protocolli precedenti:
- **RARP (Reverse Address Resolution Protocol)** : permetteva a un host di scoprire il proprio indirizzo IP a partire dal proprio indirizzo Ethernet, ma richiedeva un server RARP sulla stessa rete e non forniva altri parametri di configurazione.
- **BOOTP (Bootstrap Protocol)** : più flessibile di RARP, permetteva di fornire più parametri di configurazione, ma era più limitato di DHCP (ad esempio, non supportava il leasing e la riconfigurazione dinamica).

La sostituzione è avvenuta perché DHCP offre **funzionalità più avanzate**, tra cui: leasing (assegnazione temporanea degli indirizzi), supporto a una gamma molto più ampia di parametri configurabili, e la capacità di riconfigurare dinamicamente gli host anche durante il funzionamento.

---

## Sezione 6.2 – NAT – Network Address Translation

### 29. Quale problema principale affronta il NAT (Network Address Translation)?

Il NAT affronta il problema della **scarsità degli indirizzi IPv4**. Gli indirizzi IP sono scarsi; ad esempio, un ISP potrebbe avere un indirizzo /16 che consente di gestire 65.534 host, ma se il numero dei clienti supera questo valore, sorge un problema. La questione dell'esaurimento degli indirizzi IP non è un problema teorico che potrebbe presentarsi in un lontano futuro: "sta accadendo proprio qui e ora". Il NAT è stato sviluppato come una **soluzione rapida attuabile in tempi brevi** per mitigare la scarsità di indirizzi IPv4, in attesa della transizione a IPv6.

### 30. Perché la scarsità di indirizzi IPv4 è un problema concreto e non solo teorico?

La scarsità di indirizzi IPv4 è un problema concreto perché il numero di dispositivi connessi a Internet è cresciuto in modo esponenziale (computer, smartphone, tablet, dispositivi IoT, server, etc.), mentre il numero totale di indirizzi IPv4 è limitato a circa 4,3 miliardi (2³²), molti dei quali non sono utilizzabili (indirizzi riservati, privati, multicast, etc.). Gli indirizzi IPv4 disponibili sono stati effettivamente **esauriti** a livello dei registri regionali tra il 2011 e il 2019. Senza soluzioni come il NAT, non sarebbe possibile connettere tutti i dispositivi attuali a Internet con indirizzi IPv4 univoci.

### 31. Qual è la soluzione a lungo termine al problema dell'esaurimento degli indirizzi IPv4? Perché la transizione è lenta?

La soluzione a **lungo termine** è che tutta Internet passi a **IPv6**, il protocollo che adotta indirizzi a 128 bit, fornendo uno spazio di indirizzamento virtualmente infinito.

La transizione è lenta perché:
- IPv6 è un protocollo **molto diverso da IPv4**, con retrocompatibilità limitata
- Richiede l'aggiornamento di **tutti i router, switch, sistemi operativi e applicazioni** su Internet
- Molti ISP e organizzazioni hanno investito molto in infrastrutture IPv4 e sono riluttanti a sostenere i costi della migrazione
- Esistono soluzioni "ponte" come il NAT che, seppur imperfette, permettono di continuare a usare IPv4
- La transizione richiede la **coesistenza** di entrambi i protocolli per un lungo periodo (dual stack)

### 32. Qual è l'idea di base del NAT? Quanti indirizzi IP pubblici assegna tipicamente a un'azienda o casa?

L'idea di base del NAT è assegnare a ogni azienda o casa un **singolo indirizzo IP** (o, al massimo, un piccolo numero di indirizzi) per il traffico di Internet. Dentro la rete del cliente, ogni computer riceve un indirizzo IP unico (privato), utilizzato per instradare il traffico interno alla rete locale. Tuttavia, quando un pacchetto sta per lasciare la rete locale per dirigersi verso l'ISP, viene eseguita una **traduzione di indirizzo** dall'indirizzo IP interno a quello pubblico condiviso.

In pratica, molti dispositivi sulla LAN condividono lo **stesso indirizzo IP pubblico** verso Internet.

### 33. Quali sono i tre intervalli di indirizzi IP privati riservati per l'uso interno? Quanti host supporta ciascuno?

I tre intervalli di indirizzi IP privati (dichiarati tali dalle specifiche NAT) sono:

| Intervallo | CIDR | Numero di host |
|------------|------|----------------|
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 | 16.777.216 host |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 | 1.048.576 host |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 | 65.536 host |

L'unica regola è che nessun pacchetto contenente questi indirizzi possa apparire su Internet; devono essere tradotti dal NAT prima di uscire verso la rete pubblica.

### 34. Perché i pacchetti contenenti indirizzi privati non possono apparire su Internet?

I pacchetti contenenti indirizzi privati non possono apparire su Internet perché **non sono instradabili globalmente**. I router su Internet (i router dei core network) sono configurati per **scartare** (o non inoltrare) qualsiasi pacchetto che abbia come indirizzo sorgente o destinazione un indirizzo degli intervalli privati. Questo è un accordo universale tra tutti i provider Internet. Se un pacchetto con indirizzo privato uscisse su Internet, non potrebbe essere consegnato perché nessun router saprebbe dove si trova quella rete (l'indirizzo non è univoco a livello globale e non è stato allocato a nessun provider specifico). Inoltre, rappresenterebbe un potenziale problema di sicurezza.

### 35. Quale intervallo di indirizzi privati è la scelta più comune nelle aziende? Perché?

Il primo intervallo (10.0.0.0 – 10.255.255.255, /8) è la scelta comune in molte aziende, anche in quelle che non hanno bisogno di così tanti indirizzi (16.777.216 host). La ragione è che offre **massima flessibilità** per la crescita futura e semplifica la pianificazione della rete (un grande blocco contiguo è più facile da gestire e suddividere in sottoreti rispetto a blocchi più piccoli). Inoltre, utilizzando il blocco /8, un'azienda evita conflitti di indirizzamento quando si collega con partner che potrebbero usare gli altri blocchi privati.

### 36. Descrivi il percorso di un pacchetto che esce da una rete con NAT: cosa succede quando attraversa l'apparato NAT?

Quando un pacchetto esce dalla rete interna e raggiunge l'apparato NAT, accade quanto segue:

1. L'indirizzo sorgente interno (ad esempio 10.0.0.1) viene **sostituito** dall'indirizzo IP pubblico dell'azienda (ad esempio 198.60.42.12).

2. Il campo della **porta sorgente** (nell'intestazione TCP o UDP) viene **sostituito con un indice** che punta alla tabella di traduzione del NAT. Questa tabella contiene l'indirizzo IP originale e la porta sorgente originale.

3. I **checksum** delle intestazioni IP e TCP/UDP vengono **ricalcolati** (perché i campi dell'indirizzo e della porta sono cambiati) e inseriti nel pacchetto.

4. Il pacchetto viene quindi inoltrato verso l'ISP (e da lì verso Internet) con il nuovo indirizzo sorgente pubblico.

### 37. Con quali altri dispositivi viene spesso abbinato l'apparato NAT?

L'apparato NAT è spesso abbinato a un **firewall** (muro di fuoco), inserito all'interno di un singolo apparecchio che **protegge la rete locale**, controllando attentamente tutti i dati che entrano e che escono dalla LAN. Si può anche integrare l'apparato NAT nel **router** o nel **modem ADSL aziendale** (o nel router domestico). Nella maggior parte dei dispositivi consumer (router domestici), NAT e firewall sono integrati nello stesso dispositivo.

### 38. Qual è il problema principale nella gestione delle risposte ai pacchetti in NAT?

Il problema principale è che quando i dati di risposta tornano da Internet (ad esempio da un server web), sono indirizzati all'IP pubblico (come 198.60.42.12). A questo punto, il NAT deve decidere a quale **indirizzo di destinazione interno** (quale host nella LAN privata) inviare questi dati. Idealmente, un campo nell'intestazione IP potrebbe essere utilizzato per tenere traccia dell'indirizzo sorgente originale, ma nell'intestazione IP rimane inutilizzato solo un singolo bit, insufficiente per memorizzare questa informazione.

### 39. Perché i progettisti di NAT hanno scelto di utilizzare le porte TCP/UDP invece di campi dell'intestazione IP?

I progettisti di NAT hanno notato che la maggior parte dei pacchetti IP trasporta al suo interno **TCP o UDP**, entrambi con intestazioni che contengono una **porta sorgente e una porta di destinazione** (numeri interi a 16 bit). Quando un processo vuole stabilire una connessione TCP con un processo remoto, si lega a una porta TCP inutilizzata sulla sua macchina (porta sorgente). Questa associazione (indirizzo IP + porta) identifica univocamente il processo sulla macchina. Utilizzando le porte, il NAT può distinguere diverse connessioni provenienti dallo stesso indirizzo IP interno (o da indirizzi diversi) anche se condividono lo stesso IP pubblico in uscita.

### 40. Cosa sono le porte TCP? Quanti bit hanno e a cosa servono?

Le porte TCP sono **numeri interi a 16 bit** (quindi vanno da 0 a 65.535) che indicano dove inizia e finisce una connessione TCP (o UDP). Quando un processo vuole stabilire una connessione TCP con un processo remoto, si lega a una porta TCP inutilizzata sulla sua macchina, chiamata **porta sorgente**, e fornisce anche una **porta di destinazione** (che identifica il servizio remoto, ad esempio la porta 80 per HTTP). Questo permette di identificare i processi che utilizzano la connessione. Le porte consentono il **multiplexing/demultiplexing** dei flussi di dati: un singolo host può avere molte connessioni TCP attive contemporaneamente, ciascuna identificata dalla coppia (IP sorgente, porta sorgente, IP destinazione, porta destinazione).

### 41. Spiega nel dettaglio come il NAT tiene traccia delle associazioni tra indirizzi interni ed esterni usando le porte sorgente.

Il NAT tiene traccia delle associazioni nel modo seguente:

1. Quando un pacchetto esce dalla rete interna, il NAT crea una **nuova entry** nella sua tabella di traduzione.

2. L'entry contiene: (indirizzo IP interno, porta sorgente originale, porta sorgente tradotta assegnata dal NAT, indirizzo IP pubblico, porta di destinazione remota, indirizzo IP remoto).

3. Il NAT **sostituisce** la porta sorgente originale nel pacchetto con un **numero di porta univoco** (scelto dal NAT) che servirà come indice (o come chiave) per identificare la connessione.

4. Il NAT **ricalcola** i checksum di IP e TCP/UDP e invia il pacchetto modificato su Internet.

5. Quando arriva un pacchetto di risposta dall'ISP, contiene nel campo "porta destinazione" (nel pacchetto di risposta, la porta sorgente dell'originale diventa porta destinazione) il numero di porta che il NAT aveva assegnato.

6. Il NAT utilizza questo numero di porta come **indice** nella sua tabella di associazione per trovare l'entry corrispondente.

7. Dalla tabella, il NAT estrae l'indirizzo IP interno e la porta sorgente TCP originale, e **sostituisce** l'indirizzo e la porta nel pacchetto in ingresso.

8. Il NAT **ricalcola** nuovamente i checksum e inoltra il pacchetto al router interno per la normale consegna basata sull'indirizzo privato.

### 42. Cosa contiene la tabella di traduzione del NAT?

La tabella di traduzione del NAT (NAT translation table) contiene tipicamente, per ogni connessione attiva che attraversa il NAT:

- L'indirizzo IP interno (privato) del client
- La porta sorgente originale (TCP o UDP) del client
- La porta sorgente tradotta (assegnata dal NAT, univoca per quella connessione in uscita)
- L'indirizzo IP pubblico del NAT (lo stesso per tutte le connessioni in uscita)
- La porta di destinazione remota e l'indirizzo IP remoto (opzionali, ma aiutano a distinguere connessioni verso server diversi)

Per connessioni TCP, il NAT mantiene anche lo stato della connessione (SYN_SENT, ESTABLISHED, FIN_WAIT, etc.) per gestire correttamente il rilascio e il timeout delle entry.

### 43. Perché il NAT deve ricalcolare i checksum delle intestazioni IP e TCP?

Il NAT deve ricalcolare i **checksum** delle intestazioni IP e TCP/UDP perché i checksum vengono calcolati su campi che **cambiano** durante la traduzione:
- Il checksum IP copre l'indirizzo sorgente (che viene modificato dal NAT)
- Il checksum TCP/UDP copre una pseudointestazione che include gli indirizzi IP sorgente e destinazione (e le porte, che vengono modificate per la porta sorgente)

Se il NAT non ricalcolasse i checksum, il destinatario (o i router intermedi) troverebbe un checksum errato e scarterebbe il pacchetto. Il checksum deve essere ricalcolato sia per i pacchetti in uscita (dopo la traduzione dell'indirizzo sorgente e della porta) sia per i pacchetti in ingresso (dopo la traduzione inversa dell'indirizzo destinazione e della porta).

### 44. Come fa il NAT a gestire un pacchetto di risposta che arriva dall'ISP?

Quando un pacchetto di risposta dall'ISP raggiunge il NAT, la procedura è la seguente:

1. Il campo della **porta destinazione** nell'intestazione TCP/UDP (che corrisponde alla porta sorgente che il NAT aveva assegnato nel pacchetto in uscita) viene utilizzato come **indice** nella tabella di associazione.

2. Da questa tabella, il NAT estrae l'indirizzo IP interno e la porta sorgente TCP originale.

3. Il NAT **sostituisce** l'indirizzo IP destinazione (quello pubblico) con l'indirizzo IP interno privato.

4. Il NAT **sostituisce** la porta destinazione (quella assegnata) con la porta sorgente originale del client.

5. Il NAT **ricalcola** i checksum IP e TCP/UDP (poiché indirizzo e porta sono cambiati).

6. Il NAT **inoltra** il pacchetto al router interno (o direttamente al client sulla LAN) per la normale consegna basata sull'indirizzo privato.

### Obiezioni e Limiti del NAT

### 45. Perché il NAT viola il modello gerarchico di IP?

Il NAT viola il modello gerarchico di IP perché, secondo il modello originale di IP, ogni indirizzo IP identifica in modo univoco una singola macchina a livello globale. Con il NAT, **migliaia di macchine possono condividere lo stesso indirizzo IP** (come 10.0.0.1 è usato in milioni di reti private diverse). Questo rompe l'assunzione di univocità globale degli indirizzi IP e rende più complessa l'architettura di Internet, perché la rete non può più contare sul fatto che un indirizzo IP identifichi univocamente un host.

### 46. In che modo il NAT rompe il modello di connettività end-to-end di Internet?

Il NAT rompe il modello di **connettività end-to-end** di Internet, impedendo a un host pubblico di iniziare una comunicazione con un host privato senza una connessione preesistente. In Internet pura (senza NAT), qualsiasi host può contattare qualsiasi altro host (se non ci sono firewall) perché ogni host ha un indirizzo pubblico raggiungibile. Con il NAT, gli host nella rete privata non hanno indirizzi pubblici, e la tabella di traduzione del NAT è inizialmente vuota. Per un host pubblico, non esiste un modo diretto per contattare un host privato a meno che non sia già stata stabilita una connessione dall'interno verso l'esterno (che ha creato una entry nella tabella). Questo rende difficili (o impossibili) molte applicazioni peer-to-peer, server domestici, giochi online con hosting locale, e servizi di condivisione file.

### 47. Perché si dice che il NAT trasforma Internet da rete non orientata alla connessione a rete orientata alla connessione? Quale vulnerabilità introduce?

Il NAT trasforma Internet da una rete non orientata alla connessione (connectionless) a una rete orientata alla connessione (connection-oriented) perché il NAT **deve mantenere lo stato delle connessioni che attraversano**. In una rete puramente a datagram (senza NAT), i router non mantengono alcuno stato sulle connessioni. Con il NAT, invece, il dispositivo NAT deve tenere una tabella che ricorda quali connessioni sono attive e quali traduzioni sono state effettuate.

La vulnerabilità che questo introduce è che se il **NAT si guasta** o viene riavviato, tutte le informazioni di stato vengono perse, e quindi **tutte le connessioni TCP in corso vengono interrotte** (non possono essere riprese perché il NAT non sa più a quale host interno associare i pacchetti di risposta). Questo rende il NAT un **single point of failure** (punto singolo di guasto) per tutte le connessioni che lo attraversano.

### 48. Quale principio della stratificazione dei protocolli viola il NAT? Perché?

Il NAT viola il principio della stratificazione dei protocolli che afferma che **ogni livello non deve fare ipotesi su ciò che il livello superiore ha inserito nel payload**. In particolare, il livello di rete (IP) dovrebbe ignorare completamente il contenuto dei pacchetti (che potrebbe essere TCP, UDP, ICMP, o qualsiasi altro protocollo). Tuttavia, il NAT deve **ispezionare il payload** dei pacchetti IP (per leggere le porte TCP/UDP) per poter funzionare. Questo crea una **dipendenza** dal protocollo di trasporto (TCP/UDP) e dalle specifiche delle loro intestazioni. Se in futuro il protocollo TCP venisse aggiornato con uno schema di intestazione diverso, il NAT non funzionerebbe più correttamente (a meno di essere aggiornato specificatamente). Questo è un esempio di violazione del principio di "information hiding" (nascondimento delle informazioni) che sta alla base della progettazione a livelli.

### 49. Perché il NAT non supporta bene i protocolli non TCP/UDP? Fai un esempio di protocollo problematico.

Il NAT non supporta bene i protocolli non TCP/UDP perché la sua tabella di traduzione si basa sulle **porte TCP/UDP** per distinguere le connessioni. Se un protocollo non usa né TCP né UDP (ad esempio, ICMP, GRE, IPsec in modalità trasporto, o altri protocolli IP con numero di protocollo diverso da 6 o 17), il NAT non ha un campo "porta" da utilizzare come indice nella tabella. Inoltre, alcuni protocolli come **FTP (File Transfer Protocol)** sono problematici perché FTP utilizza **connessioni separate** per il controllo (porta 21) e per i dati (porta 20 in modalità attiva, o porte casuali in modalità passiva), e inoltre FTP incorpora gli indirizzi IP all'interno del payload (nei comandi PORT o PASV). Il NAT deve ispezionare e modificare anche questi payload specifici di FTP, rendendo necessario un **ALG (Application Level Gateway)** specifico per FTP.

### 50. Quale limite deriva dalla dimensione del campo della porta sorgente TCP (16 bit) in termini di numero massimo di macchine associabili?

Poiché il campo della porta sorgente TCP è di 16 bit, un indirizzo IP pubblico può teoricamente essere associato a un **massimo di 65.536 macchine** (2¹⁶) contemporaneamente (una per ogni possibile porta sorgente, da 0 a 65535). Tuttavia, il numero effettivo è **leggermente inferiore** perché alcune porte sono riservate per usi speciali (le well-known ports da 0 a 1023 sono tipicamente riservate per servizi standard). Inoltre, il NAT deve anche riservare alcune porte per il proprio funzionamento e per evitare conflitti. Nella pratica, 65.000 connessioni simultanee sono sufficienti per la maggior parte delle reti domestiche e di piccole/medie aziende, ma possono essere un limite in reti molto grandi.

### 51. Qual è l'RFC che discute i problemi legati al NAT?

I problemi legati al NAT sono discussi nell'**RFC 2993** (Architectural Implications of NAT). Questo RFC descrive le implicazioni architetturali del NAT, includendo molti dei problemi menzionati: violazione del modello end-to-end, violazione della stratificazione, difficoltà di supporto a protocolli non TCP/UDP, problemi di sicurezza, e altri aspetti problematici.

### 52. Nonostante i suoi limiti, perché il NAT è ancora ampiamente utilizzato?

Nonostante i suoi limiti, il NAT è ancora ampiamente utilizzato perché rappresenta una **soluzione pratica al problema della mancanza di indirizzi IP** (scarsità di IPv4), specialmente nelle reti domestiche e nelle piccole aziende. Inoltre, il NAT è spesso combinato con funzioni di **firewall** per bloccare i pacchetti in arrivo non richiesti, fornendo un ulteriore livello di sicurezza (anche se questa sicurezza è più un effetto collaterale che una funzionalità progettuale). Il NAT è anche relativamente semplice da implementare e configurare, ed è supportato da tutti i router domestici e aziendali.

### 53. Con quale altra funzionalità viene spesso combinato il NAT nelle reti domestiche e nelle piccole aziende?

Il NAT viene spesso combinato con le funzioni di **firewall** (muro di fuoco). In molti dispositivi (router domestici, modem/router, appliance di sicurezza), NAT e firewall sono integrati nello stesso apparecchio. Il firewall può bloccare i pacchetti in arrivo non richiesti (proteggendo la rete interna da attacchi esterni), mentre il NAT traduce gli indirizzi. Il firewall può anche lavorare con la tabella NAT per consentire selettivamente l'accesso dall'esterno verso server interni specifici (port forwarding).

### 54. Secondo il testo, il NAT scomparirà completamente con l'adozione diffusa di IPv6? Perché?

Secondo il testo, **anche con l'adozione diffusa di IPv6, è improbabile che il NAT scompaia completamente**. Anche se IPv6 elimina la necessità del NAT per la conservazione degli indirizzi (grazie allo spazio di indirizzamento enorme), il NAT è stato anche utilizzato come strumento di sicurezza (per nascondere la topologia interna della rete) e come meccanismo di controllo amministrativo. Molti amministratori di rete potrebbero continuare a utilizzare NAT in IPv6 per ragioni di policy, sicurezza, o per semplificare la riconfigurazione delle reti. Inoltre, molte applicazioni e dispositivi esistenti si sono adattati alla presenza del NAT; potrebbero continuare a usarlo anche quando IPv6 sarà prevalente.

---

## Domande trasversali e di confronto

### 55. Confronta ARP e DHCP in termini di: scopo, tipo di trasmissione utilizzata, informazioni fornite.

| Caratteristica | ARP | DHCP |
|----------------|-----|------|
| **Scopo** | Risolvere indirizzi IP in indirizzi MAC (Ethernet) | Assegnare automaticamente indirizzi IP e parametri di configurazione agli host |
| **Tipo di trasmissione** | Broadcast (richiesta ARP) e unicast (risposta ARP) | Broadcast (DHCP DISCOVER) e unicast (DHCP OFFER/ACK) |
| **Informazioni fornite** | Associazione IP ↔ MAC (indirizzo Ethernet) | Indirizzo IP, maschera di sottorete, default gateway, DNS, time server, lease time, etc. |
| **Direzione** | Da IP a MAC (risoluzione) | Da server a client (configurazione) |
| **Protocollo di trasporto** | Livello data link (Ethernet) diretto | UDP (porta 67 per server, 68 per client) |

### 56. Spiega la differenza tra ARP, gratuitous ARP e proxy ARP. In quali scenari viene usato ciascuno?

| Tipo | Funzionamento | Scenari di utilizzo |
|------|---------------|---------------------|
| **ARP standard** | Un host invia un broadcast chiedendo "chi ha questo indirizzo IP?"; l'host che possiede quell'IP risponde con il suo indirizzo MAC | Comunicazione normale tra host sulla stessa rete: un host deve inviare un pacchetto a un altro host sulla stessa LAN e ha bisogno del suo indirizzo MAC |
| **Gratuitous ARP** | Un host trasmette una richiesta ARP per il **proprio** indirizzo IP all'avvio, senza aspettarsi risposta. Inserisce la propria associazione nella cache di tutti gli altri host | All'avvio di un host (o quando cambia IP) per popolare preventivamente le cache ARP altrui; rilevazione di conflitti IP (se arriva una risposta) |
| **Proxy ARP** | Un router risponde alle richieste ARP per host su reti diverse, fornendo il proprio indirizzo MAC | Quando un host vuole apparire su una rete diversa da quella in cui risiede (es. stazioni mobili, reti con subnet distinte ma logicamente unificate) |

### 57. Confronta i tre intervalli di indirizzi privati (Classe A, B, C) in termini di numero di host supportati e uso tipico.

| Intervallo | Classe equivalente | CIDR | Numero di host | Uso tipico |
|------------|-------------------|------|----------------|------------|
| 10.0.0.0 – 10.255.255.255 | A | 10.0.0.0/8 | 16.777.216 | Grandi aziende, organizzazioni con molte subnet, provider di servizi cloud |
| 172.16.0.0 – 172.31.255.255 | B | 172.16.0.0/12 | 1.048.576 | Medie imprese, università, organizzazioni con esigenze di subnetting moderate |
| 192.168.0.0 – 192.168.255.255 | C | 192.168.0.0/16 | 65.536 | Reti domestiche, piccole aziende, laboratori, ambienti di test |

### 58. Quali sono le differenze principali tra ICMPv4 e ICMPv6?

| Caratteristica | ICMPv4 | ICMPv6 |
|----------------|--------|--------|
| **Funzionalità base** | Messaggi di errore e diagnostica (ping, traceroute) | Tutte le funzionalità di ICMPv4 |
| **Protocolli incorporati** | ARP, IGMP sono separati | Neighbor Discovery (NDP), MLD (Multicast Listener Discovery) sono incorporati |
| **Autoconfigurazione** | Non supportata (richiede DHCP o configurazione manuale) | SLAAC (Stateless Address Autoconfiguration) tramite ICMPv6 |
| **Router discovery** | Limitata (ICMP Router Discovery Protocol, obsoleto) | Incorporata in NDP |
| **Messaggi specifici** | Echo Request/Reply, Destination Unreachable, Time Exceeded, Redirect, Parameter Problem | Stessi + Neighbor Solicitation/Advertisement, Router Solicitation/Advertisement, Redirect |
| **Struttura** | Più semplice | Più complessa e ricca di funzionalità |

### 59. Perché il NAT è considerato una soluzione "rapida" e "transitoria" mentre IPv6 è la soluzione "definitiva"?

Il NAT è considerato una **soluzione rapida e transitoria** perché:
- È stato sviluppato come **ripiego** (workaround) per la scarsità di indirizzi IPv4 in attesa di una soluzione più pulita
- Non risolve il problema fondamentale (lo spazio di indirizzi IPv4 rimane limitato)
- Introduce problemi architetturali (violazione end-to-end, problemi con alcuni protocolli, necessità di mantenere stato)
- È una soluzione "patch" che aggiunge complessità senza eliminare la causa radice

IPv6 è considerato la **soluzione definitiva** perché:
- Risolve il problema alla **radice**: lo spazio di indirizzi a 128 bit elimina per sempre la scarsità di indirizzi (almeno per il futuro prevedibile)
- Ripristina il **modello end-to-end** originale di Internet (ogni dispositivo può avere un indirizzo pubblico raggiungibile)
- È stato progettato **ex novo** per superare i limiti di IPv4, includendo funzionalità di sicurezza (IPsec), autoconfigurazione (SLAAC), e header semplificato per prestazioni migliori
- È lo standard ufficiale dell'IETF per il futuro di Internet

Tuttavia, come notato, anche con IPv6 il NAT potrebbe non scomparire completamente per ragioni di sicurezza e policy amministrative.