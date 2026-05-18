import readline from "readline";

// ======================================================
// COLORI ANSI
// ======================================================

const C = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",

    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

function color(t, c) {
    return c + t + C.reset;
}

// ======================================================
// CONFIG
// ======================================================

const CONFIG = {
    packetLossProbability: 0.2,
    mtu: 80,
    animationSpeed: 15,
    congestionWindow: 3
};

// ======================================================
// UTILS
// ======================================================

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function separator() {
    console.log(color("\n====================================================\n", C.yellow));
}

async function animate(text, speed = CONFIG.animationSpeed) {

    for (let i = 0; i < text.length; i++) {

        process.stdout.write(text[i]);

        await wait(speed);
    }

    process.stdout.write("\n");
}

function binary(str) {

    return str
        .split("")
        .map(c =>
            c.charCodeAt(0)
                .toString(2)
                .padStart(8, "0")
        )
        .join(" ");
}

function packetLost() {
    return Math.random() < CONFIG.packetLossProbability;
}

// ======================================================
// TOPOLOGIA
// ======================================================

const NETWORK = {
    nodeA: {
        ip: "192.168.1.10",
        mac: "AA:AA:AA:AA:AA:AA"
    },

    router: {
        ip: "192.168.1.1",
        mac: "BB:BB:BB:BB:BB:BB"
    },

    switch: {
        macTable: {}
    },

    nodeB: {
        ip: "192.168.1.20",
        mac: "CC:CC:CC:CC:CC:CC"
    }
};

// ======================================================
// DISPLAY RETE
// ======================================================

async function drawNetwork() {

    console.clear();

    console.log(color(`

                INTERNET
                    |
            ┌───────┴───────┐
            │    ROUTER     │
            └───────┬───────┘
                    |
             ┌──────┴──────┐
             │    SWITCH   │
             └───┬────┬────┘
                 │    │
            ┌────┘    └────┐
         ┌───────┐     ┌───────┐
         │ NODE A│     │ NODE B│
         └───────┘     └───────┘

`, C.cyan));

    await wait(1000);
}

// ======================================================
// DNS
// ======================================================

async function dnsLookup(host) {

    separator();

    console.log(color("DNS", C.magenta));

    await animate(`Query DNS per ${host}`);

    await wait(800);

    console.log(color(`Risposta DNS: ${NETWORK.nodeB.ip}`, C.green));

    return NETWORK.nodeB.ip;
}

// ======================================================
// DHCP
// ======================================================

async function dhcp() {

    separator();

    console.log(color("DHCP", C.yellow));

    await animate("DHCP DISCOVER");
    await wait(500);

    await animate("DHCP OFFER");
    await wait(500);

    await animate("DHCP REQUEST");
    await wait(500);

    await animate("DHCP ACK");

    console.log(color(`
IP assegnato a Node A:
${NETWORK.nodeA.ip}
`, C.green));
}

// ======================================================
// ARP
// ======================================================

async function arp(ip) {

    separator();

    console.log(color("ARP", C.blue));

    await animate(`Who has ${ip}?`);

    await wait(1000);

    console.log(color(`ARP Reply: ${NETWORK.nodeB.mac}`, C.green));

    return NETWORK.nodeB.mac;
}

// ======================================================
// TCP HANDSHAKE
// ======================================================

async function handshake() {

    separator();

    console.log(color("TCP HANDSHAKE", C.cyan));

    await animate("A -> SYN");
    await wait(500);

    await animate("B -> SYN ACK");
    await wait(500);

    await animate("A -> ACK");

    console.log(color("\nCONNESSIONE STABILITA", C.green));
}

// ======================================================
// TLS
// ======================================================

async function tlsHandshake() {

    separator();

    console.log(color("TLS HANDSHAKE", C.magenta));

    await animate("Client Hello");
    await wait(500);

    await animate("Server Hello");
    await wait(500);

    await animate("Certificate Exchange");
    await wait(500);

    await animate("Key Exchange");
    await wait(500);

    await animate("Secure Channel Established");

    console.log(color("\nTLS ATTIVO", C.green));
}

