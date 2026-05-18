## Livello Datalink

### Sezione 3.1 – Data Link Control
1. Quali sono i cinque servizi principali offerti dal livello collegamento?
2. Cosa si intende con il termine "framing" e a cosa serve?
3. Perché il servizio di "indirizzamento" è essenziale nei canali condivisi?
4. Che differenza c'è tra un collegamento dedicato e un canale condiviso?

### Sezione 3.2 – LAN Cablate: Ethernet
5. In che anno e da chi è stato sviluppato il progetto originale di Ethernet?
6. Quale ente ha standardizzato le reti Ethernet e con quale progetto?
7. In quali due sottolivelli viene suddiviso il livello Data Link nello standard IEEE 802?
8. Che ruolo ha il sottolivello LLC (Logical Link Control)?
9. Cosa definisce il sottolivello MAC (Medium Access Control)?
10. Elenca i 7 campi di un frame Ethernet standard e la loro dimensione in byte.
11. A cosa serve il campo "Preambolo" e di quanti byte è composto?
12. Cosa indica il campo "Lunghezza o tipo" in un frame Ethernet?
13. Qual è la dimensione minima e massima del campo dati in un frame Ethernet?
14. Cosa significa l'acronimo CSMA/CD e a cosa serve?
15. Perché anche con CSMA possono verificarsi delle collisioni?
16. A cosa corrisponde il "tempo di vulnerabilità" nel protocollo CSMA?
17. Qual è la lunghezza massima di una rete Ethernet standard a 10 Mbps e perché?
18. Quali erano i quattro obiettivi principali dello standard Fast Ethernet (802.3u)?
19. Che differenza c'è tra una connessione half-duplex e full-duplex in Ethernet?
20. Perché nelle reti Gigabit Ethernet half-duplex non è praticamente utilizzabile?
21. Cosa determina la lunghezza massima del cavo nelle reti full-duplex?
22. Spiega il significato dei nomi: 10Base5, 10Base2, 10BaseT, 100BaseT.
23. Quale topologia viene utilizzata a partire da 10BaseT?
24. Cosa sono un bridge e uno switch? Quale vantaggio portano in termini di domini di collisione?
25. Che tipo di codifica viene usata in Fast Ethernet (100BaseT) e perché non si usa più Manchester?

### Sezione 3.3 – LAN Wireless: IEEE 802.11 e Bluetooth
26. Quali sono le due bande di frequenza più comuni per il Wi-Fi?
27. Quale standard Wi-Fi è stato il primo a funzionare su entrambe le bande 2,4 e 5 GHz?
28. Quale standard Wi-Fi è il più recente tra quelli elencati e quale velocità massima dichiara?
29. Qual è il nuovo schema di denominazione della Wi-Fi Alliance (es. Wi-Fi 4, 5, 6)?
30. Quali sono le due modalità operative del Wi-Fi (Ad-hoc vs infrastruttura)?
31. Cosa sono un BSS (Basic Service Set) e un ESS (Extended Service Set)?
32. Che differenza c'è tra DCF (Distributed Coordination Function) e PCF (Point Coordination Function) nel MAC Wi-Fi?
33. Perché le reti wireless usano CSMA/CA invece di CSMA/CD?
34. Spiega a cosa serve e come funziona il meccanismo RTS/CTS (Request to Send / Clear to Send).
35. Cosa significa l'acronimo FHSS e a cosa serve nel Bluetooth?
36. Quanti dispositivi attivi possono essere collegati contemporaneamente in una piconet Bluetooth?
37. Che differenza c'è tra una Piconet e una Scatternet?
38. Quali sono i due tipi di collegamento supportati da Bluetooth (SCO e ACL)? A cosa servono principalmente?

### Sezione 3.4 – LAB (Comandi di rete)
39. A cosa serve il comando `ipconfig`?
40. Come si utilizza `ping` per verificare la connettività di rete?
41. Che differenza c'è tra `tracert` e `pathping`?
42. Cosa mostra il comando `netstat`?
43. A cosa serve il comando `arp` e cosa fa il protocollo ARP?

### Domande trasversali e di confronto
44. Quali sono le principali differenze nella gestione delle collisioni tra Ethernet cablata (CSMA/CD) e Wi-Fi (CSMA/CA)?
45. Confronta le velocità e i mezzi trasmissivi di Ethernet standard, Fast Ethernet e Gigabit Ethernet.
46. Quali problematiche specifiche (interferenza, potenza, sicurezza) riguardano le reti wireless e non quelle cablate?
47. Perché la codifica Manchester non è adatta per Fast Ethernet a 100 Mbps su doppino?