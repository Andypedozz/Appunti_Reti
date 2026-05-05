# Sicurezza delle Reti

Nei loro primi decenni le reti erano usate dai ricercatori universitari per inviare mail e dalle aziende per condividere risorse interne. O ggi vengono usate per fare acquisti, home banking, compilare dichiarazioni dei redditi, perciò è diventata fondamentale la questione della sicurezza.

Qui indicheremo i punti critici e discuteremo algoritmi e protocolli che rendono le reti più sicure. La sicurezza copre una moltitudine di problemi.

Nella sua forma più semplice, riguarda:
* evitare accessi non autorizzati in lettura o modifica dei messaggi destinati a terzi
* impedire che certe persone possano accedere a servizi remoti senza autorizzazione
* verificare l'identità dei mittenti e dei messaggi
* impedire l'intercettazione e la ripetizione di messaggi legittimi catturati in rete
+ perseguire chi afferma di non aver mai spedito certi messaggi

## 9.1 Controllo degli accessi
Il controllo degli accessi determina "chi può fare cosa" basandosi su una certa politica. Questo processo è essenziale per limitare l'accesso a un sistema e alle sue risorse in base a criteri che vanno oltre all'identità dell'utente.
Adottare una politica di controllo degli accessi porta benefici come l'attenzione dell'organizzazione sui problemi di sicurezza, un'allocazione migliore dell risorse. Inoltre consente di configurare la sicurezza appropriata per ciascuna risorsa in base a ruolo e importanza, facilitando auditing e testing del sistema.

I diritti di accesso regolano le autorizzazioni degli utenti. Il controllo degli accessi coinvolge 4 elementi principali:
1. I soggetti: utenti e gruppi di utenti
2. gli oggetti: file e risorse come memoria, dispositivi
3. le operazioni
4. un monitor di riferimento che verifica le regole per concedere l'accesso
Un insieme di regole che restringono gli accessi è detto ACL (Access Control List).

Le modalità di accesso possono essere:
* osservare
* alterare
e ci sono 4 diritti di accesso:
* eseguire
* leggere
* aggiungere
* scrivere.
I diritti di accesso sono impostabili individualmente per ogni risorsa e per ciascun utente o gruppo, con diritti degli utenti che prevalgono sui diritti di un gruppo.

Sono state sviluppate diverse tecniche per gestire i diritti di accesso, tra cui matrici di controllo degli accessi, tabelle di capacità, liste di controllo, controllo basato su ruoli, basato su regole, interfacce limitate, e controllo dipendente dal contenuto.

Il concetto di "AAA" è il pilastro della sicurezza, composta da autenticazione, autorizzazione e contabilità.
L'autenticazione conferma l'identità degli utenti remoti, l'autorizzazione assegna diritti differenziati per l'uso dei servizi e la contabilità registra le operazioni di un utente durante l'uso del servizio per tracciare l'uso della rete.

L'autenticazione fa uso di sistemi biometrici, dispositivi di sicurezza a più livelli. Per esempio, un utente può inviare username e password a un server AAA per essere autenticato; se corrette, il server invierà un messaggio di accettazione, altrimenti di rifiuto bloccando l'accesso alla rete.

## 9.2 Crittografia
La crittografia è stata portata avanti storicamente da 4 gruppi di persone:
* militari
* corpo diplomatico
* scrittori di diari
* amanti.

Fra questi, i militari sono stati i più importanti e hanno dato forma alla disciplina.
Nelle operazioni militari i messaggi da cifrare erano assegnati ad addetti di basso livello e bassa paga, che li cifravano e li trasmettevano.
Con l'avvento dei computer, uno dei limiti della crittografia era la capacità degli addetti alla codifica di riuscire a compiere le operazioni necessaria anche sul campo di battaglia. Un vincolo ulteriore era la capacità di cambiare rapidamente da un metodo crittografico a un altro.

Un messaggio da cifrare, detto "testo in chiaro" (plaintext), viene trasformato tramite una funzione parametrizzata da una chiave. L'output, ossia il testo cifrato (ciphertext), viene trasmetto tramite un messaggero o via radio. Al contrario del destinatario, l'intruso non conosce la chiave di decifrazione, perciò non può facilmente leggere il messaggio.

## 9.3 Protocolli di Autenticazione

## 9.4 Certificati Digitali

