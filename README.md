# AINRP

**AI Identity and Non-Repudiation Protocol**

AINRP is a trust infrastructure layer for the Fourth Industrial Revolution. It enables secure, verifiable, and accountable digital and physical actions by AI agents. This protocol uses decentralized identifiers (DIDs), smart contracts, and a native token (AINRP) to facilitate non-repudiation, permissioning, and governance across AI ecosystems.

---

## Vision
Build a zero-trust layer that ensures every AI agent:
- Has a cryptographically verifiable identity (W3C DID)
- Operates under permissioned smart contracts
- Logs its actions in an immutable, auditable trail
- Pays or earns via programmable stablecoins or AINRP tokens

---

## Architecture Overview
```
[Agent Action] 
→ [DID Auth] 
→ [AINRP Token Staked / Smart Contract Validation] 
→ [Blockchain Audit Log] 
→ [Stablecoin or Token Transaction]
```

### Smart Contract Modules
- **AINRPToken.sol** — ERC-20 token contract (1B supply)
- **DIDRegistry** — Agent identity binding and permission metadata *(in progress)*
- **Logger** — Immutable action log (linked to DID)
- **StakingManager** — Require token staking for agent rights *(optional)*
- **GovernanceDAO** — Proposals and voting for rule changes *(future)*

---

## AINRP Tokenomics (Draft)
| Category                     | Allocation |
|-----------------------------|------------|
| Community Development       | 35%        |
| Founders & Advisors         | 20%        |
| Validator / Auditor Rewards | 15%        |
| Treasury DAO                | 20%        |
| Ecosystem Partnerships      | 10%        |

AINRP is used for:
- Agent identity registration
- Logging fee microtransactions
- Voting on protocol upgrades
- Validator and compute node incentives

---

## Contracts
The smart contracts in this project are written in Solidity and use OpenZeppelin libraries. Key contract:

- `AINRPToken.sol`: ERC-20 token with capped supply and minting on deployment
- **Deployed Address (Sepolia):** `0x4b907810E22b2789aE8691fce3B3693DfAE565Bb`

To interact or test in your wallet:
- **Network:** Sepolia
- **Token Contract Address:** `0x4b907810E22b2789aE8691fce3B3693DfAE565Bb`

---

## Tooling and Scripts
This repository uses the Hardhat development environment for compiling, testing, and deploying contracts.

Suggested workflow:
- Run `npm install` to install dependencies
- Use `npx hardhat compile` to compile contracts
- Deploy using scripts from the `/scripts` folder

Planned scripts:
- `/scripts/deploy.js` — deployment of AINRPToken and supporting contracts

---

## Repository Structure (planned)
```
/contracts                  # Solidity smart contracts
/scripts                    # Deployment scripts (e.g., Hardhat)
  └── deploy.js             # Deployment script for token contract
/docs                       # Protocol specs, architecture diagrams, whitepapers
  ├── AINRP_Concept_Paper.pdf
  ├── sb0016_cover_sheet.pdf
  ├── sb0015a_micro_entity_cert.pdf
  ├── patent-filing-receipt.pdf
/specification              # Non-code artifacts
  └── AINRP_Concept_Paper.pdf
/test                      # Unit tests
/README.md                 # This file
/LICENSE                   # MIT License
```

---

## Contributing
We are looking for contributors across:
- Smart contract engineering
- Governance modeling
- Privacy and cryptography
- Policy and compliance (ISO 42001 / NIST)

Open an issue or fork and submit a pull request.

---

## Contact
**Logan Alexander Stepp**  
Email: mcponstepp@gmail.com  
LinkedIn: [Link to be added]

---

## License
This project is licensed under the MIT License.
