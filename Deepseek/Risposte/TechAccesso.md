## Tecnologie di Accesso – Risposte

### Sezione 4.1 – Local loop e Vecchie Tecnologie

1. **Quale sarà il numero totale di utenti Internet nel mondo entro il 2023 e quale percentuale della popolazione mondiale rappresenterà?**
   - 5,3 miliardi di utenti, pari al 66% della popolazione mondiale prevista.

2. **Cosa sono le connessioni M2M e perché sono importanti per la crescita dei dispositivi connessi?**
   - Sono connessioni machine-to-machine (es. contatori intelligenti, videosorveglianza, monitoraggio sanitario). Entro il 2023 rappresenteranno la metà dei dispositivi e connessioni totali, crescendo di 2,5 volte (fino a 14,7 miliardi).

3. **Perché lo streaming video Ultra-High-Definition (UHD/4K) ha un effetto moltiplicatore sul traffico di rete?**
   - Perché richiede un bit rate di 15-18 Mbps, più del doppio dell'HD e 9 volte superiore allo standard definition (SD).

4. **Quanti hotspot Wi-Fi pubblici erano presenti nel 2018 e quanti se ne prevedono entro il 2023?**
   - 169 milioni nel 2018, quasi 628 milioni entro il 2023 (quattro volte di più).

5. **Cosa significa l'acronimo PSTN e qual era la sua caratteristica principale dal punto di vista della commutazione?**
   - PSTN = Public Switched Telephone Network (rete telefonica pubblica commutata). Era tradizionalmente una rete a commutazione di circuito.

6. **Descrivi brevemente l'evoluzione storica della rete telefonica, dal primo ufficio di commutazione di Bell fino alla gerarchia a cinque livelli.**
   - Inizialmente telefoni venduti in coppia con cavi direttamente collegati. Nel 1878 Bell aprì il primo ufficio di commutazione a New Haven con operatori che collegavano manualmente chiamanti e chiamati. Successivamente vennero collegati gli uffici di commutazione per le chiamate interurbane, e la gerarchia crebbe fino a cinque livelli.

7. **Quali sono le tre componenti principali del sistema telefonico descritte nel capitolo?**
   - Local Loop (ultimo miglio, doppini intrecciati in rame e fibra FTTH)
   - Trunks o Backbone (dorsale, in fibra ottica o microonde)
   - Centrali di smistamento (armadi e box di distribuzione)

8. **Cosa si intende per "Local Loop" o "ultimo miglio"? Con quali mezzi fisici è realizzato tradizionalmente?**
   - È il collegamento tra l'utente e la centrale telefonica. Tradizionalmente realizzato con doppini intrecciati in rame (ancora analogici), oggi anche con fibra ottica FTTH.

9. **Qual è la funzione del Giunto di Sfioccamento nella rete di accesso primaria?**
   - Gestisce fino a un massimo di 800 doppini derivanti dai vari Box Stradali, collegandoli alla centrale telefonica.

### Sezione 4.1 (continua) – Metro Access Network

10. **Cos'è la Metro Access Network e quali velocità può offrire?**
    - È una rete su standard Ethernet che connette gli abbonati a una rete di servizi più ampia (es. Internet). Velocità da 20 Mbps a 1 Gbps.

11. **Quali sono le due principali architetture della rete di accesso basata su fibra ottica?**
    - Basata su rame (in via di sostituzione) e basata su fibra ottica (TDM-PON e WDM-PON).

12. **Spiega il principio del multiplexing TDM-PON. Come viene condivisa la banda tra gli utenti?**
    - Time Division Multiplexing: assegna sequenzialmente (a turno) l'intera banda a tutti gli utenti durante intervalli di tempo fissi chiamati "Time Slots".

13. **Spiega il principio del multiplexing WDM-PON. Quale vantaggio offre in termini di velocità?**
    - Wavelength Division Multiplexing: assegna a ciascun abbonato una specifica lunghezza d'onda, aumentando la larghezza di banda fino a velocità dell'ordine di 10 Gbps.

### Sezione 4.2 – Tecnologia xDSL

14. **Cosa significa l'acronimo CPE? Fai almeno due esempi di dispositivi CPE.**
    - Customer Premises Equipment (apparecchiatura presso il cliente). Esempi: ricevitori telefonici, TV via cavo, modem/router per l'accesso a Internet.

15. **Cos'è un modem e quali sono le due operazioni fondamentali che esegue?**
    - Dispositivo che permette ai dati digitali di circolare su canale analogico. Esegue modulazione (codifica di dati digitali in segnale analogico) e demodulazione (operazione inversa).

16. **Elenca almeno quattro tipi di modulazione utilizzati nei modem.**
    - AM (Amplitude Modulation), FSK (Frequency Shift Keying), PSK (Phase Shift Keying), QAM (Quadrature Amplitude Modulation).

