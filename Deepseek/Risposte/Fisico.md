## Sezione 2.1: Basi Teoriche della Comunicazione e Trasmissione Fisica dei Dati

**1. Quali sono le principali differenze tra un segnale analogico e un segnale digitale? Fornisci un esempio per ciascuno.**

| Caratteristica | Segnale analogico | Segnale digitale |
|----------------|-------------------|------------------|
| **Natura** | Continuo nel tempo e nei valori | Discreto (valori finiti, tipicamente 0 e 1) |
| **Rappresentazione** | Onda continua (es. sinusoidale) | Sequenza di impulsi (onda quadra) |
| **Esempio** | Segnale audio da un microfono, sismografo | Codice Morse, dati in un computer |
| **Vantaggi** | Maggiore densità, minore larghezza di banda | Più immune a rumore e distorsione, crittografabile, memorizzabile |
| **Svantaggi** | Soggetto a rumore e perdita di qualità su lunghe distanze | Richiede maggiore larghezza di banda per la stessa quantità di informazioni |

---

**2. Descrivi i tre parametri fondamentali che identificano un'onda sinusoidale (ampiezza, frequenza, fase) e il loro significato fisico.**

Un'onda sinusoidale semplice è descritta dalla formula: \( f(t) = A \sin(\omega t + \phi) \)

| Parametro | Simbolo | Significato fisico |
|-----------|---------|-------------------|
| **Ampiezza** | A | Valore assoluto del segnale; proporzionale all'energia trasportata. Graficamente è il picco della sinusoide. |
| **Frequenza** | ω (omega) o f | Velocità con cui il segnale cambia nel tempo. Si misura in Hertz (Hz). Frequenza alta = cambiamenti veloci; frequenza bassa = cambiamenti lenti. |
| **Fase** | φ (phi) | Posizione dell'onda rispetto al tempo zero; frazione di periodo trascorsa rispetto a un istante fissato. |

**Relazioni importanti**:
- Periodo \( T = \frac{1}{f} \) (tempo per un ciclo completo)
- Lunghezza d'onda \( \lambda = \frac{c}{f} \) (distanza tra due massimi consecutivi)

---

**3. Cosa si intende per "larghezza di banda" in Hertz e in bps? Qual è la relazione tra queste due definizioni?**

| Definizione | Unità di misura | Significato |
|-------------|----------------|-------------|
| **Larghezza di banda in Hertz** | Hz | Intervallo di frequenze contenuto in un segnale composito (differenza tra frequenza massima e minima che un canale lascia passare) |
| **Larghezza di banda in bps** | bit al secondo (bps) | Numero di bit al secondo che un canale o collegamento può trasmettere |

**Relazione**: Se un ciclo di segnale trasporta 1 bit di informazione, la frequenza in Hz è uguale alla velocità in bps. È possibile aumentare la velocità (bps) senza modificare la frequenza (Hz) facendo sì che ogni ciclo trasporti più bit (es. tecniche di modulazione).

---

**4. Spiega il concetto di attenuazione di un segnale. Come viene misurata e con quale dispositivo si può compensare?**

**Attenuazione**: è la perdita di energia che un segnale subisce mentre attraversa un mezzo trasmissivo. La resistenza del mezzo fa sì che la forza del segnale diminuisca con l'aumentare della distanza.

**Misurazione**: l'attenuazione è misurata in **decibel (dB)**, che esprimono il rapporto di potenza tra due segnali o tra lo stesso segnale in due punti diversi:
\[
\text{attenuazione} = 10 \log_{10} \frac{P_{\text{trasmessa}}}{P_{\text{ricevuta}}}
\]

**Compensazione**: dispositivi chiamati **amplificatori** (nei sistemi analogici) o **rigeneratori/ripetitori** (nei sistemi digitali) vengono utilizzati per riportare il segnale attenuato all'energia originale.

---

**5. Cosa sono le armoniche e qual è il ruolo della serie di Fourier nell'analisi dei segnali periodici?**

**Armoniche**: sono frequenze multiple della frequenza fondamentale \( \omega_1 \), cioè \( \omega_n = n \cdot \omega_1 \).

**Serie di Fourier**: è uno strumento matematico che permette di decomporre un segnale periodico generico in una somma infinita di sinusoidi (armoniche) con frequenze, ampiezze e fasi diverse.

