import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { cafeteria } from "./day-5.ts";
import { splitByRegex } from "../utils/utils.ts";

describe("Day 5", () => {
  const testData = splitByRegex("day-5/test-data.txt", new RegExp(/\n\n/g));
  const data = splitByRegex("day-5/data.txt", new RegExp(/\n\n/g));
  describe("Test Data", () => {
    test("Part One - test data", () => {
      strictEqual(cafeteria(testData), 3);
    });

    test("Part Two - test data", () => {
      strictEqual(cafeteria(testData, true), 14);
    });
  });

  describe("Puzzle Input", () => {
    test("Part One - puzzle input", () => {
      strictEqual(cafeteria(data), 558);
    });

    test("Part Two - puzzle input", () => {
      strictEqual(cafeteria(data, true), 344813017450467); 
    });
  });
});