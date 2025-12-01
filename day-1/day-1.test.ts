import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { splitByNewLine } from "../utils/utils.ts";
import { secretEntrance } from "./day-1.ts";

describe("Day 1", () => { 
  const data = splitByNewLine("day-1/test-data.txt");
  test("Part One", () => {
    strictEqual(secretEntrance(data), 3); // * 1055
  });

  test("Part Two", () => {
    strictEqual(secretEntrance(data, true), 6); // * 6386
  });
});