**Ruolo**: la scomposizione tramite serie di Fourier (al nodo mittente) permette una successiva rapida ricostruzione del segnale al nodo destinatario tramite la formula inversa (antitrasformata). È fondamentale perché segnali complessi (utili per la trasmissione di informazioni) possono essere analizzati come combinazione di sinusoidi semplici.

---

**6. Distingui i segnali in banda base dai segnali a banda passante.**

| Caratteristica | Segnale in banda base | Segnale a banda passante |
|----------------|----------------------|--------------------------|
| **Frequenza più bassa** | 0 Hz | Maggiore di 0 Hz |
| **Larghezza di banda** | Coincide con la frequenza massima | Intervallo di frequenze che passa attraverso un filtro |
| **Origine** | Segnale originale non modulato | Segnale in uscita da un filtro passabanda |
| **Esempio** | Segnale audio non modulato | Segnale radio modulato |

---

## Sezione 2.1.2: Modalità di Multiplazione (Multiplexing)

**7. Che cos'è il multiplexing e perché è importante nelle reti di telecomunicazione?**

Il **multiplexing** (multiplazione) è la tecnica che consente a più utenti di trasferire informazioni attraverso lo stesso canale di comunicazione (linea di trasmissione come doppino, cavo coassiale, fibra, o etere).

**Importanza**: permette di condividere un mezzo ad alta capacità tra più flussi di comunicazione, evitando di dover installare canali fisici separati per ogni coppia di comunicanti (approccio costoso). I gradi di libertà sfruttabili sono la **banda/frequenza** e il **tempo**.

**Componenti**: un **multiplexer** divide il canale fisico in sottocanali e li assegna agli utenti; un **demultiplexer** all'altra estremità ricostruisce i flussi originali.

---

**8. Qual è la funzione di un multiplexer e di un demultiplexer in un sistema di comunicazione condiviso?**

| Dispositivo | Posizione | Funzione |
|-------------|-----------|----------|
| **Multiplexer (MUX)** | Lato mittente (all'inizio del canale) | Riceve dati da più utenti/flussi, li combina e li trasmette attraverso un unico canale fisico condiviso, assegnando a ciascun utente un sottocanale (frequenza, time slot, etc.) |
| **Demultiplexer (DEMUX)** | Lato destinatario (alla fine del canale) | Riceve il flusso combinato dal canale unico, identifica ciascun flusso originale (es. tramite etichette di frequenza o temporali), e invia le informazioni ai rispettivi destinatari |

---

## Sezione 2.1.3: Criteri di Valutazione delle Reti (QoS)

**9. Spiega la differenza tra larghezza di banda e throughput, utilizzando un'analogia (es. un tubo e il flusso d'acqua).**

| Concetto | Definizione | Analogia del tubo |
|----------|-------------|-------------------|
| **Larghezza di banda** | Capacità massima teorica di trasmissione di un collegamento (misurata in bps) | **Diametro del tubo** - la quantità massima d'acqua che potrebbe passare |
| **Throughput** | Quantità effettiva di dati trasmessi per unità di tempo (misurata in bps) | **Flusso effettivo d'acqua** che esce dal tubo (in rosso nella figura) |

**Relazione**: il throughput non potrà mai superare la larghezza di banda. La larghezza di banda è la misura della trasmissione **potenziale**; il throughput è la misura **effettiva**.

---

**10. Descrivi i quattro contributi principali al ritardo totale (latenza) in una rete: tempo di propagazione, tempo di trasmissione, tempo di accodamento e ritardo di elaborazione.**

Il ritardo totale \( R \) è dato da: \( R = t_P + t_T + t_A + r_E \)

| Componente | Formula | Significato |
|------------|---------|-------------|
| **Tempo di propagazione** (\( t_P \)) | \( t_P = \frac{d}{v_P} \) (d = distanza, \( v_P \) = velocità di propagazione) | Tempo necessario al bit per viaggiare fisicamente da sorgente a destinazione |
| **Tempo di trasmissione** (\( t_T \)) | \( t_T = \frac{G}{L} \) (G = grandezza messaggio, L = larghezza di banda) | Tempo per inviare tutti i bit del messaggio sulla linea |
| **Tempo di accodamento** (\( t_A \)) | Variabile, dipende dal traffico e dalle politiche QoS | Tempo che un pacchetto trascorre in coda in un router in attesa di essere inoltrato |
| **Ritardo di elaborazione** (\( r_E \)) | Dipende dalla complessità del protocollo e dalla potenza hardware | Tempo che il router impiega per decidere dove inviare il pacchetto |

