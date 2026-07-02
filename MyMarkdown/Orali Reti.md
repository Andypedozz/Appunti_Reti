# Domande Orale Reti
## Orale 1
Argomento a scelta: Fibra Ottica
* Differenze tra fibra monomodale e multimodale?
	* la latenza cambia? no
	* La bandwidth cambia? Si
* Confronti i protocolli TCP e UDP dicendo scenari di utilizzo di uno e dell'altro
	*  cosa si intende con collegamento punto punto
	* In TCP deve esserci un collegamento punto punto? No, la risposta giusta è che TCP instaura una connessione e i segmenti seguono tutti lo stesso percorso
	* Il protocollo UDP invece non prevede che i segmenti seguano lo stesso percorso
Perchè è il livello rete a fare l'instradamento dei pacchetti per UDP?
(perchè le macchine sulla rete sono identificate dagli indirizzi IP, ossia gli indirizzi di livello rete, gli indirizzi di livello 4 sono solo le porte)
* Come viene instaurata la connessione in TCP? (3-way-handshake)

## Orale 2
Argomento a scelta: Server DNS
* Come funzione il CDN?
* Quali campi ha il DNS e cosa fa ognuno di essi?
* Quando effettua una richiesta di una pagina qual è il primo server DNS che viene contattato? (il DNS primario della scheda di rete)
* Come fa un client che fa una richiesta a un DNS a sapere su quale sito deve andare? (qual è l'IP del sito www.sito.com?)

* Cosa sono i protocollo a finestra scorrevole? Di che si tratta? (Go back to N / Selective Repeat)

## Orale 3
Argomento a piacere: server DNS
Stub -> DNS Primario e secondario locali (o nel router) -> DNS remoto -> Root DNS -> TLD -> e si ritorna l'IP al client
* Campi
    * IP
    * MX
    * TTL
    * Pointer Reverse: fornisco IP e mi dà il Dominio
    * campo AA
* Differenza tra DoS e DDoS?
    In un attacco DoS effettuiamo un Denial of Service da un singolo Nodo.
* Differenza tra HTTP e HTTPS?

## Orale 4
Argomento a piacere: congestione
* Cos è un firewall? IDS e IPS
* Cos è il Distance Vector routing?
* Cos è la DMZ? Zona demilitarizzata, una zona tra un firewall esterno di fronte a internet, e un firewall interno di fronte alla LAN.

## Orale 5
Argomento a piacere: sicurezza delle reti (crittografia)
* si può usare la crittografia asimmetrica per implementare la firma digitale?
* cos è il DHCP?
* come funziona il 3 way handshake?
* invece come si rilascia una connessione? (disconnessione simmetrica e asimmetrica)

## Orale 6
Argomento a piacere: MAC e IP
* Come funziona il WiFi, che frequenze usa? (2,4 - 5 - 6 GHz)
* Differenza tra WiFi e Wireless?

## Orale 7
Argomento a piacere: tecniche di framing
* IPv4
* Subnetting Classful e classless con CIDR
* Standard WiFi
* Cos è il problema del terminale nascosto?
    Succede quando abbiamo tra due dispositivi due sender e un receiver in WiFi


