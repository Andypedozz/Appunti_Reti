## Internetworking

### Sezione 6.1 – Protocolli di Controllo
1. Quali sono i principali protocolli di controllo utilizzati nel livello di rete oltre a IP?
2. Perché i protocolli di controllo vengono esaminati nella versione IPv4?
3. Qual è l'equivalente di ARP per IPv6?

#### Sottosezione 6.1.1 – Internet Control Message Protocol (ICMP)
4. A cosa serve ICMP (Internet Control Message Protocol)?
5. Quali sono le due versioni principali di ICMP e quali sono le loro differenze?
6. Quale comando diagnostico utilizza ICMP per verificare la connettività tra due dispositivi?
7. Quale funzionalità aggiuntiva offre ICMPv6 rispetto a ICMPv4?

#### Sottosezione 6.1.2 – ARP – Address Resolution Protocol
8. Perché gli indirizzi IP non possono essere utilizzati direttamente dalle schede di rete? Che tipo di indirizzi usano le schede Ethernet?
9. Quanti bit ha un indirizzo Ethernet e come viene garantita l'univocità?
10. Spiega il funzionamento di base di ARP. Cosa fa un host quando vuole conoscere l'indirizzo Ethernet corrispondente a un indirizzo IP?
11. Cos'è una trasmissione broadcast nel contesto di ARP?
12. A cosa serve la cache ARP? Perché le informazioni nella cache dovrebbero scadere dopo pochi minuti?
13. Cos'è il gratuitous ARP (ARP gratuito)? A cosa serve e quando viene eseguito?
14. Cosa significa se un host riceve una risposta a un gratuitous ARP?
15. In una rete con router, come fa un host a inviare un pacchetto a un host su una rete diversa?
16. Cos'è il default gateway? Quale indirizzo gli viene tipicamente assegnato per convenzione?
17. In cosa consiste il proxy ARP? In quali situazioni viene utilizzato?
18. Perché in una configurazione con proxy ARP l'host di destinazione non può rispondere direttamente alla richiesta ARP?

#### Sottosezione 6.1.3 – DHCP – Dynamic Host Configuration Protocol
19. Quale problema risolve DHCP (Dynamic Host Configuration Protocol)?
20. Quali informazioni di base deve avere un host per funzionare in rete? Perché la configurazione manuale è problematica?
21. Spiega il processo di configurazione di un host tramite DHCP partendo dall'avvio.
22. Cosa sono i pacchetti DHCP DISCOVER e DHCP OFFER?
23. Come identifica il server DHCP un host che ancora non ha un indirizzo IP?
24. Cos'è il leasing in DHCP? Come funziona il rinnovo?
25. Perché il leasing è necessario? Cosa accadrebbe senza questa tecnica?
26. Quali parametri aggiuntivi può configurare DHCP oltre all'indirizzo IP?
27. In quali contesti viene utilizzato DHCP (reti domestiche, aziendali, ISP)?
28. Quali protocolli precedenti sono stati quasi completamente sostituiti da DHCP? Perché?

### Sezione 6.2 – NAT – Network Address Translation
29. Quale problema principale affronta il NAT (Network Address Translation)?
30. Perché la scarsità di indirizzi IPv4 è un problema concreto e non solo teorico?
31. Qual è la soluzione a lungo termine al problema dell'esaurimento degli indirizzi IPv4? Perché la transizione è lenta?
32. Qual è l'idea di base del NAT? Quanti indirizzi IP pubblici assegna tipicamente a un'azienda o casa?
33. Quali sono i tre intervalli di indirizzi IP privati riservati per l'uso interno? Quanti host supporta ciascuno?
34. Perché i pacchetti contenenti indirizzi privati non possono apparire su Internet?
35. Quale intervallo di indirizzi privati è la scelta più comune nelle aziende? Perché?
36. Descrivi il percorso di un pacchetto che esce da una rete con NAT: cosa succede quando attraversa l'apparato NAT?
37. Con quali altri dispositivi viene spesso abbinato l'apparato NAT?
38. Qual è il problema principale nella gestione delle risposte ai pacchetti in NAT?
39. Perché i progettisti di NAT hanno scelto di utilizzare le porte TCP/UDP invece di campi dell'intestazione IP?
40. Cosa sono le porte TCP? Quanti bit hanno e a cosa servono?
41. Spiega nel dettaglio come il NAT tiene traccia delle associazioni tra indirizzi interni ed esterni usando le porte sorgente.
42. Cosa contiene la tabella di traduzione del NAT?
43. Perché il NAT deve ricalcolare i checksum delle intestazioni IP e TCP?
44. Come fa il NAT a gestire un pacchetto di risposta che arriva dall'ISP?

### Obiezioni e Limiti del NAT
45. Perché il NAT viola il modello gerarchico di IP?
46. In che modo il NAT rompe il modello di connettività end-to-end di Internet?
47. Perché si dice che il NAT trasforma Internet da rete non orientata alla connessione a rete orientata alla connessione? Quale vulnerabilità introduce?
48. Quale principio della stratificazione dei protocolli viola il NAT? Perché?
49. Perché il NAT non supporta bene i protocolli non TCP/UDP? Fai un esempio di protocollo problematico.
50. Quale limite deriva dalla dimensione del campo della porta sorgente TCP (16 bit) in termini di numero massimo di macchine associabili?
51. Qual è l'RFC che discute i problemi legati al NAT?
52. Nonostante i suoi limiti, perché il NAT è ancora ampiamente utilizzato?
53. Con quale altra funzionalità viene spesso combinato il NAT nelle reti domestiche e nelle piccole aziende?
54. Secondo il testo, il NAT scomparirà completamente con l'adozione diffusa di IPv6? Perché?

### Domande trasversali e di confronto
55. Confronta ARP e DHCP in termini di: scopo, tipo di trasmissione utilizzata, informazioni fornite.
56. Spiega la differenza tra ARP, gratuitous ARP e proxy ARP. In quali scenari viene usato ciascuno?
57. Confronta i tre intervalli di indirizzi privati (Classe A, B, C) in termini di numero di host supportati e uso tipico.
58. Quali sono le differenze principali tra ICMPv4 e ICMPv6?
59. Perché il NAT è considerato una soluzione "rapida" e "transitoria" mentre IPv6 è la soluzione "definitiva"?