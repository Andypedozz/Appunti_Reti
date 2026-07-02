
Spazio di indirizzamento IPv4: 2^32

Indirizzo 0: 0.0.0.0
Indirizzo max: 255.255.255.255

Inizialmente gli IP seguivano una divisione classful:

---

### Classe A

* **Primo bit:** `0`
* **Range primo ottetto:** 1 – 126
* **IP esempio:** 83.45.12.23 *(correttamente è Classe A, perché 83 < 128)*
* **Subnet mask di default:** 255.0.0.0
* **Uso:** reti molto grandi (pochi network, moltissimi host)

---

### Classe B

* **Primi bit:** `10`
* **Range primo ottetto:** 128 – 191
* **IP esempio:** 150.45.12.23
* **Subnet mask di default:** 255.255.0.0
* **Uso:** reti medio-grandi

---

### Classe C

* **Primi bit:** `110`
* **Range primo ottetto:** 192 – 223
* **IP esempio:** 192.168.1.10
* **Subnet mask di default:** 255.255.255.0
* **Uso:** reti piccole (pochi host per rete)

---

### Classe D

* **Primi bit:** `1110`
* **Range primo ottetto:** 224 – 239
* **IP esempio:** 224.0.0.1
* **Subnet mask:** non definita (non si usa per host)
* **Uso:** multicast (trasmissione a gruppi di host)

---

### Classe E

* **Primi bit:** `1111`
* **Range primo ottetto:** 240 – 255
* **IP esempio:** 240.0.0.1
* **Subnet mask:** non applicabile
* **Uso:** sperimentale / riservata (uso futuro o ricerca)


## IPv6

Spazio di indirizzamento = 2^128

8 gruppi da 16 bit (4 caratteri hex): xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx

Il network ID è sempre identificato dai primi 64 bit, mentre i restanti identificano gli host.
