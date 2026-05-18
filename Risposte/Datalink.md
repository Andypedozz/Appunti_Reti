### Sezione 3.1 – Data Link Control

1.  **Quali sono i cinque servizi principali offerti dal livello collegamento?**
    I cinque servizi sono: Framing, Accesso al canale, Indirizzamento, Controllo di flusso, Gestione degli errori.

2.  **Cosa si intende con il termine "framing" e a cosa serve?**
    Il framing è il servizio che incapsula le informazioni provenienti dai livelli superiori, inserendo dati di testa (header) e coda (tail) che servono per gli altri servizi del livello.

3.  **Perché il servizio di "indirizzamento" è essenziale nei canali condivisi?**
    Perché su un collegamento condiviso è necessario capire quale nodo comunica con un altro nodo. L'identificativo è di tipo hardware.

4.  **Che differenza c'è tra un collegamento dedicato e un canale condiviso?**
    In un collegamento dedicato i nodi hanno un collegamento esclusivo, mentre in un canale condiviso (es. telefoni cellulari o rete LAN wireless) più nodi condividono lo stesso mezzo trasmissivo.

### Sezione 3.2 – LAN Cablate: Ethernet

5.  **In che anno e da chi è stato sviluppato il progetto originale di Ethernet?**
    È stato sviluppato da un progetto di ricerca del 1973-1976 alla Xerox di Palo Alto, da un’idea di Robert Metcalfe.

6.  **Quale ente ha standardizzato le reti Ethernet e con quale progetto?**
    La IEEE (Institute of Electrical and Electronics Engineers) con il progetto IEEE 802.

7.  **In quali due sottolivelli viene suddiviso il livello Data Link nello standard IEEE 802?**
    Viene suddiviso in Logical Link Control (LLC) e Medium Access Control (MAC).

8.  **Che ruolo ha il sottolivello LLC (Logical Link Control)?**
    Implementa le funzioni di controllo degli errori, controllo di flusso e parte delle funzioni di framing. È indipendente dal tipo di rete fisica utilizzata.

9.  **Cosa definisce il sottolivello MAC (Medium Access Control)?**
    Definisce il metodo di accesso al mezzo fisico ed è legato al particolare hardware usato.

10. **Elenca i 7 campi di un frame Ethernet standard e la loro dimensione in byte.**
    - Preambolo: 7 bytes
    - Delimitatore: 1 byte
    - Indirizzo Destinatario: 6 bytes
    - Indirizzo Mittente: 6 bytes
    - Lunghezza o tipo: 2 bytes
    - Dati: da 46 a 1500 bytes
    - CRC: 4 bytes

11. **A cosa serve il campo "Preambolo" e di quanti byte è composto?**
    Serve per la sincronizzazione tra mittente e destinatario. È composto da 7 byte.

12. **Cosa indica il campo "Lunghezza o tipo" in un frame Ethernet?**
    Viene usato per segnalare il protocollo di livello superiore trasportato nel campo dati (Ethernet legacy) oppure il numero di byte del campo dati (standard IEEE 802).

13. **Qual è la dimensione minima e massima del campo dati in un frame Ethernet?**
    Minima 46 byte, massima 1500 byte.

14. **Cosa significa l'acronimo CSMA/CD e a cosa serve?**
    Carrier Sense Multiple Access with Collision Detection. È il metodo di accesso al mezzo previsto da Ethernet standard.

15. **Perché anche con CSMA possono verificarsi delle collisioni?**
    A causa del ritardo di propagazione del segnale sul mezzo.

16. **A cosa corrisponde il "tempo di vulnerabilità" nel protocollo CSMA?**
    Corrisponde al tempo di propagazione (Tp), cioè il tempo necessario al segnale per propagarsi da un capo all’altro del mezzo.

17. **Qual è la lunghezza massima di una rete Ethernet standard a 10 Mbps e perché?**
    2500 metri, a causa del tempo di propagazione e del tempo necessario a spedire un segnale di jamming.

