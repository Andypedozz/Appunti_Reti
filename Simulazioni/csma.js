// csma_sim_pretty.js

const readline = require("readline");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const C = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",

  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

function clear() {
  process.stdout.write("\x1Bc");
}

function line() {
  console.log(C.gray + "─".repeat(70) + C.reset);
}

function title(text) {
  clear();

  console.log(
    C.cyan +
      C.bright +
      `
╔════════════════════════════════════════════════════════════════════╗
║ ${text.padEnd(66)}║
╚════════════════════════════════════════════════════════════════════╝
` +
      C.reset
  );
}

function step(text) {
  console.log(
    C.yellow + C.bright + `\n▶ ${text}\n` + C.reset
  );
}

function node(name, color) {
  return color + `[ ${name} ]` + C.reset;
}

async function animateTransmission(label, length = 25, color = C.green) {
  process.stdout.write(label + " ");

  for (let i = 0; i < length; i++) {
    process.stdout.write(color + "█" + C.reset);
    await sleep(40);
  }

  process.stdout.write(" ▶\n");
}

async function countdown(a, b) {
  while (a >= 0 || b >= 0) {
    readline.cursorTo(process.stdout, 0);

    process.stdout.write(
      `${node("A", C.cyan)} ${
        a > 0
          ? C.yellow + `WAIT ${a}`
          : C.green + "READY ✔"
      }${C.reset}\n`
    );

    process.stdout.write(
      `${node("B", C.magenta)} ${
        b > 0
          ? C.yellow + `WAIT ${b}`
          : C.green + "READY ✔"
      }${C.reset}\n`
    );

    line();

    await sleep(700);

    a--;
    b--;
  }
}

// --------------------------------------------------
// CSMA/CD
// --------------------------------------------------

async function csma_cd() {
  title("CSMA/CD • Ethernet");

  step("I nodi ascoltano il mezzo trasmissivo");

  console.log(
    `${node("A", C.cyan)} 👂 ascolta il canale`
  );
  console.log(
    `${node("B", C.magenta)} 👂 ascolta il canale`
  );

  await sleep(1500);

  line();

  step("Il canale risulta libero");

  console.log(
    `${node("A", C.cyan)} tenta trasmissione`
  );
  console.log(
    `${node("B", C.magenta)} tenta trasmissione`
  );

  await sleep(1200);

  line();

  step("Trasmissione simultanea");

  await Promise.all([
    animateTransmission(
      `${node("A", C.cyan)} →`,
      20,
      C.cyan
    ),
    animateTransmission(
      `${node("B", C.magenta)} →`,
      20,
      C.magenta
    ),
  ]);

  await sleep(700);

  console.log(
    "\n" +
      C.red +
      C.bright +
      "💥 COLLISIONE RILEVATA!" +
      C.reset
  );

  console.log(
    C.red +
      "Entrambi i nodi interrompono immediatamente la trasmissione.\n" +
      C.reset
  );

  await sleep(1800);

  line();

  step("Invio del JAM SIGNAL");

  console.log(C.red + "▓▓▓▓▓ JAM SIGNAL ▓▓▓▓▓" + C.reset);

  await sleep(1500);

  line();

  step("Backoff casuale");

  let backoffA = Math.floor(Math.random() * 4) + 1;
  let backoffB = Math.floor(Math.random() * 4) + 1;;

  console.log(
    `${node("A", C.cyan)} attende ${backoffA} slot`
  );

  console.log(
    `${node("B", C.magenta)} attende ${backoffB} slot`
  );

  await sleep(2000);

  line();

  step("Nuovo tentativo");

  console.log(
    `${node("A", C.cyan)} trasmette con successo ✔`
  );

  await sleep(1000);

  console.log(
    `${node("B", C.magenta)} trasmette con successo ✔`
  );

  await sleep(1500);

  console.log(
    "\n" +
      C.green +
      C.bright +
      "✔ Collisione rilevata e risolta" +
      C.reset
  );
}

// --------------------------------------------------
// CSMA/CA
// --------------------------------------------------

async function csma_ca() {
  title("CSMA/CA • Wi-Fi");

  step("I nodi ascoltano il canale");

  console.log(
    `${node("A", C.cyan)} 👂 carrier sense`
  );
  console.log(
    `${node("B", C.magenta)} 👂 carrier sense`
  );

  await sleep(1500);

  line();

  step("Backoff preventivo");

  let backoffA = Math.floor(Math.random() * 4) + 1;
  let backoffB = Math.floor(Math.random() * 4) + 1;;

  console.log(
    `${node("A", C.cyan)} backoff = ${backoffA}`
  );

  console.log(
    `${node("B", C.magenta)} backoff = ${backoffB}`
  );

  await sleep(1500);

  line();

  step("Countdown del backoff");

  await countdown(backoffA, backoffB);

  await sleep(1000);

  line();

  step("Accesso ordinato al canale");

  await animateTransmission(
    `${node("A", C.cyan)} TX`,
    20,
    C.cyan
  );

  await sleep(800);

  await animateTransmission(
    `${node("B", C.magenta)} TX`,
    20,
    C.magenta
  );

  await sleep(1200);

  console.log(
    "\n" +
      C.green +
      C.bright +
      "✔ Collisione evitata preventivamente" +
      C.reset
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

async function main() {
  const mode = process.argv[2] || "both";

  if (mode === "cd") {
    await csma_cd();
  } else if (mode === "ca") {
    await csma_ca();
  } else {
    await csma_cd();

    await sleep(2500);

    await csma_ca();
  }

  console.log(
    "\n" +
      C.cyan +
      C.bright +
      "🎯 Fine simulazione\n" +
      C.reset
  );
}

main();