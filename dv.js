// ======================================================
// DISTANCE VECTOR SIMULATOR (Terminal Edition)
// Nessuna libreria esterna richiesta
// ======================================================

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const DELAY = 900;
const INF = 999;

// ======================================================
// COLORI ANSI
// ======================================================

const C = {
    reset: "\x1b[0m",

    bright: "\x1b[1m",
    dim: "\x1b[2m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

// ======================================================
// TOPOLOGIA INIZIALE
//
// A ----1---- B ----1---- C
//
// ======================================================

const links = {
    A: { B: 1 },
    B: { A: 1, C: 1 },
    C: { B: 1 }
};

const nodes = {

    A: {
        vector: { A: 0, B: 1, C: 2 },
        nextHop: { A: "-", B: "B", C: "B" }
    },

    B: {
        vector: { A: 1, B: 0, C: 1 },
        nextHop: { A: "A", B: "-", C: "C" }
    },

    C: {
        vector: { A: 2, B: 1, C: 0 },
        nextHop: { A: "B", B: "B", C: "-" }
    }
};

let useProtection = false;

// ======================================================
// EVENT LOGS
// ======================================================

const logs = [];

function addLog(message) {

    logs.unshift(message);

    if (logs.length > 10)
        logs.pop();
}

// ======================================================
// UTILS
// ======================================================

function line(size = 60) {
    return "═".repeat(size);
}

function center(text, width = 58) {

    const left = Math.floor((width - text.length) / 2);

    return " ".repeat(Math.max(left, 0)) + text;
}

function section(title) {

    console.log(
        `${C.cyan}${C.bright}╔${line()}╗${C.reset}`
    );

    console.log(
        `${C.cyan}${C.bright}║${center(title)}║${C.reset}`
    );

    console.log(
        `${C.cyan}${C.bright}╚${line()}╝${C.reset}\n`
    );
}

// ======================================================
// TOPOLOGIA
// ======================================================

function printTopology() {

    const bcAlive = links.B.C !== undefined;

    console.log(`${C.bright}${C.yellow}TOPOLOGIA${C.reset}\n`);

    if (bcAlive) {

        console.log(`
           ${C.green}A${C.reset} ──1── ${C.green}B${C.reset} ──1── ${C.green}C${C.reset}
        `);

    } else {

        console.log(`
           ${C.green}A${C.reset} ──1── ${C.green}B${C.reset} ${C.red}✖${C.reset}  ${C.red}C${C.reset}
        `);
    }

    console.log();
}

// ======================================================
// EVENTI RECENTI
// ======================================================

function printLogs() {

    console.log(`${C.bright}${C.magenta}EVENTI RECENTI${C.reset}\n`);

    if (logs.length === 0) {

        console.log("  Nessun evento\n");
        return;
    }

    for (const log of logs) {
        console.log("  " + log);
    }

    console.log();
}

// ======================================================
// TABELLE ROUTING
// ======================================================

function colorCost(value) {

    if (value >= INF)
        return `${C.red}${C.bright}INF${C.reset}`;

    if (value >= 5)
        return `${C.yellow}${value}${C.reset}`;

    return `${C.green}${value}${C.reset}`;
}

function printNodeTable(nodeName) {

    const node = nodes[nodeName];

    console.log(
        `${C.bright}${C.blue}ROUTER ${nodeName}${C.reset}`
    );

    console.log("┌────────┬────────────┬────────────┐");
    console.log("│ Dest   │ Cost       │ Next Hop   │");
    console.log("├────────┼────────────┼────────────┤");

    for (const dest of Object.keys(node.vector)) {

        const rawCost = node.vector[dest];

        const cost = colorCost(rawCost);

        const hop = node.nextHop[dest];

        const costText =
            rawCost >= INF
                ? "INF"
                : String(rawCost);

        const visibleCost =
            rawCost >= INF
                ? `${C.red}${C.bright}${costText.padEnd(10)}${C.reset}`
                : `${C.green}${costText.padEnd(10)}${C.reset}`;

        console.log(
            `│ ${dest.padEnd(6)} │ ${visibleCost} │ ${hop.padEnd(10)} │`
        );
    }

    console.log("└────────┴────────────┴────────────┘\n");
}

// ======================================================
// LOOP DETECTION
// ======================================================

function detectLoop() {

    if (
        nodes.A.nextHop.C === "B" &&
        nodes.B.nextHop.C === "A"
    ) {

        console.log(
            `${C.red}${C.bright}⚠ ROUTING LOOP DETECTED:${C.reset} A ⇄ B per raggiungere C\n`
        );
    }
}

// ======================================================
// RENDER
// ======================================================

function render(iteration, event = "") {

    section(`DISTANCE VECTOR SIMULATOR — CICLO ${iteration}`);

    printTopology();

    if (event) {

        console.log(
            `${C.cyan}${C.bright}EVENTO:${C.reset} ${event}\n`
        );
    }

    printLogs();

    detectLoop();

    printNodeTable("A");
    printNodeTable("B");
    printNodeTable("C");
}

// ======================================================
// ANIMAZIONE
// ======================================================

async function animate(text) {

    for (let i = 0; i < 3; i++) {

        process.stdout.write(
            `${C.dim}${text}${".".repeat(i + 1)}${C.reset}\r`
        );

        await sleep(250);
    }

    process.stdout.write("\n");
}

// ======================================================
// INVIO DISTANCE VECTOR
// ======================================================

function sendVector(from, to) {

    const advertised = {};

    for (const dest of Object.keys(nodes[from].vector)) {

        let value = nodes[from].vector[dest];

        // ==================================================
        // SPLIT HORIZON + POISON REVERSE
        // ==================================================

        if (useProtection) {

            if (nodes[from].nextHop[dest] === to) {

                addLog(
                    `☠ ${from} → ${to} : ${dest} = INF`
                );

                value = INF;
            }
        }

        advertised[dest] = value;
    }

    return advertised;
}

// ======================================================
// DISTANCE VECTOR
// ======================================================

async function runDistanceVector(iterations) {

    for (let iteration = 1; iteration <= iterations; iteration++) {

        const snapshot = JSON.parse(JSON.stringify(nodes));

        render(iteration, "Nuovo ciclo Distance Vector");

        await sleep(DELAY);

        for (const nodeName of Object.keys(nodes)) {

            const neighbors = links[nodeName];

            for (const neighbor of Object.keys(neighbors)) {

                render(
                    iteration,
                    `📨 ${nodeName} riceve DV da ${neighbor}`
                );

                await animate("Scambio vettori");

                const receivedVector =
                    sendVector(neighbor, nodeName);

                await sleep(DELAY);

                for (const destination of Object.keys(receivedVector)) {

                    if (destination === nodeName)
                        continue;

                    const advertised =
                        receivedVector[destination];

                    const newCost =
                        links[nodeName][neighbor] +
                        advertised;

                    const currentCost =
                        snapshot[nodeName].vector[destination];

                    addLog(
                        `🔎 ${nodeName} valuta ${destination} via ${neighbor}`
                    );

                    render(
                        iteration,
                        `${nodeName} valuta ${destination} tramite ${neighbor}`
                    );

                    console.log(
                        `${C.yellow}Costo corrente:${C.reset} ${
                            currentCost >= INF
                                ? "INF"
                                : currentCost
                        }`
                    );

                    console.log(
                        `${C.yellow}Nuovo costo:${C.reset} ${
                            links[nodeName][neighbor]
                        } + ${
                            advertised >= INF
                                ? "INF"
                                : advertised
                        }`
                    );

                    console.log();

                    await sleep(DELAY);

                    // ==========================================
                    // UPDATE CLASSICO DV
                    // ==========================================

                    if (
                        newCost <
                        nodes[nodeName].vector[destination]
                    ) {

                        nodes[nodeName].vector[destination] =
                            Math.min(newCost, INF);

                        nodes[nodeName].nextHop[destination] =
                            neighbor;

                        addLog(
                            `✔ ${nodeName}: ${destination} = ${newCost} via ${neighbor}`
                        );

                        render(
                            iteration,
                            `✔ UPDATE ${nodeName} → ${destination}`
                        );

                        console.log(
                            `${C.green}${C.bright}✔ ROUTE UPDATE${C.reset}`
                        );

                        console.log(
                            `${nodeName} aggiorna ${destination}`
                        );

                        console.log(
                            `Nuovo costo: ${newCost}`
                        );

                        console.log(
                            `Next hop: ${neighbor}\n`
                        );

                        await sleep(DELAY);
                    }

                    // ==========================================
                    // COUNT TO INFINITY
                    // ==========================================

                    else if (
                        nodes[nodeName].nextHop[destination] === neighbor
                    ) {

                        const old =
                            nodes[nodeName].vector[destination];

                        nodes[nodeName].vector[destination] =
                            Math.min(newCost, INF);

                        const updated =
                            nodes[nodeName].vector[destination];

                        if (updated !== old) {

                            addLog(
                                `⚠ ${nodeName}: ${destination} = ${updated}`
                            );

                            render(
                                iteration,
                                `⚠ COUNT TO INFINITY`
                            );

                            console.log(
                                `${C.red}${C.bright}⚠ COUNT TO INFINITY${C.reset}\n`
                            );

                            console.log(
                                `${nodeName} incrementa il costo verso ${destination}`
                            );

                            console.log(
                                `Vecchio costo: ${old}`
                            );

                            console.log(
                                `Nuovo costo: ${updated}\n`
                            );

                            await sleep(DELAY);
                        }
                    }
                }
            }
        }

        render(iteration, "Fine ciclo");

        await sleep(DELAY * 2);
    }
}

// ======================================================
// MAIN
// ======================================================

async function main() {

    render(0, "Avvio simulazione");

    console.log(
        `${C.bright}${C.green}SIMULAZIONE DISTANCE VECTOR${C.reset}\n`
    );

    console.log(
        "Questa simulazione mostra il fenomeno"
    );

    console.log(
        `${C.yellow}COUNT TO INFINITY${C.reset}`
    );

    console.log(
        "e la protezione con"
    );

    console.log(
        `${C.magenta}SPLIT HORIZON + POISON REVERSE${C.reset}\n`
    );

    await sleep(4000);

    addLog("✔ Tabelle iniziali caricate");

    render(0, "Stato iniziale");

    await sleep(4000);

    // ==================================================
    // GUASTO LINK
    // ==================================================

    delete links.B.C;
    delete links.C.B;

    nodes.B.vector.C = INF;
    nodes.B.nextHop.C = "-";

    addLog("✖ LINK B-C DOWN");

    render(0, "GUASTO DEL LINK B-C");

    console.log(
        `${C.red}${C.bright}GUASTO DI RETE${C.reset}\n`
    );

    console.log(
        "Il collegamento diretto tra B e C è caduto."
    );

    console.log(
        "B perde la rotta diretta verso C.\n"
    );

    await sleep(5000);

    // ==================================================
    // SPIEGAZIONE COUNT TO INFINITY
    // ==================================================

    render(0, "Spiegazione Count-To-Infinity");

    console.log(
        `${C.yellow}${C.bright}COUNT TO INFINITY${C.reset}\n`
    );

    console.log("1) B perde il link diretto con C");
    console.log("2) A continua a credere che C esista");
    console.log("3) B pensa che A conosca un'altra strada");
    console.log("4) I costi aumentano all'infinito\n");

    console.log(
        `${C.red}B:${C.reset} "Forse A sa raggiungere C..."`,
    );

    console.log(
        `${C.green}A:${C.reset} "Io conosco C tramite B..."`,
    );

    console.log();

    await sleep(7000);

    // ==================================================
    // ESECUZIONE
    // ==================================================

    await runDistanceVector(6);

    // ==================================================
    // ATTIVAZIONE PROTEZIONI
    // ==================================================

    useProtection = true;

    addLog("☠ Poison Reverse ATTIVO");
    addLog("🛡 Split Horizon ATTIVO");

    render(7, "Attivazione protezioni");

    console.log(
        `${C.magenta}${C.bright}ATTIVAZIONE PROTEZIONI${C.reset}\n`
    );

    console.log("✔ Split Horizon");
    console.log("✔ Poison Reverse\n");

    console.log(
        "Ora un router NON pubblica più"
    );

    console.log(
        "una rotta al nodo da cui l'ha imparata.\n"
    );

    console.log(
        "Questo interrompe il loop di routing.\n"
    );

    await sleep(7000);

    // ==================================================
    // NUOVA SIMULAZIONE
    // ==================================================

    await runDistanceVector(4);

    // ==================================================
    // FINE
    // ==================================================

    render("END", "Simulazione completata");

    console.log(
        `${C.green}${C.bright}SIMULAZIONE TERMINATA${C.reset}\n`
    );

    console.log(
        "Il loop Count-To-Infinity è stato bloccato"
    );

    console.log(
        "grazie a Split Horizon + Poison Reverse.\n"
    );
}

main();