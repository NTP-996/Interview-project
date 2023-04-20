# Solana_token_swap

Rust smart contract to swap token on Solana network

## Create and deploy a new token

```bash
solana config get
solana config set --url https://api.devnet.solana.com
solana-keygen new
solana balance 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi
cargo install spl-token-cli
spl-token create-token
spl-token create-account AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM
spl-token mint tokenAddress mintAmount recipientAddress
```

## Smart Contract Address

[Contract address](https://explorer.solana.com/address/4AcRjmAnpb7dS6aAz9EgMw5NPgt9i9Y33hyucnu8etAq?cluster=devnet)  
[Token address](https://explorer.solana.com/address/C75V5o5okVEYLnkXorGiKBNprjKk28RgFRhKLHaZcMjt?cluster=devnet)

## Check list  

- [x] Create new Token on Solana Devnet
- [x] Swap 1 Sol for 10 Tokens with Contract Program's PDA (Rust)
- [x] Web3 script to interact with Contract Program and Testing (Typescript)

## Smart Contract

```bash
cd sc
cargo build-bpf --bpf-out-dir=dist/program
solana program deploy dist/program/solana_test.so
```

## Test

```bash
cd tests
npm install
npm run test
```

## Swap script

```bash
cd tests
npm install
npm run test
```
