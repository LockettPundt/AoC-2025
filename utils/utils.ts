import { readFileSync } from "fs";

export const splitByNewLine = (filePath: string): string[] => {
  const data = readFileSync(filePath, "utf-8");
  return data.split(/\n/g);
};
export const splitByRegex = (filePath: string, regex: RegExp): string[] => {
  const data = readFileSync(filePath, "utf-8");
  return data.match(regex) ?? [];
};