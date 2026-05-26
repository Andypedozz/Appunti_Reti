# Glossario Reti di Calcolatori

## Introduzione

* Grid: sistema di calcolo distribuito in cui più computer, spesso geograficamente distanti, collaborano per eseguire elaborazioni molto complesse condividendo risorse e potenza di calcolo.

* Cloud: modello che permette di utilizzare risorse informatiche come server, storage e applicazioni tramite Internet senza possedere fisicamente l’infrastruttura.

* VOIP: (Voice Over IP) tecnologia che consente la trasmissione della voce tramite reti IP invece delle tradizionali linee telefoniche.

* Rete broadcast: rete in cui tutti i dispositivi condividono lo stesso mezzo trasmissivo e ogni messaggio può essere ricevuto da tutti i nodi.

* Rete punto-punto: rete composta da collegamenti diretti tra coppie di dispositivi in cui i dati attraversano nodi intermedi per raggiungere la destinazione.

* PAN: (Personal Area Network) rete personale a corto raggio che collega dispositivi vicini come smartphone, smartwatch e cuffie Bluetooth.

* LAN: (Local Area Network) rete locale utilizzata in ambienti limitati come abitazioni, scuole o uffici, caratterizzata da elevate velocità di trasmissione.

* MAN: (Metropolitan Area Network) rete che copre un’area urbana o metropolitana collegando più LAN.

* WAN: (Wide Area Network) rete geografica estesa che collega dispositivi e reti molto distanti tra loro; Internet è la WAN più grande.

* Protocollo: insieme di regole e convenzioni che definiscono il formato e le modalità della comunicazione tra dispositivi in rete.

---

## Livello Fisico

* Segnale Analogico: segnale continuo nel tempo che può assumere infiniti valori di ampiezza.

* Segnale Digitale: segnale discreto che assume un numero limitato di valori, generalmente 0 e 1.

* Ampiezza: valore massimo raggiunto da un segnale rispetto al livello di riferimento; determina l’intensità del segnale.

* Frequenza: numero di oscillazioni complete di un segnale in un secondo; si misura in Hertz (Hz).

* Fase: posizione di un’onda rispetto a un punto di riferimento temporale.

* Multiplexing: tecnica che permette di trasmettere più segnali contemporaneamente sullo stesso mezzo fisico.

* TDM: (Time Division Multiplexing) metodo di multiplexing che divide il tempo in intervalli assegnati ai vari segnali.

* FDM: (Frequency Division Multiplexing) metodo di multiplexing che assegna a ogni segnale una diversa banda di frequenza.

* Bandwidth: larghezza di banda, cioè quantità massima di dati trasmissibili in un intervallo di tempo; si misura in bit per secondo.

* Throughput: velocità reale di trasferimento dei dati ottenuta in una comunicazione, spesso inferiore alla bandwidth teorica.

* Latenza: tempo necessario affinché un pacchetto raggiunga la destinazione.

* Jitter: variazione della latenza nella trasmissione dei pacchetti; è particolarmente critico nelle comunicazioni audio e video.

* Bandwidth x Latenza: prodotto tra larghezza di banda e latenza che rappresenta la quantità massima di dati presenti contemporaneamente nella rete.

* Doppino di Rame: cavo formato da due fili di rame intrecciati usato nelle reti telefoniche ed Ethernet.

* Fibra monomodale: fibra ottica con nucleo molto sottile che permette alla luce di propagarsi lungo un unico percorso; usata per lunghe distanze.

* Fibra multimodale: fibra ottica con nucleo più ampio che consente più percorsi della luce; usata per distanze minori.

* RJ11: connettore utilizzato principalmente nelle linee telefoniche.

* RJ45: connettore comunemente utilizzato nei cavi Ethernet.

* 8P8C: tipo tecnico di connettore con 8 posizioni e 8 contatti, spesso chiamato impropriamente RJ45.

* Hub: dispositivo di rete che collega più host inoltrando i dati a tutte le porte senza distinzione.

---

## Livello Datalink

* LLC: (Logical Link Control) sottolivello del datalink che gestisce il controllo degli errori e il flusso dei dati.

* MAC: (Media Access Control) sottolivello che gestisce l’accesso al mezzo trasmissivo e identifica i dispositivi tramite indirizzi MAC.

* Ethernet: tecnologia di rete LAN basata su frame e indirizzi MAC, oggi standard più diffuso nelle reti locali.