---

**11. Cosa si intende per Round-Trip Time (RTT)? In cosa differisce dalla latenza "one-way"?**

| Concetto | Definizione |
|----------|-------------|
| **Latenza one-way** | Tempo che un singolo pacchetto impiega per percorrere il tragitto dal mittente al destinatario |
| **Round-Trip Time (RTT)** | Tempo totale che intercorre tra l'invio di un messaggio da un capo all'altro di una rete e la ricezione della risposta (andata + ritorno) |

**Differenza chiave**: la latenza one-way considera solo il percorso di andata; l'RTT considera anche il percorso di ritorno ed eventuali tempi di elaborazione al destinatario. L'RTT è spesso più rilevante per i protocolli che richiedono conferme (es. TCP).

**Differenza tra latenza e tempo di risposta**: il tempo di risposta aggiunge alla latenza il tempo che un nodo impiega per elaborare il pacchetto e rimetterlo sul canale; quindi il tempo di risposta è sempre maggiore della latenza.

---

**12. Qual è il significato fisico del prodotto "larghezza di banda × ritardo"? Perché è importante nelle reti ad alte prestazioni?**

Il prodotto **larghezza di banda × ritardo** rappresenta il **volume del canale di comunicazione** (analogia del tubo: ritardo = lunghezza, larghezza di banda = diametro; prodotto = volume).

**Significato fisico**: è il numero massimo di bit che possono essere in transito attraverso il canale in un dato istante.

**Importanza nelle reti ad alte prestazioni**: corrisponde alla quantità di bit che il mittente deve trasmettere prima che il primo bit arrivi al destinatario. Se il mittente deve attendere una conferma (ACK) prima di inviare altri dati, dovrà inviare una quantità di dati pari a \( RTT \times L \) prima di sapere che il primo bit è stato ricevuto con successo. Questo concetto è fondamentale per il dimensionamento dei buffer e per l'efficienza dei protocolli di trasporto.

---

**13. Definisci il jitter. Per quali tipi di applicazioni è particolarmente problematico e come può essere mitigato?**

**Jitter**: è la **varianza del ritardo del pacchetto**, ovvero la variazione del tempo di consegna tra pacchetti diversi appartenenti allo stesso flusso. Si misura in millisecondi (ms).

**Applicazioni particolarmente sensibili**: tutte le applicazioni **tempo-sensibili** (real-time), in particolare:
- Audio/VoIP (può introdurre "clic" o effetti indesiderati)
- Video/streaming (può causare sfarfallio dello schermo)
- Videoconferenze
- Giochi multiplayer

**Cause principali**: interferenze elettromagnetiche (EMI), diafonia tra segnali, congestione di rete.

**Mitigazione**:
1. **Buffer** (nodo destinatario): i pacchetti vengono ricevuti nel buffer e poi espulsi a velocità regolare
2. **Routing selettivo**: instradare i pacchetti lungo i percorsi più stabili o che garantiscono il tempo di consegna desiderato

---

## Sezione 2.2: Mezzi di Trasmissione Guidati

**14. Descrivi il principio di funzionamento del doppino intrecciato (twisted pair). Perché i conduttori vengono attorcigliati?**

**Principio di funzionamento**: il doppino intrecciato è costituito da una coppia di conduttori in rame, ciascuno ricoperto da una guaina isolante, tra loro intrecciati. Un conduttore trasporta il segnale, l'altro funge da riferimento di massa. Il ricevitore utilizza la **differenza di segnale** tra i due conduttori (segnale differenziale).

