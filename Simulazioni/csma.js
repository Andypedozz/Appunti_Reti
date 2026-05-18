// csma_sim.js
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function clear() {
  process.stdout.write("\x1Bc");
}

function title(t) {
  console.log("\n" + "=".repeat(60));
  console.log(t);
  console.log("=".repeat(60) + "\n");
}

function step(text) {
  console.log("➡️  " + text + "\n");
}

// -----------------------------
// CSMA/CD
// -----------------------------
async function csma_cd() {
  clear();
  title("CSMA/CD (Ethernet) - Carrier Sense Multiple Access with Collision Detection");

  step("1. I nodi ascoltano il mezzo (carrier sense).");

  await sleep(1000);

  step("2. Due nodi A e B rilevano il canale libero quasi nello stesso momento.");
  console.log("A e B → tentano di trasmettere");

  await sleep(1200);

  step("3. Inizio trasmissione simultanea.");

  console.log(`
Tempo →
A:  ███████──────▶
B:  ──────███████▶
      (collisione in arrivo...)
`);

  await sleep(1500);

  step("4. Collisione rilevata durante la trasmissione (caratteristica CSMA/CD).");

  console.log("❌ COLLISIONE DETECTED!");
  console.log("📡 Entrambi i nodi interrompono la trasmissione.\n");

  await sleep(1200);

  step("5. Jamming signal + backoff casuale.");

  console.log("A → backoff random: 3 slot");
  console.log("B → backoff random: 5 slot\n");

  await sleep(1500);

  step("6. Ritrasmissione dopo attesa.");

  console.log("A trasmette di nuovo ✔");
  console.log("B trasmette dopo ✔\n");

  await sleep(1500);

  step("✔ Risultato: collisione rilevata e risolta a posteriori.");
}

// -----------------------------
// CSMA/CA
// -----------------------------
async function csma_ca() {
  title("CSMA/CA (Wi-Fi) - Carrier Sense Multiple Access with Collision Avoidance");

  step("1. I nodi ascoltano il canale prima di trasmettere.");

  await sleep(1200);

  step("2. Se il canale è libero, NON trasmettono subito.");
  step("→ attivano un timer di backoff casuale");

  let backoffA = 3;
  let backoffB = 5;

  console.log("\nBackoff iniziali:");
  console.log("A =", backoffA);
  console.log("B =", backoffB);

  await sleep(1500);

  step("3. Countdown del backoff (evita collisioni).");

  while (backoffA > 0 || backoffB > 0) {
    console.log(`A: ${backoffA > 0 ? "WAIT " + backoffA : "TRANSMIT READY ✔"}`);
    console.log(`B: ${backoffB > 0 ? "WAIT " + backoffB : "TRANSMIT READY ✔"}`);
    console.log("---");

    backoffA--;
    backoffB--;

    await sleep(800);
  }

  step("4. Accesso al canale senza collisione (o con rischio ridotto).");

  console.log("\n📡 A → trasmette");
  console.log("📡 B → trasmette\n");

  await sleep(1500);

  step("✔ Risultato: collisione evitata grazie al controllo preventivo.");
}

// -----------------------------
// MAIN
// -----------------------------
async function main() {
  const mode = process.argv[2] || "both";

  if (mode === "cd") await csma_cd();
  else if (mode === "ca") await csma_ca();
  else {
    await csma_cd();
    await sleep(2000);
    await csma_ca();
  }

  console.log("\n🎯 Fine simulazione.\n");
}

main();