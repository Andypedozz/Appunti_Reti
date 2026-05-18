
## Livello Fisico
1. Le principali differenze tra un segnale analogico e uno digitale stanno nel fatto che un segnale analogico segue una forma d'onda continua nel tempo e nel valore del segnale. Il segnale è limitato in un range di valori ma può assumere infiniti valori in quell'intervallo. Un segnale digitale invece è un segnale discreto nel tempo e nei valori assunti.
2. Un'onda sinusoidale è descritta da 3 parametri:
   * Ampiezza: l'ampiezza rappresenta l'energia del segnale, identificando minimi e massimi della sinusoide
   * Frequenza: indica la velocità di variazione del valore del segnale
   * Fase: indica lo spostamento nel tempio della sinusoide rispetto al tempo 0.
3. Per larghezza di banda si possono intendere due significati: se si parla di un segnale analogico, la larghezza di banda rappresenta il range di frequenze che il segnale utilizza (in Hertz), mentre se si parla di un segnale digitale si parla del numero di bit al secondo che il segnale può trasportare.

4. 

7. Il multiplexing è la tecnica con cui si abilità la condivisione di un mezzo fisico e lo si mette a disposizione di più dispositivi che voglio trasmettere segnali su quel mezzo. è importante nelle reti di telecomunicazione per il semplice fatto che sarebbe ingestibili strutturare reti con una moltitudine di nodi se fosse necessario creare mezzi di comunicazione dedicati per ogni nodo.
8. Il multiplexer è quel componente hardware o software che si occupa di prendere messaggi da più sorgenti e trasmetterle su un singolo canale, mentre il demultiplexer fa l'opposto, ovvero prende messaggi da un mezzo condiviso, e li smista verso più riceventi.

9. La larghezza di banda rappresenta la capacità massima, ideale di un mezzo trasmissivo, una sorta di limite superiore. Il Throughput invece è la quantità di informazioni effettivmente trasportate in un certo lasso di tempo. Potremmo paragonarlo alla larghezza di un tubo e all'effettiva quantità di flusso d'acqua che ci passa in un certo momento.

10. I 4 contributi al ritardo totale di una rete sono:
   * tempo di propagazione: è il tempo impiegato dai bit per viaggiare da sorgente a destinazione, e può essere calcolato come il rapporto tra la lunghezza del collegamento e la velocità di propagazione sul mezzo. t_p = d / v_p
   * tempo di trasmissione: tempo necessario per inviare il segnale lungo la linea di trasmissione, dipende dalla dimensione del messaggio e dalla larghezza di banda del mezzo: t_T = G / L
   * tempo di accomodamento: è il tempo necessario affinché i pacchetti passino dalla porta di ingresso a quella di uscita dei router.
   * ritardo di elaborazione: il tempo che il router impiega per calcolare l'instradamento del pacchetto.

11. Con RTT (Round Trip Time) si intende la latenza impiegata da un pacchetto per attraversare il mezzo da sorgente a destinatario + tempo di ritorno. Differisce dal "one-way" in quanto esso non considera il tempo di ritorno.

13. Il Jitter è un valore che indica quanto varia il ritardo in una rete, ossia quanto "instabile" è la rete. Infatti, un valore alto di jitter corrisponde a una rete la cui latenza è molto variabile. Le principali cause sono interferenze elettromagnetiche e diafonia tra i segnali. è mitigabile tramite l'utilizzo di buffer, che rendono più regolarmente scandito il ritmo di trasmissione dei diversi pacchetti.

14. Un doppino di rame è costituito da due cavi di rame, ricoperti da materiale isolante, tra loro intrecciati. Un cavo trasporta il segnale, l'altro è un riferimento a massa. Il ricevitore usa la differenza di segnali tra i due cavi. La diafonia in due conduttori paralleli è alta, perciò si intrecciano per ridurla.

15. Le differenze principali tra cavo UTP e STP in termini di schermatura sono che il cavo UTP era un cavo non schermato, nella sua forma più comune di cablaggio per sistemi di telefonia vocale casalinga e per uffici. Di solito erano 4 cavi intrecciti a coppie, senza alcun altro isolamento o schermatura.
UTP:
   * flessibile, economico e facile da installare
   * usati per trasmissioni brevi di voce e dati
Svantaggi:
   * larghezza di banda limitata
   * efficienti fino agli 80 metri e devono essere sezionati in tratti minori di 100m

I cavi STP invece hanno un isolamento extra, ossia un rivestimento protettivo sui conduttori sotto forma di una maglia di rame intrecciata, che riduce rumore, interferenza e dà maggior rigidezza al cavo.