**Perché vengono attorcigliati?** Per ridurre la **diafonia** (interferenza elettromagnetica che si genera tra due cavi vicini quando in uno di essi passa corrente, generando scambio di energia da una linea all'altra). Nella prima torsione un conduttore è vicino alla sorgente di rumore e l'altro è lontano; nella torsione successiva avviene il contrario, e il rumore risultante si cancella parzialmente.

La qualità del segnale dipende dal **numero di torsioni per unità di lunghezza**.

---

**15. Quali sono le differenze principali tra cavo UTP e STP in termini di schermatura, vantaggi e svantaggi?**

| Caratteristica | UTP (Unshielded Twisted Pair) | STP (Shielded Twisted Pair) |
|----------------|-------------------------------|-------------------------------|
| **Schermatura** | Nessuna schermatura aggiuntiva | Rivestimento protettivo (maglia di rame intrecciata) |
| **Vantaggi** | Flessibile, economico, facile da installare | Maggiore larghezza di banda; protegge da interferenze elettromagnetiche; adatto a lunghe distanze in ambienti rumorosi |
| **Svantaggi** | Larghezza di banda limitata; efficace solo per distanze ≤ 100 m | Costoso, più difficile da installare, manutenzione costosa |

---

**16. Elenca le categorie di cavo Ethernet più comuni (Cat5e, Cat6, Cat7, Cat8) specificando per ciascuna la velocità massima tipica e un utilizzo consigliato.**

| Categoria | Velocità massima tipica | Distanza | Utilizzo consigliato |
|-----------|------------------------|----------|---------------------|
| **Cat5e** | 100 Mbps (Fast Ethernet) | 100 m | Reti sub-Gigabit, nuove installazioni economiche |
| **Cat6** | 1 Gbps su 100 m; 10 Gbps su 35 m | 100 m (1 Gbps) | Reti Gigabit Ethernet standard |
| **Cat6a** | 10 Gbps | 100 m | Reti 10 Gigabit su lunghe distanze |
| **Cat7** | 10 Gbps | 100 m | Standard proprietario (non IEEE/EIA); connettori GG45 |
| **Cat7a** | 40 Gbps su 50 m; 100 Gbps su 15 m | 50/15 m | Per prestazioni estreme (proprietario) |
| **Cat8** | 40 Gbps | 30 m | Comunicazioni switch-to-switch in data center (25GBase-T, 40GBase-T) |

**Nota**: Cat5, Cat3, Cat4 sono obsoleti (max 10-16 Mbps). Cat7/Cat7a hanno scarso supporto IEEE/EIA.

---

**17. Quale connettore è standard per i cavi Ethernet in rame? Che differenza c'è tra RJ45 e 8P8C?**

Il connettore standard per i cavi Ethernet in rame è il **RJ45** (che è un tipo specifico di connettore **8P8C**).

**Differenza**:
- **8P8C** (Eight Position, Eight Contact): categoria più ampia di connettori con 8 posizioni e 8 contatti
- **RJ45** (Registered Jack 45): è l'esempio più comune di connettore 8p8c, standardizzato per Ethernet

I termini sono spesso usati in modo intercambiabile, ma tecnicamente RJ45 è un sottotipo di 8P8C.

**Standard di cablaggio**: T568A (più comune, richiesto da contratti federali USA) e T568B (differisce nell'assegnazione dei pin per le coppie verde e arancione). Entrambe le estremità devono usare lo stesso standard.

---

**18. Spiega la struttura del cavo coassiale. Quali sono i connettori più comuni (es. BNC)?**

**Struttura del cavo coassiale** (dall'esterno verso l'interno):
1. Guaina di plastica esterna (isolamento)
2. Strato di conduttore metallico (schermatura)
3. Due strati di materiale isolante (separati dal conduttore metallico)
4. Anima metallica centrale (solitamente in rame)

**Caratteristiche**: porta segnali a frequenze più alte del doppino; il segnale degrada più velocemente con la distanza.

**Connettori più comuni**:
- **BNC** (Bayonet Neill-Concelman): il più comune oggi; si inserisce e si blocca con mezzo giro a baionetta
- **Connettore a barilotto/botte** (a vite)
- **Connettore push-on** (senza bloccaggio, meno sicuro)

**Classificazioni RG** (Radio Government): RG-8, RG-9, RG-11 (thick Ethernet), RG-58 (thin Ethernet).

---

**19. Descrivi il principio di funzionamento della fibra ottica basato sulla riflessione interna totale.**

**Principio**: la luce che attraversa la fibra viene riflessa all'interno fino all'altra estremità. Ciò avviene perché il **core** (nucleo di vetro) ha un indice di rifrazione più alto rispetto al **cladding** (guaina di vetro che lo avvolge). Quando un raggio luminoso colpisce l'interfaccia core-cladding con un'angolazione appropriata (> angolo critico), viene **totalmente riflesso** all'interno del core.

**Convenzione di codifica**: impulso di luce = 1; assenza di luce = 0.

**Velocità**: circa quella della luce. Il limite di banda non è dovuto alla velocità di trasmissione ma alla **decodifica** del segnale luminoso in impulso elettrico.

---

**20. Distingui la fibra monomodale dalla fibra multimodale in termini di struttura, propagazione della luce e tipica applicazione.**

| Caratteristica | Fibra multimodale | Fibra monomodale |
|----------------|-------------------|------------------|
| **Diametro del core** | Maggiore (decine di micron) | Molto piccolo (pochi micron) |
| **Propagazione** | Più raggi (modi) con angoli di riflessione diversi | Un solo raggio in linea retta (guida d'onda) |
| **Attenuazione** | Maggiore | Minore (fino a 50 Gbps per 100 km) |
| **Tolleranza** | Più tollerante (allineamento meno critico) | Richiede allineamento di precisione (< micron) |
| **Applicazione tipica** | Reti LAN a corta/media distanza | Lunghe distanze (WAN, backbone) |

---

**21. Quali sono i principali vantaggi della fibra ottica rispetto al cavo in rame? E quali i principali svantaggi?**

**Vantaggi**:
- Maggiore ampiezza di banda
- Non influenzata da sorgenti elettriche (interferenze EMI)
- Non influenzata da campi magnetici
- Molto più leggera
- Non disperde la luce (minore attenuazione)
- Maggiore sicurezza (difficile intercettare i dati)
- Nessun rischio di scariche elettriche

**Svantaggi**:
- Tecnologia relativamente nuova e ancora in evoluzione
- Grossi costi di manutenzione
- Connettori e splicing più delicati e costosi
- Richiede competenze specializzate per l'installazione

---

**22. Nomina almeno tre tipi di connettori per fibra ottica (es. FC, ST, SC, LC) indicando una caratteristica distintiva di ciascuno.**

| Connettore | Caratteristica distintiva |
|------------|---------------------------|
| **FC** (Ferrule Connector) | Primo connettore con ghiera in ceramica; blocco a vite; ancora preferito in ambienti con vibrazioni elevate |
| **ST** (Straight Tip) | Connettore twist-lock a baionetta; economico e facile da installare; un tempo il più comune; ancora usato in ambito industriale/militare |
| **SC** (Subscriber Connector) | Meccanismo push-pull a scatto (simile a RJ45); affidabile e durevole (1.000 cicli); usato in configurazioni simplex/duplex |
| **LC** (Lucent Connector) | Dimensioni ridotte (50% ingombro in meno rispetto a SC); blocco sicuro; ampiamente usato in data center e telecomunicazioni |

---

**23. Cosa sono le "onde convogliate" (Power Line Communication)? In quali contesti vengono utilizzate?**

Le **onde convogliate** (Power Line Communication, PLC) sfruttano i **cavi conduttori in rame della rete di alimentazione elettrica** come mezzo trasmissivo per i dati, evitando così un cablaggio aggiuntivo.

**Tecnica**: si sovrappone un segnale ad alta frequenza (opportunamente modulato) alla corrente elettrica già circolante a bassa frequenza. Un sistema dedicato filtra e separa le frequenze utilizzate per la trasmissione delle informazioni.

**Contesti d'uso**:
- Telelettura dei contatori di corrente elettrica (smart meters)
- Scambio di informazioni tra treni in marcia
- LAN in edifici con difficile ricablatura
- Domotica (controllo di elettrodomestici tramite rete elettrica domestica)

---

## Sezione 2.3: Mezzi di Trasmissione Wireless

**24. Quali sono le tre macro-tipologie di segnali wireless menzionate nel testo? Per ciascuna, indica una caratteristica principale.**

| Tipo di segnale | Caratteristica principale |
|----------------|---------------------------|
| **Onde Radio** | Frequenze molto basse-medie seguono la curvatura della Terra; frequenze alte-altissime vengono riflesse dalla ionosfera; attraversano l'aria facilmente; non dannose per il corpo umano |
| **Microonde** | Frequenze 1-300 GHz; richiedono linea di vista (LoS) per alcune tecnologie (>3 GHz); assorbite da corpi "molli" (riscaldamento); usate per telefonia mobile, satelliti, WiFi |
| **Infrarossi** | Usati per comunicazioni di prossimità (telecomandi); assorbiti da qualsiasi ostacolo (non穿透ono pareti) |

---

**25. Cosa si intende per banda ISM? Fornisci almeno due esempi di frequenze ISM e un dispositivo che le utilizza.**

**Banda ISM** (Industrial, Scientific and Medical): è una banda di frequenze riservata dall'ITU (Unione Internazionale delle Telecomunicazioni) per trasmissioni radio per uso industriale, scientifico e medico. Queste frequenze **non sono soggette a licenza** e il loro uso è libero, purché si rispettino i limiti di potenza.

**Esempi di frequenze ISM**:

| Frequenza | Larghezza di banda | Dispositivi tipici |
|-----------|-------------------|-------------------|
| 2,4 GHz | 100 MHz | WiFi (IEEE 802.11b/g/n/ax), Bluetooth, forni a microonde, telefoni cordless |
| 5,735 - 5,875 GHz | 150 MHz | WiFi (IEEE 802.11a/h/j/n/ac/ax) |
| 902 - 928 MHz | 26 MHz | Radioamatori, alcuni dispositivi industriali |
| 24,0 - 24,25 GHz | 250 MHz | Applicazioni radar e sensori |

---

**26. Quali sono i principali fattori che limitano la copertura e l'affidabilità delle comunicazioni wireless?**

1. **Area di copertura**: le tecnologie wireless funzionano bene in ambienti aperti, ma materiali da costruzione (cemento, metallo), strutture e orografia del terreno ne limitano la copertura effettiva. È sempre una sfida capire la qualità del segnale nelle zone coperte.

2. **Interferenza**: il wireless è suscettibile a interferenze da dispositivi comuni che operano sulle stesse frequenze (telefoni cordless domestici, luci fluorescenti, forni a microonde, altri standard wireless come Bluetooth).

3. **Sicurezza**: viaggiando nell'aria, le informazioni trasmesse in wireless possono essere intercettate da dispositivi e utenti non autorizzati. La sicurezza della rete è una componente fondamentale dell'amministrazione della rete wireless.

---

**27. Perché la sicurezza è una preoccupazione particolare nelle reti wireless rispetto a quelle cablate?**

Nelle reti **cablate** (es. fibra ottica, doppino), l'accesso fisico al mezzo trasmissivo è limitato: per intercettare i dati è necessario accedere fisicamente al cavo, tagliarlo o installare una derivazione (operazione facilmente rilevabile).

Nelle reti **wireless**, i segnali si propagano nell'aria e possono essere ricevuti da **qualsiasi dispositivo nelle vicinanze** che sintonizzi sulla frequenza corretta, senza bisogno di accesso fisico. Questo rende l'intercettazione (eavesdropping) molto più facile e difficile da rilevare.

Per questo motivo, le reti wireless richiedono protocolli di crittografia e autenticazione robusti (es. WPA2/WPA3, 802.1X) per proteggere i dati trasmessi.

---

## Sezione 2.3.1: Reti Satellitari

**28. Descrivi le tre categorie di satelliti in base all'orbita (GEO, MEO, LEO), specificando per ciascuna l'altitudine tipica e un'applicazione d'esempio.**

| Categoria | Altitudine | Periodo orbitale | Applicazione | Note |
|-----------|------------|------------------|--------------|------|
| **GEO** (Geostazionario) | ~36.000 km | 24 ore (stessa rotazione Terra) | Telecomunicazioni, TV satellitare, meteo | Antenne a terra fisse; servono almeno 3 satelliti per coprire il globo |
| **MEO** (Medium Earth Orbit) | Tra le due fasce di Van Allen (≈ 10.000-20.000 km) | Variabile (es. 12 ore) | **GPS**, navigazione | Utilizzano triangolazione dei dati |
| **LEO** (Low Earth Orbit) | 500 - 2.000 km | 90-120 minuti | **Costellazioni**: Iridium, Globalstar, **Starlink** (SpaceX) | Satelliti molto numerosi; ogni satellite funziona come uno switch; comunicazione intersatellitare (CIS) |

---

**29. Perché i satelliti GEO vengono definiti "geostazionari"? Quanti ne servono almeno per coprire l'intero globo?**

**Geostazionari**: i satelliti GEO orbitano alla **stessa velocità angolare di rotazione della Terra** (periodo di 24 ore). Di conseguenza, appaiono **fissi nel cielo** rispetto a un punto sulla superficie terrestre. Questo permette alle antenne a terra di essere puntate permanentemente verso il satellite senza bisogno di inseguimento.

**Copertura globale**: servono **almeno 3 satelliti GEO** posizionati a distanze angolari appropriate (circa 120° l'uno dall'altro) per coprire l'intero globo terrestre, escludendo le regioni polari (che rimangono scoperte).

**Perché proprio 36.000 km?** La distanza di circa 35.786 km dall'equatore è quella in cui il periodo orbitale (determinato dalla legge di Keplero) eguaglia esattamente il periodo di rotazione terrestre.

---

**30. Quali sono i punti di forza della fibra ottica rispetto ai satelliti e viceversa? In quali contesti le due tecnologie sono complementari?**

| Aspetto | Fibra ottica | Satelliti |
|---------|-------------|-----------|
| **Larghezza di banda** | 💪 Molto alta (vantaggio per link punto-punto) | Limitata, condivisa tra molti utenti |
| **Latenza** | 💪 Bassa | Alta (GEO: ~250 ms RTT; LEO: migliore ma comunque > fibra) |
| **Copertura geografica** | Limitata a dove è stata posata | 💪 Globale, anche aree remote (montagne, oceani, deserti, polo) |
| **Broadcast/multicast** | Inefficiente (consuma molta banda) | 💪 Naturale: un segnale può raggiungere milioni di ricevitori |
| **Installazione** | Costosa e lenta (scavo, posa) | 💪 Rapida (basta installare una parabola) |
| **Affidabilità fisica** | Vulnerabile a scavi, terremoti, incidenti | 💪 Immune a problemi del terreno |

**Complementarietà**: fibra e satellite sono spesso usati insieme. Esempio: un provider può usare fibra per backbone urbano e satellite per raggiungere utenti in zone rurali/montane dove la fibra non arriva o avrebbe costi proibitivi a causa dell'orografia del terreno.

---

**31. Cosa si intende per "costellazione" di satelliti LEO? Come comunicano tra loro i satelliti in questo tipo di rete?**

**Costellazione LEO**: insieme di **molti satelliti** (da decine a migliaia) che orbitano a bassa quota (500-2000 km) in modo coordinato, formando una trama fitta che copre l'intera superficie terrestre. Esempi: Iridium (77 satelliti previsti, da cui il nome), Globalstar, Starlink (migliaia di satelliti).

**Comunicazione tra satelliti LEO**:
- **Collegamenti intersatellitari (CIS - Crosslink Inter-Satellite)** : satelliti vicini tra loro comunicano direttamente nello spazio, senza passare attraverso stazioni a terra. Questo permette di instradare i dati attraverso la costellazione (routing spaziale), riducendo la dipendenza da gateway terrestri.
- Oltre ai CIS, ogni satellite può comunicare con:
  - **Terminali utente** (antenne a terra)
  - **Gateway** (stazioni terrestri collegate a Internet via fibra)

La costellazione forma di fatto una **rete mesh nello spazio** che estende la connettività Internet a livello globale.

---

### Tabella Riassuntiva (Figura 2.12) - Domanda 32

**Completa la seguente tabella comparativa:**

| Mezzo di trasmissione | Attenuazione | Interferenze EMI | Sicurezza | Costo |
|----------------------|--------------|------------------|-----------|-------|
| **UTP** (Doppino non schermato) | **Alta** | **Alta** | **Bassa** | **Basso** |
| **STP** (Doppino schermato) | Alta | Moderata | Bassa | Moderato |
| **Cavo coassiale** | Moderata | Moderata | Bassa | Moderato |
| **Fibra ottica** | **Bassa** | **Bassa** | **Alta** | **Alto** |

**Risposte alla domanda specifica**:
- Quale mezzo guidato ha la maggiore attenuazione? → **UTP**
- Quale mezzo offre la migliore sicurezza intrinseca? → **Fibra ottica** (difficile intercettare senza essere rilevati)
- Quale mezzo guidato è generalmente il più economico? → **UTP**
- Quale mezzo wireless ha generalmente il costo più elevato? → **Satellite**