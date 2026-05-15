import readline from "node:readline";

// ======================================================
// READLINE
// ======================================================

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(q) {
    return new Promise(r => rl.question(q, r));
}

// ======================================================
// UI HELPERS
// ======================================================

const WIDTH = 100;

function line(char = "=") {
    console.log(char.repeat(WIDTH));
}

function title(text) {
    console.log("\n");
    line("=");
    console.log(center(text.toUpperCase()));
    line("=");
}

function section(text) {
    console.log("\n");
    line("-");
    console.log(center(text));
    line("-");
}

function center(text) {
    const padding = Math.floor((WIDTH - text.length) / 2);

    return " ".repeat(Math.max(0, padding)) + text;
}

function pretty(obj) {
    console.dir(obj, {
        depth: null,
        colors: true
    });
}

function hex(buffer) {

    let out = "";

    for (let i = 0; i < buffer.length; i++) {

        out += buffer[i]
            .toString(16)
            .padStart(2, "0")
            .toUpperCase();

        out += " ";

        if ((i + 1) % 16 === 0) {
            out += "\n";
        }
    }

    return out;
}

function bits(buffer) {

    return [...buffer]
        .map(b => b.toString(2).padStart(8, "0"))
        .join(" ");
}

// ======================================================
// NETWORK HELPERS
// ======================================================

function ipToBuffer(ip) {
    return Buffer.from(ip.split(".").map(Number));
}

function macToBuffer(mac) {
    return Buffer.from(
        mac.split(":").map(x => parseInt(x, 16))
    );
}

function checksum16(buffer) {

    let sum = 0;

    for (let i = 0; i < buffer.length; i += 2) {

        const word = buffer.readUInt16BE(i, true);

        sum += word;

        while (sum > 0xffff) {
            sum = (sum & 0xffff) + (sum >> 16);
        }
    }

    return (~sum) & 0xffff;
}

function bufferFromBits(bitsString) {

    const bytes = bitsString.match(/.{1,8}/g);

    return Buffer.from(
        bytes.map(b => parseInt(b, 2))
    );
}

// ======================================================
// JSON SIMULATION
// ======================================================

function jsonSimulation(message) {

    title("JSON SIMULATION");

    // ==================================================
    // APPLICATION
    // ==================================================

    section("APPLICATION LAYER");

    const http = {
        headers: {
            method: "POST",
            host: "server.local",
            contentType: "text/plain",
            contentLength: message.length
        },
        payload: {
            data: message
        }
    };

    pretty(http);

    // ==================================================
    // TCP
    // ==================================================

    section("TRANSPORT LAYER (TCP)");

    const tcp = {
        srcPort: 5000,
        dstPort: 443,
        seq: 1000,
        ack: 0,
        flags: ["PSH", "ACK"],
        payload: http
    };

    pretty(tcp);

    // ==================================================
    // IP
    // ==================================================

    section("NETWORK LAYER (IPv4)");

    const ipv4 = {
        srcIP: "192.168.1.10",
        dstIP: "192.168.1.20",
        ttl: 64,
        protocol: "TCP",
        payload: tcp
    };

    pretty(ipv4);

    // ==================================================
    // ETHERNET
    // ==================================================

    section("DATALINK LAYER (ETHERNET)");

    const ethernet = {
        srcMAC: "00:11:22:33:44:55",
        dstMAC: "66:77:88:99:AA:BB",
        etherType: "IPv4",
        payload: ipv4,
        crc: "0xDEADBEEF"
    };

    pretty(ethernet);

    // ==================================================
    // PHYSICAL
    // ==================================================

    section("PHYSICAL LAYER (BITS)");

    const jsonText = JSON.stringify(ethernet);

    const bitsString = bits(
        Buffer.from(jsonText, "utf8")
    );

    console.log(bitsString.slice(0, 800) + " ...");

    // ==================================================
    // REBUILD
    // ==================================================

    title("JSON RECONSTRUCTION");

    const rebuiltBuffer = bufferFromBits(
        bitsString.replaceAll(" ", "")
    );

    const rebuilt = JSON.parse(
        rebuiltBuffer.toString("utf8")
    );

    section("REBUILT OBJECT");

    pretty(rebuilt);

    section("FINAL MESSAGE");

    console.log(
        rebuilt
            .payload
            .payload
            .payload
            .payload
            .data
    );
}

// ======================================================
// BYTE SIMULATION
// ======================================================

// ------------------------------------------------------
// HTTP
// ------------------------------------------------------

