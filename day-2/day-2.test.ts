import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { giftShop } from "./day-2.ts";
import { readFileSync } from "fs";

describe("Day 2", () => { 
  const data = readFileSync("day-2/test-data.txt", "utf-8").split(",");
  test("Part One", () => {
    strictEqual(giftShop(data), 1227775554); // * 19219508902
  });

  test("Part Two", () => {
    strictEqual(giftShop(data, true), 4174379265); // * 27180728081
  })
});