// ======================================================
// APPLICAZIONE
// ======================================================

async function applicationLayer(message) {

    separator();

    console.log(color("APPLICATION LAYER", C.green));

    const app = {
        protocol: "HTTPS",
        payload: message
    };

    console.log(app);

    await wait(1000);

    return app;
}

// ======================================================
// TCP
// ======================================================

async function transportLayer(data) {

    separator();

    console.log(color("TCP LAYER", C.cyan));

    const tcp = {
        srcPort: 5000,
        dstPort: 443,
        seq: rand(1000, 9999),
        ack: 0,
        flags: ["PSH", "ACK"],
        window: CONFIG.congestionWindow,
        payload: data
    };

    console.log(tcp);

    await wait(1000);

    return tcp;
}

// ======================================================
// UDP MODE
// ======================================================

async function udpTransport(data) {

    separator();

    console.log(color("UDP LAYER", C.yellow));

    const udp = {
        srcPort: 4000,
        dstPort: 53,
        length: JSON.stringify(data).length,
        payload: data
    };

    console.log(udp);

    await wait(1000);

    return udp;
}

// ======================================================
// ICMP
// ======================================================

async function ping() {

    separator();

    console.log(color("ICMP PING", C.magenta));

    await animate("PING 192.168.1.20");

    await wait(1000);

    console.log(color("Reply from 192.168.1.20 time=12ms", C.green));
}

// ======================================================
// IP + FRAMMENTAZIONE
// ======================================================

async function internetLayer(segment) {

    separator();

    console.log(color("IP LAYER", C.magenta));

    const raw = JSON.stringify(segment);

    let fragments = [];

    for (let i = 0; i < raw.length; i += CONFIG.mtu) {

        fragments.push({
            version: 4,
            ttl: 64,
            protocol: "TCP",
            srcIP: NETWORK.nodeA.ip,
            dstIP: NETWORK.nodeB.ip,
            offset: i,
            moreFragments: i + CONFIG.mtu < raw.length,
            payload: raw.slice(i, i + CONFIG.mtu)
        });
    }

    console.log(color(`
Frammenti creati: ${fragments.length}
`, C.yellow));

    fragments.forEach(f => console.log(f));

    await wait(1000);

    return fragments;
}

// ======================================================
// SWITCH
// ======================================================

async function switchForward(frames) {

    separator();

    console.log(color("SWITCH", C.white));

    for (let frame of frames) {

        NETWORK.switch.macTable[frame.srcMAC] = "PORT-1";

        console.log(color(`
MAC TABLE:
`, C.cyan));

        console.table(NETWORK.switch.macTable);

        await animate("Switch forwarding frame...");

        await wait(500);
    }
}

// ======================================================
// ROUTER
// ======================================================

async function router(frames) {

    separator();

    console.log(color("ROUTER", C.white));

    for (let i = 0; i < frames.length; i++) {

        console.log(color(`
Routing frame ${i + 1}
`, C.white));

        await wait(500);

        if (packetLost()) {

            console.log(color("PACCHETTO PERSO", C.red));

            console.log(color("TCP RETRANSMISSION", C.yellow));

            await wait(1000);

            console.log(color("FRAME RITRASMESSO", C.green));
        }

        console.log(color("TTL decrementato", C.cyan));

        await wait(500);
    }
}

// ======================================================
// ETHERNET
// ======================================================

async function ethernetLayer(fragments, dstMAC) {

    separator();

    console.log(color("ETHERNET", C.blue));

    const frames = fragments.map(f => ({

        preamble: "10101010",
        srcMAC: NETWORK.nodeA.mac,
        dstMAC,
        etherType: "IPv4",
        crc: "0xABCD",
        payload: f
    }));

    frames.forEach(f => console.log(f));

    await wait(1000);

    return frames;
}

// ======================================================
// FISICO
// ======================================================

