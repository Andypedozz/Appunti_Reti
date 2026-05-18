Ecco il file "Sicurezza delle Reti" riorganizzato **esattamente nello stesso stile** dei capitoli precedenti, con domande suddivise per sezione e sottosezione.

---

## Sicurezza delle Reti

### Sezione 9.1 – Controllo degli Accessi
1. Perché la sicurezza delle reti è diventata un problema critico rispetto ai primi decenni delle reti di calcolatori?
2. Quali sono i principali obiettivi della sicurezza delle reti (impedire letture non autorizzate, modifiche, accesso a servizi, autenticazione, etc.)?
3. Cos'è il controllo degli accessi? Quali benefici porta l'adozione di una politica di controllo degli accessi?
4. Quali sono i quattro elementi principali del controllo degli accessi?
5. Cosa sono i diritti di accesso? Quali quattro diritti di accesso vengono menzionati?
6. Cosa si intende per modalità di accesso "osservare" e "alterare"?
7. Chi è responsabile della definizione dei diritti di accesso per una risorsa?
8. Quali tecniche e tecnologie esistono per gestire i diritti di accesso?
9. Cos'è una matrice di controllo degli accessi? Come è strutturata?
10. Cosa sono le liste di controllo degli accessi (ACL)?
11. Cosa sono le tabelle di capacità?
12. Cosa significa l'acronimo "AAA"? Quali sono i tre pilastri che lo compongono?
13. Spiega l'autenticazione, l'autorizzazione e la contabilità nel contesto del modello AAA.
14. Quali forme di autenticazione esistono (biometrici, dispositivi di sicurezza, autenticazione a più livelli)?
15. Come funziona il processo di autenticazione verso un server AAA?

### Sezione 9.2 – Crittografia
16. Quali quattro gruppi di persone hanno storicamente contribuito all'arte della crittografia?
17. Quali erano i due vincoli contrastanti nella crittografia militare tradizionale?
18. Cosa si intende per testo in chiaro (plaintext)?
19. Cosa si intende per testo cifrato (ciphertext)?
20. Descrivi il modello di cifratura a chiave simmetrica rappresentato nella figura del capitolo.
21. Qual è la differenza tra intruso passivo e intruso attivo?
22. Cosa sono la crittografia, la criptoanalisi e la crittologia?
23. Qual è la differenza tra "decifrare" (decrypt) e "decrittare" (decipher)?
24. Spiega la notazione C = EK(P) e P = DK(C). Cosa rappresenta?
25. Cos'è la crittografia simmetrica? Quale caratteristica la rende adatta per un uso diffuso?
26. Nella crittografia simmetrica, cosa deve essere mantenuto segreto? L'algoritmo deve essere segreto?
27. Cos'è la crittografia asimmetrica? Qual è la differenza fondamentale rispetto alla crittografia simmetrica?
28. A cosa servono la chiave pubblica e la chiave privata nella crittografia asimmetrica?
29. Su cosa si basano gli algoritmi a chiave pubblica (funzioni matematiche vs sostituzioni/permutazioni)?

### Sezione 9.3 – Protocolli di Autenticazione
30. Cos'è l'autenticazione nel contesto dei processi di comunicazione?
31. Qual è la differenza tra autenticazione e autorizzazione? Fai un esempio concreto.
32. Perché l'autenticazione è considerata la domanda cruciale rispetto all'autorizzazione?
33. Cos'è l'IP spoofing? Perché l'uso dell'indirizzo IP non è un metodo di autenticazione sicuro?
34. Quale problema ha l'autenticazione tramite password (es. Telnet)?
35. Cos'è un nonce in un protocollo di autenticazione? A cosa serve?
36. Descrivi il protocollo di autenticazione basato su nonce con crittografia simmetrica.
37. Descrivi il protocollo di autenticazione basato su nonce con crittografia asimmetrica.
38. Da cosa dipende la sicurezza del protocollo di autenticazione a chiave pubblica?
39. Cosa è OAuth2? Quali sono i suoi punti di forza e le sue vulnerabilità?
40. Cosa è RADIUS? Quali sono i suoi vantaggi e svantaggi?
41. Cosa è SAML? Quali sono i suoi vantaggi e svantaggi?

### Sezione 9.4 – Certificati Digitali
42. A cosa servono i certificati digitali?
43. Cosa contiene tipicamente un certificato digitale?
44. Cos'è un hash firmato in relazione a un certificato?
45. Quale ente rilascia e firma i certificati digitali?
46. Qual è il ruolo dell'Autorità di Certificazione (CA) nella gestione dei certificati?

### Domande trasversali e di confronto
47. Confronta crittografia simmetrica e asimmetrica in termini di: numero di chiavi, distribuzione delle chiavi, utilizzo tipico (riservatezza, autenticazione).
48. Confronta i protocolli di autenticazione OAuth2, RADIUS e SAML in termini di: complessità di implementazione, gestione delle identità, formato dei dati.
49. Spiega la relazione tra autenticazione, autorizzazione e contabilità nel modello AAA.
50. Perché il controllo degli accessi basato esclusivamente sull'indirizzo IP non è considerato sicuro?