function buildHTTP(message) {

    const request =
`POST / HTTP/1.1\r
Host: server.local\r
Content-Type: text/plain\r
Content-Length: ${message.length}\r
\r
${message}`;

    return Buffer.from(request, "utf8");
}

// ------------------------------------------------------
// TCP
// ------------------------------------------------------

function buildTCP(payload) {

    const header = Buffer.alloc(20);

    header.writeUInt16BE(5000, 0);

    header.writeUInt16BE(443, 2);

    header.writeUInt32BE(1000, 4);

    header.writeUInt32BE(0, 8);

    header[12] = 0x50;

    header[13] = 0x18;

    header.writeUInt16BE(65535, 14);

    header.writeUInt16BE(0, 16);

    header.writeUInt16BE(0, 18);

    return Buffer.concat([header, payload]);
}

function parseTCP(segment) {

    return {
        payload: segment.subarray(20)
    };
}

// ------------------------------------------------------
// IPv4
// ------------------------------------------------------

function buildIPv4(payload) {

    const header = Buffer.alloc(20);

    header[0] = 0x45;

    header[1] = 0x00;

    header.writeUInt16BE(20 + payload.length, 2);

    header.writeUInt16BE(0xabcd, 4);

    header.writeUInt16BE(0x0000, 6);

    header[8] = 64;

    header[9] = 6;

    ipToBuffer("192.168.1.10").copy(header, 12);

    ipToBuffer("192.168.1.20").copy(header, 16);

    const checksum = checksum16(header);

    header.writeUInt16BE(checksum, 10);

    return Buffer.concat([header, payload]);
}

function parseIPv4(packet) {

    const ihl = (packet[0] & 0x0f) * 4;

    return {
        payload: packet.subarray(ihl)
    };
}

// ------------------------------------------------------
// ETHERNET
// ------------------------------------------------------

function buildEthernet(payload) {

    const header = Buffer.alloc(14);

    macToBuffer("66:77:88:99:AA:BB").copy(header, 0);

    macToBuffer("00:11:22:33:44:55").copy(header, 6);

    header.writeUInt16BE(0x0800, 12);

    const crc = Buffer.from([0xde, 0xad, 0xbe, 0xef]);

    return Buffer.concat([
        header,
        payload,
        crc
    ]);
}

function parseEthernet(frame) {

    return {
        payload: frame.subarray(14, frame.length - 4)
    };
}

// ======================================================
// BYTE SIMULATION
// ======================================================

function byteSimulation(message) {

    title("REAL BYTE SIMULATION");

    // ==================================================
    // HTTP
    // ==================================================

    section("APPLICATION LAYER (HTTP)");

    const http = buildHTTP(message);

    console.log("\nHTTP RAW TEXT:\n");

    console.log(http.toString());

    console.log("\nHTTP BYTES (HEX):\n");

    console.log(hex(http));

    // ==================================================
    // TCP
    // ==================================================

    section("TRANSPORT LAYER (TCP)");

    const tcp = buildTCP(http);

    console.log(hex(tcp));

    // ==================================================
    // IPv4
    // ==================================================

    section("NETWORK LAYER (IPv4)");

    const ip = buildIPv4(tcp);

    console.log(hex(ip));

    // ==================================================
    // ETHERNET
    // ==================================================

    section("DATALINK LAYER (ETHERNET)");

    const ethernet = buildEthernet(ip);

    console.log(hex(ethernet));

    // ==================================================
    // PHYSICAL
    // ==================================================

    section("PHYSICAL LAYER (BITS)");

    const bitsString = bits(ethernet);

    console.log(bitsString.slice(0, 1200) + " ...");

    // ==================================================
    // RECEIVE
    // ==================================================

    title("BYTE RECONSTRUCTION");

    const rebuiltEthernet = bufferFromBits(
        bitsString.replaceAll(" ", "")
    );

    section("ETHERNET FRAME");

    console.log(hex(rebuiltEthernet));

    const parsedEth = parseEthernet(rebuiltEthernet);

    const parsedIP = parseIPv4(parsedEth.payload);

    const parsedTCP = parseTCP(parsedIP.payload);

    const rebuiltHTTP = parsedTCP.payload.toString("utf8");

    section("REBUILT HTTP");

    console.log(rebuiltHTTP);

    section("FINAL MESSAGE");

    const body = rebuiltHTTP.split("\r\n\r\n")[1];

    console.log(body);
}

// ======================================================
// MAIN
// ======================================================

async function main() {

    title("TCP/IP NETWORK SIMULATOR");

    const message = await ask("\nInserisci un messaggio: ");

    jsonSimulation(message);

    byteSimulation(message);

    rl.close();
}

main();