# DIG MULTISIG

A hardened CLI-based multi-signature transaction manager built on Intercom architecture.

DIG MULTISIG is designed to simulate secure multi-party transaction approval workflows with a strong structured command engine and execution proof included.

---

## Core Capabilities

- Create multi-signature transaction
- Add signer to transaction
- Approve transaction
- Check transaction status
- Secure execution flow simulation
- Clean CLI structured interface
- Execution record included

---

## Command Structure

Available cmd:

- create-tx
- add-signer
- approve
- status
- exit

---

## Execution Flow

1. Create transaction
2. Add required signers
3. Approve transaction
4. Verify approval threshold
5. Confirm transaction state

---

## Installation

```bash
git clone https://github.com/carlodiganio-sketch/dig-multisig
cd dig-multisig
npm install
node index.js
```

---

## Architecture Overview

DIG MULTISIG demonstrates:

- Multi-party validation logic
- Threshold-based approval simulation
- Transaction state management
- Modular CLI command engine
- Intercom-based extension framework

---

## Project Structure

```
dig-multisig/
│
├── index.js
├── package.json
├── proof/
│   └── proof-record.mp4
├── README.md
└── SKILL.md
```

---

## Proof Record Execution

This repository includes a recorded execution showing:

- Transaction creation
- Signer addition
- Approval flow
- Status verification
- Full CLI interaction

Video file:

[▶ Watch Execution Record](./proof/proof-record.mp4)

---

## Trac Wallet

```
trac1eh6v8scc09wn9cka4t0gjqpgwnwqdml26tpqt6gskasg6dk2tn5q6xdljp
```

---

## Intercom Reference

This project is built as a modified fork of the Intercom stack and demonstrates custom CLI extension, command restructuring, and workflow simulation.

---

## Status

Active fork with structural modifications and execution proof included.
