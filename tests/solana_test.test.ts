import { describe, expect, test } from "@jest/globals";
import {
  sum,
  establishConnection,
  establishPayer,
  checkProgram,
  swapToken,
  createStoreAccount,
} from "./solana_test";
import { SwapInstruction } from "./utils";

describe("Test solana test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Test establish connection", async () => {
    let result = await establishConnection();
    expect(result).toBe(200);
  });

  test("Test establish Payer", async () => {
    let result = await establishPayer();
    expect(result).toBe(200);
  });

  test("Test check program", async () => {
    let result = await checkProgram();
    expect(result).toBe(200);
  });

  test("Test create store account", async () => {
    let result = await createStoreAccount();
    expect(result).toBe(200);
  });

  test("Test check program", async () => {
    // Swap Token To Sol
    const result = await swapToken(SwapInstruction.TokenToSol, 10);

    // Swap Sol to Token
    await swapToken(SwapInstruction.SolToToken, 1);
    expect(result).toBe(200);
  });

  test("Test check program", async () => {
    let result = await checkProgram();
    expect(result).toBe(200);
  });
});