* CSMA/CD: (Carrier Sense Multiple Access with Collision Detection) metodo usato nelle reti Ethernet tradizionali per rilevare e gestire collisioni.

* CSMA/CA: (Carrier Sense Multiple Access with Collision Avoidance) metodo usato nelle reti WiFi per evitare collisioni.

* VLAN: (Virtual LAN) suddivisione logica di una rete fisica in più reti isolate tra loro.

* PicoNet: piccola rete Bluetooth composta da un dispositivo master e fino a sette slave attivi.

* ScatterNet: interconnessione di più PicoNet Bluetooth tramite dispositivi condivisi.

* Bluetooth: tecnologia wireless a corto raggio usata per collegare dispositivi personali.

* WiFi: tecnologia wireless basata sugli standard IEEE 802.11 che consente la connessione a reti LAN senza cavi.

* Bridge: dispositivo che collega segmenti di rete filtrando i frame in base agli indirizzi MAC.

* Switch: dispositivo di rete che inoltra i frame solo verso la porta del destinatario usando una tabella MAC.

---

## Livello Rete

* IP: (Internet Protocol) protocollo che si occupa dell’indirizzamento e dell’instradamento dei pacchetti nelle reti.

* Router: dispositivo che collega reti differenti instradando i pacchetti IP verso la destinazione corretta.

* ARP: (Address Resolution Protocol) protocollo che traduce un indirizzo IP in un indirizzo MAC.

* DHCP: (Dynamic Host Configuration Protocol) protocollo che assegna automaticamente indirizzi IP e parametri di rete ai dispositivi.

* ICMP: (Internet Control Message Protocol) protocollo usato per messaggi di controllo e diagnostica, ad esempio dal comando ping.

---

## Livello Trasporto

* Segmento: unità di dati del livello trasporto, soprattutto nel protocollo TCP.

* Primitiva: operazione o servizio offerto da un livello di rete al livello superiore, come CONNECT o SEND.

* Socket: interfaccia software identificata da indirizzo IP e numero di porta che permette la comunicazione tra processi.

* UDP: (User Datagram Protocol) protocollo di trasporto non orientato alla connessione, veloce ma senza garanzia di consegna.

* TCP: (Transmission Control Protocol) protocollo affidabile orientato alla connessione che garantisce ordine e correttezza dei dati.

* Multiplexing: tecnica che consente a più applicazioni di condividere la stessa connessione di rete tramite l’uso delle porte.

* Porte: numeri identificativi associati ai processi di rete per distinguere i diversi servizi su uno stesso host.

* Sliding Window: meccanismo di controllo del flusso usato da TCP che consente l’invio di più segmenti prima di ricevere conferma.

---

## Livello Applicazione
* HTTP: (HyperText Transfer Protocol) protocollo usato per il trasferimento delle pagine web.

* IMAP: (Internet Message Access Protocol) protocollo per la gestione delle email mantenute sul server.

* POP3: (Post Office Protocol v3) protocollo che scarica le email dal server al client locale.

* SMTP: (Simple Mail Transfer Protocol) protocollo utilizzato per l’invio delle email.

* FTP: (File Transfer Protocol) protocollo per il trasferimento di file tra host in rete.

* World Wide Web: sistema di documenti ipertestuali accessibili tramite Internet e browser web.

* CDN: (Content Delivery Network) rete di server distribuiti che consegna contenuti agli utenti dal nodo più vicino per migliorare velocità e prestazioni.

---

## Sicurezza

* Firewall: sistema hardware o software che controlla e filtra il traffico di rete secondo regole di sicurezza.

* IDS: (Intrusion Detection System) sistema che rileva attività sospette o attacchi analizzando il traffico di rete.

* IPS: (Intrusion Prevention System) sistema che rileva e blocca automaticamente attività malevole.

* Crittografia: tecnica che rende un messaggio leggibile solo ai soggetti autorizzati tramite algoritmi e chiavi.

* Crittografia simmetrica: metodo di cifratura che usa la stessa chiave sia per cifrare sia per decifrare i dati.

* Crittografia asimmetrica: metodo che utilizza una coppia di chiavi, una pubblica per cifrare e una privata per decifrare.

* Firma Digitale: meccanismo crittografico che garantisce autenticità, integrità e non ripudio di un documento digitale.

* DMZ: (DeMilitarized Zone) area di rete separata dalla LAN interna in cui vengono collocati server accessibili dall’esterno per aumentare la sicurezza.
