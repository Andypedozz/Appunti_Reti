# Tecnologie di Accesso

## Sistema Telefonico

Il sistema telefonico è composto da 3 parti:

* Local Loop (ultimo miglio): formato ancora oggi da doppini di rame, quindi analogici, e alcuni tratti in fibra ottica (FTTH).
* Trunks o Backbone (Dorsale): ormai quasi del tutto in fibra o microonde, prelopiù in digitale
* Centrali di smistamento: armadi e box di distribuzione

Le reti e le linee costituiscono la rete di accesso e collegano gli utenti e le centrali telefoniche o i nodi di fornitura a larga banda nel territorio.

Il cavo telefonico della rete di accesso secondaria parte dal box domestico fino al box stradale, da cui attraverso la rete di accesso primaria arriva al giunto di sfioccamento (ogni giunto ha max 800 doppini da box stradali), da cui poi si arriva alla centrale telefonica.

## Metro Access Network
La Metro Access Network è una rete su standard Ethernet, usata comunemente per connettere gli abbonati a una rete di servizi più ampia, come Internet.

Questa può essre:
* basata su rame: quella che ha servito l'Italia fino a qualche anno fa
* basata su fibra ottica: naturale evoluzione della precedente a causa della maggior richiesta di servizi ad alte prestazioni. Essa si divide ulteriormente in:
    * TDM-PON: basata sulla divisione della trasmissione su una singola lunghezza d'onda ma a slot temporali alternati (Time Division Multiplexing).
    * WDM-PON: basata su multiplexing a divisione di lunghezza d'onda. In questo modo si aumenta la larghezza di banda, fino ai 10Gbps.

## xDSL
Il primo elemento che si interfaccia con la rete di accesso è in casa del cliente e si dice CPE (Customer Premise Equipment), ossia un qualsiasi dispositivo che viene usato in sostituzione di un provider di servizi, come un modem/router per l'accesso a internet o un ricevitore telefonico o TV via cavo.

### Modem
Un modem è un dispositivo, che permette ai dati digitali di essere ricevuti e inviati su un canale analogico. Per farlo deve eseguire la modulazione, ossia codificare i dati digitali in segnali analogici. Al contrario la demodulazione consente al ricevitore di riottenere i dati digitali dai segnali analogici.

Ci sono diversi tipi di modulazione:
* Modulazione di ampiezza (AM Amplitude Modulation)
* Modulazione di frequenza (FSK, Frequency Shift Keying)
* Modulazione di fase (PSK, Phase Shift Keying)
* Modulazione combinata di ampiezza e fase (QAM, Quadrature Amplitude Modulation)

### Baud, bps e banda passante
Baud e bps non sono la stessa cosa. Bit al secondo è la misura di quanti bit vengono trasmessi al secondo su un canale. Il baud invece, è il numero di simboli trasmessi per unità di tempo

Esempio:
Un modem che trasmette in 4-QAM ha una velocità di 1200 baud, ma di 2400 bps (perchè trasmette 2 bit per simbolo).

Inizialmente i model usavano la banda passante, detta **fonica** (da 300 a 3400 Hz). Questa permetteva il passaggio di 1200 baud. In seguito si è passati a 2400, 4800, 9600, fino a 56 Kbps con lo standard V90, anche se i baud sono sempre 1200.

### Modulazione DMT
La modulazione DMT, usata nei modem xDSL, suddivide la banda in un alto numero di sottocanali di uguale dimensione.
In ADSL, la banda era 1104KHz, divisa in 256 sottocanali da 4,3125 KHz.
* i primi 6 sottocanali era usati per la fonia.

L'allocazione dei sottocanali avviene con la tecnica FDM (Frequency Division Modulation).
Nella realizzazione standard vi erano 32 sottocanali per l'upload e 218 sottocanali per il download. I primi andavano da 25,875 KHz a 163,875 KHz

### ADSL, ADSL2, ADSL2+, VDSL, VDSL2
* ADSL2: usa una modulazione migliore rispetto a ADSL, uso più intensivo delle bande.
* ADSL2+: ha raddoppiato la banda per il download, spostando il limite superiore da
  1,1 MHz di ADSL a 2,2 MHz
* VDSL: introduce la fibra ottica e lavora a frequenze più elevate, fino a 12 MHz: la fibra arriva fino all'armadio stradale e l'ultimo miglio resta in rame.
* VDSL2: sviluppata a partire dalla meno recente VDSL. VDSL2 separa i due versi di trasmissione con FDD (Frequency Division Duplexing) e usa le frequenze tra 8-30 MHz.

## Tecnologia d'Accesso in Fibra Ottica
Una rete di accesso fisso NGAN (New Generation Access Network), o FTTx, è costituita da vari apparati trasmissivi attivi e passivi.

Spesso una rete in fibra si dice OTN (Optical Transport Network). Per il trasporto dei segnali cliente la rete definisce 3 contenitori ODU (Optical Data Unit):
* ODU-1: adatta a portare i segnali cliente con trasmissione fino a 2,5 Gbit/s
* ODU-2: per segnali da 2,5 a 10 Gbit/s
* ODU-3: per segnali da 10 a 40 Gbit/s