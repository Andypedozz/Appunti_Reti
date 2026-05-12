# Brainstorming Reti di Calcolatori

## Livello 1
Segnali e dati analogici e digitali
    * la differenza tra segneali e dati analogici e digitali sta nel fatto che un segnale o dato analogico è una forma d'onda continua nei valori e nel tempo, mentre un segnale o dato digitale viene campionato con una certa frequenza di campionamento, perciò vi è una discretizzazione nel tempo e nell'insieme di valori che esso può assumere in un certo intervallo.
Topologie delle reti:
    Le principali topologie che esistono nelle reti sono:
        * a bus: un canale condiviso consente a diversi nodi di connettersi simultaneamente.
        * a stella: vari nodi sono connessi tra di loro attraverso un nodo centrale che funge da punto di incontro tra i nodi (un hub, un bridge, uno switch, o un router)
        * ad anello: vari nodi sono connessi tra di loro indipendentemente ma ogni nodo può comunicare direttamente solamente con altri due nodi
        * a mesh: vari nodi sono connessi tra di loro indipendentemente e ogni nodo può avere molteplici connnessioni fino a una massimo in cui ogni nodo comunica con tutti gli altri nodi
Mezzi di trasmissione guidati
    * Doppini di rame
    * cavo coassiale
    * fibra ottica
    * fibra monomodale
    * fibra multimodale
Mezzi di trasmissione wireless
    * reti satellitari

## Livello 2
Livello 2 nello stack TCP/IP
Sottolivello 
    * svolge parte delle funzioni di framing e implementa le funzioni di controllo del flusso, controllo degli errori, sincronizzazione
Sottolivello MAC
    * svolge la maggior parte del framing e implementa il controllo dell'accesso al mezzo (CSMA/CD e CSMA/CA) e identifica i nodi a livello hardware tramite indirizzi MAC
Indirizzi MAC
    * Struttura: formati da 48 bit
    * Tipologie (globally unique, locally administered)
Ethernet
    * intestazione frame ethernet
        * Preambolo
        * Delimitatore
        * Lunghezza o tipo
        * MAC mittente
        * MAC destinatario
        * Dati
        * CRC
    * Ethernet Standard
    * Fast Ethernet
    * Gigabit Ethernet
CSMA/CD
    * Carrier Sense Multiple Access Collision Detection
    * passi algoritmo
CSMA/CA
    * Carrier Sense Multiple Access Collision Avoidance
    * Passi algoritmo
Wifi
    * intestazione frame wifi
    * IEEE 802.11
    * Wifi 1-6
    * 2,4Ghz - 5Ghz - 6Ghz
    * ad hoc (infrastruttuca, access point) oppure P2P
Bluetooth
    * PAN Wireless
    * numero massimo di dispositivi attivi e parked
    * piconet e scatternet
    * master slave
    * frequency hop
Hub, Bridge e Switch

## Tecnologie di accesso
ADSL
VDSL
LTE, 4G, 5G
Fixed Wireless Access

## Livello 3
Reti datagram
Internet Protocol (IP)
Indirizzi IPv4
Sistema Classful e classless con CIDR e subnet mask dinamica
Differenza tra IP pubblici e privati
IPv6
Indirizzi IPv6
    * Struttura
    * tipologie
Routing
Distance Vector
    * Count to infinity
    * Split horizon
Link State
    * OSPF
Congestione
    * Controllo reattivo
    * Controllo proattivo

## Internetworking
ARP
DHCP
ICMP
NAT

## Livello 4
Entità di trasporto
Primitive di trasporto
Socket di Berkeley
Instaurazione di una connessione
Rilascio della connessione
UDP
TCP
3 way handshake
Orologio di Tomlison

## Livello 5
email
SMTP
IMAP
POP3
Struttura indirizzi applicazione
URL
HTTP
CDN

## Sicurezza
Controllo degli accessi
XSS
SQL Injection
CSRF
ClickJacking
Crittografia simmetrica e asimmetrica
Firma digitale
Certificati
Firewall
DMZ