17. **Qual è la differenza tra baud e bps? Fai un esempio concreto.**
    - bps = bit al secondo (quantità di bit trasmessi al secondo). Baud = numero di simboli trasmessi al secondo. Esempio: modem 4-QAM a 1200 baud trasmette 2400 bps (2 bit per simbolo).

18. **Quale banda di frequenze usavano i primi modem telefonici e perché?**
    - La banda fonica da 300 Hz a 3400 Hz (frequenze udibili dall'orecchio umano).

19. **Come è stato possibile raggiungere velocità di 56 Kbps con modem V90 mantenendo 1200 baud?**
    - Aumentando le informazioni di ogni singolo baud, che è passato da 1 bit fino a raggiungere 46,6 bit per baud.

20. **Cosa significa l'acronimo QAM? Su quale piano complesso viene rappresentata?**
    - Quadrature Amplitude Modulation (modulazione combinata di ampiezza e fase). Viene rappresentata su un diagramma detto "costellazione" sul piano complesso.

21. **Spiega il principio della modulazione DMT usata nei modem xDSL.**
    - Suddivide la banda disponibile in un alto numero di sottocanali di uguale dimensione (4,3125 KHz ciascuno).

22. **Nell'ADSL, in quanti sottocanali viene suddivisa la banda di 1104 KHz e quanti ne vengono destinati all'upload?**
    - 256 sottocanali. 32 per l'upload (da 25,875KHz a 163,875KHz), 218 per il download.

23. **Qual è la differenza principale tra ADSL2+ e ADSL2 in termini di banda per il download?**
    - ADSL2+ ha raddoppiato la banda per il download, spostando il limite superiore da 1,1 MHz a 2,2 MHz.

24. **Cosa introduce il VDSL rispetto alle tecnologie ADSL dal punto di vista infrastrutturale?**
    - Introduce la fibra ottica nell'infrastruttura fisica: la fibra arriva fino all'armadio di strada, l'ultimo miglio (armadio-unità immobiliare) resta in rame.

25. **Con quale tecnica VDSL2 separa i due versi di trasmissione (upload e download)?**
    - Con la tecnica FDD (Frequency Division Duplexing).

26. **Quali sono i tre profili di frequenza del VDSL2 (8, 12, 17 MHz) e in quali scenari vengono utilizzati?**
    - 8 e 12 MHz: linee più lunghe; 17 MHz: utilizzi da cabinet.

27. **Cosa si intende per Enhanced VDSL2 e fino a quale frequenza estende lo spettro?**
    - Estensione dello spettro del VDSL2 fino a 35 MHz, per incrementare la velocità sulle reti in rame preservando la compatibilità con FTTC.

### Sezione 4.3 – Tecnologia d'Accesso in Fibra Ottica

28. **Cosa significa l'acronimo NGAN e cosa indica la sigla generica FTTx?**
    - NGAN = Next Generation Access Network (rete di accesso di nuova generazione). FTTx = generalizzazione delle architetture che usano la fibra (FTTH, FTTB, FTTC, ecc.).

29. **Cosa significa l'acronimo OTN (Optical Transport Network)? Qual è l'obiettivo finale di questa tecnologia?**
    - Optical Transport Network (rete di trasporto ottico). L'obiettivo è una "Rete Tutta Ottica".

30. **Quali sono le tre tipologie di ODU (Optical Data Unit) e quali velocità supportano?**
    - ODU-1: fino a 2,5 Gbit/s; ODU-2: da 2,5 a 10 Gbit/s; ODU-3: da 10 a 40 Gbit/s.

31. **Quante ODU-1 possono essere trasportate in un ODU-2 e quante ODU-2 in un ODU-3?**
    - Quattro ODU-1 in un ODU-2; quattro ODU-2 in un ODU-3.

32. **Perché gli operatori hanno inizialmente preferito sfruttare la rete in rame esistente invece di passare subito alla fibra?**
    - Per la larga diffusione e capillarità della classica rete di distribuzione in rame sviluppata per il servizio telefonico.

33. **Quali sono i quattro vantaggi delle architetture PON (Passive Optical Network) rispetto alle soluzioni punto-punto?**
    - Affidabilità elevata, manutenzione semplificata, riduzione del numero di fibre in centrale e del costo per utente, possibilità di evoluzione mediante sostituzione degli apparati terminali.

34. **Cosa significa che una rete PON è "passiva"? Dove si trovano gli apparati attivi?**
    - Assenza di apparati attivi al di fuori delle sedi dove sono collocate le OLT e le ONT-ONU.

35. **Qual è la differenza tra OLT (Optical Line Termination) e ONT/ONU (Optical Network Termination/Unit)?**
    - OLT: terminazione di linea ottica in centrale, interfaccia tra utenti connessi e rete core. ONT/ONU: terminazione di rete ottica presso l'utente.

36. **Cosa significa l'acronimo ODN (Optical Distribution Network) e in quale configurazione è organizzato?**
    - Optical Distribution Network (rete di distribuzione ottica) in configurazione punto-multipunto con splitter ottici passivi.

37. **Qual è la differenza architetturale tra FTTH, FTTB e FTTC?**
    - FTTH: ONT per ogni singolo cliente; FTTB/FTTC: maggior grado di condivisione della terminazione ottica (ONU), con tratto terminale in rame.

38. **Perché in architetture FTTB o FTTC si può ancora utilizzare il rame nel tratto terminale? Quale tecnologia si usa?**
    - Per sfruttare la capillarità della rete in rame e ridurre la posa di nuova fibra. Si usano sistemi trasmissivi ad alta velocità su rame della famiglia VDSL.

### Sezione 4.4 – Fixed Wireless Access and Satellite

39. **Cosa significa l'acronimo FWA? Qual è il modello comune a tutti i sistemi FWA?**
    - Fixed Wireless Access. Modello comune: stazione base (BTS) collegata a una dorsale e un numero di CPE distribuite su un'ampia area.

40. **Cosa significa l'architettura FTTT (Fiber to the Tower)?**
    - Fibra ottica che arriva fino a una torre, da cui parte il segnale radio fino alle abitazioni.

41. **Quali sono i principali vantaggi delle reti FWA?**
    - Colmare il divario digitale nelle aree meno servite; non richiedono connessione a infrastrutture via cavo; installazione semplice senza scavi di trincee.

42. **Quali sono i principali svantaggi o limitazioni delle reti FWA?**
    - Distanza di trasmissione limitata (linea di vista); fattori ambientali (alberi, edifici, path loss); dipendenza dalla frequenza (frequenze alte riducono la portata).

43. **Quali fattori ambientali possono influire sulle prestazioni di una connessione FWA?**
    - Ostacoli come alberi, edifici e path loss che dipende dall'orografia del terreno.

44. **In che anno è iniziata la storia del FWA e con quale tecnologia?**
    - Metà anni 2000 con la tecnologia HiperLAN2.

45. **Qual era il principale limite del protocollo HiperLAN2 in termini di gestione del canale?**
    - Protocollo semplice, non sincronizzato e senza gestione del canale radio: ogni client trasmette immediatamente senza prenotazione. Con l'aumento dell'occupazione del canale, la latenza diventa imprevedibile e molto variabile.

46. **Cosa significa l'acronimo WiMAX e in quale banda di frequenze lavora?**
    - Worldwide Interoperability for Microwave Access. Lavora in banda 3,4 - 3,6 GHz.

47. **Quali sono le due modalità operative del WiMAX? In cosa differiscono?**
    - Non-line-of-sight: CPE comunica direttamente con la BTS (basse frequenze). Line-of-sight: per CPE distanti dalla BTS e per trasferimenti Torre-Torre.

48. **Perché il 5G rappresenta un'importante svolta per le offerte FWA nel presente e nel prossimo futuro?**
    - Per le prestazioni che riesce a offrire: velocità di download/upload che possono eguagliare quelle di una rete in fibra FTTC.

### Domande trasversali e di confronto

49. **Confronta le tecnologie ADSL2+, VDSL2 ed Enhanced VDSL2 in termini di spettro di frequenza utilizzato e velocità.**
    - ADSL2+: fino a 2,2 MHz; VDSL2: 8-30 MHz (profili a 8, 12, 17 MHz); Enhanced VDSL2: estensione fino a 35 MHz.

50. **Quali sono le differenze principali tra una rete PON con splitter passivi e una rete punto-punto attiva in termini di costo, manutenzione e affidabilità?**
    - PON: maggiore affidabilità, manutenzione semplificata, riduzione del numero di fibre e costo per utente; punto-punto attiva: richiede apparati attivi "in strada" con maggiore complessità manutentiva.

51. **Confronta i vantaggi e gli svantaggi di una connessione in fibra FTTH rispetto a una connessione FWA con 5G.**
    - FTTH: massima velocità e affidabilità, ma richiede scavi e posa di fibra. FWA con 5G: installazione semplice senza cavi, ma soggetta a limitazioni ambientali, distanza e linea di vista.

52. **Perché il doppino in rame viene ancora utilizzato in architetture FTTC/FTTB nonostante l'esistenza della fibra ottica?**
    - Per sfruttare la capillarità della rete in rame esistente nel tratto terminale, riducendo la necessità di posa di nuova fibra.

53. **Quali problemi di latenza e indeterminismo si manifestano in HiperLAN2 quando aumenta il numero di utenti attivi?**
    - Col crescere dell'occupazione del canale, la latenza diventa imprevedibile, indeterministica e molto variabile (nessun sistema di prenotazione della risorsa trasmissiva).

54. **Qual è il rapporto tra numero di sottocanali, rapporto segnale/rumore (S/N) e velocità di trasmissione nella modulazione DMT?**
    - Per ogni sottocanale, il modem trasmette da 2 a 15 bit al periodo in funzione del rapporto S/N: più S/N è basso, minore è il numero di bps generati, per evitare elevati tassi di errore.