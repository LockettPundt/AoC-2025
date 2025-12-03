import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { lobby } from "./day-3.ts";
import { splitByNewLine } from "../utils/utils.ts"

describe("Day 3", () => { 
  const data = splitByNewLine("day-3/test-data.txt");
  test("Part One", () => {
    strictEqual(lobby(data), 357);
  });
});
