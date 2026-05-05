# Internetworking
Fin ora abbiamo assunto l'esistenza di una singola rete omogenea con stesso protocollo in ogni livello. Tuttavia ciò è irrealistico.
In seguito esamineremo i problemi che sorgono quando si collegano tra loro due o più LAN per formare una internetwork, o semplicemente internet.

## Protocolli di Controllo
Oltre a IP, Internet ha diversi protocolli di controllo al livello rete, tra cui ICMP, ARP e DHCP.

## Internet Control Message Protocol (ICMP)
ICMP è un protocollo di rete usato per inviare messaggi di errore e altre informazioni operative. Ne esistono due versioni:
* ICMP per IPv4 (ICMPv4): usato per inviare messaggi d'errore (es. un pacchetto non riesce a raggiungere la destinazione) e funzioni di diagnostica come "ping" per verificare la connessione tra due nodi.
* ICMP per IPv6 (ICMPv6): stesse funzionalità di ICMPv4 ma con supporto per ARP v6 (NDP).

## ARP - Address Resolution Protocol
Anche se ogni macchina ha uno o più IP, essi sono solo degli identificativi logici, gli indirizzi necessari alla trasmissione dei pacchetti, resi frame al livello datalink, sono gli indirizzi MAC (Ethernet, Wifi o che sia). Per esempio in Ethernet ogni scheda ha un mac a 48 bit. Ogni produttore richiede a IEEE un blocco di indirizzi in modo che nessuna coppia di schede di rete fisica usi lo stesso indirizzo.

La soluzione migliore è:
* 1 host trasmette attraverso Et.hernet un pacchetto broadcast che chiede chi sia il proprietario dell'IP 192.32.65.5
* il pacchetto arriva a tutte le macchine della Ethernet CS e ognuna controlla il proprio IP.
* Solo l'host 2 risponde inviando il proprio indirizzo Ethernet (E2).
In questo modo l'host 1 scopre che l'indirizzo IP 192.32.65.5 è assegnato all'host che ha il MAC Ethernet E2.
Questo è quanto implementa ARP e quasi tutte le macchine di internet lo usano. Esso è definito nell'RFC 826.

Per supportare cambiamenti nelle associazioni IP-MAC, ad esempio quando un host è configurato per usare un nuovo IP, le informazioni nella cache ARP dovrebbero scadere in pochi minuti. Ad esempio un modo per tenere le informazioni aggiornate e ottimizzare le prestazioni è far si che ogni host trasmetta in broadcast la propria associazione all'accensione. Ciò viene fatto effettuando una normale ricerca ARP ma chiedendo il proprio IP, così che non si ha alcuna risposta ma si inserisce una voce nella cache ARP degli altri host nella rete (gratuitous ARP).

## DHCP - Dynamic Host Configuration Protocol
ARP assume che gli host siano configurati con alcune informazioni di base, come il proprio IP. Come fanno gli host a ottenere questa informazione? Si possono configurare manualmente su ogni computer, ma è tedioso e suscettibile a errori, perciò si usa DHCP.

Con DHCP ogni rete deve avere un server DHCP responsabile della configurazione.
Quando un nodo viene avviato ha un indirizzo Ethernet o altro di livello datalink, ma non ha un IP. Analogamente ad ARP, il pc invia sulla rete una richiesta broadcast con un pacchetto DHCP DISCOVER per ottenere l'IP del DHCP server, se è presente. Se esso non si trova sulla stessa LAN, un router dovrà inoltrare tale pacchetto.

Quando il server riceve il pacchetto alloca un IP libero e lo invia all'host in un pacchetto DHCP OFFER, identificando l'host che l'ha richiesto solo tramite l'indirizzo MAC.

Può capitare che quando si assegnano IP dinamicamente da una risorsa condivisa, se un host che possiede un IP abbandona la rete senza comunicarlo, l'IP risulti ancora utilizzato presso il server, rendendolo perciò non riutilizzabile da qualcun altro. Perciò l'assegnazione di un IP può essere fissata per un periodo di tempo (leasing). Poco prima della scadenza del leasing, l'host deve chiedere al server DHCP il rinnovo dell'IP, richiesta che può essere anche rifiutata dal server.

DHCP è descritto in RFC 2131 e 2132. E' molto usato per confiruare ogni sorta di parametro oltre a fornire gli IP. E' usato anche dagli ISP per configurare i parametri dei dispositivi di accesso a Internet. Esempi sono la maschera di rete, gli IP dei default gateway, del DNS e del server di sync dell'orologio interno (time server). Esso ha sostituito quasi del tutto RARP e BOOTP che erano più limitati.

## NAT
Gli IP sono scarsi; un ISP potrebbe avere un IP /16, che consente di gestire 65.534 host, ma se i clienti aumentano oltre tale valore, sorge un problema.

Questa scarsità ha portato a tecniche per usare gli IP in modo economico. Una di queste è quella di assegnare gli IP in modo dinamico al momento della connessione e revocarli al termine della sessione, in modo che il numero di nodi gestibili siano 64.534 attivi, e non in assoluto.

Tuttavia questo non è sufficiente; per risolvere assolutamente il problema tutta internet dovrebbe passare a IPv6, transizione costosa e che sta avvendendo in modo lento. La soluzione rapida e attuabile che è stata trovata è il NAT, descritta nell'RFC 3022.

L'idea lla base di NAT è assegnare a ogni azienda o casa un singolo IP (o al massimo un piccolo numero di IP) per il traffico Internet. Dentro la rete del cliente, ogni computer riceve un IP unico, utilizzato per instradare il traffico interno alla LAN. Tuttavia quando un pacchetto sta per uscire dalla LAN viene eseguita una traduzione di indirizzo dall'IP privato a quello pubblico condiviso. Questa traslazione usa tre intervalli di IP dichiarati privati, che le aziende possono usarte come preferiscono internamente. L'unica regola è che nessun pacchetto contenente questi IP privati possa apparire su Internet. I 3 intervalli riservati sono:

    10.0.0.0 - 10.255.255.255 /8
    172.16.0.0 - 172.31.255.255 /12
    192.168.0.0 - 192.168.255.255 /16

L'apparato NAT è spesso abbinato a un rewall, inserito all'interno di un singolo apparecchio che protegge la LAN, controllando tutti i dati che entrano ed escono dalla LAN. Si può anche integrare il NAT nel router o nel modem ADSL aziendale.

Uno dei problemi di NAT riguarda la gestione delle risposte ai pacchetti. Quando i dati arrivano da fuori, indirizzati all'IP pubblico, il NAT deve decidere a chi recapitarli all'interno della LAN.

I progettisti di NAT hanno notato che la maggior parte dei pacchetti IP trasporta al suo interno TCP o UDP, entrambi contenenti una porta di destinazione. Le porte sono numeri a 16 bit che indicano dove inizia e finisce la connessione TCP.

Per risolvere il problema dell'associazione, ogni volta che un pacchetto esce dalla LAN e raggiunge il NAT, l'indirizzo sorgente interno viene sostituito dall'IP pubblico dell'azienda, e il campo della porta sorgente viene sostituito con un indice che punta alla tabella di traduzione del NAT.