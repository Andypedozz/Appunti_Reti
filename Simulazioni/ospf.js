const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const DELAY = 1200;
const INF = 999;

// ======================================================
// TOPOLOGIA
//
// A ----1---- B ----2---- C
//  \                     /
//   \--------4----------/
//
// ======================================================

const topology = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2 },
    C: { A: 4, B: 2 }
};

// ======================================================
// DATABASE LINK STATE (LSDB)
//
// Ogni router mantiene una mappa completa della rete
// NON solo il vettore delle distanze.
//
// ======================================================

const routers = {

    A: {
        lsdb: {},
        routingTable: {}
    },

    B: {
        lsdb: {},
        routingTable: {}
    },

    C: {
        lsdb: {},
        routingTable: {}
    }
};

// ======================================================
// STAMPA
// ======================================================

function printRoutingTable(routerName) {

    const table = routers[routerName].routingTable;

    console.log(`Router ${routerName}`);

    console.log("┌─────────┬──────────┬──────────┐");
    console.log("│ Dest.   │ Costo   │ NextHop │");
    console.log("├─────────┼──────────┼──────────┤");

    for (const dest of Object.keys(table)) {

        const row = table[dest];

        console.log(
            `│ ${dest.padEnd(7)} │ ${String(row.cost).padEnd(8)} │ ${String(row.nextHop).padEnd(8)} │`
        );
    }

    console.log("└─────────┴──────────┴──────────┘");
    console.log();
}

// ======================================================
// STAMPA LSDB
// ======================================================

function printLSDB(routerName) {

    console.log(`LSDB del router ${routerName}`);

    const lsdb = routers[routerName].lsdb;

    for (const node of Object.keys(lsdb)) {

        console.log(
            `${node} ->`,
            lsdb[node]
        );
    }

    console.log();
}

// ======================================================
// DIJKSTRA
//
// OSPF usa shortest path first
// NON Bellman-Ford come Distance Vector
//
// ======================================================

function dijkstra(startNode, graph) {

    const distances = {};
    const previous = {};
    const visited = {};

    for (const node of Object.keys(graph)) {

        distances[node] = INF;
        previous[node] = null;
    }

    distances[startNode] = 0;

    while (true) {

        let closestNode = null;
        let shortestDistance = INF;

        for (const node of Object.keys(graph)) {

            if (
                !visited[node] &&
                distances[node] < shortestDistance
            ) {
                shortestDistance = distances[node];
                closestNode = node;
            }
        }

        if (closestNode === null)
            break;

        visited[closestNode] = true;

        for (const neighbor of Object.keys(graph[closestNode])) {

            const newDistance =
                distances[closestNode] +
                graph[closestNode][neighbor];

            if (newDistance < distances[neighbor]) {

                distances[neighbor] = newDistance;
                previous[neighbor] = closestNode;
            }
        }
    }

    return { distances, previous };
}

// ======================================================
// COSTRUZIONE ROUTING TABLE
// ======================================================

function buildRoutingTable(routerName) {

    const graph = routers[routerName].lsdb;

    const result = dijkstra(routerName, graph);

    const table = {};

    for (const destination of Object.keys(graph)) {

        if (destination === routerName) {

            table[destination] = {
                cost: 0,
                nextHop: "-"
            };

            continue;
        }

        let current = destination;
        let prev = result.previous[current];

        while (prev !== routerName && prev !== null) {

            current = prev;
            prev = result.previous[current];
        }

        table[destination] = {
            cost: result.distances[destination],
            nextHop: current
        };
    }

    routers[routerName].routingTable = table;
}

// ======================================================
// FLOODING LSA
//
// Ogni router diffonde informazioni sui link.
// NON invia semplicemente distanze ai vicini.
//
// ======================================================

async function floodLSA(originRouter) {

    console.log(`\n${originRouter} genera un LSA`);
    console.log(
        `${originRouter} comunica i propri link:`,
        topology[originRouter]
    );

    await sleep(DELAY);

    for (const router of Object.keys(routers)) {

        routers[router].lsdb[originRouter] =
            JSON.parse(
                JSON.stringify(topology[originRouter])
            );

        console.log(
            `${router} aggiorna la propria LSDB con l'LSA di ${originRouter}`
        );

        await sleep(DELAY);
    }
}

// ======================================================
// STAMPA DIFFERENZE
// ======================================================

function explainDifferences() {

    console.log(`
========================================================
 DIFFERENZE TRA DISTANCE VECTOR E OSPF (LINK STATE)
========================================================

DISTANCE VECTOR:
- ogni router conosce SOLO:
  "quanto costa arrivare"

- scambia:
  vettori delle distanze

- algoritmo:
  Bellman-Ford

- problemi:
  Count To Infinity
  convergenza lenta

--------------------------------------------------------

OSPF / LINK STATE:
- ogni router conosce:
  l'INTERA topologia della rete

- scambia:
  Link State Advertisement (LSA)

- algoritmo:
  Dijkstra SPF

- vantaggi:
  convergenza veloce
  niente Count To Infinity
  routing più stabile

========================================================
`);
}

// ======================================================
// MAIN
// ======================================================

async function main() {

    console.log(`
========================================================
 SIMULAZIONE OSPF - LINK STATE
========================================================
`);

    explainDifferences();

    await sleep(5000);

    // ==================================================
    // FASE 1: FLOODING LSA
    // ==================================================

    console.log(`
========================================================
 FASE 1 - FLOODING DEGLI LSA
========================================================
`);

    await floodLSA("A");
    await floodLSA("B");
    await floodLSA("C");

    // ==================================================
    // STAMPA LSDB
    // ==================================================

    console.log(`
========================================================
 FASE 2 - DATABASE COMPLETO DELLA RETE
========================================================
`);

    for (const router of Object.keys(routers)) {

        printLSDB(router);

        await sleep(DELAY);
    }

    // ==================================================
    // CALCOLO SPF
    // ==================================================

    console.log(`
========================================================
 FASE 3 - ESECUZIONE DI DIJKSTRA
========================================================
`);

    for (const router of Object.keys(routers)) {

        console.log(
            `${router} esegue Dijkstra sulla topologia completa`
        );

        buildRoutingTable(router);

        await sleep(DELAY);

        printRoutingTable(router);

        await sleep(DELAY);
    }

    // ==================================================
    // SIMULAZIONE GUASTO
    // ==================================================

    console.log(`
========================================================
 FASE 4 - GUASTO LINK B-C
========================================================
`);

    console.log(`
Il link B-C cade.

In OSPF:
- il guasto viene propagato immediatamente
- tutti aggiornano la LSDB
- tutti ricalcolano Dijkstra

NON esiste Count To Infinity.
`);

    await sleep(5000);

    delete topology.B.C;
    delete topology.C.B;

    // nuovo flooding

    await floodLSA("B");
    await floodLSA("C");

    console.log(`
========================================================
 NUOVE ROUTING TABLE
========================================================
`);

    for (const router of Object.keys(routers)) {

        buildRoutingTable(router);

        printRoutingTable(router);

        await sleep(DELAY);
    }

    console.log(`
========================================================
 FINE SIMULAZIONE OSPF
========================================================
`);
}

main();