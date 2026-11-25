// Fridge Roast: One Line, Biggest Laugh
// make.fun competition u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes one original roast line (<=200 chars, single line, no trailing newline)
// to /output/entry.txt. Node 22 stdlib only. Deterministic.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My $3,000 smart fridge photographs my leftovers, then shows me ads for the food I already own.";

// Gate: UTF-8 text of 1 to 200 characters, not only whitespace, single line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and confirm the written bytes are exactly the validated line.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("written entry does not match the validated line");
}
