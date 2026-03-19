# Livello Rete

## Indirizzamento IP
Un indirizzo ipv4 è riportato usualmente così:

208.67.220.220

Cioè formato da 4 numeri decimali separati da punti. Internamento gli indirizzi IP sono memorizzati in binario:

11010000.01000011.11011100.11011100

Il numero totale di ipv4 esistenti è 2^32, ossia 4 miliardi e 300 milioni circa, ma quelli realmente utilizzabili sono un po' meno in quanto alcuni di essi sono riservati (come 0.0.0.0, 127.0.0.1, 255.255.255.255, la classe 192.168.0.1/16).

## Sistema Classful
Originariamente lo schema per individuare un ipv4 era a classi, con questo schema l'indirizzo è ad autoidentificazione: per capire la classe bastava identificare i primi 4 bit dell'IP (i più significativi).

Così si formavano cinque classi (A,B,C,D,E) e in ciascuna classe, ogni indirizzo era diviso in due campi:
    * Net ID: indirizzo che identifica la rete su cui si trova il computer e che costituisce un prefisso
    * Host ID: che identifica il computer all'interno della rete e che costituisce una specie di suffisso