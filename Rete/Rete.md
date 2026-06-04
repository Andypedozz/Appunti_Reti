# Livello Rete

## Problemi Architetturali del livello Rete

Il livello rete interconnette i diversi collegamenti punto-punto, per collegare dispositivi geograficamente lontani. I pacchetti vanno dal mittente alla destinazione attraversando tutti i nodi intermedi, e sono interamente ricevuti e ritrasmessi da questi (**store and forward**).

Ci sono due scuole di pensiero sulla progettazione del livello rete:
* coloro che sostengono che debba fornire un servizio orientato alla connessione, rifacendosi all'esperienza delle reti telefoniche, che vorrebbero che sia un servizio affidabile.
* coloro che hanno effettivamente sviluppato Internet, per i quali l'unica preoccupazione dovrebbe essere quella di accettare e inoltrare i pacchetti, ognuno con indirizzo di destinazione e mittente, lasciando controllo di flusso e ordinamento al livello superiore.

## Protocollo IPv4 e Indirizzamento
Per trasferire i pacchetti si è proposto **Internet Protocol**, ossia un protocollo connectionless e inaffidabile in quanto:
* tratta ogni pacchetto in modo indipendente
* non garantisce la consegna
* non garantisce la correttezza dell'informazione trasportata
* non richiede acknowledgement da alcun host, che sia destinatario o nodi intermedi

## Pacchetti IPv4
IP definisce come i dati si spostano e come sono strutturati i dati.

Un pacchetto IP è costituito da un intestazione con le informazioni necessarie all'instradamento, e in IPv4 può essere lunga **fino a 24 byte**, con un **minimo di 20 byte**.

Contiene:
* IP mittente
* IP destinazione
* Dimensione del pacchetto

Poi vi è la componente dati che può variare in dimensione, ed è allineato a 32 bit.

L'intestazione del pacchetto contiene inoltre:
* **Version**: versione di IP usata (4 o 6)
* **Length**: lunghezza dell'intestazione misurata in parole di 32 bit
* **Type of Service**: 5 sottocampi usati per la QoS
    * **tipo di precedenza**
    * **velocità di trasmissione**
    * **affidabilità desiderata**
* **Total Length**: lunghezza complessiva del pacchetto (byte)
* **Identification**: un id univoco del pacchetto
* **Flags**: 3 bit per il controllo del protocollo e della frammentazione
    * **Reserved**: sempre settato a 0
    * **Don't Fragment**: default a 0, se settato a 1 il pacchetto non viene frammentato
    * **More Fragment**: se settato a 0 indica che il pacchetto non è frammentato
* **Fragment Offset**: scostamento di questo frammento del datagramma originale misurato in byte
* **Time to Live**: tempo di vita del pacchetto per evitare che persista nella rete in caso di non riuscita recapitazione. Inizialmente era in secondi, ora in numero di hop
* **Protocol**: protocollo di livello superiore 
* **Header Checksum**: campo usato per il controllo degli errori dell'header
* **Source/Destination IP Address**: IP mittente e destinazione
* **Options**: informazioni facoltative come informazioni sui router o sui percorsi da seguire

## Indirizzamento IP
Un **IPv4** si individua solitamente così:

<p style="text-align: center; font-weight: bold;">
    208.67.220.220
</p>

Formato da 4 numeri decimali separati da punti, ma internamente gli IP sono memorizzati in binario. Nel caso precedente perciò:

<p style="text-align: center; font-weight: bold;">
    11010000.01000011.11011100.11011100
</p>

Il numero di IPv4 esistenti è **$2^{32}$** (circa 4 miliardi e 300 milioni).
Originariamente lo schema per individuare un IPv4 era **classful**; l'indirizzo era ad autoidentificazione: per capire la classe a cui apparteneva **bastava identificare i primi 4 bit** più significativi dell'IP.

<p style="text-align: center; font-weight: bold;">
    <img src="image.png">
</p>

Si formavano **5 classi A,B,C,D,E**, e in ognuna gli IP erano divisi in due campi:
* **netid**: indirizzo che identifica la rete su cui si trova il computer
* **hostid**: indirizzo che identifica il computer all'interno della rete
Una sorta di prefisso + suffisso.

Questa soluzione però era limitante riguardo al numero di host gestibili dalle classi. Se si esaurivano gli IP di una classe bisognava passare alla classe superiore, un cambio non indolore.

Col tempo gli IPv4 si esaurivano, e ciò introdusse l'uso del NAT o mascheramento e della notazione classless. Conosciuta anche come CIDR, consiste nel mantenere l'IP diviso in due parti, ma il numero di bit di rete e host sono dinamici. Si usano maschere di sottorete di lunghezza arbitraria. Un esempio classico è la rete privata che in notazione CIDR si scrive:

<p style="text-align: center; font-weight: bold;">
    192.168.0.0/24
</p>

Il 24 indica che **i primi 24 bit identificano la rete**, mentre gli **8 rimanenti l'host**. La divisione tra rete e host non deve per forza essere fatta a multipli di 8.

Poter dedurre la rete da un IP è cruciale per l'indirizzamento IP: il prefisso infatti è usato dai router per capire verso dove inoltrare un pacchetto per arrivare a destinazione (grazie alla subnet mask e all'ANDing con l'IP esso suppone il gateway, solitamente posto al primo o ultimo IP del range).

Vi è poi una divisione tra **IP pubblici** e **privati**:
* gli **IP pubblici** si usano per interagire con Internet
* gli **IP privati** operano solo nella LAN

Tipicamente il router utilizza IP pubblic per identificare la rete su Internet, mentre al suo interno ai vari dispositivi viene assegnato un IP privato dal router o un altro dispositivo.

L'IP pubblico di una rete viene assegnato al router dagli ISP e può essere dinamico o statico:
* un IP statico non cambia dal momento in cui viene assegnato, ma rimane nel tempo e consente ad alcuni servizi online di funzionare più uniformememte.
* un IP dinamico può cambiare se necessario, come quando un dispositivo cambia rete. In genere le reti domestiche usano IP pubblici dinamici in quanto sono più economici per i Provider e possono risultare più protetti e consentire un maggior anonimato.

Tutti gli IPv4 sono pubblici se non rientrano nella categoria degli IP speciali o nel range degli IP privati. Negli IP privati non importa se lo stesso IP è assegnato anche in altre reti, poiche devono essere univoci solo nella stessa LAN.

I range di IP privati sono:
* IP privato di classe A: 10.0.0.0 - 10.255.255.255
* IP privato di classe B: 172.16.0.0 - 172.31.255.255
* IP privato di classe C: 192.168.0.0 - 192.168.255.255

## Protocollo IPv6 e Indirizzamento