18. **Quali erano i quattro obiettivi principali dello standard Fast Ethernet (802.3u)?**
    1. Aumentare la velocità a 100 Mbps.
    2. Mantenere la compatibilità con Ethernet standard.
    3. Mantenere lo stesso indirizzamento a 48 bit.
    4. Mantenere stesso formato e stesse dimensioni dei frame.

19. **Che differenza c'è tra una connessione half-duplex e full-duplex in Ethernet?**
    - Half-duplex: i nodi possono ricevere o spedire, ma non contemporaneamente (serve CSMA/CD).
    - Full-duplex: i nodi possono trasmettere e ricevere contemporaneamente (non servono metodi di accesso).

20. **Perché nelle reti Gigabit Ethernet half-duplex non è praticamente utilizzabile?**
    Perché alle alte velocità le collisioni vengono rilevate in un tempo più breve, accorciando la lunghezza massima della rete a circa 25 metri, rendendola di fatto inutilizzabile.

21. **Cosa determina la lunghezza massima del cavo nelle reti full-duplex?**
    L’attenuazione del segnale nel cavo.

22. **Spiega il significato dei nomi: 10Base5, 10Base2, 10BaseT, 100BaseT.**
    - Il numero iniziale: velocità massima (Mbps).
    - "Base": baseband, dati codificati con Manchester.
    - Sigla finale: caratteristiche fisiche (5→500m, 2→200m, T→Twisted pair, F→Fibra).

23. **Quale topologia viene utilizzata a partire da 10BaseT?**
    Topologia a stella.

24. **Cosa sono un bridge e uno switch? Quale vantaggio portano in termini di domini di collisione?**
    - Bridge: divide la rete in parti indipendenti, riducendo le collisioni.
    - Switch: dispositivo con un solo nodo per porta, con buffer dedicati. Permette comunicazioni full-duplex ed elimina le collisioni.

25. **Che tipo di codifica viene usata in Fast Ethernet (100BaseT) e perché non si usa più Manchester?**
    Si usa MLT-3 e 4B/5B. Manchester non viene usata perché richiederebbe una larghezza di banda troppo elevata rispetto a quella possibile sui cavi cat5e.

### Sezione 3.3 – LAN Wireless: IEEE 802.11 e Bluetooth

26. **Quali sono le due bande di frequenza più comuni per il Wi-Fi?**
    2,4 GHz e 5 GHz.

27. **Quale standard Wi-Fi è stato il primo a funzionare su entrambe le bande 2,4 e 5 GHz?**
    IEEE 802.11n (introdotto nel 2009).

28. **Quale standard Wi-Fi è il più recente tra quelli elencati e quale velocità massima dichiara?**
    IEEE 802.11ax (rilasciato nel 2019), velocità massima dichiarata di 10 Gbps.

29. **Qual è il nuovo schema di denominazione della Wi-Fi Alliance?**
    Aggiungere un numero alla parola "Wi-Fi" che ne individua la generazione (es. Wi-Fi 1, Wi-Fi 2, ecc.).

30. **Quali sono le due modalità operative del Wi-Fi?**
    Ad-hoc (peer-to-peer) e a infrastruttura (con Access Point).

31. **Cosa sono un BSS (Basic Service Set) e un ESS (Extended Service Set)?**
    - BSS: gruppo di stazioni che comunicano sullo stesso canale fisico.
    - ESS: insieme di tutti i BSS connessi.

32. **Che differenza c'è tra DCF e PCF nel MAC Wi-Fi?**
    - DCF (Distributed Coordination Function): usa CSMA/CA, accesso distribuito, servizio asincrono.
    - PCF (Point Coordination Function): accesso centralizzato (polling), senza contese, con finestre temporali periodiche.

