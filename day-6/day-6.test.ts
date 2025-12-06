import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { trashCompactor } from "./day-6.ts";
import { splitByNewLine } from "../utils/utils.ts";

describe("Day 6", () => {
  const testData = splitByNewLine("day-6/test-data.txt");
  const data = splitByNewLine("day-6/data.txt");
  describe("Test Data", () => {
    test("Part One - test data", () => {
      strictEqual(trashCompactor(testData), 4277556);
    });
    test("Part Two - test data", () => {
      strictEqual(trashCompactor(testData, true), 3263827);
    });
  });

  describe("Input Data", () => {
    test("Part One - input data", () => {
      strictEqual(trashCompactor(data), 4405895212738);
    });
  });
});