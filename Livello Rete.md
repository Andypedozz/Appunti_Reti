# Livello Rete

## Indirizzamento IP
Un indirizzo ipv4 è riportato usualmente così:

208.67.220.220

Cioè formato da 4 numeri decimali separati da punti. Internamento gli indirizzi IP sono memorizzati in binario:

11010000.01000011.11011100.11011100

Il numero totale di ipv4 esistenti è 2^32, ossia 4 miliardi e 300 milioni circa, ma quelli realmente utilizzabili sono un po' meno in quanto alcuni di essi sono riservati (come 0.0.0.0, 127.0.0.1, 255.255.255.255, la classe 192.168.0.1/16).

## Sistema Classful
Originariamente lo schema per individuare un ipv4 era a classi, con questo schema l'indirizzo è ad autoidentificazione: per capire la classe bastava identificare i primi 4 bit dell'IP (i più significativi).

Così si formavano cinque classi (A,B,C,D,E) e in ciascuna classe, ogni indirizzo era diviso in due campi:
    * Net ID: indirizzo che identifica la rete su cui si trova il computer e che costituisce un prefisso
    * Host ID: che identifica il computer all'interno della rete e che costituisce una specie di suffisso

## IPv6
Nato negli anni 90 e diffuso lentamente dal 2000 a causa di scarsa retrocompatibilità.
Creato per fronteggiare l'esaurimento degli indirizzi IPv4.
Gli indirizzi IPv6 sono costituiti da 128 bit invece dei 32 di IPv4, con uno spazio di indirizzamento di 2^128
Rappresentati in esadecimale invece di decimale, componendo un indirizzo di 32 caratteri raggruppati in 8 gruppi, quindi 4 caratteri ciascuno, separati da ":".
Essi sono comprimibili rimuovendo i leading zeros o comprimendo i gruppi di soli zeri.
Esempio:
    2001:0db8:85a3:0000:0000:8a2e:0370:7334
compresso
    2001:0db8:85a3::8a2e:0370:7334

In IPv6 la divisione tra identificatore della rete e dell'host è sempre uguale, ossia i primi 64 bit identificano la rete e i restanti 64 gli host.
    IPv6 = Network Id + Interface Id
    Network Id = Site Prefix + Subnet Id
    Interface Id = identificatori dei singoli dispositivi (Host)

La IANA fin ora ha allocato solo 1/8 dello spazio di indirizzamento unicast di IPv6, e precisamente quello che inizia per 001 (primo byte = 001xxxxx = 2xxx::/3); quando finiranno si passerà a 3xxx::/3. Quindi tutti gli indirizzi IPv6 pubblici iniziano con la cifra 2.

Anche in IPv6 si usa la notazione CIDR, e una singola interfaccia viene indicata con il suffisso /128. Facciamo alcuni esempi, come l'indirizzo non specificato e quello di loopback:
    * Unspecified = 0.0.0.0 = ::/128
    * Loopback = 127.0.0.1  = ::1/128

Altri indirizzi speciali IPv6 sono:
* indirizzi riservati, pari a 1/256 dell spazio di indirizzamento (hanno il primo gruppo a 0)
* indirizzi locali (corrispondenti indirizzi privati di IPv4), che non vengono instradati verso l'esterno. Essi iniziano con i 9 bit: 1111 1110 1 (da FE8xx::/9 a FEFx::/9), e sono anche detti "unregistered" o "nonroutable". Questi sono a loro volta divisi in:
    * Link local Addresses: vengono sempre bloccati dai router, e quindi sono locali solo a un segmento di rete (switched LAN) o a una subnet.
    * Site Local Addresses: possono essere instradati dai router di un organizzazione ma solo all'interno della rete privata (Site), ma non verso internet.