Vantaggi:
   * comunicazione a lunga distanza in ambienti rumorosi
   * la schermatura protegge da rumore
   * larghezza di banda maggiore
Svantaggi:
   * più costosi e difficili da installare
   * manutenzione più costosa

16. Le principali categorie di cavo Ethernet sono:
   * Cat. 1
      * Caratteristiche: doppino UTP molto semplice, 2 fili di rame
      * Velocità: non definita per dati (solo voce analogica)
      * Impiego: telefonia vocale domestica e uffici (vecchi impianti)
   * Cat. 2
      * Caratteristiche: doppino per voce e dati primitivi
      * Velocità: fino a 4 Mbps
      * Impiego: reti IBM Token Ring anni ’80
   * Cat. 3
      * Caratteristiche: 4 doppini intrecciati, supporto Ethernet base
      * Velocità: fino a 10 Mbps
      * Impiego: Ethernet 10BaseT, voce digitale, edifici datati
   * Cat. 4
      * Caratteristiche: migliorata rispetto a Cat.3, usata in reti Token Ring
      * Velocità: fino a 16 Mbps
      * Impiego: soprattutto reti IBM Token Ring (oggi obsoleta)
   * Cat. 5
      * Caratteristiche: maggiore torsione per ridurre interferenze
      * Velocità: fino a 100 Mbps
      * Impiego: 10BaseT e 100BaseT (Fast Ethernet), dati + voce + video
      * Distanza tipica: fino a 100 m
   * Cat. 5e
      * Caratteristiche: versione migliorata di Cat.5
      * Velocità: fino a 100 Mbps (più stabile)
      * Impiego: reti domestiche e aziendali base, sub-Gigabit
      * Nota: riduce la diafonia, molto diffusa
   * Cat. 6
      * Caratteristiche: separatore interno (spline), migliore schermatura
      * Velocità:
      * fino a 1 Gbps (100 m)
      * fino a 10 Gbps (≤ 35 m)
      * Impiego: reti moderne ad alte prestazioni
      * Variante Cat6a: fino a 500 MHz, migliori prestazioni
   * Cat. 7
      * Caratteristiche: alta schermatura, connettori proprietari (GG45)
      * Velocità: simile a Cat6a (fino a multi-Gbps)
      * Impiego: reti specializzate ad alta interferenza
      * Limite: standard non ufficiale IEEE/TIA → poco diffusa
   * Cat. 7a
      * Caratteristiche: evoluzione Cat7
      * Velocità:
      * 40 Gbps fino a 50 m
      * 100 Gbps fino a 15 m
      * Impiego: data center avanzati (ma raro)
   * Cat. 8
      * Caratteristiche: schermatura totale, molto rigido
      * Velocità: fino a 40 Gbps
      * Banda: fino a 2 GHz
      * Distanza: fino a 30 m
      * Impiego: collegamenti switch–switch in data center (25G/40G Ethernet)
      * Nota: RJ45 compatibile ma uso molto specializzato

17. Il connettore standard per i cavi Ethernet in rame è l'RJ45. 8P8C (Eight Position, Eight Contact) viene spesso usato come sinonimo di RJ45, ma in realtà è una categoria più ampia di connettori di cui RJ45 fa parte.

18. Il cavo coassiale è fatto da una guaina di plastica esterna che contiene al suo interno due strati di materiale isolante divis tra loro da uno strato di conduttore metallico; al centro c'è un anima metallica (rame).
Il più comune dei connettori è quello a baionetta Neill-Concelman (BNC).

19. La fibra ottica funziona tramite la riflessione di uno o più fasci di luce all'interno del cladding, un involucro di vetro con indice di rifrazione minore.
20. La fibra monomodale è un tipo di fibra ottica che utilizza un solo fascio di luce trasmesso in linea retta, quindi senza rifrazione. Essa richiede un ricetrasmettitore pulito e allineato con precisione inferiore al micron.
La fibra multimodale invece è più tollerante, e sfrutta più fasci di luce riflessi lungo il cavo, l'importante è che ogni fascio abbia un angolo di rifrazione diverso dagli altri.
21. I principali vantaggi della fibra ottica sono il fatto che la larghezza di banda, usando impulsi luminosi, non è il collo di bottiglia del mezzo, ma bensì la velocità di decodifica del segnale alla ricezione. L'attenuazione del segnale è nettamente inferiore e di difficile intercettazione. Uno svantaggio delle fibre è la connessione di due di esse, che può avvenire usando apposite prese grazie a edei connettori con perdita del 10-20% della luce. Meccanicamente o tramite fusione.