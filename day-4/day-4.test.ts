import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { printingDepartment } from "./day-4.ts";
import { splitByNewLine } from "../utils/utils.ts"

describe("Day 4", () => { 
  const data = splitByNewLine("day-4/test-data.txt");
  test("Part One", () => {
    strictEqual(printingDepartment(data), 13); // * 1395
  });
});
