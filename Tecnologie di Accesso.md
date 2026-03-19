# Tecnologie di Accesso

## Local Loop e vecchie tecnologie
La rete telefonica pubblica commutata, o PSTN, è l'insieme mondiale di reti telefoniche pubblico tra loro connesse e principalmente per veicolare dati voce.
Negli ultimi anno la situazione sta cambiando con l'introduzione delle fibre ottiche e del digitale.

Il sistema telefonico è costituito da tre componenti principali:
* Local Loop (ultimo miglio): formato da doppini intrecciati, e quindi analogici, e alcuni tratti in fibra ottica FTTH.
* Trunks o Backbone: ormai quasi interamente in fibra o microonde, trasmesse per lo più in digitale.
* Centrali di smistamento: ormai formatesi in armadi e box di distribuzione.

Nel loro insieme le reti costituiscono la rete di accesso, e sono il mezzo di collegamento tra gli utenti e le centrali telefoniche o nodi di fornitura a banda larga.

Il cavo telefonico della rete di accesso Secondaria parte dal Box dell'edificio fino al box stradale, da cui tramite la rete di accesso primaria arriva al giunto di sfioccamento, e da qui si arriva alla centrale telefonica.

La Metro Access Network è una rete su standard Ethernet. Viene comunemente usata per connettere gli abbonati a una rete di servizi più ampia, come Internet, e la loro velocità varia in base alla tecnologia usata:
* Rame: quella che ha servito l'Italia fino a qualche anno fa
* Fibra: naturale evoluzione della precedente a causa della crescente richiesta di servizi ad alte prestazioni. Questa si divide in due architetture:
    * TDM-PON: l'implementazione di questa architettura si basa sulla divisione del periodo di trasmissione per ciascun utente su una singola lunghezza d'onda.
    * WDM-PON: l'implementeazione di questa architettura si basa sulla divisione del mezzo trasmissimo dedicando agli utenti diverse lunghezze d'onda.

## xDSL
Il primo elemento che si interfaccia con la rete di accesso e si trova presso la casa del cliente è il CPE (Customer Premise Equipment): per CPE si intende qualsiasi dispositivo presso l'utente, che viene usato in sostituzione a un provider di servizi.

Un modem è un dispositivo, disponibile come case indipendente o come una scheda da inserire in un computer, che permette ai dati digitali di essere ricevuti e inviati su un canale analogico, grazie alla modulazione, ossia la codifica di dati digitali in analogico, che generalmente è una frequenza portante modulata. L'operazione inversa è la demodulazione. Esistono vari tipi di modulazione utilizzati:
* modulazione in ampiezza (AM)
* modulazione di frequenza (FSK, Frequency Shift Keying)
* modulazione di fase (PSK, Phase Shift Keying)
* modulazione combinata di ampiezza e fase (QAM, Quadrature Amplitude Modulation).

Alcuni termini inerenti alla trasmissione sono bps, baud e banda passante. Baud e Bps (bit al secondo) non sono la stessa cosa.

Bit al secondo è la misura di quanti bit di dati vengono trasmessi ogni secondo sul canale. Il Baud invece, quando il segnale usa solo due segnali, il numero di simboli trasmessi per unità di tempo: ad esempio un modem che trasmette in 4-QAM ha una velictà di 1200 Baud, ma di 2400 bps (perchè trasmette 2 bit per simbolo).

I primi modem usavano un range di frequenze in cui passava il segnale detta fonica (da 300Hz a 3400Hz) per trasmettere i dati. Tale banda consentiva un passaggio di 1200 baud. Poi si è aumentati a 2400, 4800, 9600, fino a 56 Kbps con lo standard V90, anche se i baud sono sempre 1200: in altre parole si è incrementato il numero di bit trasportati da un baud fino a 46,6 bit per baud.

Lo standard V dei modem è iniziato con la trasmissione in modulazione QAM (o CAP sulla linea telefonica). Ogni tipo di modulazione QAM è caratterizzato da un diagramma sul piano complesso (costellazione) su cui sono rappresentate i possibili stati della portante.

La modulazione DMT, consiste nel dividere la banda disponibile in un alto numero di sottocanali di pari dimensione. Ad esempio, nella prima versione di ADSL la banda era 1104KHz divisa in 256 sottocanali di banda 4,3125KHz. I primi 6 sottocanali erano impiegati per la fonia. In realtà l'ampiezza effettiva di ogni sottocanale è di 4KHz, mentre l'eccedente viene usato come banda di guardia per evitare che i sottocanali si sovrappongono.

L'allocazione dei sottocanali avviene con la tecnica FDM. Si destinano 32 sottocanali per l'upload (dall'utente all'ISP) e 218 per il download dall'ISP all utente. I 32 per l'upload sono allocati dalla frequenza 25,875KHz fino a 163,875KHz. Il modem è realizzato in modo da trasmettere, per ogni sottocanale, da 2 a 15 bit al periodo in funzione del rapporto S/N.

## Fibra Ottica

## Fixed Wireless Access and Satellite