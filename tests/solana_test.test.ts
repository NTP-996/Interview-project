import { describe, expect, test } from "@jest/globals";
import {
  sum,
  establishConnection,
  establishPayer,
  checkProgram,
  swapToken,
  reportBalances,
  createStoreAccount,
} from "./solana_test";

describe("Test solana test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Create connection", async () => {
    let result = await establishConnection();
    expect(result).toBe(200);
  });
});