async function physicalLayer(frames) {

    separator();

    console.log(color("PHYSICAL LAYER", C.red));

    for (let i = 0; i < frames.length; i++) {

        console.log(color(`
Trasmissione bit frame ${i + 1}
`, C.yellow));

        const bits = binary(JSON.stringify(frames[i]));

        await animate(bits.substring(0, 400) + " ...", 1);

        await wait(300);
    }
}

// ======================================================
// CSMA/CD
// ======================================================

async function csmaCd() {

    separator();

    console.log(color("CSMA/CD", C.yellow));

    await animate("Carrier sensing...");

    await wait(500);

    if (Math.random() < 0.3) {

        console.log(color("COLLISION DETECTED!", C.red));

        await animate("Jam signal");

        await wait(500);

        await animate("Backoff...");

        await wait(1000);

        console.log(color("Retry transmission", C.green));
    }
    else {

        console.log(color("Medium free", C.green));
    }
}

// ======================================================
// DECAPSULAMENTO
// ======================================================

async function decapsulation(frames) {

    separator();

    console.log(color("DECAPSULAMENTO", C.green));

    await wait(1000);

    console.log(color("ETHERNET -> IP", C.blue));

    await wait(1000);

    const raw = frames
        .map(f => f.payload.payload)
        .join("");

    console.log(color("Riassemblaggio IP completato", C.magenta));

    await wait(1000);

    const tcp = JSON.parse(raw);

    console.log(color("IP -> TCP", C.cyan));

    console.log(tcp);

    await wait(1000);

    console.log(color("TCP -> APPLICATION", C.yellow));

    console.log(tcp.payload);

    await wait(1000);

    console.log(color(`
MESSAGGIO FINALE:
"${tcp.payload.payload}"
`, C.green));
}

// ======================================================
// TCP CLOSE
// ======================================================

async function closeConnection() {

    separator();

    console.log(color("TCP CONNECTION CLOSE", C.red));

    await animate("FIN");
    await wait(500);

    await animate("ACK");
    await wait(500);

    await animate("FIN");
    await wait(500);

    await animate("ACK");

    console.log(color("\nCONNESSIONE CHIUSA", C.green));
}

// ======================================================
// MENU
// ======================================================

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(q) {
    return new Promise(r => rl.question(q, r));
}

// ======================================================
// SIMULAZIONE
// ======================================================

async function simulate() {

    await drawNetwork();

    console.log(color(`
1) TCP HTTPS
2) UDP DNS
3) ICMP Ping
`, C.yellow));

    const mode = await ask("Seleziona modalità: ");

    if (mode === "3") {

        await ping();

        rl.close();

        return;
    }

    await dhcp();

    const ip = await dnsLookup("server.local");

    const mac = await arp(ip);

    const msg = await ask("\nMessaggio da inviare: ");

    await csmaCd();

    let transport;

    if (mode === "2") {

        transport = await udpTransport({
            protocol: "DNS",
            payload: msg
        });
    }
    else {

        await handshake();

        await tlsHandshake();

        transport = await transportLayer(
            await applicationLayer(msg)
        );
    }

    const fragments = await internetLayer(transport);

    const frames = await ethernetLayer(fragments, mac);

    await switchForward(frames);

    await physicalLayer(frames);

    await router(frames);

    await decapsulation(frames);

    if (mode === "1") {
        await closeConnection();
    }

    separator();

    console.log(color(`
SIMULAZIONE COMPLETATA
`, C.green));

    rl.close();
}

// ======================================================
// START
// ======================================================

console.clear();

console.log(color(`

╔════════════════════════════════════════════╗
║                                            ║
║        ADVANCED TCP/IP SIMULATOR           ║
║                                            ║
║   DHCP | DNS | ARP | TCP | UDP | TLS       ║
║   ICMP | CSMA/CD | SWITCH | ROUTER         ║
║   FRAGMENTATION | RETRANSMISSION           ║
║                                            ║
╚════════════════════════════════════════════╝

`, C.bright));

simulate();