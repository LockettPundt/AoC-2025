import test, { describe } from "node:test";
import { strictEqual } from "node:assert";
import { cafeteria } from "./day-5.ts";
import { splitByRegex } from "../utils/utils.ts"

describe("Day 5", () => { 
  const data = splitByRegex("day-5/test-data.txt", new RegExp(/\n\n/g));
  test("Part One", () => {
    strictEqual(cafeteria(data), 3); // * 558
  });

  test("Part Two", () => {
    strictEqual(cafeteria(data), 14);
  });
});