## Altre novità di IPv6
* L'header IPv6 è stato rivisto rimuovendo il campo checksum e prevedendo una lunghezza fissa per semplificare l'inoltro dei pacchetti sui router.
* L'header IPv6 è lungo il doppio rispettoa IPv4 (40 byte vs 20 byte)
* IPv6 non suppoerta gli indirizzi broadcast, ma solo unicast, anycast e multicast.
* La sicurezza è stata curata in modo migliore: ci sono infatti due specifici extension header che forniscono servizi come:
    * IP Authentication Header (AH): fornisce ai datagrammi IP integrità e autenticazione, ma non confidenzialità. AH rende sicura la comunicazione tra due o più host, gateway, tra host e gateway.
    * IP Encapsulation Security Payload (ESP) a differenza del precedente questa modalità fornisce integrità, autenticazione e anche confidenzialità ai pacchetti.

Sia AH che ESP possono essere utilizzati in due modalità: Transport Mode e Tunnel Mode.

## Algoritmi di Routing
Le reti sono spesso identificate con gli Autonomous System (AS), ossia gruppi di reti controllati e gestiti dagli ISP. In altre parole un AS è una rete individuale su Internet e AS ha un numero intero che lo identifica (ASN), assegnato sempre dalla IANA. Tali numeri consentono a un AS di comunicare sia esternamente che internamente. I Router che instradano messaggi all'interno dello stesso AS sono detti interior router, e scambiano informazioni tramite un protocollo: mentre i router che instradano tra diversi AS sono anche detti edge router o di frontiera. In generale ogni router mantiene memoria di una tabella di routing, in cui ogni entry deve avere almeno due elementi:
* Un indirizzo di destinazione: IP del nodo di destinazione o della rete che lo ospita
* il tipo di indirizzo di destinazione: può indicare che la destinazione è direttamente collegata al router oppure indicare l'indirizzo di un altro router, anche questo direttamente collegato alla rete, ma che potrebbe portare a altre reti.

Gli algoritmi di routing si classificano in:
* Statici: le tabelle di routing sono predisposte da una persona e i valori in esse contenuti non cambiano fino a che la stessa persona non li cambia.
* Dinamici: le tabelle vengono continuamente aggiornate seguendo l'evoluzione della rete.

Per selezionare il percorso migliore gli algoritmi usano delle metriche: come lunghezza del percorso, banda passante, affidabilità del link, ritardo, carico di rete. Tuttavia due parametri universalmente accettati sono:
* Hops: numero di salti effettuati durante il percorso
* Costo: somma dei costi di tutte le linee attraversate, in riferimento a una o più delle metriche sopra dette.

## Distance Vector
* Basato sull'algoritmo Bellman-Ford
* Ogni nodo mantiene al proprio interno una tabella che ne indica la distanza da ogni altro nodo della rete (vettore delle distanze).

Inizializziamo la rete alimentando tutti i nodi al tempo t_0: in questo stato ogni nodo ha una conoscenza locale, ossia sa solo il proprio indirizzo e ignora totalmente la topologia delle rete e le distanze dagli altri.

## Congestione
La congestione della rete è il fenomeno in cui i nodi immettono nella rete più pacchetti di quanti essa ne riesca a consegnare a destinazione; oltre che per quantità di pacchetti, essa può avere altre cause come:
* diversi flussi attraversano la stessa linea e i pacchetti che arrivano a un router non riescono a essere processati
* esaurimento dei buffer nei router innesca un meccanismo che porta alla scarto dei pacchetti successivi
* la lentezza della CPU del router può portare a rallentamenti nella risposta ed esaurimento della memoria

L'insorgere della congestione può essere rilevato tramite il ritardo e il throughput, e senza contromisure essa peggiora nel tempo.

Quando la rete è in uno stato di carico normale, il throughput cresce proporzionalmente al traffico; se il traffico supera una percentuale piuttosto alta della capacità del canale (85-90%), allora il throughput comincia a diminuire.

Esistono diverse tecniche per prevenire e mitigare la congestione, e vengono applicata sia al livello rete sia al livello trasporto, e si dividono in:
* proaattive (o a ciclo aperto)
* reattive (o a ciclo chiuso)

### Controllo Proattivo

### Controllo Reattivo