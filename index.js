import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const db = {
  transactions: {}
};

function header() {
  console.clear();
  console.log("DIG MULTISIG");
  console.log("Multi-Party Authorization Engine");
  console.log("--------------------------------------------------\n");
}

function prompt() {
  console.log("cmd:");
  console.log("1  create-tx");
  console.log("2  add-signer");
  console.log("3  approve");
  console.log("4  status");
  console.log("5  exit\n");

  rl.question("dig> ", handle);
}

function handle(input) {
  const cmd = input.trim();

  switch (cmd) {

    case "1":
    case "create-tx":
      rl.question("Transaction ID: ", (id) => {
        rl.question("Required approvals: ", (limit) => {

          db.transactions[id] = {
            threshold: Number(limit),
            signers: [],
            approvals: [],
            executed: false
          };

          console.log("\nTransaction created.\n");
          prompt();
        });
      });
      break;

    case "2":
    case "add-signer":
      rl.question("Transaction ID: ", (id) => {
        const tx = db.transactions[id];
        if (!tx) return notFound();

        rl.question("Signer name: ", (name) => {
          tx.signers.push(name);
          console.log("\nSigner added.\n");
          prompt();
        });
      });
      break;

    case "3":
    case "approve":
      rl.question("Transaction ID: ", (id) => {
        const tx = db.transactions[id];
        if (!tx) return notFound();

        rl.question("Signer name: ", (name) => {

          if (!tx.signers.includes(name)) {
            console.log("\nSigner not registered.\n");
            return prompt();
          }

          if (tx.approvals.includes(name)) {
            console.log("\nAlready approved.\n");
            return prompt();
          }

          tx.approvals.push(name);

          if (tx.approvals.length >= tx.threshold) {
            tx.executed = true;
            console.log("\nTransaction EXECUTED.\n");
          } else {
            console.log(`\nApproval recorded (${tx.approvals.length}/${tx.threshold}).\n`);
          }

          prompt();
        });
      });
      break;

    case "4":
    case "status":
      rl.question("Transaction ID: ", (id) => {
        const tx = db.transactions[id];
        if (!tx) return notFound();

        console.log("\nTransaction Status");
        console.log("-------------------");
        console.log("Threshold :", tx.threshold);
        console.log("Signers   :", tx.signers.join(", "));
        console.log("Approvals :", tx.approvals.join(", "));
        console.log("Executed  :", tx.executed);
        console.log("");

        prompt();
      });
      break;

    case "5":
    case "exit":
      console.log("\nSession closed.\n");
      rl.close();
      break;

    default:
      console.log("\nUnknown command.\n");
      prompt();
  }
}

function notFound() {
  console.log("\nTransaction not found.\n");
  prompt();
}

header();
prompt();
