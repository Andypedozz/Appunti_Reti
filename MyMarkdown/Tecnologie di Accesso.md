# Tecnologie di Accesso

## Evoluzione della rete telefonica

La rete telefonica pubblica PSTN nasce come rete destinata principalmente al trasporto della voce. In origine le connessioni erano manuali: gli operatori collegavano fisicamente le chiamate tramite cavi jumper. Col tempo la rete si è evoluta fino a creare una struttura gerarchica di centrali di commutazione.

La rete telefonica tradizionale è composta da tre parti principali:

* **Local Loop (ultimo miglio)**: collegamento tra utente e centrale, storicamente realizzato con doppini in rame;
* **Backbone o dorsale**: rete principale di trasporto, oggi quasi totalmente in fibra ottica;
* **Centrali di smistamento**: strutture che gestiscono e instradano il traffico.

La rete di accesso collega fisicamente l’utente alla rete dell’operatore. Dall’impianto interno dell’edificio il collegamento arriva ai box stradali, poi alla rete primaria e infine alla centrale telefonica.

---

## Metro Access Network e reti in fibra

La Metro Access Network è una rete Ethernet utilizzata per collegare gli utenti ai servizi Internet con velocità che possono arrivare fino a 1 Gbps.

Le infrastrutture possono essere:

* **Basate su rame**, tecnologia storicamente molto diffusa ma ormai in progressiva sostituzione;
* **Basate su fibra ottica**, necessarie per supportare servizi moderni come streaming, gaming e cloud.

Nelle reti in fibra vengono utilizzate principalmente due tecniche:

### TDM-PON

La banda viene condivisa nel tempo: ogni utente utilizza l’intera capacità della rete durante un preciso intervallo temporale chiamato *time slot*.

### WDM-PON

Ogni utente riceve una diversa lunghezza d’onda ottica. In questo modo è possibile aumentare molto la capacità trasmissiva, raggiungendo velocità dell’ordine dei 10 Gbps.

---

## xDSL e modem

All’interno dell’abitazione dell’utente si trova il **CPE (Customer Premises Equipment)**, cioè il dispositivo utilizzato per accedere alla rete, come modem o router.

Il modem consente di trasmettere dati digitali su un canale analogico tramite operazioni di:

* **modulazione**: conversione del segnale digitale in analogico;
* **demodulazione**: operazione inversa.

Le principali tecniche di modulazione sono:

* AM (modulazione di ampiezza),
* FSK (modulazione di frequenza),
* PSK (modulazione di fase),
* QAM (modulazione combinata ampiezza/fase).

È importante distinguere tra:

* **bps**: bit trasmessi al secondo;
* **baud**: simboli trasmessi al secondo.

Con l’evoluzione dei modem è stato possibile aumentare il numero di bit trasmessi per simbolo, raggiungendo velocità molto superiori pur mantenendo la stessa frequenza di simboli.

---

## Tecnologia ADSL e VDSL

Le tecnologie xDSL sfruttano il doppino telefonico in rame per trasmettere dati ad alta velocità.

La tecnologia ADSL utilizza la modulazione DMT, che divide la banda disponibile in numerosi sottocanali indipendenti. Alcuni canali vengono utilizzati per la voce, altri per upload e download.

L’evoluzione delle tecnologie DSL è avvenuta in più fasi:

### ADSL2

Migliora la modulazione e sfrutta meglio le frequenze disponibili, aumentando le prestazioni.

### ADSL2+

Raddoppia la banda disponibile per il download, arrivando fino a 2,2 MHz.

### VDSL

Introduce la fibra ottica fino all’armadio stradale, mantenendo il rame solo nell’ultimo tratto verso l’abitazione.

### VDSL2

Utilizza frequenze più elevate e permette velocità molto maggiori, mantenendo compatibilità con ADSL2+.

### Enhanced VDSL2

Estende ulteriormente lo spettro fino a 35 MHz per incrementare ancora le velocità sulle reti FTTC.

---

## Reti ottiche e architetture FTTx

Le reti NGAN (Next Generation Access Network) e FTTx rappresentano l’evoluzione moderna delle reti di accesso basate su fibra ottica.

Una rete ottica OTN (Optical Transport Network) permette di trasportare segnali ad altissima velocità attraverso contenitori ottici chiamati ODU:

* ODU1 fino a 2,5 Gbit/s,
* ODU2 fino a 10 Gbit/s,
* ODU3 fino a 40 Gbit/s.

---

## Reti PON

Le reti PON (Passive Optical Network) sono reti punto-multipunto caratterizzate dall’assenza di apparati attivi lungo la distribuzione ottica.

I principali elementi sono:

* **OLT (Optical Line Termination)**: apparato presente nella centrale;
* **ONT/ONU**: terminale ottico presso l’utente;
* **ODN**: rete di distribuzione ottica passiva.

Le reti PON offrono diversi vantaggi:

* maggiore affidabilità;
* manutenzione ridotta;
* minori costi;
* facilità di evoluzione tecnologica.

Questa architettura può essere utilizzata in:

* **FTTH**: fibra fino all’abitazione;
* **FTTB**: fibra fino all’edificio;
* **FTTC**: fibra fino all’armadio stradale.

Nelle soluzioni FTTB e FTTC l’ultimo tratto può ancora utilizzare il rame tramite VDSL.

---

## Fixed Wireless Access (FWA)

Le tecnologie FWA permettono di fornire connettività tramite collegamenti radio anziché cavi fisici.

In molti casi la fibra arriva fino a una torre radio (*Fiber To The Tower*), mentre l’ultimo collegamento verso l’utente avviene tramite onde radio.

Il sistema è composto da:

* una stazione base collegata alla dorsale;
* antenne e CPE installati presso gli utenti.

### Vantaggi

* copertura delle aree poco servite;
* installazione semplice;
* assenza di scavi e cablaggi complessi.

### Svantaggi

* distanza limitata;
* necessità di visibilità verso la stazione radio;
* sensibilità agli ostacoli ambientali;
* riduzione della portata alle alte frequenze.

---

## Evoluzione del wireless: HiperLAN, WiMAX e 5G

Le prime soluzioni FWA utilizzavano HiperLAN2, tecnologia semplice ma poco efficiente quando il numero di utenti aumentava.

Successivamente è arrivato il WiMAX, capace di offrire coperture più ampie e velocità elevate. Funzionava sia in modalità:

* **Non Line of Sight**, senza visibilità diretta;
* **Line of Sight**, con collegamento diretto verso la BTS.

Oggi il futuro del FWA è fortemente legato al **5G**, che permette velocità molto elevate e prestazioni comparabili a quelle delle reti FTTC in fibra.