33. **Perché le reti wireless usano CSMA/CA invece di CSMA/CD?**
    Perché nelle reti wireless non è possibile implementare CSMA/CD (non si può rilevare la collisione mentre si trasmette a causa dell’elevata differenza di potenza tra segnale trasmesso e ricevuto).

34. **Spiega a cosa serve e come funziona il meccanismo RTS/CTS.**
    Serve a ridurre le collisioni dovute a nodi nascosti. Funziona così:
    - Mittente invia RTS (Request to Send) e imposta un NAV.
    - Ricevente risponde con CTS (Clear to Send) e imposta un NAV.
    - Mittente invia i dati.
    - Ricevente invia ACK.

35. **Cosa significa l'acronimo FHSS e a cosa serve nel Bluetooth?**
    Frequency-Hopping Spread Spectrum. Serve a ridurre le interferenze saltando rapidamente da un canale all’altro durante la trasmissione.

36. **Quanti dispositivi attivi possono essere collegati contemporaneamente in una piconet Bluetooth?**
    Massimo 7 nodi slave attivi più 1 nodo master (totale 8 nodi attivi).

37. **Che differenza c'è tra una Piconet e una Scatternet?**
    - Piconet: rete elementare Bluetooth con un master e fino a 7 slave attivi.
    - Scatternet: insieme di più piconet interconnesse tramite nodi bridge.

38. **Quali sono i due tipi di collegamento supportati da Bluetooth?**
    - SCO (Synchronous Connection Oriented): per voce, basso ritardo, 64 kbps.
    - ACL (Asynchronous Connectionless): per dati a pacchetto, con ARQ.

### Sezione 3.4 – LAB (Comandi di rete)

39. **A cosa serve il comando `ipconfig`?**
    Mostra la configurazione corrente della rete TCP/IP (indirizzo IP, subnet mask, gateway predefinito, DNS).

40. **Come si utilizza `ping` per verificare la connettività di rete?**
    Si può pingare l’indirizzo di loopback, l’IP locale, il gateway predefinito o un host remoto per verificare la connettività a livello IP.

41. **Che differenza c'è tra `tracert` e `pathping`?**
    - `tracert`: determina il percorso (router) da un host a un altro.
    - `pathping`: combina `ping` e `tracert`, fornendo anche latenza e perdita di pacchetti per ogni hop.

42. **Cosa mostra il comando `netstat`?**
    Mostra le statistiche del protocollo e le connessioni TCP/IP attuali.

43. **A cosa serve il comando `arp`?**
    Visualizza e modifica le voci della tabella ARP (associazione tra indirizzi IP e indirizzi MAC).

### Domande trasversali e di confronto

44. **Quali sono le principali differenze nella gestione delle collisioni tra Ethernet cablata (CSMA/CD) e Wi-Fi (CSMA/CA)?**
    - CSMA/CD: rileva le collisioni dopo che sono avvenute (usato su cavo).
    - CSMA/CA: evita le collisioni prima che avvengano (usato su wireless).

45. **Confronta le velocità e i mezzi trasmissivi di Ethernet standard, Fast Ethernet e Gigabit Ethernet.**
    - Ethernet standard: 10 Mbps, cavo coassiale o doppino.
    - Fast Ethernet: 100 Mbps, doppino (100BaseT) o fibra (100BaseS).
    - Gigabit Ethernet: 1000 Mbps, fibra (1000BaseLX/SX) o 4 cavi in rame (1000BaseTX).

46. **Quali problematiche specifiche riguardano le reti wireless e non quelle cablate?**
    - Gestione dell’energia (batteria).
    - Difficoltà a direzionare la connessione.
    - Interferenze da altri dispositivi.
    - Sicurezza (ascolto fraudolento).
    - Limitazioni di potenza per legge.

47. **Perché la codifica Manchester non è adatta per Fast Ethernet a 100 Mbps su doppino?**
    Perché richiederebbe una larghezza di banda troppo elevata rispetto a quella possibile sui cavi cat5e, con i quali è nata Fast Ethernet.