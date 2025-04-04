# AINRP – AI Identity & Non-Repudiation Protocol

**Version**: Prototype v0.2  
**License**: MIT  
![build](https://img.shields.io/badge/build-passing-brightgreen)  
![license](https://img.shields.io/badge/license-MIT-blue)

AINRP is a blockchain-based protocol to verify, authorize, and audit AI agents operating autonomously in the digital or physical world. It provides verifiable identity (via DIDs), programmable logic enforcement (via smart contracts), and financial/logging accountability (via tokens and immutable logs).

---

## 📐 Protocol Architecture

```
[Agent Action]
  → [DID Auth]
  → [Smart Contract Validator / Staking Manager]
  → [AuditLogger]
  → [Stablecoin or Token Transaction]
```

---

## 📦 Included Contracts

| Contract            | Purpose                                 |
|---------------------|-----------------------------------------|
| `AINRPToken.sol`     | ERC-20 token (1B cap, utility token)    |
| `DIDRegistry.sol`    | Register/verifies agent identity (DID) |
| `AuditLogger.sol`    | Emits logs with hash and timestamp     |
| `StakingManager.sol` | Stake tokens to gain agent permissions |

---

## 🧪 Running the Repo Locally

### Prerequisites

- Node.js 18+
- Hardhat
- Infura or Alchemy RPC Key (optional for testnet)

### Setup

```bash
npm install
npx hardhat compile
npx hardhat test
```

---

## 🚀 Deploying to Sepolia

Create a `.env` file based on `.env.example`:

```env
PRIVATE_KEY=your_wallet_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
```

Then run:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## 📄 Patent Status

This repository is part of a provisional patent application:
**"AI Trust Protocols for the Fourth Industrial Revolution"**  
USPTO Reference: [provided upon request]

You may cite this repo in filings and legal records:
> https://github.com/yourname/AINRP

---

## 🤝 Contributing

We welcome builders in:
- Solidity / smart contracts
- Privacy & security
- Frontend dApp UX
- Governance modeling (DAO)

---

## 🧾 License

This project is licensed under the MIT License.
