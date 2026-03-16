
# Strutture unità informativa dei vari livelli
## Livello Collegamento
### Frame Ethernet
```js
const ethernet =
{
    preambolo: "7 byte",
    delimitatore: "1 byte",
    mac_destinatario: "6 byte",
    mac_mittente: "6 byte",
    lunghezza_o_tipo: "2 byte",
    dati: "46-1500 byte",
    crc: "4 byte",
}
```
Campi:
* **Preambolo**: 7 byte composti da 0 e 1 alternati: permette la sincronizzazione
* **Delimitatore**: 1 byte che delimita inizio e fine frame, ultima possibilità di sincronizzazione, e termina sempre in 11
* **Lunghezza o tipo**: 2 byte che indicano il protocollo di livello superiore trasportato nel campo dati, oppure il numero di byte del campo dati
* **Dati**: i dati provenienti dal livello superiore e vanno da 46 a 1500 byte
* **CRC**: 4 byte, un codice a ridondanza ciclica per il controllo degli errori

### Frame Wi-Fi
```js
const wifi =
{
    durata_o_id: "4 byte",
    indirizzo_da_1_a_4: "6 byte ciascuno",
    sc_sequence_control: "2 byte",
    dati: "lunghezza variabile - dati dai livelli superiori",
    crc: "4 byte - sequenza di rilevamento errori"
    frame_control: {
        versione: "2 bit",
        tipo: "2 bit",
        sottotipo: "4 bit",
        verso_ds: "1 bit",
        da_ds: "1 bit",
        piu_frammenti: "1 bit",
        ritrasmetti: "1 bit",
        power_mgmt: "1 bit",
        piu_dati: "1 bit",
        wep: "1 bit",
        ordine: "1 bit"
    }
}
```

Campi:
* **Durata/ID**: valore indicante il tempo in cui il mezzo è occupato
* **Indirizzo da 1 a 4**: indirizzi MAC. Il significato degli indirizzi dipende dai bit DS nel campo Frame Control
* **Sequence Control**: 2 sottocampi, ovvero Numero di Sequenza (12 bit) e numero di frammento (4 bit).
* **Dati**: campo di lunghezza variabile che contiene i dati provenienti dal livello superiore 
* **CRC**: codice a ridondanza ciclica per controllo errori
* **Frame Control**: 
    * **Versione**: versione corrente del protocollo, per ora fissata a 0
    * **Tipo**: funzione del frame, ad esempio gestione (00), controllo (01), dati (10). 11 è riservato
    * **Sottotipo**: indica il sottotipo del frame come 0000 per richiesta di associazione, 1000 beacon
    * **Verso DS**: a 1 indica che il frame di destinazione è per DS
    * **Da DS**: a 1 indica che il frame proviene da DS
    * **Più frammenti**: impostato a 1 significa che il frame è seguito da altri frammenti
    * **Ritrasmetti**: se impostato a 1 il frame è una ritrasmissione di un frame precendete
    * **Power Mgmt**: se settato a 1 indica che dopo la trasmissione riuscita di un frame, la stazione entra in risparmio energetico, se a 0 rimane attiva
    * **Più dati**: indica che un mittente ha più dati da inviare rispetto al frame corrente. Può essere usato da un AP per indicare a una stazione in risparmio energetico che più pacchetti sono bufferizzati, oppure da una stazione per indicare a un AP dopo che è stato interrogato che è necessario un polling più frequente in quanto la stazione ha più dati pronti per la trasmissione.
    * **WEP**: indica che è applicato il meccanismo di sicurezza standard di 802.11
    * **Ordine**: indica che i frame ricevuti devono essere elaborati in ordine rigoroso.

## Livello Rete
## Livello Trasporto
## Livello Applicazione