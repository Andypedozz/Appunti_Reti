const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const DELAY = 800;
const INF = 999;

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

function printNodeTable(nodeName) {

    const node = nodes[nodeName];

    console.log(`Nodo ${nodeName}`);

    console.log("┌─────────┬──────────┬──────────┐");
    console.log("│ Dest.   │ Costo   │ NextHop │");
    console.log("├─────────┼──────────┼──────────┤");

    for (const dest of Object.keys(node.vector)) {

        const cost =
            node.vector[dest] >= INF
                ? "INF".padEnd(8)
                : String(node.vector[dest]).padEnd(8);

        const hop = String(node.nextHop[dest]).padEnd(8);

        console.log(
            `│ ${dest.padEnd(7)} │ ${cost} │ ${hop} │`
        );
    }

    console.log("└─────────┴──────────┴──────────┘");
    console.log();
}

function printAll(iteration, title = "") {

    console.log("\n====================================================");
    console.log(`ITERAZIONE ${iteration}`);
    console.log("====================================================");

    if (title) {
        console.log(title);
        console.log();
    }

    printNodeTable("A");
    printNodeTable("B");
    printNodeTable("C");
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

                console.log(
                    `POISON REVERSE: ${from} dice a ${to} che ${dest} = INF`
                );

                value = INF;
            }
        }

        advertised[dest] = value;
    }

    return advertised;
}

// ======================================================

async function runDistanceVector(iterations) {

    for (let iteration = 1; iteration <= iterations; iteration++) {

        const snapshot = JSON.parse(JSON.stringify(nodes));

        console.log("\n");
        console.log("####################################################");
        console.log(`CICLO ${iteration}`);
        console.log("####################################################\n");

        for (const nodeName of Object.keys(nodes)) {

            const neighbors = links[nodeName];

            for (const neighbor of Object.keys(neighbors)) {

                console.log(
                    `${nodeName} riceve vettore da ${neighbor}`
                );

                const receivedVector =
                    sendVector(neighbor, nodeName);

                await sleep(DELAY);

                for (const destination of Object.keys(receivedVector)) {

                    if (destination === nodeName)
                        continue;

                    const newCost =
                        links[nodeName][neighbor] +
                        receivedVector[destination];

                    const currentCost =
                        snapshot[nodeName].vector[destination];

                    console.log(
                        `${nodeName} valuta ${destination} tramite ${neighbor}`
                    );

                    console.log(
                        `Costo corrente = ${
                            currentCost >= INF
                                ? "INF"
                                : currentCost
                        }`
                    );

                    console.log(
                        `Nuovo costo = ${links[nodeName][neighbor]} + ${
                            receivedVector[destination] >= INF
                                ? "INF"
                                : receivedVector[destination]
                        }`
                    );

                    await sleep(DELAY);

                    // ==================================================
                    // UPDATE CLASSICO DV
                    // ==================================================

                    if (newCost < nodes[nodeName].vector[destination]) {

                        console.log(
                            `>>> ${nodeName} aggiorna rotta verso ${destination}`
                        );

                        nodes[nodeName].vector[destination] = newCost;
                        nodes[nodeName].nextHop[destination] = neighbor;
                    }

                    // ==================================================
                    // COUNT TO INFINITY:
                    // aggiorna anche se usa già quel next hop
                    // ==================================================

                    else if (
                        nodes[nodeName].nextHop[destination] === neighbor
                    ) {

                        nodes[nodeName].vector[destination] = Math.min(
                            newCost,
                            INF
                        );

                        console.log(
                            `>>> ${nodeName} aggiorna il costo verso ${destination} a ${nodes[nodeName].vector[destination]}`
                        );
                    }

                    await sleep(DELAY);
                }
            }
        }

        printAll(iteration);

        await sleep(DELAY);
    }
}

// ======================================================
// MAIN
// ======================================================

async function main() {

    console.log("\nSIMULAZIONE DISTANCE VECTOR\n");

    console.log("Topologia iniziale:");
    console.log("A ----1---- B ----1---- C");

    await sleep(2000);

    printAll(0, "Tabelle iniziali");

    await sleep(3000);

    // ==================================================
    // GUASTO LINK B-C
    // ==================================================

    console.log("\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("GUASTO: il link B-C cade");
    console.log("C diventa irraggiungibile da A");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n");

    delete links.B.C;
    delete links.C.B;

    nodes.B.vector.C = INF;
    nodes.B.nextHop.C = "-";

    await sleep(3000);

    console.log("\nINIZIA IL COUNT TO INFINITY\n");

    console.log(`
Spiegazione:
B perde il collegamento diretto con C.

MA...

A continua a dire:
"Posso raggiungere C con costo 2 passando da B"

B allora pensa:
"Forse A conosce un'altra strada!"

Quindi B aggiorna:
C = 3 passando da A

Poi A sente:
"C costa 3"

e aggiorna:
C = 4

Poi B:
C = 5

Poi A:
C = 6

ecc...

Questo è il COUNT TO INFINITY.
`);

    await sleep(7000);

    await runDistanceVector(6);

    // ==================================================
    // ATTIVAZIONE PROTEZIONI
    // ==================================================

    console.log("\n\n===========================================");
    console.log("ATTIVAZIONE SPLIT HORIZON + POISON REVERSE");
    console.log("===========================================\n");

    console.log(`
Ora i router applicano:

1) SPLIT HORIZON
Un nodo NON pubblica una rotta
verso il vicino da cui l'ha imparata.

2) POISON REVERSE
Oppure la pubblica come INF.

Quindi:
A NON dirà più a B:
"So raggiungere C tramite te"

perché quella rotta arrivava proprio da B.

Questo interrompe il loop.
`);

    useProtection = true;

    await sleep(8000);

    await runDistanceVector(4);

    console.log("\n===========================================");
    console.log("FINE SIMULAZIONE");
    console.log("===========================================\n");
}

main();